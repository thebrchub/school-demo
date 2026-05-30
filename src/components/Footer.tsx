import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 lg:py-20 border-t border-slate-900 relative overflow-hidden">
      
      {/* Subtle Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-2 lg:col-span-4 pr-0 lg:pr-8">
            <a href="#home" className="inline-block mb-8 group">
              <img 
                src="/logo.svg" 
                alt="Westbridge International School" 
                className="h-10 lg:h-28 w-auto group-hover:scale-105 transition-transform duration-300 brightness-0 invert opacity-90 group-hover:opacity-100" 
              />
            </a>
            
            <p className="text-slate-400 text-base leading-relaxed mb-8 font-medium">
              Shaping future generations through academic excellence, unshakeable values, and observation-based learning. Building tomorrow's leaders, today.
            </p>
          </div>

          {/* Wrapper Grid to force Side-by-Side on Mobile */}
          {/* FIXED: Added lg:mt-8 to push this down on desktop to align with the left column */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-4 lg:col-start-6 lg:mt-8">
            
            {/* Quick Links */}
            <div>
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
            <div>
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
            
          </div>

          {/* Contact Information */}
          {/* FIXED: Added lg:mt-8 to align with the middle block on desktop */}
          <div className="lg:col-span-3 lg:mt-8">
            <h3 className="text-white font-bold text-lg mb-6 tracking-tight">Contact Us</h3>
            <ul className="space-y-5 text-sm font-medium text-slate-400">
              <li className="flex items-start gap-3 group">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0 group-hover:text-amber-400 transition-colors" />
                <span className="leading-relaxed">
                  142 Westbridge Manor, Kensington,<br />
                  London W8 5TT, United Kingdom
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="h-5 w-5 text-blue-500 shrink-0 group-hover:text-amber-400 transition-colors" />
                <span className="text-white group-hover:text-amber-400 transition-colors">+44 20 7946 0123</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="h-5 w-5 text-blue-500 shrink-0 group-hover:text-amber-400 transition-colors" />
                <a href="mailto:admissions@westbridge.edu" className="hover:text-amber-400 transition-colors break-all">
                  admissions@westbridge.edu
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 text-sm flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Westbridge International School. All rights reserved.</p>
          
          {/* FIXED: Replaced default links with Agency Credit */}
          <div className="flex gap-6">
            <p>
              Designed and developed by  {'  '}
              <a href="https://www.brchub.tech" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-400 font-bold transition-colors">
  BRC HUB LLP
</a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;