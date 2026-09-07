import Link from "next/link";
import PageShell from "../../components/page/PageShell";
import PageHero from "../../components/page/PageHero";
import { Section, SectionHead } from "../../components/page/Section";
import CtaBand from "../../components/page/CtaBand";
import Reveal from "../../components/Reveal";

const faq = [
  {
    q: "How can I choose a course to start?",
    a: "Deciding what to study in China requires research across a few key areas: choosing an ideal course, finding the right university, and selecting a suitable city. Our consultants walk you through all three during your free one-on-one assessment.",
  },
  {
    q: "How do I choose a suitable city?",
    a: "Location matters. China's diversity means cities differ greatly in culture, climate, cost of living, and job opportunities. Take a look at our city guide to find a city that matches your lifestyle and career goals, from cosmopolitan Shanghai to the historic capital, Beijing.",
  },
  {
    q: "How do I find the right university?",
    a: "Look for universities that offer courses aligned with your interests. Consider ranking, location, available scholarships, and the level of support offered to international students. Premium Pathways matches you with up to 5 universities tailored to your profile.",
  },
  {
    q: "When should I apply for the fall semester?",
    a: "Applications for the fall semester (September intake) should typically be submitted between March and June, depending on the university's deadlines. We recommend starting at least 4 to 6 months before your intended start date.",
  },
  {
    q: "When should I apply for the spring semester?",
    a: "For the spring semester (February or March intake), applications usually open between September and November. Check the specific university's deadlines early, because some competitive programs fill up fast.",
  },
  {
    q: "How do I get a student visa to study in China?",
    a: "To study in China you need an X1 visa (study longer than 180 days) or an X2 visa (180 days or fewer). You will need your university acceptance letter, a valid passport, a completed application form, a health certificate, and proof of financial support. We provide full visa guidance as part of our service.",
  },
  {
    q: "What documents are needed for the visa application?",
    a: "Required documents typically include a valid passport, the completed visa application form (JW201 or JW202), the admission letter from your Chinese university, a physical examination record, passport-size photos, and proof of financial support. Requirements vary by country, and we will confirm your specific list.",
  },
  {
    q: "What should I do immediately after arriving in China?",
    a: "After landing, go through immigration, collect your luggage, and complete the health check if required. University representatives or our arrival support team can meet you at major airports. You will then head to your campus to begin registration.",
  },
  {
    q: "How does enrolment and registration work?",
    a: "After arrival, visit your university's international student office with your passport, visa, and admission letter to complete enrolment. You will receive your student ID, choose courses, and be introduced to campus life. Premium Pathways supports you through this entire process.",
  },
];

const links = [
  { href: "/Services/Procedures", label: "How applying works", note: "The three phases, step by step." },
  { href: "/Services/Cost", label: "What it costs", note: "Both fees and the refund rules." },
  { href: "/About/Contact", label: "Ask us directly", note: "WhatsApp, email, or the form." },
];

export default function FAQ() {
  return (
    <PageShell>
      <PageHero
        image="/img/faq-hero.jpg"
        alt="Students in a lecture hall"
        title="Questions we get every week."
        lede="Courses, cities, deadlines, visas and what happens when you land. If yours is not here, an advisor will answer it in a message."
      />

      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <SectionHead title="Nine answers." />
            <Reveal from="up" delay={0.08} className="mt-10 border-t border-chalk/10">
              {faq.map((f, i) => (
                <details key={f.q} open={i === 0} className="group border-b border-chalk/10">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left [&::-webkit-details-marker]:hidden">
                    <span className="text-lg font-semibold tracking-tight text-chalk sm:text-xl">{f.q}</span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-chalk/20 text-chalk/70 transition group-open:rotate-45 group-open:border-ember group-open:text-ember">
                      <i className="fas fa-plus text-xs" aria-hidden />
                    </span>
                  </summary>
                  <p className="max-w-[65ch] pb-6 text-[1.02rem] leading-relaxed text-chalk/75">{f.a}</p>
                </details>
              ))}
            </Reveal>
          </div>

          <Reveal from="up" delay={0.14} className="lg:col-span-3 lg:col-start-10">
            <div className="lg:sticky lg:top-32">
              <p className="meta">Related</p>
              <ul className="mt-4 divide-y divide-chalk/10 border-t border-chalk/10">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="group block py-4">
                      <span className="flex items-center justify-between font-semibold text-chalk transition group-hover:text-ember">
                        {l.label}
                        <i className="fas fa-arrow-right text-xs text-chalk/40 transition group-hover:translate-x-0.5 group-hover:text-ember" aria-hidden />
                      </span>
                      <span className="mt-1 block text-sm text-chalk/60">{l.note}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand title="Still have a question?" lede="Send it as it is. An advisor replies within a day, on WhatsApp or by email." />
    </PageShell>
  );
}
