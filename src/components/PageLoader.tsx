"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"counting" | "reveal" | "exit">("counting");

  useEffect(() => {
    // Animate progress from 0 → 100
    let start: number | null = null;
    const duration = 1800; // ms to fill bar

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(step);
      } else {
        // Brief pause at 100%, then reveal animation
        setTimeout(() => {
          setPhase("reveal");
          setTimeout(() => setPhase("exit"), 600);
          setTimeout(() => setLoading(false), 1200);
        }, 250);
      }
    };

    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const letters = "ORCODIX".split("");

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Subtle radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,127,55,0.08)_0%,transparent_65%)] pointer-events-none" />

          {/* Noise texture */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Center Content */}
          <div className="relative z-10 flex flex-col items-center gap-10 select-none">
            {/* Logo — animated letter stagger */}
            <div className="flex items-center overflow-hidden">
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  className="font-black tracking-tighter text-white"
                  style={{
                    fontSize: "clamp(3.5rem, 10vw, 8rem)",
                    lineHeight: 1,
                    display: "inline-block",
                    backgroundImage:
                      "linear-gradient(180deg, #FFFFFF 40%, rgba(255,255,255,0.45) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.06 + 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {letter}
                </motion.span>
              ))}

              {/* Dot */}
              <motion.span
                className="font-black text-[#FF7F37]"
                style={{
                  fontSize: "clamp(3.5rem, 10vw, 8rem)",
                  lineHeight: 1,
                  display: "inline-block",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: letters.length * 0.06 + 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                .
              </motion.span>
            </div>

            {/* Tagline */}
            <motion.p
              className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-white/30"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Digital Design & Development
            </motion.p>

            {/* Progress bar container */}
            <motion.div
              className="w-[200px] sm:w-[260px] h-[1px] bg-white/10 rounded-full overflow-hidden relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <motion.div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#FF7F37] to-white/60 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </motion.div>

            {/* Progress counter */}
            <motion.span
              className="text-[11px] font-bold tabular-nums text-white/25 tracking-widest -mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              {progress}%
            </motion.span>
          </div>

          {/* Corner label — bottom left */}
          <motion.div
            className="absolute bottom-8 left-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Loading experience
          </motion.div>

          {/* Corner label — bottom right */}
          <motion.div
            className="absolute bottom-8 right-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            © 2026 ORCODIX
          </motion.div>

          {/* Wipe-out flash overlay on exit */}
          {phase === "reveal" && (
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.06 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
