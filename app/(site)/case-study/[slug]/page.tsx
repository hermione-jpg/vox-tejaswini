import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";

import Container from "@/components/Container";
import { getCaseStudyContent, getCaseStudySlugs } from "@/lib/getCaseStudies";
import { TalkAboutThisPage } from "@/components/case-study/TalkAboutThisPage";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const slugs = await getCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function CaseStudyPage({
  params,
}: PageProps) {
  const source = await getCaseStudyContent(params.slug);

  if (!source) {
    notFound();
  }

  const { content, frontmatter } = await compileMDX<{
    title?: string;
    description?: string;
  }>({
    source,
    options: {
      parseFrontmatter: true,
    },
  });

  return (
    <main className="min-h-screen bg-white">
      <Container>
        <div className="max-w-3xl">
          <a
            href="/case-study"
            className="font-mono text-[12px] leading-4 text-ink-faint hover:text-ink"
          >
            ← Case Studies
          </a>

          <header className="mt-12">
            {frontmatter.title && (
              <h1 className="font-display text-[36px] leading-10 font-semibold tracking-tightest text-ink">
                {frontmatter.title}
              </h1>
            )}

            {frontmatter.description && (
              <p className="mt-4 max-w-2xl text-[16px] leading-6 text-ink-soft">
                {frontmatter.description}
              </p>
            )}
          </header>

          {params.slug === "voice-for-learn" && (
            <TalkAboutThisPage slug={params.slug} />
          )}

          <article
            className="
              mt-14
              max-w-3xl

              [&_h2]:mt-16
              [&_h2]:mb-6
              [&_h2]:font-display
              [&_h2]:text-[24px]
              [&_h2]:leading-8
              [&_h2]:font-semibold
              [&_h2]:tracking-tightest
              [&_h2]:text-ink

              [&_h3]:mt-12
              [&_h3]:mb-4
              [&_h3]:font-display
              [&_h3]:text-[20px]
              [&_h3]:leading-7
              [&_h3]:font-semibold
              [&_h3]:text-ink

              [&_p]:mb-6
              [&_p]:text-[16px]
              [&_p]:leading-6
              [&_p]:text-ink-soft

              /* NORMAL IMAGES */
              [&_img]:my-10
              [&_img]:h-auto
              [&_img]:w-full
              [&_img]:max-w-full
              [&_img]:rounded-lg

              /* GIF IMAGES */
              [&_img[src$='.gif']]:!w-[480px]
              [&_img[src$='.gif']]:!max-w-[480px]
              [&_img[src$='.gif']]:mx-auto

              [&_ul]:mb-6
              [&_ul]:space-y-2
              [&_ul]:pl-5

              [&_li]:text-[16px]
              [&_li]:leading-6
              [&_li]:text-ink-soft

              [&_blockquote]:my-10
              [&_blockquote]:border-l
              [&_blockquote]:border-ink-faint
              [&_blockquote]:pl-5
              [&_blockquote]:text-[20px]
              [&_blockquote]:leading-7
              [&_blockquote]:text-ink
            "
          >
            {content}
          </article>
        </div>
      </Container>
    </main>
  );
}