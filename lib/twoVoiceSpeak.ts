import { hosts, HostId, ConversationTurn } from "./twoHostPersonas";

let voiceCache: SpeechSynthesisVoice[] = [];

function loadVoices() {
  if ("speechSynthesis" in window) {
    voiceCache = window.speechSynthesis.getVoices();
  }
}

if (typeof window !== "undefined" && "speechSynthesis" in window) {
  loadVoices();
  window.speechSynthesis.addEventListener?.("voiceschanged", loadVoices);
}

function pickVoice(genderHint: "male" | "female"): SpeechSynthesisVoice | undefined {
  if (!voiceCache.length) loadVoices();
  const voices = voiceCache;
  if (!voices.length) return undefined;
  const find = (needle: string) => voices.find((v) => v.name.toLowerCase().includes(needle));
  if (genderHint === "female") {
    return find("female") || find("samantha") || find("aria") || find("zira") || voices[0];
  }
  return find("male") || find("daniel") || find("guy") || voices[0];
}

// Plays one turn with the given host's distinct voice. Resolves when done,
// resolves anyway on error so a two-host conversation never hangs on one bad turn.
export function speakTurn(hostId: HostId, text: string): Promise<void> {
  return new Promise((resolve) => {
    if (!("speechSynthesis" in window)) {
      resolve();
      return;
    }
    const host = hosts[hostId];
    const utter = new SpeechSynthesisUtterance(text);
    utter.pitch = host.voice.pitch;
    utter.rate = host.voice.rate;
    const voice = pickVoice(host.voice.genderHint);
    if (voice) utter.voice = voice;

    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      resolve();
    };
    utter.onend = finish;
    utter.onerror = finish;

    window.speechSynthesis.speak(utter);

    // Chrome's known speechSynthesis auto-pause bug workaround.
    const nudge = setInterval(() => {
      if (settled) {
        clearInterval(nudge);
        return;
      }
      if (window.speechSynthesis.paused) window.speechSynthesis.resume();
    }, 4000);

    setTimeout(() => {
      clearInterval(nudge);
      finish();
    }, 20000);
  });
}

export function stopAllSpeech() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}

// Plays a full array of turns in sequence, calling onTurnStart before each one
// so the UI can highlight which host is currently speaking.
export async function playConversation(
  turns: ConversationTurn[],
  onTurnStart: (hostId: HostId, turn: ConversationTurn) => void,
  isCancelled: () => boolean
) {
  for (const turn of turns) {
    if (isCancelled()) return;
    onTurnStart(turn.speaker, turn);
    await speakTurn(turn.speaker, turn.text);
  }
}
