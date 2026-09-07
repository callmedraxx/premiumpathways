"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Reveal from "../../components/Reveal";

const stops = [
  {
    icon: "fa-comments",
    title: "Consultation",
    body: "One-to-one counselling across 600+ universities, 13 disciplines and 80+ majors. You leave with a written study plan that fits your grades, your budget and the career you want after it.",
    image: "/img/journey/students-code.jpg",
    alt: "Two students reviewing code together on laptops",
  },
  {
    icon: "fa-file-signature",
    title: "Application",
    body: "We review and improve your materials, match you with universities that will say yes, work the scholarship channels, and follow every file through to the offer letter.",
    image: "/img/journey/grad-diploma.jpg",
    alt: "A smiling graduate holding her diploma",
  },
  {
    icon: "fa-plane-departure",
    title: "Pre-departure",
    body: "Visa guidance from the JW202 to the embassy appointment, a dormitory booked in your name, a briefing on what to pack and what to expect, and someone to call the night before.",
    image: "/img/journey/window-clouds.jpg",
    alt: "Clouds seen through an aircraft window",
  },
  {
    icon: "fa-map-marker-alt",
    title: "Arrival",
    body: "Airport pick-up in major cities, registration at the university, a SIM card and a bank account, and a student community that has been expecting you.",
    image: "/img/journey/aerial-plane.jpg",
    alt: "A city seen from an aircraft on approach",
  },
];

/* The itinerary. The left column stays while the four stops pass; the line
   between them fills with the scroll, so the reader can see how far through
   the process they are the way the readout shows how far through the flight. */
export default function Itinerary() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 70%"] });
  const line = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.4 });

  return (
    <section className="reading py-24 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal as="h2" className="display-lg text-chalk">From first call to first day.</Reveal>
            <Reveal as="p" delay={0.08} className="lede mt-5">
              Four stops. We are on the line at every one of them, and the service does not end when the plane lands.
            </Reveal>
            <Reveal delay={0.14} className="mt-8 flex flex-wrap gap-3">
              <Link href="/Services/Procedures" className="btn-ghost">Full procedure</Link>
              <Link href="/Services/Cost" className="btn-ghost">Fees and packages</Link>
            </Reveal>
          </div>
        </div>

        <div ref={ref} className="relative lg:col-span-7">
          <div className="absolute bottom-6 left-[1.35rem] top-6 w-px bg-chalk/12 sm:left-[1.6rem]" aria-hidden>
            <motion.div className="h-full w-full origin-top bg-ember" style={{ scaleY: line }} />
          </div>
          <ol className="space-y-12 lg:space-y-16">
            {stops.map((s, i) => (
              <li key={s.title}>
                <Reveal from="up" className="grid grid-cols-[2.75rem_1fr] gap-5 sm:grid-cols-[3.25rem_1fr] sm:gap-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ember/60 bg-night-950 text-ember sm:h-[3.25rem] sm:w-[3.25rem]">
                    <i className={`fas ${s.icon} text-sm sm:text-base`} aria-hidden />
                  </span>
                  <div className="grid gap-6 md:grid-cols-[1fr_11rem] md:items-start">
                    <div>
                      <h3 className="display-md text-chalk">{s.title}</h3>
                      <p className="mt-3 max-w-[58ch] text-[1.02rem] leading-relaxed text-chalk/78">{s.body}</p>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-chalk/[0.08] md:aspect-square">
                      <Image src={s.image} alt={s.alt} fill sizes="(max-width: 768px) 100vw, 11rem" className="object-cover" />
                    </div>
                  </div>
                </Reveal>
                {i < stops.length - 1 && <span className="sr-only">then</span>}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
