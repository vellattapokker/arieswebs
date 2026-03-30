import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 md:py-48 lg:py-72 bg-slate-50 overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-24 items-center">
          
          {/* Narrative Left Column */}
          <div className="lg:col-span-5 max-w-xl">
            <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-10">
               <div className="h-[1px] w-8 md:w-12 bg-cyan-500" />
               <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-600">Contact Us</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] md:leading-tight tracking-tight mb-8">
              Let's talk about <br />
              <span className="editorial-heading italic font-light text-slate-500">your next project.</span>
            </h2>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light mb-12 lg:mb-16 max-w-lg">
              We're here to help you build something extraordinary. Whether you need a simple website or a complex software system, our team is ready to bring your vision to life.
            </p>

            {/* Elegant Contact Details */}
            <div className="flex flex-col gap-8 md:gap-10">
               <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-50 group-hover:border-cyan-100 transition-colors shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-1">Email</h4>
                    <a href="mailto:arieswebs105@gmail.com" className="text-lg text-slate-900 font-medium hover:text-cyan-600 transition-colors">arieswebs105@gmail.com</a>
                  </div>
               </div>
               
               <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-50 group-hover:border-cyan-100 transition-colors shrink-0">
                    <Phone size={20} />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-1">Phone</h4>
                    <p className="text-lg text-slate-900 font-medium">+91 79076 75024</p>
                  </div>
               </div>

               <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-50 group-hover:border-cyan-100 transition-colors shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-1">Office</h4>
                    <p className="text-lg text-slate-900 font-medium leading-snug">123 Tech Avenue,<br />Digital City Strategy Hub</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Elegant Form Right Column */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-white rounded-[2rem] shadow-[0_20px_40px_rgba(15,23,42,0.04)] border border-slate-100 p-8 md:p-12 lg:p-14">
              <form className="flex flex-col gap-6 md:gap-8" onSubmit={(e) => e.preventDefault()}>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-slate-600 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 rounded-xl py-4 px-5 text-slate-900 transition-all focus:outline-none"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-slate-600 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 rounded-xl py-4 px-5 text-slate-900 transition-all focus:outline-none"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-600 ml-1">Subject</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 rounded-xl py-4 px-5 text-slate-900 transition-all focus:outline-none"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="flex flex-col gap-2 mb-2">
                  <label className="text-sm font-medium text-slate-600 ml-1">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 rounded-xl py-4 px-5 text-slate-900 transition-all focus:outline-none resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button className="flex items-center justify-center gap-3 w-full bg-slate-900 text-white rounded-xl py-4 md:py-5 font-semibold text-lg hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 transition-all duration-300 group">
                   Send Message
                   <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
