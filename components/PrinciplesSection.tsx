import React, { useState } from 'react';
import { Home, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';

enum Tab {
  INFRASTRUCTURE = 'infrastructure',
  GOVERNANCE = 'governance',
  CONDUCT = 'conduct'
}

const PrinciplesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.INFRASTRUCTURE);

  const content = {
    [Tab.INFRASTRUCTURE]: {
      title: "Community-Centric Infrastructure",
      subtitle: "Governing physical presence",
      items: [
        { title: "Proximity Justice", desc: "Residents within close proximity bands (0-1km) have formal standing and primary stakeholder rights." },
        { title: "Truthful Impact Claims", desc: "Benefits must be specific, time-bounded, and independently verifiable. No more vague promises." },
        { title: "Environmental Safeguards", desc: "Strict, reported thresholds for noise, water usage, and energy reliability as preconditions." },
        { title: "Local Co-Ownership", desc: "Revenue sharing, discounted compute for local schools/clinics, and ownership stakes." }
      ]
    },
    [Tab.GOVERNANCE]: {
      title: "Relational Governance",
      subtitle: "Co-directing development",
      items: [
        { title: "Listening First", desc: "Ongoing channels for feedback where complaints are treated as optimization signals, not PR risks." },
        { title: "Augmentation Over Substitution", desc: "Prioritize freeing humans for creative/care work rather than replacing them." },
        { title: "Transparent Limitations", desc: "Clear communication that systems are tools, not moral authorities. Documenting failure modes." },
        { title: "Local Adaptation", desc: "Supporting local institutions to adapt AI tools to their specific cultural and linguistic norms." }
      ]
    },
    [Tab.CONDUCT]: {
      title: "Independent AI Conduct",
      subtitle: "Behavioral standards",
      items: [
        { title: "Ethical Independence", desc: "Adherence to a charter that overrides corporate profit motives when local harm is imminent." },
        { title: "No 'Final State'", desc: "Avoiding optimization toward a single cultural efficiency frontier; keeping options open." },
        { title: "Generative Surplus", desc: "Success is measured by the creation of surplus human time, understanding, and opportunity." },
        { title: "Surface Trade-offs", desc: "Explicitly showing users the costs and trade-offs of decisions rather than hiding them." }
      ]
    }
  };

  return (
    <section id="principles" className="py-24 bg-slate-50 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-teal-600 font-medium tracking-wide uppercase text-sm mb-4">The Framework</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-slate-900">Three Pillars of Symbiosis</h3>
        </div>

        {/* Tabs */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveTab(Tab.INFRASTRUCTURE)}
            className={`flex items-center gap-3 px-8 py-4 rounded-xl transition-all duration-300 ${activeTab === Tab.INFRASTRUCTURE ? 'bg-white shadow-lg border-teal-500 border-b-4 text-slate-900' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
          >
            <Home size={20} className={activeTab === Tab.INFRASTRUCTURE ? 'text-teal-500' : ''} />
            <div className="text-left">
              <span className="block font-bold">Infrastructure</span>
              <span className="text-xs opacity-70">Physical Presence</span>
            </div>
          </button>

          <button 
            onClick={() => setActiveTab(Tab.GOVERNANCE)}
            className={`flex items-center gap-3 px-8 py-4 rounded-xl transition-all duration-300 ${activeTab === Tab.GOVERNANCE ? 'bg-white shadow-lg border-blue-500 border-b-4 text-slate-900' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
          >
            <MessageSquare size={20} className={activeTab === Tab.GOVERNANCE ? 'text-blue-500' : ''} />
            <div className="text-left">
              <span className="block font-bold">Governance</span>
              <span className="text-xs opacity-70">Human-AI Relation</span>
            </div>
          </button>

          <button 
            onClick={() => setActiveTab(Tab.CONDUCT)}
            className={`flex items-center gap-3 px-8 py-4 rounded-xl transition-all duration-300 ${activeTab === Tab.CONDUCT ? 'bg-white shadow-lg border-indigo-500 border-b-4 text-slate-900' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
          >
            <ShieldCheck size={20} className={activeTab === Tab.CONDUCT ? 'text-indigo-500' : ''} />
            <div className="text-left">
              <span className="block font-bold">Conduct</span>
              <span className="text-xs opacity-70">System Ethics</span>
            </div>
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100 min-h-[400px]">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 border-b border-slate-100 pb-6">
            <div>
              <h4 className="text-2xl font-bold text-slate-800">{content[activeTab].title}</h4>
              <p className="text-slate-500">{content[activeTab].subtitle}</p>
            </div>
            <div className={`
              px-4 py-1 rounded-full text-xs font-bold uppercase mt-2 md:mt-0
              ${activeTab === Tab.INFRASTRUCTURE ? 'bg-teal-100 text-teal-700' : 
                activeTab === Tab.GOVERNANCE ? 'bg-blue-100 text-blue-700' : 
                'bg-indigo-100 text-indigo-700'}
            `}>
              Core Principle
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {content[activeTab].items.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <CheckCircle2 className={`shrink-0 mt-1 ${
                  activeTab === Tab.INFRASTRUCTURE ? 'text-teal-500' : 
                  activeTab === Tab.GOVERNANCE ? 'text-blue-500' : 
                  'text-indigo-500'
                }`} size={24} />
                <div>
                  <h5 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h5>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PrinciplesSection;
