"use client";

import { useState } from "react";
import Menu from "@/app/components/Menu";
import Image from 'next/image';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 bg-gradient-to-r from-black via-gray-900 to-black  w-full shadow-md z-50">
      <div className="flex items-center justify-between px-4 py-2 md:px-8">
        {/* Logo */}
        <div className="px-6 py-2">
        <Image src="/img/prem.png" 
        alt="prem logo"
        width={120}
        height={50}
        className="w-24 h-16 sm:w-32 sm:h-20 md:w-32 md:h-20"
        
        />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-8 h-8"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <div
            className={`w-6 h-0.5 bg-white mb-1 transform transition duration-300 ${
              menuOpen ? "rotate-45 translate-y-1" : "hover:bg-gray-600"
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white mb-1 transition duration-300 ${
              menuOpen ? "opacity-0" : "hover:bg-gray-600"
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transform transition duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1" : "hover:bg-gray-600"
            }`}
          ></div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <Menu isMobile={false} />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden">
          <Menu isMobile={true} toggleMenu={toggleMenu} />
        </div>
      )}
    </header>
  );
};

export default Header;


