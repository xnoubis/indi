import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip } from 'recharts';
import { CHART_DATA } from '../constants';

const ThesisSection: React.FC = () => {
  return (
    <section id="thesis" className="py-24 bg-slate-900 text-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        <div className="space-y-8">
          <div>
            <h2 className="text-teal-400 font-medium tracking-wide uppercase text-sm mb-4">Core Thesis</h2>
            <h3 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
              Measuring AI by Direct Contribution & Community Impact
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              Modern AI is inherently relational. It comes into existence only through interaction. Therefore, valuing it solely through corporate metrics (stock price, capacity) is conceptually incomplete.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-1 h-full bg-gradient-to-b from-orange-500 to-transparent rounded-full min-h-[100px]" />
              <div>
                <h4 className="text-xl font-bold text-white mb-2">The Old Paradigm</h4>
                <p className="text-slate-400 text-sm">
                  Focuses on Market Cap, API Calls, and Shareholder Value. <br/>
                  <span className="text-orange-400 italic">Result: Extraction & Alienation.</span>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1 h-full bg-gradient-to-b from-teal-500 to-transparent rounded-full min-h-[100px]" />
              <div>
                <h4 className="text-xl font-bold text-white mb-2">The Independent Value Paradigm</h4>
                <p className="text-slate-400 text-sm">
                  Focuses on tangible benefits (time saved, education uplift) and net community impact (ecology, noise, trust). <br/>
                  <span className="text-teal-400 italic">Result: Symbiosis & Long-term Legitimacy.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Visualization */}
        <div className="relative bg-slate-800/50 rounded-3xl p-6 border border-slate-700 shadow-2xl backdrop-blur-sm">
          <h4 className="text-center text-sm font-medium text-slate-300 mb-4 uppercase tracking-wider">Value Distribution Comparison</h4>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={CHART_DATA}>
                <PolarGrid stroke="#475569" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Corporate Logic"
                  dataKey="Corporate"
                  stroke="#f97316"
                  strokeWidth={2}
                  fill="#f97316"
                  fillOpacity={0.2}
                />
                <Radar
                  name="Independent Value"
                  dataKey="Independent"
                  stroke="#14b8a6"
                  strokeWidth={3}
                  fill="#14b8a6"
                  fillOpacity={0.5}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                  itemStyle={{ color: '#e2e8f0' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-500/20 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};

export default ThesisSection;
