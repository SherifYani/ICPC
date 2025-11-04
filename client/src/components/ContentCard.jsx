import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import LoadingSpinner from './LoadingSpinner';

export default function ContentCard({ title, url, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isExpanded && !content && !error) {
      setLoading(true);
      setError(null);

      fetch(url)
        .then(res => {
          if (!res.ok) throw new Error('Failed to load content');
          return res.text();
        })
        .then(data => {
          setContent(data);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [isExpanded, content, error, url]);

  return (
    <div
      className="card animate-fadeInUp"
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
          <h2 className="heading-3 text-accent group-hover:text-secondary transition-colors duration-300">
            {title}
          </h2>
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

      {/* Divider */}
      <div
        className="my-4 h-1 rounded-full"
        style={{
          background: 'var(--gradient-brain)',
        }}
      />

      {/* Content */}
      {isExpanded && (
        <div className="space-y-4 animate-fadeInUp">
          {loading && <LoadingSpinner />}

          {error && (
            <div className="flex items-start gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/30">
              <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-destructive">Failed to load content</p>
                <p className="text-sm text-muted-foreground">{error}</p>
              </div>
            </div>
          )}

          {content && !loading && (
            <div className="markdown-content prose prose-sm dark:prose-invert max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ node, ...props }) => (
                    <h1 className="text-3xl font-bold mt-6 mb-3 text-accent" {...props} />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2 className="text-2xl font-bold mt-6 mb-3 text-accent" {...props} />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3 className="text-xl font-bold mt-4 mb-2 text-accent" {...props} />
                  ),
                  p: ({ node, ...props }) => (
                    <p className="leading-relaxed my-3" {...props} />
                  ),
                  a: ({ node, ...props }) => (
                    <a
                      className="text-accent font-semibold hover:text-secondary hover:underline transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      {...props}
                    />
                  ),
                  code: ({ node, inline, ...props }) => {
                    if (inline) {
                      return (
                        <code
                          className="px-2 py-1 rounded bg-accent/10 text-accent font-mono text-sm"
                          {...props}
                        />
                      );
                    }
                    return (
                      <code
                        className="block p-4 rounded-lg bg-black/5 dark:bg-white/5 overflow-x-auto font-mono text-sm"
                        {...props}
                      />
                    );
                  },
                  pre: ({ node, ...props }) => (
                    <pre
                      className="p-4 rounded-lg bg-black/5 dark:bg-white/5 overflow-x-auto"
                      {...props}
                    />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="list-disc list-inside space-y-2 my-3 ml-4" {...props} />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol className="list-decimal list-inside space-y-2 my-3 ml-4" {...props} />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="leading-relaxed" {...props} />
                  ),
                  table: ({ node, ...props }) => (
                    <table className="w-full border-collapse my-4" {...props} />
                  ),
                  th: ({ node, ...props }) => (
                    <th
                      className="border border-border p-3 text-left bg-accent/10 text-accent font-semibold"
                      {...props}
                    />
                  ),
                  td: ({ node, ...props }) => (
                    <td className="border border-border p-3" {...props} />
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote
                      className="pl-4 py-2 border-l-4 border-accent text-muted-foreground italic my-3"
                      {...props}
                    />
                  ),
                  hr: ({ node, ...props }) => (
                    <hr
                      className="my-6 border-0 h-1 rounded-full"
                      style={{ background: 'var(--gradient-brain)' }}
                      {...props}
                    />
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
