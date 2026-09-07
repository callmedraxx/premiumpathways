import Image from "next/image";
import Reveal from "../../components/Reveal";

/* Departure. The page has been over Lagos since the hero; this is the
   section that says so out loud, in pictures a Nigerian reader will
   recognise: Lekki from the air, the National Mosque, the Ikoyi bridge. */
export default function Departure() {
  return (
    <section className="reading relative py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal as="h2" className="display-lg text-chalk">It starts in Nigeria.</Reveal>
          <Reveal as="p" delay={0.08} className="lede mt-5">
            Most of our students begin in Lagos, Abuja or Port Harcourt. The first conversation is on WhatsApp, in your time zone, with someone who has made this journey.
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-12 sm:gap-5 lg:mt-20">
          <Reveal from="up" className="sm:col-span-8">
            <figure>
              <div className="relative aspect-[16/10] overflow-hidden rounded-card">
                <Image src="/img/journey/lagos-aerial.jpg" alt="Lagos from the air at dusk, with the lagoon behind the city" fill sizes="(max-width: 640px) 100vw, 66vw" className="object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-chalk/55">Lagos, from the air.</figcaption>
            </figure>
          </Reveal>

          <Reveal from="up" delay={0.1} className="sm:col-span-4 lg:-mt-16">
            <figure>
              <div className="relative aspect-[3/4] overflow-hidden rounded-card">
                <Image src="/img/journey/abuja-mosque-wide.jpg" alt="The National Mosque in Abuja against a clear sky" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-chalk/55">Abuja, the National Mosque.</figcaption>
            </figure>
          </Reveal>

          <Reveal from="up" delay={0.05} className="sm:col-span-5">
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden rounded-card">
                <Image src="/img/journey/lagos-bridge-night.jpg" alt="The Lekki-Ikoyi link bridge lit up at night" fill sizes="(max-width: 640px) 100vw, 40vw" className="object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-chalk/55">The Lekki-Ikoyi bridge, before an early flight.</figcaption>
            </figure>
          </Reveal>

          <Reveal from="up" delay={0.12} className="flex flex-col justify-center sm:col-span-7 lg:pl-10">
            <h3 className="display-md text-chalk">Everything before the airport, handled here.</h3>
            <ul className="mt-6 grid gap-5 text-[1.02rem] leading-relaxed text-chalk/80 sm:grid-cols-2">
              <li>
                <strong className="block font-semibold text-chalk">A plan, not a brochure.</strong>
                One-to-one counselling across 600+ universities and 80+ majors, with the career context behind each choice.
              </li>
              <li>
                <strong className="block font-semibold text-chalk">Documents done properly.</strong>
                We review and improve your transcripts, statements and references before a university ever sees them.
              </li>
              <li>
                <strong className="block font-semibold text-chalk">Scholarship channels.</strong>
                Provincial, university and full scholarships, applied for on your behalf where you qualify.
              </li>
              <li>
                <strong className="block font-semibold text-chalk">Visa and departure.</strong>
                The JW202, the embassy appointment, the dormitory booking and a briefing before you leave.
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
