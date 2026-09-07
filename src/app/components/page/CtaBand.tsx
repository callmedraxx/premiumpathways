import Image from "next/image";
import Link from "next/link";
import Reveal from "../Reveal";

const WA = "https://wa.me/18683181079?text=" + encodeURIComponent("Hi, I would like to enquire about your services!");

/* The closing move on every inner page. One label for one intent, the same
   everywhere on the site: "Talk to an advisor". */
export default function CtaBand({
  title = "Your seat is waiting.",
  lede = "Tell us where you are and what you want to study. An advisor replies within a day, on WhatsApp or by email.",
  image = "/img/journey/wing-sunset.jpg",
}: { title?: React.ReactNode; lede?: React.ReactNode; image?: string }) {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal from="up" className="relative overflow-hidden rounded-[2rem] border border-chalk/[0.08]">
          <Image src={image} alt="" fill sizes="100vw" className="object-cover object-[center_60%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-night-950/95 via-night-950/80 to-night-950/40" />
          <div className="relative px-6 py-14 sm:px-12 sm:py-20 lg:px-20 lg:py-24">
            <h2 className="display-lg max-w-[14ch] text-chalk">{title}</h2>
            <p className="lede mt-5">{lede}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/About/Contact" className="btn-ember">Talk to an advisor</Link>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <i className="fab fa-whatsapp text-base text-[#3fd36f]" aria-hidden /> WhatsApp us
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
