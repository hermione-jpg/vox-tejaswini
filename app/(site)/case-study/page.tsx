import Link from "next/link";
import Container from "@/components/Container";
import { caseStudies } from "@/content/case-studies";

export const metadata = {
  title: "Case Studies — VOX",
};

export default function CaseStudyIndex() {
  return (
    <main className="min-h-screen bg-[#51748B]">
      <Container className="py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-study/${cs.slug}`}
              className="group flex min-h-[252px] flex-col overflow-hidden rounded-lg bg-[#DCE8EE] transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="mx-3 mt-3 aspect-[16/9] overflow-hidden rounded-md">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 items-end justify-between gap-4 px-5 py-4">
                <h2 className="max-w-[220px] text-[16px] font-medium leading-6 text-ink">
                  {cs.title}
                </h2>

                <span className="shrink-0 text-[28px] leading-none text-ink">
                  ›
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}