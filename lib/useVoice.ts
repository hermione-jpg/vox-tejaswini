"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type UseVoiceOptions = {
  onFinalTranscript: (text: string) => void;
};

export function useVoice({ onFinalTranscript }: UseVoiceOptions) {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [interimTranscript, setInterimTranscript] = useState("");
  const [supported, setSupported] = useState(true);
  const recognitionRef = useRef<any>(null);

  // Some browsers (esp. Chrome) load the voice list asynchronously, so prime it early.
  useEffect(() => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.getVoices();
      const handler = () => window.speechSynthesis.getVoices();
      window.speechSynthesis.addEventListener?.("voiceschanged", handler);
      return () => window.speechSynthesis.removeEventListener?.("voiceschanged", handler);
    }
  }, []);

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setSupported(false);
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event: any) => {
      let interim = "";
      let final = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          final += transcript;
        } else {
          interim += transcript;
        }
      }
      setInterimTranscript(interim);
      if (final.trim()) {
        onFinalTranscript(final.trim());
        setInterimTranscript("");
      }
    };

    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);

    recognitionRef.current = recognition;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startListening = useCallback(() => {
    if (!recognitionRef.current) return;
    try {
      recognitionRef.current.start();
      setIsListening(true);
    } catch {
      // already started; ignore
    }
  }, []);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  const speak = useCallback((text: string, onDone?: () => void) => {
    if (!("speechSynthesis" in window)) {
      onDone?.();
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.08; // slightly warmer/friendlier
    utterance.voice = pickFriendlyFemaleVoice() ?? null;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => {
      setIsSpeaking(false);
      onDone?.();
    };
    utterance.onerror = () => {
      setIsSpeaking(false);
      onDone?.();
    };
    window.speechSynthesis.speak(utterance);
  }, []);

  const stopSpeaking = useCallback(() => {
    window.speechSynthesis?.cancel();
    setIsSpeaking(false);
  }, []);

  return {
    supported,
    isListening,
    isSpeaking,
    interimTranscript,
    startListening,
    stopListening,
    speak,
    stopSpeaking,
  };
}

// Voice names are inconsistent across Chrome/Edge/Safari/Windows/macOS, so we rank
// known warm, female-sounding voices by name and fall back gracefully.
const FEMALE_VOICE_PRIORITY = [
  "Google US English",
  "Microsoft Aria Online (Natural) - English (United States)",
  "Microsoft Jenny Online (Natural) - English (United States)",
  "Microsoft Zira Desktop - English (United States)",
  "Microsoft Zira",
  "Samantha",
  "Google UK English Female",
  "Microsoft Libby Online (Natural) - English (United Kingdom)",
  "Karen",
  "Victoria",
  "Moira",
  "Tessa",
];

function pickFriendlyFemaleVoice(): SpeechSynthesisVoice | undefined {
  if (!("speechSynthesis" in window)) return undefined;
  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) return undefined;

  // 1. Exact match against our known-good priority list, in order.
  for (const name of FEMALE_VOICE_PRIORITY) {
    const match = voices.find((v) => v.name === name);
    if (match) return match;
  }

  // 2. Any English voice whose name signals "female" explicitly.
  const explicitFemale = voices.find(
    (v) => /en(-|_)/i.test(v.lang) && /female/i.test(v.name)
  );
  if (explicitFemale) return explicitFemale;

  // 3. Any English voice matching a known female first name pattern.
  const namedFemale = voices.find(
    (v) =>
      /en(-|_)/i.test(v.lang) &&
      /(aria|jenny|zira|samantha|karen|victoria|moira|tessa|susan|fiona|kate|allison|ava|emma|olivia)/i.test(
        v.name
      )
  );
  if (namedFemale) return namedFemale;

  // 4. Fall back to any English voice at all.
  return voices.find((v) => /en(-|_)/i.test(v.lang)) ?? voices[0];
}
