import { Users, Quote } from 'lucide-react';

const Faculty = () => {
  const staff = [
    { 
      name: 'Dr. James Carter', 
      subject: 'Mathematics', 
      exp: '15 Years', 
      image: '/faculty/1.jpg' 
    },
    { 
      name: 'Mrs. Sarah Jenkins', 
      subject: 'Science & Biology', 
      exp: '12 Years', 
      image: '/faculty/2.jpg' 
    },
    { 
      name: 'Mr. David Mitchell', 
      subject: 'English Literature', 
      exp: '10 Years', 
      image: '/faculty/3.jpg' 
    },
    { 
      name: 'Ms. Emily Brooks', 
      subject: 'Social Studies', 
      exp: '8 Years', 
      image: '/faculty/4.jpg' 
    },
  ];

  return (
    <section id="faculty" className="py-16 lg:py-20 bg-white relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-sm font-bold uppercase tracking-widest mb-6 shadow-sm">
            <Users className="w-4 h-4 text-blue-600" />
            Our Mentors
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.15] tracking-tight">
            Exceptional{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-blue-900">Faculty</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-amber-300/60 -z-10 transform -rotate-1"></span>
            </span>
          </h2>

          <p className="text-slate-600 text-lg sm:text-xl font-medium leading-relaxed">
            Learn from the best. Our educators are dedicated professionals who inspire, guide, and nurture every student's limitless potential.
          </p>
        </div>

        {/* Principal Highlight (Deep Blue Premium Card) */}
        <div className="relative bg-blue-900 rounded-[2.5rem] shadow-2xl p-8 md:p-12 mb-16 lg:mb-20 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 overflow-hidden group">
          
          {/* Decorative ambient glow inside the card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-700/50 rounded-full blur-[80px] pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>

          {/* Principal Image */}
          <div className="relative w-40 h-40 md:w-56 md:h-56 shrink-0 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-inner group-hover:scale-[1.02] transition-transform duration-500 z-10">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
              alt="Dr. Robert Sterling" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Principal Text Content */}
          <div className="text-center md:text-left relative z-10">
            {/* Large decorative quote mark */}
            <Quote className="absolute -top-8 -left-8 md:-top-4 md:-left-10 w-20 h-20 text-blue-800 opacity-50 rotate-180 -z-10" />
            
            <div className="inline-block px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest mb-5">
              Principal's Desk
            </div>
            
            <h4 className="text-3xl md:text-4xl font-extrabold text-white mb-5 tracking-tight">Dr. Robert Sterling</h4>
            
            <p className="text-blue-100 text-lg md:text-xl italic leading-relaxed font-light mb-8 max-w-2xl">
              "Education is not the learning of facts, but the training of the mind to think. At Westbridge International School, we focus on empowering every student to discover their true potential and lead with integrity."
            </p>

            {/* Visual Anchor Line */}
            <div className="h-1 w-16 bg-amber-400 rounded-full mx-auto md:mx-0"></div>
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {staff.map((member, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 text-center overflow-hidden cursor-default"
            >
              {/* Subtle top accent line on hover */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Premium Image Avatar */}
              <div className="w-24 h-24 mx-auto rounded-full mb-6 overflow-hidden border-4 border-slate-50 group-hover:border-amber-200 shadow-md transition-colors duration-500">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <h5 className="text-xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-blue-900 transition-colors duration-300">
                {member.name}
              </h5>
              
              <p className="inline-block px-3 py-1 bg-blue-50 text-blue-700 font-bold text-sm rounded-lg mb-4">
                {member.subject}
              </p>
              
              <p className="text-slate-500 text-sm font-medium border-t border-slate-100 pt-4">
                Experience: <span className="text-slate-700 font-bold">{member.exp}</span>
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Faculty;