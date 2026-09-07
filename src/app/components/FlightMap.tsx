"use client";

import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { ORIGIN, distanceKm, slerp, toLatLon, toVec } from "../lib/journey";

/* ============================================================
   THE FLIGHT MAP

   A real map, and the real flight on it. Lagos to the office door: a great
   circle drawn across the map as the aircraft flies it, both ends labelled,
   and then the map descends to Yizhuang so the reader sees the actual streets
   around Lippo Plaza. Leaflet on dark CARTO tiles; no API key, no iframe.
   ============================================================ */

export const OFFICE = {
  name: "Premium Pathways",
  address: "F/1202, Tower A, Lippo Plaza",
  district: "Yizhuang Economic-Tech Development Area, Beijing",
  lat: 39.8033,
  lon: 116.4958,
};

const LAGOS = { lat: ORIGIN.lat, lon: ORIGIN.lon };
export const FLIGHT_KM = Math.round(distanceKm(ORIGIN, { name: "office", lat: OFFICE.lat, lon: OFFICE.lon }));
const STEPS = 220;
const FLIGHT_MS = 5200;

const ease = (t: number) => 1 - Math.pow(1 - t, 3);
const bearing = (a: [number, number], b: [number, number]) => {
  const toR = (d: number) => (d * Math.PI) / 180;
  const y = Math.sin(toR(b[1] - a[1])) * Math.cos(toR(b[0]));
  const x = Math.cos(toR(a[0])) * Math.sin(toR(b[0])) - Math.sin(toR(a[0])) * Math.cos(toR(b[0])) * Math.cos(toR(b[1] - a[1]));
  return (Math.atan2(y, x) * 180) / Math.PI;
};

type Phase = "idle" | "flying" | "landed" | "office";

