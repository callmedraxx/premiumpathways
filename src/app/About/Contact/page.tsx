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

  const handleSendEmail = () => {
    const { name, email, phone, message } = formData;
    const subject = `Contact Request from ${name}`;
    const body = `Hi,\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    window.location.href = `mailto:premiumpathways78@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 p-8 mt-20 sm:p-20 bg-gradient-to-r from-indigo-100 to-purple-200">
        {/* Map Section */}
        <div className="w-full mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26245.472539801867!2d116.36357160000001!3d39.91217285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f0529d7f5f9c53%3A0x6b8b3dfbb8302c0!2sBeijing%2C%20China!5e0!3m2!1sen!2sus!4v1688656309834!5m2!1sen!2sus"
            width="100%"
            height="300"
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>

        {/* Form and Address Section */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Form */}
          <div className="w-full md:w-1/2 bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-3xl font-bold mb-6 text-center text-purple-700">Get in Touch</h3>
            <form className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="text-purple-600">
                  <i className="fas fa-user"></i>
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="flex-1 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-600">
                  <i className="fas fa-phone-alt"></i>
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="flex-1 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-600">
                  <i className="fas fa-envelope"></i>
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="flex-1 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-600 mt-2">
                  <i className="fas fa-comment-dots"></i>
                </span>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="flex-1 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <button
                type="button"
                onClick={handleSendEmail}
                className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Address */}
          <div className="w-full md:w-1/2 p-8 bg-gradient-to-br from-purple-600 to-indigo-500 text-white rounded-xl shadow-lg">
            <h3 className="text-2xl font-extrabold mb-6 text-center">📍 Our Address</h3>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="bg-white text-purple-600 rounded-full p-3 shadow-md">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <div>
                  <p className="text-lg font-semibold">Premium Pathways</p>
                  <p className="text-sm">Beijing Road, Beijing, China</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-white text-purple-600 rounded-full p-3 shadow-md">
                  <i className="fas fa-envelope"></i>
                </span>
                <div>
                  <p className="text-lg font-semibold">Email</p>
                  <p className="text-sm">premiumpathways78@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
  <span className="bg-white text-purple-600 rounded-full p-3 shadow-md">
    <i className="fas fa-envelope"></i>
  </span>
  <div>
    <p className="text-lg font-semibold">Instagram</p>
    <p className="text-sm font-semibold">
      <a
        href="https://www.instagram.com/premiumpathways1/profilecard/?igsh=MXN0aTR0YmpkbXFtag=="
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:underline"
      >
        premiumpathways1
      </a>
    </p>
    
  </div>
</div>

              <div className="flex items-center gap-4">
                <span className="bg-white text-purple-600 rounded-full p-3 shadow-md">
                  <i className="fab fa-whatsapp"></i>
                </span>
                <div>
                  <p className="text-lg font-semibold">Whatsapp</p>
                  <p className="text-sm">+18683181079</p>
                </div>
              </div>
            </div>
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

