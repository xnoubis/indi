import React from 'react';
import { Factory, Users, Zap, Ear, Droplets, TrendingDown } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <Factory className="text-orange-500" />,
      title: "Infrastructure-First",
      desc: "Data centers are sited based on efficiency and shareholder value, not human need. Locals are treated as background variables, not partners."
    },
    {
      icon: <Users className="text-orange-500" />,
      title: "Broken Social Contract",
      desc: "Promises of 'jobs' obscure reality: highly automated facilities, specialized skill requirements, and asymmetric bargaining power."
    },
    {
      icon: <Ear className="text-orange-500" />,
      title: "Lived Externalities",
      desc: "Neighbors bear the burden: persistent noise pollution, water usage stress, and the transformation of neighborhoods into industrial zones."
    },
    {
      icon: <TrendingDown className="text-orange-500" />,
      title: "Erosion of Trust",
      desc: "When benefits are thin and harms are concrete, resentment builds, leading to policy backlash and delegitimization of AI progress."
    }
  ];

  return (
    <section id="problem" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:w-2/3">
          <h2 className="text-teal-600 font-medium tracking-wide uppercase text-sm mb-4">The Problem</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6">Infrastructure Without Relationship</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            Current AI development is rooted in corporate logics that centralize capacity while externalizing costs. The result is a paradigm where AI is experienced locally not as a partner, but as a distant industrial footprint.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, idx) => (
            <div key={idx} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-orange-200 transition-all group">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
