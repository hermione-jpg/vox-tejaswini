import { redirect } from "next/navigation";
import { getVoiceAgents } from "@/lib/getVoiceAgents";

export const metadata = {
  title: "Voice Agents — VOX",
};

// Opens Voice Agents directly on the first article.
export default async function VoiceAgentsIndex() {
  const lessons = await getVoiceAgents();
  redirect(`/voice-agents/${lessons[0].slug}`);
}