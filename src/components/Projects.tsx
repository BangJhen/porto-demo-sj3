"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, 
  SiPytorch, SiPandas, SiMongodb, SiScikitlearn, SiStreamlit, 
  SiPostgresql, SiFramer
} from 'react-icons/si';
import portfolioData from '@/data/portfolio.json';

const getTechIcon = (tag: string) => {
  switch (tag.toLowerCase()) {
    case 'next.js': return <SiNextdotjs />;
    case 'typescript': return <SiTypescript />;
    case 'tailwind css': return <SiTailwindcss />;
    case 'openai api':
    case 'openai': return null; // Using text only since icon is missing
    case 'framer motion': return <SiFramer />;
    case 'python': return <SiPython />;
    case 'pytorch': return <SiPytorch />;
    case 'pandas': return <SiPandas />;
    case 'mongodb': return <SiMongodb />;
    case 'scikit-learn': return <SiScikitlearn />;
    case 'streamlit': return <SiStreamlit />;
    case 'postgresql': return <SiPostgresql />;
    default: return null;
  }
};

export default function Projects() {
  const projects = portfolioData.projects.list;

  return (
    <section id="projects" className="w-full py-20 min-h-screen flex items-center bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-[95rem] mx-auto w-full px-6 md:px-10 lg:px-16"
      >
        <div className="w-full space-y-16">
        
        {/* Header Section */}
        <div className="space-y-6 max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="uppercase tracking-widest text-sm font-semibold text-blue-600">
              Projects
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.2] tracking-tight">
            Project <span className="text-[#1F5CE3]">Gallery</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            A selection of projects across AI, machine learning, web development, and data-driven products that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-[2rem] p-3 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[16/9] rounded-[1.5rem] overflow-hidden mb-6 bg-gray-50">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="px-3 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                  {project.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, idx) => {
                    const Icon = getTechIcon(tag);
                    return (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 bg-gray-50 text-gray-600 text-xs font-medium rounded-lg border border-gray-100 flex items-center gap-1.5"
                      >
                        {Icon && <span className="text-[#1F5CE3] text-[14px]">{Icon}</span>}
                        {tag}
                      </span>
                    );
                  })}
                </div>

                {/* Footer (Year, Category, Link) */}
                <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-50">
                  <div>
                    <span className="block text-gray-900 font-bold text-sm">{project.year}</span>
                    <span className="block text-gray-400 text-xs font-medium">{project.category}</span>
                  </div>
                  <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#1F5CE3] hover:border-[#1F5CE3] transition-colors">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        </div>

      </motion.div>
    </section>
  );
}
