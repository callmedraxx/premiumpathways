"use client";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import WhatsAppWidget from "../../components/WhatsappWidget";

export default function Bachelor() {
  const programs = [
    {
      id: "southwest-university-of-finance-and-economics",
      image: "/path-to-image1.jpg", // Replace with actual image path
      university: "Southwest University of Finance and Economics",
      scholarship: "Full Scholarship program of language program Degree",
      major: "Chinese",
      degree: "Language Program",
      city: "Changsha",
      deadline: "2025/7/30",
    },
    {
      id: "shandong-university-of-technology",
      image: "/path-to-image2.jpg", // Replace with actual image path
      university: "Shandong University of Technology",
      scholarship: "Full Scholarship program of language program Degree",
      major: "Chinese",
      degree: "Language Program",
      city: "Zibo",
      deadline: "2025/5/30",
    },
    {
      id: "beijing-international-studies-university",
      image: "/path-to-image3.jpg", // Replace with actual image path
      university: "Beijing International Studies University",
      scholarship: "Full Scholarship program of language program Degree",
      major: "Chinese",
      degree: "Language Program",
      city: "Beijing",
      deadline: "2025/5/30",
    },
    {
      id: "anhui-university-of-finance-and-economics",
      image: "/path-to-image4.jpg", // Replace with actual image path
      university: "Anhui University of Finance and Economics",
      scholarship: "Full Scholarship program of language program Degree",
      major: "Chinese",
      degree: "Language Program",
      city: "Anhui",
      deadline: "2025/5/30",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 p-8 mt-20 sm:p-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={program.image}
                alt={program.university}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {program.university}
                </h2>
                <p className="text-gray-600 mb-1">
                  <strong>Scholarship:</strong> {program.scholarship}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Major:</strong> {program.major}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Degree:</strong> {program.degree}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>City:</strong> {program.city}
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Deadline:</strong> {program.deadline}
                </p>
                <button
                  className="w-full bg-navy-blue text-white py-2 px-4 rounded-md hover:bg-blue-800 active:scale-95 transition-transform"
                  onClick={() => alert(`Apply for ${program.university}`)}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
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
