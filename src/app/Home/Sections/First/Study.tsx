"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Animate from "../../../components/Animate";

const quickLinks = [
  { href: "/About/Contact", icon: "fa-scroll", label: "Admission notice" },
  { href: "/Universities/Top", icon: "fa-university", label: "Universities abroad" },
  { href: "/Universities/Majors", icon: "fa-book", label: "University majors" },
  { href: "/Universities/Cities", icon: "fa-map-marker-alt", label: "Popular cities" },
  { href: "/Universities/Top", icon: "fa-star", label: "Top universities" },
];

const routeFromQuery = (q: string): string => {
  const t = q.toLowerCase().trim();
  if (!t) return "/Universities/Top";

  const cities = ["beijing","shanghai","shenzhen","guangzhou","chengdu","hangzhou","xian","xi'an","kunming","wuhan","nanjing","tianjin","chongqing","changsha","qingdao","xiamen","weihai","zhuhai","shantou","guiyang"];
  if (cities.some(c => t.includes(c))) return "/Universities/Cities";

  if (/phd|ph\.d|doctor|doctoral|doctorate/.test(t)) return "/Scholarships/Phd";
  if (/non.?degree|language|chinese lang/.test(t)) return "/Scholarships/NonD";
  if (/mbbs|medicine|medical|engineer|major|course|program|discipline/.test(t)) return "/Universities/Majors";
  if (/cost|fee|price|tuition|refund|package/.test(t)) return "/Services/Cost";
  if (/faq|question|how|visa|document|passport/.test(t)) return "/Services/FAQ";
  if (/apply|application|procedure|process|step/.test(t)) return "/Services/Procedures";

  return `/Universities/Top?q=${encodeURIComponent(q.trim())}`;
};

const StudyInChina = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(routeFromQuery(query));
  };

  return (
    <section className="relative isolate flex min-h-[100dvh] w-full flex-col justify-center overflow-hidden text-white">
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
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/75 to-slate-950/35" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_45%,transparent_0%,rgba(15,23,42,0.5)_100%)]" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" aria-hidden />
        <div className="absolute inset-0 bg-teal-950/25 mix-blend-soft-light" aria-hidden />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 pb-20 pt-[calc(5rem+env(safe-area-inset-top,0px))] sm:pb-24 sm:pt-[calc(5.5rem+env(safe-area-inset-top,0px))] md:pt-[calc(6rem+env(safe-area-inset-top,0px))]">
        <Animate variant="fade-down" delay={100} duration={700}>
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-teal-200/95">
            Premium Pathways
          </p>
        </Animate>
        <Animate variant="fade-up" delay={200} duration={700}>
          <h1 className="mb-4 max-w-3xl text-center text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Study or work abroad
          </h1>
        </Animate>
        <Animate variant="fade-up" delay={320} duration={700}>
          <p className="mb-10 max-w-2xl text-center text-lg text-slate-100/95 sm:text-xl">
            Discover higher education and career paths in China and Europe — clear guidance from application to arrival.
          </p>
        </Animate>

        <Animate variant="scale-in" delay={450} duration={600} className="mb-12 w-full max-w-md">
          <form onSubmit={handleSearch}>
            <label htmlFor="hero-search" className="sr-only">Search programs</label>
            <div className="flex overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-md">
              <input
                id="hero-search"
                type="search"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search programs, cities, or majors..."
                className="min-w-0 flex-1 border-0 bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-400/50"
              />
              <button type="submit" className="shrink-0 bg-teal-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-400">
                Search
              </button>
            </div>
          </form>
        </Animate>

        <div className="grid w-full max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {quickLinks.map((item, i) => (
            <Animate key={item.href + item.label} variant="fade-up" delay={550 + i * 60} duration={500}>
              <Link
                href={item.href}
                className="group flex flex-col items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-3 py-4 text-center shadow-sm backdrop-blur-sm transition hover:border-teal-300/40 hover:bg-teal-500/20 sm:py-5"
              >
                <i className={`fas ${item.icon} mb-2 text-2xl text-teal-200 transition group-hover:scale-105 sm:text-3xl`} aria-hidden />
                <span className="text-xs font-medium leading-snug sm:text-sm">{item.label}</span>
              </Link>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyInChina;
