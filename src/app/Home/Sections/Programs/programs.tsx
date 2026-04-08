"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Animate from "../../../components/Animate";

const Programs = () => {
  const items = [
    {
      id: 1,
      image: "/img/pp1.png",
      details: {
        university: "Dali University",
        major: "Computer Science",
        city: "Dali",
        language: "English",
        duration: "4 years",
        tuition: "",
        degree: "Bachelor's",
        start: "September 2025",
        deadline: "December 2025",
        serviceFee: "",
        scholarship: "Available",
      },
    },
    {
      id: 2,
      image: "/img/pp2.jpg",
      details: {
        university: "Beijing Wuzi University",
        major: "Business Administration",
        city: "Beijing",
        language: "Chinese",
        duration: "1+4 years",
        tuition: "$18,000",
        degree: "Bachelor's",
        start: "January 2025",
        deadline: "July 30th",
        serviceFee: "$500-$5000",
        scholarship: "Available",
      },
    },
    {
      id: 3,
      image: "/img/pp3.jpeg",
      details: {
        university: "Huaihua University",
        major: "Chinese Language",
        city: "Huaihua",
        language: "Chinese",
        duration: "4 years",
        tuition: "$18,000",
        degree: "Bachelor's",
        start: "September Every time",
        deadline: "15th August",
        serviceFee: "$500-$5000",
        scholarship: "Available",
      },
    },
    {
      id: 4,
      image: "/img/pp4.jpeg",
      details: {
        university: "Dalian Jiaotong University",
        major: "Mechanical Engineering",
        city: "Dalian",
        language: "Chinese",
        duration: "3 years",
        tuition: "",
        degree: "Master",
        start: "September Every Year",
        deadline: "30th March",
        serviceFee: "$500-$5000",
        scholarship: "Available",
      },
    },
    {
      id: 5,
      image: "/img/pp5.jpg",
      details: {
        university: "Hainan Normal University",
        major: "Computer Science and Technology",
        city: "Haikou",
        language: "Chinese",
        duration: "4 years",
        tuition: "Contact us",
        degree: "Bachelor's",
        start: "September Every Year",
        deadline: "30th June",
        serviceFee: "500-5000 USD",
        scholarship: "Available",
      },
    },
    {
      id: 6,
      image: "/img/pp6.jpeg",
      details: {
        university: "Guangxi Medical University",
        major: "Clinical Medicine",
        city: "Guangxi",
        language: "English",
        duration: "6 years",
        tuition: "Contact us",
        degree: "Bachelor",
        start: "September or March",
        deadline: "15th August",
        serviceFee: "500-5000 USD",
        scholarship: "Available",
      },
    },
    {
      id: 7,
      image: "/img/pp6.jpeg",
      details: {
        university: "Any University",
        major: "Any Major",
        city: "Any City",
        language: "English",
        duration: "Varies",
        tuition: "Varies",
        degree: "Any Degree",
        start: "Contact Us",
        deadline: "Contact Us",
        serviceFee: "Contact Us",
        scholarship: "Contact Us",
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(4);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const pageCount = Math.ceil(items.length / itemsPerView);
  const activePage = Math.floor(currentIndex / itemsPerView);

  const handleNext = () => {
    if (currentIndex + itemsPerView < items.length) {
      setCurrentIndex(currentIndex + itemsPerView);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerView);
    }
  };

  const goToPage = (page: number) => {
    setCurrentIndex(page * itemsPerView);
  };

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 px-4 py-16 sm:px-6 md:py-24">
      {/* Match hero mood: dark base + soft teal glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/95 to-slate-950"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(20,184,166,0.14),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_100%,rgba(15,23,42,0.9),transparent)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Animate variant="fade-up" className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-300/90">
            Explore options
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Available programs
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-400 sm:text-lg">
            Featured pathways — swipe or use the arrows to compare universities, intakes, and support.
          </p>
        </Animate>

        <div className="relative min-h-[28rem] overflow-visible sm:min-h-[26rem]">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 py-2 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-sm md:py-3">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
              }}
            >
              {items.map((item) => (
                <Link
                  key={item.id}
                  href="/Scholarships/NonD"
                  className="w-full flex-shrink-0 px-2 md:w-1/2 lg:w-1/4"
                >
                  <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] shadow-lg transition hover:border-teal-400/35 hover:from-white/[0.1] hover:shadow-teal-950/20">
                    <div className="relative aspect-[5/3] w-full shrink-0 overflow-hidden">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                      <span className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-slate-950/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-teal-200 backdrop-blur-sm">
                        {item.details.degree}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col gap-3 p-4">
                      <div>
                        <h3 className="line-clamp-2 text-base font-semibold leading-snug text-white">
                          {item.details.university}
                        </h3>
                        <p className="mt-1 line-clamp-2 text-sm text-slate-300">
                          {item.details.major}
                        </p>
                      </div>

                      <dl className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs">
                        <div className="rounded-lg bg-white/5 px-2 py-1.5 ring-1 ring-white/10">
                          <dt className="text-[10px] font-medium uppercase tracking-wide text-slate-500">
                            City
                          </dt>
                          <dd className="truncate font-medium text-slate-200">
                            {item.details.city}
                          </dd>
                        </div>
                        <div className="rounded-lg bg-white/5 px-2 py-1.5 ring-1 ring-white/10">
                          <dt className="text-[10px] font-medium uppercase tracking-wide text-slate-500">
                            Language
                          </dt>
                          <dd className="truncate font-medium text-slate-200">
                            {item.details.language}
                          </dd>
                        </div>
                        <div className="rounded-lg bg-white/5 px-2 py-1.5 ring-1 ring-white/10">
                          <dt className="text-[10px] font-medium uppercase tracking-wide text-slate-500">
                            Duration
                          </dt>
                          <dd className="truncate font-medium text-slate-200">
                            {item.details.duration}
                          </dd>
                        </div>
                        <div className="rounded-lg bg-white/5 px-2 py-1.5 ring-1 ring-white/10">
                          <dt className="text-[10px] font-medium uppercase tracking-wide text-slate-500">
                            Tuition
                          </dt>
                          <dd className="truncate font-medium text-slate-200">
                            {item.details.tuition || "—"}
                          </dd>
                        </div>
                      </dl>

                      <div className="space-y-1.5 border-t border-white/10 pt-3 text-[11px] text-slate-400">
                        <div className="flex justify-between gap-2">
                          <span>Intake</span>
                          <span className="text-right text-slate-300">
                            {item.details.start}
                          </span>
                        </div>
                        <div className="flex justify-between gap-2">
                          <span>Deadline</span>
                          <span className="text-right text-slate-300">
                            {item.details.deadline}
                          </span>
                        </div>
                        <div className="flex justify-between gap-2">
                          <span>Service fee</span>
                          <span className="text-right text-slate-300">
                            {item.details.serviceFee || "—"}
                          </span>
                        </div>
                      </div>

                      <div className="mt-auto flex items-center justify-between gap-2 pt-1">
                        <span className="inline-flex items-center rounded-full border border-teal-400/30 bg-teal-500/15 px-2.5 py-1 text-[11px] font-medium text-teal-200">
                          Scholarship {item.details.scholarship}
                        </span>
                        <span className="text-[11px] font-medium text-teal-400/90 opacity-0 transition group-hover:opacity-100">
                          View →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous programs"
              className="absolute left-1 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/80 text-white shadow-lg backdrop-blur-md transition hover:border-teal-400/40 hover:bg-teal-600/30 disabled:pointer-events-none disabled:opacity-30 sm:left-3"
            >
              <span className="text-lg leading-none" aria-hidden>
                ←
              </span>
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={currentIndex + itemsPerView >= items.length}
              aria-label="Next programs"
              className="absolute right-1 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/80 text-white shadow-lg backdrop-blur-md transition hover:border-teal-400/40 hover:bg-teal-600/30 disabled:pointer-events-none disabled:opacity-30 sm:right-3"
            >
              <span className="text-lg leading-none" aria-hidden>
                →
              </span>
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to page ${index + 1}`}
              aria-current={index === activePage ? "true" : undefined}
              onClick={() => goToPage(index)}
              className={`h-2 rounded-full transition-all ${
                index === activePage
                  ? "w-8 bg-teal-400"
                  : "w-2 bg-white/25 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          <Link
            href="/Scholarships/NonD"
            className="font-medium text-teal-400/90 underline-offset-4 transition hover:text-teal-300 hover:underline"
          >
            Search all programs
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Programs;
