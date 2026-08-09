// ─────────────────────────────────────────────────────────────
// FUNDAMENTALS — EDITABLE CONTENT
// ─────────────────────────────────────────────────────────────

import { Block } from "./case-studies";

export type Lesson = {
  slug: string;
  group: string;
  navTitle: string;
  title: string;
  kicker: string;
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
        text: "At first, that sounds simple. But underneath that simple interaction, your brain is performing one of the most complex tasks humans can do.",
      },
  
      {
        type: "paragraph",
        text: "Every conversation follows four steps:",
      },
  
      {
        type: "list",
        items: [
          "Someone has an intention",
          "They express it",
          "Someone understands it",
          "Someone responds",
        ],
      },
  
      {
        type: "paragraph",
        text: "Everything in conversational AI is built on these four steps.",
      },
  
      // ─────────────────────────
  
      {
        type: "heading",
        text: "Humans communicate in many ways",
      },
  
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
        text: "In real conversations, many of these happen at the same time.",
      },
  
      // ─────────────────────────
  
      {
        type: "heading",
        text: "How humans communicate with computers",
      },
  
      {
        type: "paragraph",
        text: "For decades, digital interfaces were limited to reading, writing, touch, and visual feedback.",
      },
  
      {
        type: "paragraph",
        text: "We clicked buttons, filled forms, typed on keyboards, and navigated screens.",
      },
  
      {
        type: "paragraph",
        text: "Now, computers are starting to understand more natural signals:",
      },
  
      {
        type: "list",
        items: [
          "Speaking",
          "Listening",
          "Pauses and silence",
          "Interruptions",
          "Emotion (to a limited extent)",
        ],
      },
  
      {
        type: "paragraph",
        text: "This shift is what makes conversational and voice AI possible.",
      },
  
      // ─────────────────────────
  
      {
        type: "heading",
        text: "What happens when someone speaks?",
      },
  
      {
        type: "paragraph",
        text: "To understand conversational AI, we first need to understand what your brain is doing during a conversation.",
      },
  
      {
        type: "callout",
        text: "The gap between speakers is only ~200 milliseconds — your brain starts preparing a response before the other person finishes.",
      },
  
      {
        type: "paragraph",
        text: "Even though it feels effortless, your brain is doing multiple things at once:",
      },
  
      {
        type: "list",
        items: [
          "Detect sound",
          "Recognize speech",
          "Identify words",
          "Understand meaning",
          "Connect context",
          "Decide what to do",
          "Plan a response",
          "Speak",
        ],
      },
  
      {
        type: "paragraph",
        text: "All of this happens in a fraction of a second.",
      },
  
      // ─────────────────────────
  
      {
        type: "quote",
        text: "Words aren't the whole conversation",
      },
  
      {
        type: "paragraph",
        text: "Your brain also reads subtle signals beyond words:",
      },
  
      {
        type: "list",
        items: [
          "Tone",
          "Pitch",
          "Volume",
          "Speaking speed",
          "Pauses",
          "Emphasis",
          "Facial expressions",
          "Emotion",
        ],
      },
  
      {
        type: "paragraph",
        text: "These signals help us understand confidence, sarcasm, excitement, and intent.",
      },
  
      {
        type: "paragraph",
        text: "This is why human conversations feel natural — and why conversations with AI can still feel mechanical.",
      },
    ],
  },
  {
    slug: "2-how-does-ai-listen",
    group: "Foundations",
    navTitle: "How does AI listen?",
    title: "How does AI listen?",
    kicker: "AI turns sound into meaning using multiple layered systems.",
    next: {
      slug: "3-what-is-stt-and-tts",
      title: "What is STT and TTS?",
    },
  
    body: [
      {
        type: "paragraph",
        text: "Humans naturally convert sound into meaning in a fraction of a second.",
      },
  
      {
        type: "paragraph",
        text: "But to an AI, our voice isn't a sentence yet. It's just a stream of numbers representing sound waves. Before AI can respond, it must convert sound into information it can understand.",
      },
  
      // ─────────────────────────
  
      {
        type: "heading",
        text: "Step 1: Capture sound",
      },
  
      {
        type: "paragraph",
        text: "When you speak, your microphone records tiny changes in air pressure and converts them into a digital audio signal.",
      },
  
      {
        type: "paragraph",
        text: "At this point, the computer still doesn't know what you said.",
      },
  
      {
        type: "paragraph",
        text: "It only has audio.",
      },
  
      // IMAGE PLACEHOLDER
      // Add your image here once you have the image path.
  
      // ─────────────────────────
  
      {
        type: "heading",
        text: "Step 2: Detect speech",
      },
  
      {
        type: "paragraph",
        text: "Humans naturally know when someone starts or stops talking.",
      },
  
      {
        type: "paragraph",
        text: "AI needs a separate system called Voice Activity Detection (VAD). Its job is to detect:",
      },
  
      {
        type: "list",
        items: [
          "Is someone speaking?",
          "Or is this silence, breathing, or background noise?",
        ],
      },
  
      // ─────────────────────────
  
      {
        type: "heading",
        text: "Step 3: Convert speech into text",
      },
  
      {
        type: "paragraph",
        text: "Once speech is detected, it is converted into text using Speech-to-Text (STT).",
      },
  
      // ─────────────────────────
  
      {
        type: "heading",
        text: "Step 4: Understand Intent",
      },
  
      {
        type: "paragraph",
        text: "Words alone aren't enough.",
      },
  
      {
        type: "paragraph",
        text: "Consider these two sentences:",
      },
  
      {
        type: "paragraph",
        text: 'Consider these two sentences: 
        text: '"Book a table." "Book a flight."',
      },      
  
      {
        type: "paragraph",
        text: "The word \"book\" is the same.",
      },
  
      {
        type: "paragraph",
        text: "The meaning is completely different.",
      },
  
      {
        type: "paragraph",
        text: "The AI uses a Large Language Model (LLM) to understand your intent using your words, previous conversation, and available context.",
      },
  
      // ─────────────────────────
  
      {
        type: "heading",
        text: "Step 5: Generate Response",
      },
  
      {
        type: "paragraph",
        text: "A Text-to-Speech (TTS) model converts it into natural-sounding speech.",
      },
  
      {
        type: "paragraph",
        text: "You hear the answer as audio instead of reading it on a screen.",
      },
    ],
  },

  {
    slug: "3-what-is-stt-and-tts",
    group: "Foundations",
    navTitle: "What is STT and TTS?",
    title: "What is STT and TTS?",
    kicker: "These are the core systems that convert speech and text.",
    next: {
      slug: "4-how-does-ai-detect-voice",
      title: "How does AI detect Voice?",
    },
    body: [
      {
        type: "paragraph",
        text: "STT converts speech into text, while TTS converts text into speech.",
      },
    ],
  },

  {
    slug: "4-how-does-ai-detect-voice",
    group: "Foundations",
    navTitle: "How does AI detect Voice?",
    title: "How does AI detect Voice?",
    kicker: "AI detects when you start and stop speaking.",
    next: {
      slug: "5-how-does-ai-respond-so-quickly",
      title: "How does AI respond quickly?",
    },
    body: [
      {
        type: "paragraph",
        text: "Voice Activity Detection (VAD) helps AI know when speech begins and ends.",
      },
    ],
  },

  {
    slug: "5-how-does-ai-respond-so-quickly",
    group: "Foundations",
    navTitle: "How does AI respond quickly?",
    title: "How does AI respond so quickly?",
    kicker: "Speed comes from prediction and streaming.",
    next: { slug: "6-what-is-turn-taking", title: "What is Turn-Taking?" },
    body: [
      {
        type: "paragraph",
        text: "AI systems stream responses instead of waiting to finish processing everything.",
      },
    ],
  },

  {
    slug: "6-what-is-turn-taking",
    group: "Real-Time Conversations",
    navTitle: "What is Turn-Taking?",
    title: "What is Turn-Taking?",
    kicker: "Turn-taking is how speakers coordinate who talks when.",
    next: {
      slug: "7-how-ai-handles-interruptions",
      title: "How AI Handles Interruptions?",
    },
    body: [
      {
        type: "paragraph",
        text: "Turn-taking enables smooth back-and-forth conversation.",
      },
    ],
  },

  {
    slug: "7-how-ai-handles-interruptions",
    group: "Real-Time Conversations",
    navTitle: "How AI Handles Interruptions?",
    title: "How AI Handles Interruptions?",
    kicker: "Interruptions are a natural part of real conversations.",
    next: { slug: "8-how-does-ai-remember", title: "How does AI remember?" },
    body: [
      {
        type: "paragraph",
        text: "AI must detect and adapt when users interrupt mid-response.",
      },
    ],
  },

  {
    slug: "8-how-does-ai-remember",
    group: "Real-Time Conversations",
    navTitle: "How does AI remember?",
    title: "How does AI remember?",
    kicker: "Memory allows AI to maintain context across turns.",
    next: {
      slug: "9-how-does-ai-take-action",
      title: "How Does AI Take Action?",
    },
    body: [
      {
        type: "paragraph",
        text: "AI stores context to maintain continuity in conversations.",
      },
    ],
  },

  {
    slug: "9-how-does-ai-take-action",
    group: "Real-Time Conversations",
    navTitle: "How Does AI Take Action?",
    title: "How Does AI Take Action?",
    kicker: "AI connects understanding to real-world actions.",
    body: [
      {
        type: "paragraph",
        text: "AI can trigger APIs, workflows, and tools to complete tasks.",
      },
    ],
  },
];

export function getLesson(slug: string) {
  return lessons.find((l) => l.slug === slug);
}

export const lessonGroups = Array.from(new Set(lessons.map((l) => l.group)));