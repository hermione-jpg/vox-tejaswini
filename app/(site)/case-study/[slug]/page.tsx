import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import BlockRenderer from "@/components/BlockRenderer";
import { caseStudies, getCaseStudy } from "@/content/case-studies";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug);
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const cs = getCaseStudy(params.slug);
  if (!cs) return notFound();

  return (
    <Container className="py-16 max-w-3xl">
      <Link
        href="/case-study"
        className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint link-quiet"
      >
        ← Case Studies
      </Link>
      <h1 className="mt-6 font-display text-4xl md:text-5xl font-semibold tracking-tightest leading-tight text-ink">
        {cs.title}
      </h1>
      <p className="mt-4 text-lg text-ink-soft">{cs.summary}</p>

      <div className="mt-14">
        <BlockRenderer blocks={cs.body} />
      </div>
    </Container>
  );
}
