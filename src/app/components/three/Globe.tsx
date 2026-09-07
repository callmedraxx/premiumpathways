"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ============================================================
   THE GLOBE — the makeover's signature 3D.

   A slowly turning wireframe world, a scatter of gold points sitting on its
   surface (students' origins), and arcs lifting off one point and landing on a
   destination cluster — global mobility, drawn literally, which is what this
   brand sells. Gold on academic navy. Everything reads scroll and pointer from
   module-level refs, never React state, so a pointer move costs no re-render.
   ============================================================ */

const GOLD = new THREE.Color("#c79a3e");
const GOLD_SOFT = new THREE.Color("#e2b45c");
const COOL = new THREE.Color("#6f86c9");

const view = { scroll: 0, px: 0, py: 0, tx: 0, ty: 0 };

if (typeof window !== "undefined") {
  const onScroll = () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    view.scroll = h > 0 ? window.scrollY / h : 0;
  };
  const onMove = (e: PointerEvent) => {
    view.tx = (e.clientX / window.innerWidth) * 2 - 1;
    view.ty = (e.clientY / window.innerHeight) * 2 - 1;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("pointermove", onMove, { passive: true });
  onScroll();
}

function sphere(lat: number, lon: number, r: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}

/* The turning group holds the wireframe, the points and the origin end of every
   arc, so they rotate together as one world. */
function World({ quality }: { quality: number }) {
  const g = useRef<THREE.Group>(null);
  const R = 2.2;

  const wire = useMemo(() => new THREE.IcosahedronGeometry(R, quality), [quality]);

  /* Points scattered on the surface, weighted toward a few "origin" regions so
     it reads as places, not noise. */
  const points = useMemo(() => {
    const seeds: [number, number][] = [
      [14, 100], [7, 110], [-6, 106], [23, 113], [1, 103],   // SE Asia
      [9, 8], [6, 3], [-1, 37], [30, 31], [24, 90],          // Africa / S Asia
      [48, 66], [41, 74], [43, 76],                          // Central Asia
    ];
    const pos: number[] = [];
    for (const [la, lo] of seeds) {
      for (let i = 0; i < 5; i++) {
        const p = sphere(la + (Math.random() - 0.5) * 16, lo + (Math.random() - 0.5) * 16, R * 1.005);
        pos.push(p.x, p.y, p.z);
      }
    }
    return new Float32Array(pos);
  }, []);

  useFrame((_, dt) => {
    if (!g.current) return;
    g.current.rotation.y += dt * 0.045;
    g.current.rotation.x = 0.34 + view.py * 0.12 - view.scroll * 0.25;
  });

  return (
    <group ref={g}>
      <lineSegments>
        <wireframeGeometry args={[wire]} />
        <lineBasicMaterial color={GOLD} transparent opacity={0.14} />
      </lineSegments>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[points, 3]} />
        </bufferGeometry>
        <pointsMaterial color={GOLD_SOFT} size={0.055} sizeAttenuation transparent opacity={0.95} />
      </points>
    </group>
  );
}

/* Arcs live outside the turning group so they read as travel over the world
   rather than painted onto it; a moving bright head runs each arc. */
function Arcs({ count }: { count: number }) {
  const R = 2.2;
  const arcs = useMemo(() => {
    const dests: [number, number][] = [[39.9, 116.4], [31.2, 121.5], [48.8, 2.3], [51.5, -0.1]]; // Beijing, Shanghai, Paris, London
    return Array.from({ length: count }, (_, i) => {
      const a = sphere(-40 + Math.random() * 80, -180 + Math.random() * 360, R);
      const d = dests[i % dests.length];
      const b = sphere(d[0], d[1], R);
      const mid = a.clone().add(b).multiplyScalar(0.5).normalize().multiplyScalar(R * (1.35 + Math.random() * 0.3));
      const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
      const pts = curve.getPoints(60);
      const geom = new THREE.BufferGeometry().setFromPoints(pts);
      const lit = i % 3 === 0;
      const mat = new THREE.LineBasicMaterial({ color: lit ? GOLD_SOFT : COOL, transparent: true, opacity: lit ? 0.4 : 0.16 });
      const line = new THREE.Line(geom, mat);
      return { geom, line, phase: Math.random(), speed: 0.12 + Math.random() * 0.12, lit };
    });
  }, [count]);

  const heads = useRef<THREE.Points>(null);
  const headPos = useMemo(() => new Float32Array(count * 3), [count]);

  useFrame(({ clock }) => {
    if (!heads.current) return;
    const t = clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      const a = arcs[i];
      const u = (a.phase + t * a.speed) % 1;
      const p = a.geom.attributes.position;
      const idx = Math.min(60, Math.floor(u * 60));
      headPos[i * 3] = p.getX(idx); headPos[i * 3 + 1] = p.getY(idx); headPos[i * 3 + 2] = p.getZ(idx);
    }
    heads.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <group rotation={[0.34, 0, 0]}>
      {arcs.map((a, i) => (
        <primitive key={i} object={a.line} />
      ))}
      <points ref={heads}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[headPos, 3]} />
        </bufferGeometry>
        <pointsMaterial color={GOLD_SOFT} size={0.07} sizeAttenuation transparent opacity={0.95} blending={THREE.AdditiveBlending} depthWrite={false} />
      </points>
    </group>
  );
}

function Rig() {
  useFrame(({ camera }, dt) => {
    const k = 1 - Math.pow(0.0015, Math.min(dt, 0.05));
    view.px += (view.tx - view.px) * k;
    view.py += (view.ty - view.py) * k;
    camera.position.x += (view.px * 0.6 - camera.position.x) * k;
    camera.position.y += (-view.py * 0.4 - camera.position.y) * k;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Globe() {
  const tier = useMemo(() => {
    if (typeof window === "undefined") return { arcs: 14, core: 3, dpr: 1.5 };
    const small = window.matchMedia("(max-width: 860px)").matches;
    const weak = new URLSearchParams(window.location.search).has("lite") || (navigator.hardwareConcurrency ?? 8) <= 4;
    if (small || weak) return { arcs: 7, core: 2, dpr: 1.1 };
    return { arcs: 14, core: 3, dpr: 1.6 };
  }, []);
  const still = useMemo(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  return (
    <Canvas
      dpr={[1, tier.dpr]}
      frameloop={still ? "demand" : "always"}
      camera={{ position: [0, 0, 6.6], fov: 46 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.6} />
      <World quality={tier.core} />
      <Arcs count={tier.arcs} />
      {!still && <Rig />}
    </Canvas>
  );
}
