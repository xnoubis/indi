import React from 'react';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import ThesisSection from './components/ThesisSection';
import PrinciplesSection from './components/PrinciplesSection';
import FutureSection from './components/FutureSection';
import ChatInterface from './components/ChatInterface';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-teal-200 selection:text-teal-900">
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-serif font-bold text-slate-900 flex items-center gap-2">
            <div className="w-4 h-4 bg-teal-500 rounded-sm rotate-45" />
            CivicAI
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <button onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-teal-600 transition-colors">The Problem</button>
            <button onClick={() => document.getElementById('thesis')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-teal-600 transition-colors">Thesis</button>
            <button onClick={() => document.getElementById('principles')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-teal-600 transition-colors">Principles</button>
            <button onClick={() => document.getElementById('future')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-teal-600 transition-colors">Outlook</button>
          </div>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-xs font-bold bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-700 transition-colors">
            Get Involved
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <ProblemSection />
        <ThesisSection />
        <PrinciplesSection />
        <FutureSection />
      </main>

      <footer className="bg-slate-950 text-slate-500 py-12 px-6 text-center text-sm">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
          <div className="w-6 h-6 bg-teal-900/50 rounded-sm rotate-45 border border-teal-800" />
          <p>© 2024 Independent AI Value Framework. Open Source Initiative.</p>
        </div>
      </footer>

      <ChatInterface />
    </div>
  );
};

export default App;
