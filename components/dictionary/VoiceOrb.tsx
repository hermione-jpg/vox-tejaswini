"use client";

import { motion, AnimatePresence } from "framer-motion";

export type OrbState = "idle" | "listening" | "thinking" | "speaking";

const stateLabel: Record<OrbState, string> = {
  idle: "Tap to talk",
  listening: "Listening…",
  thinking: "Thinking…",
  speaking: "Speaking…",
};

export function VoiceOrb({
  state,
  size = 220,
  onClick,
}: {
  state: OrbState;
  size?: number;
  onClick?: () => void;
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={onClick}
        aria-label={stateLabel[state]}
        style={{ width: size, height: size }}
        className="relative flex items-center justify-center rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/40"
      >
        {/* Ambient outer glow rings */}
        <AnimatePresence>
          {(state === "listening" || state === "idle") && (
            <>
              {[0, 0.5, 1].map((delay) => (
                <motion.span
                  key={delay}
                  className="absolute inset-0 rounded-full bg-accent/20"
                  initial={{ scale: 0.9, opacity: 0.5 }}
                  animate={{ scale: 1.6, opacity: 0 }}
                  transition={{ duration: 2.2, delay, repeat: Infinity, ease: "easeOut" }}
                />
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Core orb */}
        <motion.div
          className="relative flex items-center justify-center rounded-full"
          style={{
            width: size * 0.72,
            height: size * 0.72,
            background:
              "radial-gradient(circle at 35% 30%, #4B7690 0%, #364D5C 55%, #263640 100%)",
            boxShadow:
              "0 8px 32px rgba(54,77,92,0.25), inset 0 0 30px rgba(108,155,185,0.25)",
          }}
          animate={
            state === "idle"
              ? { scale: [1, 1.02, 1] }
              : state === "thinking"
              ? { rotate: 360 }
              : { scale: 1 }
          }
          transition={
            state === "thinking"
              ? { duration: 5, repeat: Infinity, ease: "linear" }
              : { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <OrbCenter state={state} />
        </motion.div>
      </button>

      <motion.p
        key={state}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-sm font-medium tracking-wide text-ink-soft"
      >
        {stateLabel[state]}
      </motion.p>
    </div>
  );
}

function OrbCenter({ state }: { state: OrbState }) {
  if (state === "listening") {
    return (
      <div className="flex items-end gap-[3px] h-8">
        {[
          "animate-bar1",
          "animate-bar2",
          "animate-bar3",
          "animate-bar4",
          "animate-bar2",
        ].map((cls, i) => (
          <span
            key={i}
            className={`w-[3px] h-full origin-bottom rounded-full bg-accentLight ${cls}`}
          />
        ))}
      </div>
    );
  }

  if (state === "speaking") {
    return (
      <div className="relative flex items-center justify-center w-16 h-16">
        {[1, 2, 3].map((ring) => (
          <motion.span
            key={ring}
            className="absolute rounded-full border border-accentLight/50"
            style={{ width: ring * 18, height: ring * 18 }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.7, 0.3, 0.7] }}
            transition={{ duration: 1.6, repeat: Infinity, delay: ring * 0.15 }}
          />
        ))}
        <span className="w-2.5 h-2.5 rounded-full bg-accentLight" />
      </div>
    );
  }

  if (state === "thinking") {
    return (
      <div className="relative flex items-center justify-center w-16 h-16">
        <motion.div
          className="absolute w-14 h-14 rounded-[40%]"
          style={{ border: "1.5px solid rgba(145,180,203,0.5)" }}
          animate={{ rotate: 360, borderRadius: ["40%", "50%", "35%", "40%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-9 h-9 rounded-[45%]"
          style={{ border: "1.5px solid rgba(145,180,203,0.7)" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <span className="w-2 h-2 rounded-full bg-accentLight" />
      </div>
    );
  }

  // idle
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="9" y="2" width="6" height="12" rx="3" fill="#91B4CB" />
      <path
        d="M5 11a7 7 0 0 0 14 0M12 18v3"
        stroke="#91B4CB"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
