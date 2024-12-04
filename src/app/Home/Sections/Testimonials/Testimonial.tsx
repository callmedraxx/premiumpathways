"use client";

import { useState } from "react";

const Testimonials = () => {
  const testimonials = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    image: `https://via.placeholder.com/300x300?text=Client+${i + 1}`,
    name: `Client ${i + 1}`,
    review: `This is a wonderful testimonial from Client ${i + 1}. They loved our service and had an amazing experience working with us.`,
  }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 1; // One item visible at a time

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
    <section className="bg-gray-100 py-12 px-4 sm:px-8">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">What People Say</h2>
        <p className="text-lg text-gray-600">
          Reviews from our satisfied clients around the globe
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="min-w-full flex-shrink-0 px-4 flex flex-col items-center text-center"
            >
              {/* Testimonial Content */}
              <div className="relative w-40 h-40 mb-6">
                <div className="rounded-full border-4 border-gray-300 shadow-md overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={`Testimonial ${testimonial.id}`}
                    className="object-cover w-full h-full pointer-events-none select-none"
                    draggable="false"
                  />
                </div>
              </div>
              <p className="text-lg font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-600 mt-3 italic">
                "{testimonial.review}"
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition disabled:opacity-50"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex + itemsPerView >= testimonials.length}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition disabled:opacity-50"
        >
          ▶
        </button>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex
                ? "bg-purple-500"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
