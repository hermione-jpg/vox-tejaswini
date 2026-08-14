import Container from "@/components/Container";

export const metadata = {
  title: "Overview — VOX",
};

export default function OverviewPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-16">
        <Container>
          <h1 className="font-display text-[28px] font-semibold tracking-tight text-ink md:text-[32px]">
            Designing for interfaces that speak.
          </h1>

          <div className="mt-16 border-t hairline" />

          <div className="mt-10 max-w-4xl space-y-8">
            <p className="text-[16px] leading-6 text-ink">
              VOX is an independent research focused on{" "}
              <strong>
                voice interaction, conversational AI, and spoken interfaces.
              </strong>
            </p>

            <p className="text-[16px] leading-6 text-ink">
              It explores how interaction design changes when voice becomes the
              interface.
            </p>

            <p className="text-[16px] leading-6 text-ink">
              Voice interfaces do not have a visual surface to fall back on.
              There is no screen hierarchy to scan, button to press, or
              paragraph to reread. Interaction depends on speech, timing,
              turn-taking, memory, context, and system behaviour.
            </p>

            <p className="text-[16px] leading-6 text-ink">
              VOX studies these differences from a design perspective.
            </p>
          </div>
        </Container>
      </section>

      {/* Who it's for */}
      <section className="border-t hairline py-12">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-[16px] font-medium text-ink">
              Who it's for
            </h2>

            <div className="mt-8 space-y-6">
              <p className="text-[16px] leading-6 text-ink-soft">
                VOX is primarily for{" "}
                <strong className="text-ink">
                  UX, product, and conversation designers working with voice
                  AI.
                </strong>
              </p>

              <p className="text-[16px] leading-6 text-ink-soft">
                It is also for designers moving from screen-based interfaces
                into voice, and AI product teams who need to understand how
                technical systems affect the user experience.
              </p>

              <p className="text-[16px] leading-6 text-ink-soft">
                The work assumes basic design knowledge and builds toward
                practical, intermediate-level voice design knowledge.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What's inside */}
      <section className="border-t hairline py-12">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-[16px] font-medium text-ink">
              What's inside
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-[16px] font-medium text-ink">
                  Case Studies
                </h3>

                <p className="mt-2 text-[16px] leading-6 text-ink-soft">
                  Focused investigations into specific voice products, systems,
                  and interaction problems.
                </p>
              </div>

              <div>
                <h3 className="text-[16px] font-medium text-ink">
                  VOX System
                </h3>

                <p className="mt-2 text-[16px] leading-6 text-ink-soft">
                  A developing framework for designing voice AI, built from
                  principles and patterns identified through the research.
                </p>
              </div>

              <div>
                <h3 className="text-[16px] font-medium text-ink">
                  Fundamentals
                </h3>

                <p className="mt-2 text-[16px] leading-6 text-ink-soft">
                  The technical foundations designers need to understand voice
                  AI and its constraints.
                </p>
              </div>

              <div>
                <h3 className="text-[16px] font-medium text-ink">
                  Glossary
                </h3>

                <p className="mt-2 text-[16px] leading-6 text-ink-soft">
                  A concise reference for the terminology used across voice AI
                  and VOX.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How I work */}
      <section className="border-t hairline py-12">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-[16px] font-medium text-ink">
              How I work
            </h2>

            <div className="mt-8 space-y-8">
              <p className="text-[16px] leading-6 text-ink">
                Each study starts with a specific design question.
              </p>

              <p className="font-display text-[20px] leading-8 font-medium text-ink">
                Question → Research → Analysis → Prototype → Test → Principle
              </p>

              <p className="text-[16px] leading-6 text-ink-soft">
                I examine existing products, technical systems, and relevant
                research, then prototype where useful to investigate the
                interaction problem.
              </p>

              <p className="text-[16px] leading-6 text-ink-soft">
                Findings are documented and, where useful, developed into{" "}
                <strong className="text-ink">
                  principles and patterns for the VOX System.
                </strong>
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What VOX represents */}
      <section className="border-t hairline py-12 pb-20">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-[16px] font-medium text-ink">
              What VOX represents
            </h2>

            <div className="mt-8 space-y-8">
              <p className="text-[16px] leading-6 text-ink-soft">
                VOX is{" "}
                <strong className="text-ink">
                  not a product or commercial platform.
                </strong>
              </p>

              <p className="text-[16px] leading-6 text-ink-soft">
                It is an evolving body of design research and a framework for
                designing voice AI.
              </p>

              <p className="font-display text-[20px] leading-8 font-medium text-ink">
                Research → Framework → Practice
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}