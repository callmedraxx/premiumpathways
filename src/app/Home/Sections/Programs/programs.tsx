"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Programs = () => {
  const items = [
    {
      id: 1,
      image: "/img/pp1.png",
      details: {
        university: "Dali University",
        major: "Computer Science",
        city: "Dali",
        language: "English",
        duration: "4 years",
        tuition: "",
        degree: "Bachelor's",
        start: "September 2025",
        deadline: "December 2025",
        serviceFee: "",
        scholarship: "Available",
      },
    },
    {
      id: 2,
      image: "/img/pp2.jpg",
      details: {
        university: "Beijing Wuzi University",
        major: "Business Administration",
        city: "Beijing",
        language: "Chinese",
        duration: "1+4 years",
        tuition: "$18,000",
        degree: "Bachelor's",
        start: "January 2025",
        deadline: "July 30th",
        serviceFee: "$500-$5000",
        scholarship: "Available",
      },
    },
    {
      id: 3,
      image: "/img/pp3.jpeg",
      details: {
        university: "Huaihua University",
        major: "Chinese Language",
        city: "Huaihua",
        language: "Chinese",
        duration: "4 years",
        tuition: "$18,000",
        degree: "Bachelor's",
        start: "September Every time",
        deadline: "15th August",
        serviceFee: "$500-$5000",
        scholarship: "Available",
      },
    },
    {
      id: 4,
      image: "/img/pp4.jpeg",
      details: {
        university: "Dalian Jiaotong University",
        major: "Mechanical Engineering",
        city: "Dalian",
        language: "Chinese",
        duration: "3 years",
        tuition: "",
        degree: "Master",
        start: "September Every Year",
        deadline: "30th March",
        serviceFee: "$500-$5000",
        scholarship: "Available",
      },
    },    
    {
      id: 5,
      image: "/img/pp5.jpg",
      details: {
        university: "Hainan Normal University",
        major: "Computer Science and Technology", // Selected one major from the list
        city: "Haikou",
        language: "Chinese",
        duration: "4 years",
        tuition: "Contact us", // Scholarship covers these costs
        degree: "Bachelor's",
        start: "September Every Year",
        deadline: "30th June",
        serviceFee: "500-5000 USD",
        scholarship: "Available",
      },
    },
    {
      id: 6,
      image: "/img/pp6.jpeg",
      details: {
        university: "Guangxi Medical University",
        major: "Clinical Medicine",
        city: "Guangxi",
        language: "English",
        duration: "6 years",
        tuition: "Contact us",
        degree: "Bachelor",
        start: "September or March",
        deadline: "15th August",
        serviceFee: "500-5000 USD",
        scholarship: "Available",
      },
    },    
    {
      id: 7,
      image: "/img/pp6.jpeg",
      details: {
        university: "Any University",
        major: "Any Major",
        city: "Any City",
        language: "English",
        duration: "Varies",
        tuition: "Varies",
        degree: "Any Degree",
        start: "Contact Us",
        deadline: "Contact Us",
        serviceFee: "Contact Us",
        scholarship: "Contact Us",
      },
    },
    // Add all 24 programs here, with unique information for each program
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4); // Default for larger screens

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1); // Show 1 item per row on mobile screens
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // Show 2 items per row on tablet screens
      } else {
        setItemsPerView(4); // Show 4 items per row on larger screens
      }
    };

    // Set initial value
    updateItemsPerView();

    // Update on window resize
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []); // Show 4 items per row on larger screens

  const handleNext = () => {
    if (currentIndex + itemsPerView < items.length) {
      setCurrentIndex(currentIndex + itemsPerView);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerView);
    }
  };

  return (
    <section className="w-full text-black bg-gray-100 p-8">
      <h2 className="text-3xl font-bold  text-center mb-6">Available Programs</h2>
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
                href='#'
                className="w-full md:w-1/4 flex-shrink-0 bg-white border border-gray-200 rounded-lg shadow-lg mx-2 overflow-hidden"
              >
                {/* Item */}
                <div className="p-4">
                  {/* Image */}
                  <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`Image for ${item.details.university}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>

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
          {Array.from({ length: Math.ceil(items.length / itemsPerView) }).map(
            (_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === Math.floor(currentIndex / itemsPerView)
                    ? "bg-purple-500"
                    : "bg-gray-400 hover:bg-gray-500"
                }`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Programs;




