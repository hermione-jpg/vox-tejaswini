"use client";

import { getConcept } from "@/lib/concepts";
import { motion } from "framer-motion";

export function RelatedConcepts({
  ids,
  onSelect,
}: {
  ids: string[];
  onSelect: (name: string) => void;
}) {
  const items = ids.map((id) => getConcept(id)).filter(Boolean);
  if (items.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 animate-fadeUp">
      {items.map((c, i) => (
        <motion.button
          key={c!.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06 }}
          onClick={() => onSelect(`Explain ${c!.name}.`)}
          className="rounded-full border hairline bg-white px-4 py-2 text-sm text-ink hover:border-accent hover:bg-accent/10 transition-colors shadow-sm"
        >
          {c!.name}
        </motion.button>
      ))}
    </div>
  );
}
