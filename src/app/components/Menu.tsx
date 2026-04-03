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
        { href: "/Universities/Search", label: "Search for universities" },
        { href: "/Universities/Majors", label: "University majors" },
        { href: "/Universities/Cities", label: "Popular cities" },
        { href: "/Universities/Top", label: "Top universities" },
      ],
    },
    {
      href: "#Scholarships",
      label: "Scholarships",
      submenu: [
        { href: "/Scholarships/Bachelors", label: "Bachelors scholarships" },
        { href: "/Scholarships/Masters", label: "Masters scholarships" },
        { href: "/Scholarships/Phd", label: "PhD scholarships" },
        { href: "/Scholarships/NonD", label: "Non-degree scholarships" },
      ],
    },
    {
      href: "#Services",
      label: "Student services",
      submenu: [
        { href: "/Services/Procedures", label: "Applying procedures" },
        { href: "/Services/FAQ", label: "FAQ" },
        { href: "/Services/Cost", label: "Cost description" },
      ],
    },
    {
      href: "#About",
      label: "About us",
      submenu: [
        { href: "/About/Contact", label: "Contact us" },
        { href: "/About/Aboutus", label: "About us" },
        { href: "/About/Testimonials", label: "Testimonials" },
      ],
    },
  ];

  const toggleSubMenu = (label: string) => {
    setActiveMenu(activeMenu === label ? null : label);
  };

  return (
    <nav
      className={`${
        isMobile ? "flex flex-col border-t border-white/10 bg-slate-950" : "flex space-x-1 lg:space-x-2"
      }`}
    >
      <ul className={`${isMobile ? "space-y-0 py-2" : "flex items-center"}`}>
        {menuItems.map((item) => (
          <li key={item.href} className="relative group">
            <div
              className={`flex items-center justify-between ${
                isMobile
                  ? "w-full px-4 py-3 hover:bg-white/5"
                  : "rounded-lg px-3 py-2 hover:bg-white/10"
              } cursor-pointer transition`}
              onClick={
                item.submenu ? () => toggleSubMenu(item.label) : toggleMenu
              }
            >
              <a
                href={item.href}
                className="flex-grow text-sm font-medium text-white/90 transition hover:text-white"
                onClick={item.submenu ? (e) => e.preventDefault() : toggleMenu}
              >
                {item.label}
              </a>
              {item.submenu && (
                <i
                  className={`fas fa-chevron-down ml-1 text-xs text-slate-400 transition-transform ${
                    activeMenu === item.label ? "rotate-180" : ""
                  }`}
                />
              )}
            </div>

            {item.submenu && activeMenu === item.label && (
              <ul
                className={`${
                  isMobile
                    ? "space-y-0 border-l-2 border-teal-500/50 py-1 pl-2 ml-4 my-1"
                    : "absolute left-0 top-full z-[60] mt-1 min-w-[14rem] overflow-hidden rounded-xl border border-slate-200/80 bg-white py-1 shadow-xl shadow-slate-900/10"
                }`}
              >
                {item.submenu.map((subItem) => (
                  <li key={subItem.href}>
                    <a
                      href={subItem.href}
                      className={`block px-4 py-2.5 text-sm transition ${
                        isMobile
                          ? "text-slate-300 hover:text-teal-300"
                          : "text-slate-700 hover:bg-teal-50 hover:text-teal-800"
                      }`}
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
