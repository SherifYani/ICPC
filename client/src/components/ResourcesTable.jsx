import React, { useState } from "react";
import { ExternalLink, Search, BookOpen } from "lucide-react";
import ModernSelect from "./ModernSelect";

const TYPE_OPTIONS = [
  { value: "all", label: "All Types" },
  { value: "Video", label: "Videos" },
  { value: "Slides", label: "Slides" },
  { value: "Documentation", label: "Documentation" },
  { value: "Tool", label: "Tools" },
];

export default function ResourcesTable({ resources = [] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.topic
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || resource.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const getTypeColor = type => {
    const colors = {
      Video:
        "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-300 dark:border-red-700",
      Slides:
        "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-300 dark:border-blue-700",
      Documentation:
        "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-300 dark:border-purple-700",
      Tool: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-300 dark:border-green-700",
    };
    return (
      colors[type] ||
      "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400 border-gray-300 dark:border-gray-700"
    );
  };

  const getTypeIcon = type => {
    const icons = {
      Video: "",
      Slides: "",
      Documentation: "",
      Tool: "",
    };
    return icons[type] || "";
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative group">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="modern-select w-5xl pl-12"
          />
        </div>
        <ModernSelect
          value={filterType}
          onChange={setFilterType}
          options={TYPE_OPTIONS}
          label="Filter by Type"
          placeholder="All Types"
        />
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border-2 border-border shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr
                className="border-b-2 border-border"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0, 229, 255, 0.08), rgba(255, 170, 0, 0.08))",
                }}
              >
                <th className="px-6 py-4 text-left text-sm font-bold gradient-text">
                  Topic
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold gradient-text">
                  Type
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold gradient-text">
                  Description
                </th>
                <th className="px-6 py-4 text-center text-sm font-bold gradient-text">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredResources.length > 0 ? (
                filteredResources.map((resource, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-border hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-foreground">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform">
                          {getTypeIcon(resource.type)}
                        </span>
                        <span className="group-hover:text-primary transition-colors font-semibold">
                          {resource.topic}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-3 py-1.5 rounded-full text-xs font-bold border ${getTypeColor(resource.type)} group-hover:scale-105 transition-transform inline-block`}
                      >
                        {resource.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground max-w-md">
                      <p className="line-clamp-2 group-hover:text-foreground transition-colors">
                        {resource.description}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                        style={{
                          boxShadow: "0 0 0 0 rgba(var(--icpc-teal-rgb), 0.5)",
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.boxShadow =
                            "var(--shadow-glow-teal)";
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.boxShadow =
                            "0 0 0 0 rgba(var(--icpc-teal-rgb), 0.5)";
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
                    colSpan="4"
                    className="px-6 py-12 text-center text-muted-foreground"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <BookOpen className="w-12 h-12 text-muted-foreground/30" />
                      <p className="font-medium">
                        No resources found matching your search.
                      </p>
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
          Showing{" "}
          <span className="font-bold text-primary">
            {filteredResources.length}
          </span>{" "}
          of{" "}
          <span className="font-bold text-secondary">{resources.length}</span>{" "}
          resources
        </p>
        {filteredResources.length > 0 && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="font-medium">Explore & Learn!</span>
          </div>
        )}
      </div>
    </div>
  );
}
