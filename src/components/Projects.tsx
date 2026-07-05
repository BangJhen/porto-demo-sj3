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
  const projects = [
    {
      id: 1,
      title: 'Video Analysis Pipeline (Data Slayer)',
      desc: 'Landmark-based video analysis using MediaPipe and YOLOv8 for robust feature extraction and ensemble modeling (1st Place Kaggle).',
      tags: ['Python', 'MediaPipe', 'YOLOv8', 'XGBoost'],
      category: 'Computer Vision',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 2,
      title: 'Fraud Detection with Graph ML',
      desc: 'Fraud detection system for P2P lending platforms using Graph Convolutional Networks (GCN) and optimized ensemble learning (GEMASTIK).',
      tags: ['Python', 'PyTorch', 'PyG', 'XGBoost'],
      category: 'Machine Learning',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 3,
      title: 'Food Price Forecasting',
      desc: 'Deep learning models (NHITS, NBEATSx, LSTM) to forecast daily food prices for 13 commodities across 34 Indonesian provinces.',
      tags: ['Python', 'PyTorch', 'Deep Learning'],
      category: 'Time Series',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 4,
      title: 'Web Scraping Solutions',
      desc: 'Automated web scraping and crawling pipelines for social media platforms with session handling for stable API responses.',
      tags: ['TypeScript', 'Puppeteer', 'Axios'],
      category: 'Data Engineering',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 5,
      title: 'CNN Optimization for MNIST',
      desc: 'Implementation and optimization of Convolutional Neural Networks (CNN) architecture using Keras Tuner for MNIST datasets.',
      tags: ['Python', 'TensorFlow', 'Keras'],
      category: 'Deep Learning',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 6,
      title: 'Personal Portfolio Website',
      desc: 'A modern, responsive single-page portfolio website built to showcase projects, skills, and experiences interactively.',
      tags: ['React', 'Next.js', 'Tailwind CSS'],
      category: 'Web Development',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800',
    },
  ];

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
