"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { 
  Sparkles, Calendar, icons 
} from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const experiences = portfolioData.experience.timeline;

  return (
    <SectionWrapper id="experience" className="bg-[#fafafa] relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        
        <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
          
          {/* Left Column: Timeline */}
          <div className="space-y-10">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="uppercase tracking-widest text-sm font-semibold text-blue-600">
                  Experience
                </span>
                
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                What I&apos;ve Been <br/>
                <span className="text-[#1F5CE3]">Working On</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
                {portfolioData.experience.description}
              </p>
            </div>

            {/* Timeline List */}
            <div className="relative" ref={containerRef}>
              {/* Vertical Line */}
              <div className="absolute left-6 md:left-10 top-8 bottom-8 w-px bg-gray-200 -translate-x-1/2 overflow-hidden">
                <motion.div 
                  className="w-full bg-blue-600"
                  style={{ height: lineHeight }}
                />
              </div>
              
              <div className="space-y-6">
                {experiences.map((exp) => {
                  const Icon = icons[exp.icon as keyof typeof icons] || icons.Circle;
                  return (
                    <div key={exp.id} className="relative flex items-start pl-14 md:pl-20">
                      {/* Timeline Dot */}
                      <div className="absolute left-6 md:left-10 top-8 w-2.5 h-2.5 rounded-full bg-blue-500 border-4 border-[#fafafa] box-content -translate-x-1/2"></div>
                      
                      {/* Card */}
                      <div className="bg-white rounded-3xl p-5 md:p-6 shadow-sm border border-gray-100/60 flex-1 transition-shadow">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                          
                          <div className="flex items-start gap-4 flex-1">
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-2xl bg-[#1F5CE3]/10 text-[#1F5CE3] flex items-center justify-center shrink-0 border border-transparent [&>svg]:w-6 [&>svg]:h-6">
                              <Icon size={24} />
                            </div>
                            
                            {/* Content */}
                            <div className="space-y-1.5 mt-0.5">
                              <h3 className="text-base md:text-lg font-bold text-gray-900 leading-snug">
                                {exp.role}
                              </h3>
                              <p className="text-[#1F5CE3] font-medium text-[13px]">
                                {exp.company}
                              </p>
                              <p className="text-gray-500 text-[13px] leading-relaxed mt-1">
                                {exp.desc}
                              </p>
                            </div>
                          </div>

                          {/* Date & Options */}
                          <div className="flex items-center gap-3 shrink-0 self-start mt-2 md:mt-1">
                            <div className="flex items-center gap-2 text-gray-400">
                              <Calendar size={14} />
                              <span className="text-xs font-medium">{exp.date}</span>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
          </div>

          {/* Right Column: Highlights */}
          <div className="lg:pt-24">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-gray-100/60 sticky top-24">
              
              <div className="flex items-center gap-3 mb-10">
                <Sparkles className="text-[#1F5CE3]" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Experience Highlights</h3>
              </div>
              
              <div className="space-y-8">
                
                {portfolioData.experience.highlights.map((hl, idx) => {
                  const Icon = icons[hl.icon as keyof typeof icons] || icons.Circle;
                  return (
                    <div key={idx} className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-[#1F5CE3]/10 text-[#1F5CE3] flex items-center justify-center shrink-0 border border-transparent">
                        <Icon size={24} />
                      </div>
                      <div className="mt-1">
                        <h4 className="font-bold text-gray-900 mb-1">{hl.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {hl.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}

              </div>
            </div>
          </div>
          
        </div>

      </div>
    </SectionWrapper>
  );
}
