import { Trophy, Star, Award, Medal } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "100% Pass Rate",
      desc: "Consistent board exam excellence for the past 5 years, setting a benchmark in the region.",
      metric: "State Level",
      colorTheme: "blue"
    },
    {
      icon: Star,
      title: "Olympiad Winners",
      desc: "Three brilliant students secured top 10 ranks in the National Science Olympiad.",
      metric: "National Level",
      colorTheme: "amber"
    },
    {
      icon: Award,
      title: "Best Sports School",
      desc: "Awarded district champions in inter-school athletics and indoor competitive games.",
      metric: "District Level",
      colorTheme: "emerald"
    }
  ];

  // Helper for dynamic colors
  const getThemeClasses = (theme: string) => {
    switch (theme) {
      case 'amber': return { text: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100', watermark: 'text-amber-500/5' };
      case 'emerald': return { text: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100', watermark: 'text-emerald-500/5' };
      default: return { text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100', watermark: 'text-blue-500/5' };
    }
  };

  return (
    <section id="achievements" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white rounded-full blur-[100px] opacity-60 pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-blue-800 text-sm font-bold uppercase tracking-widest mb-6 shadow-sm">
            <Medal className="w-4 h-4 text-amber-500" />
            Our Pride
          </div>
          
          {/* FIXED: Removed line break and adjusted margin for perfect inline flow */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.15] tracking-tight">
            Celebrating{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-blue-900">Excellence</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-amber-300/60 -z-10 transform -rotate-1"></span>
            </span>
          </h2>
          
          <p className="text-slate-600 text-lg sm:text-xl font-medium leading-relaxed">
            Recognizing the hard work, dedication, and brilliance of our students across academic, sports, and co-curricular domains.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {achievements.map((item, index) => {
            const IconComponent = item.icon;
            const theme = getThemeClasses(item.colorTheme);

            return (
              <div 
                key={index} 
                className="group relative bg-white border border-slate-100 rounded-[2rem] p-8 md:p-10 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col h-full z-10 cursor-default"
              >
                {/* Watermark Icon (Faded in background) */}
                <IconComponent className={`absolute -bottom-8 -right-8 w-48 h-48 ${theme.watermark} transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700 -z-10`} />

                <div className="relative z-20 flex-1">
                  {/* Top row: Icon & Metric Badge */}
                  <div className="flex justify-between items-start mb-8">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-500 ${theme.bg} ${theme.text} shadow-sm group-hover:shadow-md`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    
                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border ${theme.bg} ${theme.text} ${theme.border}`}>
                      {item.metric}
                    </span>
                  </div>

                  {/* Content */}
                  <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-blue-900 transition-colors duration-300">
                    {item.title}
                  </h4>
                  
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
                
                {/* Decorative subtle line at bottom */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-100 to-transparent group-hover:via-blue-200 transition-colors duration-500"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Achievements;