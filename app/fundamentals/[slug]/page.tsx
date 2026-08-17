import { notFound } from "next/navigation";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";

import Container from "@/components/Container";
import { fundamentalsMdxComponents } from "@/components/MDXComponents";
import {
  getFundamentals,
  getFundamental,
  getFundamentalContent,
  getFundamentalSlugs,
  getFundamentalGroups,
} from "@/lib/getFundamentals";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = await getFundamentalSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const lesson = await getFundamental(slug);

  return {
    title: lesson ? `${lesson.title} — VOX` : "VOX",
  };
}

export default async function LessonPage({ params }: PageProps) {
  const { slug } = await params;

  const lesson = await getFundamental(slug);

  if (!lesson) {
    notFound();
  }

  const source = await getFundamentalContent(slug);

  if (!source) {
    notFound();
  }

  const { content } = await compileMDX({
    source,
    components: fundamentalsMdxComponents,
    options: {
      parseFrontmatter: true,
    },
  });

  const lessons = await getFundamentals();
  const groups = getFundamentalGroups(lessons);

  return (
    <div className="flex min-h-screen bg-white">
      {/* SIDEBAR */}
      <aside className="hidden md:block sticky top-0 h-screen w-[260px] border-r border-paper/20 bg-card">
        <div className="relative h-full overflow-y-auto px-6 py-6 text-[14px] leading-[20px] text-ink">
          {/* VOX */}
          <div className="mb-6 text-[20px] font-semibold tracking-tight text-ink">
            VOX
          </div>

          {/* GROUPS */}
          {groups.map((group) => (
            <div key={group} className="mb-8">
              <p className="mb-3 text-[11px] uppercase tracking-[0.12em] text-ink-soft">
                {group}
              </p>

              <ul className="space-y-[6px]">
                {lessons
                  .filter((l) => l.group === group)
                  .map((l) => (
                    <li key={l.slug}>
                      <Link
                        href={`/fundamentals/${l.slug}`}
                        className={`block border-l pl-3 ${
                          lesson.slug === l.slug
                            ? "border-ink font-medium text-ink"
                            : "border-transparent text-ink-soft hover:text-ink"
                        }`}
                      >
                        {l.navTitle}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}

          {/* BOTTOM */}
          <div className="absolute bottom-6 left-6 right-6">
            <Link
              href="/"
              className="block rounded-md border border-ink/30 py-2 text-center text-[13px] text-ink transition-colors hover:bg-paper/50"
            >
              Home
            </Link>

            <p className="mt-4 text-[11px] text-ink-soft">
              Last Updated - 31-07-2026
            </p>
          </div>
        </div>
      </aside>

      {/* CONTENT */}
      <div className="flex-1 bg-white">
        <Container className="py-16">
          <article className="max-w-3xl text-[#2F3E46]">
            <p className="text-[11px] uppercase tracking-[0.12em] text-[#5C7C99]">
              {lesson.group}
            </p>

            <h1 className="mt-4 text-[40px] leading-[44px] font-semibold tracking-tight">
              {lesson.title}
            </h1>

            <p className="mt-4 text-[20px] leading-7 text-[#5C7C99]">
              {lesson.kicker}
            </p>

            <div
              className="
                mt-14

                [&_h2]:pt-8
                [&_h2]:font-display
                [&_h2]:text-[24px]
                [&_h2]:font-semibold
                [&_h2]:leading-8
                [&_h2]:tracking-tight
                [&_h2]:text-[#2F3E46]

                [&_p]:mt-6
                [&_p]:text-[16px]
                [&_p]:leading-6
                [&_p]:text-[#2F3E46]/80

                [&_ul]:mt-6
                [&_ul]:space-y-2
                [&_ul]:pl-5
                [&_ul]:list-disc

                [&_li]:text-[16px]
                [&_li]:leading-6
                [&_li]:text-[#2F3E46]/80

                [&_blockquote]:mt-8
                [&_blockquote]:rounded-xl
                [&_blockquote]:border
                [&_blockquote]:border-[#2F3E46]/20
                [&_blockquote]:bg-white
                [&_blockquote]:px-6
                [&_blockquote]:py-5
                [&_blockquote]:font-display
                [&_blockquote]:text-[20px]
                [&_blockquote]:leading-7
                [&_blockquote]:font-medium
                [&_blockquote]:text-[#2F3E46]

                [&_img]:mt-10
                [&_img]:h-auto
                [&_img]:w-auto
                [&_img]:max-w-full
                [&_img]:rounded-lg
              "
            >
              {content}
            </div>

            {lesson.next && (
              <div className="mt-20 border-t border-[#9A9A9A] pt-8">
                <Link
                  href={`/fundamentals/${lesson.next.slug}`}
                  className="text-ink hover:text-ink-soft"
                >
                  Next — {lesson.next.title} →
                </Link>
              </div>
            )}
          </article>
        </Container>
      </div>
    </div>
  );
}