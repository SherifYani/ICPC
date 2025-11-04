import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-4">
      <div className="relative w-16 h-16">
        {/* Outer rotating ring */}
        <div
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-accent border-r-accent"
          style={{
            animation: 'spin 1s linear infinite',
          }}
        />
        {/* Middle rotating ring */}
        <div
          className="absolute inset-2 rounded-full border-4 border-transparent border-b-secondary border-l-secondary"
          style={{
            animation: 'spin 2s linear infinite reverse',
          }}
        />
        {/* Inner pulsing circle */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-accent to-secondary animate-pulse" />
      </div>
      <p className="text-center text-muted-foreground font-semibold">
        Loading amazing content...
      </p>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
