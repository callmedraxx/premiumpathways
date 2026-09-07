"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ComponentProps, ElementType } from "react";

/* One scroll entrance for the whole site, differing only in the direction it
   comes from, so the page reads as composed by hand: the eyebrow drops in, the
   heading rises, cards enter from alternating sides, images scale up. Shares
   one ease and one reduced-motion answer. Replaces the old Animate for new work
   (Animate stays so untouched pages keep working). */

export type From = "up" | "down" | "left" | "right" | "scale" | "blur";
const OFF = 46;
const hidden: Record<From, Record<string, number | string>> = {
  up: { opacity: 0, y: OFF },
  down: { opacity: 0, y: -OFF },
  left: { opacity: 0, x: -OFF },
  right: { opacity: 0, x: OFF },
  scale: { opacity: 0, scale: 0.92 },
  blur: { opacity: 0, filter: "blur(12px)", y: 16 },
};
const shown = { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" };
export const EASE = [0.16, 1, 0.3, 1] as const;

type Props<T extends ElementType> = {
  from?: From;
  delay?: number;
  duration?: number;
  amount?: number;
  as?: T;
  className?: string;
  children?: React.ReactNode;
} & Omit<ComponentProps<T>, "as" | "children" | "className">;

export default function Reveal<T extends ElementType = "div">({
  from = "up", delay = 0, duration = 0.7, amount, as, className, children, ...rest
}: Props<T>) {
  const reduce = useReducedMotion();
  const M = motion(((as ?? "div") as ElementType) as any);
  const variants: Variants = {
    hidden: reduce ? { opacity: 1 } : hidden[from],
    shown: { ...shown, transition: { duration, delay, ease: EASE } },
  };
  return (
    <M
      variants={variants}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px -60px 0px", amount }}
      className={className}
      {...rest}
    >
      {children}
    </M>
  );
}
