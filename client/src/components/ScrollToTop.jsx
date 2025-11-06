import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 rounded-xl transition-all duration-300 hover:scale-110 focus:outline-none animate-slideInRight group"
          style={{
            background: "var(--gradient-button)",
            boxShadow: "var(--shadow-glow-yellow)",
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 text-white group-hover:animate-bounce-soft" />

          {/* Pulse ring effect */}
          <div
            className="absolute inset-0 rounded-xl animate-pulse-glow"
            style={{
              background: "var(--gradient-button)",
              opacity: 0.3,
            }}
          />
        </button>
      )}
    </>
  );
}
