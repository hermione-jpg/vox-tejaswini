import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";

import Container from "@/components/Container";
import {
  getCaseStudyContent,
  getCaseStudySlugs,
} from "@/lib/getCaseStudies";

type PageProps = {
  params: {
    slug: string;
  };
};

type Frontmatter = {
  title?: string;
  description?: string;
};

export async function generateStaticParams() {
  const slugs = await getCaseStudySlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function CaseStudyPage({
  params,
}: PageProps) {
  const source = await getCaseStudyContent(params.slug);

  if (!source) {
    notFound();
  }

  const { content, frontmatter } = await compileMDX<Frontmatter>({
    source,
    options: {
      parseFrontmatter: true,
    },
  });

  return (
    <main>
      <Container>
        <div className="py-12">
          <Link
            href="/case-study"
            className="text-[16px] leading-6 text-ink-soft transition-opacity hover:opacity-70"
          >
            ← Case Studies
          </Link>

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

              [&_img]:my-10
              [&_img]:h-auto
              [&_img]:max-w-full
              [&_img]:rounded-lg

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
