import Image from "next/image";
import Link from "next/link";
import Reveal from "../../components/Reveal";

const WA = "https://wa.me/18683181079?text=" + encodeURIComponent("Hi, I will like to enquire about your services!");

/* The last screen. The aircraft behind the page has landed; the only thing
   left to do is the thing the whole page was for. */
export default function Board() {
  return (
    <section className="relative py-24 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal from="up" className="relative overflow-hidden rounded-[2rem] border border-chalk/[0.08]">
          <Image src="/img/journey/wing-sunset.jpg" alt="" fill sizes="100vw" className="object-cover object-[center_60%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-night-950/95 via-night-950/80 to-night-950/40" />
          <div className="relative px-6 py-16 sm:px-12 sm:py-24 lg:px-20 lg:py-28">
            <h2 className="display-xl max-w-[12ch] text-chalk">Your seat is waiting.</h2>
            <p className="lede mt-6">
              Tell us where you are and what you want to study. An advisor replies within a day, on WhatsApp or by email.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
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
