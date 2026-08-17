import Link from "next/link";
import Container from "@/components/Container";
import { getCaseStudies } from "@/lib/getCaseStudies";

export const metadata = {
  title: "Voice UX — VOX",
};

export default async function VoiceUXIndex() {
  const caseStudies = await getCaseStudies();

  return (
    <main className="min-h-screen bg-[#51748B]">
      <Container className="py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/voice-ux/${cs.slug}`}
              className="group flex min-h-[252px] flex-col overflow-hidden rounded-lg bg-[#DCE8EE] transition-transform duration-200 hover:-translate-y-1"
            >
              {cs.image && (
                <div className="mx-3 mt-3 aspect-[16/9] overflow-hidden rounded-md">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              <div className="flex flex-1 items-end justify-between gap-4 px-5 py-4">
                <div className="flex flex-col gap-1">
                  <h2 className="max-w-[220px] text-[16px] font-medium leading-6 text-ink">
                    {cs.title}
                  </h2>

                  {cs.description && (
                    <p className="max-w-[220px] text-[12px] leading-4 text-ink-soft">
                      {cs.description}
                    </p>
                  )}
                </div>

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