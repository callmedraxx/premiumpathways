import Image from "next/image";
import Link from "next/link";
import Reveal from "../../components/Reveal";

const cities = [
  { name: "Beijing", note: "The capital, and more universities than any other city.", image: "/img/journey/beijing-forbidden.jpg", alt: "Visitors at the Forbidden City in Beijing", span: "sm:col-span-2 sm:row-span-2" },
  { name: "Shanghai", note: "Finance, engineering and the Bund at night.", image: "/img/journey/shanghai-night.jpg", alt: "The Shanghai skyline lit at night across the Huangpu river", span: "sm:col-span-2" },
  { name: "Shenzhen", note: "Tech, and a city younger than most of its students.", image: "/img/journey/shenzhen-day.jpg", alt: "Shenzhen skyline on a clear day", span: "" },
  { name: "Chengdu", note: "Pandas, hotpot and very large campuses.", image: "/img/journey/chengdu-bridge.jpg", alt: "The Anshun bridge in Chengdu lit at dusk", span: "" },
  { name: "Guangzhou", note: "Trade, medicine and the Pearl River.", image: "/img/journey/guangzhou-tower.jpg", alt: "The Canton Tower rising over the river in Guangzhou", span: "" },
  { name: "Hangzhou", note: "West Lake, and the home of Alibaba.", image: "/img/journey/hangzhou-night.jpg", alt: "Hangzhou skyline reflected in the water at night", span: "" },
  { name: "Xi'an", note: "The ancient capital, with strong engineering schools.", image: "/img/journey/xian-wall.jpg", alt: "The city wall of Xi'an above its moat", span: "" },
  { name: "Kunming", note: "Spring all year, and a large West African community.", image: "/img/journey/kunming-gate.jpg", alt: "A golden gateway in Kunming with people walking beneath it", span: "" },
];

/* Arrival. By now the aircraft behind the page is over China; the section
   makes it literal. Twelve cells, eight cities, no empty tile: Beijing takes
   four, Shanghai two, the rest one each. */
export default function Arrival() {
  return (
    <section className="reading py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal as="h2" className="display-lg text-chalk">Arriving in China.</Reveal>
          <Reveal as="p" delay={0.08} className="lede mt-5">
            The eight cities our students land in most. Each already has a community of Nigerians and other internationals waiting on campus.
          </Reveal>
        </div>

        <div className="mt-12 grid auto-rows-[15rem] grid-cols-1 gap-4 sm:grid-cols-4 sm:auto-rows-[14rem] lg:mt-16 lg:auto-rows-[17rem]">
          {cities.map((c, i) => (
            <Reveal key={c.name} from="up" delay={(i % 4) * 0.06} className={c.span}>
              <Link
                href="/Universities/Cities"
                className="group relative block h-full overflow-hidden rounded-card border border-chalk/[0.08]"
                aria-label={`Universities in ${c.name}`}
              >
                <Image src={c.image} alt={c.alt} fill sizes={i < 2 ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 100vw, 25vw"} className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-night-950/90 via-night-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className={`font-display font-semibold tracking-tight text-chalk ${i === 0 ? "text-3xl sm:text-4xl" : "text-2xl"}`}>{c.name}</h3>
                  <p className="mt-1 max-w-xs text-sm text-chalk/75">{c.note}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
