import Container from "@/components/Container";
import { homeCopy } from "@/content/site";

export const metadata = { title: "Overview — VOX" };

// Edit the sections below directly — this page is intentionally
// simple prose so it's easy to restructure.
export default function OverviewPage() {
  return (
    <Container className="py-16 max-w-3xl">
      <p className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint">
        VOX
      </p>
      <h1 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tightest text-ink">
        Overview
      </h1>

      <div className="mt-14 space-y-6">
        <p className="text-[19px] leading-relaxed text-ink">
          {homeCopy.versionSection.text}
        </p>
        <h2 className="pt-6 font-display text-2xl font-semibold tracking-tightest text-ink">
          {homeCopy.conversationSection.label}
        </h2>
        {homeCopy.conversationSection.lines.map((line, i) => (
          <p key={i} className="text-[17px] leading-relaxed text-ink-soft">
            {line}
          </p>
        ))}
        <h2 className="pt-6 font-display text-2xl font-semibold tracking-tightest text-ink">
          {homeCopy.explorative.label}
        </h2>
        {homeCopy.explorative.lines.map((line, i) => (
          <p key={i} className="text-[17px] leading-relaxed text-ink-soft">
            {line}
          </p>
        ))}
      </div>
    </Container>
  );
}
