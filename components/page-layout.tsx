'use client';
import { useEffect, useState } from 'react';
import { Header } from './header';
import PixelBackground from './react-bits/Backgrounds/PixelBackground/PixelBackground';
import Aurora from './react-bits/Backgrounds/Aurora/Aurora';

interface PageLayoutProps {
  children: React.ReactNode;
  homeUrl?: string;
  headerChildren?: React.ReactNode;
  auroraColors?: string[];
  pixelColors?: string;
}

export function PageLayout({ 
  children, 
  homeUrl, 
  headerChildren,
  auroraColors = ["#5227FF", "#1E40AF", "#0F172A"],
  pixelColors = "#5227FF,#3B82F6,#1E3A8A"
}: PageLayoutProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll container element
      const scrollContainer = document.querySelector('.scroll-container');
      if (!scrollContainer) return;
      
      const scrollPosition = scrollContainer.scrollTop;
      const firstViewportHeight = window.innerHeight;
      setScrolled(scrollPosition > firstViewportHeight);
    };

    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="min-h-screen w-full relative">
      {/* Background layers */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-[#0a0e1a] to-[#0f172a]" />
      <div className="fixed inset-0 z-0 opacity-60">
        <Aurora
          colorStops={auroraColors}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <div className="fixed inset-0 z-0 opacity-25">
        <PixelBackground
          gap={8}
          speed={60}
          colors={pixelColors}
          autoStart={true}
        />
      </div>

      {/* Header */}
      <Header scrolled={scrolled} homeUrl={homeUrl}>
        {headerChildren}
      </Header>
      
      {/* Scrollable Content */}
      <div className="scroll-container overflow-y-scroll snap-mandatory snap-y scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', height: '100vh' }}>
        <div className="relative z-10 flex flex-col gap-24 sm:gap-32 lg:gap-0 pt-20">
          {children}
        </div>
      </div>
    </div>
  );
}