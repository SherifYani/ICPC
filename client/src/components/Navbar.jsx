import React from 'react';
import { BookOpen } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b transition-all duration-300"
      style={{
        background: 'var(--gradient-header)',
        borderColor: 'var(--icpc-teal)',
        boxShadow: 'var(--shadow-teal)',
      }}
    >
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3 md:gap-4">
            <div
              className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-lg transition-all duration-300 hover:scale-110"
              style={{
                background: 'var(--gradient-brain)',
                boxShadow: 'var(--shadow-teal)',
              }}
            >
              <BookOpen className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="heading-2 text-white font-bold text-lg md:text-2xl">
                ICPC ANU
              </h1>
              <p className="text-xs md:text-sm text-gray-200 font-medium">
                Level 0 Portal
              </p>
            </div>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
