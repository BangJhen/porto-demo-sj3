"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Monitor, Server, Brain, BarChart3, Database, 
  Sparkles, LayoutGrid, Wrench, Cpu, Rocket, Quote, ArrowRight 
} from 'lucide-react';
import { 
  SiPython, SiTypescript, SiJavascript, SiGo, 
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer, 
  SiNodedotjs, SiFastapi, SiExpress, SiTensorflow, 
  SiPytorch, SiScikitlearn, SiPandas, SiNumpy, 
  SiJupyter, SiStreamlit, SiMongodb, SiPostgresql, 
  SiGit, SiDocker, SiVercel 
} from 'react-icons/si';

const getTechIcon = (tag: string) => {
  switch (tag.toLowerCase()) {
    case 'python': return <SiPython />;
    case 'typescript': return <SiTypescript />;
    case 'javascript': return <SiJavascript />;
    case 'golang': return <SiGo />;
    case 'react': return <SiReact />;
    case 'next.js': return <SiNextdotjs />;
    case 'tailwind css': return <SiTailwindcss />;
    case 'framer motion': return <SiFramer />;
    case 'node.js': return <SiNodedotjs />;
    case 'fastapi': return <SiFastapi />;
    case 'express': return <SiExpress />;
    case 'tensorflow': return <SiTensorflow />;
    case 'pytorch': return <SiPytorch />;
    case 'scikit-learn': return <SiScikitlearn />;
    case 'pandas': return <SiPandas />;
    case 'numpy': return <SiNumpy />;
    case 'jupyter': return <SiJupyter />;
    case 'streamlit': return <SiStreamlit />;
    case 'mongodb': return <SiMongodb />;
    case 'postgresql': return <SiPostgresql />;
    case 'git': return <SiGit />;
    case 'docker': return <SiDocker />;
    case 'vercel': return <SiVercel />;
    default: return null;
  }
};

export default function TechStack() {
  const categories = [
    {
      title: '1. Languages',
      icon: <Code2 size={24} />,
      techs: ['Python', 'TypeScript', 'JavaScript']
    },
    {
      title: '2. Frontend & Web',
      icon: <Monitor size={24} />,
      techs: ['React', 'Next.js', 'Tailwind CSS', 'Vite']
    },
    {
      title: '3. Web Scraping',
      icon: <Server size={24} />,
      techs: ['Puppeteer', 'Axios', 'REST API']
    },
    {
      title: '4. AI / Machine Learning',
      icon: <Brain size={24} />,
      techs: ['TensorFlow', 'PyTorch', 'scikit-learn', 'XGBoost', 'CatBoost', 'MediaPipe']
    },
    {
      title: '5. Data & Analytics',
      icon: <BarChart3 size={24} />,
      techs: ['Pandas', 'NumPy', 'Jupyter', 'Matplotlib']
    },
    {
      title: '6. Infra & Network',
      icon: <Database size={24} />,
      techs: ['Git', 'Docker', 'MikroTik']
    }
  ];

  return (
    <section id="tech-stack" className="w-full py-20 min-h-screen flex items-center bg-[#fafafa]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-[95rem] mx-auto w-full px-6 md:px-10 lg:px-16"
      >
        <div className="w-full space-y-12">
          
          {/* Header Section */}
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="uppercase tracking-widest text-sm font-semibold text-blue-600">
                Tech Stack
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.2] tracking-tight">
              Tools I <span className="text-[#1F5CE3]">Use</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              A curated set of technologies I use to build AI systems, data products, and modern web applications.
            </p>
          </div>

          {/* Main Layout Grid */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Categories Grid */}
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
              {categories.map((cat, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#1F5CE3]/10 text-[#1F5CE3] flex items-center justify-center shrink-0">
                      {cat.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">{cat.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2.5">
                    {cat.techs.map((tech, techIdx) => {
                      const Icon = getTechIcon(tech);
                      return (
                        <span 
                          key={techIdx}
                          className="px-4 py-2 bg-gray-50 text-gray-600 text-[13px] font-medium rounded-xl border border-gray-100 flex items-center gap-2 hover:border-[#1F5CE3]/30 hover:bg-[#1F5CE3]/5 transition-colors"
                        >
                          {Icon && <span className="text-[#1F5CE3] text-[15px]">{Icon}</span>}
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-4 bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm flex flex-col">
              
              {/* Sidebar Header */}
              <div className="flex items-start gap-4 mb-10">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1F5CE3] flex items-center justify-center shrink-0">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-xl mb-1">Stack at a Glance</h3>
                  <p className="text-gray-500 text-sm">Built for impact, optimized for scale.</p>
                </div>
              </div>

              {/* Stats List */}
              <div className="space-y-8">
                
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-50/50 text-[#1F5CE3] flex items-center justify-center shrink-0">
                    <LayoutGrid size={22} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#1F5CE3] leading-none mb-1">6</div>
                    <div className="text-gray-500 text-sm">Core Categories</div>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-50/50 text-[#1F5CE3] flex items-center justify-center shrink-0">
                    <Wrench size={22} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#1F5CE3] leading-none mb-1">20+</div>
                    <div className="text-gray-500 text-sm">Tools</div>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-50/50 text-[#1F5CE3] flex items-center justify-center shrink-0">
                    <Cpu size={22} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#1F5CE3] leading-none mb-1">AI + Web</div>
                    <div className="text-gray-500 text-sm">Focus</div>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-50/50 text-[#1F5CE3] flex items-center justify-center shrink-0">
                    <Rocket size={22} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#1F5CE3] leading-none mb-1">Always</div>
                    <div className="text-gray-500 text-sm">Exploring</div>
                  </div>
                </div>

              </div>

              {/* Quote Box */}
              <div className="mt-10 bg-gray-50/80 rounded-2xl p-5 flex items-start gap-3 border border-gray-100">
                <Quote size={20} className="text-blue-300 shrink-0 rotate-180 mt-1" />
                <p className="text-gray-500 text-sm font-medium leading-relaxed italic">
                  The right tool at the right time makes all the difference.
                </p>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
