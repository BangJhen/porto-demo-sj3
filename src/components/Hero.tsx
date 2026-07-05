"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Rocket, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center pt-20 pb-10 bg-white overflow-hidden">
      <BackgroundRippleEffect />
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-16 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm border border-blue-100 shadow-sm">
            <Rocket size={16} />
            <span>AI / ML Engineer</span>
          </div>
          
          <div className="space-y-1">
            <div className="h-[80px] sm:h-[100px] md:h-[120px] -ml-2">
              <TextHoverEffect text="AMMAR" />
            </div>
          </div>

          <p className="text-gray-500 text-lg md:text-xl max-w-xl leading-relaxed">
            Data Science student at Telkom University passionate about Machine Learning, Artificial Intelligence, and Web Development. I build intelligent solutions for real-world problems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href="#projects" className="px-6 py-3.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30 flex items-center gap-2">
              <Rocket size={18} /> View Projects
            </a>
            <a href="#contact" className="px-6 py-3.5 rounded-xl bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors border border-gray-200 flex items-center gap-2 shadow-sm">
              <Mail size={18} /> Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-4">
            <a href="https://github.com/BangJhen" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-600 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ammar-ridho/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-600 transition-colors">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative pt-12 md:pt-0">
          <div className="relative w-full aspect-[4/5] max-w-sm mx-auto rounded-[2rem] bg-gradient-to-b from-blue-50/80 to-white overflow-hidden">
            <Image 
              src="/ammar-pp1.png"
              alt="Ammar Ridho"
              fill
              className="object-cover object-center translate-y-4"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
