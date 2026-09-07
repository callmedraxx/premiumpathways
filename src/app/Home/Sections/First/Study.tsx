"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Reveal from "../../../components/Reveal";

const quickLinks = [
  { href: "/About/Contact", icon: "fa-scroll", label: "Admission notice" },
  { href: "/Universities/Top", icon: "fa-university", label: "Universities abroad" },
  { href: "/Universities/Majors", icon: "fa-book", label: "University majors" },
  { href: "/Universities/Cities", icon: "fa-map-marker-alt", label: "Popular cities" },
  { href: "/Universities/Top", icon: "fa-star", label: "Top universities" },
];

const stats = [
  { n: "12+", l: "years placing students" },
  { n: "300+", l: "partner universities" },
  { n: "20+", l: "countries served" },
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
  const handleSearch = (e: React.FormEvent) => { e.preventDefault(); router.push(routeFromQuery(query)); };

  return (
    <section className="relative isolate flex min-h-[100dvh] w-full items-center overflow-hidden pt-28 pb-16">
      {/* The fixed globe shows through; this only adds a soft floor gradient. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(230_60%_7%)]" aria-hidden />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        {/* ---- claim ---- */}
        <div className="lg:col-span-7">
          <Reveal from="down" className="mb-5 flex items-center gap-3">
            <span className="u-rule-gold" />
            <span className="u-eyebrow">Premium Pathways · Est. 2014</span>
          </Reveal>

          <h1 className="font-display text-[clamp(2.9rem,6.4vw,5.2rem)] font-medium leading-[1.02] tracking-tight text-[hsl(var(--chalk))]">
            <Reveal as="span" from="up" delay={0.05} className="block">Your degree abroad,</Reveal>
            <Reveal as="span" from="up" delay={0.16} className="block">
              <span className="italic text-[hsl(var(--gold-soft))]">guided</span> from first
            </Reveal>
            <Reveal as="span" from="up" delay={0.27} className="block">form to first day.</Reveal>
          </h1>

          <Reveal from="up" delay={0.4} as="p" className="mt-6 max-w-xl text-lg leading-relaxed text-[hsl(var(--fog))]">
            Higher education and career pathways in China and Europe — chosen for you,
            applied for with you, and seen through to arrival.
          </Reveal>

          <Reveal from="up" delay={0.5} className="mt-8 max-w-lg">
            <form onSubmit={handleSearch}>
              <label htmlFor="hero-search" className="sr-only">Search programs</label>
              <div className="flex overflow-hidden rounded-full border border-[hsl(var(--chalk)/0.15)] bg-[hsl(var(--navy-2)/0.6)] shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-md">
                <input
                  id="hero-search" type="search" value={query} onChange={e => setQuery(e.target.value)}
                  placeholder="Search a country, city, or major…"
                  className="min-w-0 flex-1 border-0 bg-transparent px-6 py-4 text-sm text-white placeholder:text-[hsl(var(--fog-deep))] focus:outline-none"
                />
                <button type="submit" className="btn-gold m-1 shrink-0 !py-3">
                  <i className="fas fa-arrow-right" aria-hidden /> Search
                </button>
              </div>
            </form>
          </Reveal>

          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:max-w-2xl">
            {quickLinks.slice(0, 3).map((item, i) => (
              <Reveal key={item.label} from="up" delay={0.6 + i * 0.07}>
                <Link href={item.href} className="group flex items-center gap-3 rounded-2xl border border-[hsl(var(--chalk)/0.1)] bg-[hsl(var(--navy-2)/0.4)] px-4 py-3 backdrop-blur-sm transition hover:border-[hsl(var(--gold)/0.5)]">
                  <i className={`fas ${item.icon} text-lg text-[hsl(var(--gold-soft))] transition group-hover:scale-110`} aria-hidden />
                  <span className="text-sm font-medium text-[hsl(var(--chalk))]">{item.label}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ---- framed campus panel + floating credibility ---- */}
        <Reveal from="right" delay={0.3} className="lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <motion.div
              animate={{ y: [0, -12, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[hsl(var(--chalk)/0.12)] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]"
            >
              <Image src="/img/hero-campus.jpg" alt="Students on a university campus abroad" fill priority sizes="(max-width:1024px) 90vw, 40vw" className="object-cover object-[center_35%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(230_60%_7%)] via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-2xl italic text-white">&ldquo;They made China feel reachable.&rdquo;</p>
                <p className="u-eyebrow mt-2">Nigvaree · Thailand</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="glass absolute -left-4 top-8 hidden rounded-2xl px-5 py-4 sm:block"
            >
              <div className="flex gap-5">
                {stats.map(s => (
                  <div key={s.l}>
                    <div className="font-display text-2xl text-[hsl(var(--gold-soft))]">{s.n}</div>
                    <div className="text-[10px] uppercase tracking-wide text-[hsl(var(--fog))]">{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>

      {/* scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="u-eyebrow flex flex-col items-center gap-2">
          <span>Scroll</span>
          <i className="fas fa-chevron-down text-[hsl(var(--gold))]" aria-hidden />
        </motion.div>
      </div>
    </section>
  );
};

export default StudyInChina;
