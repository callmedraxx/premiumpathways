"use client";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import WhatsAppWidget from "../../components/WhatsappWidget";
import Image from "next/image";
import Animate from "../../components/Animate";

const serviceItems = [
  "Customized study plan – 5 schools recommended",
  "Evaluation of application materials",
  "Majors & universities matching",
  "Translation & optimization of application materials",
  "3 self-chosen schools / course application",
  "Mailing admission notice",
  "At least 1 offer & JW202",
  "Visa guidance",
  "Pre-departure preparation briefing",
  "Dormitory booking",
  "Medical check guidance",
  "Assist in registration of long-term residence permit",
  "Automated membership privileges",
  "Home-school communication",
  "Career planning",
];

const reminderItems = [
  { icon: "fa-search", label: "Tracking application process" },
  { icon: "fa-envelope", label: "Mailing admission notice" },
  { icon: "fa-passport", label: "Visa guidance" },
  { icon: "fa-plane-departure", label: "Pre-departure preparation briefing" },
  { icon: "fa-bed", label: "Dormitory booking" },
  { icon: "fa-comments", label: "Home-school communication" },
  { icon: "fa-star", label: "Automated membership privileges" },
  { icon: "fa-briefcase", label: "Career planning" },
];

const refundItems = [
  {
    icon: "fa-times-circle",
    text: "University application fee is non-refundable at any time.",
  },
  {
    icon: "fa-clock",
    text: "90% of service fee is refundable within 24 hours of full payment.",
  },
  {
    icon: "fa-spinner",
    text: "50% of service fee is refundable if your application has already been processed.",
  },
  {
    icon: "fa-check-circle",
    text: "100% of Premium Pathways Plus Package Fee is refundable if admission is refused — or we offer one free application service.",
  },
  {
    icon: "fa-id-card",
    text: "30% of service fee is refundable if the student fails to obtain a visa after 3 embassy attempts.",
  },
  {
    icon: "fa-ban",
    text: "No refund once the student has been admitted by a university.",
  },
  {
    icon: "fa-file-times",
    text: "No refund if the applicant submits fake materials or information.",
  },
  {
    icon: "fa-map-marker-alt",
    text: "No refund once the student has landed in China.",
  },
];

