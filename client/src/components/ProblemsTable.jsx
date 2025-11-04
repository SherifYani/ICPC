import React, { useState } from 'react';
import { ExternalLink, Search, Zap } from 'lucide-react';

export default function ProblemsTable({ problems = [] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('id');

  const filteredProblems = problems.filter(problem =>
    problem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    problem.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProblems = [...filteredProblems].sort((a, b) => {
    if (sortBy === 'id') return a.id.localeCompare(b.id);
    if (sortBy === 'difficulty') return a.difficulty - b.difficulty;
    return 0;
  });

  const getDifficultyColor = (difficulty) => {
    const colors = {
      1: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      2: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
      3: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
      4: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
      5: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    };
    return colors[difficulty] || colors[1];
  };

  const getDifficultyLabel = (difficulty) => {
    const labels = {
      1: 'Easy',
      2: 'Medium',
      3: 'Hard',
      4: 'Very Hard',
      5: 'Expert',
    };
    return labels[difficulty] || 'Unknown';
  };

  return (
    <div className="space-y-4">
      {/* Search and Sort */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search problems by name or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option value="id">Sort by ID</option>
          <option value="difficulty">Sort by Difficulty</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full">
          <thead>
            <tr className="bg-secondary/10 border-b border-border">
              <th className="px-6 py-4 text-left text-sm font-semibold text-secondary">ID</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-secondary">Problem Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-secondary">Difficulty</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-secondary">Topics</th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-secondary">Solve</th>
            </tr>
          </thead>
          <tbody>
            {sortedProblems.length > 0 ? (
              sortedProblems.map((problem, idx) => (
                <tr
                  key={idx}
                  className="border-b border-border hover:bg-secondary/5 transition-colors duration-200 group"
                >
                  <td className="px-6 py-4 text-sm font-bold text-foreground">
                    <span className="px-3 py-1 rounded-lg bg-accent/10 text-accent font-mono">
                      {problem.id}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-foreground">
                    {problem.name}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(problem.difficulty)}`}>
                      {getDifficultyLabel(problem.difficulty)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">
                    <div className="flex flex-wrap gap-1">
                      {problem.topics?.map((topic, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded text-xs bg-muted text-muted-foreground"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <a
                      href={problem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-all duration-300 group-hover:scale-110"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-8 text-center text-muted-foreground">
                  No problems found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground">
        Showing {sortedProblems.length} of {problems.length} problems
      </p>
    </div>
  );
}
