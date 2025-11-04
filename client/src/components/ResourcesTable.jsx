import React, { useState } from 'react';
import { ExternalLink, Search, Filter } from 'lucide-react';

export default function ResourcesTable({ resources = [] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.topic.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || resource.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const getTypeColor = (type) => {
    const colors = {
      'Video': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
      'Slides': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      'Article': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      'Tool': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    };
    return colors[type] || 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400';
  };

  const getTypeIcon = (type) => {
    const icons = {
      'Video': '🎥',
      'Slides': '📊',
      'Article': '📄',
      'Tool': '🛠️',
    };
    return icons[type] || '📌';
  };

  return (
    <div className="space-y-4">
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="all">All Types</option>
            <option value="Video">Videos</option>
            <option value="Slides">Slides</option>
            <option value="Article">Articles</option>
            <option value="Tool">Tools</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full">
          <thead>
            <tr className="bg-accent/10 border-b border-border">
              <th className="px-6 py-4 text-left text-sm font-semibold text-accent">Topic</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-accent">Type</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-accent">Description</th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-accent">Link</th>
            </tr>
          </thead>
          <tbody>
            {filteredResources.length > 0 ? (
              filteredResources.map((resource, idx) => (
                <tr
                  key={idx}
                  className="border-b border-border hover:bg-accent/5 transition-colors duration-200 group"
                >
                  <td className="px-6 py-4 text-sm font-medium text-foreground">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{getTypeIcon(resource.type)}</span>
                      {resource.topic}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(resource.type)}`}>
                      {resource.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground max-w-xs truncate">
                    {resource.description}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-white transition-all duration-300 group-hover:scale-110"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-8 text-center text-muted-foreground">
                  No resources found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground">
        Showing {filteredResources.length} of {resources.length} resources
      </p>
    </div>
  );
}
