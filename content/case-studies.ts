// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// CASE STUDIES â€” EDITABLE CONTENT
// Add, remove, or edit entries here. Each object becomes a page
// at /case-study/[slug]. body is a simple array of blocks so
// non-developers can edit copy without touching layout code.
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export type Block =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "image"; src: string; alt: string }
  | { type: "callout"; text: string };
export type CaseStudy = {
slug: string;
title: string;
summary: string;
body: Block[];
};
export const caseStudies: CaseStudy[] = [
{
slug: "voice-personalities",
title: "Designing Voice Personalities",
summary:
"How tone, pacing, and word choice combine to give a voice agent a consistent, recognizable character.",
body: [
{
type: "paragraph",
text: "Edit this paragraph to introduce the case study. Describe the problem you were solving and who it was for.",
},
{
type: "heading",
text: "The Challenge",
},
{
type: "paragraph",
text: "Replace this text with the specific challenge your voice agent faced â€” for example, sounding too robotic, inconsistent across sessions, or mismatched to the brand.",
},
{
type: "list",
items: [
"Edit list item one",
"Edit list item two",
"Edit list item three",
],
},
{
type: "heading",
text: "The Approach",
},
{
type: "paragraph",
text: "Describe the design principles, tokens, or rules you established to give the voice a personality â€” pacing, warmth, formality, humor, etc.",
},
{
type: "quote",
text: "Add a pull-quote here â€” a finding, a piece of user feedback, or a guiding principle.",
attribution: "Attribution / role",
},
{
type: "heading",
text: "Outcome",
},
{
type: "paragraph",
text: "Summarize results, metrics, or what changed after the redesign.",
},
],
},
{
slug: "vocal-performance",
title: "Designing Vocal Performance",
summary:
"Exploring how timing, breath, and micro-pauses shape how trustworthy and natural a voice feels.",
body: [
{
type: "paragraph",
text: "Edit this paragraph to introduce the case study.",
},
{ type: "heading", text: "The Challenge" },
{ type: "paragraph", text: "Describe the challenge here." },
{ type: "heading", text: "The Approach" },
{ type: "paragraph", text: "Describe your approach here." },
{ type: "heading", text: "Outcome" },
{ type: "paragraph", text: "Describe the outcome here." },
],
},
{
slug: "trust-layer",
title: "Designing Trust Layers",
summary:
"Patterns for signaling confidence, uncertainty, and hand-off moments so users always know what the AI can and can't do.",
body: [
{
type: "paragraph",
text: "Edit this paragraph to introduce the case study.",
},
{ type: "heading", text: "The Challenge" },
{ type: "paragraph", text: "Describe the challenge here." },
{ type: "heading", text: "The Approach" },
{ type: "paragraph", text: "Describe your approach here." },
{ type: "heading", text: "Outcome" },
{ type: "paragraph", text: "Describe the outcome here." },
],
},
];
export function getCaseStudy(slug: string) {
return caseStudies.find((c) => c.slug === slug);
}

