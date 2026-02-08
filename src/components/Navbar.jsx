import React, { useState } from "react";
import hupLogo from "../assets/hup.PNG";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Schedule", href: "#schedule" },
    { name: "Prizes", href: "#prizes" },
    { name: "Tracks", href: "#tracks" },
    { name: "Rules", href: "#rules" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav className="
        fixed top-3 sm:top-4 md:top-6 left-1/2 -translate-x-1/2
        w-[95%] sm:w-[90%] md:w-[85%] lg:w-[1000px] h-14 sm:h-16 md:h-20
        bg-white/95 backdrop-blur-md rounded-full
        pl-1 sm:pl-2 pr-2 sm:pr-4 md:pr-10
        flex items-center justify-between
        shadow-[0_12px_30px_rgba(0,0,0,0.15)]
        z-[999]
        font-['Host_Grotesk']
      ">
        {/* Logo Group */}
        <div className="flex items-center -ml-3 sm:-ml-4 md:-ml-5">
          <img src={hupLogo} alt="HackUp" className="h-12 sm:h-14 md:h-18 lg:h-20 w-auto object-contain" />
        </div>

        {/* Desktop Links - visible on tablets and above */}
        <div className="hidden md:flex gap-4 lg:gap-6 xl:gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[9px] md:text-[10px] lg:text-[11px] xl:text-[13px] font-bold uppercase tracking-widest text-neutral-500 hover:text-yellow-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button - only visible on mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-9 sm:w-10 h-9 sm:h-10 flex flex-col items-center justify-center gap-1 sm:gap-1.5 bg-neutral-100 rounded-full"
        >
          <div className={`w-4 sm:w-5 h-0.5 bg-neutral-900 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-4 sm:w-5 h-0.5 bg-neutral-900 transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <div className={`w-4 sm:w-5 h-0.5 bg-neutral-900 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu Overlay - only on mobile */}
      <div className={`
        fixed inset-0 z-[998] bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-300
        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `} onClick={() => setIsOpen(false)} />

      {/* Mobile Menu Content - only on mobile */}
      <div className={`
        fixed top-20 sm:top-24 left-3 sm:left-4 right-3 sm:right-4 z-[999] md:hidden 
        bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-md mx-auto shadow-2xl transition-all duration-300
        ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-4 opacity-0 invisible'}
      `}>
        <div className="flex flex-col gap-4 sm:gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base sm:text-lg md:text-xl font-bold uppercase tracking-widest text-neutral-800 hover:text-yellow-600 transition-colors"
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
