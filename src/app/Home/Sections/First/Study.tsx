"use client";

import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { href: "/About/Contact", icon: "fa-scroll", label: "Admission notice" },
  { href: "/Universities/Top", icon: "fa-university", label: "Universities abroad" },
  { href: "/Universities/Majors", icon: "fa-book", label: "University majors" },
  { href: "/Universities/Cities", icon: "fa-map-marker-alt", label: "Popular cities" },
  { href: "/Universities/Top", icon: "fa-star", label: "Top universities" },
];

const StudyInChina = () => {
  return (
    <section className="relative isolate flex min-h-[100dvh] w-full flex-col justify-center overflow-hidden text-white">
      {/* Full-bleed background — extends under fixed header for one continuous scene */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/img/hero-campus.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_42%] sm:object-[center_38%]"
          aria-hidden
        />
        {/* Top: heavier scrim so the nav bar reads clearly and meets the image smoothly */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/75 to-slate-950/35"
          aria-hidden
        />
        {/* Sides + bottom vignette so content stays readable */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_45%,transparent_0%,rgba(15,23,42,0.5)_100%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"
          aria-hidden
        />
        {/* Brand tint — ties hero to site teal without fighting the photo */}
        <div className="absolute inset-0 bg-teal-950/25 mix-blend-soft-light" aria-hidden />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 pb-20 pt-[calc(5rem+env(safe-area-inset-top,0px))] sm:pb-24 sm:pt-[calc(5.5rem+env(safe-area-inset-top,0px))] md:pt-[calc(6rem+env(safe-area-inset-top,0px))]">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-teal-200/95">
          Premium Pathways
        </p>
        <h1 className="mb-4 max-w-3xl text-center text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Study or work abroad
        </h1>
        <p className="mb-10 max-w-2xl text-center text-lg text-slate-100/95 sm:text-xl">
          Discover higher education and career paths in China and Europe — clear guidance from application to arrival.
        </p>

        <div className="mb-12 w-full max-w-md">
          <label htmlFor="hero-search" className="sr-only">
            Search programs
          </label>
          <div className="flex overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-md">
            <input
              id="hero-search"
              type="search"
              placeholder="Search programs, cities, or majors..."
              className="min-w-0 flex-1 border-0 bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-400/50"
            />
            <Link
              href="/Universities/Search"
              className="shrink-0 bg-teal-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-400"
            >
              Search
            </Link>
          </div>
        </div>

        <div className="grid w-full max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {quickLinks.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              className="group flex flex-col items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-3 py-4 text-center shadow-sm backdrop-blur-sm transition hover:border-teal-300/40 hover:bg-teal-500/20 sm:py-5"
            >
              <i
                className={`fas ${item.icon} mb-2 text-2xl text-teal-200 transition group-hover:scale-105 sm:text-3xl`}
                aria-hidden
              />
              <span className="text-xs font-medium leading-snug sm:text-sm">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyInChina;
