"use client";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import WhatsAppWidget from "../../components/WhatsappWidget";
import Animate from "../../components/Animate";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "600+",  label: "Universities in China",      icon: "fa-university" },
  { value: "3,000+",label: "Students served",            icon: "fa-users" },
  { value: "90%",   label: "Acceptance rate",            icon: "fa-chart-line" },
  { value: "200+",  label: "Scholarships secured",       icon: "fa-award" },
];

const services = [
  { icon: "fa-comments",        title: "1-on-1 Consultation",        body: "Personalised counseling across 600+ universities, 13 disciplines, and 80+ majors — tailored to your goals and career direction." },
  { icon: "fa-file-alt",        title: "Application Support",        body: "Material review, translation, university matching, scholarship channels, and full follow-up through to offer delivery." },
  { icon: "fa-passport",        title: "Visa Guidance",              body: "Step-by-step visa support including document preparation, embassy briefings, and post-approval assistance." },
  { icon: "fa-plane-departure", title: "Pre-departure Briefing",     body: "Dormitory booking, travel logistics, health check guidance, and a comprehensive pre-departure orientation." },
  { icon: "fa-map-marker-alt",  title: "Arrival Support",            body: "Airport pick-up in major cities, campus registration, and ongoing student community access." },
  { icon: "fa-briefcase",       title: "Career Planning",            body: "Employment direction insights and long-term planning aligned with your chosen field and the Chinese job market." },
];

