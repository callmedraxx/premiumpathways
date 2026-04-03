"use client";

const steps = [
  {
    icon: "fa-handshake",
    title: "Consultation",
    body:
      "One-to-one counseling, 600+ universities, 13 disciplines, 80+ majors, and customized study plans with career context.",
  },
  {
    icon: "fa-file-alt",
    title: "Application",
    body:
      "Material review, matching, translation, scholarship channels, and follow-up through admission and offer delivery.",
  },
  {
    icon: "fa-plane-departure",
    title: "Pre-departure",
    body:
      "Visa guidance, housing, pre-departure briefing, and practical booking support before you travel.",
  },
  {
    icon: "fa-map-marker-alt",
    title: "When you arrive",
    body:
      "Airport pick-up in major cities, school registration, ongoing support, and student community access.",
  },
] as const;

export default function ApplySection() {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-20"
      style={{ backgroundImage: "url('/img/student.jpeg')" }}
    >
      <div className="absolute inset-0 bg-slate-950/75" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center text-white sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          How to apply
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-200">
          A clear four-step journey from first conversation to life on campus.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md transition hover:border-teal-400/30 hover:bg-white/[0.07]"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500/20 text-teal-300">
                <i className={`fas ${step.icon} text-2xl`} aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-left text-sm leading-relaxed text-slate-300 sm:text-center">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
