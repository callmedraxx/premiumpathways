"use client";

import Image from 'next/image';

const Footer = ({ height = "auto" }) => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white w-full" style={{ height: height }}>
      {/* Content */}
      <div className="container mx-auto px-12 pt-5 grid md:grid-cols-3 gap-12">
        {/* Business Info */}
        <div>
          <Image
            src="/img/prem.png"
            alt="Premium Pathways Logo"
            className="mb-6"
            width={200}
            height={200}
          />
          <p className="text-sm mb-2">F/1202, Tower A, Lippo Plaza</p>
          <p className="text-sm mb-2">Yizhuang Economic-Tech Development Area</p>
          <p className="text-sm mb-2">Beijing, China</p>
          <p className="text-sm mb-2">WhatsApp: +1868-318-1079</p>
          <p className="text-sm">Email: <a href="mailto:premiumpathways78@gmail.com" className="hover:text-purple-400 transition">premiumpathways78@gmail.com</a></p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Important Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="../About/Contact" className="hover:text-purple-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="../Services/FAQ" className="hover:text-purple-400 transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="../Scholarships/Bachelors" className="hover:text-purple-400 transition">
                Scholarships
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-purple-400 transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Find Cities and Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-4">Find Us in Cities</h3>
          <ul className="space-y-2 mb-6">
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

          <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:scale-110 transition">
              <Image src="/img/facebook.png" alt="Facebook" width={30} height={30} />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <Image src="/img/x.png" alt="Twitter" width={30} height={30} />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <Image src="/img/youtube.png" alt="YouTube" width={30} height={30} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className=" bg-gray-800 mt-8 border-t border-gray-700">
        <p className="text-center text-sm py-4">
          &copy; {new Date().getFullYear()} Premium Pathways. All rights reserved. 
          <span className="ml-2 text-purple-400 font-semibold">Built with ❤️.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;




  
  
  
  