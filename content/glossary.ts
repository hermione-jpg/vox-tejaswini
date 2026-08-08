// ─────────────────────────────────────────────────────────────
// GLOSSARY — EDITABLE
// Add or edit terms. Rendered alphabetically on /dict.
// ─────────────────────────────────────────────────────────────

export type Term = {
  term: string;
  definition: string;
};

export const glossary: Term[] = [
  {
    term: "Turn-taking",
    definition:
      "The process by which conversational partners alternate speaking roles, including timing the gaps and overlaps between turns.",
  },
  {
    term: "STT (Speech-to-Text)",
    definition:
      "The process of converting spoken audio into written text so a system can interpret it.",
  },
  {
    term: "TTS (Text-to-Speech)",
    definition:
      "The process of converting written text into spoken audio output.",
  },
  {
    term: "Latency",
    definition:
      "The delay between a user finishing speech and the system beginning its response.",
  },
  {
    term: "Barge-in",
    definition:
      "When a user interrupts an AI response mid-sentence, requiring the system to stop and listen.",
  },
  {
    term: "Endpointing",
    definition:
      "The process of detecting when a speaker has finished their turn so the system can respond.",
  },
  // Add more terms below in the same { term, definition } shape.
];
