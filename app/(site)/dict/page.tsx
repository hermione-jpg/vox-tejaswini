import Container from "@/components/Container";
import { glossary } from "@/content/glossary";

export const metadata = { title: "Glossary — VOX" };

export default function GlossaryPage() {
  const sorted = [...glossary].sort((a, b) => a.term.localeCompare(b.term));

  return (
    <Container className="py-16 max-w-3xl">
      <p className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint">
        VOX
      </p>
      <h1 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tightest text-ink">
        Glossary
      </h1>
      <p className="mt-4 text-lg text-ink-soft">
        Terms used across the VOX design system.
      </p>

      <dl className="mt-16 divide-y hairline border-t hairline">
        {sorted.map((t) => (
          <div key={t.term} className="py-6">
            <dt className="font-display text-xl font-semibold text-ink">{t.term}</dt>
            <dd className="mt-2 text-[16px] leading-relaxed text-ink-soft">
              {t.definition}
            </dd>
          </div>
        ))}
      </dl>
    </Container>
  );
}
