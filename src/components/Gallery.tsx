import { Camera, Maximize2 } from 'lucide-react';

const Gallery = () => {
  // Upgraded array to include specific grid spans for the asymmetrical layout
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop',
      size: 'md:col-span-2 md:row-span-2 h-[300px] md:h-full', // Large feature image
      alt: 'Students studying outdoors'
    },
    {
      src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop',
      size: 'md:col-span-1 md:row-span-1 h-[250px]',
      alt: 'Classroom discussion'
    },
    {
      src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2064&auto=format&fit=crop',
      size: 'md:col-span-1 md:row-span-1 h-[250px]',
      alt: 'Students smiling'
    },
    {
      src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop',
      size: 'md:col-span-1 md:row-span-1 h-[250px]',
      alt: 'Teacher and students'
    },
    {
      src: 'https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=2070&auto=format&fit=crop',
      size: 'md:col-span-1 md:row-span-1 h-[250px]',
      alt: 'Campus hallway'
    },
    {
      src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop',
      size: 'md:col-span-1 md:row-span-1 h-[250px]',
      alt: 'Graduation cap'
    },
  ];

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-[#F8FAFC] relative overflow-hidden">
      
      {/* Subtle Ambient Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-blue-800 text-sm font-bold uppercase tracking-widest mb-6 shadow-sm">
            <Camera className="w-4 h-4 text-amber-500" />
            Campus Life
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.15] tracking-tight">
            Photo{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-blue-900">Gallery</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-amber-300/60 -z-10 transform -rotate-1"></span>
            </span>
          </h2>
          
          <p className="text-slate-600 text-lg sm:text-xl font-medium leading-relaxed">
            A glimpse into the vibrant daily life, celebrations, and learning environments at Priya Cement High School.
          </p>
        </div>

        {/* Asymmetrical Masonry/Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {images.map((item, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-[2rem] bg-slate-200 group cursor-pointer border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 ${item.size}`}
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Refined Premium Hover Overlay */}
              <div className="absolute inset-0 bg-blue-950/0 group-hover:bg-blue-950/40 transition-colors duration-500 flex items-center justify-center">
                {/* Glassmorphic Expand Icon */}
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75 shadow-xl">
                  <Maximize2 className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;