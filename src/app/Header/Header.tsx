"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Menu from "@/app/components/Menu";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setSolid(y > 24));

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top,0px)]">
      <div
        className={`transition-colors duration-500 ${
          solid || open ? "border-b border-chalk/[0.07] bg-night-950/80 backdrop-blur-xl" : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8">
          <Link href="/" className="flex shrink-0 items-center" onClick={() => setOpen(false)} aria-label="Premium Pathways home">
            <Image src="/img/prem.png" alt="Premium Pathways" width={140} height={76} priority className="h-12 w-auto md:h-[3.4rem]" />
          </Link>

          <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:gap-4">
            <Menu isMobile={false} />
            <Link href="/About/Contact" className="btn-ember !px-5 !py-2.5 text-sm">
              Talk to an advisor
            </Link>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-chalk/15 bg-night-900/60 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="relative flex h-3 w-5 flex-col justify-between">
              <span className={`block h-[1.5px] w-full rounded-full bg-chalk transition-transform duration-300 ${open ? "translate-y-[5.5px] rotate-45" : ""}`} />
              <span className={`block h-[1.5px] w-full rounded-full bg-chalk transition-transform duration-300 ${open ? "-translate-y-[5.5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-b border-chalk/10 bg-night-950/95 backdrop-blur-xl md:hidden"
          >
            <Menu isMobile toggleMenu={() => setOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
