import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import aakrithiOriginal from '../assets/aakrithi_original.png';

const Portfolio = () => {
  const projects = [
    {
      title: 'Aakrithi Clothings',
      category: 'E-commerce / Handloom',
      image: aakrithiOriginal,
      url: 'https://aakrithiclothings.in',
      description: 'A sovereign digital commerce platform engineered for a luxury handloom brand. Focus on architectural precision, high-performance rendering, and an elite "Quiet Luxury" aesthetic.',
    }
  ];

  return (
    <section id="portfolio" className="bg-white py-16 md:py-32 lg:py-48 relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Simplified Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 lg:mb-32 gap-8 md:gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-10">
               <div className="h-[1px] w-8 md:w-12 bg-slate-200" />
               <span className="text-[10px] font-black uppercase tracking-[0.8em] text-slate-400">Featured Exhibit</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-slate-900 leading-[1] md:leading-[0.9] tracking-tighter">
              Case <span className="editorial-heading italic font-light text-slate-400">Study</span>.
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end w-full md:w-auto">
             <p className="text-slate-500 text-sm font-black uppercase tracking-[0.3em] mb-4">SELECTED_WORK_2026</p>
             <div className="h-[1px] w-full md:w-32 bg-slate-100" />
          </div>
        </div>

        {/* Single Premium Project Exhibit */}
        {projects.map((project, index) => (
          <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            
            {/* Massive Image Exhibit */}
            <div className="lg:col-span-7">
              <div className="relative group overflow-hidden bg-slate-50 rounded-sm border border-slate-100 p-4 md:p-8 lg:p-20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover filter drop-shadow-[0_10px_30px_rgba(15,23,42,0.1)] md:drop-shadow-[0_30px_60px_rgba(15,23,42,0.1)] transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Detailed Brief */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="mb-10 md:mb-12">
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-cyan-500 mb-4 md:mb-6 block">
                  {project.category}
                </span>
                <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-6 md:mb-8 tracking-tighter leading-[1] md:leading-none">
                  Aakrithi <br />
                  <span className="editorial-heading italic font-light text-slate-400">Clothings</span>
                </h3>
                <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-light mb-8 md:mb-12 max-w-md">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-col gap-6 md:gap-8 mt-10 md:mt-0">
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 md:gap-6 text-slate-900 text-xs font-black uppercase tracking-[0.5em] transition-colors hover:text-cyan-600 w-fit"
                >
                  <span className="pb-1 border-b border-slate-200 group-hover:border-cyan-500">Visit Platform</span>
                  <ExternalLink size={14} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>

                <div className="flex items-center gap-4 py-6 md:py-8 border-t border-slate-100 mt-2 md:mt-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 text-wrap leading-relaxed">Live Production System</span>
                </div>
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Portfolio;
