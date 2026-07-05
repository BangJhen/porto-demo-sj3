import FloatingNavbar from '@/components/FloatingNavbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Achievement from '@/components/Achievement';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative font-sans text-gray-900 bg-white">
      <FloatingNavbar />
      <Hero />
      <About />
      <Experience />
      <Achievement />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}
