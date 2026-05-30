import { ArrowRight, PlayCircle, Award, BookOpen, CalendarClock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-[#F8FAFC] overflow-hidden pt-28 lg:pt-36 pb-20 lg:pb-32">
      
      {/* Subtle Background Pattern (Graph Paper / Academic Feel) */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content (Takes up 5 columns on desktop) */}
          <div className="lg:col-span-5 text-center lg:text-left mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
            
            {/* Admissions Badge - High Conversion Element */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-sm font-bold uppercase tracking-widest mb-8 shadow-sm">
              <span className="flex h-2.5 w-2.5 rounded-full bg-amber-500 animate-pulse"></span>
              Admissions Open 2026-27
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6 tracking-tight">
              A Foundation for <br className="hidden lg:block" />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-blue-900">Life & Leadership</span>
                {/* Custom underline accent */}
                <span className="absolute bottom-1 left-0 w-full h-3 bg-amber-300/60 -z-10 transform -rotate-1"></span>
              </span>
            </h1>
            
            {/* Subtext */}
            <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed font-medium">
              {/* FIXED: Updated location to London */}
              Westbridge International School empowers students in London through rigorous academics, unshakeable values, and holistic observation-based learning.
            </p>
            
            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-12">
              <a href="#contact" className="group flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto bg-blue-900 text-white rounded-xl font-bold overflow-hidden shadow-lg shadow-blue-900/20 transition-all hover:-translate-y-1 hover:shadow-blue-900/40">
                Enroll Your Child
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="group flex items-center justify-center gap-3 px-8 py-4 w-full sm:w-auto bg-white text-slate-800 border-2 border-slate-200 hover:border-blue-900 hover:text-blue-900 rounded-xl font-bold transition-all hover:-translate-y-1">
                <PlayCircle className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform" />
                Campus Tour
              </button>
            </div>

            {/* Quick Academic Stats */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2.5 rounded-lg text-blue-800"><BookOpen className="w-5 h-5" /></div>
                <div className="text-left">
                  {/* FIXED: Changed State Board to IB Curriculum */}
                  <span className="block text-slate-900 font-bold text-lg leading-none mb-1">IB Program</span>
                  <span className="text-sm font-medium text-slate-500">Curriculum</span>
                </div>
              </div>
              <div className="w-px h-10 bg-slate-200 hidden sm:block"></div>
              <div className="flex items-center gap-3">
                <div className="bg-amber-100 p-2.5 rounded-lg text-amber-700"><Award className="w-5 h-5" /></div>
                <div className="text-left">
                  <span className="block text-slate-900 font-bold text-lg leading-none mb-1">100%</span>
                  <span className="text-sm font-medium text-slate-500">Pass Record</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Image Composition (Takes up 7 columns) */}
          <div className="lg:col-span-7 relative mt-12 lg:mt-0 px-4 sm:px-0">
            
            {/* Decorative background shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[110%] bg-gradient-to-tr from-blue-100 to-amber-50 rounded-[3rem] transform -rotate-3 -z-10"></div>

            <div className="relative grid grid-cols-2 gap-4 sm:gap-6">
              
              {/* Main Large Image */}
              <div className="col-span-2 relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white h-[300px] sm:h-[400px] group">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
                  alt="Students in classroom" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              {/* Bottom Left Small Image (Sports/Activity) */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl border-4 border-white h-[200px] sm:h-[260px] group transform -translate-y-8 sm:-translate-y-12">
                <img 
                  src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop" 
                  alt="School sports" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Bottom Right Floating Card */}
              <div className="relative rounded-[2rem] bg-blue-900 p-6 sm:p-8 shadow-xl border-4 border-white h-[200px] sm:h-[260px] flex flex-col justify-between transform -translate-y-8 sm:-translate-y-12 overflow-hidden">
                {/* Watermark icon */}
                <CalendarClock className="absolute -bottom-4 -right-4 w-32 h-32 text-blue-800 opacity-50" />
                
                <div className="relative z-10">
                  <div className="bg-amber-400 w-12 h-12 rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-md">
                    <Award className="w-6 h-6 text-blue-900" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Excellence Award</h3>
                  {/* FIXED: Changed Boincheruvupalli to Kensington */}
                  <p className="text-blue-200 text-sm sm:text-base font-medium">Recognized for holistic education in Kensington.</p>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;