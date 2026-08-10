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

export async function generateStaticParams() {
  const slugs = await getFundamentalSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const lesson = await getFundamental(params.slug);

  return {
    title: lesson ? `${lesson.title} — VOX` : "VOX",
  };
}

export default async function LessonPage({
  params,
}: {
  params: { slug: string };
}) {
  const lesson = await getFundamental(params.slug);

  if (!lesson) return notFound();

  const source = await getFundamentalContent(params.slug);

  if (!source) return notFound();

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
      <aside className="hidden md:block w-[260px] bg-white border-r border-[#9A9A9A] sticky top-0 h-screen">
        <div className="h-full overflow-y-auto px-6 py-6 text-[14px] leading-[20px] text-[#2F3E46] relative">

          {/* VOX */}
          <div className="text-[20px] font-semibold mb-6 tracking-tight">
            VOX
          </div>

          {/* GROUPS */}
          {groups.map((group) => (
            <div key={group} className="mb-8">
              <p className="text-[11px] uppercase tracking-[0.12em] text-[#5C7C99] mb-3">
                {group}
              </p>

              <ul className="space-y-[6px]">
                {lessons
                  .filter((l) => l.group === group)
                  .map((l) => (
                    <li key={l.slug}>
                      <Link
                        href={`/fundamentals/${l.slug}`}
                        className={`block pl-3 border-l ${
                          lesson.slug === l.slug
                            ? "border-[#2F3E46] font-medium"
                            : "border-transparent text-[#2F3E46]/80 hover:text-[#2F3E46]"
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
              className="block text-center py-2 border border-[#2F3E46]/30 rounded-md text-[13px]"
            >
              Home
            </Link>

            <p className="mt-4 text-[11px] text-[#2F3E46]/70">
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
              <div className="mt-20 pt-8 border-t border-[#9A9A9A]">
                <Link href={`/fundamentals/${lesson.next.slug}`}>
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