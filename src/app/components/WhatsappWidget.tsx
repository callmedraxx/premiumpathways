import React from "react";
import Image from "next/image";

const WhatsAppWidget = ({ phoneNumber = "+18683181079", message = "Hello! I would like to Enquire about your services" }) => {
  // Generate the WhatsApp link
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center z-50 transition"
      aria-label="Chat on WhatsApp"
    >
      {/* Add WhatsApp icon */}
      <Image
        src="/img/whatsapp.png" // Replace with your WhatsApp icon
        alt="WhatsApp"
        width={40}
        height={40}
      />
    </a>
  );
};

export default WhatsAppWidget;
