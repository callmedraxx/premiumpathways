"use client";

import { useState } from "react";
import Image from "next/image";

const Testimonials = () => {
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 1;

  const handleNext = () => {
    if (currentIndex + itemsPerView < testimonials.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="bg-slate-100 py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What people say
          </h2>
          <p className="mt-2 text-slate-600">
            Reviews from students and families we&apos;ve supported worldwide
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm ring-1 ring-slate-950/5 sm:p-10">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="min-w-full flex-shrink-0 px-2 text-center"
              >
                <div className="relative mx-auto mb-6 h-28 w-28">
                  <div className="overflow-hidden rounded-full ring-4 ring-teal-100 ring-offset-2 ring-offset-white">
                    <Image
                      src={testimonial.image}
                      alt=""
                      width={112}
                      height={112}
                      className="aspect-square object-cover"
                      draggable={false}
                    />
                  </div>
                </div>
                <p className="text-lg font-semibold text-slate-900">
                  {testimonial.name}
                </p>
                <blockquote className="mt-4 text-lg leading-relaxed text-slate-600">
                  &ldquo;{testimonial.review}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous testimonial"
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:pointer-events-none disabled:opacity-40 sm:left-5"
          >
            ←
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex + itemsPerView >= testimonials.length}
            aria-label="Next testimonial"
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:pointer-events-none disabled:opacity-40 sm:right-5"
          >
            →
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to testimonial ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition ${
                index === currentIndex ? "w-6 bg-teal-600" : "w-2 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
