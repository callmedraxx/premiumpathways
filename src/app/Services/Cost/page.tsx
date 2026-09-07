import Image from "next/image";
import PageShell from "../../components/page/PageShell";
import PageHero from "../../components/page/PageHero";
import { Section, SectionHead } from "../../components/page/Section";
import CtaBand from "../../components/page/CtaBand";
import Reveal from "../../components/Reveal";

/* Every figure on this page is the agency's own. The layout changed; the
   numbers did not. */
const packages = [
  { name: "Package A", price: "$1,200", note: "Standard" },
  { name: "Package B", price: "$1,000", note: "Standard" },
];

const clusters = [
  {
    title: "Before you apply",
    items: [
      "Customized study plan with 5 schools recommended",
      "Evaluation of application materials",
      "Majors and universities matching",
      "Translation and optimization of application materials",
    ],
  },
  {
    title: "The application",
    items: [
      "3 self-chosen schools or course applications",
      "At least 1 offer and the JW202",
      "Mailing of the admission notice",
      "Visa guidance",
    ],
  },
  {
    title: "After the offer",
    items: [
      "Pre-departure preparation briefing",
      "Dormitory booking",
      "Medical check guidance",
      "Help registering your long-term residence permit",
      "Automated membership privileges",
      "Home-school communication",
      "Career planning",
    ],
  },
];

const reminders = [
  { icon: "fa-search", label: "Tracking your application" },
  { icon: "fa-envelope", label: "Mailing the admission notice" },
  { icon: "fa-passport", label: "Visa guidance" },
  { icon: "fa-plane-departure", label: "Pre-departure briefing" },
  { icon: "fa-bed", label: "Dormitory booking" },
  { icon: "fa-comments", label: "Home-school communication" },
  { icon: "fa-star", label: "Membership privileges" },
  { icon: "fa-briefcase", label: "Career planning" },
];

const refunds = [
  { amount: "90%", of: "of the service fee", when: "if you cancel within 24 hours of full payment." },
  { amount: "50%", of: "of the service fee", when: "if your application has already been processed." },
  { amount: "30%", of: "of the service fee", when: "if you fail to obtain a visa after 3 embassy attempts." },
  { amount: "100%", of: "of the Plus Package fee", when: "if admission is refused. Or we offer one free application service instead." },
];

const noRefund = [
  "The university application fee, at any time.",
  "Once a university has admitted you.",
  "If fake materials or information are submitted.",
  "Once you have landed in China.",
];

export default function Cost() {
  return (
    <PageShell>
      <PageHero
        image="/img/cost-hero.jpg"
        alt="A student reviewing paperwork with an advisor"
        title="What it costs, in full."
        lede="Two fees, no surprises. One is ours and covers everything from the first plan to your first semester. The other goes to the university."
        aside={
          <dl className="grid grid-cols-2 gap-3">
            {packages.map((p) => (
              <div key={p.name} className="panel p-5">
                <dt className="text-sm text-chalk/60">{p.name}</dt>
                <dd className="mt-1 font-display text-4xl font-semibold tracking-tight text-chalk">{p.price}</dd>
                <dd className="mt-1 text-xs text-chalk/50">USD, up to 3 universities</dd>
              </div>
            ))}
          </dl>
        }
      />

      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <SectionHead title="Our service fee." />
            <Reveal delay={0.1} className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-chalk/80">
              <p>
                When you first apply through the Premium Pathways online admission system, we provide a one-to-one consultation, including a preview of your application success rate and the employment direction for your chosen major.
              </p>
              <p>
                We charge different service fees depending on the package you choose. Each package covers applications to up to 3 universities. The fee maintains our platform and funds the full suite of student support services throughout your journey.
              </p>
            </Reveal>
          </div>
          <Reveal from="up" delay={0.12} className="lg:col-span-5 lg:col-start-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-chalk/[0.08]">
              <Image src="/img/cost-service.jpg" alt="A consultation in progress" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHead title="What the fee covers." lede="Both packages include every item below. The price difference is the tier, not the service." />
        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-3">
          {clusters.map((c, i) => (
            <Reveal key={c.title} from="up" delay={i * 0.08} className="border-t border-chalk/10 pt-6">
              <h3 className="display-md text-chalk">{c.title}</h3>
              <ul className="mt-6 space-y-3.5">
                {c.items.map((it) => (
                  <li key={it} className="flex gap-3 text-[0.98rem] leading-relaxed text-chalk/80">
                    <i className="fas fa-check mt-1.5 text-[10px] text-ember" aria-hidden />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal from="up" className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-card border border-chalk/[0.08]">
              <Image src="/img/cost-university.jpg" alt="A university campus in China" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
            </div>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <SectionHead title="The university fee." />
            <Reveal delay={0.1} className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-chalk/80">
              <p>
                The application fee is charged directly by the universities. It generally falls between <strong className="font-semibold text-chalk">$100 and $200 USD</strong> per university, depending on the institution and program, and covers the university&apos;s processing work.
              </p>
              <p>
                Premium Pathways collects application fees on behalf of universities under formal agreements. Chinese universities mainly accept payment in RMB, so we handle the foreign-exchange conversion for you.
              </p>
            </Reveal>

            <Reveal delay={0.14} className="mt-12 border-t border-chalk/10 pt-8">
              <h3 className="display-md text-chalk">Also in your service fee</h3>
              <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {reminders.map((r) => (
                  <li key={r.label} className="flex items-center gap-3 text-[0.98rem] text-chalk/80">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-chalk/15 text-chalk/70"><i className={`fas ${r.icon} text-[11px]`} aria-hidden /></span>
                    {r.label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead title="Refunds, stated plainly." lede="What comes back to you, and when it does not." />
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal from="up" className="lg:col-span-7">
            <ul className="divide-y divide-chalk/10 border-t border-chalk/10">
              {refunds.map((r) => (
                <li key={r.amount + r.of} className="grid grid-cols-[6.5rem_1fr] items-baseline gap-4 py-5 sm:grid-cols-[8rem_1fr]">
                  <span className="font-display text-4xl font-semibold tracking-tight text-chalk sm:text-5xl">{r.amount}</span>
                  <p className="text-[1.02rem] leading-relaxed text-chalk/80">
                    <span className="text-chalk">{r.of}</span> {r.when}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal from="up" delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <div className="panel-solid p-6 sm:p-7">
              <p className="font-semibold text-chalk">No refund</p>
              <ul className="mt-4 space-y-3">
                {noRefund.map((n) => (
                  <li key={n} className="flex gap-3 text-[0.98rem] leading-relaxed text-chalk/75">
                    <i className="fas fa-times mt-1.5 text-[10px] text-chalk/40" aria-hidden />
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
              <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-xl">
                <Image src="/img/cost-refund.jpg" alt="" fill sizes="(max-width: 1024px) 100vw, 30vw" className="object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand title="Ask us about the numbers." lede="Send your grades and a budget range. We will tell you honestly which package and which universities make sense." />
    </PageShell>
  );
}
