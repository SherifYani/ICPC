import React from "react";

export default function StatCard({
  icon: Icon,
  label,
  value,
  color = "teal",
  trend,
}) {
  const colorClasses = {
    teal: {
      gradient: "from-accent to-accent/50",
      bg: "rgba(var(--icpc-teal-rgb), 0.1)",
      border: "rgba(var(--icpc-teal-rgb), 0.3)",
      glow: "var(--shadow-glow-teal)",
    },
    yellow: {
      gradient: "from-secondary to-secondary/50",
      bg: "rgba(var(--anu-yellow-rgb), 0.1)",
      border: "rgba(var(--anu-yellow-rgb), 0.3)",
      glow: "var(--shadow-glow-yellow)",
    },
    purple: {
      gradient: "from-purple-500 to-purple-400",
      bg: "rgba(183, 148, 246, 0.1)",
      border: "rgba(183, 148, 246, 0.3)",
      glow: "0 0 30px rgba(183, 148, 246, 0.3)",
    },
    green: {
      gradient: "from-green-500 to-green-400",
      bg: "rgba(0, 217, 163, 0.1)",
      border: "rgba(0, 217, 163, 0.3)",
      glow: "0 0 30px rgba(0, 217, 163, 0.3)",
    },
  };

  const currentColor = colorClasses[color];

  return (
    <div
      className="card group cursor-pointer overflow-hidden relative"
      style={{
        background: currentColor.bg,
        border: `2px solid ${currentColor.border}`,
      }}
    >
      {/* Background gradient on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${currentColor.bg}, transparent)`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div
            className={`p-4 rounded-xl bg-gradient-to-br ${currentColor.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
            style={{
              boxShadow: currentColor.glow,
            }}
          >
            <Icon className="w-7 h-7 text-white" />
          </div>
          {trend && (
            <div
              className={`text-xs font-bold px-3 py-1.5 rounded-full border ${
                trend > 0
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-300 dark:border-green-700"
                  : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-300 dark:border-red-700"
              }`}
            >
              {trend > 0 ? "↑" : "↓"} {Math.abs(trend)}%
            </div>
          )}
        </div>
        <p className="text-muted-foreground text-sm font-semibold mb-2 uppercase tracking-wide">
          {label}
        </p>
        <p className="heading-3 text-foreground font-bold">{value}</p>

        {/* Bottom accent line */}
        <div
          className="mt-4 h-1 w-0 group-hover:w-full rounded-full transition-all duration-500"
          style={{
            background: `linear-gradient(90deg, ${currentColor.border}, transparent)`,
          }}
        />
      </div>
    </div>
  );
}
