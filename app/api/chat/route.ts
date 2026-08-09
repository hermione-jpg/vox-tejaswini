import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { buildSystemPrompt } from "@/lib/systemPrompt";
import { concepts, getConcept } from "@/lib/concepts";

export const runtime = "nodejs";

type ChatMessage = { role: "user" | "assistant"; content: string };
const VALID_IDS = new Set(concepts.map((c) => c.id));

function sanitize(parsed: any) {
  const primaryConceptId =
    parsed?.primaryConceptId && VALID_IDS.has(parsed.primaryConceptId)
      ? parsed.primaryConceptId
      : null;

  let relatedIds: string[] = Array.isArray(parsed?.relatedIds)
    ? parsed.relatedIds.filter((id: string) => VALID_IDS.has(id) && id !== primaryConceptId)
    : [];

  // If Gemini gave us nothing usable but we do know the primary concept,
  // fall back to that concept's own curated related list so chips are
  // never empty for a real glossary term.
  if (relatedIds.length === 0 && primaryConceptId) {
    relatedIds = getConcept(primaryConceptId)?.related ?? [];
  }

  return {
    speech: typeof parsed?.speech === "string" && parsed.speech.trim() ? parsed.speech : "Here's what I found.",
    primaryConceptId,
    relatedIds: relatedIds.slice(0, 4),
    stage: parsed?.stage ?? "general",
  };
}

export async function POST(req: NextRequest) {
  let message = "";
  let history: ChatMessage[] = [];

  try {
    const body = await req.json();
    message = body.message ?? "";
    history = Array.isArray(body.history) ? body.history : [];
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!message.trim()) {
    return NextResponse.json({ error: "Empty message." }, { status: 400 });
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing GEMINI_API_KEY. Add it to .env.local (see README)." },
        { status: 500 }
      );
    }

    // Current, actively-maintained SDK — correctly supports both legacy
    // "AIzaSy" standard keys and the newer "AQ." auth keys from AI Studio.
    const ai = new GoogleGenAI({ apiKey });

    const contents = [
      ...history.map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      })),
      { role: "user", parts: [{ text: message }] },
    ];

    const result = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents,
      config: {
        systemInstruction: buildSystemPrompt(),
        responseMimeType: "application/json",
        temperature: 0.6,
      },
    });

    const text = result.text ?? "";

    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      parsed = { speech: text.replace(/```json|```/g, "").trim() };
    }

    return NextResponse.json(sanitize(parsed));
  } catch (err: any) {
    console.error("Vox chat error:", err);

    // Guaranteed fallback: if the question is clearly about one of our
    // 20 known concepts, answer from the glossary directly instead of
    // failing outright, even if Gemini itself is unreachable.
    const lower = message.toLowerCase();
    const match = concepts.find(
      (c) =>
        lower.includes(c.name.toLowerCase()) ||
        lower.includes(c.id.replace(/-/g, " "))
    );
    if (match) {
      return NextResponse.json({
        speech: match.definition,
        primaryConceptId: match.id,
        relatedIds: match.related.slice(0, 4),
        stage: "definition",
      });
    }

    return NextResponse.json(
      { error: "Vox had trouble thinking that through. Please try again." },
      { status: 500 }
    );
  }
}
