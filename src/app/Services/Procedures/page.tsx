"use client";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import WhatsAppWidget from "../../components/WhatsappWidget";
import Image from 'next/image';

export default function Bachelor() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-8">

        {/* Section 1: Text and Image Side by Side */}
        <section className="flex flex-col sm:flex-row items-center py-20 bg-cover bg-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white mb-12" >
          <div className="flex-1 text-center sm:text-left px-4 sm:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Applying Procedures</h1>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto sm:mx-0 mb-6">
              Learn everything about the steps required to apply to Chinese universities. Our team will guide you through each phase, ensuring you&apos;re well-prepared for a successful application.
            </p>
          </div>
          <div className="flex-1 sm:flex-shrink-0 mt-8 sm:mt-0 sm:ml-8">
            <Image
              src="/img/study.jpeg"
              alt="Applying Procedures"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Section 2: Text and Image Reversed */}
        <section className="flex flex-col sm:flex-row-reverse items-center py-20 bg-cover bg-center bg-gradient-to-r from-teal-600 to-green-700 text-white mb-12">
          <div className="flex-1 text-center sm:text-left px-4 sm:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Prepare to Apply for Chinese University</h1>
            <ul className="list-disc text-lg sm:text-xl max-w-2xl mx-auto sm:mx-0">
              <li>One-to-one Consultation</li>
              <li>Free Assessment of Achievement</li>
              <li>Universities Matching</li>
              <li>Personalized Study Plan</li>
            </ul>
          </div>
          <div className="flex-1 sm:flex-shrink-0 mt-8 sm:mt-0 sm:mr-8">
            <Image
              src="/img/apply4.jpg"
              alt="Procedure"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Section 3: Text and Image */}
        <section className="flex flex-col sm:flex-row items-center py-20  bg-gradient-to-r from-orange-600 to-red-700 text-white mb-12">
          <div className="flex-1 text-center sm:text-left px-4 sm:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Apply Process</h1>
            <ul className="list-disc text-lg sm:text-xl max-w-2xl mx-auto sm:mx-0">
<li>Service Fee Payment</li>
<li>Optimizing the Application Materials</li>
<li>University Application/Scholarship Application</li>
<li>Tracking Application Progress</li>
            </ul>
          </div>
          <div className="flex-1 sm:flex-shrink-0 mt-8 sm:mt-0 sm:ml-8">
            <Image
              src="/img/apply2.jpg"
              alt="Procedure"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Section 4: Text and Image Reversed */}
        <section className="flex flex-col sm:flex-row-reverse items-center py-20  bg-gradient-to-r from-purple-600 to-indigo-800 text-white mb-12">
          <div className="flex-1 text-center sm:text-left px-4 sm:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Admission</h1>
            <ul className="list-disc text-lg sm:text-xl max-w-2xl mx-auto sm:mx-0">
            <li>Inform Admission Result</li>
            <li>Major Adjustment（if necessary）</li>
            <li>Sending Admission Notice</li>



            </ul>
          </div>
          <div className="flex-1 sm:flex-shrink-0 mt-8 sm:mt-0 sm:mr-8">
            <Image
              src="/img/apply3.jpg"
              alt="Procedure"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
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