export default function Cost() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <Header />

      <main className="flex flex-1 flex-col">
        {/* ── Hero ── */}
        <section className="relative flex h-[420px] items-end justify-center overflow-hidden">
          <Image
            src="/img/cost-hero.jpg"
            alt="Cost description"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />
          <div className="relative z-10 pb-14 text-center px-4">
            <Animate variant="fade-down" delay={100}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-400">Transparent Pricing</p>
            </Animate>
            <Animate variant="fade-up" delay={220}>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Cost Description</h1>
            </Animate>
            <Animate variant="fade-up" delay={340}>
              <p className="mx-auto mt-4 max-w-xl text-slate-300">
                A clear breakdown of every fee involved in your application journey — no surprises.
              </p>
            </Animate>
          </div>
        </section>

        {/* ── Service Fee ── */}
        <section className="bg-slate-900 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
            <Animate variant="fade-left" className="order-2 lg:order-1">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-400">
                Our Fee
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Service Fee
              </h2>
              <div className="mt-5 space-y-4 text-slate-300 leading-relaxed">
                <p>
                  When you first apply through the Premium Pathways online admission system, we provide one-to-one consultation — including a preview of your application success rate and employment direction for your chosen major.
                </p>
                <p>
                  We charge different service fees depending on the package you choose. Each package covers applications to up to 3 universities. The fee maintains our platform and funds the full suite of student support services throughout your journey.
                </p>
              </div>
            </Animate>
            <Animate variant="fade-right" delay={120} className="order-1 lg:order-2 relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10">
              <Image
                src="/img/cost-service.jpg"
                alt="Service fee consultation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            </Animate>
          </div>
        </section>

        {/* ── University Fee ── */}
        <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
            <Animate variant="fade-left" className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10">
              <Image
                src="/img/cost-university.jpg"
                alt="University application fee"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            </Animate>
            <Animate variant="fade-right" delay={120}>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-400">
                University Charges
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                University Fee
              </h2>
              <div className="mt-5 space-y-4 text-slate-300 leading-relaxed">
                <p>
                  The application fee is charged directly by the universities. Generally it falls between <span className="text-white font-semibold">$100 – $200 USD</span> per university, depending on the institution and program. Students are required to pay this fee to cover the university&apos;s processing work.
                </p>
                <p>
                  Premium Pathways collects application fees on behalf of universities under formal agreements. Since Chinese universities primarily accept payment in RMB, we handle all foreign-exchange conversion on your behalf.
                </p>
              </div>
            </Animate>
          </div>
        </section>

        {/* ── Service Package Table ── */}
        <section className="bg-slate-900 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-5xl">
            <Animate variant="fade-up" className="mb-12 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-400">
                What&apos;s Included
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Service Packages
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-slate-300">
                Both packages include the full range of services — choose the tier that fits your budget.
              </p>
            </Animate>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* Package A */}
              <Animate variant="fade-left">
              <div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                <div className="bg-teal-500/20 border-b border-white/10 px-6 py-5 text-center">
                  <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-1">Standard</p>
                  <h3 className="text-xl font-bold text-white">Package A</h3>
                  <p className="mt-2 text-3xl font-bold text-white">
                    $1,200 <span className="text-base font-normal text-slate-400">USD</span>
                  </p>
                </div>
                <ul className="flex-1 divide-y divide-white/5 px-6 py-4">
                  {serviceItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 py-3 text-sm text-slate-300">
                      <i className="fas fa-check text-teal-400 mt-0.5 flex-shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              </Animate>

              {/* Package B */}
              <Animate variant="fade-right" delay={100}>
              <div className="flex flex-col rounded-2xl border border-teal-500/30 bg-teal-500/5 overflow-hidden ring-1 ring-teal-500/20">
                <div className="bg-teal-500/30 border-b border-teal-500/20 px-6 py-5 text-center">
                  <p className="text-xs font-semibold uppercase tracking-widest text-teal-300 mb-1">Standard</p>
                  <h3 className="text-xl font-bold text-white">Package B</h3>
                  <p className="mt-2 text-3xl font-bold text-white">
                    $1,000 <span className="text-base font-normal text-slate-400">USD</span>
                  </p>
                </div>
                <ul className="flex-1 divide-y divide-white/5 px-6 py-4">
                  {serviceItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 py-3 text-sm text-slate-300">
                      <i className="fas fa-check text-teal-400 mt-0.5 flex-shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              </Animate>
            </div>
          </div>
        </section>

        {/* ── Reminder ── */}
        <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-400">
                Also Included
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Premium Pathways Reminder
              </h2>
              <p className="mt-4 text-slate-300 leading-relaxed">
                In addition to university applications, your service fee also covers the following support services:
              </p>
              <ul className="mt-6 space-y-3">
                {reminderItems.map(({ icon, label }) => (
                  <li key={label} className="flex items-center gap-3 text-slate-300">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400">
                      <i className={`fas ${icon} text-sm`} aria-hidden />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10">
              <Image
                src="/img/cost-reminder.jpg"
                alt="Support services"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            </div>
          </div>
        </section>

        {/* ── Refund Policy ── */}
        <section className="bg-slate-900 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10">
              <Image
                src="/img/cost-refund.jpg"
                alt="Refund policy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-400">
                Peace of Mind
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Refund Policy
              </h2>
              <ul className="mt-6 space-y-4">
                {refundItems.map(({ icon, text }) => (
                  <li key={text} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 text-teal-400 mt-0.5">
                      <i className={`fas ${icon} text-xs`} aria-hidden />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
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
