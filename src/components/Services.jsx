import React from 'react';

// Import Assets
import webSphere from '../assets/web_design_3d_sphere.png';
import nfcChip from '../assets/nfc_chip_3d_glow.png';
import growthGraph from '../assets/growth_graph_3d_dynamic.png';

const Services = () => {
  const services = [
    {
      id: "01",
      title: "Bespoke",
      head: "Software Systems",
      description: "We engineer architectural-grade digital solutions designed for absolute performance, scalability, and technical reliability.",
      image: webSphere
    },
    {
      id: "02",
      title: "Performance",
      head: "Digital Marketing",
      description: "Data-driven strategies that establish brand authority and amplify your market resonance through surgical precision.",
      image: growthGraph
    },
    {
      id: "03",
      title: "Tactical",
      head: "Brand Identity",
      description: "Seamless integration of physical and digital touchpoints to create modern influence and enduring brand authority.",
      image: nfcChip
    }
  ];

  return (
    <section id="services" className="bg-[#050505] py-24 md:py-48 lg:py-72 relative overflow-hidden scroll-mt-24">
      {/* Editorial Base Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
           style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: '80px 80px' }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Simplified Header */}
        <div className="max-w-4xl mb-12 lg:mb-16">
          <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
             <div className="h-[1px] w-8 md:w-12 bg-cyan-500/50" />
             <span className="text-[10px] font-black uppercase tracking-[0.8em] text-cyan-400">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1] md:leading-[0.9] tracking-tighter">
            High-Impact <br />
            <span className="editorial-heading italic font-light text-cyan-200">Agency</span> Solutions.
          </h2>
        </div>

        {/* Refined 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="premium-card group relative flex flex-col justify-between overflow-hidden p-6 md:p-8 lg:p-10 transition-all duration-500">
              <div>
                <div className="flex justify-between items-start mb-6 md:mb-8">
                  <span className="text-2xl md:text-3xl editorial-heading text-white/10 select-none">{service.id}</span>
                   <div className="w-8 h-8 md:w-10 md:h-10 bg-cyan-500/5 border border-cyan-500/10 flex items-center justify-center text-cyan-400">
                     →
                   </div>
                </div>
                
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-400 mb-3 block">
                  {service.title}
                </span>

                <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-bold mb-4 leading-tight">
                  {service.head.split(' ')[0]} <br />
                  <span className="editorial-heading italic font-light text-cyan-100">{service.head.split(' ')[1]}</span>
                </h3>

                <p className="text-slate-400/80 text-sm leading-relaxed font-light mb-6">
                  {service.description}
                </p>
              </div>

              {/* Simplified Visual Exhibit */}
              <div className="mt-auto pt-6">
                <div className="relative w-full aspect-square max-w-[100px] md:max-w-[120px] mx-auto opacity-80 group-hover:opacity-100 transition-opacity">
                  <img src={service.image} alt="" className="w-full h-auto object-contain filter grayscale-[0.2]" />
                  <div className="absolute inset-0 bg-cyan-500/5 blur-[40px] rounded-full pointer-events-none" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Footer Sign-off */}
        <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
           <p className="text-[10px] font-black uppercase tracking-[0.6em] text-white/30 text-center md:text-left">ARIES_WEBS // EST 2026</p>
           <div className="text-center md:text-right">
             <span className="editorial-heading italic text-xl md:text-2xl text-white opacity-40">Architectural Stillness.</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
