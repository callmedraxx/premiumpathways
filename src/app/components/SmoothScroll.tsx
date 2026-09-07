"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/* Inertial smooth scroll, the small thing that makes a long marketing page feel
   engineered rather than default. Disabled for anyone who asked for reduced
   motion; the native scroll then stands. */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.05, lerp: 0.1, wheelMultiplier: 1, touchMultiplier: 1.4 });
    let raf = 0;
    const loop = (t: number) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); };
  }, []);
  return null;
}
