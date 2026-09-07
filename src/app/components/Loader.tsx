"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* The opening: a gold meridian ring draws itself closed around the mark while
   the page and the globe warm up, under one line — "Preparing your pathway".
   It never blocks longer than it must (a real minimum beat, a hard failsafe),
   shows once per session, and yields to reduced-motion instantly. */
export default function Loader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let skip = false;
    try {
      if (
        sessionStorage.getItem("pp-opened") === "1" ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) skip = true;
    } catch { /* private mode */ }
    if (skip) { setDone(true); return; }

    const MIN = 1500, MAX = 3800, t0 = performance.now();
    let ready = false;
    if (document.readyState === "complete") ready = true;
    else window.addEventListener("load", () => { ready = true; }, { once: true });
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / MIN);
      setProgress(p);
      if ((p >= 1 && ready) || t - t0 > MAX) {
        try { sessionStorage.setItem("pp-opened", "1"); } catch { /* */ }
        window.setTimeout(() => setDone(true), 350);
      } else raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const C = 2 * Math.PI * 52;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="pp-loader"
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[200] grid place-items-center"
          style={{ background: "hsl(230 60% 7%)" }}
          aria-live="polite"
          aria-label="Loading"
        >
          <div className="relative grid place-items-center">
            <svg width="128" height="128" viewBox="0 0 128 128" className="rotate-[-90deg]">
              <circle cx="64" cy="64" r="52" fill="none" stroke="hsl(231 30% 22%)" strokeWidth="2" />
              <circle
                cx="64" cy="64" r="52" fill="none" stroke="hsl(40 68% 66%)" strokeWidth="2"
                strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C * (1 - progress)}
              />
            </svg>
            {/* a small meridian glyph in the middle, a globe reduced to two arcs */}
            <svg width="46" height="46" viewBox="0 0 46 46" className="absolute">
              <circle cx="23" cy="23" r="20" fill="none" stroke="hsl(40 60% 52%)" strokeWidth="1.5" />
              <ellipse cx="23" cy="23" rx="8" ry="20" fill="none" stroke="hsl(40 60% 52%)" strokeWidth="1.5" />
              <line x1="3" y1="23" x2="43" y2="23" stroke="hsl(40 60% 52%)" strokeWidth="1.5" />
            </svg>
          </div>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="u-eyebrow absolute bottom-[38%] mt-8"
          >
            Preparing your pathway
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
