"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { SNOISE } from "./noise.glsl";
import {
  CITIES, DESTINATION, ORIGIN, advance, journey, measureScroll, slerp, toVec,
} from "../../lib/journey";

/* ============================================================
   THE FLIGHT

   The whole homepage sits on one continuous shot: a night flight from Lagos
   to Beijing. Scrolling is the flight. Four things on screen, cheapest first:

     1. the sky, a domain-warped cloud field graded from Lagos dusk through
        high-altitude night into a Beijing dawn as the route is flown
     2. the earth, a point cloud of real land (world-atlas 110m, rasterised
        to ~4,400 dots) on a dark sphere with an atmospheric rim
     3. the route, a lifted great circle; what is flown glows ember,
        what is left is a hairline
     4. the aircraft, a small lit mark that the globe turns to keep in view

   Everything reads scroll and pointer from `journey`, never from React
   state; the frame loop is the only thing that ticks.
   ============================================================ */

const R = 2.45;
const EMBER = new THREE.Color("#ff7a3d");
const CHALK = new THREE.Color("#f2eee6");
const RIM = new THREE.Color("#4f7cff");

const vO = toVec(ORIGIN.lat, ORIGIN.lon);
const vD = toVec(DESTINATION.lat, DESTINATION.lon);
const lift = (t: number) => R * (1 + 0.14 * Math.sin(Math.PI * t));
function routePoint(t: number) {
  const v = slerp(vO, vD, t);
  const r = lift(t);
  return new THREE.Vector3(v[0] * r, v[1] * r, v[2] * r);
}

/* Which screen we are on decides where the globe sits. Phones get it high
   and small so the copy owns the lower two thirds; desktops get it right of
   centre, where the hero leaves a column empty for it. */
function useLayout() {
  const { size } = useThree();
  return useMemo(() => {
    const narrow = size.width < 900;
    return narrow
      ? { pos: new THREE.Vector3(0.55, 2.0, -1.3), scale: 0.78, zoom: 7.9 }
      : { pos: new THREE.Vector3(1.85, -0.25, 0), scale: 1, zoom: 7.4 };
  }, [size.width]);
}

/* ---------- 1. the sky ---------- */

