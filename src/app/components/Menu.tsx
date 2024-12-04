import { useState } from "react";

interface MenuProps {
  isMobile: boolean;
  toggleMenu?: () => void;
}

const Menu = ({ isMobile, toggleMenu }: MenuProps) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menuItems = [
    { href: "#Home", label: "Home" },
    {
      href: "#Universities",
      label: "Universities",
      submenu: [
        { href: "#Uni1", label: "Search for Universities" },
        { href: "#Uni2", label: " University Majors" },
        { href: "#Uni2", label: "Popular Cities" },
        { href: "#Uni2", label: "Top Universities" },
      ],
    },
    {
      href: "#Scholarships",
      label: "Scholarships",
      submenu: [
        { href: "#Scholarship1", label: "Bachelors Scholarships" },
        { href: "#Scholarship2", label: "Masters Scholarships" },
        { href: "#Scholarship2", label: "PhD Scholarships" },
        { href: "#Scholarship2", label: "Non Degree Scholarships" },
      ],
    },
    {
      href: "#Services",
      label: "Student Services",
      submenu: [
        { href: "#Service1", label: "Applying Procedures" },
        { href: "#Service2", label: "Exclusive Services" },
        { href: "#Service2", label: "Foreign Student Stories" },
        { href: "#Service2", label: "FAQ" },
        { href: "#Service2", label: "Cost Description" },
      ],
    },
    { href: "#Tour", label: "Study Tour" },
    {
      href: "#About",
      label: "About Us",
      submenu: [
        { href: "#Mission", label: "Contact Us" },
        { href: "#Team", label: "Exhibition" },
        { href: "#Service2", label: "Business Cooperation" },
        { href: "#Service2", label: "Case Study" },
        { href: "#Service2", label: "Testimonials" },
      ],
    },
  ];

  const toggleSubMenu = (label: string) => {
    setActiveMenu(activeMenu === label ? null : label);
  };

  return (
    <nav
      className={`${
        isMobile ? "flex flex-col bg-white shadow-lg" : "flex space-x-6"
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


  