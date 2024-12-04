"use client";

import Link from "next/link";

const ChooseProgram = () => {
  return (
    <section className="w-full p-8 mt-2">
      {/* Title and Subtitle */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white">Choose a Program</h2>
        <p className="text-lg text-white mt-2">
          Discover Your Perfect Program at Premium Pathways – Choose Wisely!
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-4 grid-rows-4 gap-4 h-[600px]">
        {/* Doctor Program - Full Left Side */}
        <Link
          href="/programs/1"
          className="relative col-span-2 row-span-4 overflow-hidden group"
        >
          <div className="absolute inset-0 bg-black/40 flex items-end transition-all duration-300 group-hover:bg-black/60">
            <p className="text-white text-xl font-semibold p-4">
              Doctor Program
            </p>
          </div>
          <img
            src="/img/doctor.jpeg"
            alt="Doctor Program"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:z-10"
          />
        </Link>

        {/* Bachelors Program - Top Right */}
        <Link
          href="/programs/2"
          className="relative col-span-2 row-span-2 overflow-hidden group"
        >
          <div className="absolute inset-0 bg-black/40 flex items-end transition-all duration-300 group-hover:bg-black/60">
            <p className="text-white text-xl font-semibold p-4">
              Bachelors Program
            </p>
          </div>
          <img
            src="/img/grad.jpeg"
            alt="Bachelors Program"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:z-10"
          />
        </Link>

        {/* Masters Program - Bottom Left */}
        <Link
          href="/programs/3"
          className="relative col-span-1 row-span-2 overflow-hidden group"
        >
          <div className="absolute inset-0 bg-black/40 flex items-end transition-all duration-300 group-hover:bg-black/60">
            <p className="text-white text-xl font-semibold p-4">
              Masters Program
            </p>
          </div>
          <img
            src="/img/doctors.jpeg"
            alt="Masters Program"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:z-10"
          />
        </Link>

        {/* Chinese Program - Bottom Right */}
        <Link
          href="/programs/4"
          className="relative col-span-1 row-span-2 overflow-hidden group"
        >
          <div className="absolute inset-0 bg-black/40 flex items-end transition-all duration-300 group-hover:bg-black/60">
            <p className="text-white text-xl font-semibold p-4">
              Chinese Program
            </p>
          </div>
          <img
            src="/img/china.jpeg"
            alt="Chinese Program"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:z-10"
          />
        </Link>
      </div>
    </section>
  );
};

export default ChooseProgram;


