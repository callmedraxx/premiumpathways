"use client";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import WhatsAppWidget from "../../components/WhatsappWidget";
import Image from "next/image";
import { useState } from "react";
import Animate from "../../components/Animate";

const contactDetails = [
  {
    icon: "fa-envelope",
    label: "Email",
    value: "premiumpathways78@gmail.com",
    href: "mailto:premiumpathways78@gmail.com",
  },
  {
    icon: "fab fa-whatsapp",
    label: "WhatsApp",
    value: "+1 868 318 1079",
    href: "https://wa.me/18683181079",
  },
  {
    icon: "fab fa-instagram",
    label: "Instagram",
    value: "@premiumpathways1",
    href: "https://www.instagram.com/premiumpathways1/",
  },
  {
    icon: "fa-map-marker-alt",
    label: "Address",
    value: "Beijing Road, Beijing, China",
    href: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    const subject = `Contact Request from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
    window.location.href = `mailto:premiumpathways78@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-teal-500/50 focus:bg-white/10";

  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <Header />

      <main className="flex flex-1 flex-col">

        {/* ── Hero ── */}
        <section className="relative flex h-[380px] items-end justify-center overflow-hidden">
          <Image
            src="/img/contact-hero.jpg"
            alt="Contact Premium Pathways"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />
          <div className="relative z-10 pb-14 text-center px-4">
            <Animate variant="fade-down" delay={100}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-400">We&apos;re Here to Help</p>
            </Animate>
            <Animate variant="fade-up" delay={220}>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Get in Touch</h1>
            </Animate>
            <Animate variant="fade-up" delay={340}>
              <p className="mx-auto mt-4 max-w-xl text-slate-300">
                Have a question or ready to start your journey? Send us a message and we&apos;ll get back to you promptly.
              </p>
            </Animate>
          </div>
        </section>

        {/* ── Form + Details ── */}
        <section className="bg-slate-900 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">

            {/* Contact form — wider */}
            <Animate variant="fade-left" className="lg:col-span-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
                <h2 className="mb-1 text-2xl font-bold text-white">Send a message</h2>
                <p className="mb-7 text-sm text-slate-400">Fill in the form and we&apos;ll respond within 24 hours.</p>

                {sent ? (
                  <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-500/15 text-teal-400">
                      <i className="fas fa-check text-2xl" aria-hidden />
                    </span>
                    <p className="text-lg font-semibold text-white">Message sent!</p>
                    <p className="text-sm text-slate-400">Your email client should have opened. We&apos;ll be in touch soon.</p>
                    <button
                      onClick={() => { setSent(false); setFormData({ name: "", phone: "", email: "", message: "" }); }}
                      className="mt-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-slate-300 transition hover:bg-white/10"
                    >
                      Send another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-400">Full Name</label>
                        <input type="text" name="name" required placeholder="Your full name" value={formData.name} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-400">Phone Number</label>
                        <input type="tel" name="phone" placeholder="+1 234 567 8900" value={formData.phone} onChange={handleChange} className={inputClass} />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-slate-400">Email Address</label>
                      <input type="email" name="email" required placeholder="your@email.com" value={formData.email} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-slate-400">Message</label>
                      <textarea name="message" required rows={5} placeholder="Tell us about your goals, the program you're interested in, or any questions you have..." value={formData.message} onChange={handleChange} className={inputClass} />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-teal-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-950/40 transition hover:bg-teal-400"
                    >
                      Send Message
                      <i className="fas fa-paper-plane ml-2 text-xs" aria-hidden />
                    </button>
                  </form>
                )}
              </div>
            </Animate>

            {/* Contact details — narrower */}
            <Animate variant="fade-right" delay={120} className="lg:col-span-2 flex flex-col gap-5">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
                <h2 className="mb-6 text-xl font-bold text-white">Contact details</h2>
                <ul className="space-y-5">
                  {contactDetails.map((item) => (
                    <li key={item.label} className="flex items-start gap-4">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400">
                        <i className={`${item.icon.startsWith("fab") ? item.icon : `fas ${item.icon}`} text-sm`} aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="mt-0.5 text-sm text-white hover:text-teal-400 transition">
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-0.5 text-sm text-white">{item.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick links */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-4 text-sm font-bold text-white">Quick links</h3>
                <ul className="space-y-2">
                  {[
                    { label: "View applying procedures", href: "/Services/Procedures" },
                    { label: "Read the FAQ", href: "/Services/FAQ" },
                    { label: "Cost description", href: "/Services/Cost" },
                    { label: "Browse top universities", href: "/Universities/Top" },
                  ].map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-teal-400">
                        <i className="fas fa-chevron-right text-[10px] text-teal-500/60" aria-hidden />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Animate>
          </div>
        </section>

        {/* ── Map ── */}
        <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-400">Location</p>
              <h2 className="text-2xl font-bold text-white">Find us in Beijing</h2>
            </div>
            <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26245.472539801867!2d116.36357160000001!3d39.91217285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f0529d7f5f9c53%3A0x6b8b3dfbb8302c0!2sBeijing%2C%20China!5e0!3m2!1sen!2sus!4v1688656309834!5m2!1sen!2sus"
                width="100%"
                height="380"
                loading="lazy"
                title="Premium Pathways location"
                className="block w-full grayscale"
              />
            </div>
          </div>
        </section>

      </main>

      <WhatsAppWidget phoneNumber="+18683181079" message="Hi, I would like to enquire about your services!" />
      <Footer height="300px" />
    </div>
  );
}
