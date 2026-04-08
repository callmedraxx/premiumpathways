"use client";

import Link from "next/link";
import Animate from "../../../components/Animate";

const JoinCommunity = () => {
  return (
    <section className="border-t border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 px-4 py-14 sm:px-6 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <Animate variant="fade-left" className="max-w-xl space-y-3 text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join our community</h2>
          <p className="text-lg text-slate-300">
            Get updates on intakes, scholarships, and opportunities to study or work abroad.
          </p>
        </Animate>
        <Animate variant="fade-right" delay={150}>
          <Link
            href="/About/Contact"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-950/40 transition hover:bg-teal-400"
          >
            Get in touch
            <i className="fas fa-arrow-right text-sm" aria-hidden />
          </Link>
        </Animate>
      </div>
    </section>
  );
};

export default JoinCommunity;
