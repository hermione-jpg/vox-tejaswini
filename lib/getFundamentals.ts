import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface FundamentalMeta {
  slug: string;
  title: string;
  navTitle: string;
  group: string;
  kicker: string;
  order: number;
  next?: { slug: string; title: string };
}

const DIR = path.join(process.cwd(), 'content/fundamentals');

function readAllLessons(): FundamentalMeta[] {
  if (!fs.existsSync(DIR)) {
    return [];
  }

  const files = fs
    .readdirSync(DIR)
    .filter((file) => file.endsWith('.mdx'));

  const lessons = files.map((file) => {
    const filePath = path.join(DIR, file);
    const source = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(source);

    return {
      slug: file.replace(/\.mdx$/, ''),
      title: data.title || 'Untitled',
      navTitle: data.navTitle || data.title || 'Untitled',
      group: data.group || 'Foundations',
      kicker: data.kicker || '',
      order: typeof data.order === 'number' ? data.order : 999,
    };
  });

  // Order is driven entirely by frontmatter `order` — add a new .mdx file
  // with the next number and it slots into the sidebar and next/prev flow
  // automatically. No manual wiring required.
  lessons.sort((a, b) => a.order - b.order);

  return lessons.map((lesson, i) => ({
    ...lesson,
    next: lessons[i + 1]
      ? { slug: lessons[i + 1].slug, title: lessons[i + 1].title }
      : undefined,
  }));
}

export async function getFundamentals(): Promise<FundamentalMeta[]> {
  return readAllLessons();
}

export async function getFundamental(slug: string): Promise<FundamentalMeta | undefined> {
  return readAllLessons().find((l) => l.slug === slug);
}

export async function getFundamentalSlugs(): Promise<string[]> {
  return readAllLessons().map((l) => l.slug);
}

export async function getFundamentalContent(slug: string): Promise<string | null> {
  const filePath = path.join(DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return fs.readFileSync(filePath, 'utf8');
}

export function getFundamentalGroups(lessons: FundamentalMeta[]): string[] {
  return Array.from(new Set(lessons.map((l) => l.group)));
}
