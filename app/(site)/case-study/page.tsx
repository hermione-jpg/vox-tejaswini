import Link from "next/link";
import Container from "@/components/Container";
import { caseStudies } from "@/content/case-studies";

export const metadata = {
  title: "Case Studies — VOX",
};

export default function CaseStudyIndex() {
  return (
    <main className="min-h-screen bg-[#51748B]">
      <Container className="py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-study/${cs.slug}`}
              className="group flex min-h-[252px] flex-col overflow-hidden rounded-lg bg-[#DCE8EE] transition-transform duration-200 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative mx-4 mt-4 aspect-[16/9] overflow-hidden rounded-lg bg-[#C7D7DE]">
                <img
                  src={`/images/case-studies/${cs.slug}.png`}
                  alt={cs.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Card content */}
              <div className="flex flex-1 items-center justify-between gap-4 px-6 py-6">
                <h2 className="max-w-[220px] text-[16px] font-medium leading-6 text-ink">
                  {cs.title}
                </h2>

                <span className="shrink-0 text-[28px] leading-7 text-ink transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}