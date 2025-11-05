import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 w-full border-b backdrop-blur-xl transition-all duration-300"
      style={{
        background: "var(--gradient-header)",
        borderColor: "rgba(var(--icpc-teal-rgb), 0.3)",
        boxShadow: "var(--shadow-teal)",
      }}
    >
      <div className="container mx-auto px-4 py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3 md:gap-4 group">
            <img
              src="/images/Logo.png"
              alt="ICPC ANU Logo"
              className="w-10 h-10 md:w-12 md:h-12 rounded-lg group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <h1 className="text-white font-bold text-lg md:text-2xl tracking-tight">
                ICPC ANU
              </h1>
              <div className="flex items-center gap-2">
                <span className="text-xs md:text-sm text-gray-200 font-medium">
                  Level 0 Commmunity
                </span>
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{
                    background: "var(--icpc-teal)",
                    boxShadow: "0 0 10px var(--icpc-teal)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>

      {/* Bottom glow line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "var(--gradient-button)",
          opacity: 0.5,
        }}
      />
    </nav>
  );
}
