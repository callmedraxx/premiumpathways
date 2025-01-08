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
      <main className="flex-1 px-8 sm:px-20 py-10">

        {/* Section 1: Majors Of Chinese Universities */}
        <section
          className="relative text-white text-center py-20 bg-cover bg-center rounded-lg shadow-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 rounded-lg"></div>
          <div className="relative z-10 px-4 sm:px-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-shadow-lg">
              Majors Of Chinese Universities
            </h1>
            <p className="text-lg sm:text-xl max-w-4xl mx-auto">
              Chinese universities offer a variety of different disciplines — including Education, Law, Engineering, Philosophy, Economics, Literature, etc. — with 11 categories, 71 secondary categories, and 250+ majors that guarantee to include your ideal major. Even if you are still unsure of what to study, you could freely explore this pool of options in your first year and transfer to another major or college as your wish. With the benefit of having such a wide-ranging selection, you could freely attend courses in different majors and make friends with those with unique perspectives and interests of mind.
            </p>
          </div>
        </section>

        {/* Section 2: Study MBBS in China */}
        <section
          className="relative text-white text-center py-20 bg-cover bg-center rounded-lg shadow-lg mt-10"
          style={{
            backgroundImage: "url('/path-to-your-background-image.jpg')", // Replace with your image path
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 rounded-lg"></div>
          <div className="relative z-10 px-4 sm:px-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-shadow-lg">
              Study MBBS in China
            </h1>
            <p className="text-lg sm:text-xl max-w-4xl mx-auto">
              Studying MBBS in China has been recognized as a cost-effective way of obtaining a decent education in Medicine. Due to the government subsidizing many of the MBBS programs and affordable living costs, you could attend them at a relatively reasonable price in comparison to medical education in other countries. Besides the costs, the quality of MBBS education in China is also guaranteed as is recognized by World Health Organization (WHO), Ministry of Education of China (MoE), Medical Council of India (MCI), according to which as many as 45 institutions are recognized and approved for hosting English-taught programs, including Shihezi University, Qingdao University, Dalian Medical University, and many others. 
            </p>
          </div>
        </section>

        {/* Section 3: Study Medicine in China */}
        <section
          className="relative text-white text-center py-20 bg-cover bg-center rounded-lg shadow-lg mt-10"
          style={{
            backgroundImage: "url('/path-to-your-background-image.jpg')", // Replace with your image path
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 rounded-lg"></div>
          <div className="relative z-10 px-4 sm:px-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-shadow-lg">
              Study Medicine in China
            </h1>
            <p className="text-lg sm:text-xl max-w-4xl mx-auto">
              Medical education in China has recently attracted attention and interest from students in countries around Southeast Asia. The Chinese medical education system offers a fast-track option of enrolling in a Bachelor of Medicine, Bachelor of Surgery (MBBS) program, which lasts about 5 years. Additionally, students will learn traditional Chinese medicine along with Western medicine, which provides improved diagnostic efficacy and a broadened view of medicine.
            </p>
          </div>
        </section>

        {/* Section 4: Study Engineering in China */}
        <section
          className="relative text-white text-center py-20 bg-cover bg-center rounded-lg shadow-lg mt-10"
          style={{
            backgroundImage: "url('/path-to-your-background-image.jpg')", // Replace with your image path
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 rounded-lg"></div>
          <div className="relative z-10 px-4 sm:px-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-shadow-lg">
              Study Engineering in China
            </h1>
            <p className="text-lg sm:text-xl max-w-4xl mx-auto">
              If your ideal occupation is in engineering, studying engineering in China could be one of the best options at your disposal. As many multinational companies establish their branches in China, an engineering degree could open up opportunities for employment at these companies. China’s growing international influence and its vast engineering resources make it a great destination for aspiring engineers.
            </p>
          </div>
        </section>

        {/* Section 5: Study Bachelor, Master & PhD in China */}
        <section
          className="relative text-white text-center py-20 bg-cover bg-center rounded-lg shadow-lg mt-10"
          style={{
            backgroundImage: "url('/path-to-your-background-image.jpg')", // Replace with your image path
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 rounded-lg"></div>
          <div className="relative z-10 px-4 sm:px-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-shadow-lg">
              Study Bachelor, Master & PhD in China
            </h1>
            <p className="text-lg sm:text-xl max-w-4xl mx-auto">
              If you are looking into gaining higher education, ranging from Bachelor’s to PhD degrees, China might be your first option. Many Chinese universities offer shortcut tracks like Bachelor-Master or Master-Ph.D., saving you time and providing a seamless transition through your studies.
            </p>
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