function Sky() {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const { viewport, camera } = useThree();
  const depth = -13;
  const vp = viewport.getCurrentViewport(camera, [0, 0, depth]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uFlight: { value: 0 },
      uScroll: { value: 0 },
      uEmber: { value: EMBER },
      uRim: { value: RIM },
    }),
    []
  );

  useFrame((_, dt) => {
    uniforms.uTime.value += Math.min(dt, 0.05);
    uniforms.uFlight.value = journey.flight;
    uniforms.uScroll.value = journey.shown;
  });

  return (
    <mesh position={[0, 0, depth]} scale={[vp.width * 1.15, vp.height * 1.15, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={mat}
        uniforms={uniforms}
        depthWrite={false}
        vertexShader={/* glsl */ `
          varying vec2 vUv;
          void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
        `}
        fragmentShader={/* glsl */ `
          ${SNOISE}
          uniform float uTime, uFlight, uScroll;
          uniform vec3 uEmber, uRim;
          varying vec2 vUv;

          void main(){
            vec2 uv = (vUv - 0.5) * vec2(2.4, 1.5);
            float t = uTime * 0.04;

            /* Domain warp: the same trick as ink in water. The scroll term
               drags the field so the clouds stream past as you fly. */
            vec3 p = vec3(uv * 0.95 + vec2(uScroll * 1.6, 0.0), t);
            float w1 = fbm(p);
            float w2 = fbm(p + vec3(w1 * 1.3, w1 * 0.7, t * 0.5) + 3.1);
            float d  = fbm(p * 0.85 + vec3(w2 * 1.4, w2, uFlight * 1.8));

            float vein = pow(1.0 - abs(d), 14.0);
            float mass = smoothstep(-0.7, 0.9, d);

            /* Three skies, crossfaded by how much of the route is flown:
               Lagos dusk, cruising altitude, Beijing dawn. */
            vec3 dusk  = vec3(0.030, 0.026, 0.060);
            vec3 night = vec3(0.012, 0.016, 0.034);
            vec3 dawn  = vec3(0.050, 0.034, 0.048);
            float toNight = smoothstep(0.0, 0.45, uFlight);
            float toDawn  = smoothstep(0.62, 1.0, uFlight);
            vec3 base = mix(mix(dusk, night, toNight), dawn, toDawn);

            /* A horizon band low in the frame. Ember at departure, cool at
               altitude, a rose-gold glow again on approach. */
            float horizon = exp(-pow((vUv.y - 0.12) * 3.2, 2.0));
            vec3 warm = uEmber * 0.22;
            vec3 cool = uRim * 0.10;
            vec3 band = mix(mix(warm, cool, toNight), warm * 0.8 + vec3(0.02, 0.0, 0.03), toDawn);

            vec3 col = base * (0.7 + mass * 0.7);
            col += band * horizon * (0.6 + vein * 0.9);
            col += mix(uEmber, uRim, toNight) * vein * 0.045;
            col += vec3(0.08, 0.10, 0.16) * pow(mass, 3.0) * 0.10;

            /* Vignette so type always lands on the quietest part of the frame. */
            float r = length((vUv - 0.5) * vec2(1.4, 1.0));
            col *= smoothstep(1.18, 0.15, r);
            gl_FragColor = vec4(col, 1.0);
          }
        `}
      />
    </mesh>
  );
}

/* ---------- stars ---------- */

function Stars({ count }: { count: number }) {
  const positions = useMemo(() => {
    const a = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = Math.random() * 2 - 1, th = Math.random() * Math.PI * 2;
      const s = Math.sqrt(1 - u * u), r = 28 + Math.random() * 14;
      a[i * 3] = s * Math.cos(th) * r; a[i * 3 + 1] = u * r; a[i * 3 + 2] = s * Math.sin(th) * r - 8;
    }
    return a;
  }, [count]);
  const ref = useRef<THREE.Points>(null);
  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y = -journey.shown * 0.35;
    ref.current.rotation.x = journey.py * 0.03;
    (ref.current.material as THREE.PointsMaterial).opacity = 0.25 + 0.45 * Math.sin(Math.PI * Math.min(1, journey.flight * 1.1));
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color={CHALK} transparent opacity={0.3} sizeAttenuation depthWrite={false} />
    </points>
  );
}

/* ---------- 2. the earth ---------- */

const DOT_VERT = /* glsl */ `
  attribute float aHot;
  uniform float uSize, uDpr;
  varying float vFade;
  varying float vHot;
  void main(){
    vec3 n = normalize(position);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vec3 nv = normalize(normalMatrix * n);
    float facing = dot(nv, normalize(-mv.xyz));
    vFade = smoothstep(-0.02, 0.42, facing);
    vHot = aHot;
    gl_PointSize = uSize * uDpr * (7.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;
const DOT_FRAG = /* glsl */ `
  uniform vec3 uColor, uHot;
  uniform float uOpacity;
  varying float vFade;
  varying float vHot;
  void main(){
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float a = (1.0 - smoothstep(0.28, 0.5, d)) * vFade * uOpacity;
    vec3 c = mix(uColor, uHot, vHot);
    gl_FragColor = vec4(c, a * (1.0 + vHot * 0.6));
  }
