import React from 'react';
import { Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: 'var(--gradient-brain)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fadeInUp">
          {/* Main Heading */}
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-secondary animate-bounce-soft" />
              <span
                className="text-sm md:text-base font-bold px-4 py-2 rounded-full"
                style={{
                  background: 'rgba(var(--icpc-teal-rgb), 0.1)',
                  color: 'var(--icpc-teal)',
                }}
              >
                Welcome to Your Learning Journey
              </span>
              <Sparkles className="w-6 h-6 text-secondary animate-bounce-soft" />
            </div>

            <h1 className="heading-1 gradient-text">
              Master C++ Programming 🚀
            </h1>

            <p className="body-text text-muted-foreground max-w-2xl mx-auto">
              Explore exciting programming concepts week by week. Click on any week to start learning, watch videos, solve practice problems, and join our amazing community!
            </p>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-6">
            {[
              { emoji: '🎥', text: 'Video Lectures' },
              { emoji: '💻', text: 'Code Practice' },
              { emoji: '📚', text: 'Resources' },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(var(--anu-yellow-rgb), 0.1)',
                  color: 'var(--anu-yellow)',
                  border: '1px solid rgba(var(--anu-yellow-rgb), 0.3)',
                }}
              >
                <span className="mr-2">{feature.emoji}</span>
                {feature.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
