import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import BlockRenderer from "@/components/BlockRenderer";
import LessonSidebar from "@/components/LessonSidebar";
import { lessons, getLesson } from "@/content/fundamentals";

export function generateStaticParams() {
  return lessons.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const lesson = getLesson(params.slug);
  return { title: lesson ? `${lesson.title} — VOX` : "VOX" };
}

export default function LessonPage({ params }: { params: { slug: string } }) {
  const lesson = getLesson(params.slug);
  if (!lesson) return notFound();

  return (
    <>
      {/* Fixed left side panel, Framer-style, mirrors the main SiteSidebar */}
      <aside className="hidden md:block md:fixed md:inset-y-0 md:left-0 md:top-14 md:w-sidebar md:overflow-y-auto md:border-r hairline md:bg-card md:px-8 md:py-10">
        <LessonSidebar current={lesson.slug} />
      </aside>

      <Container className="md:ml-sidebar py-16">
        <article className="max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint">
            {lesson.group}
          </p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tightest leading-tight text-ink">
            {lesson.title}
          </h1>
          <p className="mt-6 font-display text-xl md:text-2xl font-medium text-ink-soft">
            {lesson.kicker}
          </p>

          {/* Mobile-only lesson nav, since the fixed side panel is hidden below md */}
          <details className="mt-8 md:hidden rounded-lg border hairline bg-card p-4">
            <summary className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint cursor-pointer">
              All lessons
            </summary>
            <div className="mt-4">
              <LessonSidebar current={lesson.slug} />
            </div>
          </details>

          <div className="mt-14">
            <BlockRenderer blocks={lesson.body} />
          </div>

          {lesson.next && (
            <div className="mt-20 border-t hairline pt-8">
              <Link
                href={`/fundamentals/${lesson.next.slug}`}
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest2 text-ink link-quiet"
              >
                Next — {lesson.next.title} →
              </Link>
            </div>
          )}
        </article>
      </Container>
    </>
  );
}
