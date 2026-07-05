"use client";
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Download, GraduationCap, Briefcase, Brain, Code2, Database, Rocket, Award, MapPin } from 'lucide-react';

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-[#fafafa]">
      <div className="w-full space-y-16">
        
        {/* Header */}
        <div className="space-y-6 max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="uppercase tracking-widest text-sm font-semibold text-blue-600">
              About Me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.2] tracking-tight">
            Bridging <span className="text-[#1F5CE3]">Data</span> &amp; Development
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            I am a Data Science student at Telkom University with a passion for Machine Learning, Artificial Intelligence, and Web Development. I enjoy transforming complex data into meaningful insights and building scalable web applications.
          </p>
          <div className="pt-2">
            <a 
              href="/Muhammad Ammar Ridho - Student at Telkom University - CV.pdf" 
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20"
            >
              <Download size={18} /> Download CV
            </a>
          </div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid md:grid-cols-12 gap-6">
            
            {/* Card 1: Education & Role */}
            <div className="md:col-span-5 bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100/50 relative overflow-hidden">
              <div className="space-y-6 relative z-10">
                {/* Edu */}
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#1F5CE3]/10 text-[#1F5CE3] flex items-center justify-center shrink-0 shadow-sm border border-[#1F5CE3]/20">
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">S1 Data Sains</h3>
                    <p className="text-gray-500 text-sm">Telkom University</p>
                  </div>
                </div>
                
                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
                
                {/* Role */}
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#1F5CE3]/10 text-[#1F5CE3] flex items-center justify-center shrink-0 shadow-sm border border-[#1F5CE3]/20">
                    <Briefcase size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">AI / ML Engineer</h3>
                    <p className="text-gray-500 text-sm">Aspiring Data Scientist &amp; Developer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Areas of Interest */}
            <div className="md:col-span-7 bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100/50">
              <h3 className="font-bold text-gray-900 mb-6">Areas of Interest</h3>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1F5CE3]/10 text-[#1F5CE3] font-medium text-sm cursor-default">
                  <Brain size={16} /> Machine Learning
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1F5CE3]/10 text-[#1F5CE3] font-medium text-sm cursor-default">
                  <Code2 size={16} /> Web Development
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1F5CE3]/10 text-[#1F5CE3] font-medium text-sm cursor-default">
                  <Database size={16} /> Data Engineering
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1F5CE3]/10 text-[#1F5CE3] font-medium text-sm cursor-default">
                  <Rocket size={16} /> Computer Vision
                </span>
              </div>
            </div>
            
        </div>

        {/* Stats Strip */}
        <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-sm border border-gray-100/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-gray-100">
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-14 h-14 rounded-2xl bg-[#1F5CE3]/10 text-[#1F5CE3] flex items-center justify-center mb-4">
                <Award size={28} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">3.81</div>
              <div className="text-sm text-gray-500 font-medium">Cumulative GPA</div>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-14 h-14 rounded-2xl bg-[#1F5CE3]/10 text-[#1F5CE3] flex items-center justify-center mb-4">
                <Briefcase size={28} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">6+</div>
              <div className="text-sm text-gray-500 font-medium">Projects Completed</div>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-14 h-14 rounded-2xl bg-[#1F5CE3]/10 text-[#1F5CE3] flex items-center justify-center mb-4">
                <Award size={28} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">MTCNA</div>
              <div className="text-sm text-gray-500 font-medium">Mikrotik Certified</div>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-14 h-14 rounded-2xl bg-[#1F5CE3]/10 text-[#1F5CE3] flex items-center justify-center mb-4">
                <MapPin size={28} />
              </div>
              <div className="text-xl font-bold text-gray-900 mb-1 mt-2">Bandung</div>
              <div className="text-sm text-gray-500 font-medium mt-1">Jawa Barat</div>
            </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
