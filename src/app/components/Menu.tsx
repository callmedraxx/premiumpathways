import { useState } from "react";

interface MenuProps {
  isMobile: boolean;
  toggleMenu?: () => void;
}

const Menu = ({ isMobile, toggleMenu }: MenuProps) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menuItems = [
    { href: "/", label: "Home" },
    {
      href: "#Universities",
      label: "Universities",
      submenu: [
        { href: "../Universities/Search", label: "Search for Universities" },
        { href: "../Universities/Majors", label: " University Majors" },
        { href: "../Universities/Cities", label: "Popular Cities" },
        { href: "../Universities/Top", label: "Top Universities" },
      ],
    },
    {
      href: "#Scholarships",
      label: "Scholarships",
      submenu: [
        { href: "../Scholarships/Bachelors", label: "Bachelors Scholarships" },
        { href: "../Scholarships/Masters", label: "Masters Scholarships" },
        { href: "../Scholarships/Phd", label: "PhD Scholarships" },
        { href: "../Scholarships/NonD", label: "Non Degree Scholarships" },
      ],
    },
    {
      href: "#Services",
      label: "Student Services",
      submenu: [
        { href: "Services/Procedures/", label: "Applying Procedures" },
        { href: "Services/Exclusive/", label: "Exclusive Services" },
        { href: "Services/Stories/", label: "Foreign Student Stories" },
        { href: "Services/FAQ/", label: "FAQ" },
        { href: "Services/Cost/", label: "Cost Description" },
      ],
    },
    { href: "Tour/", label: "Study Tour" },
    {
      href: "#About",
      label: "About Us",
      submenu: [
        { href: "About/Contact/", label: "Contact Us" },
        { href: "About/Exhibition/", label: "Exhibition" },
        { href: "About/Business/", label: "Business Cooperation" },
        { href: "About/CaseStudy/", label: "Case Study" },
        { href: "About/Testimonials/", label: "Testimonials" },
      ],
    },
  ];

  const toggleSubMenu = (label: string) => {
    setActiveMenu(activeMenu === label ? null : label);
  };

  return (
    <nav
      className={`${
        isMobile ? "flex flex-col bg-black shadow-lg" : "flex space-x-6"
      }`}
    >
      <ul className={`${isMobile ? "space-y-4 py-4" : "flex"}`}>
        {menuItems.map((item) => (
          <li key={item.href} className="relative group">
            {/* Main Menu Item */}
            <div
              className={`flex items-center justify-between ${
                isMobile ? "w-full px-4 py-2" : "px-6 py-1"
              } hover:bg-gray-100 transition cursor-pointer`}
              onClick={
                item.submenu ? () => toggleSubMenu(item.label) : toggleMenu
              }
            >
              <a
                href={item.href}
                className="text-white hover:text-purple-600 flex-grow"
                onClick={item.submenu ? (e) => e.preventDefault() : toggleMenu}
              >
                {item.label}
              </a>
              {item.submenu && (
                <i
                  className={`fas fa-chevron-down transition-transform ${
                    activeMenu === item.label ? "rotate-180" : ""
                  }`}
                ></i>
              )}
            </div>

            {/* Submenu */}
            {item.submenu && activeMenu === item.label && (
              <ul
                className={`${
                  isMobile ? "space-y-2 py-2" : "absolute px-2 left-0 mt-2 border-b border-black"
                } bg-white shadow-lg rounded`}
              >
                {item.submenu.map((subItem) => (
                  <li key={subItem.href}>
                    <a
                      href={subItem.href}
                      className="block px-6 py-2 border-b border-gray-300 text-black hover:text-purple-600 hover:bg-gray-100 transition"
                      onClick={toggleMenu}
                    >
                      {subItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;


  