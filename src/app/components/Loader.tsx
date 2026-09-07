"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

/* The opening: the mark, and a runway line that fills as the page and the
   flight warm up. One beat, never longer than it must be, once per session,
   and instant for anyone who asked for reduced motion. */
export default function Loader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let skip = false;
    try {
      if (sessionStorage.getItem("pp-boarded") === "1" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) skip = true;
    } catch { /* private mode */ }
    if (skip) { setDone(true); return; }

    const MIN = 1300, MAX = 3200, t0 = performance.now();
    let ready = document.readyState === "complete";
    if (!ready) window.addEventListener("load", () => { ready = true; }, { once: true });
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / MIN);
      setProgress(p);
      if ((p >= 1 && ready) || t - t0 > MAX) {
        try { sessionStorage.setItem("pp-boarded", "1"); } catch { /* */ }
        window.setTimeout(() => setDone(true), 250);
      } else raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="pp-loader"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[200] grid place-items-center bg-night-950"
          aria-live="polite"
          aria-label="Loading"
        >
          <div className="flex w-64 flex-col items-center">
            <Image src="/img/prem.png" alt="Premium Pathways" width={200} height={109} priority className="h-auto w-44" />
            <div className="mt-8 h-px w-full overflow-hidden bg-chalk/12">
              <div className="h-full origin-left bg-ember" style={{ transform: `scaleX(${progress})` }} />
            </div>
            <p className="meta mt-4 flex items-center gap-3 text-chalk/60">
              <span>LOS</span>
              <i className="fas fa-plane text-[9px] text-ember" aria-hidden />
              <span>PEK</span>
              <span className="ml-2 normal-case tracking-normal">Boarding</span>
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
