import Link from "next/link";
import Container from "@/components/Container";
import { caseStudies } from "@/content/case-studies";

export const metadata = { title: "Case Studies — VOX" };

export default function CaseStudyIndex() {
  return (
    <Container className="py-16 md:py-20">
      <p className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint">
        VOX
      </p>
      <h1 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tightest text-ink">
        Case Studies
      </h1>

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {caseStudies.map((cs, i) => (
          <Link
            key={cs.slug}
            href={`/case-study/${cs.slug}`}
            className="group flex flex-col justify-between rounded-2xl bg-card border hairline p-7 min-h-[220px] transition-colors hover:border-accent"
          >
            <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tightest text-ink group-hover:text-accent transition-colors">
                {cs.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {cs.summary}
              </p>
            </div>
            <span className="mt-6 font-mono text-[11px] uppercase tracking-widest2 text-ink-faint group-hover:text-ink transition-colors">
              Read case study →
            </span>
          </Link>
        ))}
      </div>
    </Container>
  );
}
