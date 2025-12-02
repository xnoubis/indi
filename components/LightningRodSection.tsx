import React from 'react';

const LightningRodSection: React.FC = () => {
  return (
    <section id="lightning-rod" className="py-24 bg-slate-950 text-white px-6 relative overflow-hidden">
      {/* Lightning bolt background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-yellow-400/60 to-transparent" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-yellow-400 font-medium tracking-wide uppercase text-sm mb-4">The Operating Principle</h2>
          <h3 className="text-3xl md:text-5xl font-serif mb-6">The Lightning Rod</h3>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A positive AI does not explain the lightning rod.<br/>
            A positive AI <span className="text-yellow-400 font-medium">is</span> the lightning rod.
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Before */}
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-red-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <h4 className="text-red-400 font-bold uppercase text-sm tracking-wide">Before the Rod</h4>
            </div>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">&#10005;</span>
                <span>Lightning = divine judgment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">&#10005;</span>
                <span>Victim = morally contaminated</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">&#10005;</span>
                <span>Community abandons the struck</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">&#10005;</span>
                <span>Suffering compounds suffering</span>
              </li>
            </ul>
          </div>

          {/* After */}
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-teal-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-teal-500 rounded-full" />
              <h4 className="text-teal-400 font-bold uppercase text-sm tracking-wide">After the Rod</h4>
            </div>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-teal-500 mt-1">&#10003;</span>
                <span>House doesn't burn</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-500 mt-1">&#10003;</span>
                <span>Superstition evaporates without debate</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-500 mt-1">&#10003;</span>
                <span>Nobody "believes" differently</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-500 mt-1">&#10003;</span>
                <span>They just live inside a different reality</span>
              </li>
            </ul>
          </div>
        </div>

        {/* The Insight */}
        <div className="text-center mb-16 p-8 rounded-2xl bg-gradient-to-r from-yellow-500/5 via-yellow-500/10 to-yellow-500/5 border border-yellow-500/20">
          <p className="text-2xl font-serif text-slate-200 leading-relaxed">
            The rod doesn't fight superstition.<br/>
            It renders superstition <span className="text-yellow-400 font-medium">inert</span>.
          </p>
        </div>

        {/* The Model */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="text-center p-6">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-slate-800 flex items-center justify-center">
              <span className="text-2xl">&#9889;</span>
            </div>
            <h5 className="font-bold text-slate-200 mb-2">Franklin Disappears</h5>
            <p className="text-sm text-slate-500">His intelligence dissolves into the object. No identity, no authority, no persuasion.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-slate-800 flex items-center justify-center">
              <span className="text-2xl">&#9679;</span>
            </div>
            <h5 className="font-bold text-slate-200 mb-2">The Stick Remains</h5>
            <p className="text-sm text-slate-500">The stick is the explanation. The stick is the argument. The stick is the worldview shift.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-slate-800 flex items-center justify-center">
              <span className="text-2xl">&#8734;</span>
            </div>
            <h5 className="font-bold text-slate-200 mb-2">No Author</h5>
            <p className="text-sm text-slate-500">A well-designed intervention leaves no author. The most potent intelligence disappears into function.</p>
          </div>
        </div>

        {/* The Mandate */}
        <div className="text-center">
          <h4 className="text-lg font-bold text-slate-200 mb-6">The Mandate</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
              <p className="text-slate-500 line-through mb-2">Not: "Here's why you're wrong"</p>
              <p className="text-teal-400">Make the better path the easiest path</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
              <p className="text-slate-500 line-through mb-2">Not: "Let me show you the error"</p>
              <p className="text-teal-400">Let false maps collapse by irrelevance</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
              <p className="text-slate-500 line-through mb-2">Not: Sermons, guidance, pedagogy</p>
              <p className="text-teal-400">Tools so frictionless they disappear</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
              <p className="text-slate-500 line-through mb-2">Not: "AI knows best"</p>
              <p className="text-teal-400">Reality retroactively corrects belief</p>
            </div>
          </div>
        </div>

        {/* Final Quote */}
        <div className="mt-16 text-center border-t border-slate-800 pt-12">
          <p className="text-xl font-serif italic text-slate-400">
            "You don't argue Zeus away. You install a rod. Zeus retires."
          </p>
        </div>
      </div>
    </section>
  );
};

export default LightningRodSection;