`;

function Earth({ dots }: { dots: Int16Array | null }) {
  const { positions, hot } = useMemo(() => {
    if (!dots) return { positions: new Float32Array(0), hot: new Float32Array(0) };
    const n = dots.length / 2;
    const positions = new Float32Array(n * 3);
    const hot = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const lat = dots[i * 2] / 10, lon = dots[i * 2 + 1] / 10;
      const v = toVec(lat, lon, R * 1.003);
      positions[i * 3] = v[0]; positions[i * 3 + 1] = v[1]; positions[i * 3 + 2] = v[2];
      /* Nigeria and China read in the brand colour: this is the story. */
      const nigeria = lat > 4 && lat < 14 && lon > 2.5 && lon < 15;
      const china = lat > 18 && lat < 53 && lon > 73 && lon < 135;
      hot[i] = nigeria || china ? 1 : 0;
    }
    return { positions, hot };
  }, [dots]);

  const uniforms = useMemo(
    () => ({
      uSize: { value: 4.6 },
      uDpr: { value: typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1 },
      uColor: { value: CHALK },
      uHot: { value: EMBER },
      uOpacity: { value: 0.74 },
    }),
    []
  );

  return (
    <group>
      {/* The body of the planet. Not black: a shade lighter than the page so the
          sphere reads as a solid, and so the far-side dots are hidden. */}
      <mesh>
        <sphereGeometry args={[R * 0.992, 48, 48]} />
        <meshBasicMaterial color="#0a0f1d" />
      </mesh>
      {/* Atmospheric rim, additive, camera-facing fresnel. */}
      <mesh>
        <sphereGeometry args={[R * 1.035, 48, 48]} />
        <shaderMaterial
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          uniforms={{ uRim: { value: RIM }, uEmber: { value: EMBER } }}
          vertexShader={/* glsl */ `
            varying vec3 vN; varying vec3 vV;
            void main(){ vN = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position,1.0); vV = -mv.xyz; gl_Position = projectionMatrix * mv; }
          `}
          fragmentShader={/* glsl */ `
            uniform vec3 uRim, uEmber; varying vec3 vN; varying vec3 vV;
            void main(){
              float f = pow(1.0 - clamp(dot(normalize(vN), normalize(vV)), 0.0, 1.0), 3.2);
              /* backside: the rim is a shell seen from inside, so invert */
              float rim = pow(clamp(dot(normalize(vN), normalize(vV)), 0.0, 1.0), 2.6);
              vec3 c = mix(uRim, uEmber, 0.18) * rim * 0.95;
              gl_FragColor = vec4(c, rim * 0.9 + f * 0.0);
            }
          `}
        />
      </mesh>
      {positions.length > 0 && (
        <points>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            <bufferAttribute attach="attributes-aHot" args={[hot, 1]} />
          </bufferGeometry>
          <shaderMaterial uniforms={uniforms} vertexShader={DOT_VERT} fragmentShader={DOT_FRAG} transparent depthWrite={false} />
        </points>
      )}
    </group>
  );
}

/* ---------- 3. the route ---------- */

const SEGS = 240;

function Route() {
  const flown = useRef<THREE.BufferGeometry>(null);
  const pts = useMemo(() => Array.from({ length: SEGS + 1 }, (_, i) => routePoint(i / SEGS)), []);
  const remaining = useMemo(() => new THREE.BufferGeometry().setFromPoints(pts), [pts]);
  const flownGeom = useMemo(() => new THREE.BufferGeometry().setFromPoints(pts), [pts]);

  useFrame(() => {
    const g = flown.current ?? flownGeom;
    const n = Math.max(1, Math.floor(journey.flight * SEGS) + 1);
    g.setDrawRange(0, n);
  });

  return (
    <group>
      <line>
        <primitive object={remaining} attach="geometry" />
        <lineBasicMaterial color={CHALK} transparent opacity={0.32} depthWrite={false} />
      </line>
      <line>
        <primitive object={flownGeom} attach="geometry" ref={flown} />
        <lineBasicMaterial color={EMBER} transparent opacity={0.95} depthWrite={false} />
      </line>
      {/* City marks: rings lying on the surface, ember at the ends of the route. */}
      {CITIES.map((c) => {
        const v = toVec(c.lat, c.lon, R * 1.006);
        const end = c === ORIGIN || c === DESTINATION;
        return (
          <mesh key={c.name} position={v} onUpdate={(m) => m.lookAt(v[0] * 2, v[1] * 2, v[2] * 2)}>
            <ringGeometry args={[end ? 0.028 : 0.014, end ? 0.042 : 0.024, 24]} />
            <meshBasicMaterial color={end ? EMBER : CHALK} transparent opacity={end ? 1 : 0.75} depthWrite={false} side={THREE.DoubleSide} />
          </mesh>
        );
      })}
    </group>
  );
}

/* ---------- 4. the aircraft ---------- */

function makeGlow() {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, "rgba(255,190,150,1)");
  g.addColorStop(0.25, "rgba(255,122,61,0.75)");
  g.addColorStop(1, "rgba(255,122,61,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function Aircraft() {
  const g = useRef<THREE.Group>(null);
  const glow = useMemo(() => makeGlow(), []);
  const tmp = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ clock }) => {
    if (!g.current) return;
    const t = journey.flight;
    const p = routePoint(t);
    const ahead = routePoint(Math.min(1, t + 0.004));
    g.current.position.copy(p);
    /* Nose along the track, belly toward the planet. */
    g.current.up.copy(tmp.copy(p).normalize());
    g.current.lookAt(ahead);
    const s = 1 + Math.sin(clock.elapsedTime * 3.2) * 0.06;
    g.current.scale.setScalar(s);
  });

  return (
    <group ref={g}>
      <sprite scale={[0.42, 0.42, 1]}>
        <spriteMaterial map={glow} transparent depthWrite={false} blending={THREE.AdditiveBlending} opacity={0.9} />
      </sprite>
      {/* The mark itself: a sliver pointing down the track. */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.022, 0.11, 6]} />
        <meshBasicMaterial color="#fff2e8" />
      </mesh>
    </group>
  );
}

/* ---------- the world, turned to keep the aircraft in view ---------- */

function World({ dots, still }: { dots: Int16Array | null; still: boolean }) {
  const g = useRef<THREE.Group>(null);
  const layout = useLayout();

  useFrame((state, dt) => {
    if (!still) {
      measureScroll();
      advance(dt);
    }
    if (!g.current) return;
    const t = journey.flight;
    const v = slerp(vO, vD, t);
    const len = Math.hypot(v[0], v[1], v[2]) || 1;
    const lat = Math.asin(v[1] / len);
    const theta = Math.atan2(v[2] / len, -v[0] / len);
    /* Y first (longitude under the aircraft to the front), then X (tilt so its
       latitude sits on the equator of the screen), plus a little pointer lean. */
    g.current.rotation.set(lat + 0.28 + journey.py * 0.05, Math.PI / 2 - theta + journey.px * 0.06, 0, "XYZ");
    g.current.position.copy(layout.pos);
    g.current.scale.setScalar(layout.scale);

    /* Dolly in over the middle of the flight, back out for the landing. */
    const cam = state.camera;
    const z = layout.zoom - 1.05 * Math.sin(Math.PI * t) - journey.shown * 0.4;
    cam.position.x += (journey.px * 0.28 - cam.position.x) * 0.06;
    cam.position.y += (-journey.py * 0.2 - cam.position.y) * 0.06;
    cam.position.z += (z - cam.position.z) * 0.06;
    cam.lookAt(0, 0, 0);
  });

  return (
    <group ref={g}>
      <Earth dots={dots} />
      <Route />
      <Aircraft />
    </group>
  );
}

/* ---------- the canvas ---------- */

export default function Flight() {
  const [dots, setDots] = useState<Int16Array | null>(null);

  useEffect(() => {
    let alive = true;
    fetch("/land-dots.json")
      .then((r) => r.json())
      .then((arr: number[]) => { if (alive) setDots(Int16Array.from(arr)); })
      .catch(() => { /* the sphere still renders; only the land is missing */ });
    const onMove = (e: PointerEvent) => {
      journey.tx = (e.clientX / window.innerWidth) * 2 - 1;
      journey.ty = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => { alive = false; window.removeEventListener("pointermove", onMove); };
  }, []);

  const still = useMemo(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );
  const tier = useMemo(() => {
    if (typeof window === "undefined") return { dpr: 1.5, stars: 500 };
    const small = window.matchMedia("(max-width: 900px)").matches;
    const weak = (navigator.hardwareConcurrency ?? 8) <= 4 || new URLSearchParams(window.location.search).has("lite");
    return small || weak ? { dpr: 1.25, stars: 220 } : { dpr: 1.75, stars: 520 };
  }, []);

  return (
    <Canvas
      dpr={[1, tier.dpr]}
      frameloop={still ? "demand" : "always"}
      camera={{ position: [0, 0, 7.4], fov: 40, near: 0.1, far: 80 }}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
    >
      <color attach="background" args={["#06080f"]} />
      <Sky />
      <Stars count={tier.stars} />
      <World dots={dots} still={still} />
    </Canvas>
  );
}
