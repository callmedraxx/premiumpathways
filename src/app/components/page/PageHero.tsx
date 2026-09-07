import Image from "next/image";
import Reveal from "../Reveal";

type Props = {
  image: string;
  alt: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  /* Sits in the right column on desktop: contact routes, a fact list, a form. */
  aside?: React.ReactNode;
  position?: string;
  priority?: boolean;
};

/* The inner-page opening. A full-bleed photograph under the night gradient,
   the title low and left where the eye lands after the header, and room on
   the right for whatever the page needs the reader to do first. */
export default function PageHero({ image, alt, title, lede, aside, position = "center", priority = true }: Props) {
  return (
    <section className="relative flex min-h-[78vh] items-end overflow-hidden pt-28 pb-14 sm:pb-16 lg:min-h-[72vh]">
      <Image src={image} alt={alt} fill priority={priority} sizes="100vw" className="object-cover" style={{ objectPosition: position }} />
      <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/70 to-night-950/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-night-950/70 via-night-950/20 to-transparent" />
      <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:items-end">
        <div className={aside ? "lg:col-span-7" : "lg:col-span-9"}>
          <Reveal as="h1" from="up" className="display-xl text-chalk">{title}</Reveal>
          {lede && <Reveal as="p" from="up" delay={0.1} className="lede mt-6">{lede}</Reveal>}
        </div>
        {aside && <Reveal from="up" delay={0.18} className="lg:col-span-5">{aside}</Reveal>}
      </div>
    </section>
  );
}
