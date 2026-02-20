import React, { useState } from "react";
import hupLogo from "../assets/hup.PNG";
import { Link } from "react-router-dom";

const Navbar = ({ isInternalPage = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: isInternalPage ? "/" : "#" },
    { name: "About", href: isInternalPage ? "/#about" : "#about" },
    { name: "Schedule", href: isInternalPage ? "/#schedule" : "#schedule" },
    { name: "Prizes", href: isInternalPage ? "/#prizes" : "#prizes" },
    { name: "Partner", href: isInternalPage ? "/#sponsors" : "#sponsors" },
    { name: "Tracks", href: isInternalPage ? "/#tracks" : "#tracks" },
    { name: "Rules", href: isInternalPage ? "/#rules" : "#rules" },
    { name: "FAQ", href: isInternalPage ? "/#faq" : "#faq" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className="
          fixed top-4 left-1/2 -translate-x-1/2
          w-[95%] max-w-6xl
          bg-white/95 backdrop-blur-md
          rounded-full
          px-6 sm:px-8
          min-h-[64px] max-h-[84px]
          flex items-center justify-between
          shadow-[0_12px_30px_rgba(0,0,0,0.15)]
          z-[999]
        "
      >
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={hupLogo}
            alt="HackUp"
            className="
              h-12 sm:h-14 md:h-16
              w-auto object-contain
              leading-none select-none
              py-1
            "
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                text-xs lg:text-sm
                font-semibold uppercase tracking-widest
                leading-none whitespace-nowrap
                text-neutral-600 hover:text-yellow-600
                transition-colors
              "
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            md:hidden
            w-10 h-10
            flex flex-col items-center justify-center gap-1.5
            bg-neutral-100 rounded-full
            shrink-0
          "
        >
          <span
            className={`block w-5 h-0.5 bg-neutral-900 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""
              }`}
          />
          <span
            className={`block w-5 h-0.5 bg-neutral-900 transition-all ${isOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block w-5 h-0.5 bg-neutral-900 transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
          />
        </button>
      </nav>

      {/* ================= MOBILE OVERLAY ================= */}
      <div
        onClick={() => setIsOpen(false)}
        className={`
          fixed inset-0 bg-black/60 backdrop-blur-sm
          z-[998] md:hidden transition-opacity duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          fixed top-24 left-4 right-4
          max-w-md mx-auto
          bg-white rounded-2xl p-6
          z-[999] md:hidden
          shadow-2xl
          transition-all duration-300
          ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
        `}
      >
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="
                text-base font-bold uppercase tracking-widest
                text-neutral-800 hover:text-yellow-600
                transition-colors
              "
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
