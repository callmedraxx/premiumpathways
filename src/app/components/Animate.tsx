"use client";

import React, { useEffect, useRef, useState } from "react";

type Variant =
  | "fade-up"
  | "fade-down"
  | "fade-in"
  | "fade-left"
  | "fade-right"
  | "scale-up"
  | "scale-in";

interface AnimateProps {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number;       // ms
  duration?: number;    // ms
  threshold?: number;   // 0–1
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

const initial: Record<Variant, React.CSSProperties> = {
  "fade-up":    { opacity: 0, transform: "translateY(32px)" },
  "fade-down":  { opacity: 0, transform: "translateY(-24px)" },
  "fade-in":    { opacity: 0 },
  "fade-left":  { opacity: 0, transform: "translateX(-32px)" },
  "fade-right": { opacity: 0, transform: "translateX(32px)" },
  "scale-up":   { opacity: 0, transform: "scale(0.88)" },
  "scale-in":   { opacity: 0, transform: "scale(0.94)" },
};

const visible: React.CSSProperties = {
  opacity: 1,
  transform: "none",
};

export default function Animate({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 600,
  threshold = 0.12,
  className,
  as: Tag = "div",
}: AnimateProps) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const style: React.CSSProperties = {
    ...(inView ? visible : initial[variant]),
    transition: `opacity ${duration}ms cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
    willChange: "opacity, transform",
  };

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} style={style} className={className}>
      {children}
    </Tag>
  );
}
