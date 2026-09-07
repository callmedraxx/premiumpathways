import Image from "next/image";
import PageShell from "../../components/page/PageShell";
import PageHero from "../../components/page/PageHero";
import { Section, SectionHead } from "../../components/page/Section";
import CtaBand from "../../components/page/CtaBand";
import Reveal from "../../components/Reveal";

const numbers = [
  { value: "600+", label: "Chinese universities on file" },
  { value: "3,000+", label: "students served this year" },
  { value: "90%", label: "of applications accepted" },
  { value: "200+", label: "scholarships secured" },
];

const services = [
  { icon: "fa-comments", title: "One-to-one consultation", body: "Counselling across 600+ universities, 13 disciplines and 80+ majors, with the career direction behind each choice." },
  { icon: "fa-file-alt", title: "Application support", body: "Material review, translation, university matching, scholarship channels, and follow-up through to the offer." },
  { icon: "fa-passport", title: "Visa guidance", body: "Document preparation, embassy briefings, and help after approval." },
  { icon: "fa-plane-departure", title: "Pre-departure briefing", body: "Dormitory booking, travel logistics, the health check, and a full orientation before you fly." },
  { icon: "fa-map-marker-alt", title: "Arrival support", body: "Airport pick-up in major cities, campus registration, and a student community from day one." },
  { icon: "fa-briefcase", title: "Career planning", body: "Employment direction and long-term planning matched to your field and the Chinese job market." },
];

const reasons = [
  { title: "Transparent about money", body: "No hidden fees. Every cost is set out before you commit, from our service fee to each university's application charge." },
  { title: "Based in Beijing", body: "Our team works on the ground, with direct relationships at China's universities and scholarship offices." },
  { title: "With you past the airport", body: "The service does not end at the application. We stay until your first semester is under way." },
  { title: "A record you can check", body: "300+ enrolments and 200+ scholarships this year, with a 90% acceptance rate across every level." },
];

export default function AboutUs() {
  return (
    <PageShell>
      <PageHero
        image="/img/about-who-we-are.jpg"
        alt="A Premium Pathways advisor in consultation with a student"
        title="For future, for better."
        lede="A Beijing consultancy that places students from Nigeria, Ghana and across Asia in Chinese universities, and stays with them until they are settled."
      />

      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <SectionHead title="Who we are." />
            <Reveal delay={0.1} className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-chalk/80">
              <p>
                Premium Pathways is a consultation firm in Beijing dedicated to attentive, professional educational services. Guided by one idea, <em className="not-italic font-semibold text-chalk">for future, for better</em>, we connect students worldwide with the right academic pathway in China.
              </p>
              <p>
                With detailed profiles on more than 600 Chinese universities, we produce a tailored shortlist in minutes across every major discipline, from computer science and medicine to artificial intelligence and engineering.
              </p>
              <p>
                This year we have served over 3,000 students from Africa, Southeast Asia, South Asia and Europe, prepared more than 900 personalised plans, and seen over 300 of them enrol.
              </p>
            </Reveal>
          </div>
          <Reveal from="up" delay={0.12} className="lg:col-span-5 lg:col-start-8">
            <div className="relative aspect-[4/5] overflow-hidden rounded-card border border-chalk/[0.08]">
              <Image src="/img/journey/students-laptop.jpg" alt="Students from different countries working together" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
            </div>
          </Reveal>
        </div>

        <Reveal from="up" className="mt-20 border-t border-chalk/10 pt-10 lg:mt-28">
          <p className="lede">This year, in numbers.</p>
          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {numbers.map((n) => (
              <div key={n.label}>
                <dt className="font-display text-5xl font-semibold tracking-tight text-chalk sm:text-6xl">{n.value}</dt>
                <dd className="mt-2 max-w-[16ch] text-sm text-chalk/60">{n.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Section>

      <Section>
        <SectionHead title="Students first, always." lede="Every decision starts with one question: what is best for the student? From your first enquiry, an advisor works to understand your goals academically, professionally and personally." />
        <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} from="up" delay={(i % 2) * 0.08} className="grid grid-cols-[3rem_1fr] gap-5 border-t border-chalk/10 pt-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ember/50 text-ember"><i className={`fas ${s.icon} text-sm`} aria-hidden /></span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-chalk">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-chalk/70">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal from="up" className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-card border border-chalk/[0.08] lg:sticky lg:top-32">
              <Image src="/img/about-team.jpg" alt="The Premium Pathways team" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
            </div>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <SectionHead title="Why students choose us." />
            <ol className="mt-10">
              {reasons.map((r, i) => (
                <Reveal key={r.title} as="li" from="up" delay={i * 0.06} className="border-t border-chalk/10 py-7">
                  <h3 className="display-md text-chalk">{r.title}</h3>
                  <p className="mt-3 max-w-[52ch] leading-relaxed text-chalk/70">{r.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <CtaBand title="Start with a conversation." lede="Your first consultation is free. Tell us where you are and what you want to study." />
    </PageShell>
  );
}
