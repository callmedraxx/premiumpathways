"use client";

import Link from "next/link";
import Image from "next/image";

const ChooseProgram = () => {
  return (
    <section className="bg-slate-900 px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Choose a program
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-slate-300">
            Explore pathways by level — from foundation to doctoral study.
          </p>
        </div>

        {/* Mobile / tablet: stack; lg: bento grid */}
        <div className="flex flex-col gap-3 lg:grid lg:min-h-[500px] lg:grid-cols-4 lg:grid-rows-2 lg:gap-3">
          <Link
            href="/Scholarships/Phd"
            className="relative min-h-[220px] overflow-hidden rounded-2xl ring-1 ring-white/10 lg:col-span-2 lg:row-span-2 lg:min-h-0"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent transition group-hover:from-slate-950/95" />
            <p className="absolute bottom-0 left-0 z-10 p-5 text-xl font-semibold text-white sm:text-2xl">
              Doctor program
            </p>
            <Image
              src="/img/doctor.jpeg"
              alt="Doctor program"
              fill
              className="object-cover transition duration-500 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Link>

          <Link
            href="/Scholarships/Bachelors"
            className="relative min-h-[200px] overflow-hidden rounded-2xl ring-1 ring-white/10 lg:col-span-2 lg:row-start-1 lg:col-start-3 lg:min-h-0"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
            <p className="absolute bottom-0 left-0 z-10 p-4 text-lg font-semibold text-white sm:text-xl">
              Bachelors program
            </p>
            <Image
              src="/img/grad.jpeg"
              alt="Bachelors program"
              fill
              className="object-cover transition duration-500 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Link>

          <Link
            href="/Scholarships/Masters"
            className="relative min-h-[200px] overflow-hidden rounded-2xl ring-1 ring-white/10 lg:col-start-3 lg:row-start-2 lg:min-h-0"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
            <p className="absolute bottom-0 left-0 z-10 p-4 text-lg font-semibold text-white">
              Masters program
            </p>
            <Image
              src="/img/doctors.jpeg"
              alt="Masters program"
              fill
              className="object-cover transition duration-500 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 25vw"
            />
          </Link>

          <Link
            href="/Scholarships/NonD"
            className="relative min-h-[200px] overflow-hidden rounded-2xl ring-1 ring-white/10 lg:col-start-4 lg:row-start-2 lg:min-h-0"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
            <p className="absolute bottom-0 left-0 z-10 p-4 text-lg font-semibold text-white">
              Chinese / non-degree
            </p>
            <Image
              src="/img/china.jpeg"
              alt="Chinese language program"
              fill
              className="object-cover transition duration-500 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 25vw"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ChooseProgram;
