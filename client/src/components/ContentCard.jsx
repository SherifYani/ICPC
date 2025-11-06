import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, AlertCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";
import LoadingSpinner from "./LoadingSpinner";

export default function ContentCard({ title, url, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isExpanded && !content && !error) {
      setLoading(true);
      setError(null);

      fetch(url)
        .then(res => {
          if (!res.ok) throw new Error("Failed to load content");
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
      className="card animate-fadeInUp group"
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between gap-4 focus:outline-none"
        aria-expanded={isExpanded}
      >
        <div className="flex-1 text-left">
          <h2 className="heading-3 text-foreground group-hover:gradient-text transition-all duration-300">
            {title}
          </h2>
        </div>
        <div
          className={`flex-shrink-0 p-2 rounded-lg transition-all duration-300 ${
            isExpanded ? "bg-primary/10" : "bg-muted"
          }`}
        >
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          ) : (
            <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          )}
        </div>
      </button>

      {/* Animated Divider */}
      {isExpanded && (
        <div className="my-6 h-px relative overflow-hidden">
          <div
            className="absolute inset-0 animate-shimmer"
            style={{
              background: "var(--gradient-button)",
            }}
          />
        </div>
      )}

      {/* Content */}
      {isExpanded && (
        <div className="space-y-4 animate-fadeInUp">
          {loading && <LoadingSpinner />}

          {error && (
            <div className="flex items-start gap-3 p-4 rounded-xl bg-destructive/10 border-2 border-destructive/30 backdrop-blur-sm">
              <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-destructive">
                  Failed to load content
                </p>
                <p className="text-sm text-muted-foreground mt-1">{error}</p>
              </div>
            </div>
          )}

          {content && !loading && (
            <div className="markdown-content prose prose-sm dark:prose-invert max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ node, ...props }) => (
                    <h1
                      className="text-3xl font-bold mt-8 mb-4 gradient-text"
                      {...props}
                    />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2
                      className="text-2xl font-bold mt-6 mb-3 gradient-text"
                      {...props}
                    />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3
                      className="text-xl font-bold mt-4 mb-2 text-primary"
                      {...props}
                    />
                  ),
                  p: ({ node, ...props }) => (
                    <p className="leading-relaxed my-4" {...props} />
                  ),
                  a: ({ node, ...props }) => (
                    <a
                      className="text-primary font-semibold hover:text-secondary hover:underline decoration-2 underline-offset-2 transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                      {...props}
                    />
                  ),
                  code: ({ node, inline, ...props }) => {
                    if (inline) {
                      return (
                        <code
                          className="px-2 py-1 rounded-lg bg-primary/10 text-primary font-mono text-sm border border-primary/20"
                          {...props}
                        />
                      );
                    }
                    return (
                      <code
                        className="block p-4 rounded-xl bg-muted/50 dark:bg-muted overflow-x-auto font-mono text-sm border border-border"
                        {...props}
                      />
                    );
                  },
                  pre: ({ node, ...props }) => (
                    <pre
                      className="p-4 rounded-xl bg-muted/50 dark:bg-muted overflow-x-auto border border-border my-4"
                      {...props}
                    />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul
                      className="list-disc list-inside space-y-2 my-4 ml-4"
                      {...props}
                    />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol
                      className="list-decimal list-inside space-y-2 my-4 ml-4"
                      {...props}
                    />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="leading-relaxed" {...props} />
                  ),
                  table: ({ node, ...props }) => (
                    <div className="overflow-x-auto my-6">
                      <table
                        className="w-full border-collapse rounded-xl overflow-hidden"
                        {...props}
                      />
                    </div>
                  ),
                  th: ({ node, ...props }) => (
                    <th
                      className="border border-border p-4 text-left font-bold"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(0, 229, 255, 0.12), rgba(255, 170, 0, 0.12))",
                      }}
                      {...props}
                    />
                  ),
                  td: ({ node, ...props }) => (
                    <td className="border border-border p-4" {...props} />
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote
                      className="pl-5 py-3 my-4 rounded-r-xl border-l-4 bg-primary/5 text-muted-foreground italic"
                      style={{ borderLeftColor: "var(--primary)" }}
                      {...props}
                    />
                  ),
                  hr: ({ node, ...props }) => (
                    <hr
                      className="my-8 border-0 h-px rounded-full"
                      style={{ background: "var(--gradient-brain)" }}
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