const reasons = [
  { icon: "fa-shield-alt",  title: "Trusted & Transparent",    body: "No hidden fees. We outline every cost clearly before you commit — from service fees to university application charges." },
  { icon: "fa-globe-asia",  title: "China Specialists",         body: "Based in Beijing, our team has on-the-ground expertise across China's top universities and scholarship programs." },
  { icon: "fa-headset",     title: "End-to-End Service",        body: "We stay with you from your first enquiry through to your first semester on campus — not just the application." },
  { icon: "fa-star",        title: "Proven Track Record",       body: "300+ successful enrollments, 200+ scholarships secured, and a 90% acceptance rate across all academic levels." },
];

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <Header />

      <main className="flex flex-1 flex-col">

        {/* ── Hero ── */}
        <section className="relative flex h-[420px] items-end justify-center overflow-hidden">
          <Image src="/img/proc-hero.jpg" alt="About Premium Pathways" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />
          <div className="relative z-10 pb-14 text-center px-4">
            <Animate variant="fade-down" delay={100}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-400">For Future, For Better</p>
            </Animate>
            <Animate variant="fade-up" delay={220}>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">About Us</h1>
            </Animate>
            <Animate variant="fade-up" delay={340}>
              <p className="mx-auto mt-4 max-w-xl text-slate-300">
                Your trusted partner in educational consultation — bridging students worldwide with China&apos;s finest universities.
              </p>
            </Animate>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="bg-slate-900 px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {stats.map((s, i) => (
                <Animate key={s.label} variant="scale-up" delay={i * 80}>
                  <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center">
                    <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400">
                      <i className={`fas ${s.icon} text-sm`} aria-hidden />
                    </span>
                    <p className="text-3xl font-bold text-white">{s.value}</p>
                    <p className="mt-1 text-xs text-slate-400">{s.label}</p>
                  </div>
                </Animate>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who We Are ── */}
        <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
            <Animate variant="fade-left">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-400">Our Story</p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Who We Are</h2>
              <div className="mt-5 space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Located in <span className="text-white font-medium">Beijing</span>, Premium Pathways is a consultation firm dedicated to providing attentive and professional educational services. Guided by the concept of <span className="text-teal-400 font-semibold">&ldquo;For Future, For Better&rdquo;</span>, we bridge students worldwide with their ideal academic pathways in China.
                </p>
                <p>
                  With detailed profiles on over <span className="text-white font-medium">600 Chinese universities</span>, we provide tailored matches in minutes across all major disciplines — from Computer Science and Medicine to Artificial Intelligence and Engineering.
                </p>
                <p>
                  This year alone we have served over <span className="text-white font-medium">3,000 students</span> from Southeast Asia, South Asia, Europe, and Africa — preparing more than <span className="text-white font-medium">900 personalised plans</span> and securing over <span className="text-white font-medium">300 successful enrollments</span>.
                </p>
              </div>
            </Animate>
            <Animate variant="fade-right" delay={120}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10">
                <Image src="/img/about-who-we-are.jpg" alt="Student consultation" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />
              </div>
            </Animate>
          </div>
        </section>

        {/* ── Mission ── */}
        <section className="bg-slate-900 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
            <Animate variant="fade-left" className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10 order-2 lg:order-1">
              <Image src="/img/about-mission.jpg" alt="Our mission" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />
            </Animate>
            <Animate variant="fade-right" delay={120} className="order-1 lg:order-2">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-400">Our Mission</p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Students first, always</h2>
              <div className="mt-5 space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Every decision we make starts with one question: what is best for the student? From the moment you enquire, our advisors focus entirely on understanding your goals — academically, professionally, and personally.
                </p>
                <p>
                  With an acceptance rate of <span className="text-white font-medium">90%</span>, we have helped over <span className="text-white font-medium">200 students</span> secure scholarships and supported self-financed students in gaining admission to top universities across Beijing, Shanghai, Guangdong, and beyond.
                </p>
                <p>We don&apos;t just process applications — we build pathways.</p>
              </div>
            </Animate>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 grid items-center gap-10 lg:grid-cols-2">
              <Animate variant="fade-left">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-400">What We Do</p>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Services</h2>
                <p className="mt-4 text-slate-300 leading-relaxed">
                  From your very first enquiry to your first semester on campus, we handle every step — so you can focus entirely on your future.
                </p>
                <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10">
                  <Image src="/img/faq-hero.jpg" alt="Students in a classroom" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                </div>
              </Animate>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {services.map((s, i) => (
                  <Animate key={s.title} variant="fade-up" delay={i * 60}>
                    <div className="group flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-teal-500/20 hover:bg-white/[0.07]">
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400 transition group-hover:bg-teal-500/25">
                        <i className={`fas ${s.icon} text-sm`} aria-hidden />
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-white">{s.title}</h3>
                        <p className="mt-0.5 text-xs text-slate-400 leading-relaxed">{s.body}</p>
                      </div>
                    </div>
                  </Animate>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="bg-slate-900 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
            <Animate variant="fade-left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10">
                <Image src="/img/about-team.jpg" alt="Premium Pathways team" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 backdrop-blur-sm">
                  <p className="text-2xl font-bold text-white">90%</p>
                  <p className="text-xs text-slate-400">Acceptance rate</p>
                </div>
              </div>
            </Animate>
            <div>
              <Animate variant="fade-right">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-400">Why Us</p>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Why Choose Premium Pathways</h2>
              </Animate>
              <div className="mt-8 space-y-4">
                {reasons.map((r, i) => (
                  <Animate key={r.title} variant="fade-right" delay={100 + i * 80}>
                    <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400">
                        <i className={`fas ${r.icon}`} aria-hidden />
                      </span>
                      <div>
                        <h3 className="font-bold text-white">{r.title}</h3>
                        <p className="mt-1 text-sm text-slate-400 leading-relaxed">{r.body}</p>
                      </div>
                    </div>
                  </Animate>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="border-t border-white/5 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 px-4 py-14 sm:px-6 md:py-16">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <Animate variant="fade-left" className="max-w-xl space-y-3">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to start your journey?</h2>
              <p className="text-lg text-slate-300">Talk to one of our advisors today — your first consultation is free.</p>
            </Animate>
            <Animate variant="fade-right" delay={150}>
              <Link
                href="/About/Contact"
                className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-950/40 transition hover:bg-teal-400 whitespace-nowrap"
              >
                Get in touch
                <i className="fas fa-arrow-right text-sm" aria-hidden />
              </Link>
            </Animate>
          </div>
        </section>

      </main>

      <WhatsAppWidget phoneNumber="+18683181079" message="Hi, I would like to enquire about your services!" />
      <Footer height="300px" />
    </div>
  );
}
