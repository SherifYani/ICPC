export default function DashboardSection({
  title,
  subtitle,
  icon: Icon,
  children,
}) {
  return (
    <div className="space-y-4 animate-fadeInUp">
      {/* Section Header */}
      <div className="flex items-start gap-3">
        {Icon && (
          <div
            className="p-3 rounded-lg flex-shrink-0"
            style={{
              background: "var(--gradient-brain)",
            }}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
        )}
        <div className="flex-1">
          <h2 className="heading-2 text-accent">{title}</h2>
          {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
        </div>
      </div>

      {/* Divider */}
      <div
        className="h-1 rounded-full"
        style={{
          background: "var(--gradient-brain)",
        }}
      />

      {/* Content */}
      <div>{children}</div>
    </div>
  );
}
