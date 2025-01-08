"use client";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import WhatsAppWidget from "../../components/WhatsappWidget";
import Image from 'next/image';

export default function Cost() {
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
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Cost Description</h1>
            </div>
          </div>
        </section>

        <section className=" mt-8 flex flex-col sm:flex-row-reverse items-center py-20 bg-cover bg-center bg-gradient-to-r from-teal-600 to-green-700 text-white mb-12">
          <div className="flex-1 text-center sm:text-left px-4 sm:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Service Fee</h1>
            <p>When you first apply through Premium Pathways online admission system, JTRH will provide you one-to-one consultation, previewing your application success rate, employment direction information of major you want to choose etc.</p>
            <p>We’ll charge different service fee depend on different package you choose. You can apply for up to 3 universities after the payment of this fee. The service fee is collected to maintain and update JTRH online system as well as offering students’ supporting services.</p>
          </div>
          <div className="flex-1 sm:flex-shrink-0 mt-8 sm:mt-0 sm:mr-8">
            <Image
              src="/img/cost1.jpg"
              alt="Procedure"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="flex flex-col sm:flex-row items-center py-20 bg-gradient-to-r from-indigo-600 to-pink-600 text-white mb-12">
          <div className="flex-1 sm:flex-shrink-0 mt-8 sm:mt-0 sm:mr-8 px-4 sm:px-8 text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">University Fee</h1>
            <p>The application fee is charged by the universities. Generally, the application fee of one university is between 60 USD and 120 USD depending on university and program. Students have to pay the application fee for university’s processing work.</p>
            <p>Premium Pathways is responsible for collecting the application fee for universities based on the agreement with Chinese Universities. Chinese universities mostly accept payment in RMB, and JTRH will help you convert the foreign exchange to the university.</p>
          </div>
          <div className="flex-1 sm:flex-shrink-0 mt-8 sm:mt-0 sm:ml-8">
            <Image
              src="/img/cost2.png"
              alt="Procedure"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* JTRH Service Package Table */}
        <section className="py-20 px-4 bg-gray-100 text-black">
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">JTRH Service Package</h1>
          
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-teal-600 text-white">
                  <th className="py-3 px-6">JTRH Standard Package A</th>
                  <th className="py-3 px-6">JTRH Standard Package B</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td className="py-3 px-6">Service Fee 800USD</td>
                  <td className="py-3 px-6">Service Fee 500USD</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-6">Customized study plan – 5 schools recommended</td>
                  <td className="py-3 px-6">Customized study plan – 5 schools recommended</td>
                </tr>
                <tr>
                  <td className="py-3 px-6">Evaluation of application materials</td>
                  <td className="py-3 px-6">Evaluation of application materials</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-6">Majors & Universities matching</td>
                  <td className="py-3 px-6">Majors & Universities matching</td>
                </tr>
                <tr>
                  <td className="py-3 px-6">Translation & optimization of the application materials</td>
                  <td className="py-3 px-6">Translation & optimization of the application materials</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-6">3 self-chosen schools/course application</td>
                  <td className="py-3 px-6">3 self-chosen schools/course application</td>
                </tr>
                <tr>
                  <td className="py-3 px-6">Mailing admission notice</td>
                  <td className="py-3 px-6">Mailing admission notice</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-6">At least 1 offer & JW202</td>
                  <td className="py-3 px-6">At least 1 offer & JW202</td>
                </tr>
                <tr>
                  <td className="py-3 px-6">Visa guidance</td>
                  <td className="py-3 px-6">Visa guidance</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-6">Pre-departure preparation briefing</td>
                  <td className="py-3 px-6">Pre-departure preparation briefing</td>
                </tr>
                <tr>
                  <td className="py-3 px-6">Dormitory booking</td>
                  <td className="py-3 px-6">Dormitory booking</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-6">Medical check guidance</td>
                  <td className="py-3 px-6">Medical check guidance</td>
                </tr>
                <tr>
                  <td className="py-3 px-6">Assist in registration of long-term residence permit in China</td>
                  <td className="py-3 px-6">Assist in registration of long-term residence permit in China</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-6">Automated membership privileges</td>
                  <td className="py-3 px-6">Automated membership privileges</td>
                </tr>
                <tr>
                  <td className="py-3 px-6">Home-school communication</td>
                  <td className="py-3 px-6">Home-school communication</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-6">Career planning</td>
                  <td className="py-3 px-6">Career planning</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="flex flex-col sm:flex-row-reverse items-center py-20 bg-cover bg-center bg-gradient-to-r from-blue-600 to-purple-700 text-white mb-12">
          <div className="flex-1 text-center sm:text-left px-4 sm:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">JTRH Reminder</h1>
            <p>Apart from universities’ application, JTRH will also offer you the following services included in service fee:</p>
            <ul className="list-disc text-lg sm:text-xl max-w-2xl mx-auto sm:mx-0">
            <li>Tracking application process</li>
              <li>Mailing admission notice</li>
              <li>Visa guidance</li>
              <li>Pre-departure preparation briefing</li>
              <li>Dormitory booking</li>
              <li>Home-school communication</li>
              <li>Automated membership privileges</li>
              <li>Career planning</li> 
            </ul>
          </div>
          <div className="flex-1 sm:flex-shrink-0 mt-8 sm:mt-0 sm:mr-8">
            <Image
              src="/img/cost3.png"
              alt="Procedure"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="flex flex-col sm:flex-row items-center py-20 bg-gradient-to-r from-indigo-600 to-pink-600 text-white mb-12">
          <div className="flex-1 sm:flex-shrink-0 mt-8 sm:mt-0 sm:mr-8 px-4 sm:px-8 text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">JTRH Refund Policy</h1>
            <p>The application fee is charged by the universities. Generally, the application fee of one university is between 60 USD and 120 USD depending on university and program. Students have to pay the application fee for university’s processing work.</p>
            <ul className="list-disc text-lg sm:text-xl max-w-2xl mx-auto sm:mx-0">
            <li>University’s application fee once paid is non-refundable at any time</li>
            <li>90% amount of service fee is refundable within 24 hours after you have made the full payment</li>
            <li>50% amount of service fee is refundable if your application has already been processed. About your application status please contacted with our consultant</li>
            <li>100% amount of JTRH Plus Package Fee is refundable if the admission status of the student is refused, or we’ll offer you freely one application service</li>
            <li>30% amount of service fee is refundable if the student failed to get a visa after applying to the embassy for 3 times</li>
            <li>No amount is refundable once the student has been admitted by university</li>
            <li>No amount is refundable if the applicant submit fake materials or information</li>
            <li>No amount will be refundable if the student has landed in China</li>
            </ul>
          </div>
          <div className="flex-1 sm:flex-shrink-0 mt-8 sm:mt-0 sm:ml-8">
            <Image
              src="/img/cost5.jpg"
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
