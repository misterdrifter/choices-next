"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/92 backdrop-blur-md shadow-[0_1px_32px_rgba(97,0,125,0.10)]"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="w-full px-6 md:px-12 lg:px-16 h-16 md:h-20 flex items-center justify-between">
        <a href="/" className="flex-shrink-0">
          <img
            src="/images/logo-full.png"
            alt="Choices"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </a>

        <div className="hidden md:flex items-center gap-2">
          {[
            { label: "Services", href: "/services" },
            { label: "How it works", href: "/how-it-works" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map(({ label, href }) => {
            const active = pathname === href;
            return (
              <a
                key={label}
                href={href}
                className={`text-[15px] font-medium px-3 py-1.5 rounded-lg transition-all duration-200 ${
                  active
                    ? "text-[#61007d] font-semibold bg-[#61007d]/8"
                    : "text-[#5c4b6e] hover:text-[#61007d] hover:bg-[#61007d]/5"
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>

        <div className="hidden md:block">
          <a
            href="/contact"
            className="bg-[#61007d] text-white text-[14px] font-bold px-5 py-2.5 rounded-xl shadow-[0_2px_12px_rgba(97,0,125,0.32)] hover:bg-[#7a009e] hover:shadow-[0_4px_20px_rgba(97,0,125,0.40)] hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98] inline-block"
          >
            Book a free consultation
          </a>
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden p-2 text-[#61007d]"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white border-t border-[#eae0f5]"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {[
                { label: "Services", href: "/services" },
                { label: "How it works", href: "/how-it-works" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => {
                const active = pathname === href;
                return (
                  <a
                    key={label}
                    href={href}
                    className={`text-[15px] font-medium transition-colors duration-200 ${
                      active ? "text-[#61007d] font-semibold" : "text-[#5c4b6e] hover:text-[#61007d]"
                    }`}
                  >
                    {label}
                  </a>
                );
              })}
              <a
                href="/contact"
                className="mt-2 bg-[#61007d] text-white text-[14px] font-bold px-5 py-3 rounded-xl shadow-[0_2px_12px_rgba(97,0,125,0.32)] text-center block"
              >
                Book a free consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
