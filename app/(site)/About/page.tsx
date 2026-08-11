import Container from "@/components/Container";

export const metadata = {
  title: "Overview — VOX",
};

export default function OverviewPage() {
  return (
    <main>
      <section className="py-16">
        <Container>
          {/* Page title */}
          <h1 className="font-display text-[28px] md:text-[30px] font-semibold tracking-tight text-ink">
            A living archive of human-AI dialogue
          </h1>

          {/* Divider */}
          <div className="mt-16 border-t hairline" />

          {/* Introduction */}
          <div className="mt-10 max-w-4xl space-y-8">
            <p className="text-[16px] leading-relaxed text-ink">
              VOX is my ongoing documentation on conversational and voice AI
              design.
            </p>

            <p className="text-[16px] leading-relaxed text-ink">
              It documents design principles, interaction patterns, terminology,
              experiments, and reusable components developed while researching
              how people interact with AI through conversation.
            </p>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section className="border-t hairline py-10">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-[16px] font-medium text-ink">
              Overview
            </h2>

            <div className="mt-8 space-y-5">
              <p className="text-[16px] leading-relaxed text-ink">
                Voice is becoming a primary interface for interacting with
                software.
              </p>

              <p className="text-[16px] leading-relaxed text-ink">
                Unlike graphical interfaces, conversational systems operate
                through language, memory, timing, context, and uncertainty.
                Designing these experiences requires principles that extend
                beyond traditional UI and UX.
              </p>

              <p className="text-[16px] leading-relaxed text-ink">
                This platform documents the research, frameworks, experiments,
                and design decisions developed while exploring conversational
                and voice AI.
              </p>

              <p className="text-[16px] leading-relaxed text-ink">
                Rather than presenting isolated projects, the content is
                organized as an evolving design practice. Every framework,
                component, case study, and experiment contributes to a broader
                understanding of how intelligent conversational systems should
                be designed, evaluated, and improved.
              </p>

              <p className="text-[16px] leading-relaxed text-ink">
                The objective is not to define a universal standard, but to
                establish practical patterns that help designers and product
                teams create more reliable, understandable, and human-centered
                voice experiences.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}