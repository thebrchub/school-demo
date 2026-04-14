
import { Target, Shield, MapPin, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Image Composition */}
          <div className="relative mx-auto max-w-xl lg:max-w-none w-full">
            {/* Decorative Ambient Shapes */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-amber-50 rounded-full blur-[60px] opacity-60"></div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-50 rounded-full blur-[60px] opacity-60"></div>

            {/* Main Image */}
            <div className="relative z-10 rounded-[2.5rem] shadow-2xl border border-slate-100/50 bg-white p-2 transform transition-transform duration-700 hover:scale-[1.02]">
              <div className="rounded-[2rem] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                  alt="Students collaborating in a bright environment" 
                  className="object-cover w-full h-[450px] lg:h-[550px]"
                />
              </div>
            </div>
            
            {/* Premium Floating Badge */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-blue-900 p-8 rounded-[2rem] shadow-2xl z-20 hidden sm:block border-4 border-white transform transition-transform hover:-translate-y-2">
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-5xl font-extrabold text-amber-400 mb-1 tracking-tighter">20+</p>
                  <p className="text-sm text-blue-100 font-bold uppercase tracking-widest leading-tight">
                    Years of<br />Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Features */}
          <div className="relative z-10">
            
            {/* Section Marker */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-sm font-bold uppercase tracking-widest mb-6">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              About Our School
            </div>

            {/* Headline with matched Hero styling */}
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.15] tracking-tight">
              A Legacy of Academic and <br className="hidden lg:block" />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-blue-900">Moral Excellence</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-amber-300/60 -z-10 transform -rotate-1"></span>
              </span>
            </h2>
            
            <p className="text-slate-600 mb-10 text-lg sm:text-xl leading-relaxed font-medium">
              Located in the serene environment of Sreepuram, Boincheruvupalli, Priya Cement High School is committed to providing a holistic education. We believe in nurturing not just intellect, but character.
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              
              {/* Feature 1 */}
              <div className="group flex items-start gap-5 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300">
                <div className="bg-blue-50 group-hover:bg-blue-600 p-3.5 rounded-xl text-blue-600 group-hover:text-white shrink-0 transition-colors duration-300">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">Academic Excellence</h4>
                  <p className="text-slate-600 leading-relaxed">A rigorous state-board curriculum designed to challenge students and prepare them for future global opportunities.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group flex items-start gap-5 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300">
                <div className="bg-amber-50 group-hover:bg-amber-500 p-3.5 rounded-xl text-amber-600 group-hover:text-white shrink-0 transition-colors duration-300">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">Values & Discipline</h4>
                  <p className="text-slate-600 leading-relaxed">Instilling strong moral foundations, empathy, and unshakeable integrity in every student that walks through our doors.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group flex items-start gap-5 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300">
                <div className="bg-blue-50 group-hover:bg-blue-600 p-3.5 rounded-xl text-blue-600 group-hover:text-white shrink-0 transition-colors duration-300">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">Location Advantage</h4>
                  <p className="text-slate-600 leading-relaxed">A peaceful, distraction-free campus in Andhra Pradesh equipped with modern amenities for focused learning.</p>
                </div>
              </div>

            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;