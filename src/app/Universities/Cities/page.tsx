"use client";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import WhatsAppWidget from "../../components/WhatsappWidget";
import Animate from "../../components/Animate";
import Image from "next/image";

const cities = [
  { name: "Beijing",   image: "/img/beijing.jpeg",    tier: "Tier 1" },
  { name: "Shanghai",  image: "/img/shangai.jpeg",    tier: "Tier 1" },
  { name: "Shenzhen",  image: "/img/shenzen.jpg",     tier: "Tier 1" },
  { name: "Guangzhou", image: "/img/guangzhou.jpg",   tier: "Tier 1" },
  { name: "Chengdu",   image: "/img/chengdu.jpeg",    tier: "Tier 1" },
  { name: "Hangzhou",  image: "/img/hangzhou.jpeg",   tier: "Tier 1" },
  { name: "Xi'an",     image: "/img/xian.jpeg",       tier: "Tier 2" },
  { name: "Kunming",   image: "/img/kunming.jpeg",    tier: "Tier 2" },
  { name: "Wuhan",     image: "/img/Wuhan.jpeg",      tier: "Tier 2" },
  { name: "Nanjing",   image: "/img/Nanjing.jpeg",    tier: "Tier 2" },
  { name: "Tianjin",   image: "/img/Tianjin.jpeg",    tier: "Tier 2" },
  { name: "Chongqing", image: "/img/Chongqing.jpeg",  tier: "Tier 2" },
  { name: "Changsha",  image: "/img/changsha.jpeg",   tier: "Tier 2" },
  { name: "Qingdao",   image: "/img/Qingdao.jpeg",    tier: "Coastal" },
  { name: "Xiamen",    image: "/img/Xiamen.jpeg",     tier: "Coastal" },
  { name: "Weihai",    image: "/img/Weihai.jpeg",     tier: "Coastal" },
  { name: "Zhuhai",    image: "/img/zhuhai.jpeg",     tier: "Coastal" },
  { name: "Shantou",   image: "/img/shandou.jpg",     tier: "Coastal" },
  { name: "Guiyang",   image: "/img/Guiyang.jpeg",    tier: "Emerging" },
];

const tierColors: Record<string, string> = {
  "Tier 1":  "bg-teal-500/20 text-teal-300 ring-teal-500/30",
  "Tier 2":  "bg-blue-500/20 text-blue-300 ring-blue-500/30",
  "Coastal": "bg-cyan-500/20 text-cyan-300 ring-cyan-500/30",
  "Emerging":"bg-violet-500/20 text-violet-300 ring-violet-500/30",
};

export default function Cities() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <Header />

      <main className="flex flex-1 flex-col">

        {/* ── Hero ── */}
        <section className="relative flex h-[420px] items-end justify-center overflow-hidden">
          <Image
            src="/img/shangai.jpeg"
            alt="Popular cities in China"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />
          <div className="relative z-10 pb-14 text-center px-4">
            <Animate variant="fade-down" delay={100}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-400">Where Will You Study?</p>
            </Animate>
            <Animate variant="fade-up" delay={220}>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Popular Cities</h1>
            </Animate>
            <Animate variant="fade-up" delay={340}>
              <p className="mx-auto mt-4 max-w-xl text-slate-300">
                From world-class metropolises to vibrant coastal hubs — China has a city for every lifestyle and ambition.
              </p>
            </Animate>
          </div>
        </section>

        {/* ── Overview ── */}
        <section className="bg-slate-900 px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-slate-300 leading-relaxed">
              Tier-1 cities like <span className="text-white font-medium">Beijing, Shanghai, Guangzhou</span> and <span className="text-white font-medium">Shenzhen</span> draw the most international students — rich in universities, research institutions, and career opportunities. Tier-2 cities such as <span className="text-white font-medium">Xiamen, Kunming</span> and <span className="text-white font-medium">Hangzhou</span> offer equally strong academics with a lower cost of living and a more relaxed pace. Choose the city that aligns with your goals, budget, and lifestyle.
            </p>

            {/* Legend */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {Object.entries(tierColors).map(([tier, cls]) => (
                <span
                  key={tier}
                  className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${cls}`}
                >
                  {tier}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── City Grid ── */}
        <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {cities.map((city, i) => (
                <Animate key={city.name} variant="scale-up" delay={Math.min(i * 50, 400)} threshold={0.06}>
                <div
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10"
                >
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                  {/* tier badge */}
                  <span
                    className={`absolute top-2.5 right-2.5 rounded-full px-2 py-0.5 text-[10px] font-semibold ring-1 opacity-0 transition group-hover:opacity-100 ${tierColors[city.tier]}`}
                  >
                    {city.tier}
                  </span>

                  {/* city name */}
                  <div className="absolute bottom-0 left-0 w-full p-3">
                    <p className="text-sm font-semibold text-white sm:text-base">
                      {city.name}
                    </p>
                  </div>
                </div>
                </Animate>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="border-t border-white/5 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 px-4 py-14 sm:px-6 md:py-16">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl space-y-3">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Need help choosing a city?
              </h2>
              <p className="text-lg text-slate-300">
                Our advisors factor in your budget, university preferences, and lifestyle to recommend the best fit.
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
