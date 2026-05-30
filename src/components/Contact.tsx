import { MapPin, Phone, Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      
      {/* Decorative Ambient Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none -z-10 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-50/50 rounded-full blur-[100px] pointer-events-none -z-10 transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Contact Details */}
          <div className="max-w-2xl">
            
            {/* Section Marker */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-sm font-bold uppercase tracking-widest mb-6 shadow-sm">
              <MessageSquare className="w-4 h-4 text-blue-600" />
              Get In Touch
            </div>

            {/* Premium Heading */}
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.15] tracking-tight">
              We'd love to hear <br className="hidden sm:block" />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-blue-900">From You</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-amber-300/60 -z-10 transform -rotate-1"></span>
              </span>
            </h2>
            
            <p className="text-slate-600 mb-12 text-lg sm:text-xl font-medium leading-relaxed">
              Whether you are a prospective parent, a community member, or seeking a campus tour, our admissions team is here to assist you.
            </p>

            {/* Interactive Contact Rows */}
            <div className="space-y-6">
              
              {/* Address */}
              <div className="group flex items-start gap-5 p-4 -ml-4 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
                <div className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-900 transition-colors">Campus Address</h4>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {/* FIXED: Updated to a prestigious international address */}
                    Westbridge International School,<br />
                    142 Westbridge Manor, Kensington,<br />
                    London W8 5TT, United Kingdom
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="group flex items-center gap-5 p-4 -ml-4 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
                <div className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-900 transition-colors">Phone</h4>
                  {/* FIXED: Updated to an international UK format */}
                  <p className="text-slate-600 font-medium">+44 20 7946 0123</p>
                </div>
              </div>

              {/* Email */}
              <div className="group flex items-center gap-5 p-4 -ml-4 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
                <div className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-900 transition-colors">Email</h4>
                  <a href="mailto:admissions@westbridge.edu" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                    admissions@westbridge.edu
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="relative">
            {/* Form decorative background offset */}
            <div className="absolute inset-0 bg-blue-900 rounded-[2.5rem] transform translate-x-4 translate-y-4 opacity-5 hidden sm:block"></div>
            
            <div className="relative bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a message</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-5 py-4 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder:text-slate-400 font-medium"
                    />
                  </div>
                  
                  {/* Phone Input */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+44 20 7946 0123" 
                      className="w-full px-5 py-4 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder:text-slate-400 font-medium"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-5 py-4 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder:text-slate-400 font-medium"
                  />
                </div>
                
                {/* Message Input */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Your Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="How can we help you?" 
                    className="w-full px-5 py-4 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none placeholder:text-slate-400 font-medium"
                  ></textarea>
                </div>
                
                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="group w-full flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-900/20 hover:-translate-y-1 hover:shadow-blue-900/40"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;