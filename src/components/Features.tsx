import { BookOpen, Users, Lightbulb, Heart, Sparkles, MapPin } from 'lucide-react';

const features = [
  {
    meta: 'Est. 1998 · Academics',
    tag: 'Curriculum',
    title: 'Core Curriculum',
    // FIXED: Changed American K-12 to International/UK terminology
    detail: 'Ages 3–18 · IB Continuum',
    description: 'Traditional + Modern',
    subdescription: 'Balanced wisdom & science',
    icon: <BookOpen className="w-6 h-6" />,
    glow: 'bg-blue-400/20',
    tag_style: 'bg-blue-50 text-blue-600',
    icon_bg: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600',
  },
  {
    meta: 'Award-winning · Faculty',
    tag: 'Mentorship',
    title: 'Expert Faculty',
    // FIXED: Elevated to a premium student-teacher ratio
    detail: 'Global Experts · 1:8 Ratio',
    description: 'Highly Qualified Educators',
    subdescription: 'Nurturing individual potential',
    icon: <Users className="w-6 h-6" />,
    glow: 'bg-amber-400/20',
    tag_style: 'bg-amber-50 text-amber-600',
    icon_bg: 'bg-amber-50 text-amber-600 group-hover:bg-amber-500',
  },
  {
    meta: 'Methodology · Learning',
    tag: 'Hands-on',
    title: 'Active Learning',
    // FIXED: Upgraded from basic "field trips" to global standard
    detail: 'Innovation Labs · Global Exchange',
    description: 'Critical Thinking First',
    subdescription: 'No rote memorization',
    icon: <Lightbulb className="w-6 h-6" />,
    glow: 'bg-emerald-400/20',
    tag_style: 'bg-emerald-50 text-emerald-600',
    icon_bg: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500',
  },
  {
    meta: 'Wellness · Development',
    tag: 'Holistic',
    title: 'Holistic Growth',
    // FIXED: Slightly tweaked to sound more premium
    detail: 'Athletics · Arts · Well-being',
    description: 'Beyond Academics',
    subdescription: 'Mind, body & character',
    icon: <Heart className="w-6 h-6" />,
    glow: 'bg-blue-400/20',
    tag_style: 'bg-blue-50 text-blue-600',
    icon_bg: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600',
  },
];

const Features = () => {
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
            The Westbridge Difference
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 group/bento items-stretch">
          {features.map((f, i) => (
            <article
              key={i}
              className="group relative bg-white border border-slate-100 rounded-[2.5rem] px-8 pb-8 pt-6 md:px-10 md:pb-10 md:pt-8 transition-all duration-500 overflow-hidden shadow-sm flex flex-col cursor-pointer
                         group-hover/bento:opacity-60 group-hover/bento:blur-[2px] group-hover/bento:scale-[0.98]
                         hover:!opacity-100 hover:!blur-none hover:!scale-[1.02] hover:z-10 hover:shadow-2xl hover:border-blue-200"
            >
              {/* Subtle global radial gradient hover */}
              <div className="hidden md:block absolute inset-0 bg-[radial-gradient(400px_at_50%_50%,rgba(30,58,138,0.03),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Soft Ambient Corner Glow */}
              <div className={`absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-150 pointer-events-none ${f.glow}`}></div>

              <div className="relative z-20 flex flex-col h-full">

                {/* Meta */}
                <p className="text-xs text-slate-400 mb-3 tracking-wide font-medium">{f.meta}</p>

                {/* Tag pill */}
                <span className={`self-start text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-4 transition-colors duration-300 ${f.tag_style}`}>
                  {f.tag}
                </span>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight whitespace-nowrap group-hover:text-blue-900 transition-colors duration-300">
                  {f.title}
                </h3>

                {/* Location-style detail */}
                <div className="flex items-center gap-1.5 text-sm text-slate-500 mb-6 font-medium">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                  {f.detail}
                </div>

                {/* Divider */}
                <div className="border-t border-slate-100 mb-6 mt-auto transition-colors duration-500 group-hover:border-blue-50" />

                {/* Footer with Fixed Icon Hover State */}
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:text-white shadow-inner group-hover:shadow-lg ${f.icon_bg}`}>
                    {f.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 leading-tight group-hover:text-blue-900 transition-colors duration-300">{f.description}</p>
                    <p className="text-xs font-medium text-slate-500 mt-1">{f.subdescription}</p>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;