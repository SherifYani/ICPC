import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 hover:scale-110 focus:outline-none group"
      style={{
        background:
          theme === "light"
            ? "rgba(var(--icpc-teal-rgb), 0.1)"
            : "rgba(var(--anu-yellow-rgb), 0.1)",
        border:
          theme === "light"
            ? "2px solid rgba(var(--icpc-teal-rgb), 0.3)"
            : "2px solid rgba(var(--anu-yellow-rgb), 0.3)",
      }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon className="w-6 h-6 text-primary animate-slideInRight group-hover:rotate-12 transition-transform" />
      ) : (
        <Sun className="w-6 h-6 text-secondary animate-slideInLeft group-hover:rotate-90 transition-transform" />
      )}

      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10"
        style={{
          background:
            theme === "light" ? "var(--icpc-teal)" : "var(--anu-yellow)",
        }}
      />
    </button>
  );
}
