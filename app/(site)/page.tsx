import Container from "@/components/Container";

export const metadata = {
  title: "Vox System — VOX",
};

export default function VoxSystemPage() {
  return (
    <main>
      {/* Header */}
      <section className="py-10">
        <Container>
          <h1 className="font-display text-[36px] font-medium tracking-tight text-ink">
            VOX Design System
          </h1>
        </Container>
      </section>

      {/* Conversation as a System */}
      <section className="border-t hairline py-14">
        <Container>
          <div className="max-w-5xl">
            <h2 className="text-[17px] font-medium text-ink">
              Conversation as a System
            </h2>

            <div className="mt-5 space-y-5">
              <p className="text-[16px] leading-relaxed text-ink-soft">
                Traditional design systems were built for graphical
                interfaces. Voice interfaces operate through conversation,
                timing, memory, and context—requiring principles that extend
                beyond screens.
              </p>

              <p className="text-[16px] leading-relaxed text-ink-soft">
                Vox explores how design systems can evolve to support
                interactions where dialogue becomes the primary interface.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Version */}
      <section className="border-t hairline py-14">
        <Container>
          <div className="max-w-5xl">
            <h2 className="text-[17px] font-medium text-ink">
              Version .v1
            </h2>

            <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">
              Version 1 is the first stable release of Vox. It establishes a
              shared foundation consisting of design tokens, interaction
              principles, conversation components, and documentation.
            </p>

            <a
              href="https://www.figma.com/design/BLtl8zCWIbYKUEUo1nKtCv/Vox-%E2%80%94-Open-Design-System-for-Conversational---Voice-AI--Community-?m=auto&t=5kpgiMMFHrogYety-6link"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-10 rounded-md bg-[#55798f] px-5 py-3 text-[16px] font-medium text-white transition-opacity hover:opacity-90"
            >
              Figma Design System
              <span className="text-[20px] leading-none">›</span>
            </a>
          </div>
        </Container>
      </section>

      {/* Ripple Hypothesis */}
      <section className="border-t hairline py-14">
        <Container>
          <div className="max-w-5xl">
            <h2 className="text-[17px] font-medium text-ink">
              The Ripple Hypothesis
            </h2>

            <div className="mt-5 space-y-5">
              <p className="text-[16px] leading-relaxed text-ink-soft">
                Every conversation begins with a single moment.
              </p>

              <p className="text-[16px] leading-relaxed text-ink-soft">
                A question. A response. A pause. An interruption.
              </p>

              <p className="text-[16px] leading-relaxed text-ink-soft">
                Like a ripple across water, each interaction expands beyond
                its point of origin, influencing everything that follows.
              </p>

              <p className="text-[16px] leading-relaxed text-ink-soft">
                VOX was created from this observation. Rather than viewing
                voice as another interface element, it explores conversation
                as a living system—one shaped by timing, context, feedback,
                and continuous exchange.
              </p>

              <p className="text-[16px] leading-relaxed text-ink-soft">
                As the technology changes, the ripples continue.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Explorative Design */}
      <section className="border-t hairline py-14">
        <Container>
          <div className="max-w-5xl">
            <h2 className="text-[17px] font-medium text-ink">
              Explorative Design
            </h2>

            <div className="mt-5 space-y-5">
              <p className="text-[16px] leading-relaxed text-ink-soft">
                The design system was not planned as a UI kit.
              </p>

              <p className="text-[16px] leading-relaxed text-ink-soft">
                It is emerging through continuous experimentation with
                layouts, interaction models, motion, color, typography, and
                conversational patterns. Every iteration challenged
                assumptions inherited from traditional interface design and
                explored new ways of representing conversation visually.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}