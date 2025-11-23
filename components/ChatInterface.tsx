import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { ChatMessage, MessageRole } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const ChatInterface: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: MessageRole.MODEL,
      text: "Hello. I am the voice of the Independent AI Value framework. Ask me how we can reimagine AI infrastructure, governance, or ethics.",
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      role: MessageRole.USER,
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Pass the *previous* messages (excluding the one just added locally for render)
      // logically, but the service handles history construction. 
      // We pass 'messages' which doesn't include userMsg yet in state closure, 
      // but actually we should pass the full history.
      
      const responseText = await sendMessageToGemini(userMsg.text, messages);
      
      const aiMsg: ChatMessage = {
        role: MessageRole.MODEL,
        text: responseText,
        timestamp: Date.now()
      };
      
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Chat Window */}
      <div 
        className={`
          pointer-events-auto bg-white/95 backdrop-blur-md border border-slate-200 shadow-2xl rounded-2xl w-[90vw] md:w-[400px] 
          transition-all duration-300 origin-bottom-right overflow-hidden flex flex-col
          ${isOpen ? 'h-[500px] opacity-100 scale-100 mb-4' : 'h-0 opacity-0 scale-90 mb-0'}
        `}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-4 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <h3 className="font-semibold text-sm">Framework Assistant</h3>
          </div>
          <button onClick={toggleChat} className="hover:text-teal-300 transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex ${msg.role === MessageRole.USER ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`
                  max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed shadow-sm
                  ${msg.role === MessageRole.USER 
                    ? 'bg-slate-800 text-white rounded-br-sm' 
                    : 'bg-white text-slate-700 border border-slate-100 rounded-bl-sm'}
                `}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-100 rounded-2xl p-3 flex items-center gap-2">
                <Loader2 size={16} className="animate-spin text-teal-500" />
                <span className="text-xs text-slate-400">Thinking...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 bg-white border-t border-slate-100 shrink-0">
          <div className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2 border border-transparent focus-within:border-teal-500 focus-within:bg-white transition-all">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about independent AI value..."
              className="flex-1 bg-transparent outline-none text-sm text-slate-800 placeholder:text-slate-400"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="text-slate-400 hover:text-teal-600 disabled:opacity-50 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button 
        onClick={toggleChat}
        className={`
          pointer-events-auto shadow-lg hover:shadow-teal-500/20 transition-all duration-300
          flex items-center justify-center w-14 h-14 rounded-full
          ${isOpen ? 'bg-slate-200 text-slate-600 rotate-90' : 'bg-slate-900 text-white hover:bg-teal-600 hover:scale-105'}
        `}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};

export default ChatInterface;
