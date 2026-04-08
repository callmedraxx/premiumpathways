"use client";

import React from "react";

interface AdmissionModalProps {
  university: string;
  onClose: () => void;
}

const AdmissionModal = ({ university, onClose }: AdmissionModalProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
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
    window.location.href = `mailto:premiumpathways78@gmail.com?subject=New Admission Form — ${university}&body=${encodeURIComponent(
      JSON.stringify(details, null, 2)
    )}`;
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-slate-800/60 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition focus:border-teal-500/60 focus:bg-slate-800 focus:ring-1 focus:ring-teal-500/20";
  const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-400";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 px-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-3xl flex-col rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/60"
        onClick={(e) => e.stopPropagation()}
        style={{ overflow: "hidden" }}
      >
        {/* ── Fixed header ── */}
        <div className="flex flex-shrink-0 items-start justify-between gap-4 border-b border-white/8 bg-slate-900/95 px-6 py-5 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400">
              <i className="fas fa-graduation-cap text-base" aria-hidden />
            </span>
            <div>
              <h2 className="text-lg font-bold text-white">Admission Application</h2>
              <p className="text-xs text-slate-400 mt-0.5">{university}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:bg-white/10 hover:text-white"
          >
            <i className="fas fa-times text-sm" aria-hidden />
          </button>
        </div>

        {/* ── Scrollable body ── */}
        <div
          className="flex-1 overflow-y-auto px-6 py-6 sm:px-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
        >
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>

          <form onSubmit={handleSubmit} id="admission-form" className="space-y-5">

            {/* Section: Personal Info */}
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-teal-400">Personal Information</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>Full Name</label>
                  <input type="text" name="name" required placeholder="Your full name" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input type="email" name="email" required placeholder="your@email.com" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Mobile Number</label>
                  <input type="text" name="mobileNumber" required placeholder="+1 234 567 8900" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>WhatsApp Number</label>
                  <input type="text" name="whatsappNumber" required placeholder="+1 234 567 8900" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Gender</label>
                  <select name="gender" required className={inputClass}>
                    <option value="" className="bg-slate-900">Select gender</option>
                    <option value="Male" className="bg-slate-900">Male</option>
                    <option value="Female" className="bg-slate-900">Female</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Date of Birth</label>
                  <input type="date" name="date" required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Country</label>
                  <input type="text" name="country" required placeholder="Your country" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Religion</label>
                  <input type="text" name="religion" placeholder="Optional" className={inputClass} />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/8" />

            {/* Section: Education & Background */}
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-teal-400">Education &amp; Background</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>Education Qualification</label>
                  <input type="text" name="education" required placeholder="e.g. Bachelor's in Economics" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Occupation</label>
                  <input type="text" name="occupation" required placeholder="Student / Employed / etc." className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Father&apos;s Name</label>
                  <input type="text" name="fatherName" required placeholder="Father's full name" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Father&apos;s Occupation</label>
                  <input type="text" name="fatherOccupation" required placeholder="Father's occupation" className={inputClass} />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/8" />

            {/* Section: Additional */}
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-teal-400">Additional Information</p>
              <textarea
                name="message"
                rows={3}
                placeholder="Any additional information or questions..."
                className={inputClass}
              />
            </div>
          </form>
        </div>

        {/* ── Fixed footer ── */}
        <div className="flex flex-shrink-0 items-center justify-end gap-3 border-t border-white/8 bg-slate-900/95 px-6 py-4 sm:px-8">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/10"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="admission-form"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-950/50 transition hover:bg-teal-400"
          >
            <i className="fas fa-paper-plane text-xs" aria-hidden />
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionModal;
