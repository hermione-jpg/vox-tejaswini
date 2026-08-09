import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import BlockRenderer from "@/components/BlockRenderer";
import { lessons, getLesson } from "@/content/fundamentals";

export function generateStaticParams() {
  return lessons.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const lesson = getLesson(params.slug);
  return {
    title: lesson ? `${lesson.title} — VOX` : "VOX",
  };
}

export default function LessonPage({
  params,
}: {
  params: { slug: string };
}) {
  const lesson = getLesson(params.slug);
  if (!lesson) return notFound();

  const foundations = lessons.filter(l => l.group === "Foundations");
  const realtime = lessons.filter(l => l.group === "Real-Time Conversations");

  return (
    <div className="flex">

      {/* SIDEBAR */}
      <aside className="hidden md:block w-[260px] bg-[#DAE6ED] border-r border-[#9A9A9A] sticky top-0 h-screen">
        <div className="h-full overflow-y-auto px-6 py-6 text-[14px] leading-[20px] text-[#2F3E46] relative">

          {/* VOX */}
          <div className="text-[20px] font-semibold mb-6 tracking-tight">
            VOX
          </div>

          {/* Foundations */}
          <div className="mb-8">
            <p className="text-[11px] uppercase tracking-[0.12em] text-[#5C7C99] mb-3">
              Foundations
            </p>

            <ul className="space-y-[6px]">
              {foundations.map((l) => (
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

          {/* Real-Time */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.12em] text-[#5C7C99] mb-3">
              Real-Time Conversations
            </p>

            <ul className="space-y-[6px]">
              {realtime.map((l) => (
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

          {/* Bottom */}
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
      <div className="flex-1">
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

            <div className="mt-14">
              <BlockRenderer blocks={lesson.body} />
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