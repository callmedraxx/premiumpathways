import Image from "next/image";
import Link from "next/link";
import PageShell from "../../components/page/PageShell";
import PageHero from "../../components/page/PageHero";
import { Section, SectionHead } from "../../components/page/Section";
import CtaBand from "../../components/page/CtaBand";
import Reveal from "../../components/Reveal";

const counts = [
  { value: "11", label: "major disciplines" },
  { value: "71", label: "secondary categories" },
  { value: "250+", label: "degree programs" },
];

/* The four subject essays from the previous build, kept whole. */
const subjects = [
  {
    title: "MBBS in China",
    icon: "fa-stethoscope",
    image: "/img/doctor.jpeg",
    alt: "A medical student in a white coat",
    body: "Studying MBBS in China is a cost-effective route to a world-class medical education. With government subsidies keeping tuition affordable, 45+ institutions, including Shihezi University, Qingdao University and Dalian Medical University, are recognised by the WHO, China's Ministry of Education and the Medical Council of India, and offer fully English-taught programs.",
  },
  {
    title: "Clinical medicine",
    icon: "fa-heartbeat",
    image: "/img/doctors.jpeg",
    alt: "Doctors in consultation at a Chinese hospital",
    body: "Chinese medical education has attracted growing interest from students across Africa, Southeast Asia and beyond. A five-year Bachelor of Medicine, Bachelor of Surgery track is a fast route to clinical practice. Students also gain exposure to traditional Chinese medicine alongside Western approaches, a combination that broadens diagnostic capability and clinical perspective.",
  },
  {
    title: "Engineering",
    icon: "fa-cogs",
    image: "/img/majors-engineering.jpg",
    alt: "Engineering students at work",
    body: "Engineering in China puts you at the centre of the world's most dynamic industrial landscape. As multinationals expand their Chinese operations, an engineering degree from a Chinese university opens doors to careers across manufacturing, technology, infrastructure and research. China's global influence and vast engineering resources make it one of the strongest destinations for aspiring engineers.",
  },
  {
    title: "Bachelor's, master's and PhD",
    icon: "fa-graduation-cap",
    image: "/img/grad.jpeg",
    alt: "Graduates celebrating on a campus lawn",
    body: "Whether you are starting your undergraduate journey or pursuing a doctorate, Chinese universities accommodate every level. Many institutions offer accelerated pathways, bachelor-to-master or master-to-PhD tracks, that reduce time-to-degree while maintaining academic rigour. With hundreds of programs taught in English and generous scholarship options, China is a compelling destination for students at any stage.",
  },
];

export default function Majors() {
  const [mbbs, clinical, engineering, levels] = subjects;
  return (
    <PageShell>
      <PageHero
        image="/img/majors-hero.jpg"
        alt="Students in a lecture theatre"
        position="center 30%"
        title="Find the major, then the university."
        lede="Chinese universities teach an exceptional breadth of disciplines, most of them open to international students. Start with what you want to study; we will find where."
      />

      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <SectionHead title="What Chinese universities teach." />
            <Reveal delay={0.1} className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-chalk/80">
              <p>
                Chinese universities span a remarkable range of disciplines: education, law, engineering, philosophy, economics, literature and more. With 11 major categories, 71 secondary categories and over 250 programs, your ideal major is almost certainly here.
              </p>
              <p>
                Not yet decided? Many universities let you explore courses freely in your first year before committing to a field.
              </p>
            </Reveal>
          </div>
          <Reveal from="up" delay={0.12} className="lg:col-span-4 lg:col-start-9">
            <dl className="divide-y divide-chalk/10 border-t border-chalk/10">
              {counts.map((c) => (
                <div key={c.label} className="flex items-baseline justify-between gap-4 py-5">
                  <dt className="text-sm text-chalk/60">{c.label}</dt>
                  <dd className="font-display text-4xl font-semibold tracking-tight text-chalk sm:text-5xl">{c.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>

      {/* Medicine: the two medical essays share one full-bleed composition. */}
      <Section>
        <SectionHead title="Medicine." lede="The field most Nigerian students ask us about first, and the one with the clearest route in." />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-12 sm:gap-5">
          <Reveal from="up" className="sm:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-chalk/[0.08] sm:aspect-[16/11]">
              <Image src={mbbs.image} alt={mbbs.alt} fill sizes="(max-width: 640px) 100vw, 58vw" className="object-cover object-top" />
            </div>
          </Reveal>
          <Reveal from="up" delay={0.08} className="sm:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-chalk/[0.08] sm:aspect-[4/5]">
              <Image src={clinical.image} alt={clinical.alt} fill sizes="(max-width: 640px) 100vw, 42vw" className="object-cover object-top" />
            </div>
          </Reveal>
          <Reveal from="up" delay={0.05} className="sm:col-span-6">
            <div className="grid grid-cols-[3rem_1fr] gap-5 border-t border-chalk/10 pt-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ember/50 text-ember"><i className={`fas ${mbbs.icon} text-sm`} aria-hidden /></span>
              <div>
                <h3 className="display-md text-chalk">{mbbs.title}</h3>
                <p className="mt-3 leading-relaxed text-chalk/70">{mbbs.body}</p>
              </div>
            </div>
          </Reveal>
          <Reveal from="up" delay={0.1} className="sm:col-span-6">
            <div className="grid grid-cols-[3rem_1fr] gap-5 border-t border-chalk/10 pt-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ember/50 text-ember"><i className={`fas ${clinical.icon} text-sm`} aria-hidden /></span>
              <div>
                <h3 className="display-md text-chalk">{clinical.title}</h3>
                <p className="mt-3 leading-relaxed text-chalk/70">{clinical.body}</p>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal from="up" delay={0.12} className="mt-10">
          <Link href="/About/Contact" className="btn-ghost">Ask about medicine</Link>
        </Reveal>
      </Section>

      {/* Engineering: one split. */}
      <Section>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
          <Reveal from="up" className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-chalk/[0.08]">
              <Image src={engineering.image} alt={engineering.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal as="h2" className="display-lg text-chalk">{engineering.title}.</Reveal>
            <Reveal as="p" delay={0.08} className="mt-5 text-[1.05rem] leading-relaxed text-chalk/75">{engineering.body}</Reveal>
            <Reveal delay={0.12} className="mt-8">
              <Link href="/About/Contact" className="btn-ghost">Ask about engineering</Link>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Degree levels: stacked, full width, the photo underneath the words. */}
      <Section>
        <SectionHead title={`${levels.title}.`} lede={levels.body} />
        <Reveal from="up" delay={0.1} className="mt-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-card border border-chalk/[0.08] sm:aspect-[21/9]">
            <Image src={levels.image} alt={levels.alt} fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-night-950/80 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-3 p-5 sm:p-8">
              <Link href="/Scholarships/Phd" className="btn-ember">PhD scholarships</Link>
              <Link href="/Scholarships/NonD" className="btn-ghost">Chinese language programs</Link>
            </div>
          </div>
        </Reveal>
      </Section>

      <CtaBand title="Not sure which major is right?" lede="An advisor will assess your background and match you with the programs best suited to your goals." />
    </PageShell>
  );
}
