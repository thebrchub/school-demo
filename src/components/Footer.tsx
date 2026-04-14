import { GraduationCap, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 lg:py-20 border-t border-slate-900 relative overflow-hidden">
      
      {/* Subtle Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column (Takes up more space) */}
          <div className="lg:col-span-4 pr-0 lg:pr-8">
            <a href="#home" className="flex items-center gap-3 group mb-6 inline-flex">
              <div className="bg-blue-600 p-2.5 rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-300">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-white leading-tight tracking-tight">Priya Cement</h2>
                <p className="text-[0.65rem] text-amber-400 font-bold tracking-widest uppercase">High School</p>
              </div>
            </a>
            
            <p className="text-slate-400 text-base leading-relaxed mb-8 font-medium">
              Shaping future generations through academic excellence, unshakeable values, and observation-based learning. Building tomorrow's leaders, today.
            </p>
            
            {/* Elevated Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 shadow-sm">
                <FaFacebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 shadow-sm">
                <FaXTwitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white hover:border-pink-500 hover:-translate-y-1 transition-all duration-300 shadow-sm">
                <FaInstagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-blue-700 hover:text-white hover:border-blue-600 hover:-translate-y-1 transition-all duration-300 shadow-sm">
                <FaLinkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-white font-bold text-lg mb-6 tracking-tight">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Achievements', 'Gallery'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="group flex items-center text-slate-400 hover:text-amber-400 transition-colors font-medium text-sm">
                    <ChevronRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-amber-500" />
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-6 tracking-tight">Academics</h3>
            <ul className="space-y-4">
              {['Infrastructure', 'Our Faculty', 'Admissions', 'Curriculum'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="group flex items-center text-slate-400 hover:text-amber-400 transition-colors font-medium text-sm">
                    <ChevronRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-amber-500" />
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-lg mb-6 tracking-tight">Contact Us</h3>
            <ul className="space-y-5 text-sm font-medium text-slate-400">
              <li className="flex items-start gap-3 group">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0 group-hover:text-amber-400 transition-colors" />
                <span className="leading-relaxed">Sreepuram, Boincheruvupalli,<br />Andhra Pradesh</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="h-5 w-5 text-blue-500 shrink-0 group-hover:text-amber-400 transition-colors" />
                <span className="text-white group-hover:text-amber-400 transition-colors">7815957459</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="h-5 w-5 text-blue-500 shrink-0 group-hover:text-amber-400 transition-colors" />
                <a href="mailto:priyacemenths@gmail.com" className="hover:text-amber-400 transition-colors">
                  priyacemenths@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 text-sm flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Priya Cement High School. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;