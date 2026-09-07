import Image from "next/image";
import PageShell from "../../components/page/PageShell";
import PageHero from "../../components/page/PageHero";
import { Section, SectionHead } from "../../components/page/Section";
import CtaBand from "../../components/page/CtaBand";
import Reveal from "../../components/Reveal";

/* Real students, their own words. Photos, names and countries unchanged. */
const featured = [
  {
    image: "/img/tt4.jpeg",
    name: "Catherine",
    country: "Nigeria",
    quote: "A remarkable experience from start to finish. Premium Pathways handled every detail of my application with professionalism and care. I am now studying in Beijing and couldn't be happier with how everything turned out. Thank you!",
  },
  {
    image: "/img/MvstafaMuhammed-Kazakhstan.jpg",
    name: "Mvstafa Muhammed",
    country: "Kazakhstan",
    quote: "A world-class service. I secured a full scholarship thanks to the expert guidance of the Premium Pathways team. They understood exactly what I needed and delivered beyond my expectations.",
  },
];

const voices = [
  { image: "/img/tt1.jpeg", name: "Folagbade", country: "Nigeria", quote: "It was an unforgettable experience. The team guided me through every step and made sure I felt confident throughout the entire process. Thank you, Premium Pathways!" },
  { image: "/img/tt2.jpeg", name: "Kwame", country: "Ghana", quote: "I'm very happy to know about Premium Pathways. They connected me with the right university and the right scholarship. I couldn't have done it alone." },
  { image: "/img/tt3.jpeg", name: "Jidapha", country: "Morocco", quote: "They made everything so easy and seamless. I'm impressed by how organised and communicative the team was throughout the application process." },
  { image: "/img/tt5.jpeg", name: "Appiah", country: "Ghana", quote: "Friendly, professional, and attentive to every detail! My advisor was always available and ensured I was never left in the dark about my application status." },
  { image: "/img/tt6.jpeg", name: "Francis", country: "Ghana", quote: "Top-notch service! I'll recommend Premium Pathways to all my friends and family who want to study in China. The whole journey was handled brilliantly." },
  { image: "/img/tt7.jpeg", name: "Fatima", country: "Nigeria", quote: "Truly exceptional! Thank you for this experience. From my first consultation to receiving my admission letter, the team was outstanding." },
  { image: "/img/Carmenita.jpg", name: "Carmenita", country: "Philippines", quote: "Premium Pathways helped me navigate the entire application process effortlessly. I am now studying at a top university in Beijing and loving every moment!" },
  { image: "/img/Cindy-Indonesia.jpg", name: "Cindy", country: "Indonesia", quote: "Excellent guidance from start to finish. The advisors were patient, thorough, and genuinely invested in helping me achieve my dream of studying in China." },
  { image: "/img/Victor-Indonesia.jpg", name: "Victor", country: "Indonesia", quote: "Professional, thorough, and genuinely caring. My scholarship application was handled perfectly and I received an offer from my first-choice university." },
  { image: "/img/Nigvaree-Khumsap-Thailand.jpg", name: "Nigvaree", country: "Thailand", quote: "They found me the perfect university match. The whole process was smooth and stress-free thanks to the dedicated team at Premium Pathways." },
  { image: "/img/Papitchaya-Kaewtha-Thailand.jpg", name: "Papitchaya", country: "Thailand", quote: "From consultation to arrival, Premium Pathways was there every step of the way. Highly recommend to anyone considering studying in China." },
  { image: "/img/Hor-DaRa-Cambodia.jpg", name: "Hor DaRa", country: "Cambodia", quote: "I was nervous about studying abroad, but the team made me feel supported every step of the way. I am grateful for their patience and expertise." },
  { image: "/img/Jidapha-Mangkale-Thailand.png", name: "Jidapha Mangkale", country: "Thailand", quote: "The pre-departure briefing was incredibly helpful. I felt fully prepared and confident before arriving in China. An incredible team." },
];

export default function Testimonials() {
  return (
    <PageShell>
      <PageHero
        image="/img/journey/grad-campus.jpg"
        alt="A graduate in cap and gown smiling on a sunlit campus"
        title="In their own words."
        lede="Students from 13 countries, from Lagos to Phnom Penh, on what it was like to make the flight with us."
        position="center 30%"
      />

      <Section>
        <SectionHead title="Two stories in full." />
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-6">
          {featured.map((f, i) => (
            <Reveal key={f.name} from="up" delay={i * 0.1} className="grid grid-cols-1 gap-6 border-t border-chalk/10 pt-8 sm:grid-cols-[11rem_1fr] sm:gap-8">
              <div className="relative aspect-square w-full max-w-[11rem] overflow-hidden rounded-card border border-chalk/[0.08]">
                <Image src={f.image} alt={`${f.name} from ${f.country}`} fill sizes="11rem" className="object-cover" />
              </div>
              <figure>
                <blockquote className="text-xl leading-relaxed text-chalk sm:text-2xl sm:leading-snug">&ldquo;{f.quote}&rdquo;</blockquote>
                <figcaption className="mt-5">
                  <span className="block font-semibold text-chalk">{f.name}</span>
                  <span className="block text-sm text-chalk/60">Placed from {f.country}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead title="And thirteen more." lede="Nigeria, Ghana, Morocco, the Philippines, Indonesia, Thailand, Cambodia and Kazakhstan. The countries change; the story does not." />
        <div className="mt-12 columns-1 gap-5 md:columns-2 lg:columns-3">
          {voices.map((v, i) => (
            <Reveal key={v.name} from="up" delay={(i % 3) * 0.06} className="mb-5 break-inside-avoid">
              <figure className="panel p-6">
                <blockquote className="text-[1.02rem] leading-relaxed text-chalk/85">&ldquo;{v.quote}&rdquo;</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-chalk/15">
                    <Image src={v.image} alt="" fill sizes="44px" className="object-cover" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-chalk">{v.name}</span>
                    <span className="block text-xs text-chalk/60">Placed from {v.country}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand title="Write the next one." lede="Tell us where you are and what you want to study. An advisor replies within a day." />
    </PageShell>
  );
}
