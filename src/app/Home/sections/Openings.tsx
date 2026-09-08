"use client";

import { useRef, useState } from "react";
import Reveal from "../../components/Reveal";
import AdmissionModal from "../../components/AdmissionModal";

/* Product truth from the previous build: these are the seats the agency is
   actually filling this intake. Printed as boarding passes, because that is
   what an admission letter turns into. */
const openings = [
  { university: "Dali University", major: "Computer Science", city: "Dali", language: "English", duration: "4 years", degree: "Bachelor's", start: "September 2027", deadline: "December 2027", tuition: "" },
  { university: "Beijing Wuzi University", major: "Business Administration", city: "Beijing", language: "Chinese", duration: "1 + 4 years", degree: "Bachelor's", start: "January 2027", deadline: "30 July", tuition: "$18,000" },
  { university: "Huaihua University", major: "Chinese Language", city: "Huaihua", language: "Chinese", duration: "4 years", degree: "Bachelor's", start: "Every September", deadline: "15 August", tuition: "$18,000" },
  { university: "Dalian Jiaotong University", major: "Mechanical Engineering", city: "Dalian", language: "Chinese", duration: "3 years", degree: "Master's", start: "Every September", deadline: "30 March", tuition: "" },
  { university: "Hainan Normal University", major: "Computer Science and Technology", city: "Haikou", language: "Chinese", duration: "4 years", degree: "Bachelor's", start: "Every September", deadline: "30 June", tuition: "" },
  { university: "Guangxi Medical University", major: "Clinical Medicine", city: "Nanning", language: "English", duration: "6 years", degree: "MBBS", start: "Every September", deadline: "30 June", tuition: "" },
];

export default function Openings() {
  const [applyTo, setApplyTo] = useState<string | null>(null);
  const strip = useRef<HTMLDivElement>(null);
  const nudge = (dir: 1 | -1) => strip.current?.scrollBy({ left: dir * Math.min(560, strip.current.clientWidth * 0.8), behavior: "smooth" });

  return (
    <section className="reading py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Reveal as="h2" className="display-lg text-chalk">Seats open this intake.</Reveal>
            <Reveal as="p" delay={0.08} className="lede mt-5">
              Live programs we are filling right now. Every one comes with a scholarship channel.
            </Reveal>
          </div>
          <Reveal delay={0.12} className="hidden gap-2 md:flex">
            <button type="button" onClick={() => nudge(-1)} aria-label="Previous programs" className="flex h-11 w-11 items-center justify-center rounded-full border border-chalk/20 text-chalk/80 transition hover:border-chalk/50 hover:text-chalk">
              <i className="fas fa-arrow-left text-xs" aria-hidden />
            </button>
            <button type="button" onClick={() => nudge(1)} aria-label="Next programs" className="flex h-11 w-11 items-center justify-center rounded-full border border-chalk/20 text-chalk/80 transition hover:border-chalk/50 hover:text-chalk">
              <i className="fas fa-arrow-right text-xs" aria-hidden />
            </button>
          </Reveal>
        </div>
      </div>

      <Reveal from="up" delay={0.1}>
        <div
          ref={strip}
          className="no-bar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:px-8 lg:mt-16"
          style={{ scrollPaddingLeft: "max(1.25rem, calc((100vw - 1400px) / 2 + 2rem))" }}
        >
          <div className="shrink-0 basis-[max(0px,calc((100vw-1400px)/2))]" aria-hidden />
          {openings.map((o) => (
            <article key={o.university + o.major} className="ticket panel-solid flex w-[min(88vw,32rem)] shrink-0 snap-start flex-col overflow-hidden sm:flex-row">
              <div className="flex flex-col justify-between border-b border-dashed border-chalk/15 p-6 sm:w-[58%] sm:border-b-0 sm:border-r sm:p-7">
                <div>
                  <p className="meta">{o.degree}</p>
                  <h3 className="display-md mt-3 text-chalk">{o.major}</h3>
                  <p className="mt-2 text-[0.98rem] text-chalk/70">{o.university}</p>
                </div>
                <div className="mt-8 flex items-center gap-3">
                  <span className="rounded-full bg-ember/15 px-3 py-1 text-xs font-semibold text-ember">Scholarship available</span>
                  {o.tuition && <span className="text-xs text-chalk/55">Tuition {o.tuition}</span>}
                </div>
              </div>
              <div className="flex flex-col justify-between bg-night-800/60 p-6 sm:w-[42%] sm:p-7">
                <dl className="grid grid-cols-2 gap-x-4 gap-y-4 text-sm">
                  <div><dt className="meta !text-[10px]">City</dt><dd className="mt-1 text-chalk">{o.city}</dd></div>
                  <div><dt className="meta !text-[10px]">Taught in</dt><dd className="mt-1 text-chalk">{o.language}</dd></div>
                  <div><dt className="meta !text-[10px]">Duration</dt><dd className="mt-1 text-chalk">{o.duration}</dd></div>
                  <div><dt className="meta !text-[10px]">Intake</dt><dd className="mt-1 text-chalk">{o.start}</dd></div>
                  <div className="col-span-2"><dt className="meta !text-[10px]">Apply by</dt><dd className="mt-1 text-chalk">{o.deadline}</dd></div>
                </dl>
                <button type="button" onClick={() => setApplyTo(o.university)} className="btn-ember mt-6 w-full">
                  Apply for this seat
                </button>
              </div>
            </article>
          ))}
          <article className="ticket panel-solid flex w-[min(88vw,26rem)] shrink-0 snap-start flex-col justify-between p-7">
            <div>
              <p className="meta">Anything else</p>
              <h3 className="display-md mt-3 text-chalk">A different university, city or major?</h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-chalk/70">
                We work with 600+ universities. Tell us what you want to study and where, and we will find the seat.
              </p>
            </div>
            <button type="button" onClick={() => setApplyTo("Open request")} className="btn-ghost mt-8 w-full">
              Tell us what you want
            </button>
          </article>
          <div className="shrink-0 basis-[max(1.25rem,calc((100vw-1400px)/2))]" aria-hidden />
        </div>
      </Reveal>

      {applyTo && <AdmissionModal university={applyTo} onClose={() => setApplyTo(null)} />}
    </section>
  );
}
