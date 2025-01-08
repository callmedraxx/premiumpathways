"use client";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import WhatsAppWidget from "../../components/WhatsappWidget";
import Image from 'next/image';
import { useState } from "react";
//import { useState } from "react";

export default function Testimonials() {

  const testimonials = [
      {
        id: 1,
        image: "/img/thong.jpg",
        name: "THONG THI DAO-Vietnam",
        review: "I am from Vietnam. I am currently studying in the second year of my undergraduate degree at Zhejiang Gongshang University.",
      },
      {
        id: 2,
        image: "/img/review1.png",
        name: "YEE TAN GUOJING-Malaysia",
        review: "I'm very happy to know about Premium Pathways. They helped me a lot with my studies and also especially JASON",
      },
      {
        id: 3,
        image: "/img/Jidapha-Mangkale-Thailand.png",
        name: "Jidapha Mangkale-Thailand",
        review: "They made everything so easy and seamless. I'm truly impressed!",
      },
      {
        id: 4,
        image: "/img/Papitchaya-Kaewtha-Thailand.jpg",
        name: "Papitchaya Kaewtha-Thailand",
        review: "A remarkable experience from start to finish. Thank you for everything!",
      },
      {
        id: 5,
        image: "/img/Nigvaree-Khumsap-Thailand.jpg",
        name: "Nigvaree Khumsap-Thailand",
        review: "Friendly, professional, and attentive to every detail. Simply the best!",
      },
      {
        id: 6,
        image: "/img/Victor-Indonesia.jpg",
        name: "Victor-Indonesia",
        review: "Top-notch service! I'll be recommending this to all my friends.",
      },
      {
        id: 7,
        image: "/img/Cindy-Indonesia.jpg",
        name: "Cindy Indonesia",
        review: "Truly exceptional! A heartfelt thanks for making my experience unforgettable.",
      }
    ];
  
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
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="">
      <section
          className="w-full h-[400px] pt-28 sm:pt-16 bg-cover bg-center relative text-white"
          style={{
            backgroundImage: "url('/img/study.jpeg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
            {/* Title and Subtitle */}
            <div className="text-center mb-8">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Study in ChinaInternational Students in China Testimonials</h1>
            </div>
          </div>
        </section>

       <section className="bg-gray-100 py-12 px-4 text-black sm:px-8">
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
                         <Image
                           src={testimonial.image}
                           alt={`Testimonial ${testimonial.id}`}
                           width={160}
                           height={160}
                           className="object-cover pointer-events-none select-none"
                           draggable="false"
                         />
                       </div>
                     </div>
                     <p className="text-lg font-semibold">{testimonial.name}</p>
                     <p className="text-sm text-gray-600 mt-3 italic">
                       &quot;{testimonial.review}&quot;
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
        
      </main>

      {/* WhatsApp Widget */}
      <WhatsAppWidget
        phoneNumber="+18683181079"
        message="Hi, I would like to enquire about your services!"
      />

      {/* Footer */}
      <Footer height="300px" />
    </div>
  );
}