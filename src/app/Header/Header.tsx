"use client";

import { useState } from "react";
import Menu from "@/app/components/Menu";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 z-50 w-full pt-[env(safe-area-inset-top,0px)]">
      {/* Bar: glass + subtle gradient so it merges with hero instead of a hard strip */}
      <div className="border-b border-white/[0.08] bg-gradient-to-b from-slate-950/85 via-slate-950/55 to-slate-950/25 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-slate-950/40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 md:h-[4.25rem]">
          <Link
            href="/"
            className="flex shrink-0 items-center py-1 transition opacity-95 hover:opacity-100"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/img/prem.png"
              alt="Premium Pathways"
              width={140}
              height={56}
              className="h-11 w-auto sm:h-12 md:h-14"
              priority
            />
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 md:hidden"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            <span className="relative flex h-3.5 w-5 flex-col justify-between">
              <span
                className={`block h-0.5 w-full rounded-full bg-white transition-transform ${
                  menuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full rounded-full bg-white transition ${
                  menuOpen ? "scale-0 opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full rounded-full bg-white transition-transform ${
                  menuOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>

          <div className="hidden md:flex md:flex-1 md:justify-end">
            <Menu isMobile={false} />
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="border-b border-white/10 bg-slate-950/95 shadow-lg backdrop-blur-xl md:hidden">
          <Menu isMobile={true} toggleMenu={toggleMenu} />
        </div>
      )}
    </header>
  );
};

export default Header;
