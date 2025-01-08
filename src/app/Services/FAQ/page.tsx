"use client";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import WhatsAppWidget from "../../components/WhatsappWidget";
import { useState } from "react";

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);


  const toggleAnswer = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };
  

  const faqData = [
    {
      question: "How can I choose a course to start?",
      answer: "Deciding what to study in China requires lots of research. Generally speaking, you may have to think about how to choose an ideal course, find a right university, and choose a suitable city.",
    },
    {
      question: "How to choose a suitable city?",
      answer: "One big thing you may consider is the location where you will study in. Different places suit different people, so it depends on what you’re looking for. China’s huge domain allows it to embrace great diversities in its cities. Take a look at our city guide and hot cities to find a city you want to study and live in.",
    },
    {
      question: "How to find a right university?",
      answer: "Look for universities that offer courses aligned with your interests. Consider the university’s ranking, location, available scholarships, and the support offered to international students.",
    },
    {
      question: "When should I apply for courses in the fall semester?",
      answer: "Applications for the fall semester should typically be submitted between March and June, depending on the university's deadlines.",
    },
    {
      question: "When should I apply for courses in the spring semester?",
      answer: "For the spring semester, applications usually open between September and November. Be sure to check the specific university's deadlines.",
    },
    {
      question: "How to Get a Proper Visa to Study in China?",
      answer: "To study in China, you need an X1 or X2 visa. You must provide an acceptance letter from a Chinese university and other documents, such as your passport and a health certificate.",
    },
    {
      question: "Documents needed for visa application?",
      answer: "Required documents for the visa application include a valid passport, visa application form, admission letter, health check certificate, and proof of financial support.",
    },
    {
      question: "Upon Your Arrival Land in China After you land on the airport, you should first go through the following procedures before heading for your school?",
      answer: "Upon arrival, you should go through immigration, get your luggage, and proceed with the health check. You will then be able to meet with your university representatives who will assist you with transportation.",
    },
    {
      question: "Enrolment and Registration?",
      answer: "After arrival, you will need to complete your enrolment by submitting necessary documents to the university’s international student office. This will include your passport, visa, and admission letter.",
    },
  ];

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
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">FAQ</h1>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full px-4 py-8">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg p-4 cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">{item.question}</h2>
                  <span className="text-xl">{openQuestion === index ? "-" : "+"}</span>
                </div>
                {openQuestion === index && (
                  <p className="mt-4 text-white">{item.answer}</p>
                )}
              </div>
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
