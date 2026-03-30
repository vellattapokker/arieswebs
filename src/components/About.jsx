import React from 'react';
import monolithicAnchor from '../assets/about_monolithic.png';

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-48 lg:py-72 bg-[#050505] overflow-hidden scroll-mt-24">
      
      {/* Editorial Base Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
           style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: '80px 80px' }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          
          {/* Narrative Left Column */}
          <div className="max-w-xl order-2 lg:order-1">
            <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
               <div className="h-[1px] w-8 md:w-12 bg-cyan-500/50" />
               <span className="text-[10px] font-black uppercase tracking-[0.8em] text-cyan-400">Institutional Profile</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1] md:leading-[0.9] tracking-tighter mb-8 md:mb-10">
              Software Engineering <br />
              <span className="text-2xl md:text-4xl lg:text-5xl editorial-heading italic font-light text-cyan-200">meets</span> <br />
              <span className="editorial-heading italic font-light text-slate-300">Digital</span> Resonance.
            </h2>

            <p className="text-slate-400 text-base md:text-lg lg:text-xl leading-relaxed font-light mb-6 md:mb-8 opacity-90">
              Arieswebs operates at the intersection of architectural code and high-performance branding. We build sovereign digital systems that don't just exist—they command space.
            </p>

            <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light mb-12 md:mb-16 max-w-lg">
              Our approach strips away the noise. We believe in absolute technical reliability, engineered stillness, and data-driven market impact. Every project is a bespoke flagship.
            </p>

            {/* Executive Metrics */}
            <div className="flex flex-col gap-4 md:gap-6 pt-8 border-t border-white/5">
               <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center group cursor-default gap-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500 group-hover:text-cyan-500 transition-colors">Foundation</span>
                  <span className="font-mono text-white opacity-80 text-sm">EST. 2026</span>
               </div>
               <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center group cursor-default gap-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500 group-hover:text-cyan-500 transition-colors">Portfolio Scope</span>
                  <span className="font-mono text-white opacity-80 text-sm">FLAGSHIP PROJECTS</span>
               </div>
               <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center group cursor-default gap-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500 group-hover:text-cyan-500 transition-colors">Market Impact</span>
                  <span className="font-mono text-white opacity-80 text-sm">100% SIGNAL</span>
               </div>
            </div>
          </div>

          {/* Monolithic Visual Anchor */}
          <div className="relative order-1 lg:order-2 mb-12 lg:mb-0">
             <div className="relative z-10 w-full max-w-[480px] mx-auto filter drop-shadow-[0_0_80px_rgba(37,99,235,0.15)] rounded-sm overflow-hidden border border-white/5 bg-[#080808]">
                <img 
                  src={monolithicAnchor} 
                  alt="Arieswebs Architectural Monolith" 
                  className="w-full h-auto object-cover grayscale-[0.2] transition-transform duration-1000 hover:scale-105" 
                />
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
             
             {/* Architectural Details */}
             <div className="absolute -left-6 top-1/4 h-1/2 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
             <div className="absolute top-8 -right-8 text-white/5 font-mono text-xs rotate-90 tracking-[0.5em]">SYSTEM_ARCHITECTURE</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
