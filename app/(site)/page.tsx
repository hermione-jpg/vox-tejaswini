import Container from "@/components/Container";
import Ripple from "@/components/Ripple";
import { homeCopy, siteConfig } from "@/content/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-28 md:pt-28 md:pb-36">
        <Container className="flex flex-col items-center text-center">
          <p className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint">
            {homeCopy.eyebrow}
          </p>
          <h1 className="mt-6 font-display text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tightest text-ink">
            {homeCopy.heroTitle}
          </h1>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-widest2 text-ink-faint">
            {homeCopy.heroVersion}
          </p>

          <Ripple />

          <div className="mt-16 max-w-2xl space-y-5">
            {homeCopy.heroLines.map((line, i) => (
              <p
                key={i}
                className="font-display text-xl md:text-2xl font-medium leading-snug text-ink"
              >
                {line}
              </p>
            ))}
          </div>

          <p className="mt-10 max-w-xl text-[17px] leading-relaxed text-ink-soft">
            {homeCopy.heroClosing}
          </p>

          <p className="mt-8 font-display text-lg font-medium text-ink-faint">
            {homeCopy.heroFooterLine}
          </p>
        </Container>
      </section>

      {/* Version */}
      <section className="border-t hairline py-20">
        <Container className="grid gap-10 md:grid-cols-[200px_1fr]">
          <h3 className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint">
            {homeCopy.versionSection.label}
          </h3>
          <p className="max-w-2xl text-[19px] leading-relaxed text-ink">
            {homeCopy.versionSection.text}
          </p>
        </Container>
      </section>

      {/* Conversation as a System */}
      <section className="border-t hairline py-20">
        <Container className="grid gap-10 md:grid-cols-[200px_1fr]">
          <h3 className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint">
            {homeCopy.conversationSection.label}
          </h3>
          <div className="max-w-2xl space-y-5">
            {homeCopy.conversationSection.lines.map((line, i) => (
              <p key={i} className="text-[19px] leading-relaxed text-ink">
                {line}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* The Ripple Hypothesis */}
      <section className="border-t hairline py-20 bg-card/60">
        <Container className="grid gap-10 md:grid-cols-[200px_1fr]">
          <h3 className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint">
            {homeCopy.ripple.label}
          </h3>
          <div className="max-w-2xl space-y-5">
            <p className="font-display text-2xl md:text-3xl font-semibold tracking-tightest leading-snug text-ink">
              {homeCopy.ripple.title}
            </p>
            {homeCopy.ripple.lines.map((line, i) => (
              <p key={i} className="text-[17px] leading-relaxed text-ink-soft">
                {line}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* Explorative Design */}
      <section className="border-t hairline py-20">
        <Container className="grid gap-10 md:grid-cols-[200px_1fr]">
          <h3 className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint">
            {homeCopy.explorative.label}
          </h3>
          <div className="max-w-2xl space-y-5">
            {homeCopy.explorative.lines.map((line, i) => (
              <p key={i} className="text-[19px] leading-relaxed text-ink">
                {line}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t hairline py-20">
        <Container className="flex flex-col items-center text-center gap-6">
          <p className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint">
            Pinned — A Design System for Voice AI &amp; Conversational
            Interfaces
          </p>
          <a
            href={siteConfig.figmaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border hairline px-6 py-3 font-mono text-[11px] uppercase tracking-widest2 text-ink hover:bg-ink hover:text-paper transition-colors"
          >
            {homeCopy.figmaCta}
          </a>
        </Container>
      </section>
    </>
  );
}