export default function FlightMap() {
  const host = useRef<HTMLDivElement>(null);
  const ctl = useRef<{ replay: () => void; office: () => void } | null>(null);
  const [phase, setPhase] = useState<Phase>("idle");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!host.current) return;
    let alive = true;
    let raf = 0;
    let timer = 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* The great circle, as lat/lon pairs. */
    const a = toVec(LAGOS.lat, LAGOS.lon), b = toVec(OFFICE.lat, OFFICE.lon);
    const route: [number, number][] = Array.from({ length: STEPS + 1 }, (_, i) => {
      const p = toLatLon(slerp(a, b, i / STEPS));
      return [p.lat, p.lon];
    });

    let map: import("leaflet").Map | undefined;

    import("leaflet").then((L) => {
      if (!alive || !host.current) return;
      map = L.map(host.current, {
        zoomControl: false,
        scrollWheelZoom: false,
        attributionControl: false,
        worldCopyJump: false,
        minZoom: 2,
        maxZoom: 16,
      });
      L.control.attribution({ position: "bottomleft", prefix: false }).addTo(map);
      /* Esri's dark canvas, base and labels as two layers, no key needed. */
      const ESRI = "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_{layer}/MapServer/tile/{z}/{y}/{x}";
      L.tileLayer(ESRI.replace("{layer}", "Base"), {
        attribution: 'Tiles &copy; Esri, HERE, Garmin, &copy; OpenStreetMap contributors',
        maxZoom: 16,
      }).addTo(map);
      L.tileLayer(ESRI.replace("{layer}", "Reference"), { maxZoom: 16, pane: "overlayPane", opacity: 0.9 }).addTo(map);
      L.control.zoom({ position: "bottomright" }).addTo(map);

      const worldBounds = L.latLngBounds(route);
      const fitWorld = (animate: boolean) => map!.fitBounds(worldBounds, { paddingTopLeft: [40, 90], paddingBottomRight: [40, 70], animate, maxZoom: 5 });
      fitWorld(false);

      /* Ends of the route, labelled. */
      const dot = (cls: string) => L.divIcon({ className: "", html: `<span class="pp-dot ${cls}"></span>`, iconSize: [14, 14], iconAnchor: [7, 7] });
      L.marker([LAGOS.lat, LAGOS.lon], { icon: dot("pp-dot-origin"), interactive: false }).addTo(map)
        .bindTooltip("<strong>Lagos, Nigeria</strong><span>Murtala Muhammed International, LOS</span>", { permanent: true, direction: "bottom", offset: [0, 10], className: "pp-label" });
      const officeMarker = L.marker([OFFICE.lat, OFFICE.lon], { icon: dot("pp-dot-office"), interactive: false }).addTo(map)
        .bindTooltip(`<strong>${OFFICE.name}, Beijing</strong><span>${OFFICE.address}, Yizhuang</span>`, { permanent: true, direction: "top", offset: [0, -10], className: "pp-label" });

      L.polyline(route, { color: "#f2eee6", weight: 1, opacity: 0.35, dashArray: "2 6", interactive: false }).addTo(map);
      const flown = L.polyline([], { color: "#ff7a3d", weight: 3, opacity: 0.95, interactive: false }).addTo(map);
      const plane = L.marker(route[0], {
        icon: L.divIcon({ className: "", html: '<span class="pp-plane"><i class="fas fa-plane"></i></span>', iconSize: [34, 34], iconAnchor: [17, 17] }),
        interactive: false,
        zIndexOffset: 1000,
      }).addTo(map);
      const planeEl = () => plane.getElement()?.querySelector<HTMLElement>(".pp-plane");

      const setAt = (t: number) => {
        const n = Math.max(1, Math.round(t * STEPS));
        flown.setLatLngs(route.slice(0, n + 1));
        const here = route[Math.min(STEPS, n)];
        const next = route[Math.min(STEPS, n + 1)];
        plane.setLatLng(here);
        const el = planeEl();
        if (el) el.style.transform = `rotate(${bearing(here, next) - 45}deg)`;
        setProgress(t);
      };

      const descend = () => {
        setPhase("office");
        map!.flyTo([OFFICE.lat, OFFICE.lon], 16, { duration: reduce ? 0 : 2.6, easeLinearity: 0.2 });
        officeMarker.setZIndexOffset(2000);
      };

      const fly = () => {
        cancelAnimationFrame(raf);
        window.clearTimeout(timer);
        fitWorld(true);
        setPhase("flying");
        if (reduce) { setAt(1); setPhase("landed"); timer = window.setTimeout(descend, 400); return; }
        const t0 = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - t0) / FLIGHT_MS);
          setAt(ease(t));
          if (t < 1) raf = requestAnimationFrame(tick);
          else { setPhase("landed"); timer = window.setTimeout(descend, 900); }
        };
        raf = requestAnimationFrame(tick);
      };

      ctl.current = { replay: fly, office: descend };

      /* Take off when the map scrolls into view; once. */
      const io = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) { io.disconnect(); timer = window.setTimeout(fly, 500); }
      }, { threshold: 0.35 });
      io.observe(host.current!);
    });

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
      map?.remove();
    };
  }, []);

  const km = Math.round(FLIGHT_KM * (1 - progress));

  return (
    <div className="relative overflow-hidden rounded-card border border-chalk/[0.1] bg-night-900">
      <div ref={host} className="pp-map h-[26rem] w-full sm:h-[32rem] lg:h-[36rem]" aria-label="Map of the flight from Lagos to the Premium Pathways office in Beijing" role="img" />

      {/* Cabin strip: what the map is doing, and the controls. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex flex-wrap items-start justify-between gap-3 p-3 sm:p-4">
        <div className="pointer-events-auto rounded-2xl border border-chalk/[0.1] bg-night-950/80 px-4 py-3 backdrop-blur-md">
          <p className="meta flex items-center gap-3">
            <span>LOS</span><i className="fas fa-plane text-[9px] text-ember" aria-hidden /><span>PEK</span>
          </p>
          <p className="mt-1.5 text-sm text-chalk">
            {phase === "idle" && "Ready for departure"}
            {phase === "flying" && `${km.toLocaleString("en-NG")} km to Beijing`}
            {phase === "landed" && "Landed. Descending to the office"}
            {phase === "office" && "Lippo Plaza, Tower A, Yizhuang"}
          </p>
        </div>
        <div className="pointer-events-auto flex flex-wrap gap-2">
          <button type="button" onClick={() => ctl.current?.replay()} className="btn-ghost !bg-night-950/80 !px-4 !py-2.5 text-sm">
            <i className="fas fa-redo-alt text-xs" aria-hidden /> Replay flight
          </button>
          <button type="button" onClick={() => ctl.current?.office()} className="btn-ghost !bg-night-950/80 !px-4 !py-2.5 text-sm">
            <i className="fas fa-building text-xs" aria-hidden /> Our door
          </button>
        </div>
      </div>
    </div>
  );
}
