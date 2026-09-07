import Reveal from "../Reveal";

/* A reading section: the night ground behind the copy, the flight showing
   through above and below. `wide` lets a gallery use the whole container. */
export function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`reading py-20 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function SectionHead({ title, lede, className = "" }: { title: React.ReactNode; lede?: React.ReactNode; className?: string }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <Reveal as="h2" className="display-lg text-chalk">{title}</Reveal>
      {lede && <Reveal as="p" delay={0.08} className="lede mt-5">{lede}</Reveal>}
    </div>
  );
}
