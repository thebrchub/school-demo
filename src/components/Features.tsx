
import { BookOpen, Users, Lightbulb, Heart, Sparkles } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="h-7 w-7" />,
      title: 'Curriculum Excellence',
      description: 'Comprehensive syllabus that balances traditional wisdom with modern scientific thinking.',
      color: 'blue'
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: 'Dedicated Faculty',
      description: 'Highly qualified educators committed to identifying and nurturing individual potential.',
      color: 'amber'
    },
    {
      icon: <Lightbulb className="h-7 w-7" />,
      title: 'Observation-Based',
      description: 'Practical, hands-on learning approaches that encourage critical thinking over rote memorization.',
      color: 'emerald' // Adding a touch of fresh green for the "cool breeze" feel
    },
    {
      icon: <Heart className="h-7 w-7" />,
      title: 'Holistic Growth',
      description: 'Equal emphasis on sports, arts, and mental well-being alongside academic achievements.',
      color: 'blue'
    }
  ];

  // Helper function to map colors to Tailwind classes
  const getColorClasses = (color: string) => {
    switch(color) {
      case 'amber': return 'bg-amber-50 text-amber-600 group-hover:bg-amber-500 hover-shadow-amber';
      case 'emerald': return 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 hover-shadow-emerald';
      default: return 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 hover-shadow-blue';
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-[#F8FAFC] relative overflow-hidden">
      
      {/* Decorative Ambient Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-amber-50/50 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(#e2e8f0_1px,transparent_1px),linear-gradient(90deg,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.3]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-blue-800 text-sm font-bold uppercase tracking-widest mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-500" />
            The Priya Cement Difference
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.15] tracking-tight">
            Building Tomorrow's{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-blue-900">Leaders</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-amber-300/60 -z-10 transform -rotate-1"></span>
            </span>
          </h2>
          
          <p className="text-slate-600 text-lg sm:text-xl font-medium leading-relaxed">
            We provide an environment where curiosity is celebrated, character is forged, and limitless potential is realized.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 group/bento items-stretch">
          
          {features.map((feature, index) => {
            const colorClasses = getColorClasses(feature.color);
            
            return (
              <article 
                key={index} 
                className="group relative bg-white border border-slate-100 rounded-[2rem] p-8 md:p-10 transition-all duration-500 overflow-hidden shadow-sm flex flex-col cursor-pointer
                           group-hover/bento:opacity-60 group-hover/bento:blur-[2px] group-hover/bento:scale-[0.98] 
                           hover:!opacity-100 hover:!blur-none hover:!scale-[1.02] hover:z-10 hover:shadow-2xl hover:border-blue-200"
              >
                
                {/* Radial gradient hover effect (Subtle) */}
                <div className="hidden md:block absolute inset-0 bg-[radial-gradient(400px_at_50%_50%,rgba(30,58,138,0.03),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-20 flex flex-col h-full">
                  {/* Icon Container */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-500 group-hover:text-white ${colorClasses.split(' hover-shadow')[0]}`}>
                    {feature.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-blue-900 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-base text-slate-600 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Features;