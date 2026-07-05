"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { 
  Sparkles, Calendar, Briefcase, Code2, Database, Rocket, Laptop
} from 'lucide-react';

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
                What I've Been <br/>
                <span className="text-[#1F5CE3]">Working On</span>
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative pt-8" ref={containerRef}>
              <div className="absolute left-[27px] md:left-[39px] top-8 bottom-0 w-0.5 bg-gray-200 rounded-full"></div>
              
              <motion.div 
                className="absolute left-[27px] md:left-[39px] top-8 w-0.5 bg-[#1F5CE3] rounded-full origin-top"
                style={{ height: lineHeight }}
              ></motion.div>
              
              <div className="space-y-6">
                
                {/* Exp 1 */}
                <div className="relative flex items-start pl-14 md:pl-20">
                  <div className="absolute left-4 md:left-7 top-6 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#1F5CE3] shadow-[0_0_0_4px_rgba(31,92,227,0.1)] z-10"></div>
                  <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1F5CE3] flex items-center justify-center shrink-0">
                          <Code2 size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">Machine Learning Engineer</h3>
                          <p className="text-[#1F5CE3] font-medium text-sm mt-0.5">Freelance / Competitions</p>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100 text-gray-500 text-sm font-medium shrink-0">
                        <Calendar size={16} /> 2024 - Present
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      Developing advanced machine learning models including Deep Learning (CNN, LSTM), Time Series forecasting, and Fraud Detection using Graph ML. Competing in national level data science competitions (Kaggle, GEMASTIK).
                    </p>
                  </div>
                </div>

                {/* Exp 2 */}
                <div className="relative flex items-start pl-14 md:pl-20">
                  <div className="absolute left-4 md:left-7 top-6 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-gray-300 z-10"></div>
                  <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gray-50 text-gray-600 flex items-center justify-center shrink-0">
                          <Laptop size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">Web Developer</h3>
                          <p className="text-gray-600 font-medium text-sm mt-0.5">Freelance</p>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100 text-gray-500 text-sm font-medium shrink-0">
                        <Calendar size={16} /> 2023 - 2024
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      Building modern web applications using React, Next.js, and Tailwind CSS. Creating responsive and interactive user interfaces for various client needs and personal projects.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Key Highlights */}
          <div className="lg:pt-20">
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 sticky top-32">
              <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Sparkles className="text-[#1F5CE3]" size={24} /> Key Highlights
              </h3>
              
              <div className="space-y-8">
                
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#1F5CE3]/10 text-[#1F5CE3] flex items-center justify-center shrink-0 border border-transparent">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-[17px] mb-1.5">Machine Learning</h4>
                    <p className="text-gray-500 text-[14px] leading-relaxed">
                      Deep Learning, Computer Vision, Time Series Forecasting, Graph ML.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#1F5CE3]/10 text-[#1F5CE3] flex items-center justify-center shrink-0 border border-transparent">
                    <Database size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-[17px] mb-1.5">Data Engineering</h4>
                    <p className="text-gray-500 text-[14px] leading-relaxed">
                      Data pipeline creation, Web scraping, and Data analysis using Python.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#1F5CE3]/10 text-[#1F5CE3] flex items-center justify-center shrink-0 border border-transparent">
                    <Rocket size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-[17px] mb-1.5">Certifications</h4>
                    <p className="text-gray-500 text-[14px] leading-relaxed">
                      Mikrotik Certified Network Associate (MTCNA).
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </SectionWrapper>
  );
}
