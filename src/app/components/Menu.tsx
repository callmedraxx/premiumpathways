"use client";

import Link from "next/link";

import { NAV } from "../lib/nav";


interface MenuProps {
  isMobile: boolean;
  toggleMenu?: () => void;
}

/* Desktop: hover and keyboard-focus dropdowns, no click state to get stuck.
   Mobile: the whole map at once, grouped, because a phone menu that needs
   three taps to reach "Contact" is a phone menu nobody finishes. */
const Menu = ({ isMobile, toggleMenu }: MenuProps) => {
  if (isMobile) {
    return (
      <nav aria-label="Main" className="px-5 pb-8 pt-2">
        <Link href="/" onClick={toggleMenu} className="block py-3 font-display text-2xl font-semibold text-chalk">
          Home
        </Link>
        <div className="mt-2 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {NAV.map((g) => (
            <div key={g.label}>
              <p className="meta mb-2">{g.label}</p>
              <ul className="divide-y divide-chalk/10">
                {g.items.map((it) => (
                  <li key={it.href}>
                    <Link href={it.href} onClick={toggleMenu} className="block py-3 text-lg text-chalk/90 transition hover:text-ember">
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Link href="/About/Contact" onClick={toggleMenu} className="btn-ember mt-8 w-full">
          Talk to an advisor
        </Link>
      </nav>
    );
  }

  return (
    <nav aria-label="Main">
      <ul className="flex items-center gap-1">
        {NAV.map((g) => (
          <li key={g.label} className="group relative">
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[0.92rem] font-medium text-chalk/85 transition hover:bg-chalk/[0.06] hover:text-chalk group-focus-within:bg-chalk/[0.06]"
              aria-haspopup="true"
            >
              {g.label}
              <i className="fas fa-chevron-down text-[9px] text-chalk/45 transition group-hover:rotate-180" aria-hidden />
            </button>
            <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition duration-200 ease-out group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <ul className="panel-solid min-w-[14rem] p-1.5 shadow-lift">
                {g.items.map((it) => (
                  <li key={it.href}>
                    <Link href={it.href} className="block rounded-xl px-3.5 py-2.5 text-sm text-chalk/85 transition hover:bg-chalk/[0.06] hover:text-chalk">
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
