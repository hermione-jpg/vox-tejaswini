import Link from "next/link";
import { lessonGroups, lessons } from "@/content/fundamentals";

export default function LessonSidebar({ current }: { current?: string }) {
  return (
    <nav className="space-y-10">
      {lessonGroups.map((group) => (
        <div key={group}>
          <p className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint mb-3">
            {group}
          </p>
          <ul className="space-y-2">
            {lessons
              .filter((l) => l.group === group)
              .map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/fundamentals/${l.slug}`}
                    className={`text-sm leading-snug link-quiet ${
                      current === l.slug
                        ? "text-ink font-medium"
                        : "text-ink-soft"
                    }`}
                  >
                    {l.navTitle}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
