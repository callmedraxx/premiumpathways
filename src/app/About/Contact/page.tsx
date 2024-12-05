"use client";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import WhatsAppWidget from "../../components/WhatsappWidget";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        alert("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 p-8 mt-20 sm:p-20">
        {/* Map Section */}
        <div className="w-full mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26245.472539801867!2d116.36357160000001!3d39.91217285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f0529d7f5f9c53%3A0x6b8b3dfbb8302c0!2sBeijing%2C%20China!5e0!3m2!1sen!2sus!4v1688656309834!5m2!1sen!2sus"
            width="100%"
            height="300"
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>

        {/* Form and Address Section */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Form */}
          <div className="w-full md:w-1/2  p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border p-2 rounded"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="border p-2 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border p-2 rounded"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="border p-2 rounded"
              />
              <button
                type="submit"
                className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Address */}
          <div className="w-full md:w-1/2 p-6 bg-gray-300 shadow-lg">
            <h3 className="text-lg font-bold mb-4">Our Address</h3>
            <p>Premium Pathways</p>
            <p>123 Beijing Road</p>
            <p>Beijing, China</p>
            <p>Email: premiumpathways78@gmail.com</p>
            <p>Whatsapp: +86 83181079</p>
          </div>
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
