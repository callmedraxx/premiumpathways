"use client";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import WhatsAppWidget from "../../components/WhatsappWidget";
import Animate from "../../components/Animate";
import Image from "next/image";
import Link from "next/link";

const featured = [
  {
    image: "/img/tt4.jpeg",
    name: "Catherine",
    country: "Nigeria",
    flag: "🇳🇬",
    review: "A remarkable experience from start to finish. Premium Pathways handled every detail of my application with professionalism and care. I am now studying in Beijing and couldn't be happier with how everything turned out. Thank you!",
  },
  {
    image: "/img/MvstafaMuhammed-Kazakhstan.jpg",
    name: "Mvstafa Muhammed",
    country: "Kazakhstan",
    flag: "🇰🇿",
    review: "A world-class service. I secured a full scholarship thanks to the expert guidance of the Premium Pathways team. They understood exactly what I needed and delivered beyond my expectations.",
  },
];

const testimonials = [
  { image: "/img/tt1.jpeg",                       name: "Folagbade",  country: "Nigeria",      flag: "🇳🇬", review: "It was an unforgettable experience. The team guided me through every step and made sure I felt confident throughout the entire process. Thank you, Premium Pathways!" },
  { image: "/img/tt2.jpeg",                       name: "Kwame",      country: "Ghana",        flag: "🇬🇭", review: "I'm very happy to know about Premium Pathways. They connected me with the right university and the right scholarship. I couldn't have done it alone." },
  { image: "/img/tt3.jpeg",                       name: "Jidapha",    country: "Morocco",      flag: "🇲🇦", review: "They made everything so easy and seamless. I'm impressed by how organised and communicative the team was throughout the application process." },
  { image: "/img/tt5.jpeg",                       name: "Appiah",     country: "Ghana",        flag: "🇬🇭", review: "Friendly, professional, and attentive to every detail! My advisor was always available and ensured I was never left in the dark about my application status." },
  { image: "/img/tt6.jpeg",                       name: "Francis",    country: "Ghana",        flag: "🇬🇭", review: "Top-notch service! I'll recommend Premium Pathways to all my friends and family who want to study in China. The whole journey was handled brilliantly." },
  { image: "/img/tt7.jpeg",                       name: "Fatima",     country: "Nigeria",      flag: "🇳🇬", review: "Truly exceptional! Thank you for this experience. From my first consultation to receiving my admission letter, the team was outstanding." },
  { image: "/img/Carmenita.jpg",                  name: "Carmenita",  country: "Philippines",  flag: "🇵🇭", review: "Premium Pathways helped me navigate the entire application process effortlessly. I am now studying at a top university in Beijing and loving every moment!" },
  { image: "/img/Cindy-Indonesia.jpg",            name: "Cindy",      country: "Indonesia",    flag: "🇮🇩", review: "Excellent guidance from start to finish. The advisors were patient, thorough, and genuinely invested in helping me achieve my dream of studying in China." },
  { image: "/img/Victor-Indonesia.jpg",           name: "Victor",     country: "Indonesia",    flag: "🇮🇩", review: "Professional, thorough, and genuinely caring. My scholarship application was handled perfectly and I received an offer from my first-choice university." },
  { image: "/img/Nigvaree-Khumsap-Thailand.jpg",  name: "Nigvaree",   country: "Thailand",     flag: "🇹🇭", review: "They found me the perfect university match. The whole process was smooth and stress-free thanks to the dedicated team at Premium Pathways." },
  { image: "/img/Papitchaya-Kaewtha-Thailand.jpg",name: "Papitchaya", country: "Thailand",     flag: "🇹🇭", review: "From consultation to arrival, Premium Pathways was there every step of the way. Highly recommend to anyone considering studying in China." },
  { image: "/img/Hor-DaRa-Cambodia.jpg",          name: "Hor DaRa",   country: "Cambodia",     flag: "🇰🇭", review: "I was nervous about studying abroad, but the team made me feel supported every step of the way. I am grateful for their patience and expertise." },
  { image: "/img/Jidapha-Mangkale-Thailand.png",  name: "Jidapha Mangkale", country: "Thailand", flag: "🇹🇭", review: "The pre-departure briefing was incredibly helpful. I felt fully prepared and confident before arriving in China. An incredible team." },
];

