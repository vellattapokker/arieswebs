import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 flex items-center ${
        scrolled ? "bg-white shadow-sm h-16" : "bg-transparent h-20"
      }`}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="text-xl font-bold flex items-center gap-1">
          <img 
            src={logo} 
            alt="Aries" 
            className={`transition-all duration-300 ${scrolled ? "h-10" : "h-12"}`}
          />
          <div className="pt-1">
            <span className="text-gradient">Aries</span>
            <span className={`font-bold transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>webs</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs font-black uppercase tracking-[0.3em] transition-all ${scrolled ? 'text-slate-900 hover:text-cyan-600' : 'text-white hover:opacity-80'}`}
            >
              {link.name}
            </a>
          ))}
          <button className={`btn btn-sm ml-6 px-6 py-2 rounded-none border text-[10px] font-black tracking-[0.4em] transition-all duration-300 ${scrolled ? 'bg-slate-900 text-white hover:bg-black border-slate-900' : 'btn-primary border-white/10'}`}>
            BRIEF_US
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden transition-colors ${scrolled ? 'text-slate-900' : 'text-white hover:text-cyan-400'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#050505]/95 backdrop-blur-md border-t border-white/5">
          <div className="flex flex-col p-8 gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-black uppercase tracking-[0.4em] text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="btn w-full justify-center rounded-none font-black tracking-[0.4em] bg-white text-black hover:bg-slate-200 transition-colors">
              BRIEF_US
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
