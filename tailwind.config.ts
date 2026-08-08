import type { Config } from "tailwindcss";

// ─────────────────────────────────────────────────────────────
// DESIGN TOKENS — edit these to fine‑tune the look of the whole
// site in one place. Colors approximate the VOX Framer site
// (warm paper background, near‑black ink, quiet hairline greys).
// ─────────────────────────────────────────────────────────────
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Exact palette supplied by the user (Color 1–6):
        paper: "#F7FAFB", // Color 5 — main page background
        card: "#DAE6ED", // Color 6 — card / panel / sidebar fill
        ink: "#364D5C", // Color 3 — primary heading text (darkest)
        "ink-soft": "#51748B", // Color 2 — body text
        "ink-faint": "#6C9BB9", // Color 1 — labels, eyebrows, links
        accentLight: "#91B4CB", // Color 4 — hairlines, subtle fills, icons
        line: "#91B4CB", // dividers (Color 4, used at reduced opacity)
        accent: "#6C9BB9", // Color 1 — interactive / hover
      },
      fontFamily: {
        // Inter used for everything — "display" carries a heavier
        // weight + tighter tracking via utility classes, "mono" is
        // kept as an alias so uppercase label styling still reads
        // distinctly (tracked-out Inter, not a real monospace).
        display: ["var(--font-body)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1120px",
      },
      spacing: {
        sidebar: "272px",
      },
      letterSpacing: {
        tightest: "-0.03em",
        widest2: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;
