"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import PageShell from "../../components/page/PageShell";
import PageHero from "../../components/page/PageHero";
import { Section, SectionHead } from "../../components/page/Section";
import { Field, inputClass, textareaClass } from "../../components/page/Field";
import Reveal from "../../components/Reveal";
import { FLIGHT_KM, OFFICE } from "../../components/FlightMap";

const FlightMap = dynamic(() => import("../../components/FlightMap"), {
  ssr: false,
  loading: () => <div className="h-[26rem] animate-pulse rounded-card border border-chalk/[0.1] bg-night-900 sm:h-[32rem] lg:h-[36rem]" />,
});

const WA = "https://wa.me/18683181079?text=" + encodeURIComponent("Hi, I would like to enquire about your services!");
const MAPS = `https://www.google.com/maps/search/?api=1&query=${OFFICE.lat},${OFFICE.lon}`;
const DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${OFFICE.lat},${OFFICE.lon}`;

const routes = [
  { icon: "fab fa-whatsapp", label: "WhatsApp", value: "+1 868 318 1079", note: "Fastest. Replies same day.", href: WA, tint: "text-[#3fd36f]" },
  { icon: "far fa-envelope", label: "Email", value: "premiumpathways78@gmail.com", note: "For documents and longer questions.", href: "mailto:premiumpathways78@gmail.com", tint: "text-ember" },
  { icon: "fab fa-instagram", label: "Instagram", value: "@premiumpathways1", note: "Intakes and student stories.", href: "https://www.instagram.com/premiumpathways1/", tint: "text-chalk" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contact Request from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:premiumpathways78@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <PageShell>
      <PageHero
        image="/img/contact-hero.jpg"
        alt="An advisor on a call with a student"
        title="Talk to an advisor."
        lede="One conversation is usually enough to know whether China is right for you, and which city and program fit. Reach us whichever way is easiest."
        aside={
          <ul className="grid gap-3">
            {routes.map((r) => (
              <li key={r.label}>
                <a
                  href={r.href} target={r.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  className="panel group flex items-center gap-4 px-5 py-4 transition hover:border-chalk/25"
                >
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-night-800 text-xl ${r.tint}`}>
                    <i className={r.icon} aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm text-chalk/60">{r.label}</span>
                    <span className="block break-all font-semibold text-chalk">{r.value}</span>
                    <span className="mt-0.5 block text-xs text-chalk/50">{r.note}</span>
                  </span>
                  <i className="fas fa-arrow-right text-xs text-chalk/40 transition group-hover:translate-x-0.5 group-hover:text-ember" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        }
      />

      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <SectionHead title="Or write to us here." lede="This opens your email app with the message ready to send. We reply within one working day." />
            <Reveal from="up" delay={0.1} className="mt-10">
              {sent ? (
                <div className="panel flex flex-col items-start gap-4 p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ember/15 text-ember"><i className="fas fa-check" aria-hidden /></span>
                  <p className="display-md text-chalk">Your email app should be open.</p>
                  <p className="text-chalk/70">If it did not open, write to premiumpathways78@gmail.com directly or use WhatsApp above.</p>
                  <button type="button" onClick={() => { setSent(false); setForm({ name: "", phone: "", email: "", message: "" }); }} className="btn-ghost mt-2">Write another</button>
                </div>
              ) : (
                <form onSubmit={submit} className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" htmlFor="c-name">
                      <input id="c-name" name="name" type="text" required autoComplete="name" placeholder="Adaeze Okafor" value={form.name} onChange={set} className={inputClass} />
                    </Field>
                    <Field label="Phone or WhatsApp" htmlFor="c-phone">
                      <input id="c-phone" name="phone" type="tel" autoComplete="tel" placeholder="+234 803 000 0000" value={form.phone} onChange={set} className={inputClass} />
                    </Field>
                  </div>
                  <Field label="Email" htmlFor="c-email">
                    <input id="c-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" value={form.email} onChange={set} className={inputClass} />
                  </Field>
                  <Field label="What do you want to study, and where are you now?" htmlFor="c-message" help="Your current level, the program you have in mind, and a rough budget help us answer properly.">
                    <textarea id="c-message" name="message" required rows={6} placeholder="I finished WAEC in 2025 and want to study computer science, ideally in Beijing or Shanghai..." value={form.message} onChange={set} className={textareaClass} />
                  </Field>
                  <div>
                    <button type="submit" className="btn-ember">Send message</button>
                  </div>
                </form>
              )}
            </Reveal>
          </div>

          <Reveal from="up" delay={0.15} className="lg:col-span-4 lg:col-start-9">
            <h3 className="display-md text-chalk">Good to have ready</h3>
            <ul className="mt-6 divide-y divide-chalk/10">
              {[
                ["Your latest results", "WAEC, NECO, a bachelor's transcript, or whatever you have finished."],
                ["A passport, or a plan for one", "You do not need it to talk to us. You will need it to apply."],
                ["A program in mind", "Or a field. \"Something in engineering\" is enough to start."],
                ["A budget range", "Scholarships change the answer, so tell us honestly."],
              ].map(([t, d]) => (
                <li key={t} className="py-4">
                  <p className="font-semibold text-chalk">{t}</p>
                  <p className="mt-1 text-sm leading-relaxed text-chalk/65">{d}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section id="map">
        <SectionHead title="From Lagos to our door." lede="The flight most of our students make, drawn on the map. Watch it land, then the map takes you to the office." />
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <Reveal from="up" className="lg:col-span-8">
            <FlightMap />
          </Reveal>
          <Reveal from="up" delay={0.1} className="lg:col-span-4">
            <div className="panel-solid flex h-full flex-col p-6 sm:p-7">
              <p className="meta">Itinerary</p>
              <ol className="mt-5 flex-1 space-y-6">
                <li className="grid grid-cols-[2.25rem_1fr] gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-chalk/20 text-chalk/80"><i className="fas fa-plane-departure text-xs" aria-hidden /></span>
                  <div>
                    <p className="font-semibold text-chalk">Depart Lagos (LOS)</p>
                    <p className="mt-1 text-sm leading-relaxed text-chalk/65">Murtala Muhammed International. Most students fly via Addis Ababa, Doha or Dubai.</p>
                  </div>
                </li>
                <li className="grid grid-cols-[2.25rem_1fr] gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-chalk/20 text-chalk/80"><i className="fas fa-route text-xs" aria-hidden /></span>
                  <div>
                    <p className="font-semibold text-chalk">{FLIGHT_KM.toLocaleString("en-NG")} km as the crow flies</p>
                    <p className="mt-1 text-sm leading-relaxed text-chalk/65">Over the Sahel, the Red Sea, the Arabian Sea and the Himalaya. Roughly a day door to door.</p>
                  </div>
                </li>
                <li className="grid grid-cols-[2.25rem_1fr] gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-chalk/20 text-chalk/80"><i className="fas fa-plane-arrival text-xs" aria-hidden /></span>
                  <div>
                    <p className="font-semibold text-chalk">Arrive Beijing (PEK or PKX)</p>
                    <p className="mt-1 text-sm leading-relaxed text-chalk/65">Daxing airport is the closer one to us: about 45 minutes by taxi.</p>
                  </div>
                </li>
                <li className="grid grid-cols-[2.25rem_1fr] gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ember text-night-950"><i className="fas fa-map-marker-alt text-xs" aria-hidden /></span>
                  <div>
                    <p className="font-semibold text-chalk">{OFFICE.name}</p>
                    <address className="mt-1 text-sm not-italic leading-relaxed text-chalk/65">
                      {OFFICE.address}<br />{OFFICE.district}
                    </address>
                  </div>
                </li>
              </ol>
              <div className="mt-7 flex flex-wrap gap-2">
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-4 !py-2.5 text-sm">
                  <i className="fas fa-external-link-alt text-xs" aria-hidden /> Open in Google Maps
                </a>
                <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-4 !py-2.5 text-sm">
                  <i className="fas fa-directions text-xs" aria-hidden /> Directions
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </PageShell>
  );
}
