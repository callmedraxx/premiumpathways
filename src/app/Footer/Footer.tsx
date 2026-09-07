import Image from "next/image";
import Link from "next/link";
import { NAV } from "../lib/nav";

interface FooterProps {
  className?: string;
  height?: string;
}

const WA = "https://wa.me/18683181079?text=" + encodeURIComponent("Hi, I would like to enquire about Premium Pathways services.");

const Footer = ({ className = "" }: FooterProps) => {
  return (
    <footer className={`relative reading-solid border-t border-chalk/[0.08] text-chalk ${className}`}>
      <div className="mx-auto max-w-[1400px] px-5 pb-8 pt-16 sm:px-8 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block">
              <Image src="/img/prem.png" alt="Premium Pathways" width={190} height={104} className="h-auto w-44" />
            </Link>
            <p className="lede mt-5 max-w-sm text-base">
              Admissions, scholarships, visas and arrival support for students heading to China. From your first call to your first day on campus.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <i className="fab fa-whatsapp text-base text-[#3fd36f]" aria-hidden /> WhatsApp us
              </a>
              <a href="mailto:premiumpathways78@gmail.com" className="btn-ghost">
                <i className="far fa-envelope text-sm" aria-hidden /> premiumpathways78@gmail.com
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-7">
            {NAV.map((g) => (
              <div key={g.label}>
                <p className="meta">{g.label}</p>
                <ul className="mt-4 space-y-2.5 text-[0.95rem]">
                  {g.items.map((it) => (
                    <li key={it.href}>
                      <Link href={it.href} className="text-chalk/75 transition hover:text-chalk">{it.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-chalk/[0.08] pt-6 text-sm text-chalk/55 md:flex-row md:items-center md:justify-between lg:pr-64">
          <address className="not-italic leading-relaxed">
            F/1202, Tower A, Lippo Plaza, Yizhuang Economic-Tech Development Area, Beijing, China
          </address>
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/premiumpathways1/profilecard/?igsh=MXN0aTR0YmpkbXFtag=="
              target="_blank" rel="noopener noreferrer" aria-label="Premium Pathways on Instagram"
              className="text-chalk/60 transition hover:text-ember"
            >
              <i className="fab fa-instagram text-lg" aria-hidden />
            </a>
            <span>&copy; {new Date().getFullYear()} Premium Pathways</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
