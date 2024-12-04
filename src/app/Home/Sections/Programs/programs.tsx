"use client";

import { useState } from "react";

const Programs = () => {
  const items = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    image: `https://via.placeholder.com/200?text=Image+${i + 1}`,
    details: {
      university: `University ${i + 1}`,
      major: `Major Name ${i + 1}`,
      city: `City ${i + 1}`,
      language: "English",
      duration: "4 years",
      tuition: `$${5000 + i * 100}`,
      degree: "Bachelor's",
      start: "September 2024",
      deadline: "July 2024",
      serviceFee: `$${200 + i * 10}`,
      scholarship: "Available",
    },
  }));

  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = 3; // Maximum items visible in desktop mode

  const handleNext = () => {
    if (currentIndex + itemsPerView < items.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="w-full bg-gray-100 p-8 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Available Programs</h2>
      <div className="w-full overflow-hidden">
        <div className="relative">
          {/* Carousel Wrapper */}
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
            }}
          >
            {items.map((item) => (
              <a
                key={item.id}
                href={`/details/${item.id}`}
                className="min-w-full md:min-w-1/3 flex-shrink-0 bg-white border border-gray-200 rounded-lg shadow-lg mx-2 overflow-hidden"
              >
                {/* Item */}
                <div className="p-4">
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={`Image for ${item.details.university}`}
                    className="w-full h-40 object-cover mb-4 rounded-lg"
                  />

                  {/* Details */}
                  <ul className="space-y-2 text-sm">
                    <li className="font-semibold truncate">
                      University: {item.details.university}
                    </li>
                    <li className="truncate">Major: {item.details.major}</li>
                    <li className="truncate">City: {item.details.city}</li>
                    <li className="truncate">Language: {item.details.language}</li>
                    <li className="truncate">Duration: {item.details.duration}</li>
                    <li className="truncate">Tuition: {item.details.tuition}</li>
                    <li className="truncate">Degree: {item.details.degree}</li>
                    <li className="truncate">Start: {item.details.start}</li>
                    <li className="truncate">Deadline: {item.details.deadline}</li>
                    <li className="truncate">Service Fee: {item.details.serviceFee}</li>
                    <li className="truncate">Scholarship: {item.details.scholarship}</li>
                  </ul>
                </div>
              </a>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition disabled:opacity-50"
          >
            ◀
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + itemsPerView >= items.length}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition disabled:opacity-50"
          >
            ▶
          </button>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4 space-x-2">
          {items.map((_, index) => (
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
      </div>
    </section>
  );
};

export default Programs;


