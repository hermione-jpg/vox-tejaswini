"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useVoice } from "@/lib/useVoice";
import { hosts, hostList, HostId, ConversationTurn } from "@/lib/twoHostPersonas";
import { speakTurn, stopAllSpeech } from "@/lib/twoVoiceSpeak";

type TranscriptTurn = { speaker: HostId | "you"; text: string };
type Phase = "idle" | "playing" | "paused";

export function TalkAboutThisPage({ slug }: { slug: string }) {
  const [expanded, setExpanded] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");
  const [activeHost, setActiveHost] = useState<HostId | null>(null);
  const [messages, setMessages] = useState<TranscriptTurn[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [interjectText, setInterjectText] = useState("");

  const scrollRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<TranscriptTurn[]>([]);
  const cancelledRef = useRef(false);

  // Only the mic/listening half of useVoice is used here — playback uses the
  // separate two-voice utility, since useVoice.speak() is a single fixed voice.
  const { supported, isListening, interimTranscript, startListening, stopListening } = useVoice({
    onFinalTranscript: (text) => handleInterject(text),
  });

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  function appendTurns(turns: ConversationTurn[]) {
    const asTranscript: TranscriptTurn[] = turns.map((t) => ({ speaker: t.speaker, text: t.text }));
    historyRef.current = [...historyRef.current, ...asTranscript];
    setMessages(historyRef.current);
  }

  async function play(turns: ConversationTurn[]) {
    cancelledRef.current = false;
    setPhase("playing");
    // Play turns one at a time so the transcript fills in progressively, matching speech.
    for (const turn of turns) {
      if (cancelledRef.current) break;
      appendTurns([turn]);
      setActiveHost(turn.speaker);
      await speakTurn(turn.speaker, turn.text);
    }
    setActiveHost(null);
    if (!cancelledRef.current) setPhase("paused");
  }

  async function fetchAndPlay(payload: object) {
    setLoading(true);
    setErrorMsg(null);
    try {
      const res = await fetch("/api/case-study-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      await play(data.turns);
    } catch (err: any) {
      setErrorMsg(err.message || "Vox couldn't respond. Check the Gemini API key setup.");
      setPhase("paused");
    } finally {
      setLoading(false);
    }
  }

  function handleOpen() {
    setExpanded(true);
    if (historyRef.current.length === 0) {
      fetchAndPlay({ mode: "opening", slug });
    }
  }

  function handleClose() {
    cancelledRef.current = true;
    stopAllSpeech();
    stopListening();
    setExpanded(false);
    setPhase("idle");
    setActiveHost(null);
  }

  function handleContinue() {
    fetchAndPlay({
      mode: "continue",
      slug,
      history: historyRef.current.filter((m) => m.speaker !== "you"),
    });
  }

  function handleInterject(text: string) {
    if (!text.trim()) return;
    cancelledRef.current = true;
    stopAllSpeech();
    const youTurn: TranscriptTurn = { speaker: "you", text };
    historyRef.current = [...historyRef.current, youTurn];
    setMessages(historyRef.current);
    setInterjectText("");
    fetchAndPlay({
      mode: "interject",
      slug,
      question: text,
      history: historyRef.current.filter((m) => m.speaker !== "you"),
    });
  }

  function toggleMic() {
    if (isListening) {
      stopListening();
    } else {
      cancelledRef.current = true;
      stopAllSpeech();
      startListening();
    }
  }

  return (
    <div className="my-6">
      <AnimatePresence mode="wait">
        {!expanded ? (
          <motion.button
            key="trigger"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOpen}
            className="inline-flex items-center gap-2 rounded-full border hairline bg-white px-4 py-2 text-[13px] font-medium text-ink-soft shadow-sm transition-colors hover:text-accent hover:border-accent/40"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Talk about this page
          </motion.button>
        ) : (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="rounded-2xl border hairline bg-white shadow-sm px-5 py-5 max-w-md"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[13px] font-medium text-ink-soft">Two hosts, discussing this page</span>
              <button onClick={handleClose} className="text-[12px] text-ink-faint hover:text-ink transition-colors">
                Close
              </button>
            </div>

            {/* Host indicators */}
            <div className="flex items-center justify-center gap-8 mb-4">
              {hostList.map((h) => (
                <div key={h.id} className="flex flex-col items-center gap-1.5">
                  <div
                    className="relative flex items-center justify-center rounded-full transition-transform duration-300"
                    style={{
                      width: 44,
                      height: 44,
                      background: h.color,
                      transform: activeHost === h.id ? "scale(1.18)" : "scale(1)",
                      boxShadow:
                        activeHost === h.id ? `0 0 0 4px ${h.color}33, 0 4px 14px rgba(0,0,0,.2)` : "none",
                    }}
                  >
                    {activeHost === h.id && (
                      <span
                        className="absolute inset-0 rounded-full animate-ping"
                        style={{ background: h.color, opacity: 0.4 }}
                      />
                    )}
                  </div>
                  <span
                    className="text-[11px] font-medium"
                    style={{ color: activeHost === h.id ? h.color : undefined }}
                  >
                    {h.name}
                  </span>
                </div>
              ))}
            </div>

            {loading && (
              <p className="text-center text-[12px] text-ink-faint font-mono mb-3">thinking…</p>
            )}

            {messages.length > 0 && (
              <div ref={scrollRef} className="max-h-56 overflow-y-auto space-y-3 mb-4 pr-1">
                {messages.map((m, i) =>
                  m.speaker === "you" ? (
                    <div key={i} className="flex justify-end">
                      <div className="max-w-[85%] rounded-xl px-3 py-2 text-[13px] leading-5 bg-accent text-white rounded-br-sm">
                        {m.text}
                      </div>
                    </div>
                  ) : (
                    <div key={i} className="flex justify-start">
                      <div className="max-w-[85%] rounded-xl px-3 py-2 text-[13px] leading-5 bg-paper text-ink rounded-bl-sm">
                        <span className="block text-[10px] font-semibold mb-0.5" style={{ color: hosts[m.speaker].color }}>
                          {hosts[m.speaker].name.toUpperCase()}
                        </span>
                        {m.text}
                      </div>
                    </div>
                  )
                )}
              </div>
            )}

            {interimTranscript && (
              <p className="text-[12px] text-ink-soft italic text-center mb-2">"{interimTranscript}"</p>
            )}

            <div className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={interjectText}
                onChange={(e) => setInterjectText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleInterject(interjectText)}
                placeholder="Ask a question or redirect…"
                className="flex-1 rounded-full border hairline bg-paper px-3 py-2 text-[13px] outline-none focus:border-accent/50"
                disabled={loading}
              />
              {supported && (
                <button
                  onClick={toggleMic}
                  disabled={loading}
                  className={`h-9 w-9 shrink-0 rounded-full border hairline flex items-center justify-center text-[14px] transition-colors ${
                    isListening ? "bg-red-500 border-red-500 text-white" : "bg-white text-ink-soft"
                  }`}
                  title="Speak your interjection"
                >
                  🎤
                </button>
              )}
            </div>

            <div className="flex items-center justify-center gap-2">
              <button
                onClick={handleContinue}
                disabled={loading || phase === "playing"}
                className="text-[12px] font-medium text-accent hover:opacity-80 disabled:opacity-40 transition-opacity"
              >
                Continue the conversation →
              </button>
            </div>

            {!supported && (
              <p className="mt-3 text-[11px] text-ink-faint text-center">
                Voice input isn't supported in this browser — try Chrome or Edge. Typing still works.
              </p>
            )}
            {errorMsg && (
              <p className="mt-3 text-[12px] text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {errorMsg}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
