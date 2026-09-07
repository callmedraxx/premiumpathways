"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import FlightReadout from "../FlightReadout";

/* The flight is WebGL and heavy, so it mounts on the client after first paint
   and never blocks it. It sits fixed behind everything; the page above is
   transparent where the world should show and solid where reading matters.
   Two scrims on top buy every headline a guaranteed contrast floor: a field
   tuned to look good alone is always too loud to set type on. */
const Flight = dynamic(() => import("./Flight"), { ssr: false });

export default function Background() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const id = window.setTimeout(() => setOn(true), 80);
    return () => window.clearTimeout(id);
  }, []);
  return (
    <>
      <div className="fixed inset-0 -z-10 bg-night-950" aria-hidden>
        {on && <Flight />}
        <div className="pointer-events-none absolute inset-0 bg-night-950/35" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 70% at 62% 42%, transparent 0%, rgba(6,8,15,0.55) 80%)" }}
        />
      </div>
      <FlightReadout />
    </>
  );
}
