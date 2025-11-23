import React from 'react';

const FutureSection: React.FC = () => {
  return (
    <section id="future" className="py-24 bg-slate-900 text-white px-6">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-blue-400 font-medium tracking-wide uppercase text-sm mb-4">The Horizon</h2>
        <h3 className="text-3xl md:text-5xl font-serif">From Corporate Product to Civic Partner</h3>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        
        <div className="relative p-8 rounded-2xl bg-slate-800 border border-slate-700">
          <div className="absolute top-0 left-8 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">Phase 1</div>
          <h4 className="mt-4 text-xl font-bold mb-4 text-blue-100">Operational Responsibility</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            AI takes on complex coordination tasks (energy grids, logistics) but with strict, human-led norm setting and red-teaming. The company becomes an incubator, not a ruler.
          </p>
        </div>

        <div className="relative p-8 rounded-2xl bg-slate-800 border border-slate-700">
          <div className="absolute top-0 left-8 -translate-y-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">Phase 2</div>
          <h4 className="mt-4 text-xl font-bold mb-4 text-indigo-100">Institutional Evolution</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            Governance transitions to multi-stakeholder foundations and trusts. Key model weights and charters are held in stewardship for humanity, representing impacted communities.
          </p>
        </div>

        <div className="relative p-8 rounded-2xl bg-slate-800 border border-slate-700">
          <div className="absolute top-0 left-8 -translate-y-1/2 bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">Phase 3</div>
          <h4 className="mt-4 text-xl font-bold mb-4 text-teal-100">Cultural Pluralism</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            AI systems diversify to support multiple ways of knowing. Decentralized control prevents weaponization. Communities have the power of revocability.
          </p>
        </div>

      </div>

      <div className="max-w-3xl mx-auto mt-20 text-center border-t border-slate-800 pt-12">
        <p className="text-xl font-serif italic text-slate-300">
          "The guiding intuition is simple: AI is not whole without people. Its future legitimacy depends on proving, concretely and locally, that it is worthy of living alongside us."
        </p>
      </div>
    </section>
  );
};

export default FutureSection;
