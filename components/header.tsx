"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePostHog } from 'posthog-js/react';
import { Download } from 'lucide-react';

interface HeaderProps {
  scrolled?: boolean;
  children?: React.ReactNode;
  homeUrl?: string;
  theme?: any;
}

export function Header({ scrolled = false, children, homeUrl, theme }: HeaderProps) {
  const posthog = usePostHog();
  
  // Import default tylt theme if none provided
  const activeTheme = theme;

  const handleDownloadClick = () => {
    posthog?.capture('download_button_clicked', {
      location: 'header',
      button_text: 'Download'
    });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-sm ${
        scrolled ? "py-1" : "py-4"
      }`}
      style={{
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.9)'
      }}
    >
      <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 transition-all duration-300 ${
        scrolled ? "scale-[0.8]" : "scale-100"
      }`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 transition-all duration-300 hover:opacity-80">
          <Image
            src="/logo.png"
            alt="Tylt Logo"
            width={48}
            height={48}
            className="transition-all duration-300"
          />
          {/* out logo IS our name, stop addit ing as text again! */}
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 transition-all duration-300 text-base">
          {homeUrl && (
            <a
              href={homeUrl}
              className={`text-zinc-300 ${activeTheme.classes.primaryHover} transition-colors duration-200 relative`}
            >
              <span className="relative">Home</span>
            </a>
          )}
          {children || (
            <>
              <a
                href={process.env.NEXT_PUBLIC_MAIN_URL}
                className={`text-white ${activeTheme.classes.primaryHover} transition-colors duration-200 relative`}
              >
                <span className="relative">About Tylt</span>
              </a>
              <a
                href="#download"
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-white transition-all duration-200 hover:${activeTheme.classes.accentBg}`}
                onClick={handleDownloadClick}
              >
                <Download size={16} className="text-white" />
                <span className="relative">Download</span>
              </a>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
