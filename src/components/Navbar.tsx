"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = (targetElement as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030014]/70 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:scale-105 transition-transform duration-300">
                <span className="font-bold text-white text-lg">A</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white group-hover:text-violet-400 transition-colors duration-300">
                Aura
              </span>
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 px-4 py-2">
              Log in
            </button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full" />
              <span className="relative block px-5 py-2.5 rounded-full bg-slate-950 text-sm font-medium text-white transition-colors duration-300 group-hover:bg-transparent">
                <span className="flex items-center gap-1">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white focus:outline-none p-1.5"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#030014]/95 border-b border-white/5 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block text-base font-medium text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/5 flex flex-col gap-3 px-3">
                <button className="text-center w-full py-2.5 text-slate-300 hover:text-white font-medium hover:bg-white/5 rounded-lg transition-colors">
                  Log in
                </button>
                <button className="text-center w-full py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium rounded-lg hover:from-violet-500 hover:to-indigo-500 transition-all shadow-lg shadow-violet-500/20">
                  Start Free Trial
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
