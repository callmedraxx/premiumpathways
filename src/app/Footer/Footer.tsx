"use client";

import Image from 'next/image';


const Footer = ({ height = "auto" }) => {
  return (
    <footer className="bg-black text-white w-full" style={{ height: height }}>
      {/* Content */}
      <div className="container  mx-auto px-2 py-8 grid md:grid-cols-3 gap-8 flex items-center justify-center">
        {/* Business Info */}
        <div className="pl-10">
          <Image
            src="/img/prem.png"
            alt="prem logo"
            className="mb-4"
            width={200}
            height={200}
          />
          <p>F/1202, Tower A, Lippo Plaza</p>
          <p>Yizhuang Economic-Tech Development Area</p>
          <p>Beijing, China</p>
          <p>Whatsapp: +1868-318-1079</p>
          <p>Email: premiumpathways78@gmail.com</p>
        </div>

        {/* Important Links */}
        <div className="ml-10">
          <h3 className="text-lg font-semibold mb-4">Important Links</h3>
          <ul>
            <li>
              <a href="#about" className="hover:text-purple-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-purple-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-400 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-purple-400 transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Find a City, Store Icons, and Social Media Links */}
        <div className="ml-10">
          <h3 className="text-lg font-semibold mb-4">Find Cities</h3>
          <ul className="mb-4">
            <li>
              <a href="#beijing" className="hover:text-purple-400 transition">
                Beijing
              </a>
            </li>
            <li>
              <a href="#shanghai" className="hover:text-purple-400 transition">
                Shanghai
              </a>
            </li>
            <li>
              <a href="#guangzhou" className="hover:text-purple-400 transition">
                Guangzhou
              </a>
            </li>
          </ul>
          <div className="flex gap-4">
            <a href="#">
              <Image src="/img/facebook.png" alt="Facebook" width={30} height={30} />
            </a>
            <a href="#">
              <Image src="/img/x.png" alt="Twitter" width={30} height={30} />
            </a>
            <a href="#">
              <Image src="/img/youtube.png" alt="YouTube" width={30} height={30} />
            </a>
          </div>
        </div>


        
      </div>

      {/* Trademark and Copyright */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4 text-sm">
        &copy; {new Date().getFullYear()} Premium Pathways. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;



  
  
  
  