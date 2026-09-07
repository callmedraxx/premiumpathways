/* ============================================================
   THE JOURNEY

   One flight, Lagos to Beijing, driven by the page's scroll position. This
   module is the single source of truth for where the aircraft is: the WebGL
   layer moves the globe from it, the readout prints from it, and the sections
   are written against it (Nigeria near the top of the page, China near the
   bottom). Nothing in here is React state. It is read inside animation
   frames, which is far too often for a component tree to reconcile.
   ============================================================ */

export type Waypoint = {
  name: string;
  iata?: string;
  lat: number;
  lon: number;
};

export const ORIGIN: Waypoint = { name: "Lagos", iata: "LOS", lat: 6.5774, lon: 3.3212 };
export const DESTINATION: Waypoint = { name: "Beijing", iata: "PEK", lat: 40.0799, lon: 116.6031 };

/* Cities that get a mark on the globe. Nigeria first, then the Chinese cities
   the site actually places students in. */
export const CITIES: Waypoint[] = [
  ORIGIN,
  { name: "Abuja", lat: 9.0579, lon: 7.4951 },
  { name: "Port Harcourt", lat: 4.8156, lon: 7.0498 },
  { name: "Kunming", lat: 24.8801, lon: 102.8329 },
  { name: "Chengdu", lat: 30.5728, lon: 104.0668 },
  { name: "Xi'an", lat: 34.3416, lon: 108.9398 },
  { name: "Guangzhou", lat: 23.1291, lon: 113.2644 },
  { name: "Shenzhen", lat: 22.5431, lon: 114.0579 },
  { name: "Hangzhou", lat: 30.2741, lon: 120.1551 },
  { name: "Shanghai", lat: 31.2304, lon: 121.4737 },
  DESTINATION,
];

/* What the aircraft is over at each fraction of the great circle. Real
   geography along the LOS-PEK track, which crosses the Sahel, the Red Sea,
   the Arabian peninsula, the Arabian Sea and the Himalaya. */
export const LEGS: { at: number; label: string }[] = [
  { at: 0.0, label: "Departing Lagos" },
  { at: 0.06, label: "Over the Niger Delta" },
  { at: 0.16, label: "Crossing the Sahel" },
  { at: 0.3, label: "Over Sudan" },
  { at: 0.4, label: "Crossing the Red Sea" },
  { at: 0.5, label: "Over the Arabian Peninsula" },
  { at: 0.62, label: "Over the Arabian Sea" },
  { at: 0.74, label: "Over northern India" },
  { at: 0.84, label: "Crossing the Himalaya" },
  { at: 0.93, label: "Descending over Hebei" },
  { at: 0.985, label: "Landed in Beijing" },
];

/* Shared, mutable, read per frame. `target` is set from the scroll position;
   `shown` chases it so the aircraft has momentum. `flight` is the fraction of
   the route flown, which arrives before the page ends so the last screens
   are China, not sky. */
export const journey = {
  target: 0,
  shown: 0,
  flight: 0,
  /* Pointer, -1..1, for a little parallax. */
  px: 0,
  py: 0,
  tx: 0,
  ty: 0,
};

const ARRIVE_AT = 0.72;

export function measureScroll() {
  const doc = document.documentElement;
  const max = doc.scrollHeight - doc.clientHeight;
  journey.target = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
}

/* Called once per frame by whoever renders first. Everyone else reads. */
export function advance(dt: number, instant = false) {
  const k = instant ? 1 : 1 - Math.pow(0.0025, Math.min(dt, 0.05));
  journey.shown += (journey.target - journey.shown) * k;
  journey.px += (journey.tx - journey.px) * k * 0.6;
  journey.py += (journey.ty - journey.py) * k * 0.6;
  const f = Math.min(1, journey.shown / ARRIVE_AT);
  /* Ease the ends: a heavy aircraft does not snap off the runway. */
  journey.flight = f * f * (3 - 2 * f);
}

/* ---------- geometry ---------- */

export function toVec(lat: number, lon: number, r = 1): [number, number, number] {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return [-r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta)];
}

/* Great-circle interpolation on the unit sphere. */
export function slerp(a: [number, number, number], b: [number, number, number], t: number): [number, number, number] {
  const dot = Math.max(-1, Math.min(1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]));
  const om = Math.acos(dot);
  if (om < 1e-6) return a;
  const s = Math.sin(om);
  const ka = Math.sin((1 - t) * om) / s;
  const kb = Math.sin(t * om) / s;
  return [a[0] * ka + b[0] * kb, a[1] * ka + b[1] * kb, a[2] * ka + b[2] * kb];
}

export function toLatLon(v: [number, number, number]): { lat: number; lon: number } {
  const len = Math.hypot(v[0], v[1], v[2]) || 1;
  const x = v[0] / len, y = v[1] / len, z = v[2] / len;
  const lat = 90 - (Math.acos(y) * 180) / Math.PI;
  const lon = (Math.atan2(z, -x) * 180) / Math.PI - 180;
  return { lat, lon: ((lon + 540) % 360) - 180 };
}

const EARTH_KM = 6371;
export function distanceKm(a: Waypoint, b: Waypoint) {
  const toR = (d: number) => (d * Math.PI) / 180;
  const dLat = toR(b.lat - a.lat), dLon = toR(b.lon - a.lon);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toR(a.lat)) * Math.cos(toR(b.lat)) * Math.sin(dLon / 2) ** 2;
  return 2 * EARTH_KM * Math.asin(Math.sqrt(h));
}

export const ROUTE_KM = distanceKm(ORIGIN, DESTINATION);

export function legLabel(f: number) {
  let label = LEGS[0].label;
  for (const l of LEGS) if (f >= l.at) label = l.label;
  return label;
}
