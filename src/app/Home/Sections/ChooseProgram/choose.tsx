"use client";

import Link from "next/link";
import Image from "next/image";
import Animate from "../../../components/Animate";

const programs = [
  {
    href: "/Scholarships/Phd",
    image: "/img/doctor.jpeg",
    alt: "PhD program",
    tag: "Full Scholarship",
    title: "PhD Program",
    description: "Fully-funded doctoral research at top Chinese universities across science, engineering, business, and the humanities.",
    available: true,
    large: true,
  },
  {
    href: "/About/Contact",
    image: "/img/grad.jpeg",
    alt: "Bachelors program",
    tag: "Coming Soon",
    title: "Bachelors Program",
    description: "Undergraduate degree programs opening soon. Get in touch to be notified when applications open.",
    available: false,
    large: false,
  },
  {
    href: "/About/Contact",
    image: "/img/doctors.jpeg",
    alt: "Masters program",
    tag: "Coming Soon",
    title: "Masters Program",
    description: "Postgraduate programs coming soon. Contact us to register your interest early.",
    available: false,
    large: false,
  },
  {
    href: "/Scholarships/NonD",
    image: "/img/china.jpeg",
    alt: "Non-degree / Chinese language program",
    tag: "Language & Culture",
    title: "Non-Degree / Chinese",
    description: "Chinese language and cultural immersion programs with full scholarship options at leading universities.",
    available: true,
    large: false,
  },
];

const ChooseProgram = () => {
  return (
    <section className="bg-slate-900 px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <Animate variant="fade-up" className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Choose a program</h2>
          <p className="mt-2 max-w-2xl mx-auto text-slate-300">
            Explore pathways by level — from language immersion to doctoral research.
          </p>
        </Animate>

        <Animate variant="fade-up" delay={120}>
          <div className="flex flex-col gap-3 lg:grid lg:min-h-[520px] lg:grid-cols-4 lg:grid-rows-2 lg:gap-3">
            {programs.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className={`group relative overflow-hidden rounded-2xl ring-1 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400
                  ${p.large ? "min-h-[280px] lg:col-span-2 lg:row-span-2 lg:min-h-0" : "min-h-[200px] lg:min-h-0"}
                  ${p.available ? "ring-white/10 hover:ring-teal-500/40" : "ring-white/10 cursor-pointer"}
                `}
              >
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  className={`object-cover transition duration-500 group-hover:scale-105 ${!p.available ? "opacity-40" : ""}`}
                  sizes={p.large ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 25vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-slate-950/10 transition duration-300 group-hover:from-slate-950/95 group-hover:via-slate-950/60 group-hover:to-slate-950/30" />
                <div className="absolute top-3 left-3 z-10">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${
                    !p.available
                      ? "bg-slate-800/90 text-slate-400 ring-white/10"
                      : p.tag === "Language & Culture"
                      ? "bg-cyan-500/20 text-cyan-300 ring-cyan-500/30"
                      : "bg-teal-500/20 text-teal-300 ring-teal-500/30"
                  }`}>
                    {p.tag}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-5">
                  <p className={`font-semibold transition duration-300 ${p.large ? "text-xl sm:text-2xl" : "text-base sm:text-lg"} ${!p.available ? "text-white/60" : "text-white"}`}>
                    {p.title}
                  </p>
                  <p className={`mt-1.5 text-sm leading-relaxed text-slate-300 transition-all duration-300 max-h-0 overflow-hidden opacity-0 group-hover:max-h-20 group-hover:opacity-100 ${p.large ? "sm:text-base" : ""}`}>
                    {p.description}
                  </p>
                  <div className={`mt-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 max-h-0 overflow-hidden opacity-0 group-hover:max-h-10 group-hover:opacity-100 ${p.available ? "text-teal-400" : "text-slate-400"}`}>
                    {p.available ? "Explore program" : "Get notified"}
                    <i className="fas fa-arrow-right text-[10px]" aria-hidden />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default ChooseProgram;
