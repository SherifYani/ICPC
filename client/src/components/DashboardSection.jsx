export default function DashboardSection({
  title,
  subtitle,
  icon: Icon,
  children,
}) {
  return (
    <div className="space-y-6 animate-fadeInUp py-4">
      {/* Section Header */}
      <div className="flex items-start gap-4">
        {Icon && (
          <div
            className="p-4 rounded-xl flex-shrink-0 shadow-lg hover:scale-110 transition-transform duration-300"
            style={{
              background: "var(--gradient-brain)",
              boxShadow: "var(--shadow-glow-teal)",
            }}
          >
            <Icon className="w-7 h-7 text-white" />
          </div>
        )}
        <div className="flex-1">
          <h2 className="heading-2 gradient-text mb-2">{title}</h2>
          {subtitle && (
            <p className="text-muted-foreground text-lg font-medium">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Animated Divider */}
      <div className="h-px relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "var(--gradient-button)",
            opacity: 0.3,
          }}
        />
        <div
          className="absolute inset-0 animate-shimmer"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--primary), transparent)",
            backgroundSize: "200% 100%",
          }}
        />
      </div>

      {/* Content */}
      <div>{children}</div>
    </div>
  );
}
