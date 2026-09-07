"use client";

import { useEffect, useRef } from "react";
import { DESTINATION, ORIGIN, ROUTE_KM, journey, legLabel } from "../lib/journey";

/* The cabin display: route, where you are over, distance to run. Written to
   the DOM straight from the frame loop, because a number that changes sixty
   times a second has no business passing through a React render. */
export default function FlightReadout() {
  const km = useRef<HTMLSpanElement>(null);
  const leg = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let raf = 0;
    let last = "";
    const fmt = new Intl.NumberFormat("en-NG");
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const f = journey.flight;
      const left = Math.max(0, Math.round(ROUTE_KM * (1 - f)));
      if (km.current) km.current.textContent = left === 0 ? "Arrived" : `${fmt.format(left)} km to go`;
      const l = legLabel(f);
      if (l !== last && leg.current) { leg.current.textContent = l; last = l; }
      if (bar.current) bar.current.style.transform = `scaleX(${f})`;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className="pointer-events-none fixed bottom-5 right-5 z-30 hidden w-60 select-none rounded-2xl border border-chalk/[0.08] bg-night-950/70 px-4 py-3 backdrop-blur-md sm:block"
      aria-hidden
    >
      <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-chalk/70">
        <div className="flex items-center justify-between">
          <span>{ORIGIN.iata}</span>
          <i className="fas fa-plane text-[9px] text-ember" />
          <span>{DESTINATION.iata}</span>
        </div>
        <span className="mt-2 block h-px w-full overflow-hidden bg-chalk/15">
          <span ref={bar} className="block h-full w-full origin-left bg-ember" style={{ transform: "scaleX(0)" }} />
        </span>
        <div className="mt-2.5 normal-case tracking-normal">
          <span ref={leg} className="block truncate text-[12px] text-chalk/85">Departing Lagos</span>
          <span ref={km} className="mt-0.5 block tabular-nums text-chalk/50">{Math.round(ROUTE_KM).toLocaleString("en-NG")} km to go</span>
        </div>
      </div>
    </div>
  );
}
