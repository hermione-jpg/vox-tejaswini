// ─────────────────────────────────────────────────────────────
// FUNDAMENTALS — EDITABLE CONTENT
// Each lesson becomes a page at /fundamentals/[slug]. Lessons are
// grouped into sections for the sidebar nav (Foundations,
// Real-Time Conversations, ...). Edit freely — add new lessons,
// reorder, or change groups.
// ─────────────────────────────────────────────────────────────

import { Block } from "./case-studies";

export type Lesson = {
  slug: string;
  group: string;
  navTitle: string;
  title: string;
  kicker: string; // the bold one-line summary under the H1
  body: Block[];
  next?: { slug: string; title: string };
};

export const lessons: Lesson[] = [
  {
    slug: "1-what-is-a-conversation",
    group: "Foundations",
    navTitle: "What is a Conversation?",
    title: "What is a Conversation?",
    kicker: "A conversation is two minds trying to understand each other.",
    next: { slug: "2-how-does-ai-listen", title: "How does AI listen?" },
    body: [
      {
        type: "paragraph",
        text: "At first, that sounds simple. But underneath that simple interaction, your brain is performing one of the most complex tasks humans can do. Every conversation has four steps:",
      },
      {
        type: "list",
        items: [
          "Someone has an intention.",
          "They express it.",
          "Someone understands it.",
          "Someone responds.",
        ],
      },
      {
        type: "paragraph",
        text: "Everything in conversational AI is built on these four steps.",
      },
      { type: "heading", text: "Humans communicate in many ways" },
      {
        type: "paragraph",
        text: "Speaking is only one form of communication. We also communicate through:",
      },
      {
        type: "list",
        items: [
          "Speech",
          "Listening",
          "Facial expressions",
          "Gestures",
          "Writing",
          "Reading",
          "Touch",
          "Emotions",
          "Silence",
        ],
      },
      {
        type: "paragraph",
        text: "Humans naturally combine many of these forms at the same time.",
      },
      { type: "heading", text: "How humans communicate with computers" },
      {
        type: "paragraph",
        text: "For decades, digital interfaces relied mainly on reading, writing, touch, and visual feedback. We clicked buttons, filled forms, typed on keyboards, and navigated screens.",
      },
      {
        type: "paragraph",
        text: "Today, computers are beginning to understand more natural forms of communication:",
      },
      {
        type: "list",
        items: [
          "Speaking",
          "Listening",
          "Emotion (to a limited extent)",
          "Pauses and silence",
          "Interruptions",
        ],
      },
      {
        type: "paragraph",
        text: "This shift is what makes conversational and voice AI possible.",
      },
      { type: "heading", text: "What happens when someone speaks?" },
      {
        type: "paragraph",
        text: "To understand conversational AI, we first need to understand how humans communicate. Research on conversational turn-taking has found that the average gap between one person finishing a sentence and another beginning to speak is around 200 milliseconds (0.2 seconds).",
      },
      {
        type: "paragraph",
        text: "This is so fast that your brain begins planning a response before the other person has finished speaking.",
      },
      {
        type: "paragraph",
        text: "This process feels effortless, but it involves multiple brain systems working together almost simultaneously:",
      },
      {
        type: "list",
        items: [
          "Detect sound.",
          "Recognize speech.",
          "Identify words.",
          "Understand the meaning.",
          "Connect it with context.",
          "Decide what to do.",
          "Plan a response.",
          "Speak.",
        ],
      },
      {
        type: "paragraph",
        text: "All within a fraction of a second.",
      },
      {
        type: "quote",
        text: "Words aren't the whole conversation.",
      },
      {
        type: "paragraph",
        text: "Your brain also interprets tone, pitch, volume, speaking speed, pauses, emphasis, facial expressions, and emotion. These signals help us understand confidence, uncertainty, excitement, sarcasm, frustration, and many other emotions that words alone cannot convey.",
      },
      {
        type: "paragraph",
        text: "This is one of the reasons conversations between humans feel natural, while conversations with AI can still feel mechanical.",
      },
    ],
  },
  {
    slug: "2-how-does-ai-listen",
    group: "Foundations",
    navTitle: "How does AI listen?",
    title: "How does AI listen?",
    kicker: "Edit this one-line summary for the lesson.",
    next: { slug: "3-what-is-stt-and-tts", title: "What is STT and TTS?" },
    body: [
      { type: "paragraph", text: "Replace with your lesson content." },
      { type: "heading", text: "Edit this heading" },
      { type: "paragraph", text: "Replace with your lesson content." },
    ],
  },
  {
    slug: "3-what-is-stt-and-tts",
    group: "Foundations",
    navTitle: "What is STT and TTS?",
    title: "What is STT and TTS?",
    kicker: "Edit this one-line summary for the lesson.",
    next: {
      slug: "4-how-does-ai-detect-voice",
      title: "How does AI detect Voice?",
    },
    body: [
      { type: "paragraph", text: "Replace with your lesson content." },
      { type: "heading", text: "Edit this heading" },
      { type: "paragraph", text: "Replace with your lesson content." },
    ],
  },
  {
    slug: "4-how-does-ai-detect-voice",
    group: "Foundations",
    navTitle: "How does AI detect Voice?",
    title: "How does AI detect Voice?",
    kicker: "Edit this one-line summary for the lesson.",
    next: {
      slug: "5-how-does-ai-respond-so-quickly",
      title: "How does AI respond quickly?",
    },
    body: [
      { type: "paragraph", text: "Replace with your lesson content." },
      { type: "heading", text: "Edit this heading" },
      { type: "paragraph", text: "Replace with your lesson content." },
    ],
  },
  {
    slug: "5-how-does-ai-respond-so-quickly",
    group: "Foundations",
    navTitle: "How does AI respond quickly?",
    title: "How does AI respond so quickly?",
    kicker: "Edit this one-line summary for the lesson.",
    next: { slug: "6-what-is-turn-taking", title: "What is Turn-Taking?" },
    body: [
      { type: "paragraph", text: "Replace with your lesson content." },
      { type: "heading", text: "Edit this heading" },
      { type: "paragraph", text: "Replace with your lesson content." },
    ],
  },
  {
    slug: "6-what-is-turn-taking",
    group: "Real-Time Conversations",
    navTitle: "What is Turn-Taking?",
    title: "What is Turn-Taking?",
    kicker: "Edit this one-line summary for the lesson.",
    next: {
      slug: "7-how-ai-handles-interruptions",
      title: "How AI Handles Interruptions?",
    },
    body: [
      { type: "paragraph", text: "Replace with your lesson content." },
      { type: "heading", text: "Edit this heading" },
      { type: "paragraph", text: "Replace with your lesson content." },
    ],
  },
  {
    slug: "7-how-ai-handles-interruptions",
    group: "Real-Time Conversations",
    navTitle: "How AI Handles Interruptions?",
    title: "How AI Handles Interruptions?",
    kicker: "Edit this one-line summary for the lesson.",
    next: { slug: "8-how-does-ai-remember", title: "How does AI remember?" },
    body: [
      { type: "paragraph", text: "Replace with your lesson content." },
      { type: "heading", text: "Edit this heading" },
      { type: "paragraph", text: "Replace with your lesson content." },
    ],
  },
  {
    slug: "8-how-does-ai-remember",
    group: "Real-Time Conversations",
    navTitle: "How does AI remember?",
    title: "How does AI remember?",
    kicker: "Edit this one-line summary for the lesson.",
    next: {
      slug: "9-how-does-ai-take-action",
      title: "How Does AI Take Action?",
    },
    body: [
      { type: "paragraph", text: "Replace with your lesson content." },
      { type: "heading", text: "Edit this heading" },
      { type: "paragraph", text: "Replace with your lesson content." },
    ],
  },
  {
    slug: "9-how-does-ai-take-action",
    group: "Real-Time Conversations",
    navTitle: "How Does AI Take Action?",
    title: "How Does AI Take Action?",
    kicker: "Edit this one-line summary for the lesson.",
    body: [
      { type: "paragraph", text: "Replace with your lesson content." },
      { type: "heading", text: "Edit this heading" },
      { type: "paragraph", text: "Replace with your lesson content." },
    ],
  },
];

export function getLesson(slug: string) {
  return lessons.find((l) => l.slug === slug);
}

export const lessonGroups = Array.from(new Set(lessons.map((l) => l.group)));
