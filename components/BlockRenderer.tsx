import { Block } from "@/content/case-studies";

export default function BlockRenderer({
  blocks,
}: {
  blocks: Block[];
}) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        if (block.type === "heading") {
          return (
            <h2
              key={i}
              className="pt-8 font-display text-[24px] font-semibold leading-8 tracking-tightest text-ink"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "paragraph") {
          return (
            <p
              key={i}
              className="text-[16px] leading-6 text-ink-soft"
            >
              {block.text}
            </p>
          );
        }

        if (block.type === "image") {
          return (
            <figure
              key={i}
              className="flex justify-center py-4"
            >
              <img
                src={block.src}
                alt={block.alt}
                className="max-h-[440px] w-auto max-w-full object-contain"
              />
            </figure>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={i} className="space-y-2 pl-1">
              {block.items.map((item, j) => (
                <li
                  key={j}
                  className="flex gap-3 text-[16px] leading-6 text-ink-soft"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
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
              className="rounded-xl border hairline bg-card px-6 py-5 font-display text-[20px] leading-7 font-medium text-ink"
            >
              “{block.text}”

              {block.attribution && (
                <cite className="mt-2 block font-mono text-[12px] leading-4 not-italic uppercase tracking-widest2 text-ink-faint">
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