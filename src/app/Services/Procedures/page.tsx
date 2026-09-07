"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import PageShell from "../../components/page/PageShell";
import PageHero from "../../components/page/PageHero";
import { Section, SectionHead } from "../../components/page/Section";
import CtaBand from "../../components/page/CtaBand";
import Reveal from "../../components/Reveal";

const phases = [
  {
    title: "Prepare to apply",
    description: "Before anything is submitted, we work with you to understand your goals, assess your profile, and map out the best path forward.",
    items: [
      { icon: "fa-comments", text: "One-to-one consultation" },
      { icon: "fa-chart-bar", text: "Free assessment of achievement" },
      { icon: "fa-university", text: "Universities matching" },
      { icon: "fa-map", text: "Personalised study plan" },
    ],
    image: "/img/proc-prepare.jpg",
    alt: "Student consultation session",
  },
  {
    title: "Apply",
    description: "Once your plan is in place, we do the heavy lifting: preparing your materials, submitting applications, and keeping you informed at every step.",
    items: [
      { icon: "fa-credit-card", text: "Service fee payment" },
      { icon: "fa-file-alt", text: "Optimising application materials" },
      { icon: "fa-paper-plane", text: "University and scholarship application" },
      { icon: "fa-search", text: "Tracking application progress" },
    ],
    image: "/img/proc-apply.jpg",
    alt: "Student completing an application",
  },
  {
    title: "Admission",
    description: "When decisions arrive, we guide you through the outcome: celebrating an offer, adjusting course if needed, or preparing your next steps.",
    items: [
      { icon: "fa-bell", text: "Inform admission result" },
      { icon: "fa-sliders-h", text: "Major adjustment, if necessary" },
      { icon: "fa-envelope-open-text", text: "Sending admission notice" },
    ],
    image: "/img/proc-admission.jpg",
    alt: "Student receiving an admission letter",
  },
];

export default function Procedures() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 70%"] });
  const line = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.4 });

  return (
    <PageShell>
      <PageHero
        image="/img/proc-hero.jpg"
        alt="A student preparing documents for a university application"
        title="How applying works."
        lede="Three phases from the first conversation to the admission notice in your hand. Here is exactly what happens in each, and what we do for you."
        position="center 30%"
      />

      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHead title="The itinerary." lede="Follow the line. Every stop is a thing we do, not a thing you have to work out." />
              <Reveal delay={0.14} className="mt-8 flex flex-wrap gap-3">
                <Link href="/Services/Cost" className="btn-ghost">Fees and packages</Link>
                <Link href="/Services/FAQ" className="btn-ghost">Questions answered</Link>
              </Reveal>
            </div>
          </div>

          <div ref={ref} className="relative lg:col-span-8">
            <div className="absolute bottom-8 left-[1.35rem] top-8 w-px bg-chalk/12 sm:left-[1.6rem]" aria-hidden>
              <motion.div className="h-full w-full origin-top bg-ember" style={{ scaleY: line }} />
            </div>
            <ol className="space-y-16 lg:space-y-24">
              {phases.map((p, i) => (
                <li key={p.title}>
                  <Reveal from="up" className="grid grid-cols-[2.75rem_1fr] gap-5 sm:grid-cols-[3.25rem_1fr] sm:gap-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ember/60 bg-night-950 text-ember sm:h-[3.25rem] sm:w-[3.25rem]">
                      <i className={`fas ${i === 0 ? "fa-comments" : i === 1 ? "fa-paper-plane" : "fa-envelope-open-text"} text-sm sm:text-base`} aria-hidden />
                    </span>
                    <div>
                      <h3 className="display-md text-chalk">{p.title}</h3>
                      <p className="mt-3 max-w-[58ch] text-[1.02rem] leading-relaxed text-chalk/78">{p.description}</p>
                      <div className="mt-6 grid gap-6 md:grid-cols-[1fr_15rem] md:items-start">
                        <ul className="divide-y divide-chalk/10">
                          {p.items.map((it) => (
                            <li key={it.text} className="flex items-center gap-3 py-3 text-chalk/85">
                              <i className={`fas ${it.icon} w-5 text-center text-xs text-ember`} aria-hidden />
                              {it.text}
                            </li>
                          ))}
                        </ul>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-chalk/[0.08]">
                          <Image src={p.image} alt={p.alt} fill sizes="(max-width: 768px) 100vw, 15rem" className="object-cover" />
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <CtaBand title="Ready for the first stop?" lede="The consultation is free and the assessment is honest. Tell us where you are and what you want to study." />
    </PageShell>
  );
}
