"use client";

import Link from "next/link";
import Animate from "../../../components/Animate";

const steps = [
  {
    number: "01",
    icon: "fa-comments",
    title: "Consultation",
    body: "One-to-one counseling across 600+ universities, 13 disciplines, and 80+ majors. We build a customized study plan with career context tailored to your goals.",
  },
  {
    number: "02",
    icon: "fa-file-alt",
    title: "Application",
    body: "We review and optimize your materials, match you with universities, handle scholarship channels, and follow up through to offer delivery.",
  },
  {
    number: "03",
    icon: "fa-plane-departure",
    title: "Pre-departure",
    body: "Full visa guidance, dormitory booking, a pre-departure briefing, and practical travel support — so you're ready before you leave.",
  },
  {
    number: "04",
    icon: "fa-map-marker-alt",
    title: "Arrival",
    body: "Airport pick-up in major cities, school registration, student community access, and ongoing support once you're on campus.",
  },
] as const;

export default function ApplySection() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-24"
      style={{ backgroundImage: "url('/img/student.jpeg')" }}
    >
      <div className="absolute inset-0 bg-slate-950/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(20,184,166,0.08),transparent)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <Animate variant="fade-up" className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-400">Your Journey</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">How to apply</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            A clear four-step journey from your first conversation to life on campus.
          </p>
        </Animate>

        <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {/* Connector line — desktop only */}
          <div className="pointer-events-none absolute left-0 right-0 top-9 hidden lg:block">
            <div className="mx-auto max-w-6xl px-[12.5%]">
              <div className="h-px bg-gradient-to-r from-transparent via-teal-500/40 to-transparent" />
            </div>
          </div>

          {steps.map((step, i) => (
            <Animate key={step.number} variant="fade-up" delay={i * 100} threshold={0.08}>
              <div className="group relative flex flex-col items-center text-center lg:px-5">
                <div className="relative z-10 mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-teal-500/30 bg-slate-950 shadow-[0_0_0_6px_rgba(15,23,42,0.8)] transition duration-300 group-hover:border-teal-400/60 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.2)]">
                  <i className={`fas ${step.icon} text-2xl text-teal-400 transition group-hover:scale-110`} aria-hidden />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-teal-500 text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                </div>
                <div className="flex flex-1 flex-col rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition duration-300 group-hover:border-teal-500/20 group-hover:bg-white/[0.08]">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-teal-400/80">Step {step.number}</p>
                  <h3 className="mb-2 text-lg font-bold text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{step.body}</p>
                </div>
              </div>
            </Animate>
          ))}
        </div>

        <Animate variant="fade-up" delay={400} className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/Services/Procedures"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-950/50 transition hover:bg-teal-400"
          >
            View full procedures
            <i className="fas fa-arrow-right text-xs" aria-hidden />
          </Link>
          <Link
            href="/About/Contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
          >
            Talk to an advisor
          </Link>
        </Animate>
      </div>
    </section>
  );
}
