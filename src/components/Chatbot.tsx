"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MoreHorizontal, X, Rocket, LayoutGrid, Mail, Send, Loader2 } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

interface Message {
  id: string;
  type: 'bot' | 'user';
  text: string;
  time: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: "Hi there! 👋 I'm Ammar's AI assistant. How can I help you today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const systemPrompt = portfolioData.chatbot.systemPrompt;

  // Auto scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    // Add user message
    const userMsg: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: userText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Build conversation history for context
      const conversationContext = messages.map(m => `${m.type === 'bot' ? 'Assistant' : 'User'}: ${m.text}`).join('\n');
      const fullPrompt = `${systemPrompt}\n\nHere is the conversation history:\n${conversationContext}\nUser: ${userText}\nAssistant:`;

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: fullPrompt }),
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'Failed to fetch response');
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: data.text || "No response generated.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error: any) {
      console.error("Chat API Error:", error);
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: `Error: ${error.message || "I'm having trouble connecting to my AI brain right now. Please try again later!"}`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickAction = (text: string) => {
    setInputValue(text);
    // Optional: directly send instead of just filling the input
    // But filling the input lets them edit or just press enter
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col origin-bottom-right"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 px-5 border-b border-gray-50 bg-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1F5CE3] flex items-center justify-center shrink-0">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-[15px] leading-tight">AI Assistant</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="text-gray-500 text-xs font-medium">Online now</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
                  <MoreHorizontal size={20} />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-50 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-5 h-[350px] overflow-y-auto bg-[#fafafa] flex flex-col gap-5">
              
              {messages.map((msg) => (
                <div key={msg.id} className={`flex items-start gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                  
                  {msg.type === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1F5CE3] flex items-center justify-center shrink-0 mt-1">
                      <Sparkles size={14} />
                    </div>
                  )}

                  <div className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
                    <div 
                      className={`px-4 py-3 rounded-2xl max-w-[260px] text-[15px] leading-relaxed shadow-sm
                        ${msg.type === 'bot' 
                          ? 'bg-white text-gray-800 rounded-tl-sm border border-gray-100' 
                          : 'bg-[#1F5CE3] text-white rounded-tr-sm'
                        }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[11px] text-gray-400 font-medium mt-1.5 px-1">{msg.time}</span>
                  </div>

                </div>
              ))}
              
              {/* Quick Actions */}
              {!isTyping && messages.length === 1 && (
                <div className="flex flex-col gap-2.5 mt-2 pl-11">
                  <button 
                    onClick={() => handleQuickAction('Show my projects')}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-medium hover:border-[#1F5CE3] hover:text-[#1F5CE3] transition-colors w-fit shadow-sm"
                  >
                    <Rocket size={16} className="text-[#1F5CE3]" /> Show my projects
                  </button>
                  <button 
                    onClick={() => handleQuickAction('View tech stack')}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-medium hover:border-[#1F5CE3] hover:text-[#1F5CE3] transition-colors w-fit shadow-sm"
                  >
                    <LayoutGrid size={16} className="text-[#1F5CE3]" /> View tech stack
                  </button>
                  <button 
                    onClick={() => handleQuickAction('Contact Ammar')}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-medium hover:border-[#1F5CE3] hover:text-[#1F5CE3] transition-colors w-fit shadow-sm"
                  >
                    <Mail size={16} className="text-[#1F5CE3]" /> Contact Ammar
                  </button>
                </div>
              )}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1F5CE3] flex items-center justify-center shrink-0 mt-1">
                    <Sparkles size={14} />
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="px-4 py-3 rounded-2xl bg-white text-gray-800 rounded-tl-sm border border-gray-100 shadow-sm flex items-center gap-1.5 h-11">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-50">
              <form 
                onSubmit={handleSend}
                className="flex items-center gap-3 p-1.5 pl-4 bg-[#fafafa] border border-gray-200 rounded-full focus-within:border-[#1F5CE3] focus-within:ring-1 focus-within:ring-[#1F5CE3] transition-all shadow-sm"
              >
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about projects, skills..."
                  className="flex-1 bg-transparent border-none focus:outline-none text-sm text-gray-700 placeholder:text-gray-400"
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="w-10 h-10 rounded-full bg-[#1F5CE3] text-white flex items-center justify-center shrink-0 hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-blue-500/20"
                >
                  {isTyping ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} className="ml-1" />}
                </button>
              </form>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 rounded-full bg-[#1F5CE3] hover:bg-blue-700 text-white flex items-center justify-center shadow-[0_8px_30px_rgb(31,92,227,0.3)] transition-all hover:scale-105 active:scale-95 z-50"
        aria-label="Toggle AI Chatbot"
      >
        <Sparkles size={28} />
        
        {/* Notification Dot */}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-white rounded-full flex items-center justify-center">
            <span className="w-2.5 h-2.5 bg-[#1F5CE3] rounded-full animate-pulse"></span>
          </span>
        )}
      </button>

    </div>
  );
}
