export type HostId = "explainer" | "challenger";

export type Host = {
  id: HostId;
  name: string;
  description: string;
  color: string;
  voice: { pitch: number; rate: number; genderHint: "male" | "female" };
};

// Names and functions pulled directly from the "Conversational Roles" section
// of voice-for-learn.mdx: "Explainer — breaks down the concept" and
// "Challenger — questions the argument."
export const hosts: Record<HostId, Host> = {
  explainer: {
    id: "explainer",
    name: "Explainer",
    description: "Breaks the idea down, introduces it, uses examples",
    color: "#6EC1E4",
    voice: { pitch: 1.12, rate: 1.0, genderHint: "female" },
  },
  challenger: {
    id: "challenger",
    name: "Challenger",
    description: "Questions the argument, pushes for clarity",
    color: "#E8B84B",
    voice: { pitch: 0.88, rate: 1.05, genderHint: "male" },
  },
};

export const hostList = Object.values(hosts);

export type ConversationTurn = { speaker: HostId; text: string };
