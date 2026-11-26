import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ConversationDesignMeta {
  slug: string;
  title: string;
  description: string;
  order: number;
}

const dir = path.join(process.cwd(), "content/conversation-design");

export async function getConversationDesign() {
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));

  const studies = files.map((file) => {
    const source = fs.readFileSync(path.join(dir, file), "utf8");
    const { data } = matter(source);

    return {
      slug: file.replace(".mdx", ""),
      title: data.title || "Untitled",
      description: data.description || "",
      order: Number(data.order) || 999,
    };
  });

  return studies.sort((a, b) => a.order - b.order);
}

export async function getConversationDesignContent(slug: string) {
  const filePath = path.join(dir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  return fs.readFileSync(filePath, "utf8");
}

export async function getConversationDesignSlugs(): Promise<string[]> {
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(".mdx", ""));
}