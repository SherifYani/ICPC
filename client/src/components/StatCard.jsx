import React from 'react';

export default function StatCard({ icon: Icon, label, value, color = 'teal', trend }) {
  const colorClasses = {
    teal: 'from-accent to-accent/50',
    yellow: 'from-secondary to-secondary/50',
    purple: 'from-purple-500 to-purple-400',
    green: 'from-green-500 to-green-400',
  };

  return (
    <div className="card group cursor-pointer overflow-hidden">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-br ${colorClasses[color]} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        {trend && (
          <div className={`text-xs font-bold px-2 py-1 rounded-full ${
            trend > 0 
              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
              : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
          }`}>
            {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
          </div>
        )}
      </div>
      <p className="text-muted-foreground text-sm font-medium mb-1">{label}</p>
      <p className="heading-3 text-foreground">{value}</p>
    </div>
  );
}
