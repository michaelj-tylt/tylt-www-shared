"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePostHog } from 'posthog-js/react';
import { Download } from 'lucide-react';
import theme from '@/theme';

interface HeaderProps {
  scrolled?: boolean;
  children?: React.ReactNode;
}

export function Header({ scrolled = false, children }: HeaderProps) {
  const posthog = usePostHog();

  const handleDownloadClick = () => {
    posthog?.capture('download_button_clicked', {
      location: 'header',
      button_text: 'Download'
    });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "py-1" : "py-4"
      }`}
      style={{
        height: scrolled ? '40px' : 'auto',
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.8)'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 transition-all duration-300">
        {/* Logo */}
        <Link href="/" className={`flex items-center transition-all duration-300 hover:opacity-80 ${
            scrolled ? "gap-2" : "gap-3"
          }`}>
          <Image
            src="/logo.png"
            alt="Tylt Logo"
            width={scrolled ? 28 : 48}
            height={scrolled ? 28 : 48}
            className="transition-all duration-300"
          />
          {/* out logo IS our name, stop addit ing as text again! */}
        </Link>

        {/* Navigation */}
        <nav
          className={`flex items-center gap-6 transition-all duration-300 ${
            scrolled ? "text-sm" : "text-base"
          }`}
        >
          {children || (
            <>
              <a
                href={process.env.NEXT_PUBLIC_MAIN_URL}
                className={`text-white hover:text-zinc-400 transition-colors duration-200 relative ${
                  scrolled ? "text-sm" : "text-base"
                }`}
              >
                <span className="relative">About Tylt</span>
              </a>
              <a
                href="#download"
                className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${theme.classes.gradient} hover:opacity-90 text-white transition-all duration-200 ${
                  scrolled ? "text-sm" : "text-base"
                }`}
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
