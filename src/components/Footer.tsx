"use client";
import React from 'react';
import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-white border-t border-gray-100 py-10 relative">
      <div className="max-w-[85rem] mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Copyright */}
        <div className="text-center md:text-left">
          <p className="text-gray-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} <span className="text-gray-900 font-bold">Ammar Ridho</span>. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs mt-1">
            Built with Next.js & Tailwind CSS
          </p>
        </div>

        {/* Middle: Socials (Optional/Small) */}
        <div className="flex items-center gap-4">
          <a href="https://github.com/BangJhen" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/ammar-ridho/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Right: Back to top */}
        <button 
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#1F5CE3] hover:border-[#1F5CE3]/30 hover:bg-blue-50 transition-all shadow-sm"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>

      </div>
    </footer>
  );
}
