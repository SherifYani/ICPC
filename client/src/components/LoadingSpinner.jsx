import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6">
      <div className="relative w-20 h-20">
        {/* Outer rotating ring */}
        <div
          className="absolute inset-0 rounded-full border-4 border-transparent"
          style={{
            borderTopColor: "var(--primary)",
            borderRightColor: "var(--primary)",
            animation: "spin 1s linear infinite",
          }}
        />
        {/* Middle rotating ring */}
        <div
          className="absolute inset-2 rounded-full border-4 border-transparent"
          style={{
            borderBottomColor: "var(--secondary)",
            borderLeftColor: "var(--secondary)",
            animation: "spin 1.5s linear infinite reverse",
          }}
        />
        {/* Inner pulsing circle */}
        <div
          className="absolute inset-4 rounded-full animate-pulse"
          style={{
            background: "var(--gradient-brain)",
          }}
        />

        {/* Glow effect */}
        <div
          className="absolute inset-0 rounded-full blur-xl opacity-50 animate-pulse"
          style={{
            background: "var(--gradient-brain)",
          }}
        />
      </div>

      <div className="text-center space-y-2">
        <p className="text-center font-bold text-lg gradient-text">
          Loading amazing content...
        </p>
        <div className="flex items-center justify-center gap-1">
          <div
            className="w-2 h-2 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="w-2 h-2 rounded-full bg-secondary animate-bounce"
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className="w-2 h-2 rounded-full bg-accent animate-bounce"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
