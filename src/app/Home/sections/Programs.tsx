"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Reveal from "../../components/Reveal";

const programs = [
  {
    title: "Bachelor's",
    body: "Four-year degrees taught in English or Chinese, from computer science to clinical medicine.",
    href: "/About/Contact",
    image: "/img/journey/students-bench.jpg",
    alt: "A group of international students sitting together on a campus bench",
  },
  {
    title: "Master's",
    body: "Two to three years, research-led, and very often with a scholarship attached.",
    href: "/About/Contact",
    image: "/img/journey/students-laptop.jpg",
    alt: "Students from different countries working together around a laptop",
  },
  {
    title: "PhD",
    body: "Fully funded places for candidates who arrive with a clear research question.",
    href: "/Scholarships/Phd",
    image: "/img/journey/grad-man.jpg",
    alt: "A graduate in a black academic gown on a university campus",
  },
  {
    title: "Chinese language",
    body: "One or two years of language study, and the door into everything else.",
    href: "/Scholarships/NonD",
    image: "/img/journey/student-walk.jpg",
    alt: "A smiling student with a backpack walking outside a campus building",
  },
];

/* Four strips that share one row; the one under the pointer opens. On a
   phone the strips stack and open on tap, because there is no hover. */
export default function Programs() {
  const [active, setActive] = useState(0);

  return (
    <section className="reading py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal as="h2" className="display-lg text-chalk">Choose your program.</Reveal>
          <Reveal as="p" delay={0.08} className="lede mt-5">
            Every route we offer, from a first degree to a doctorate. Pick the one that fits and we take it from there.
          </Reveal>
        </div>

        <Reveal from="up" delay={0.1} className="mt-12 flex flex-col gap-3 md:h-[34rem] md:flex-row lg:mt-16">
          {programs.map((p, i) => {
            const open = i === active;
            return (
              <Link
                key={p.title}
                href={p.href}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={(e) => {
                  /* First tap on a closed strip opens it; the second follows the link. */
                  if (!open && window.matchMedia("(hover: none)").matches) { e.preventDefault(); setActive(i); }
                }}
                className="group relative block overflow-hidden rounded-card border border-chalk/[0.08] transition-[flex-grow] duration-700 ease-out"
                style={{ flexGrow: open ? 3.4 : 1, flexBasis: 0, minHeight: open ? "22rem" : "5.5rem" }}
                aria-expanded={open}
              >
                <Image
                  src={p.image} alt={p.alt} fill sizes="(max-width: 768px) 100vw, 60vw"
                  className={`object-cover transition-transform duration-[1200ms] ease-out ${open ? "scale-100" : "scale-110 grayscale-[35%]"}`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/40 to-night-950/10 transition-opacity duration-700 ${open ? "opacity-90" : "opacity-95"}`} />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <div className="flex items-end justify-between gap-4">
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-chalk sm:text-3xl">{p.title}</h3>
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition ${open ? "border-ember bg-ember text-night-950" : "border-chalk/25 text-chalk/70"}`}>
                      <i className="fas fa-arrow-right text-xs" aria-hidden />
                    </span>
                  </div>
                  <p className={`mt-3 max-w-md text-[0.98rem] leading-relaxed text-chalk/85 transition-all duration-500 ${open ? "max-h-24 opacity-100" : "max-h-0 opacity-0 md:max-h-0"}`}>
                    {p.body}
                  </p>
                </div>
              </Link>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
