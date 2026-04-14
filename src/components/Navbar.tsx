import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Infrastructure', href: '#infrastructure' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Gallery', href: '#gallery' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.06)] py-3' : 'bg-transparent py-5 lg:py-8'}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="bg-blue-900 p-2.5 rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-300">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-extrabold text-blue-900 leading-tight tracking-tight">Priya Cement</h1>
              <p className="text-[0.65rem] text-slate-500 font-bold tracking-widest uppercase">High School</p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="relative text-sm font-bold text-slate-600 hover:text-blue-900 transition-colors group py-2"
              >
                {link.name}
                {/* Sliding underline hover effect */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </div>

          {/* Contact / CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            <a href="#contact" className="group flex items-center gap-2 px-6 py-2.5 bg-blue-900 text-white text-sm font-bold rounded-xl hover:bg-blue-800 transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-900/20">
              Enroll Now
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-900 p-2 rounded-lg hover:bg-slate-100 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-4 pb-8 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-bold text-slate-700 hover:text-blue-900 hover:bg-slate-50 rounded-xl transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-4">
            <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full gap-2 px-6 py-3.5 bg-blue-900 text-white text-base font-bold rounded-xl shadow-lg shadow-blue-900/20"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;