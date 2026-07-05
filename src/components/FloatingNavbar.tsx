'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function FloatingNavbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = NAV_ITEMS.map((item) => item.name.toLowerCase());
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300',
        isScrolled
          ? 'w-[90%] max-w-2xl bg-white/70 backdrop-blur-md shadow-lg rounded-full py-3 px-6 border border-gray-200'
          : 'w-full max-w-6xl bg-transparent py-4 px-6'
      )}
    >
      <nav className="flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <Image 
            src="/logo-porto.png" 
            alt="Porto Logo" 
            width={120} 
            height={32}
            className="h-8 w-auto object-contain"
            priority
          />
        </a>
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                  activeSection === item.name.toLowerCase()
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                )}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
