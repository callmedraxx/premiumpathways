"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Reveal from "../../components/Reveal";

/* The search is the site's real front door: a query lands on the page that
   answers it. Kept from the previous build; the routing table is product
   truth, not styling. */
const routeFromQuery = (q: string): string => {
  const t = q.toLowerCase().trim();
  if (!t) return "/Universities/Top";
  const cities = ["beijing","shanghai","shenzhen","guangzhou","chengdu","hangzhou","xian","xi'an","kunming","wuhan","nanjing","tianjin","chongqing","changsha","qingdao","xiamen","weihai","zhuhai","shantou","guiyang"];
  if (cities.some((c) => t.includes(c))) return "/Universities/Cities";
  if (/phd|ph\.d|doctor|doctoral|doctorate/.test(t)) return "/Scholarships/Phd";
  if (/non.?degree|language|chinese lang/.test(t)) return "/Scholarships/NonD";
  if (/mbbs|medicine|medical|engineer|major|course|program|discipline/.test(t)) return "/Universities/Majors";
  if (/cost|fee|price|tuition|refund|package/.test(t)) return "/Services/Cost";
  if (/faq|question|how|visa|document|passport/.test(t)) return "/Services/FAQ";
  if (/apply|application|procedure|process|step/.test(t)) return "/Services/Procedures";
  return `/Universities/Top?q=${encodeURIComponent(q.trim())}`;
};

export default function Hero() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  return (
    <section className="relative flex min-h-[100dvh] items-end pb-16 pt-28 sm:items-center sm:pb-20 lg:pt-24">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7 xl:col-span-6">
          <h1 className="display-xl text-chalk">
            <Reveal as="span" from="up" className="block">Your degree in China,</Reveal>
            <Reveal as="span" from="up" delay={0.1} className="block">one flight away.</Reveal>
          </h1>

          <Reveal as="p" from="up" delay={0.22} className="lede mt-6">
            We place students from Nigeria and beyond in Chinese universities, and we stay with you until you land.
          </Reveal>

          <Reveal from="up" delay={0.32} className="mt-8 max-w-xl">
            <form
              onSubmit={(e) => { e.preventDefault(); router.push(routeFromQuery(query)); }}
              className="flex rounded-full border border-chalk/[0.14] bg-night-900/70 p-1.5 shadow-lift backdrop-blur-md transition focus-within:border-ember/60"
            >
              <label htmlFor="hero-search" className="sr-only">Search a city, major or program</label>
              <i className="fas fa-search ml-4 self-center text-sm text-chalk/40" aria-hidden />
              <input
                id="hero-search" type="search" value={query} onChange={(e) => setQuery(e.target.value)}
                placeholder="Search a city, major or program"
                autoComplete="off"
                className="min-w-0 flex-1 bg-transparent px-3 py-3 text-[0.95rem] text-chalk placeholder:text-chalk/45 focus:outline-none"
              />
              <button type="submit" className="btn-ember !px-5 !py-2.5 text-sm">Search</button>
            </form>
          </Reveal>

          <Reveal from="up" delay={0.42} className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/About/Contact" className="btn-ember">Talk to an advisor</Link>
            <Link href="/Universities/Top" className="btn-ghost">See universities</Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
