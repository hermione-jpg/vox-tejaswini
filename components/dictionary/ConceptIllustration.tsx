"use client";

import { motion } from "framer-motion";

// Lightweight custom pipeline diagrams per concept family, built from
// the same node/arrow language so the whole glossary feels like one system.
const pipelineMap: Record<string, string[]> = {
  stt: ["Voice", "Audio signal", "Text"],
  asr: ["Voice", "Acoustic model", "Language model", "Text"],
  tts: ["Text", "Voice model", "Audio"],
  telephony: ["Caller", "Network", "Callee"],
  pstn: ["Phone", "Switch", "Phone"],
  voip: ["App", "Internet packets", "App"],
  "sip-trunking": ["Cloud system", "SIP trunk", "PSTN"],
  "audio-codecs": ["Raw audio", "Encode", "Transmit", "Decode"],
  dtmf: ["Keypress", "Tone", "System reads digit"],
  latency: ["User speaks", "Processing", "Response heard"],
  "sample-rate": ["Analog wave", "Samples / sec", "Digital audio"],
  "voice-cloning": ["Voice samples", "Voice model", "New speech"],
  rag: ["Question", "Retrieve docs", "Generate answer"],
  "tool-calling": ["Intent", "Function call", "Real action"],
  memory: ["Past turns", "Stored context", "Informed reply"],
  "conversational-ai": ["Listen", "Understand", "Respond"],
  interruptions: ["AI speaking", "User cuts in", "AI yields"],
  "wake-word": ["Ambient audio", "Wake phrase match", "Full listening"],
  endpointing: ["User speaking", "Silence detected", "Turn ends"],
  "turn-taking": ["User turn", "System turn", "User turn"],
};

export function ConceptIllustration({ conceptId }: { conceptId: string }) {
  const nodes = pipelineMap[conceptId] ?? ["Input", "Process", "Output"];

  return (
    <div className="w-full rounded-2xl border hairline bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        {nodes.map((node, i) => (
          <div key={node} className="flex items-center gap-2 flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.12, duration: 0.35 }}
              className="flex-1 rounded-xl border hairline bg-paper px-3 py-3 text-center"
            >
              <span className="text-xs sm:text-sm font-medium text-ink leading-snug">
                {node}
              </span>
            </motion.div>
            {i < nodes.length - 1 && (
              <motion.svg
                width="20"
                height="10"
                viewBox="0 0 20 10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.12 + 0.15 }}
                className="shrink-0"
              >
                <line x1="0" y1="5" x2="14" y2="5" stroke="#6C9BB9" strokeWidth="1.5" />
                <path d="M14 1 L19 5 L14 9" fill="none" stroke="#6C9BB9" strokeWidth="1.5" />
              </motion.svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
