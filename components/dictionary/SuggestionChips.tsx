"use client";

import { motion } from "framer-motion";
import { suggestionPrompts } from "@/lib/concepts";

export function SuggestionChips({ onSelect }: { onSelect: (text: string) => void }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 max-w-xl">
      {suggestionPrompts.map((prompt, i) => (
        <motion.button
          key={prompt}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 + i * 0.06 }}
          onClick={() => onSelect(prompt)}
          className="rounded-full border hairline bg-white px-4 py-2 text-sm text-ink-soft hover:text-ink hover:border-accent transition-colors shadow-sm"
        >
          {prompt}
        </motion.button>
      ))}
    </div>
  );
}
