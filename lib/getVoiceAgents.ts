import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface VoiceAgentMeta {
  slug: string;
  title: string;
  navTitle: string;
  group: string;
  kicker: string;
  order: number;
  next?: { slug: string; title: string };
}

const DIR = path.join(process.cwd(), "content/voice-agents");

function readAllLessons(): VoiceAgentMeta[] {
  if (!fs.existsSync(DIR)) {
    return [];
  }

  const files = fs
    .readdirSync(DIR)
    .filter((file) => file.endsWith(".mdx"));

  const lessons = files.map((file) => {
    const filePath = path.join(DIR, file);
    const source = fs.readFileSync(filePath, "utf8");
    const { data } = matter(source);

    return {
      slug: file.replace(/\.mdx$/, ""),
      title: data.title || "Untitled",
      navTitle: data.navTitle || data.title || "Untitled",
      group: data.group || "",
      kicker: data.kicker || "",
      order: typeof data.order === "number" ? data.order : 999,
    };
  });

  // Order is driven entirely by frontmatter `order`.
  lessons.sort((a, b) => a.order - b.order);

  return lessons.map((lesson, i) => ({
    ...lesson,
    next: lessons[i + 1]
      ? {
          slug: lessons[i + 1].slug,
          title: lessons[i + 1].title,
        }
      : undefined,
  }));
}

export async function getVoiceAgents(): Promise<VoiceAgentMeta[]> {
  return readAllLessons();
}

export async function getVoiceAgent(
  slug: string
): Promise<VoiceAgentMeta | undefined> {
  return readAllLessons().find((l) => l.slug === slug);
}

export async function getVoiceAgentSlugs(): Promise<string[]> {
  return readAllLessons().map((l) => l.slug);
}

export async function getVoiceAgentContent(
  slug: string
): Promise<string | null> {
  const filePath = path.join(DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return fs.readFileSync(filePath, "utf8");
}

export function getVoiceAgentGroups(
  lessons: VoiceAgentMeta[]
): string[] {
  return Array.from(new Set(lessons.map((l) => l.group)));
}