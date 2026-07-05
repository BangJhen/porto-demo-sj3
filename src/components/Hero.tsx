import SectionWrapper from './SectionWrapper';
import { 
  Rocket, Mail, Phone, MapPin, Link as LinkIcon,
  Code, User, Camera, LineChart
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';
import portfolioData from '@/data/portfolio.json';

export default function Hero() {
  return (
    <SectionWrapper id="home" className="bg-white overflow-hidden relative">
      <BackgroundRippleEffect />

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        
        {/* Left Content */}
        <div className="space-y-6">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium">
            <Rocket size={16} />
            <span>{portfolioData.personal.role}</span>
          </div> */}
          
          <div className="space-y-1">
            <div className="h-[80px] sm:h-[100px] md:h-[120px] -ml-2">
              <TextHoverEffect text={portfolioData.hero.hoverText} />
            </div>
          </div>

          <p className="text-gray-500 text-lg md:text-xl max-w-xl leading-relaxed">
            {portfolioData.hero.description}
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
            <a href={portfolioData.personal.socials.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-600 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href={portfolioData.personal.socials.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-600 transition-colors">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Right Content (Image & Floating Cards) */}
        <div className="relative pt-12 md:pt-0">
          {/* Main Image Container */}
          <div className="relative w-full aspect-[4/5] max-w-sm mx-auto rounded-[2rem] bg-gradient-to-b from-blue-50/80 to-white overflow-hidden">
            <Image 
              src="/profile-ammar2.png" 
              alt="Muhammad Ammar Ridho" 
              fill
              className="object-cover object-bottom"
              priority
            />
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-12 -right-4 md:-right-8 lg:-right-12 bg-white p-4 pr-12 rounded-2xl shadow-xl shadow-blue-900/5 flex items-center gap-4 border border-gray-50 animate-float">
            <div className="w-12 h-12 bg-blue-50/80 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
              <LineChart size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium mb-1">Machine Learning</p>
              <p className="text-sm font-bold text-gray-900 leading-tight">& Data Science</p>
            </div>
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full absolute top-6 right-5"></div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
