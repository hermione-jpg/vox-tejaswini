"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VoiceOrb, OrbState } from "@/components/dictionary/VoiceOrb";
import { SuggestionChips } from "@/components/dictionary/SuggestionChips";
import { RelatedConcepts } from "@/components/dictionary/RelatedConcepts";
import { ConceptIllustration } from "@/components/dictionary/ConceptIllustration";
import { useVoice } from "@/lib/useVoice";
import { getConcept } from "@/lib/concepts";

// ─────────────────────────────────────────────────────────────
// GLOSSARY / VOX DICTIONARY
// A voice-first, conversational glossary. Ask a question out loud
// (or type one) and Vox answers, grounded in the 20-concept glossary
// defined in lib/concepts.ts, via the Gemini API route at
// app/api/chat/route.ts.
//
// Requires a GEMINI_API_KEY environment variable — see the "Voice
// Dictionary setup" section of the project README.
// ─────────────────────────────────────────────────────────────

type Message = {
  id: string;
  role: "user" | "assistant";
  text: string;
  conceptId?: string | null;
  relatedIds?: string[];
};

export default function GlossaryPage() {
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [orbState, setOrbState] = useState<OrbState>("idle");
  const [inputValue, setInputValue] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { supported, isListening, interimTranscript, startListening, stopListening, speak } =
    useVoice({
      onFinalTranscript: (text) => {
        handleAsk(text);
      },
    });

  useEffect(() => {
    if (isListening) setOrbState("listening");
    else if (orbState === "listening") setOrbState("idle");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isListening]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, orbState]);

  async function handleAsk(text: string) {
    if (!text.trim()) return;
    setErrorMsg(null);
    if (!started) setStarted(true);

    const userMsg: Message = { id: crypto.randomUUID(), role: "user", text };
    const history = [...messages, userMsg];
    setMessages(history);
    setInputValue("");
    setOrbState("thinking");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: history.map((m) => ({ role: m.role, content: m.text })),
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      const assistantMsg: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        text: data.speech,
        conceptId: data.primaryConceptId,
        relatedIds: data.relatedIds || [],
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setOrbState("speaking");
      speak(data.speech, () => setOrbState("idle"));
    } catch (err: any) {
      setErrorMsg(err.message || "Vox couldn't respond. Check the Gemini API key setup.");
      setOrbState("idle");
    }
  }

  function handleOrbClick() {
    if (isListening) {
      stopListening();
    } else {
      setStarted(true);
      startListening();
    }
  }

  return (
    <div className="min-h-[80vh] flex flex-col">
      <AnimatePresence mode="wait">
        {!started ? (
          <motion.section
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col items-center justify-center gap-10 px-6 py-20 text-center"
          >
            <div className="space-y-3">
              <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase">
                Vox Dictionary
              </p>
              <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tightest text-ink max-w-xl">
                Learn Voice AI by talking to it.
              </h1>
              <p className="text-ink-soft max-w-md mx-auto">
                Ask a question out loud, or type one below. Vox explains concepts the way a
                sharp colleague would — short, clear, and always ready to go deeper.
              </p>
            </div>

            <VoiceOrb state={orbState} onClick={handleOrbClick} size={200} />

            <SuggestionChips onSelect={handleAsk} />

            <TextInputBar
              value={inputValue}
              onChange={setInputValue}
              onSubmit={handleAsk}
              placeholder="Type instead of speaking…"
            />

            {!supported && (
              <p className="text-xs text-ink-faint max-w-sm">
                Voice input isn't supported in this browser. Try Chrome, or type your question
                above.
              </p>
            )}

            {errorMsg && (
              <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3 max-w-sm">
                {errorMsg}
              </p>
            )}
          </motion.section>
        ) : (
          <motion.section
            key="conversation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-1 flex flex-col max-w-2xl mx-auto w-full px-4 sm:px-6"
          >
            <header className="flex items-center justify-between py-5">
              <span className="font-display font-semibold text-lg text-ink">Vox</span>
              <button
                onClick={() => {
                  setStarted(false);
                  setMessages([]);
                  setOrbState("idle");
                }}
                className="text-sm text-ink-soft hover:text-ink transition-colors"
              >
                New conversation
              </button>
            </header>

            <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-6 pb-6">
              {messages.map((m) => (
                <MessageBubble key={m.id} message={m} onSelectRelated={handleAsk} />
              ))}

              {orbState === "thinking" && (
                <div className="flex justify-start">
                  <div className="rounded-2xl bg-white border hairline px-4 py-3 shadow-sm">
                    <VoiceOrb state="thinking" size={48} />
                  </div>
                </div>
              )}

              {errorMsg && (
                <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  {errorMsg}
                </p>
              )}
            </div>

            <div className="sticky bottom-0 bg-paper pt-3 pb-6 space-y-3">
              <div className="flex items-center justify-center">
                <VoiceOrb state={orbState} onClick={handleOrbClick} size={96} />
              </div>
              {interimTranscript && (
                <p className="text-center text-sm text-ink-soft italic">
                  "{interimTranscript}"
                </p>
              )}
              <TextInputBar
                value={inputValue}
                onChange={setInputValue}
                onSubmit={handleAsk}
                placeholder="Ask a follow-up, or type instead of speaking…"
              />
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}

function MessageBubble({
  message,
  onSelectRelated,
}: {
  message: Message;
  onSelectRelated: (text: string) => void;
}) {
  const isUser = message.role === "user";
  const concept = message.conceptId ? getConcept(message.conceptId) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div className={`max-w-[85%] space-y-3 ${isUser ? "items-end" : "items-start"} flex flex-col`}>
        <div
          className={`rounded-2xl px-4 py-3 shadow-sm border ${
            isUser
              ? "bg-accent text-white border-accent rounded-br-sm"
              : "bg-white text-ink hairline rounded-bl-sm"
          }`}
        >
          <HighlightedText text={message.text} keyword={concept?.name} isUser={isUser} />
        </div>

        {!isUser && concept && (
          <div className="w-full space-y-3 animate-fadeUp">
            <ConceptIllustration conceptId={concept.id} />
          </div>
        )}

        {!isUser && message.relatedIds && message.relatedIds.length > 0 && (
          <RelatedConcepts ids={message.relatedIds} onSelect={onSelectRelated} />
        )}
      </div>
    </motion.div>
  );
}

function HighlightedText({
  text,
  keyword,
  isUser,
}: {
  text: string;
  keyword?: string;
  isUser: boolean;
}) {
  if (!keyword) return <p className="leading-relaxed">{text}</p>;
  const parts = text.split(new RegExp(`(${escapeRegExp(keyword)})`, "gi"));
  return (
    <p className="leading-relaxed">
      {parts.map((part, i) =>
        part.toLowerCase() === keyword.toLowerCase() ? (
          <span key={i} className={`font-semibold ${isUser ? "text-white" : "text-accent"}`}>
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </p>
  );
}

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function TextInputBar({
  value,
  onChange,
  onSubmit,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  onSubmit: (v: string) => void;
  placeholder: string;
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(value);
      }}
      className="w-full max-w-lg mx-auto flex items-center gap-2 rounded-full border hairline bg-white px-4 py-2.5 shadow-sm"
    >
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none text-sm text-ink placeholder:text-ink-faint"
      />
      <button
        type="submit"
        aria-label="Send"
        className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white shrink-0 hover:opacity-90 transition-opacity"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 19V5M5 12l7-7 7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  );
}
