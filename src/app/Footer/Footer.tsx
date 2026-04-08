"use client";

import Image from "next/image";
import Link from "next/link";

type FooterProps = {
  /** @deprecated Ignored — footer height follows content */
  height?: string;
  className?: string;
};

const Footer = ({ className = "" }: FooterProps) => {
  const waHref =
    "https://wa.me/18683181079?text=" +
    encodeURIComponent(
      "Hi, I would like to enquire about Premium Pathways services."
    );

  return (
    <footer
      className={`relative isolate overflow-hidden border-t border-white/10 bg-slate-950 text-white ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(45,212,166,0.12),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-950"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 sm:pb-10 sm:pt-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block transition hover:opacity-90">
              <Image
                src="/img/prem.png"
                alt="Premium Pathways"
                width={180}
                height={74}
                className="h-auto w-44 sm:w-48"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Your partner for studying and working abroad — from choosing a program to arrival support.
            </p>

            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <div className="flex gap-3">
                <span
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-teal-400"
                  aria-hidden
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                <address className="not-italic leading-relaxed text-slate-400">
                  F/1202, Tower A, Lippo Plaza
                  <br />
                  Yizhuang Economic-Tech Development Area
                  <br />
                  Beijing, China
                </address>
              </div>

              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-600/15 px-4 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-400/50 hover:bg-emerald-600/25 sm:w-auto"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp us
              </a>

              <p>
                <span className="text-slate-500">Email </span>
                <a
                  href="mailto:premiumpathways78@gmail.com"
                  className="font-medium text-teal-400 transition hover:text-teal-300"
                >
                  premiumpathways78@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/Universities/Top" className="text-slate-300 transition hover:text-white">
                  Top universities
                </Link>
              </li>
              <li>
                <Link href="/Universities/Majors" className="text-slate-300 transition hover:text-white">
                  Majors
                </Link>
              </li>
              <li>
                <Link href="/Universities/Cities" className="text-slate-300 transition hover:text-white">
                  Cities
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs & services */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Programs &amp; services
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/Scholarships/Phd" className="text-slate-300 transition hover:text-white">
                  Scholarships
                </Link>
              </li>
              <li>
                <Link href="/Services/Procedures" className="text-slate-300 transition hover:text-white">
                  How to apply
                </Link>
              </li>
              <li>
                <Link href="/Services/Cost" className="text-slate-300 transition hover:text-white">
                  Fees &amp; packages
                </Link>
              </li>
              <li>
                <Link href="/Services/FAQ" className="text-slate-300 transition hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company + social */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/About/Aboutus" className="text-slate-300 transition hover:text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/About/Contact" className="text-slate-300 transition hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/About/Testimonials" className="text-slate-300 transition hover:text-white">
                  Testimonials
                </Link>
              </li>
            </ul>

            <h3 className="mb-3 mt-10 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Follow
            </h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-teal-400/40 hover:bg-teal-500/10"
                aria-label="Facebook"
              >
                <Image src="/img/facebook.png" alt="" width={20} height={20} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-teal-400/40 hover:bg-teal-500/10"
                aria-label="X"
              >
                <Image src="/img/x.png" alt="" width={18} height={18} />
              </a>
              <a
                href="https://www.instagram.com/premiumpathways1/profilecard/?igsh=MXN0aTR0YmpkbXFtag=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-teal-400/40 hover:bg-teal-500/10"
                aria-label="Instagram"
              >
                <Image src="/img/instagram.png" alt="" width={20} height={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-black/25">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center text-xs text-slate-500 sm:text-left">
            © {new Date().getFullYear()} Premium Pathways. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
            <a href="#privacy" className="transition hover:text-slate-300">
              Privacy
            </a>
            <span className="hidden text-slate-700 sm:inline" aria-hidden>
              ·
            </span>
            <a href="#terms" className="transition hover:text-slate-300">
              Terms
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
