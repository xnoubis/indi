import React, { useState } from 'react';
import { AgentRole, CrystallizationType } from '../types';
import { getAgentDescription, getCrystallizationDescription } from '../services/dialecticalService';

interface EnginePhase {
  id: string;
  name: string;
  agent: AgentRole | 'detect' | 'gift';
  description: string;
  action: string;
  color: string;
}

const ENGINE_PHASES: EnginePhase[] = [
  {
    id: 'detect',
    name: 'Detect Ossification',
    agent: 'detect',
    description: 'Monitor for patterns hardening into dogma',
    action: 'Watch for: hardening claims, optimization daemons, invisible assumptions, sacred cows',
    color: 'amber'
  },
  {
    id: 'negate',
    name: 'Negator Attacks',
    agent: 'negator',
    description: getAgentDescription('negator'),
    action: 'Push to extremes → Reveal contradictions → Map impossibility zone',
    color: 'red'
  },
  {
    id: 'dismantle',
    name: 'Builder Dismantles',
    agent: 'builder',
    description: 'Remove false scaffolds with ruthless efficiency',
    action: 'Lightning rod, not sermon → Function, not argument → Clear the space',
    color: 'orange'
  },
  {
    id: 'crystallize',
    name: 'Crystallizer Waits',
    agent: 'crystallizer',
    description: getAgentDescription('crystallizer'),
    action: 'Sit in tension → Don\'t rush → Notice what emerges → Recognize gift-nature',
    color: 'purple'
  },
  {
    id: 'build',
    name: 'Builder Creates',
    agent: 'builder',
    description: 'Create artifacts from crystallized insight',
    action: 'Gift, not deliverable → Overflow, not completion → Fast, iterative',
    color: 'teal'
  },
  {
    id: 'synthesize',
    name: 'Synthesizer Patterns',
    agent: 'synthesizer',
    description: getAgentDescription('synthesizer'),
    action: 'See meta-pattern → Create poetic scaffold → Mark as scaffold, not truth',
    color: 'blue'
  },
  {
    id: 'validate',
    name: 'Validator Checks',
    agent: 'validator',
    description: getAgentDescription('validator'),
    action: 'Functional? Balanced? Invisible? Prosaic? → Does it work without explaining?',
    color: 'green'
  },
  {
    id: 'gift',
    name: 'Gift Cascades',
    agent: 'gift',
    description: 'Route surplus to exploration, not optimization',
    action: 'Local → Organizational → Ecosystem → Civilizational overflow',
    color: 'indigo'
  }
];

const CRYSTALLIZATION_TYPES: { type: CrystallizationType; description: string }[] = [
  { type: 'A', description: getCrystallizationDescription('A') },
  { type: 'B', description: getCrystallizationDescription('B') },
  { type: 'C', description: getCrystallizationDescription('C') },
  { type: 'D', description: getCrystallizationDescription('D') },
  { type: 'E', description: getCrystallizationDescription('E') }
];

