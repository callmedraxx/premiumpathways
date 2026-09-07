import PageShell from "../../components/page/PageShell";
import PageHero from "../../components/page/PageHero";
import { Section, SectionHead } from "../../components/page/Section";
import CtaBand from "../../components/page/CtaBand";
import ScholarshipTickets, { type ScholarshipProgram } from "../../components/page/ScholarshipTickets";
import Reveal from "../../components/Reveal";

const programs: ScholarshipProgram[] = [
  { id: "southwest-university-finance", image: "/img/univ-southwest-finance.jpg", university: "Southwest University of Finance and Economics", scholarship: "Full scholarship, language program", major: "Chinese", degree: "Language Program", city: "Chengdu" },
  { id: "shandong-university-of-technology", image: "/img/full-scholarship-in-shandong-university-of-science-and-technology.jpg", university: "Shandong University of Technology", scholarship: "Full scholarship, language program", major: "Chinese", degree: "Language Program", city: "Zibo" },
  { id: "beijing-international-studies-university", image: "/img/univ-beijing-intl.jpg", university: "Beijing International Studies University", scholarship: "Full scholarship, language program", major: "Chinese", degree: "Language Program", city: "Beijing" },
  { id: "anhui-university-of-finance-and-economics", image: "/img/univ-anhui.jpg", university: "Anhui University of Finance and Economics", scholarship: "Full scholarship, language program", major: "Chinese", degree: "Language Program", city: "Bengbu" },
];

const facts = [
  ["One or two years", "Long enough to reach the HSK level a degree program asks for, short enough to keep your plans moving."],
  ["Everything covered", "Tuition, a dormitory and a monthly allowance. You pay for the flight and your own spending."],
  ["A door, not a detour", "Students who finish the language year apply to degree programs from inside China, with a Chinese transcript and a professor who knows them."],
  ["No prior Chinese needed", "You start from zero. Classes are small and taught to international students."],
];

export default function NonD() {
  return (
    <PageShell>
      <PageHero
        image="/img/nond-hero.jpg"
        alt="International students in a Chinese language class"
        title="A funded year of Chinese."
        lede="Non-degree language scholarships at Chinese universities: tuition, accommodation and a stipend paid, and a path into a degree afterwards."
        position="center 35%"
      />

      <Section>
        <SectionHead title="What the year gives you." />
        <dl className="mt-12 grid grid-cols-1 gap-x-12 gap-y-2 md:grid-cols-2">
          {facts.map(([t, d], i) => (
            <Reveal key={t} from="up" delay={(i % 2) * 0.08} className="border-t border-chalk/10 py-7">
              <dt className="display-md text-chalk">{t}</dt>
              <dd className="mt-3 max-w-[50ch] leading-relaxed text-chalk/70">{d}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      <Section>
        <SectionHead title="Seats open now." lede="Full scholarships through our channels, in four cities. Pick one and apply through us." />
        <div className="mt-12">
          <ScholarshipTickets programs={programs} />
        </div>
      </Section>

      <CtaBand title="Start with the language." lede="Tell us your current level, even if it is none, and where you would like to live for a year." />
    </PageShell>
  );
}
