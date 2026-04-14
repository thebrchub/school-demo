import { Building2, ArrowUpRight } from 'lucide-react';

const Infrastructure = () => {
  // Added short descriptions for the premium hover-reveal effect
  const facilities = [
    {
      name: 'Smart Classrooms',
      desc: 'Air-conditioned spaces with interactive digital boards and ergonomic seating.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2062&auto=format&fit=crop',
      size: 'lg:col-span-2 lg:row-span-2'
    },
    {
      name: 'Science Labs',
      desc: 'State-of-the-art physics, chemistry, and biology laboratories.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop',
      size: 'lg:col-span-2 lg:row-span-1'
    },
    {
      name: 'Vast Library',
      desc: 'Over 10,000 volumes and digital learning resources.',
      image: 'https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=1915&auto=format&fit=crop',
      size: 'lg:col-span-1 lg:row-span-1'
    },
    {
      name: 'Sports Complex',
      desc: 'Sprawling grounds for athletics and indoor games.',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop',
      size: 'lg:col-span-1 lg:row-span-1'
    }
  ];

  return (
    <section id="infrastructure" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section (Matched to the new Premium Aesthetic) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-sm font-bold uppercase tracking-widest mb-6">
              <Building2 className="w-4 h-4 text-blue-600" />
              Our Campus
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
              World-Class <br className="hidden sm:block" />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-blue-900">Infrastructure</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-amber-300/60 -z-10 transform -rotate-1"></span>
              </span>
            </h2>
          </div>
          
          <p className="text-slate-600 max-w-md text-lg font-medium leading-relaxed pb-2 md:text-right">
            Designed to inspire. Our campus is equipped with modern, distraction-free facilities that support exceptional academic and extracurricular growth.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[280px] lg:auto-rows-[320px]">
          {facilities.map((facility, index) => (
            <div 
              key={index} 
              className={`relative rounded-[2rem] overflow-hidden group cursor-pointer border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 ${facility.size}`}
            >
              {/* Background Image */}
              <img 
                src={facility.image} 
                alt={facility.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Refined Gradient Overlay (Blue instead of Black) */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Glassmorphic Icon on Hover */}
              <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-20">
                <ArrowUpRight className="text-white w-6 h-6" />
              </div>

              {/* Text Content Block */}
              <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 flex flex-col justify-end z-10">
                <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                  <h4 className="text-2xl lg:text-3xl font-bold text-white mb-2 drop-shadow-md">
                    {facility.name}
                  </h4>
                  {/* Subtle amber underline effect on the title */}
                  <div className="h-1 w-12 bg-amber-400 rounded-full mb-3 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  
                  {/* Description fades in and slides up */}
                  <p className="text-blue-100 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                    {facility.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Infrastructure;