import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Play, BookOpen, Code } from 'lucide-react';

export default function WeekCard({ week, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const stats = [
    { icon: Play, label: 'Videos', value: week.videoCount || 0 },
    { icon: BookOpen, label: 'Resources', value: week.resourceCount || 0 },
    { icon: Code, label: 'Problems', value: week.problemCount || 0 },
  ];

  return (
    <div
      className="card animate-fadeInUp overflow-hidden"
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between gap-4 focus:outline-none group"
        aria-expanded={isExpanded}
      >
        <div className="flex-1 text-left">
          <div className="flex items-center gap-3 mb-2">
            <div
              className="px-3 py-1 rounded-full text-xs font-bold text-white"
              style={{
                background: 'var(--gradient-brain)',
              }}
            >
              Week {week.id}
            </div>
            <h2 className="heading-3 text-accent group-hover:text-secondary transition-colors duration-300">
              {week.title}
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">{week.description}</p>
        </div>
        <div
          className="flex-shrink-0 transition-all duration-300"
          style={{
            color: 'var(--icpc-teal)',
          }}
        >
          {isExpanded ? (
            <ChevronUp className="w-6 h-6 md:w-7 md:h-7" />
          ) : (
            <ChevronDown className="w-6 h-6 md:w-7 md:h-7" />
          )}
        </div>
      </button>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-border">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm">
            <stat.icon className="w-4 h-4 text-accent" />
            <div>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <p className="font-semibold text-foreground">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      {isExpanded && (
        <div
          className="my-4 h-1 rounded-full"
          style={{
            background: 'var(--gradient-brain)',
          }}
        />
      )}

      {/* Content */}
      {isExpanded && (
        <div className="space-y-4 animate-fadeInUp">
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <p className="text-muted-foreground">{week.fullDescription}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href={week.resourcesLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              📚 View Resources
            </a>
            <a
              href={week.problemsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              💻 Practice Problems
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
