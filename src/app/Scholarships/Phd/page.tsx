"use client"

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import WhatsAppWidget from "../../components/WhatsappWidget";
import { useState } from "react";

export default function Phd() {
  const programs = [
    {
      id: "southwest-university-of-finance-and-economics",
      image: "/img/full-scholarship-of-a-university-in-beijing21.jpg", // Replace with actual image path
      university: "Southwest University of Finance and Economics",
      scholarship: "Full Scholarship program of language program Degree",
      major: "Chinese",
      degree: "Language Program",
      city: "Changsha",
      deadline: "2025/7/30",
    },
    {
      id: "southwest-university-of-finance-and-economics",
      image: "/img/full-scholarship-of-a-university-in-beijing21.jpg", // Replace with actual image path
      university: "Southwest University of Finance and Economics",
      scholarship: "Full Scholarship program of language program Degree",
      major: "Chinese",
      degree: "Language Program",
      city: "Changsha",
      deadline: "2025/7/30",
    },
    {
      id: "shandong-university-of-technology",
      image: "/img/full-scholarship-of-a-university-in-beijing21.jpg", // Replace with actual image path
      university: "Shandong University of Technology",
      scholarship: "Full Scholarship program of language program Degree",
      major: "Chinese",
      degree: "Language Program",
      city: "Zibo",
      deadline: "2025/5/30",
    },
    {
      id: "beijing-international-studies-university",
      image: "/img/full-scholarship-of-a-university-in-beijing21.jpg", // Replace with actual image path
      university: "Beijing International Studies University",
      scholarship: "Full Scholarship program of language program Degree",
      major: "Chinese",
      degree: "Language Program",
      city: "Beijing",
      deadline: "2025/5/30",
    },
    {
      id: "anhui-university-of-finance-and-economics",
      image: "/img/full-scholarship-of-a-university-in-beijing21.jpg", // Replace with actual image path
      university: "Anhui University of Finance and Economics",
      scholarship: "Full Scholarship program of language program Degree",
      major: "Chinese",
      degree: "Language Program",
      city: "Anhui",
      deadline: "2025/5/30",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;  // Type casting to HTMLFormElement
  
    // Collect all form data
    const formData = new FormData(form);
    const formDetails = {
      name: formData.get("name"),
      email: formData.get("email"),
      mobileNumber: formData.get("mobileNumber"),
      whatsappNumber: formData.get("whatsappNumber"),
      gender: formData.get("gender"),
      date: formData.get("date"),
      education: formData.get("education"),
      occupation: formData.get("occupation"),
      country: formData.get("country"),
      religion: formData.get("religion"),
      fatherName: formData.get("fatherName"),
      fatherOccupation: formData.get("fatherOccupation"),
      message: formData.get("message"),
    };
  
    const mailtoLink = `mailto:premiumpathways78@gmail.com?subject=New Admission Form Submission&body=${encodeURIComponent(
      JSON.stringify(formDetails, null, 2)
    )}`;
  
    // Open the user's default mail client
    window.location.href = mailtoLink;
  };

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
                  className="w-full bg-navy-blue text-white py-2 px-4 rounded-md hover:bg-purple-800 bg-blue-800 active:scale-95 transition-transform"
                  onClick={toggleModal}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal Form */}
      {isModalOpen && (
  <div
    className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
    onClick={toggleModal}
  >
    <form
      className="bg-white p-6 text-black rounded-lg shadow-lg max-w-4xl w-full space-y-3 overflow-auto"
      onSubmit={handleSubmit}
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-xl font-bold mb-4">Admission Form</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-2 border rounded"
            placeholder="Full Name"
          />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 border rounded"
            placeholder="Email"
          />
        </div>

        <div>
          <label className="block mb-1">Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            required
            className="w-full p-2 border rounded"
            placeholder="Mobile Number"
          />
        </div>

        <div>
          <label className="block mb-1">WhatsApp Number</label>
          <input
            type="text"
            name="whatsappNumber"
            required
            className="w-full p-2 border rounded"
            placeholder="WhatsApp Number"
          />
        </div>

        <div>
          <label className="block mb-1">Gender</label>
          <select
            name="gender"
            required
            className="w-full p-2 border rounded"
          >
            <option value="">Please Choose Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">Date of Birth</label>
          <input
            type="date"
            name="date"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Education Qualification</label>
          <input
            type="text"
            name="education"
            required
            className="w-full p-2 border rounded"
            placeholder="Education Qualification"
          />
        </div>

        <div>
          <label className="block mb-1">Occupation</label>
          <input
            type="text"
            name="occupation"
            required
            className="w-full p-2 border rounded"
            placeholder="Occupation"
          />
        </div>

        <div>
          <label className="block mb-1">Select Country</label>
          <select
            name="country"
            required
            className="w-full p-2 border rounded"
          >
            <option value="Afghanistan">Afghanistan</option>
            {/* Add more countries as needed */}
          </select>
        </div>

        <div>
          <label className="block mb-1">Select Religion</label>
          <select
            name="religion"
            required
            className="w-full p-2 border rounded"
          >
            <option value="African Traditional & Diasporic">
              African Traditional & Diasporic
            </option>
            {/* Add more religions as needed */}
          </select>
        </div>

        <div>
          <label className="block mb-1">Father&apos;s Name</label>
          <input
            type="text"
            name="fatherName"
            required
            className="w-full p-2 border rounded"
            placeholder="Father's Name"
          />
        </div>

        <div>
          <label className="block mb-1">Father&apos;s Occupation</label>
          <input
            type="text"
            name="fatherOccupation"
            required
            className="w-full p-2 border rounded"
            placeholder="Father's Occupation"
          />
        </div>

        <div className="col-span-2">
          <label className="block mb-1">Message</label>
          <textarea
            name="message"
            required
            className="w-full p-2 border rounded"
            placeholder="Message"
            rows={3} 
          />
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-4">
        <button
          type="button"
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
          onClick={toggleModal}
        >
          Close
        </button>
        <button
          type="submit"
          className="bg-blue-800 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
)}


      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

