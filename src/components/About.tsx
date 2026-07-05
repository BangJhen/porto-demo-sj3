import React from 'react';
import SectionWrapper from './SectionWrapper';
import { icons } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-[#fafafa] relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* TOP SECTION: About Text + Right Cards */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8">
          
          {/* Left: About Text */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-3">
              <span className="uppercase tracking-widest text-sm font-semibold text-blue-600">
                About Me
              </span>
              
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.2] tracking-tight">
              I am a Passionate about <span className="text-[#1F5CE3]">Machine Learning</span> & Web Development
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {portfolioData.about.description}
            </p>
            
            {/* Signature */}
            <div className="pt-6">
              <div 
                className="text-5xl md:text-6xl text-gray-800 -rotate-2" 
                style={{ fontFamily: 'var(--font-caveat), cursive' }}
              >
                {portfolioData.personal.name}
              </div>
              
            </div>
          </div>

          {/* Right: Bento Cards */}
          <div className="flex flex-col gap-6">
            {/* Card 1: Education & Role */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                <svg width="100" height="100" className="rotate-45"><defs><pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="2" fill="currentColor"/></pattern></defs><rect x="0" y="0" width="100%" height="100%" fill="url(#dots)"/></svg>
              </div>

              <div className="space-y-6 relative z-10">
                {portfolioData.about.highlights.slice(0, 2).map((highlight, idx) => {
                  const Icon = icons[highlight.icon as keyof typeof icons] || icons.Circle;
                  return (
                    <React.Fragment key={idx}>
                      <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-[#1F5CE3]/10 text-[#1F5CE3] flex items-center justify-center shrink-0 shadow-sm border border-[#1F5CE3]/20">
                          <Icon size={28} />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">{highlight.value}</h3>
                          <p className="text-gray-500 text-sm">{highlight.title}</p>
                        </div>
                      </div>
                      {idx === 0 && (
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* Card 2: Areas of Interest */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100/50">
              <h3 className="font-bold text-gray-900 mb-6">Areas of Interest</h3>
              <div className="flex flex-wrap gap-3">
                {portfolioData.techStack.categories.map((cat, idx) => {
                  const Icon = icons[cat.icon as keyof typeof icons] || icons.Circle;
                  return (
                    <span key={idx} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1F5CE3]/10 text-[#1F5CE3] font-medium text-sm cursor-default">
                      <Icon size={16} /> {cat.title.split('. ')[1]}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: Stats Row */}
        <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-sm border border-gray-100/50">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-4 divide-x-0 md:divide-x divide-gray-100">
            {portfolioData.about.stats.map((stat, idx) => {
              const Icon = icons[stat.icon as keyof typeof icons] || icons.Circle;
              return (
                <div key={idx} className="flex flex-col items-center text-center px-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#1F5CE3]/10 text-[#1F5CE3] flex items-center justify-center mb-4">
                    <Icon size={28} />
                  </div>
                  <h4 className="text-xl md:text-4xl font-extrabold text-gray-900 mb-2 mt-1">{stat.value}</h4>
                  <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM SECTION: What Drives Me */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100/50">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-center">
            
            {/* Left: What Drives Me Text */}
            <div className="space-y-6">
              <span className="uppercase tracking-widest text-sm font-semibold text-blue-600">
                What Drives Me
              </span>
              <h3 className="text-1xl md:text-2xl font-bold text-gray-900">
                Curiosity. Impact. Growth.
              </h3>
              <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
              <p className="text-gray-600 leading-relaxed pt-2">
                I believe data is more than numbers — it&apos;s a story waiting to be discovered. I&apos;m constantly learning, building, and collaborating to create solutions that make a difference.
              </p>
            </div>

            {/* Right: 3 Vertical Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              {/* Card 1 */}
              <div className="bg-gray-50/80 rounded-3xl p-6 text-center border border-transparent">
                <h4 className="font-bold text-gray-900 mb-3">Curious</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Always exploring new ideas, technologies, and perspectives.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-gray-50/80 rounded-3xl p-6 text-center border border-transparent">
                <h4 className="font-bold text-gray-900 mb-3">Impact Driven</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Passionate about using data and AI to solve meaningful problems.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-50/80 rounded-3xl p-6 text-center border border-transparent">
                <h4 className="font-bold text-gray-900 mb-3">Growth Mindset</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Committed to continuous learning and becoming better every day.
                </p>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
