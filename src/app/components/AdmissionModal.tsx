"use client";

import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Field, inputClass, textareaClass } from "./page/Field";

interface AdmissionModalProps {
  university: string;
  onClose: () => void;
}

/* The admission form. Every field name is product truth (the mail the office
   receives is built from them), so the fields stay; only the room they sit in
   changed. Escape closes, focus lands on the first input, the page behind
   cannot scroll. */
const AdmissionModal = ({ university, onClose }: AdmissionModalProps) => {
  const first = useRef<HTMLInputElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const t = window.setTimeout(() => first.current?.focus(), 60);
    return () => { window.removeEventListener("keydown", onKey); document.documentElement.style.overflow = prev; window.clearTimeout(t); };
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const details = {
      university,
      name: data.get("name"),
      email: data.get("email"),
      mobileNumber: data.get("mobileNumber"),
      whatsappNumber: data.get("whatsappNumber"),
      gender: data.get("gender"),
      dateOfBirth: data.get("date"),
      education: data.get("education"),
      occupation: data.get("occupation"),
      country: data.get("country"),
      religion: data.get("religion"),
      fatherName: data.get("fatherName"),
      fatherOccupation: data.get("fatherOccupation"),
      message: data.get("message"),
    };
    window.location.href = `mailto:premiumpathways78@gmail.com?subject=New Admission Form - ${university}&body=${encodeURIComponent(
      JSON.stringify(details, null, 2)
    )}`;
  };

  return (
    <AnimatePresence>
      <motion.div
        key="admission-backdrop"
        initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-end justify-center bg-night-950/80 backdrop-blur-md sm:items-center sm:px-4"
        onClick={onClose}
      >
        <motion.div
          role="dialog" aria-modal="true" aria-labelledby="admission-title"
          initial={reduce ? false : { opacity: 0, y: 28, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="panel-solid flex max-h-[94dvh] w-full max-w-3xl flex-col overflow-hidden !rounded-b-none sm:!rounded-b-[1.25rem]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex shrink-0 items-start justify-between gap-4 border-b border-chalk/10 px-6 py-5 sm:px-8">
            <div>
              <p className="meta">Admission application</p>
              <h2 id="admission-title" className="display-md mt-2 text-chalk">{university}</h2>
            </div>
            <button type="button" onClick={onClose} aria-label="Close" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-chalk/15 text-chalk/70 transition hover:border-chalk/40 hover:text-chalk">
              <i className="fas fa-times text-sm" aria-hidden />
            </button>
          </div>

          <div className="no-bar flex-1 overflow-y-auto px-6 py-6 sm:px-8">
            <form onSubmit={handleSubmit} id="admission-form" className="space-y-8">
              <fieldset>
                <legend className="text-lg font-semibold tracking-tight text-chalk">About you</legend>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="Full name" htmlFor="a-name"><input ref={first} id="a-name" type="text" name="name" required autoComplete="name" placeholder="As written in your passport" className={inputClass} /></Field>
                  <Field label="Email" htmlFor="a-email"><input id="a-email" type="email" name="email" required autoComplete="email" placeholder="you@example.com" className={inputClass} /></Field>
                  <Field label="Mobile number" htmlFor="a-mobile"><input id="a-mobile" type="tel" name="mobileNumber" required autoComplete="tel" placeholder="+234 803 000 0000" className={inputClass} /></Field>
                  <Field label="WhatsApp number" htmlFor="a-wa"><input id="a-wa" type="tel" name="whatsappNumber" required placeholder="+234 803 000 0000" className={inputClass} /></Field>
                  <Field label="Gender" htmlFor="a-gender">
                    <select id="a-gender" name="gender" required className={inputClass + " appearance-none"}>
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </Field>
                  <Field label="Date of birth" htmlFor="a-dob"><input id="a-dob" type="date" name="date" required className={inputClass} /></Field>
                  <Field label="Country" htmlFor="a-country"><input id="a-country" type="text" name="country" required autoComplete="country-name" placeholder="Nigeria" className={inputClass} /></Field>
                  <Field label="Religion" htmlFor="a-religion" help="Optional. Some universities ask."><input id="a-religion" type="text" name="religion" className={inputClass} /></Field>
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-lg font-semibold tracking-tight text-chalk">Education and family</legend>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="Highest qualification" htmlFor="a-edu"><input id="a-edu" type="text" name="education" required placeholder="WAEC, BSc Economics..." className={inputClass} /></Field>
                  <Field label="Occupation" htmlFor="a-occ"><input id="a-occ" type="text" name="occupation" required placeholder="Student, employed..." className={inputClass} /></Field>
                  <Field label="Father's name" htmlFor="a-father"><input id="a-father" type="text" name="fatherName" required className={inputClass} /></Field>
                  <Field label="Father's occupation" htmlFor="a-father-occ"><input id="a-father-occ" type="text" name="fatherOccupation" required className={inputClass} /></Field>
                </div>
              </fieldset>

              <Field label="Anything else we should know" htmlFor="a-message">
                <textarea id="a-message" name="message" rows={3} placeholder="Questions, preferences, a scholarship you have seen..." className={textareaClass} />
              </Field>
            </form>
          </div>

          <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-chalk/10 px-6 py-4 sm:px-8">
            <p className="text-xs text-chalk/50">Submitting opens your email app with the form filled in.</p>
            <div className="flex gap-2">
              <button type="button" onClick={onClose} className="btn-ghost !px-5 !py-2.5 text-sm">Cancel</button>
              <button type="submit" form="admission-form" className="btn-ember !px-5 !py-2.5 text-sm">Submit application</button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AdmissionModal;
