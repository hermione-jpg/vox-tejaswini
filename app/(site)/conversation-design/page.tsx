
import Link from "next/link";
import Container from "@/components/Container";
import { getConversationDesign } from "@/lib/getConversationDesign";

export const metadata = {
  title: "Conversation Design — VOX",
};

export default async function ConversationDesignIndex() {
  const caseStudies = await getConversationDesign();

  return (
    <main className="min-h-screen bg-[#51748B]">
      <Container className="py-14">
        <header className="mb-10 max-w-3xl">
          <h1 className="font-display text-[36px] leading-10 font-semibold tracking-tightest text-white">
            Conversation Design
          </h1>

          <p className="mt-4 text-[16px] leading-6 text-white/80">
            Designing how humans and AI communicate, and the decisions that
            make conversations natural and useful.
          </p>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/conversation-design/${cs.slug}`}
              className="group flex min-h-[120px] items-center justify-center rounded-lg bg-[#DCE8EE] px-5 py-5 text-center transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex max-w-[280px] flex-col items-center gap-2">
                <h2 className="text-[16px] font-medium leading-6 text-ink">
                  {cs.title}
                </h2>

                <p className="text-[12px] leading-4 text-ink-soft">
                  {cs.description}
                </p>
              </div>

              <span className="ml-3 shrink-0 text-[24px] leading-none text-ink transition-transform duration-200 group-hover:translate-x-1">
                ›
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
