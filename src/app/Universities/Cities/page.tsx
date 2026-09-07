import Image from "next/image";
import PageShell from "../../components/page/PageShell";
import PageHero from "../../components/page/PageHero";
import { Section, SectionHead } from "../../components/page/Section";
import CtaBand from "../../components/page/CtaBand";
import Reveal from "../../components/Reveal";

/* All nineteen cities from the previous build, in the same tiers. The eight
   with new photography lead; the rest keep their original images. */
type City = { name: string; image: string; alt: string; note?: string; large?: boolean };

const groups: { tier: string; blurb: string; cities: City[] }[] = [
  {
    tier: "Tier 1",
    blurb: "The most universities, the most international students, the most career opportunity, and the highest cost of living.",
    cities: [
      { name: "Beijing", image: "/img/journey/beijing-forbidden.jpg", alt: "Visitors at the Forbidden City in Beijing", note: "The capital, and our home.", large: true },
      { name: "Shanghai", image: "/img/journey/shanghai-night.jpg", alt: "The Shanghai skyline at night", note: "Finance, engineering, the Bund." },
      { name: "Shenzhen", image: "/img/journey/shenzhen-day.jpg", alt: "Shenzhen skyline on a clear day", note: "Tech, and a very young city." },
      { name: "Guangzhou", image: "/img/journey/guangzhou-tower.jpg", alt: "The Canton Tower in Guangzhou", note: "Trade, medicine, the Pearl River." },
      { name: "Chengdu", image: "/img/journey/chengdu-bridge.jpg", alt: "The Anshun bridge in Chengdu at dusk", note: "Pandas, hotpot, large campuses." },
      { name: "Hangzhou", image: "/img/journey/hangzhou-night.jpg", alt: "Hangzhou skyline reflected in water at night", note: "West Lake, home of Alibaba." },
    ],
  },
  {
    tier: "Tier 2",
    blurb: "Equally strong academics, a lower cost of living and a more relaxed pace.",
    cities: [
      { name: "Xi'an", image: "/img/journey/xian-wall.jpg", alt: "The city wall of Xi'an", note: "The ancient capital." },
      { name: "Kunming", image: "/img/journey/kunming-gate.jpg", alt: "A golden gateway in Kunming", note: "Spring all year." },
      { name: "Wuhan", image: "/img/Wuhan.jpeg", alt: "Wuhan" },
      { name: "Nanjing", image: "/img/Nanjing.jpeg", alt: "Nanjing" },
      { name: "Tianjin", image: "/img/Tianjin.jpeg", alt: "Tianjin" },
      { name: "Chongqing", image: "/img/Chongqing.jpeg", alt: "Chongqing" },
      { name: "Changsha", image: "/img/changsha.jpeg", alt: "Changsha" },
    ],
  },
  {
    tier: "Coastal",
    blurb: "Sea air, milder winters and some of the country's prettiest campuses.",
    cities: [
      { name: "Qingdao", image: "/img/Qingdao.jpeg", alt: "Qingdao" },
      { name: "Xiamen", image: "/img/Xiamen.jpeg", alt: "Xiamen" },
      { name: "Weihai", image: "/img/Weihai.jpeg", alt: "Weihai" },
      { name: "Zhuhai", image: "/img/zhuhai.jpeg", alt: "Zhuhai" },
      { name: "Shantou", image: "/img/shandou.jpg", alt: "Shantou" },
    ],
  },
  {
    tier: "Emerging",
    blurb: "Fast-growing, inexpensive, and increasingly open to international students.",
    cities: [
      { name: "Guiyang", image: "/img/Guiyang.jpeg", alt: "Guiyang" },
    ],
  },
];

function CityTile({ c, large = false, sizes }: { c: City; large?: boolean; sizes: string }) {
  return (
    <div className={`group relative h-full overflow-hidden rounded-card border border-chalk/[0.08] ${large ? "" : "aspect-[4/3]"}`}>
      <Image src={c.image} alt={c.alt} fill sizes={sizes} className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-night-950/90 via-night-950/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <h3 className={`font-display font-semibold tracking-tight text-chalk ${large ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"}`}>{c.name}</h3>
        {c.note && <p className="mt-1 text-sm text-chalk/75">{c.note}</p>}
      </div>
    </div>
  );
}

export default function Cities() {
  const [tier1, ...rest] = groups;
  return (
    <PageShell>
      <PageHero
        image="/img/journey/shanghai-night.jpg"
        alt="The Shanghai skyline at night across the Huangpu river"
        title="Nineteen cities to land in."
        lede="Beijing, Shanghai, Guangzhou and Shenzhen draw the most international students. Xiamen, Kunming and Hangzhou offer the same academics for less. Pick the one that fits your goals, budget and pace."
      />

      {/* Tier 1: a bento, Beijing at double size. Six cities, eight cells, no gap. */}
      <Section>
        <SectionHead title="Tier 1 cities." lede={tier1.blurb} />
        <div className="mt-12 grid auto-rows-[15rem] grid-cols-1 gap-4 sm:auto-rows-[13rem] sm:grid-cols-3 lg:auto-rows-[16rem] lg:grid-cols-4">
          {tier1.cities.map((c, i) => (
            <Reveal key={c.name} from="up" delay={(i % 4) * 0.06} className={c.large ? "sm:col-span-2 sm:row-span-2" : ""}>
              <CityTile c={c} large={c.large} sizes={c.large ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 100vw, 25vw"} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* The other tiers: one section each, a plain grid, the tier named once. */}
      {rest.map((g) => (
        <Section key={g.tier}>
          <SectionHead title={`${g.tier} cities.`} lede={g.blurb} />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {g.cities.map((c, i) => (
              <Reveal key={c.name} from="up" delay={(i % 4) * 0.06}>
                <CityTile c={c} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
              </Reveal>
            ))}
          </div>
        </Section>
      ))}

      <CtaBand title="Need help choosing a city?" lede="An advisor weighs your budget, your university shortlist and how you like to live, and recommends the fit." />
    </PageShell>
  );
}
