import PageShell from "../../components/page/PageShell";
import PageHero from "../../components/page/PageHero";
import { Section, SectionHead } from "../../components/page/Section";
import CtaBand from "../../components/page/CtaBand";
import ScholarshipTickets, { type ScholarshipProgram } from "../../components/page/ScholarshipTickets";
import Reveal from "../../components/Reveal";

/* The seats currently open through our scholarship channels. These are the
   language-year places that most doctoral candidates begin with; the PhD
   itself is matched to a supervisor once you are here. */
const programs: ScholarshipProgram[] = [
  { id: "southwest-university-finance", image: "/img/univ-southwest-finance.jpg", university: "Southwest University of Finance and Economics", scholarship: "Full scholarship, language program", major: "Chinese", degree: "Language Program", city: "Chengdu" },
  { id: "shandong-university-of-technology", image: "/img/full-scholarship-in-shandong-university-of-science-and-technology.jpg", university: "Shandong University of Technology", scholarship: "Full scholarship, language program", major: "Chinese", degree: "Language Program", city: "Zibo" },
  { id: "beijing-international-studies-university", image: "/img/univ-beijing-intl.jpg", university: "Beijing International Studies University", scholarship: "Full scholarship, language program", major: "Chinese", degree: "Language Program", city: "Beijing" },
  { id: "anhui-university-of-finance-and-economics", image: "/img/univ-anhui.jpg", university: "Anhui University of Finance and Economics", scholarship: "Full scholarship, language program", major: "Chinese", degree: "Language Program", city: "Bengbu" },
];

const route = [
  { title: "A research question, not just a field", body: "Chinese supervisors take candidates who arrive with a clear problem. We help you sharpen yours before anyone reads it." },
  { title: "A supervisor before a university", body: "Doctoral offers come from a professor who wants your project. We write to them on your behalf, in Chinese where that helps." },
  { title: "Funding through the right channel", body: "Chinese Government, provincial and university scholarships each have their own calendar. We apply through whichever one your profile fits." },
  { title: "A language year if you need one", body: "Many candidates spend a funded year on Chinese first. The seats below are that year, fully paid." },
];

export default function Phd() {
  return (
    <PageShell>
      <PageHero
        image="/img/phd-hero.jpg"
        alt="A doctoral researcher at work in a university laboratory"
        title="Fully funded doctorates in China."
        lede="Tuition, accommodation and a monthly stipend, at universities that want your research. We find the supervisor, the funding channel and the seat."
        position="center 30%"
      />

      <Section>
        <SectionHead title="How a PhD in China is won." lede="It is not a form. It is a match between your question, a professor who wants to supervise it, and a scholarship that pays for it." />
        <ol className="mt-12 grid grid-cols-1 gap-x-12 gap-y-2 md:grid-cols-2">
          {route.map((r, i) => (
            <Reveal key={r.title} as="li" from="up" delay={(i % 2) * 0.08} className="border-t border-chalk/10 py-7">
              <h3 className="display-md text-chalk">{r.title}</h3>
              <p className="mt-3 max-w-[50ch] leading-relaxed text-chalk/70">{r.body}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHead title="Seats open now." lede="Full scholarships through our channels. Most doctoral candidates begin with one of these language years, then move to their research program." />
        <div className="mt-12">
          <ScholarshipTickets programs={programs} />
        </div>
      </Section>

      <CtaBand title="Bring us your research question." lede="Send a paragraph on what you want to study and where you are now. An advisor replies within a day." />
    </PageShell>
  );
}