const stats = [
  { value: "13+", label: "Countries represented" },
  { value: "3,000+", label: "Students served" },
  { value: "90%", label: "Acceptance rate" },
  { value: "200+", label: "Scholarships secured" },
];

export default function Testimonials() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <Header />

      <main className="flex flex-1 flex-col">

        {/* ── Hero ── */}
        <section className="relative flex h-[420px] items-end justify-center overflow-hidden">
          <Image src="/img/majors-hero.jpg" alt="Student testimonials" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />
          <div className="relative z-10 pb-14 text-center px-4">
            <Animate variant="fade-down" delay={100}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-400">Real Students, Real Stories</p>
            </Animate>
            <Animate variant="fade-up" delay={220}>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Testimonials</h1>
            </Animate>
            <Animate variant="fade-up" delay={340}>
              <p className="mx-auto mt-4 max-w-xl text-slate-300">
                Hear directly from students and families we&apos;ve supported across 13+ countries worldwide.
              </p>
            </Animate>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="bg-slate-900 px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {stats.map((s, i) => (
                <Animate key={s.label} variant="scale-up" delay={i * 70}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center">
                    <p className="text-3xl font-bold text-teal-400">{s.value}</p>
                    <p className="mt-1 text-xs text-slate-400">{s.label}</p>
                  </div>
                </Animate>
              ))}
            </div>
          </div>
        </section>

        {/* ── Featured ── */}
        <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-5xl">
            <Animate variant="fade-up" className="mb-10 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-400">Featured</p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Student Spotlights</h2>
            </Animate>
            <div className="grid gap-5 sm:grid-cols-2">
              {featured.map((t, i) => (
                <Animate key={t.name} variant="fade-up" delay={i * 120}>
                  <div className="relative overflow-hidden rounded-2xl border border-teal-500/20 bg-teal-500/5 p-6 sm:p-8">
                    <span className="absolute right-5 top-3 text-7xl font-serif leading-none text-teal-500/10 select-none">&ldquo;</span>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-teal-500/40 ring-offset-2 ring-offset-slate-950">
                        <Image src={t.image} alt={t.name} width={64} height={64} className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-white">{t.name}</p>
                        <p className="text-sm text-slate-400">{t.flag} {t.country}</p>
                        <div className="mt-1 flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="fas fa-star text-xs text-teal-400" aria-hidden />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-slate-300 leading-relaxed">
                      &ldquo;{t.review}&rdquo;
                    </blockquote>
                  </div>
                </Animate>
              ))}
            </div>
          </div>
        </section>

        {/* ── All Testimonials Grid ── */}
        <section className="bg-slate-900 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <Animate variant="fade-up" className="mb-10 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-400">All Reviews</p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">What Our Students Say</h2>
              <p className="mt-3 text-slate-400">{testimonials.length} reviews from students across Africa, Asia, and beyond.</p>
            </Animate>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <Animate key={t.name} variant="fade-up" delay={Math.min(i * 50, 400)} threshold={0.06}>
                  <div className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-teal-500/20 hover:bg-white/[0.07]">
                    <div className="mb-3 flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <i key={j} className="fas fa-star text-xs text-teal-400" aria-hidden />
                      ))}
                    </div>
                    <blockquote className="flex-1 text-sm text-slate-300 leading-relaxed">
                      &ldquo;{t.review}&rdquo;
                    </blockquote>
                    <div className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
                      <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full ring-1 ring-white/20">
                        <Image src={t.image} alt={t.name} width={40} height={40} className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{t.name}</p>
                        <p className="text-xs text-slate-500">{t.flag} {t.country}</p>
                      </div>
                    </div>
                  </div>
                </Animate>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="border-t border-white/5 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 px-4 py-14 sm:px-6 md:py-16">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <Animate variant="fade-left" className="max-w-xl space-y-3">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to write your own story?</h2>
              <p className="text-lg text-slate-300">Join thousands of students who have trusted Premium Pathways to guide their academic journey.</p>
            </Animate>
            <Animate variant="fade-right" delay={150}>
              <Link
                href="/About/Contact"
                className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-950/40 transition hover:bg-teal-400 whitespace-nowrap"
              >
                Get started
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
