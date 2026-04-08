"use client";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import WhatsAppWidget from "../../components/WhatsappWidget";
import Image from "next/image";

const stats = [
  { value: "11", label: "Major disciplines" },
  { value: "71", label: "Secondary categories" },
  { value: "250+", label: "Degree programs" },
];

const subjects = [
  {
    title: "Study MBBS in China",
    label: "Medicine",
    icon: "fa-stethoscope",
    image: "/img/doctor.jpeg",
    body: "Studying MBBS in China is a cost-effective route to a world-class medical education. With government subsidies keeping tuition affordable, 45+ institutions — including Shihezi University, Qingdao University, and Dalian Medical University — are recognised by the WHO, China's Ministry of Education, and the Medical Council of India, offering fully English-taught programs.",
    reverse: false,
  },
  {
    title: "Study Medicine in China",
    label: "Clinical Medicine",
    icon: "fa-heartbeat",
    image: "/img/doctors.jpeg",
    body: "Chinese medical education has attracted growing interest from students across Southeast Asia and beyond. A 5-year Bachelor of Medicine, Bachelor of Surgery (MBBS) track offers a fast-track path to clinical practice. Students also gain exposure to traditional Chinese medicine alongside Western approaches — a unique combination that broadens diagnostic capability and clinical perspective.",
    reverse: true,
  },
  {
    title: "Study Engineering in China",
    label: "Engineering",
    icon: "fa-cogs",
    image: "/img/majors-engineering.jpg",
    body: "Engineering in China puts you at the centre of the world's most dynamic industrial landscape. As multinationals expand their Chinese operations, an engineering degree from a Chinese university opens doors to careers across manufacturing, technology, infrastructure, and research. China's global influence and vast engineering resources make it one of the strongest destinations for aspiring engineers worldwide.",
    reverse: false,
  },
  {
    title: "Bachelor, Master & PhD Programs",
    label: "All Degree Levels",
    icon: "fa-graduation-cap",
    image: "/img/grad.jpeg",
    body: "Whether you are starting your undergraduate journey or pursuing a doctorate, Chinese universities accommodate every level. Many institutions offer accelerated pathways — Bachelor-to-Master or Master-to-PhD tracks — that reduce time-to-degree while maintaining academic rigour. With hundreds of programs taught in English and generous scholarship options, China is a compelling destination for students at any stage.",
    reverse: true,
  },
];

export default function Majors() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <Header />

      <main className="flex flex-1 flex-col">

        {/* ── Hero ── */}
        <section className="relative flex h-[420px] items-end justify-center overflow-hidden">
          <Image
            src="/img/majors-hero.jpg"
            alt="University majors in China"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />
          <div className="relative z-10 pb-14 text-center px-4">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-400">
              Explore Your Options
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              University Majors
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Chinese universities offer an exceptional breadth of programs — find the discipline that fits your ambitions.
            </p>
          </div>
        </section>

        {/* ── Overview + Stats ── */}
        <section className="bg-slate-900 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-400">
              Overview
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Majors of Chinese Universities
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-slate-300 leading-relaxed">
              Chinese universities span a remarkable range of disciplines — Education, Law, Engineering, Philosophy, Economics, Literature, and more. With 11 major categories, 71 secondary categories, and over 250 programs, your ideal major is almost certainly here. Not yet decided? Many universities let you freely explore courses in your first year before committing to a field.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-8">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6"
                >
                  <p className="text-3xl font-bold text-teal-400 sm:text-4xl">{s.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Subject sections ── */}
        {subjects.map((s, i) => (
          <section
            key={s.title}
            className={
              i % 2 === 0
                ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-16 sm:px-6 md:py-20"
                : "bg-slate-900 px-4 py-16 sm:px-6 md:py-20"
            }
          >
            <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
              {/* Text */}
              <div className={s.reverse ? "lg:order-2" : "lg:order-1"}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400">
                    <i className={`fas ${s.icon} text-sm`} aria-hidden />
                  </span>
                  <p className="text-sm font-semibold uppercase tracking-widest text-teal-400">
                    {s.label}
                  </p>
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {s.title}
                </h2>
                <p className="mt-5 text-slate-300 leading-relaxed">{s.body}</p>
                <a
                  href="/About/Contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-teal-500/15 px-5 py-2.5 text-sm font-semibold text-teal-300 ring-1 ring-teal-500/30 transition hover:bg-teal-500 hover:text-white"
                >
                  Enquire about this program
                  <i className="fas fa-arrow-right text-xs" aria-hidden />
                </a>
              </div>

              {/* Image */}
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10 ${
                  s.reverse ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />
              </div>
            </div>
          </section>
        ))}

        {/* ── CTA ── */}
        <section className="border-t border-white/5 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 px-4 py-14 sm:px-6 md:py-16">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl space-y-3">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Not sure which major is right for you?
              </h2>
              <p className="text-lg text-slate-300">
                Our advisors will assess your background and match you with the programs best suited to your goals.
              </p>
            </div>
            <a
              href="/About/Contact"
              className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-950/40 transition hover:bg-teal-400 whitespace-nowrap"
            >
              Get in touch
              <i className="fas fa-arrow-right text-sm" aria-hidden />
            </a>
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
