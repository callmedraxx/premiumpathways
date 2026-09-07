import React from "react";

const WhatsAppWidget = ({
  phoneNumber = "+18683181079",
  message = "Hello! I would like to enquire about your services.",
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with an advisor on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 sm:left-5 sm:right-auto flex items-center overflow-hidden rounded-full border border-chalk/10 bg-night-900/85 shadow-lift backdrop-blur-md transition-all duration-300 ease-out hover:pr-5"
    >
      <span className="flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center">
        <i className="fab fa-whatsapp text-[1.55rem] text-[#3fd36f]" aria-hidden />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium text-chalk opacity-0 transition-all duration-300 group-hover:max-w-xs group-hover:opacity-100">
        Chat with an advisor
      </span>
    </a>
  );
};

export default WhatsAppWidget;
