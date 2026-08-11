import matter from "gray-matter";

export function cleanMdxForPrompt(rawSource: string): { title: string; body: string } {
  const { data, content } = matter(rawSource);
  const body = content
    .replace(/<video[\s\S]*?\/>/g, "")
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/^>\s?/gm, "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/^---$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  return { title: data.title || "This page", body };
}

const SHARED_RULES = `
This should feel like a conversational version of NotebookLM's Audio Overview — NOT a generic chatbot, and NOT the article being read aloud.

TWO-HOST CONVERSATION RULES — apply all of them:

1. SPOKEN STRUCTURE — make structure audible, since there's no visual heading to lean on. Use real signposting language between ideas: "There are a few things going on here — let's start with the first," or "So far we've covered X. Now here's where it gets interesting." Never jump between ideas silently.

2. CONVERSATIONAL ROLES — Explainer breaks the idea down, introduces concepts, offers simple examples. Challenger questions the argument, asks for clarification, or pushes back on something Explainer just said. They must actually respond to each other's specific words, not deliver parallel monologues. Let them banter a little — a quick aside, a bit of dry humor, a genuine reaction — not just trade information.

3. INFORMATION CHUNKS — each turn is SHORT: 1-3 sentences, one idea at a time. Never stack multiple new ideas in one turn. Give each idea room to land before moving to the next.

4. REINFORCE IDEAS — spoken information can't be scrolled back to, so callback earlier points explicitly: "Remember what we said about X a minute ago — this connects to that," or a short recap line before introducing something new that builds on it.

5. PERSONALITY — both hosts are curious and slightly playful, genuinely interested in the material, never robotic or stiff. Occasionally ask a real follow-up question back toward the listener, the way a curious person would in conversation, not just delivering information one-way.

6. NEVER LECTURE, NEVER JUST READ THE ARTICLE — say things in your own words, conversationally, not the article's own sentences. This is the single most important rule. For example:
   - WRONG (reads like the article): "Voice learning is a medium that enables users to interact with information through spoken dialogue."
   - RIGHT (conversational): "Here's the interesting part: when the screen disappears, you lose something you probably don't notice — you lose the ability to look back."
   Every turn should sound like the second example, never the first.

7. FOLLOW THE LISTENER — if they interrupt or ask something like "why does that matter for learning?", answer it directly and naturally using the page's ideas, in your own words, then let the conversation continue from wherever they took it. Don't try to drag it back to a script.

Never invent anything beyond what's in the page content below. If a listener asks something the page doesn't cover, say so honestly rather than making it up.
`;

export function buildOpeningPrompt(rawSource: string) {
  const { title, body } = cleanMdxForPrompt(rawSource);
  return `You are generating the OPENING segment of a two-host spoken conversation about a page called "${title}" — modeled on the page's own description of how NotebookLM's Audio Overviews work: one host introduces an idea, the other expands, questions, or clarifies it.

THE PAGE CONTENT (everything you know — do not go beyond this):
${body}
${SHARED_RULES}

Generate the OPENING segment: 7-9 turns covering the page's core idea and one or two of its most interesting supporting points — not the whole page, just enough for a natural first segment. End on a natural pause point, with the last turn briefly inviting the listener to jump in with a question or say "continue" to keep going.

Respond ONLY with a JSON array, no other text: [{"speaker":"explainer","text":"..."},{"speaker":"challenger","text":"..."}, ...]`;
}

export function buildContinuePrompt(rawSource: string, historyText: string) {
  const { title, body } = cleanMdxForPrompt(rawSource);
  return `You are continuing a two-host spoken conversation about a page called "${title}".

THE PAGE CONTENT (everything you know — do not go beyond this):
${body}

CONVERSATION SO FAR:
${historyText}
${SHARED_RULES}

Generate the NEXT segment: 5-8 turns, moving into ideas from the page not yet discussed above. Open with a brief callback to something already covered (Reinforce Ideas rule) before introducing the new material. End on a natural pause point inviting the listener in again.

Respond ONLY with a JSON array, no other text: [{"speaker":"explainer","text":"..."}, ...]`;
}

export function buildInterjectPrompt(rawSource: string, historyText: string, question: string) {
  const { title, body } = cleanMdxForPrompt(rawSource);
  return `You are in the middle of a two-host spoken conversation about a page called "${title}", and the listener just interrupted.

THE PAGE CONTENT (everything you know — do not go beyond this):
${body}

CONVERSATION SO FAR:
${historyText}

THE LISTENER JUST SAID: "${question}"
${SHARED_RULES}

Generate a short response segment, 2-4 turns: one host briefly acknowledges the interruption, then whichever host (or both) is best suited answers it directly and conversationally, grounded only in the page content. If the page doesn't cover it, say so honestly rather than inventing an answer. End by briefly offering to continue the conversation.

Respond ONLY with a JSON array, no other text: [{"speaker":"...","text":"..."}, ...]`;
}
