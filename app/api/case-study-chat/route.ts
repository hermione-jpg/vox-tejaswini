import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { buildOpeningPrompt, buildContinuePrompt, buildInterjectPrompt } from "@/lib/caseStudyPrompt";
import { getCaseStudyContent } from "@/lib/getCaseStudies";

export const runtime = "nodejs";

type ConversationTurn = { speaker: "explainer" | "challenger"; text: string };

function extractJSON(text: string): ConversationTurn[] {
  const match = text.match(/\[[\s\S]*\]/);
  if (!match) throw new Error("No JSON array found in model response");
  const parsed = JSON.parse(match[0]);
  if (!Array.isArray(parsed)) throw new Error("Model response was not an array");
  return parsed.filter(
    (t) => (t.speaker === "explainer" || t.speaker === "challenger") && typeof t.text === "string"
  );
}

async function callGemini(prompt: string, apiKey: string) {
  const ai = new GoogleGenAI({ apiKey });
  const result = await ai.models.generateContent({
    model: "gemini-3.5-flash-lite",
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    config: { temperature: 0.85, responseMimeType: "application/json" },
  });
  return result.text ?? "";
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing GEMINI_API_KEY. Add it to .env.local (see README)." },
      { status: 500 }
    );
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { mode, slug, history, question } = body as {
    mode: "opening" | "continue" | "interject";
    slug: string;
    history?: { speaker: string; text: string }[];
    question?: string;
  };

  if (!slug) return NextResponse.json({ error: "Missing slug." }, { status: 400 });

  const rawSource = await getCaseStudyContent(slug);
  if (!rawSource) return NextResponse.json({ error: "Case study not found." }, { status: 404 });

  const historyText = (history || []).map((h) => `${h.speaker}: ${h.text}`).join("\n");

  let prompt: string;
  if (mode === "opening") {
    prompt = buildOpeningPrompt(rawSource);
  } else if (mode === "continue") {
    prompt = buildContinuePrompt(rawSource, historyText);
  } else if (mode === "interject") {
    if (!question) return NextResponse.json({ error: "Missing question." }, { status: 400 });
    prompt = buildInterjectPrompt(rawSource, historyText, question);
  } else {
    return NextResponse.json({ error: "Invalid mode." }, { status: 400 });
  }

  try {
    const raw = await callGemini(prompt, apiKey);
    const turns = extractJSON(raw);
    if (turns.length === 0) throw new Error("Model returned no usable turns.");
    return NextResponse.json({ turns });
  } catch (err) {
    console.error("Case study conversation error:", err);
    return NextResponse.json(
      { error: "Vox had trouble thinking that through. Please try again." },
      { status: 500 }
    );
  }
}
