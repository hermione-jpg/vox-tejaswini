import Link from "next/link";
import Container from "@/components/Container";
import { getExperiments } from "@/lib/getExperiments";

export const metadata = {
  title: "Experiments — VOX",
};

export default async function ExperimentsIndex() {
  const experiments = await getExperiments();

  return (
    <main className="min-h-screen bg-[#51748B]">
      <Container className="py-14">
        <div className="mb-12">
          <h1 className="text-[36px] font-semibold text-white mb-4">
            Experiments
          </h1>
          <p className="max-w-2xl text-[16px] leading-6 text-white/80">
            Exploring emerging patterns, edge cases, and novel approaches in voice AI design. These investigations are open-ended — more questions than answers, more hypotheses than conclusions.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {experiments.map((exp) => (
            <Link
              key={exp.slug}
              href={`/experiments/${exp.slug}`}
              className="group flex min-h-[252px] flex-col overflow-hidden rounded-lg bg-[#DCE8EE] transition-transform duration-200 hover:-translate-y-1"
            >
              {exp.image && (
                <div className="mx-3 mt-3 aspect-[16/9] overflow-hidden rounded-md">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              <div className="flex flex-1 items-end justify-between gap-4 px-5 py-4">
                <div className="flex flex-col gap-1">
                  <h2 className="max-w-[220px] text-[16px] font-medium leading-6 text-ink">
                    {exp.title}
                  </h2>

                  {exp.description && (
                    <p className="max-w-[220px] text-[12px] leading-4 text-ink-soft">
                      {exp.description}
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
