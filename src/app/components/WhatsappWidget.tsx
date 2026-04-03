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
      className="fixed bottom-5 left-5 z-50 flex items-center justify-center rounded-2xl bg-[#25D366] p-3 text-white shadow-lg shadow-slate-900/25 transition hover:bg-[#20bd5a] hover:shadow-xl"
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
