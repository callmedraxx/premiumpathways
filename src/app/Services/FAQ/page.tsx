"use client";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import WhatsAppWidget from "../../components/WhatsappWidget";
import Image from "next/image";
import { useState } from "react";
import Animate from "../../components/Animate";

const faqData = [
  {
    question: "How can I choose a course to start?",
    answer:
      "Deciding what to study in China requires research across a few key areas: choosing an ideal course, finding the right university, and selecting a suitable city. Our consultants walk you through all three during your free one-on-one assessment.",
  },
  {
    question: "How do I choose a suitable city?",
    answer:
      "Location matters. China's diversity means cities differ greatly in culture, climate, cost of living, and job opportunities. Take a look at our city guide to find a city that matches your lifestyle and career goals — from cosmopolitan Shanghai to the historic capital Beijing.",
  },
  {
    question: "How do I find the right university?",
    answer:
      "Look for universities that offer courses aligned with your interests. Consider ranking, location, available scholarships, and the level of support offered to international students. Premium Pathways matches you with up to 5 universities tailored to your profile.",
  },
  {
    question: "When should I apply for the fall semester?",
    answer:
      "Applications for the fall semester (September intake) should typically be submitted between March and June, depending on the university's deadlines. We recommend starting at least 4–6 months before your intended start date.",
  },
  {
    question: "When should I apply for the spring semester?",
    answer:
      "For the spring semester (February/March intake), applications usually open between September and November. Check the specific university's deadlines early — some competitive programs fill up fast.",
  },
  {
    question: "How do I get a student visa to study in China?",
    answer:
      "To study in China you need an X1 visa (study longer than 180 days) or X2 visa (180 days or fewer). You will need your university acceptance letter, valid passport, completed application form, a health certificate, and proof of financial support. We provide full visa guidance as part of our service.",
  },
  {
    question: "What documents are needed for the visa application?",
    answer:
      "Required documents typically include: a valid passport, completed visa application form (JW201/JW202), admission letter from your Chinese university, physical examination record, passport-size photos, and proof of financial support. Requirements can vary by country — we'll confirm your specific list.",
  },
  {
    question: "What should I do immediately after arriving in China?",
    answer:
      "After landing, go through immigration, collect your luggage, and complete the health check if required. University representatives or our arrival support team can meet you at major airports. You'll then head to your campus to begin registration.",
  },
  {
    question: "How does enrolment and registration work?",
    answer:
      "After arrival, visit your university's international student office with your passport, visa, and admission letter to complete enrolment. You'll receive your student ID, choose courses, and be introduced to campus life. Premium Pathways supports you through this entire process.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <Header />

      <main className="flex flex-1 flex-col">
        {/* ── Hero ── */}
        <section className="relative flex h-[420px] items-end justify-center overflow-hidden">
          <Image
            src="/img/faq-hero.jpg"
            alt="Frequently asked questions"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />
          <div className="relative z-10 pb-14 text-center px-4">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-400">
              Got Questions?
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Everything you need to know about studying in China — from choosing a course to arriving on campus.
            </p>
          </div>
        </section>

        {/* ── FAQ Accordion ── */}
        <section className="bg-slate-900 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-3xl space-y-3">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <Animate key={index} variant="fade-up" delay={Math.min(index * 50, 350)} threshold={0.05}>
                <div
                  className={`rounded-2xl border transition-colors duration-200 ${
                    isOpen
                      ? "border-teal-500/30 bg-teal-500/5"
                      : "border-white/10 bg-white/5 hover:border-white/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-white sm:text-lg">
                      {item.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                        isOpen
                          ? "border-teal-500/40 bg-teal-500/15 text-teal-400 rotate-45"
                          : "border-white/20 bg-white/5 text-slate-400"
                      }`}
                    >
                      <i className="fas fa-plus text-xs" aria-hidden />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6">
                      <div className="h-px bg-white/10 mb-4" />
                      <p className="text-slate-300 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
                </Animate>
              );
            })}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="border-t border-white/5 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 px-4 py-14 sm:px-6 md:py-16">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <Animate variant="fade-left" className="max-w-xl space-y-3">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Still have questions?
              </h2>
              <p className="text-lg text-slate-300">
                Our advisors are happy to walk you through anything — reach out and we&apos;ll get back to you promptly.
              </p>
            </Animate>
            <Animate variant="fade-right" delay={150}>
              <a
                href="/About/Contact"
                className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-950/40 transition hover:bg-teal-400 whitespace-nowrap"
              >
                Contact us
                <i className="fas fa-arrow-right text-sm" aria-hidden />
              </a>
            </Animate>
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