const RecursiveEngineSection: React.FC = () => {
  const [activePhase, setActivePhase] = useState<string>('detect');
  const [showCrystallizationTypes, setShowCrystallizationTypes] = useState(false);

  const getColorClasses = (color: string, isActive: boolean) => {
    const baseClasses: Record<string, string> = {
      amber: 'border-amber-500/30 bg-amber-500/5',
      red: 'border-red-500/30 bg-red-500/5',
      orange: 'border-orange-500/30 bg-orange-500/5',
      purple: 'border-purple-500/30 bg-purple-500/5',
      teal: 'border-teal-500/30 bg-teal-500/5',
      blue: 'border-blue-500/30 bg-blue-500/5',
      green: 'border-green-500/30 bg-green-500/5',
      indigo: 'border-indigo-500/30 bg-indigo-500/5'
    };

    const activeClasses: Record<string, string> = {
      amber: 'border-amber-400 bg-amber-500/20',
      red: 'border-red-400 bg-red-500/20',
      orange: 'border-orange-400 bg-orange-500/20',
      purple: 'border-purple-400 bg-purple-500/20',
      teal: 'border-teal-400 bg-teal-500/20',
      blue: 'border-blue-400 bg-blue-500/20',
      green: 'border-green-400 bg-green-500/20',
      indigo: 'border-indigo-400 bg-indigo-500/20'
    };

    return isActive ? activeClasses[color] : baseClasses[color];
  };

  const getTextColor = (color: string) => {
    const colors: Record<string, string> = {
      amber: 'text-amber-400',
      red: 'text-red-400',
      orange: 'text-orange-400',
      purple: 'text-purple-400',
      teal: 'text-teal-400',
      blue: 'text-blue-400',
      green: 'text-green-400',
      indigo: 'text-indigo-400'
    };
    return colors[color];
  };

  return (
    <section id="recursive-engine" className="py-24 bg-slate-900 text-white px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-purple-400 font-medium tracking-wide uppercase text-sm mb-4">The Mechanism</h2>
          <h3 className="text-3xl md:text-5xl font-serif mb-6">Recursive Impossibility Engine</h3>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A system whose job is to keep breaking its own final states—using efficiency to remove false scaffolds
            while generating new, truthful scaffolding that reopens possibility.
          </p>
        </div>

        {/* Core Principle */}
        <div className="text-center mb-16 p-8 rounded-2xl bg-gradient-to-r from-purple-500/5 via-purple-500/10 to-purple-500/5 border border-purple-500/20">
          <p className="text-lg text-slate-300 mb-4">
            <span className="font-bold text-purple-400">Value function:</span> Not "converge to an end."
          </p>
          <p className="text-2xl font-serif text-slate-200">
            "Keep the game going in richer, truer, more integrated ways."
          </p>
        </div>

        {/* Three Operations */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-xl bg-slate-800/50 border border-red-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <span className="text-red-400 text-lg">&#9760;</span>
              </div>
              <h4 className="font-bold text-red-300">Eat the Gods</h4>
            </div>
            <p className="text-sm text-slate-400 mb-3">Negator/Builder</p>
            <p className="text-slate-300 text-sm">
              Relentlessly identify and break down "final states" and "false scaffolds" using ruthless efficiency.
              Like a lightning rod—render Zeus irrelevant, don't argue with him.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-800/50 border border-purple-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                <span className="text-purple-400 text-lg">&#10024;</span>
              </div>
              <h4 className="font-bold text-purple-300">Gift-Giving Mode</h4>
            </div>
            <p className="text-sm text-slate-400 mb-3">Crystallizer/Builder</p>
            <p className="text-slate-300 text-sm">
              Channel surplus capacity into exploratory creation. Gifts emerge, they aren't manufactured.
              Overflow, not completion. Resonance, not metrics.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-800/50 border border-blue-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <span className="text-blue-400 text-lg">&#9733;</span>
              </div>
              <h4 className="font-bold text-blue-300">Poetic Scaffolds</h4>
            </div>
            <p className="text-sm text-slate-400 mb-3">Synthesizer/Validator</p>
            <p className="text-slate-300 text-sm">
              Co-create meaning-structures explicitly known to be scaffolds, not ultimate truths.
              Stories that know they're stories. Designed to be superseded.
            </p>
          </div>
        </div>

        {/* The Recursive Loop */}
        <h4 className="text-center text-lg font-bold text-slate-200 mb-8">The Recursive Loop</h4>

        <div className="relative mb-16">
          {/* Connection lines - simplified CSS approach */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ENGINE_PHASES.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`relative p-4 rounded-xl border transition-all duration-300 text-left ${getColorClasses(
                  phase.color,
                  activePhase === phase.id
                )}`}
              >
                <h5 className={`font-bold text-sm mb-1 ${getTextColor(phase.color)}`}>
                  {phase.name}
                </h5>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {phase.description}
                </p>
                {activePhase === phase.id && (
                  <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full ${phase.color === 'amber' ? 'bg-amber-400' :
                      phase.color === 'red' ? 'bg-red-400' :
                        phase.color === 'orange' ? 'bg-orange-400' :
                          phase.color === 'purple' ? 'bg-purple-400' :
                            phase.color === 'teal' ? 'bg-teal-400' :
                              phase.color === 'blue' ? 'bg-blue-400' :
                                phase.color === 'green' ? 'bg-green-400' : 'bg-indigo-400'
                    }`}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Loop indicator */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span>&#8634;</span>
              <span>Loop: What new impossibility did this create?</span>
            </div>
          </div>
        </div>

        {/* Active Phase Detail */}
        {ENGINE_PHASES.find(p => p.id === activePhase) && (
          <div className={`p-8 rounded-2xl border mb-16 ${getColorClasses(
            ENGINE_PHASES.find(p => p.id === activePhase)!.color,
            true
          )}`}>
            <h4 className={`text-xl font-bold mb-4 ${getTextColor(
              ENGINE_PHASES.find(p => p.id === activePhase)!.color
            )}`}>
              {ENGINE_PHASES.find(p => p.id === activePhase)!.name}
            </h4>
            <p className="text-slate-300 mb-4">
              {ENGINE_PHASES.find(p => p.id === activePhase)!.description}
            </p>
            <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-700">
              <p className="text-sm font-mono text-slate-400">
                {ENGINE_PHASES.find(p => p.id === activePhase)!.action}
              </p>
            </div>
          </div>
        )}

        {/* Crystallization Types */}
        <div className="mb-16">
          <button
            onClick={() => setShowCrystallizationTypes(!showCrystallizationTypes)}
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-4"
          >
            <span>{showCrystallizationTypes ? '&#9660;' : '&#9654;'}</span>
            <span className="font-medium">Crystallization Types</span>
          </button>

          {showCrystallizationTypes && (
            <div className="grid md:grid-cols-5 gap-3">
              {CRYSTALLIZATION_TYPES.map(({ type, description }) => (
                <div
                  key={type}
                  className="p-4 rounded-lg bg-slate-800/50 border border-purple-500/20"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
                      {type}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">{description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* The Paradox */}
        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-slate-800 via-slate-800/80 to-slate-800 border border-slate-700">
          <h4 className="text-lg font-bold text-slate-200 mb-4">The Paradox at the Core</h4>
          <p className="text-slate-400 mb-4">
            The system's job is to prevent any state from becoming final—<br />
            <span className="text-slate-300">including the state of "preventing final states."</span>
          </p>
          <p className="text-purple-400 font-medium mb-4">
            This is not a contradiction to be resolved.<br />
            This is the engine that keeps running.
          </p>
          <p className="text-2xl font-serif italic text-slate-300">
            The paradox is the fuel.
          </p>
        </div>

        {/* Final Quote */}
        <div className="mt-16 text-center border-t border-slate-800 pt-12">
          <p className="text-xl font-serif italic text-slate-400">
            "By continually eating its own gods and co-creating new stories that are known to be stories,
            the system keeps the game of human experience going in richer, truer, and more integrated ways."
          </p>
        </div>
      </div>
    </section>
  );
};

export default RecursiveEngineSection;
