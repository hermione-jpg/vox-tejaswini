import { Block } from "@/content/case-studies";

export default function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        if (block.type === "heading") {
          return (
            <h2
              key={i}
              className="pt-6 font-display text-2xl md:text-3xl font-semibold tracking-tightest text-ink"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "paragraph") {
          return (
            <p
              key={i}
              className="text-[17px] leading-relaxed text-ink-soft"
            >
              {block.text}
            </p>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={i} className="space-y-2 pl-1">
              {block.items.map((item, j) => (
                <li
                  key={j}
                  className="flex gap-3 text-[17px] leading-relaxed text-ink-soft"
                >
                  <span className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote
              key={i}
              className="rounded-xl bg-card border hairline pl-6 pr-6 py-5 font-display text-xl md:text-2xl font-medium text-ink"
            >
              “{block.text}”
              {block.attribution && (
                <cite className="mt-2 block font-mono not-italic text-[11px] uppercase tracking-widest2 text-ink-faint">
                  {block.attribution}
                </cite>
              )}
            </blockquote>
          );
        }
        return null;
      })}
    </div>
  );
}
