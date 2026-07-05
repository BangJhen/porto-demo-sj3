"use client";
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { 
  Trophy, Medal, Star, BarChart3, Calendar, 
  TrendingUp, ChevronLeft, ChevronRight, Award, icons
} from 'lucide-react';
import portfolioData from '@/data/portfolio.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

export default function Achievement() {
  const stats = portfolioData.achievements.stats;
  const competitions = portfolioData.achievements.competitions;

  return (
    <SectionWrapper id="achievements" className="bg-[#fafafa] relative overflow-hidden">
      <div className="w-full space-y-16">
        
        {/* Top Section: Header & Stats */}
        <div className="w-full flex flex-col xl:flex-row xl:items-end justify-between gap-10">
          {/* Header */}
          <div className="space-y-6 max-w-xl">
            <div className="flex items-center gap-3">
              <span className="uppercase tracking-widest text-sm font-semibold text-blue-600">
                Achievements
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.2] tracking-tight">
              Competition <span className="text-[#1F5CE3]">Highlights</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              I love turning data into impact. These competitions challenged me to apply machine learning and data mining techniques to solve real-world problems and create meaningful, data-driven solutions.
            </p>
          </div>

          {/* Stats Card */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100/60 shrink-0">
            <div className="flex flex-wrap gap-8 md:gap-12 justify-center md:justify-between text-center">
              {stats.map((stat, idx) => {
                const Icon = icons[stat.icon as keyof typeof icons] || icons.Circle;
                return (
                  <div key={idx} className="flex flex-col items-center gap-3">
                    <div className="text-[#1F5CE3]">
                      <Icon size={28} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900">{stat.value}</h4>
                      <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mt-1 whitespace-pre-line leading-snug w-24">
                        {stat.label.replace(' ', '\n')}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Middle Section: Swiper Carousel */}
        <div className="w-[100vw] relative left-1/2 -translate-x-1/2 py-8 overflow-hidden">
          <Swiper
            modules={[Pagination, Navigation, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.2}
            spaceBetween={20}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
              1280: { slidesPerView: 3.5, spaceBetween: 40 },
            }}
            navigation={{
              prevEl: '.achievements-prev',
              nextEl: '.achievements-next',
            }}
            pagination={{ 
              clickable: true,
              el: '.achievements-pagination',
              bulletClass: 'swiper-pagination-bullet !bg-gray-300 !opacity-100 !w-2.5 !h-2.5',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#1F5CE3] !w-8 !rounded-full !transition-all !duration-300'
            }}
            className="!pb-16 pt-4"
          >
            {competitions.map((comp) => {
              const Icon = icons[comp.icon as keyof typeof icons] || icons.Circle;
              return (
                <SwiperSlide key={comp.id} className="h-auto px-2 md:px-0">
                  {({ isActive }) => (
                    <div className={`h-full bg-white rounded-[2rem] p-6 md:p-8 border border-gray-100 transition-all duration-300 flex flex-col ${isActive ? 'shadow-lg scale-100' : 'shadow-sm scale-95 opacity-80'}`}>
                      
                      <div className="w-14 h-14 rounded-2xl bg-[#1F5CE3]/10 text-[#1F5CE3] flex items-center justify-center shrink-0 mb-6">
                        <Icon size={24} />
                      </div>

                      <div className="flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-gray-900 leading-snug mb-2">
                          {comp.place} — <br/>
                          {comp.title}
                        </h3>
                        
                        <p className="text-[#1F5CE3] font-medium text-sm mb-4">
                          {comp.organizer}
                        </p>
                        
                        <div className="flex items-center gap-2 text-gray-500 mb-4">
                          <Calendar size={16} />
                          <span className="text-sm">{comp.date}</span>
                        </div>
                        
                        <p className="text-gray-600 text-[13px] leading-relaxed mb-auto">
                          {comp.desc}
                        </p>

                        <div className="mt-6 pt-6 border-t border-gray-50">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1F5CE3]/10 text-[#1F5CE3] rounded-full text-sm font-medium">
                            <Award size={16} />
                            {comp.badge}
                          </div>
                        </div>
                      </div>

                    </div>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button className="achievements-prev absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center text-gray-600 hover:text-[#1F5CE3] hover:shadow-lg transition-all focus:outline-none">
            <ChevronLeft size={24} />
          </button>
          <button className="achievements-next absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center text-gray-600 hover:text-[#1F5CE3] hover:shadow-lg transition-all focus:outline-none">
            <ChevronRight size={24} />
          </button>

          {/* Custom Pagination Container */}
          <div className="achievements-pagination absolute bottom-0 left-0 w-full flex justify-center gap-2 z-10"></div>
        </div>


      </div>
    </SectionWrapper>
  );
}
