
import { useEffect, useRef } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import ProjectsSection from './components/ProjectsSection';
import MiniGallery from './components/MiniGallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Initialize scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observerRef.current?.observe(el));

    // Add scroll effect for header blur
    const handleScroll = () => {
      const header = document.getElementById('main-header');
      if (header) {
        const scrollY = window.scrollY;
        const blurAmount = Math.min(scrollY / 100, 10);
        header.style.backdropFilter = `blur(${blurAmount}px)`
        header.style.backgroundColor = `rgba(0, 0, 0, ${Math.min(scrollY / 200, 0.9)})`
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background with pure black */}
      <div className="fixed inset-0 bg-black"></div>
      
      {/* Background light spots */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#D8ECF8]/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-[#D8ECF8]/25 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-white/15 rounded-full animate-pulse delay-1500"></div>
      </div>

      <div className="relative z-10">
        <Header />
        <HeroSection />
        <AboutSection />
        <TestimonialsSection />
        <ProjectsSection />
        <MiniGallery />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}