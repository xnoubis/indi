import React, { useState, useCallback } from 'react';
import {
  SignatureProfile,
  createEmptySignature,
  analyzeForPatterns,
  generateReflection,
  getNextPrompt,
  formatSignatureDisplay,
  isSignatureMature,
  generatePoeticScaffold,
  ReflectionPrompt
} from '../services/signatureService';

interface PatternBarProps {
  dimension: string;
  spectrum: [string, string];
  position: number;
  confidence: number;
}

const PatternBar: React.FC<PatternBarProps> = ({ dimension, spectrum, position, confidence }) => {
  const opacity = 0.3 + (confidence * 0.7);

  return (
    <div className="mb-6" style={{ opacity }}>
      <div className="flex justify-between text-xs text-slate-500 mb-1">
        <span>{spectrum[0]}</span>
        <span className="text-slate-400 font-medium">{dimension}</span>
        <span>{spectrum[1]}</span>
      </div>
      <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500/30 to-teal-500/30 rounded-full"
          style={{ width: '100%' }}
        />
        <div
          className="absolute top-0 h-full w-3 bg-white rounded-full shadow-lg transform -translate-x-1/2 transition-all duration-500"
          style={{ left: `${position * 100}%` }}
        />
      </div>
      {confidence < 0.2 && (
        <p className="text-xs text-slate-600 mt-1 italic">Still emerging...</p>
      )}
    </div>
  );
};

const PatternMirror: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [signature, setSignature] = useState<SignatureProfile>(createEmptySignature());
  const [currentPrompt, setCurrentPrompt] = useState<ReflectionPrompt>(getNextPrompt(createEmptySignature()));
  const [userInput, setUserInput] = useState('');
  const [reflections, setReflections] = useState<string[]>([]);
  const [showScaffold, setShowScaffold] = useState(false);
  const [phase, setPhase] = useState<'reflect' | 'observe' | 'scaffold'>('reflect');

  const handleSubmitReflection = useCallback(() => {
    if (!userInput.trim()) return;

    // Analyze the input for patterns
    const newSignature = analyzeForPatterns(userInput, signature);
    setSignature(newSignature);

    // Generate a gentle reflection
    const reflection = generateReflection(newSignature);
    setReflections(prev => [...prev.slice(-4), reflection]);

    // Clear input and get next prompt
    setUserInput('');
    setCurrentPrompt(getNextPrompt(newSignature));

    // Check if we should offer the scaffold
    if (isSignatureMature(newSignature) && !showScaffold) {
      setPhase('observe');
    }
  }, [userInput, signature, showScaffold]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmitReflection();
    }
  };

  const displayDimensions = formatSignatureDisplay(signature);

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-40 w-14 h-14 bg-gradient-to-br from-purple-600 to-teal-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Open Pattern Mirror"
      >
        <span className="text-white text-2xl group-hover:scale-110 transition-transform">&#9683;</span>
      </button>

      {/* Full-screen mirror interface */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-sm overflow-y-auto">
          <div className="min-h-screen py-12 px-6">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h2 className="text-3xl font-serif text-white mb-2">Pattern Mirror</h2>
                  <p className="text-slate-400">
                    A space to discover your patterns. Not extraction—reflection.
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-500 hover:text-white transition-colors text-2xl"
                >
                  &times;
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Left: Reflection Space */}
                <div>
                  <div className="mb-8">
                    <p className="text-xs text-purple-400 uppercase tracking-wide mb-2">
                      {currentPrompt.context}
                    </p>
                    <p className="text-xl text-slate-200 font-serif leading-relaxed">
                      {currentPrompt.question}
                    </p>
                  </div>

                  <div className="relative mb-6">
                    <textarea
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Reflect here... (Enter to submit)"
                      className="w-full h-32 bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-purple-500/50 resize-none"
                    />
                    <button
                      onClick={handleSubmitReflection}
                      disabled={!userInput.trim()}
                      className="absolute bottom-4 right-4 px-4 py-2 bg-purple-600/20 text-purple-400 rounded-lg text-sm hover:bg-purple-600/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    >
                      Reflect
                    </button>
                  </div>

                  {/* Recent reflections */}
                  {reflections.length > 0 && (
                    <div className="space-y-3">
                      <p className="text-xs text-slate-600 uppercase tracking-wide">What's emerging:</p>
                      {reflections.map((reflection, i) => (
                        <p
                          key={i}
                          className="text-sm text-slate-400 p-3 rounded-lg bg-slate-900/30 border border-slate-800/50"
                          style={{ opacity: 0.5 + (i / reflections.length) * 0.5 }}
                        >
                          {reflection}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right: Pattern Visualization */}
                <div>
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-slate-300 mb-2">Your Patterns</h3>
                    <p className="text-sm text-slate-500">
                      These are mirrors, not judgments. Observations, not extractions.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800/50">
                    {displayDimensions.map((dim, i) => (
                      <PatternBar key={i} {...dim} />
                    ))}
                  </div>

                  {/* Phase-based prompts */}
                  {phase === 'observe' && !showScaffold && (
                    <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-purple-900/20 to-teal-900/20 border border-purple-500/20">
                      <p className="text-slate-300 mb-4">
                        Patterns are emerging. Would you like to see them woven into a poetic scaffold?
                      </p>
                      <p className="text-xs text-slate-500 mb-4">
                        (A scaffold is not a definition. It's a temporary structure to see from.)
                      </p>
                      <button
                        onClick={() => {
                          setShowScaffold(true);
                          setPhase('scaffold');
                        }}
                        className="px-4 py-2 bg-purple-600/30 text-purple-300 rounded-lg text-sm hover:bg-purple-600/40 transition-all"
                      >
                        Show me the scaffold
                      </button>
                    </div>
                  )}

                  {showScaffold && (
                    <div className="mt-8 p-6 rounded-xl bg-slate-900/50 border border-slate-700">
                      <h4 className="text-sm text-teal-400 uppercase tracking-wide mb-4">
                        Poetic Scaffold
                      </h4>
                      <pre className="text-slate-300 font-serif whitespace-pre-wrap leading-relaxed text-sm">
                        {generatePoeticScaffold(signature)}
                      </pre>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer philosophy */}
              <div className="mt-16 pt-8 border-t border-slate-800/50 text-center">
                <p className="text-slate-600 text-sm max-w-2xl mx-auto">
                  This interface preserves patterns while letting content evaporate.
                  Nothing you write is stored—only the <em>shape</em> of your engagement is reflected back.
                  Like grandmother's face fading while grandmother-as-relation persists.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PatternMirror;
