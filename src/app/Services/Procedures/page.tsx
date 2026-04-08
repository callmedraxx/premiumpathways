"use client";

import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import WhatsAppWidget from "../../components/WhatsappWidget";
import Animate from "../../components/Animate";
import Image from "next/image";

const phases = [
  {
    number: "01",
    label: "Preparation",
    title: "Prepare to Apply",
    description:
      "Before anything is submitted, we work closely with you to understand your goals, assess your profile, and map out the best path forward.",
    items: [
      { icon: "fa-comments", text: "One-to-one consultation" },
      { icon: "fa-chart-bar", text: "Free assessment of achievement" },
      { icon: "fa-university", text: "Universities matching" },
      { icon: "fa-map", text: "Personalized study plan" },
    ],
    image: "proc-prepare.jpg",
    alt: "Student consultation session",
    reverse: false,
  },
  {
    number: "02",
    label: "Application",
    title: "Apply Process",
    description:
      "Once your plan is in place, we handle the heavy lifting — preparing your materials, submitting applications, and keeping you informed every step of the way.",
    items: [
      { icon: "fa-credit-card", text: "Service fee payment" },
      { icon: "fa-file-alt", text: "Optimizing application materials" },
      { icon: "fa-paper-plane", text: "University & scholarship application" },
      { icon: "fa-search", text: "Tracking application progress" },
    ],
    image: "proc-apply.jpg",
    alt: "Student completing application",
    reverse: true,
  },
  {
    number: "03",
    label: "Admission",
    title: "Admission",
    description:
      "When decisions arrive, we guide you through the outcome — whether that means celebrating an offer, adjusting course, or preparing your next steps.",
    items: [
      { icon: "fa-bell", text: "Inform admission result" },
      { icon: "fa-sliders-h", text: "Major adjustment (if necessary)" },
      { icon: "fa-envelope-open-text", text: "Sending admission notice" },
    ],
    image: "proc-admission.jpg",
    alt: "Student receiving admission",
    reverse: false,
  },
] as const;

export default function Procedures() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <Header />

      <main className="flex flex-1 flex-col">
        {/* ── Hero ── */}
        <section className="relative flex h-[420px] items-end justify-center overflow-hidden">
          <Image
            src="/img/proc-hero.jpg"
            alt="Applying to a Chinese university"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />
          <div className="relative z-10 pb-14 text-center px-4">
            <Animate variant="fade-down" delay={100}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-400">Step by Step</p>
            </Animate>
            <Animate variant="fade-up" delay={220}>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Applying Procedures</h1>
            </Animate>
            <Animate variant="fade-up" delay={340}>
              <p className="mx-auto mt-4 max-w-xl text-slate-300">
                Everything you need to know about applying to a Chinese university — from first consultation to receiving your admission notice.
              </p>
            </Animate>
          </div>
        </section>

        {/* ── Phase steps strip ── */}
        <section className="bg-slate-900 border-b border-white/5 px-4 py-10 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center justify-center gap-3 sm:gap-6">
              {phases.map((phase, i) => (
                <React.Fragment key={phase.number}>
                  <div className="flex flex-col items-center text-center gap-2">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/15 text-teal-400 text-lg font-bold ring-1 ring-teal-500/30">
                      {phase.number}
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 hidden sm:block">
                      {phase.label}
                    </p>
                    <p className="text-sm font-semibold text-white">{phase.title}</p>
                  </div>
                  {i < phases.length - 1 && (
                    <i className="fas fa-chevron-right text-white/20 text-lg flex-shrink-0 mb-6 sm:mb-8" aria-hidden />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* ── Phase detail sections ── */}
        {phases.map((phase, i) => (
          <section
            key={phase.number}
            className={
              i % 2 === 0
                ? "bg-slate-900 px-4 py-16 sm:px-6 md:py-20"
                : "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-16 sm:px-6 md:py-20"
            }
          >
            <div
              className={`mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 ${
                phase.reverse ? "" : ""
              }`}
            >
              {/* Text — left on desktop for even phases, right for odd */}
              <Animate variant={phase.reverse ? "fade-right" : "fade-left"} className={phase.reverse ? "lg:order-2" : "lg:order-1"}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500/15 text-sm font-bold text-teal-400 ring-1 ring-teal-500/30">
                    {phase.number}
                  </span>
                  <p className="text-sm font-semibold uppercase tracking-widest text-teal-400">
                    {phase.label}
                  </p>
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {phase.title}
                </h2>
                <p className="mt-4 text-slate-300 leading-relaxed">
                  {phase.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {phase.items.map(({ icon, text }) => (
                    <li key={text} className="flex items-center gap-3 text-slate-300">
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400">
                        <i className={`fas ${icon} text-sm`} aria-hidden />
                      </span>
                      {text}
                    </li>
                  ))}
                </ul>
              </Animate>

              {/* Image */}
              <Animate
                variant={phase.reverse ? "fade-left" : "fade-right"}
                delay={120}
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10 ${
                  phase.reverse ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Image
                  src={`/img/${phase.image}`}
                  alt={phase.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />
              </Animate>
            </div>
          </section>
        ))}

        {/* ── CTA ── */}
        <section className="border-t border-white/5 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 px-4 py-14 sm:px-6 md:py-16">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl space-y-3">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to start your application?
              </h2>
              <p className="text-lg text-slate-300">
                Our team is ready to guide you through every step — from your first consultation to your first day on campus.
              </p>
            </div>
            <a
              href="/About/Contact"
              className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-950/40 transition hover:bg-teal-400 whitespace-nowrap"
            >
              Get in touch
              <i className="fas fa-arrow-right text-sm" aria-hidden />
            </a>
          </div>
        </section>
      </main>

      <WhatsAppWidget
        phoneNumber="+18683181079"
        message="Hi, I would like to enquire about your services!"
      />
      <Footer height="300px" />
    </div>
  );
}
