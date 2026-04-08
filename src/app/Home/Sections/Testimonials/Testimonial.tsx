"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    image: "/img/tt1.jpeg",
    name: "Folagbade — Nigeria",
    review: "It was an unforgettable experience. Thank you.",
  },
  {
    id: 2,
    image: "/img/tt2.jpeg",
    name: "Kwame — Ghana",
    review: "I'm very happy to know about Premium Pathways.",
  },
  {
    id: 3,
    image: "/img/tt3.jpeg",
    name: "Jidapha — Morocco",
    review: "They made everything so easy and seamless. I'm impressed!",
  },
  {
    id: 4,
    image: "/img/tt4.jpeg",
    name: "Catherine — Nigeria",
    review: "A remarkable experience from start to finish. Thank you!",
  },
  {
    id: 5,
    image: "/img/tt5.jpeg",
    name: "Appiah — Ghana",
    review: "Friendly, professional, and attentive to every detail!",
  },
  {
    id: 6,
    image: "/img/tt6.jpeg",
    name: "Francis — Ghana",
    review: "Top-notch service! I'll recommend this to all my friends.",
  },
  {
    id: 7,
    image: "/img/tt7.jpeg",
    name: "Fatima — Nigeria",
    review: "Truly exceptional! Thank you for this experience.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((i) => (i + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What people say
          </h2>
          <p className="mt-2 text-slate-300">
            Reviews from students and families we&apos;ve supported worldwide
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md sm:p-10">
          {/* Slide */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.id} className="min-w-full flex-shrink-0 px-1">
                  <div className="overflow-hidden rounded-full ring-4 ring-teal-500/40 ring-offset-2 ring-offset-transparent mx-auto mb-5 h-24 w-24 sm:h-28 sm:w-28">
                    <Image
                      src={t.image}
                      alt=""
                      width={112}
                      height={112}
                      className="aspect-square h-full w-full object-cover"
                      draggable={false}
                    />
                  </div>
                  <p className="text-base font-semibold text-white sm:text-lg">
                    {t.name}
                  </p>
                  <blockquote className="mt-3 text-base leading-relaxed text-slate-300 sm:text-lg">
                    &ldquo;{t.review}&rdquo;
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          {/* Nav buttons — below content, never overlapping */}
          <div className="mt-7 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
            >
              ←
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to testimonial ${index + 1}`}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-6 bg-teal-400"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
