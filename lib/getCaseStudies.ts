import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface CaseStudyMeta {
  slug: string;
  title: string;
  description: string;
  image?: string;
  order: number;
}

export async function getCaseStudies(): Promise<CaseStudyMeta[]> {
  const dir = path.join(process.cwd(), "content/case-studies");

  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"));

  const studies = files.map((file) => {
    const filePath = path.join(dir, file);
    const source = fs.readFileSync(filePath, "utf8");
    const { data } = matter(source);

    return {
      slug: file.replace(".mdx", ""),
      title: data.title || "Untitled",
      description: data.description || "",
      image: data.image,
      order: Number(data.order) || 999,
    };
  });

  return studies.sort((a, b) => a.order - b.order);
}

export async function getCaseStudyContent(slug: string) {
  const filePath = path.join(
    process.cwd(),
    "content/case-studies",
    `${slug}.mdx`
  );

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, "utf8");
  return source;
}

export async function getCaseStudySlugs(): Promise<string[]> {
  const dir = path.join(process.cwd(), "content/case-studies");

  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"));

  return files.map((file) => file.replace(".mdx", ""));
}