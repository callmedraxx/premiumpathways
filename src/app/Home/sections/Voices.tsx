"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Reveal from "../../components/Reveal";

/* Real students, real words, kept exactly as they were left. */
const voices = [
  { image: "/img/tt1.jpeg", name: "Folagbade", country: "Nigeria", quote: "It was an unforgettable experience. Thank you." },
  { image: "/img/tt2.jpeg", name: "Kwame", country: "Ghana", quote: "I'm very happy to know about Premium Pathways." },
  { image: "/img/tt3.jpeg", name: "Jidapha", country: "Morocco", quote: "They made everything so easy and seamless. I'm impressed!" },
  { image: "/img/tt4.jpeg", name: "Catherine", country: "Nigeria", quote: "A remarkable experience from start to finish. Thank you!" },
  { image: "/img/tt5.jpeg", name: "Appiah", country: "Ghana", quote: "Friendly, professional, and attentive to every detail!" },
  { image: "/img/tt6.jpeg", name: "Francis", country: "Ghana", quote: "Top-notch service! I'll recommend this to all my friends." },
  { image: "/img/tt7.jpeg", name: "Fatima", country: "Nigeria", quote: "Truly exceptional! Thank you for this experience." },
];

export default function Voices() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  const v = voices[i];

  return (
    <section className="reading py-24 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
        <Reveal from="up" className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-card border border-chalk/[0.08]">
            <Image src="/img/journey/grad-campus.jpg" alt="A graduate in cap and gown smiling on a sunlit campus" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-night-950/70 to-transparent" />
          </div>
        </Reveal>

        <div className="flex flex-col justify-center lg:col-span-7 lg:pl-8">
          <Reveal as="h2" className="display-lg text-chalk">Students who made the flight.</Reveal>

          <div className="mt-10 min-h-[11rem]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.figure
                key={i}
                initial={reduce ? false : { opacity: 0, y: 14, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={reduce ? undefined : { opacity: 0, y: -10, filter: "blur(6px)" }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <blockquote className="display-md max-w-[24ch] text-chalk">&ldquo;{v.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 flex items-center gap-4">
                  <span className="relative h-14 w-14 overflow-hidden rounded-full border border-chalk/15">
                    <Image src={v.image} alt="" fill sizes="56px" className="object-cover" />
                  </span>
                  <span>
                    <span className="block font-semibold text-chalk">{v.name}</span>
                    <span className="block text-sm text-chalk/60">Placed from {v.country}</span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-2" role="tablist" aria-label="Student stories">
            {voices.map((t, k) => (
              <button
                key={t.name}
                type="button"
                role="tab"
                aria-selected={k === i}
                aria-label={`${t.name}, ${t.country}`}
                onClick={() => setI(k)}
                className={`relative h-12 w-12 overflow-hidden rounded-full border-2 transition duration-300 ${k === i ? "border-ember scale-110" : "border-transparent opacity-60 hover:opacity-100"}`}
              >
                <Image src={t.image} alt="" fill sizes="48px" className="object-cover" />
              </button>
            ))}
            <Link href="/About/Testimonials" className="ml-3 text-sm font-medium text-chalk/70 underline decoration-chalk/30 underline-offset-4 transition hover:text-chalk">
              All stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
