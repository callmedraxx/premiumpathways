"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "../Reveal";
import AdmissionModal from "../AdmissionModal";

export type ScholarshipProgram = {
  id: string;
  image: string;
  university: string;
  scholarship: string;
  major: string;
  degree: string;
  city: string;
};

/* Scholarship seats as boarding passes: the university photo is the stub,
   the details are the ticket, and one button books the seat. Two across on
   a desktop, one on a phone. */
export default function ScholarshipTickets({ programs }: { programs: ScholarshipProgram[] }) {
  const [applyTo, setApplyTo] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {programs.map((p, i) => (
          <Reveal key={p.id} from="up" delay={(i % 2) * 0.08}>
            <article className="ticket panel-solid flex h-full flex-col overflow-hidden sm:flex-row">
              <div className="relative h-44 shrink-0 border-b border-dashed border-chalk/15 sm:h-auto sm:w-[38%] sm:border-b-0 sm:border-r">
                <Image src={p.image} alt={p.university} fill sizes="(max-width: 640px) 100vw, 30vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-night-950/80 via-night-950/20 to-transparent sm:bg-gradient-to-r" />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  <p className="meta !text-ember">{p.scholarship}</p>
                  <h3 className="display-md mt-3 text-chalk">{p.university}</h3>
                  <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 text-sm">
                    <div><dt className="meta !text-[10px]">Program</dt><dd className="mt-1 text-chalk">{p.major}</dd></div>
                    <div><dt className="meta !text-[10px]">City</dt><dd className="mt-1 text-chalk">{p.city}</dd></div>
                  </dl>
                </div>
                <button type="button" onClick={() => setApplyTo(p.university)} className="btn-ember mt-7 w-full sm:w-auto">
                  Apply for this seat
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      {applyTo && <AdmissionModal university={applyTo} onClose={() => setApplyTo(null)} />}
    </>
  );
}
