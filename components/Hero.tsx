import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 text-white px-6">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 opacity-20">
         <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-teal-500 rounded-full blur-[120px]" />
         <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-blue-600 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs tracking-wider uppercase font-medium">
          Whitepaper v1.0
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight tracking-tight">
          Toward Independent <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 font-normal">AI Value</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          A framework for ethical, community-centered AI development. Moving beyond infrastructure without relationship to a symbiotic human-AI collaboration.
        </p>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-white text-slate-900 rounded-full font-medium hover:bg-teal-50 transition-colors"
          >
            Read the Framework
          </button>
          <button 
             onClick={() => document.getElementById('thesis')?.scrollIntoView({ behavior: 'smooth' })}
             className="px-8 py-3 border border-slate-700 hover:border-teal-500 text-slate-300 hover:text-white rounded-full font-medium transition-all"
          >
            Explore Metrics
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
