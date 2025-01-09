"use client";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import WhatsAppWidget from "../../components/WhatsappWidget";
//import { useState } from "react";

export default function Bachelor() {
  

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
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
            </div>
          </div>
        </section>
        <section className="py-12 bg-gray-100 text-gray-800">
  <div className="max-w-6xl mx-auto px-6 lg:px-12">
    {/* Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4">Who We Are</h2>
      <p className="text-lg sm:text-xl text-gray-600">
        Premium Pathways - Your trusted partner in educational consultation.
      </p>
    </div>

    {/* Intro */}
    <div className="mb-8">
      <p className="leading-7 sm:leading-8 text-justify">
        Located in Beijing, Premium Pathways is a consultation firm dedicated to providing attentive and professional educational services. Guided by the concept of <strong className="text-blue-700">&quot;FOR FUTURE, FOR BETTER&quot;</strong>, we strive to bridge Chinese and foreign students in their academic journeys, ensuring their needs remain our top priority.
      </p>
    </div>

    {/* Highlights */}
    <div className="grid sm:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold text-blue-600 mb-3">Comprehensive University Database</h3>
        <p className="leading-7 text-justify">
          With detailed information on over <strong className="text-blue-700">600 universities in China</strong>, we provide tailored matches for students in minutes. Our system accommodates all major academic disciplines, from mainstream programs like Computer Science, Medicine, and Engineering to trending fields like Artificial Intelligence and the Internet of Things.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-blue-600 mb-3">Global Reach</h3>
        <p className="leading-7 text-justify">
          This year alone, we&quot;ve served over <strong className="text-blue-700">3,000 students</strong> from regions such as Southeast Asia, South Asia, Europe, and Africa. We&quot;ve assisted in preparing more than <strong className="text-blue-700">900 personalized plans</strong>, securing over <strong className="text-blue-700">300 student enrollments</strong> across various academic levels.
        </p>
      </div>
    </div>

    {/* Achievements */}
    <div className="mt-12">
      <h3 className="text-xl font-semibold text-blue-600 mb-3">Achievements and Success Rates</h3>
      <p className="leading-7 text-justify">
        With an acceptance rate of <strong className="text-blue-700">90%</strong>, we’ve helped over <strong className="text-blue-700">200 students</strong> secure scholarships and ensured successful applications for self-financed students at top universities in cities like Beijing, Shanghai, Guangdong, and beyond.
      </p>
    </div>
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