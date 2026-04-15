"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header({ language, setLanguage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const translations = {
    en: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
    },
    am: {
      home: "ዋና ገጽ",
      about: "ስለ እኛ",
      services: "አገልግሎቶች",
      contact: "ግንኙነት",
    },
    om: {
      home: "Muka",
      about: "Waa'uu Keenya",
      services: "Tajaajiloota",
      contact: "Quunnamtii",
    },
  };

  const t = translations[language];

  return (
    <header className="bg-[#0b47a8] text-white shadow-xl sticky top-0 z-50 border-b border-[#c5a044]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Singetan Logo"
              className="h-16 w-16 object-contain rounded-full border-2 border-[#c5a044]"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold tracking-tight">SINGETAN</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#c5a044] font-bold">
                Business Group
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 items-center font-medium">
            <a href="#" className="hover:text-[#c5a044] transition">
              Home
            </a>
            <a href="#about" className="hover:text-[#c5a044] transition">
              About
            </a>
            <a href="#services" className="hover:text-[#c5a044] transition">
              Services
            </a>
            <a href="#contact" className="hover:text-[#c5a044] transition">
              Contact
            </a>
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center gap-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-[#083681] text-white px-3 py-2 rounded text-sm border border-[#c5a044] outline-none"
            >
              <option value="en">English</option>
              <option value="am">አማርኛ</option>
              <option value="om">Afaan Oromo</option>
            </select>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3 border-t border-slate-700 pt-4">
            <a href="#home" className="hover:text-teal-400 transition block">
              {t.home}
            </a>
            <a href="#about" className="hover:text-teal-400 transition block">
              {t.about}
            </a>
            <a
              href="#services"
              className="hover:text-teal-400 transition block"
            >
              {t.services}
            </a>
            <a href="#contact" className="hover:text-teal-400 transition block">
              {t.contact}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
