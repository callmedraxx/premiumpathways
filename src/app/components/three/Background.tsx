"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

/* The globe is heavy and WebGL-only, so it loads on the client after the first
   paint and never blocks it. It sits fixed behind everything on the navy
   ground; ivory reading sections are opaque and simply cover it, so it shows
   through the hero, the CTA bands and the footer, exactly where the brand wants
   a sense of the wider world. A radial navy scrim keeps text legible on top. */
const Globe = dynamic(() => import("./Globe"), { ssr: false });

export default function Background() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const id = window.setTimeout(() => setOn(true), 120);
    return () => window.clearTimeout(id);
  }, []);
  return (
    <div className="fixed inset-0 -z-10" aria-hidden style={{ background: "hsl(230 60% 7%)" }}>
      {on && <Globe />}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 90% 70% at 60% 40%, transparent 0%, hsl(230 60% 7% / 0.65) 78%)" }}
      />
    </div>
  );
}
