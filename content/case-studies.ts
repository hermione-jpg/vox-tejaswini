// ─────────────────────────────────────────────────────────────
// CASE STUDIES — EDITABLE CONTENT
// Add, remove, or edit entries here. Each object becomes a page
// at /case-study/[slug]. `body` is a simple array of blocks so
// non-developers can edit copy without touching layout code.
// ─────────────────────────────────────────────────────────────

export type Block =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; alt: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; attribution?: string }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      size?: "small" | "medium" | "large" | "full";
    };

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  body: Block[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "voice-personalities",
    title: "Designing Voice Personality",
    summary:
      "How tone, pacing, and word choice combine to give a voice agent a consistent, recognizable character.",
  
    body: [
      {
        type: "paragraph",
        text: "Imagine this.",
      },
  
      {
        type: "paragraph",
        text: "You tell your friend about your recent holiday adventure only to hear a cold reply:",
      },
  
      {
        type: "image",
        src: "/images/case-studies/wednesday.gif",
        alt: "A cold and indifferent response",
      },
  
      {
        type: "paragraph",
        text: "Or you stumble into the kitchen at 7 AM, barely awake and your room mate greets you very cheerfully:",
      },
  
      {
        type: "image",
        src: "/images/case-studies/spongebob.gif",
        alt: "An overly cheerful response",
      },
  
      {
        type: "paragraph",
        text: "The first day, you'd smile.",
      },
      
      {
        type: "paragraph",
        text: "By the tenth day, you'd roll your eyes.",
      },
      
      {
        type: "paragraph",
        text: "The problem isn't what they say, it's the tone and context.",
      },
      
      {
        type: "paragraph",
        text: 'Now imagine that mismatch isn\'t occasional. Imagine it\'s every single interaction, because the "person" you\'re talking to has exactly one personality, permanently, regardless of your mood, the situation, or what you actually need in that moment.',
      },
      
      {
        type: "paragraph",
        text: "That's what talking to voice assistants has been like for years.",
      },
      
      {
        type: "heading",
        text: "Why Does It Feel Wrong?",
      },
      
      {
        type: "paragraph",
        text: "Why does it feel so specifically wrong when a voice's tone doesn't match what you need in the moment even when the actual information it gives you is correct?",
      },
      
      {
        type: "paragraph",
        text: "That's because conversation isn't only about information.",
      },
      
      {
        type: "paragraph",
        text: "It's also about how that information is delivered.",
      },
      
      {
        type: "paragraph",
        text: "Think about the range of tone you naturally expect from different people in your life:",
      },
      
      {
        type: "image",
        src: "/images/case-studies/voice-personalities-02.png",
        alt: "Four conversational roles: Doctor, Close Friend, Colleague, and Customer Support",
      },
      {
        type: "heading",
        text: "tone",
      },
  
      {
        type: "image",
        src: "/images/case-studies/voice-personalities-03.png",
        alt:
          "Doctor, Close Friend, Colleague, and Customer Support voice personality styles",
        size: "large",
      },
  
      // ─────────────────────────────────────
      // PERSONALITY
      // ─────────────────────────────────────
  
      {
        type: "heading",
        text: "Personality Isn't a script. It's a Design.",
      },
  
      {
        type: "paragraph",
        text:
          "Changing a personality isn't as simple as swapping a few words.",
      },
  
      {
        type: "paragraph",
        text:
          "A believable voice emerges from dozens of small decisions working together.",
      },
  
      {
        type: "paragraph",
        text:
          "Amazon describes these personalities across dimensions like expressiveness, emotional openness, formality, directness and humor.",
      },
  
      // ─────────────────────────────────────
      // UNDER THE HOOD
      // ─────────────────────────────────────
  
      {
        type: "heading",
        text: "Under the Hood: How a Voice Personality is created",
      },
  
      {
        type: "paragraph",
        text:
          "Modern conversational voice systems typically adjust several layers simultaneously:",
      },
  
      // ─────────────────────────────────────
      // 1. SPEECH RATE
      // ─────────────────────────────────────
  
      {
        type: "paragraph",
        text: "1. Speech Rate:",
      },
  
      {
        type: "paragraph",
        text:
          "Imagine two people saying exactly the same thing.",
      },
  
      {
        type: "paragraph",
        text:
          "One says it quickly. The other says it slowly, with relaxed pauses.",
      },
  
      {
        type: "paragraph",
        text:
          "The words are identical.",
      },
  
      {
        type: "paragraph",
        text:
          "The feeling isn't.",
      },
  
      // 3 SPEECH-RATE IMAGES
      {
        type: "image",
        src: "/images/case-studies/voice-personalities-04.png",
        alt: "Speech rate comparison",
        size: "large",
      },
  
      {
        type: "image",
        src: "/images/case-studies/voice-personalities-05.png",
        alt: "Speech pacing comparison",
        size: "large",
      },
  
      {
        type: "image",
        src: "/images/case-studies/voice-personalities-06.png",
        alt: "Speech rhythm comparison",
        size: "large",
      },
  
      {
        type: "paragraph",
        text:
          "You don't think about this consciously. You just expect it but notice when they're missing.",
      },
  
      {
        type: "paragraph",
        text:
          "Voice assistants, for over a decade, gave you exactly one tone, for every single one of those situations.",
      },
  
      {
        type: "paragraph",
        text:
          "Linguists call this register—the natural way humans change their tone, pace, warmth, and level of formality depending on who they're are talking to and why.",
      },
  
      // ─────────────────────────────────────
      // HOW AMAZON APPROACHED THE PROBLEM
      // ─────────────────────────────────────
  
      {
        type: "heading",
        text: "How Amazon Approached the Problem",
      },
  
      {
        type: "paragraph",
        text:
          "People aren't consistent. Some mornings we want someone to simply answer the question.",
      },
  
      {
        type: "paragraph",
        text:
          "Other days, a little warmth goes a long way.",
      },
  
      {
        type: "paragraph",
        text:
          'Amazon\'s solution wasn\'t to make Alexa "more human."',
      },
  
      {
        type: "paragraph",
        text:
          "It was to let users choose how Alexa communicates, without changing what Alexa can do.",
      },
  
      {
        type: "paragraph",
        text:
          "In 2026, Alexa+ introduced four personality styles:",
      },
  
      {
        type: "list",
        items: [
          "Brief — concise and direct",
          "Chill — relaxed and conversational",
          "Sweet — warm and encouraging",
          "Sassy — playful, witty, occasionally sarcastic",
        ],
      },
  
      {
        type: "paragraph",
        text:
          "Users can choose both:",
      },
  
      {
        type: "list",
        items: [
          "who is speaking (voice)",
          "how they speak (personality)",
        ],
      },
  
      // ─────────────────────────────────────
      // DESIGNING VOICE PERSONALITY
      // 2 IMAGES
      // ─────────────────────────────────────
  
      {
        type: "heading",
        text: "Designing Voice Personality",
      },
  
      {
        type: "image",
        src: "/images/case-studies/voice-personalities-07.png",
        alt: "Designing voice personality",
        size: "large",
      },
  
      {
        type: "image",
        src: "/images/case-studies/voice-personalities-08.png",
        alt: "Voice personality parameters",
        size: "large",
      },
  
      // ─────────────────────────────────────
      // 3. FILLER RATIO
      // ─────────────────────────────────────
  
      {
        type: "paragraph",
        text: "3. Filler Ratio",
      },
  
      {
        type: "paragraph",
        text:
          "Take any simple question:",
      },
  
      {
        type: "quote",
        text: "What's the weather today?",
      },
  
      {
        type: "paragraph",
        text:
          "There are several possible replies:",
      },
  
      {
        type: "list",
        items: [
          "24°C.",
          "It's 24°C.",
          "Sure! It's 24°C today.",
          "It looks like a lovely day today. It's currently 24°C with clear skies.",
        ],
      },
  
      // ─────────────────────────────────────
      // 4. LEXICAL DENSITY
      // ─────────────────────────────────────
  
      {
        type: "paragraph",
        text: "4. Lexical density:",
      },
  
      {
        type: "paragraph",
        text:
          "Lexical density is simply how much of a sentence is actual information versus conversational language.",
      },
  
      {
        type: "paragraph",
        text:
          "High lexical density:",
      },
  
      {
        type: "quote",
        text: "Timer set. Five minutes.",
      },
  
      {
        type: "paragraph",
        text:
          "Low lexical density:",
      },
  
      {
        type: "quote",
        text:
          "Sure! I've gone ahead and set a timer for five minutes.",
      },
  
      {
        type: "paragraph",
        text:
          "The answer is the same. The experience isn't.",
      },
  
      // ─────────────────────────────────────
      // 5. LATENCY
      // ─────────────────────────────────────
  
      {
        type: "paragraph",
        text: "5. Latency per Persona",
      },
  
      {
        type: "paragraph",
        text:
          "Every personality style is implicitly also a latency trade-off. A warmer response takes longer to generate and almost certainly costs real milliseconds in generation and synthesis. Brief mode isn't just a tone choice - it's plausibly the fastest-responding mode by design.",
      },
  
      // ─────────────────────────────────────
      // WHAT THIS MEANS FOR DESIGNERS
      // ONE IMAGE
      // ─────────────────────────────────────
  
      {
        type: "heading",
        text: "What This Means for Designers",
      },
  
      {
        type: "image",
        src: "/images/case-studies/voice-personalities-09.png",
        alt: "Voice personality design considerations",
        size: "large",
      },
  
      // ─────────────────────────────────────
      // 2. PITCH VARIATION
      // ─────────────────────────────────────
  
      {
        type: "paragraph",
        text: "2. Pitch variation (Prosody)",
      },
  
      {
        type: "paragraph",
        text:
          "This is one of the biggest reasons voices feel alive.",
      },
  
      {
        type: "paragraph",
        text:
          "Try saying",
      },
  
      {
        type: "quote",
        text: "Really.",
      },
  
      {
        type: "paragraph",
        text:
          "in three ways.",
      },
  
      {
        type: "paragraph",
        text:
          "😐 Really.",
      },
  
      {
        type: "paragraph",
        text:
          "😮 Really?!",
      },
  
      {
        type: "paragraph",
        text:
          "🙄 Really...",
      },
  
      {
        type: "paragraph",
        text:
          "Same word. Three emotions.",
      },
  
      // 2 PROSODY IMAGES
      {
        type: "image",
        src: "/images/case-studies/voice-personalities-10.png",
        alt: "Pitch variation and prosody",
        size: "large",
      },
  
      {
        type: "image",
        src: "/images/case-studies/voice-personalities-11.png",
        alt: "Prosody emotional variation",
        size: "large",
      },
  
      // ─────────────────────────────────────
      // CLOSING
      // ─────────────────────────────────────
  
      {
        type: "paragraph",
        text:
          "Voice personality isn't something you add at the end of the design process. It's about designing the relationship users have with that character.",
      },
  
      {
        type: "paragraph",
        text:
          "Good voice design isn't about making AI sound more human.",
      },
  
      {
        type: "paragraph",
        text:
          "It's about reducing the gap between what a user expects to hear and how the assistant actually responds.",
      },
  
      {
        type: "paragraph",
        text:
          "Because in conversation, people rarely remember the exact words.",
      },
  
      {
        type: "paragraph",
        text:
          "They remember how those words made them feel.",
        },
      },
      {
    slug: "vocal-performance",
    title: "Designing Vocal Performance",
    summary:
      "Exploring how timing, breath, and micro-pauses shape how trustworthy and natural a voice feels.",
    body: [
      {
        type: "paragraph",
        text: "A voice can have the right words and still sound wrong.",
      },
      {
        type: "heading",
        text: "The Challenge",
      },
      {
        type: "paragraph",
        text: "Describe the challenge here.",
      },
      {
        type: "heading",
        text: "The Approach",
      },
      {
        type: "paragraph",
        text: "Describe your approach here.",
      },
      {
        type: "heading",
        text: "Outcome",
      },
      {
        type: "paragraph",
        text: "Describe the outcome here.",
      },
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
        text: "Trust in voice AI is communicated through behavior as much as language.",
      },
      {
        type: "heading",
        text: "The Challenge",
      },
      {
        type: "paragraph",
        text: "Describe the challenge here.",
      },
      {
        type: "heading",
        text: "The Approach",
      },
      {
        type: "paragraph",
        text: "Describe your approach here.",
      },
      {
        type: "heading",
        text: "Outcome",
      },
      {
        type: "paragraph",
        text: "Describe the outcome here.",
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
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
