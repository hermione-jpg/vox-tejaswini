export type Concept = {
  id: string;
  name: string;
  short: string;
  definition: string;
  whyItMatters: string;
  example: string;
  designImplications: string;
  related: string[]; // concept ids
};

export const concepts: Concept[] = [
  {
    id: "telephony",
    name: "Telephony",
    short: "The tech that carries voice calls over a network.",
    definition:
      "Telephony is the technology that transmits voice over distance, from old copper phone lines to today's internet-based calling.",
    whyItMatters:
      "Every voice product eventually touches a phone number, a call, or a carrier network, so understanding telephony explains the plumbing behind 'just call the user.'",
    example:
      "When a food delivery app calls a customer to confirm an order, telephony infrastructure routes that call from the app to the customer's phone.",
    designImplications:
      "Design for call drops, variable audio quality, and delays that don't exist in a clean text interface. Always show clear call state (connecting, live, ended).",
    related: ["pstn", "voip", "sip-trunking"],
  },
  {
    id: "pstn",
    name: "PSTN",
    short: "The traditional public phone network.",
    definition:
      "PSTN stands for Public Switched Telephone Network, the original circuit-switched system that connects landlines and mobile numbers worldwide.",
    whyItMatters:
      "Most real phone numbers still terminate on the PSTN, so any voice AI that calls a real person eventually bridges into it.",
    example:
      "When your AI assistant dials your dentist's office landline, the call travels over the PSTN for the final leg.",
    designImplications:
      "Assume lower audio fidelity and no rich metadata on PSTN legs. Don't rely on features like caller-supplied context that only exist on IP networks.",
    related: ["telephony", "voip", "sip-trunking"],
  },
  {
    id: "stt",
    name: "STT (Speech-to-Text)",
    short: "Converts spoken audio into written text.",
    definition:
      "Speech-to-Text is the process of transcribing spoken audio into text a system can read and act on.",
    whyItMatters:
      "It's the entry point for almost every voice product; if transcription is inaccurate, everything downstream breaks.",
    example:
      "When you dictate a text message, STT turns your voice into the words that appear on screen.",
    designImplications:
      "Show partial transcripts as the user speaks so they trust the system is listening, and design a graceful correction flow for misheard words.",
    related: ["asr", "latency", "endpointing"],
  },
  {
    id: "tts",
    name: "TTS (Text-to-Speech)",
    short: "Converts written text into spoken audio.",
    definition:
      "Text-to-Speech synthesizes natural-sounding audio from text, giving an AI a voice to reply with.",
    whyItMatters:
      "The voice you choose shapes how trustworthy, warm, or robotic a product feels, often more than the words themselves.",
    example:
      "A GPS app reading turn directions aloud is TTS converting route text into spoken guidance.",
    designImplications:
      "Match voice tone to brand personality, and let responses stream so users hear the start of an answer without waiting for the whole thing to generate.",
    related: ["voice-cloning", "latency", "conversational-ai"],
  },
  {
    id: "voip",
    name: "VoIP",
    short: "Voice calls carried over the internet instead of phone lines.",
    definition:
      "VoIP, or Voice over Internet Protocol, sends voice as data packets over the internet rather than a traditional circuit-switched line.",
    whyItMatters:
      "It's cheaper and more flexible than legacy telephony, and it's the foundation almost every modern calling app is built on.",
    example:
      "A Zoom or WhatsApp call is VoIP: your voice is packetized and sent over Wi-Fi or mobile data.",
    designImplications:
      "Design for jitter and packet loss with visual reconnect indicators, since internet quality is far less predictable than a dedicated phone line.",
    related: ["telephony", "sip-trunking", "audio-codecs"],
  },
  {
    id: "sip-trunking",
    name: "SIP Trunking",
    short: "The connection that links VoIP systems to the phone network.",
    definition:
      "SIP Trunking uses the Session Initiation Protocol to connect a VoIP system to the traditional phone network, replacing physical phone lines with a virtual link.",
    whyItMatters:
      "It's what lets a cloud-based voice AI actually dial and receive real phone numbers instead of staying trapped inside an app.",
    example:
      "A call center platform uses a SIP trunk to route customer calls from the PSTN into its cloud software.",
    designImplications:
      "Build in visibility for connection health and failover, since a broken trunk silently kills every call until someone notices.",
    related: ["voip", "telephony", "pstn"],
  },
  {
    id: "audio-codecs",
    name: "Audio Codecs",
    short: "The formats that compress and encode voice for transmission.",
    definition:
      "An audio codec compresses raw audio into a smaller format for transmission and decompresses it on the other end for playback.",
    whyItMatters:
      "The codec chosen determines call quality, bandwidth use, and how much processing delay gets added to a conversation.",
    example:
      "Opus is a common codec in modern voice apps because it balances low bandwidth with high clarity.",
    designImplications:
      "Codec mismatches cause muffled or robotic-sounding audio; surface a clear 'poor connection' state rather than letting users blame the AI itself.",
    related: ["sample-rate", "voip", "latency"],
  },
  {
    id: "dtmf",
    name: "DTMF",
    short: "The tones made when you press phone keypad buttons.",
    definition:
      "DTMF, or Dual-Tone Multi-Frequency, is the signal system behind the beeping tones you hear when pressing buttons on a phone keypad.",
    whyItMatters:
      "Many automated phone systems still rely on keypad input alongside or instead of voice, especially for sensitive input like PINs.",
    example:
      "Pressing '1' for English and '2' for Spanish on a bank's phone line sends a DTMF tone the system reads.",
    designImplications:
      "Offer keypad input as a fallback for noisy environments or sensitive data users may not want to say out loud.",
    related: ["telephony", "turn-taking"],
  },
  {
    id: "latency",
    name: "Latency",
    short: "The delay between speaking and hearing a response.",
    definition:
      "Latency is the time gap between when a user finishes speaking and when they hear the system's reply.",
    whyItMatters:
      "Humans expect a response within a few hundred milliseconds in real conversation; anything slower feels broken, not thoughtful.",
    example:
      "If you ask a voice assistant a question and wait three full seconds in silence, it feels like the device froze.",
    designImplications:
      "Use filler cues like a thinking animation or a quick acknowledgment sound to mask processing time and keep the conversation feeling alive.",
    related: ["endpointing", "turn-taking", "stt"],
  },
  {
    id: "sample-rate",
    name: "Sample Rate",
    short: "How many times per second audio is measured.",
    definition:
      "Sample rate is how many times per second an audio signal is measured when converting analog sound into digital data, measured in Hz.",
    whyItMatters:
      "Higher sample rates capture more detail but require more bandwidth, so voice systems balance clarity against speed and cost.",
    example:
      "Phone calls traditionally use 8kHz sample rates, which is why they sound noticeably lower quality than music streamed at 44.1kHz.",
    designImplications:
      "Don't assume studio-quality audio in production; test your voice UX at the lower sample rates real phone networks actually use.",
    related: ["audio-codecs", "stt", "tts"],
  },
  {
    id: "asr",
    name: "ASR (Automatic Speech Recognition)",
    short: "The broader system that understands spoken language.",
    definition:
      "Automatic Speech Recognition is the technology and models behind converting speech into meaningful, structured text, of which STT is the core output.",
    whyItMatters:
      "ASR quality determines whether a voice product understands accents, background noise, and domain-specific vocabulary correctly.",
    example:
      "A medical dictation tool uses ASR trained on clinical vocabulary so it recognizes drug names an everyday transcriber would miss.",
    designImplications:
      "Let users see and correct low-confidence words, and consider domain-specific tuning for specialized products.",
    related: ["stt", "latency", "conversational-ai"],
  },
  {
    id: "voice-cloning",
    name: "Voice Cloning",
    short: "Recreating a specific person's voice synthetically.",
    definition:
      "Voice cloning uses AI to recreate a specific individual's voice from sample recordings, generating new speech in that same voice.",
    whyItMatters:
      "It unlocks powerful personalization, but raises serious consent, identity, and misuse concerns that products must design around responsibly.",
    example:
      "An audiobook narrator's cloned voice can read new chapters they never actually recorded aloud.",
    designImplications:
      "Require explicit consent flows and clear disclosure whenever synthetic voice is used, especially for real, identifiable people.",
    related: ["tts", "conversational-ai"],
  },
  {
    id: "rag",
    name: "RAG (Retrieval-Augmented Generation)",
    short: "Grounding AI answers in retrieved, real information.",
    definition:
      "Retrieval-Augmented Generation combines a search step with an AI model, so responses are grounded in retrieved documents instead of relying purely on memorized knowledge.",
    whyItMatters:
      "It reduces hallucination and lets a voice assistant answer accurately about things outside its training, like your company's live inventory.",
    example:
      "A support voicebot retrieves your actual order details before answering 'where is my package,' instead of guessing.",
    designImplications:
      "Design for the retrieval step's added latency, and consider surfacing sources so users can trust where an answer came from.",
    related: ["tool-calling", "memory", "conversational-ai"],
  },
  {
    id: "tool-calling",
    name: "Tool Calling",
    short: "Letting an AI take real actions, not just talk.",
    definition:
      "Tool calling lets an AI model invoke external functions, like APIs or databases, so it can take real actions instead of only generating text.",
    whyItMatters:
      "It's what turns a voice assistant from a chatty narrator into something that can actually book a table or check your account balance.",
    example:
      "Saying 'move my 3pm meeting to 4' triggers a tool call to your calendar's API to actually reschedule it.",
    designImplications:
      "Always confirm consequential actions out loud before executing them, since users can't 'see' a background API call the way they'd see a button state.",
    related: ["rag", "memory", "conversational-ai"],
  },
  {
    id: "memory",
    name: "Memory",
    short: "An AI's ability to recall past context.",
    definition:
      "Memory is an AI system's ability to retain and recall information from earlier in a conversation, or across separate conversations entirely.",
    whyItMatters:
      "Conversations feel human when the assistant remembers what you already told it, instead of asking the same questions on repeat.",
    example:
      "A voice assistant that remembers you're vegetarian and stops suggesting meat dishes in future conversations is using persistent memory.",
    designImplications:
      "Give users visibility into and control over what's remembered, since invisible memory can feel surveillance-like rather than helpful.",
    related: ["rag", "conversational-ai", "tool-calling"],
  },
  {
    id: "conversational-ai",
    name: "Conversational AI",
    short: "AI systems built to hold natural, two-way dialogue.",
    definition:
      "Conversational AI is the umbrella field covering systems designed to understand, respond, and hold natural back-and-forth dialogue with people.",
    whyItMatters:
      "It's the combination of STT, language understanding, and TTS working together, so weaknesses in any one part can break the whole experience.",
    example:
      "A customer service voice agent that understands follow-up questions like 'and the one after that' is conversational AI in action.",
    designImplications:
      "Design the whole loop end to end, listening, thinking, speaking, rather than optimizing each piece in isolation.",
    related: ["turn-taking", "interruptions", "memory"],
  },
  {
    id: "interruptions",
    name: "Interruptions (Barge-in)",
    short: "Letting a user cut in while the AI is speaking.",
    definition:
      "Barge-in is the ability for a user to interrupt the AI mid-response, the way people naturally interrupt each other in real conversation.",
    whyItMatters:
      "Without it, users have to wait through a full answer even if they realize halfway through it's not what they needed.",
    example:
      "Saying 'actually, skip that' while a voice assistant is still mid-sentence should stop it and pivot immediately.",
    designImplications:
      "Design instant visual feedback when a barge-in is detected, so the interruption feels acknowledged rather than ignored.",
    related: ["turn-taking", "endpointing", "latency"],
  },
  {
    id: "wake-word",
    name: "Wake Word",
    short: "The trigger phrase that activates a voice assistant.",
    definition:
      "A wake word is a specific phrase, like 'Hey Siri,' that a device listens for locally to activate full voice recognition.",
    whyItMatters:
      "It solves the privacy and battery problem of always streaming audio to the cloud, only activating full listening when truly needed.",
    example:
      "Saying 'Alexa' before your request tells the device to start actively processing what comes next.",
    designImplications:
      "Give unmistakable feedback the moment the wake word is detected, like a sound or light, so users trust it's actually listening now.",
    related: ["endpointing", "stt", "conversational-ai"],
  },
  {
    id: "endpointing",
    name: "Endpointing",
    short: "Detecting when a user has finished speaking.",
    definition:
      "Endpointing is the system's process of detecting when a user has stopped talking, so it knows it's their turn to respond.",
    whyItMatters:
      "Cut off too early and you interrupt the user; wait too long and the conversation feels sluggish and unnatural.",
    example:
      "If you pause to think mid-sentence, good endpointing waits instead of jumping in prematurely with an answer.",
    designImplications:
      "Tune endpointing sensitivity per use case, a quick command needs snappier cutoffs than an open-ended storytelling prompt.",
    related: ["turn-taking", "latency", "interruptions"],
  },
  {
    id: "turn-taking",
    name: "Turn-taking",
    short: "The rhythm of who speaks when in a conversation.",
    definition:
      "Turn-taking is the coordination of when each party in a conversation speaks, ideally with minimal awkward silence or overlapping speech.",
    whyItMatters:
      "It's the invisible rhythm that makes a conversation feel natural instead of like two people talking over a bad phone line.",
    example:
      "A well-designed voice agent waits for a natural pause before replying, rather than always jumping in the instant audio stops.",
    designImplications:
      "Combine endpointing, latency, and barge-in handling together, since turn-taking quality is the sum of all three working in sync.",
    related: ["endpointing", "interruptions", "latency"],
  },
];

export function getConcept(id: string) {
  return concepts.find((c) => c.id === id);
}

export function findConceptByName(query: string) {
  const q = query.toLowerCase().trim();
  return concepts.find(
    (c) =>
      c.id === q ||
      c.name.toLowerCase() === q ||
      c.name.toLowerCase().includes(q) ||
      q.includes(c.name.toLowerCase())
  );
}

export const suggestionPrompts = [
  "What is Telephony?",
  "Explain SIP Trunking.",
  "What's the difference between STT and ASR?",
  "Why does latency matter?",
  "Explain wake words.",
];
