import React, { useState } from "react";
import { ExternalLink, Search, Zap, Filter } from "lucide-react";

export default function ProblemsTable({ problems = [] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("id");

  const filteredProblems = problems.filter(
    problem =>
      problem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      problem.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProblems = [...filteredProblems].sort((a, b) => {
    if (sortBy === "id") return a.id.localeCompare(b.id);
    if (sortBy === "difficulty") return a.difficulty - b.difficulty;
    return 0;
  });

  const getDifficultyColor = difficulty => {
    const colors = {
      1: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-300 dark:border-green-700",
      2: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-300 dark:border-yellow-700",
      3: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-300 dark:border-orange-700",
      4: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-300 dark:border-red-700",
      5: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-300 dark:border-purple-700",
    };
    return colors[difficulty] || colors[1];
  };

  const getDifficultyLabel = difficulty => {
    const labels = {
      1: "Easy",
      2: "Medium",
      3: "Hard",
      4: "Very Hard",
      5: "Expert",
    };
    return labels[difficulty] || "Unknown";
  };

  const getDifficultyIcon = difficulty => {
    const icons = {
      1: "⭐",
      2: "⭐⭐",
      3: "⭐⭐⭐",
      4: "🔥🔥",
      5: "💎",
    };
    return icons[difficulty] || "⭐";
  };

  return (
    <div className="space-y-6">
      {/* Search and Sort */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative group">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          <input
            type="text"
            placeholder="Search problems by name or ID..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="modern-select w-full pl-12"
          />
        </div>
        <div className="relative group select-wrapper">
          <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="modern-select pl-12"
          >
            <option value="id">Sort by ID</option>
            <option value="difficulty">Sort by Difficulty</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border-2 border-border shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr
                className="border-b-2 border-border"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.08), rgba(255, 170, 0, 0.08))',
                }}
              >
                <th className="px-6 py-4 text-left text-sm font-bold gradient-text">
                  ID
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold gradient-text">
                  Problem Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold gradient-text">
                  Difficulty
                </th>
                <th className="px-6 py-4 text-center text-sm font-bold gradient-text">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedProblems.length > 0 ? (
                sortedProblems.map((problem, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-border hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <td className="px-6 py-4 text-sm font-bold text-foreground">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary font-mono border border-primary/20 group-hover:scale-105 transition-transform">
                          {problem.id}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">
                      <span className="group-hover:text-primary transition-colors">
                        {problem.name}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{getDifficultyIcon(problem.difficulty)}</span>
                        <span
                          className={`px-3 py-1.5 rounded-full text-xs font-bold border ${getDifficultyColor(problem.difficulty)} group-hover:scale-105 transition-transform`}
                        >
                          {getDifficultyLabel(problem.difficulty)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <a
                        href={problem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                        style={{
                          boxShadow: '0 0 0 0 rgba(var(--anu-yellow-rgb), 0.5)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = 'var(--shadow-glow-yellow)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = '0 0 0 0 rgba(var(--anu-yellow-rgb), 0.5)';
                        }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="px-6 py-12 text-center text-muted-foreground"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <Zap className="w-12 h-12 text-muted-foreground/30" />
                      <p className="font-medium">No problems found matching your search.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between px-2">
        <p className="text-sm text-muted-foreground font-medium">
          Showing <span className="font-bold text-primary">{sortedProblems.length}</span> of{" "}
          <span className="font-bold text-secondary">{problems.length}</span> problems
        </p>
        {sortedProblems.length > 0 && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Zap className="w-4 h-4 text-secondary" />
            <span className="font-medium">Keep practicing!</span>
          </div>
        )}
      </div>
    </div>
  );
}