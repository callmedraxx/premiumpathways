"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import WhatsAppWidget from "../../components/WhatsappWidget";
import AdmissionModal from "../../components/AdmissionModal";

const programs = [
  {
    id: "southwest-university-finance",
    image: "/img/univ-southwest-finance.jpg",
    university: "Southwest University of Finance and Economics",
    scholarship: "Full Scholarship — Language Program",
    major: "Chinese",
    degree: "Language Program",
    city: "Chengdu",
  },
  {
    id: "shandong-university-of-technology",
    image: "/img/full-scholarship-in-shandong-university-of-science-and-technology.jpg",
    university: "Shandong University of Technology",
    scholarship: "Full Scholarship — Language Program",
    major: "Chinese",
    degree: "Language Program",
    city: "Zibo",
  },
  {
    id: "beijing-international-studies-university",
    image: "/img/univ-beijing-intl.jpg",
    university: "Beijing International Studies University",
    scholarship: "Full Scholarship — Language Program",
    major: "Chinese",
    degree: "Language Program",
    city: "Beijing",
  },
  {
    id: "anhui-university-of-finance-and-economics",
    image: "/img/univ-anhui.jpg",
    university: "Anhui University of Finance and Economics",
    scholarship: "Full Scholarship — Language Program",
    major: "Chinese",
    degree: "Language Program",
    city: "Bengbu",
  },
];

export default function NonD() {
  const [modalUniversity, setModalUniversity] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <Header />

      <main className="flex flex-1 flex-col">
        {/* ── Hero ── */}
        <section className="relative flex h-[420px] items-end justify-center overflow-hidden">
          <Image
            src="/img/nond-hero.jpg"
            alt="Non-Degree & Chinese Language Scholarships"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />
          <div className="relative z-10 pb-14 text-center px-4">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-400">
              Language & Culture
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Non-Degree Scholarships
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Immerse yourself in Chinese language and culture through fully-funded non-degree programs at leading Chinese universities.
            </p>
          </div>
        </section>

        {/* ── Cards ── */}
        <section className="bg-slate-900 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Available Programs
              </h2>
              <p className="mt-2 text-slate-400">
                Select a program and apply directly through our team.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {programs.map((program) => (
                <div
                  key={program.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-teal-500/30 hover:bg-white/[0.07]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.university}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-base font-semibold leading-snug text-white">
                      {program.university}
                    </h3>

                    <div className="mt-3 flex-1 space-y-2">
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <i className="fas fa-award text-teal-400 w-4 text-center" aria-hidden />
                        {program.scholarship}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <i className="fas fa-book-open text-teal-400 w-4 text-center" aria-hidden />
                        {program.major}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <i className="fas fa-graduation-cap text-teal-400 w-4 text-center" aria-hidden />
                        {program.degree}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <i className="fas fa-map-marker-alt text-teal-400 w-4 text-center" aria-hidden />
                        {program.city}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setModalUniversity(program.university)}
                      className="mt-5 w-full rounded-xl bg-teal-500/15 py-2.5 text-sm font-semibold text-teal-300 ring-1 ring-teal-500/30 transition hover:bg-teal-500 hover:text-white"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {modalUniversity && (
        <AdmissionModal
          university={modalUniversity}
          onClose={() => setModalUniversity(null)}
        />
      )}

      <WhatsAppWidget phoneNumber="+18683181079" message="Hi, I would like to enquire about your services!" />
      <Footer height="300px" />
    </div>
  );
}
