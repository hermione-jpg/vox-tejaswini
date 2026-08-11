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
          <h1 className="font-display text-[28px] md:text-[32px] font-semibold tracking-tight text-ink">
            Designing for interfaces that speak.
          </h1>

          <div className="mt-16 border-t hairline" />

          <div className="mt-10 max-w-4xl space-y-8">
            <p className="text-[16px] leading-6 text-ink">
              VOX is an independent research and design practice exploring{" "}
              <strong>
                voice interaction, conversational AI, and the systems behind
                spoken interfaces.
              </strong>
            </p>

            <p className="text-[16px] leading-6 text-ink">
              It started with a simple observation:
            </p>

            <p className="font-display text-[20px] leading-8 font-medium text-ink">
              A voice interface doesn't have a visual surface to fall back on.
            </p>

            <p className="text-[16px] leading-6 text-ink">
              There is no screen hierarchy to scan, no button to press, and no
              paragraph to reread. The interaction has to communicate through
              speech, timing, turn-taking, memory, context, and response.
            </p>

            <p className="text-[16px] leading-6 text-ink">
              That makes voice design less about designing screens and more
              about designing behaviour over time.
            </p>
          </div>
        </Container>
      </section>

      {/* What I work on */}
      <section className="border-t hairline py-12">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-[16px] font-medium text-ink">
              What I work on
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-[16px] font-medium text-ink">
                  Vocal behaviour
                </h3>
                <p className="mt-2 text-[16px] leading-6 text-ink-soft">
                  How pace, pauses, emphasis, pronunciation, and delivery
                  shape personality and meaning.
                </p>
              </div>

              <div>
                <h3 className="text-[16px] font-medium text-ink">
                  Conversation design
                </h3>
                <p className="mt-2 text-[16px] leading-6 text-ink-soft">
                  How systems handle turns, interruptions, ambiguity, repair,
                  memory, and changing user intent.
                </p>
              </div>

              <div>
                <h3 className="text-[16px] font-medium text-ink">
                  Voice UX
                </h3>
                <p className="mt-2 text-[16px] leading-6 text-ink-soft">
                  How familiar interactions such as learning, assistance,
                  search, and information retrieval change when they become
                  conversational.
                </p>
              </div>

              <div>
                <h3 className="text-[16px] font-medium text-ink">
                  AI behaviour
                </h3>
                <p className="mt-2 text-[16px] leading-6 text-ink-soft">
                  How latency, tool use, context, uncertainty, and model
                  limitations become part of the user experience.
                </p>
              </div>

              <div>
                <h3 className="text-[16px] font-medium text-ink">
                  Evaluation
                </h3>
                <p className="mt-2 text-[16px] leading-6 text-ink-soft">
                  How voice interactions can be observed, tested, and measured
                  beyond whether the system technically understood the words.
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
                I don't treat voice as a visual interface with speech added on
                top.
              </p>

              <p className="text-[16px] leading-6 text-ink">
                I start with the interaction itself.
              </p>

              <p className="font-display text-[20px] leading-8 font-medium text-ink">
                Question → Research → Model → Prototype → Test → Principle
              </p>

              <p className="text-[16px] leading-6 text-ink-soft">
                Each project begins with a specific interaction problem. I
                study existing products and relevant research, identify the
                underlying behaviour, build a focused prototype, and document
                what the investigation reveals.
              </p>

              <p className="text-[16px] leading-6 text-ink-soft">
                When a pattern proves useful, I turn it into a reusable{" "}
                <strong>principle, pattern, or system.</strong>
              </p>

              <p className="text-[16px] leading-6 text-ink">
                VOX therefore moves continuously between:
              </p>

              <p className="font-display text-[20px] leading-8 font-medium text-ink">
                Research ↔ Design ↔ Prototyping ↔ Systems
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Built through practice */}
      <section className="border-t hairline py-12 pb-20">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-[16px] font-medium text-ink">
              Built through practice
            </h2>

            <div className="mt-8 space-y-8">
              <p className="text-[16px] leading-6 text-ink-soft">
                VOX is an evolving body of work, not a finished methodology.
              </p>

              <p className="text-[16px] leading-6 text-ink-soft">
                The goal is to move beyond <em>“voice feels natural”</em> and
                develop a more rigorous understanding of{" "}
                <strong>
                  what makes spoken interactions understandable, useful,
                  expressive, and trustworthy.
                </strong>
              </p>

              <p className="font-display text-[16px] leading-8 font-medium text-ink">
                The interface is changing.
                <br />
                VOX is exploring what design needs to become with it.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}