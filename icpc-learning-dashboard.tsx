import React, { useState, useEffect, useCallback } from 'react';
import { Sun, Moon, BookOpen, ExternalLink, Code, FileText, CheckCircle, XCircle } from 'lucide-react';

// --- Data Structure (Simplified from original) ---
// We will keep the original 'weeks' structure for now, but will assume
// that for a dashboard view, we need to extract key metrics/summaries
// from the markdown content, or use a simplified, pre-processed version.
// Since we cannot pre-process the external markdown files, we will
// focus on presenting the *metadata* in a dashboard style and
// providing direct links to the content, rather than fetching and rendering it.
const weeks = [
  {
    id: 0,
    title: "Week 00 - Orientation Week",
    url: "https://raw.githubusercontent.com/wiki/sayedmostaf/ICPC-ANU-Community-Level-0-2025/Week-00-(Orientation-Week).md",
    summary: "Get started with the community, tools, and expectations for the Level 0 course.",
    status: "Completed", // Placeholder for a new dashboard metric
    tasks: 3,
    problems: 0
  },
  {
    id: 1,
    title: "Week 01 - Fundamentals of C++ Programming",
    url: "https://raw.githubusercontent.com/wiki/sayedmostaf/ICPC-ANU-Community-Level-0-2025/Week-01-(Fundamentals-of-Cpp-Programming).md",
    summary: "Introduction to C++ syntax, variables, data types, and basic input/output.",
    status: "In Progress",
    tasks: 5,
    problems: 10
  },
  {
    id: 2,
    title: "Week 02 - Conditions",
    url: "https://raw.githubusercontent.com/wiki/sayedmostaf/ICPC-ANU-Community-Level-0-2025/Week-02-(Conditions).md",
    summary: "Learning about conditional statements (if, else if, else) and boolean logic.",
    status: "Pending",
    tasks: 4,
    problems: 8
  },
  {
    id: 3,
    title: "Week 03 - Loops",
    url: "https://raw.githubusercontent.com/wiki/sayedmostaf/ICPC-ANU-Community-Level-0-2025/Week-03-(Loops).md",
    summary: "Mastering iteration with for, while, and do-while loops for repetitive tasks.",
    status: "Pending",
    tasks: 6,
    problems: 12
  },
  {
    id: 4,
    title: "Week 04 - Arrays",
    url: "https://raw.githubusercontent.com/wiki/sayedmostaf/ICPC-ANU-Community-Level-0-2025/Week-04-(Arrays).md",
    summary: "Understanding arrays, one-dimensional and multi-dimensional, and their applications.",
    status: "Pending",
    tasks: 4,
    problems: 10
  }
];

// --- Utility Components ---

// Theme Toggle Component (Reused)
const ThemeToggle = ({ isDark, toggle }) => (
  <button onClick={toggle} className="theme-toggle" aria-label="Toggle theme">
    {isDark ? <Sun size={24} /> : <Moon size={24} />}
  </button>
);

// Navbar Component (Reused)
const Navbar = ({ isDark, toggleTheme }) => (
  <nav className="navbar">
    <div className="nav-content">
      <div className="nav-logo">
        <BookOpen size={32} className="logo-icon" />
        <div>
          <h1 className="nav-title">ICPC ANU Community</h1>
          <p className="nav-subtitle">Level 0 - Learning Dashboard</p>
        </div>
      </div>
      <ThemeToggle isDark={isDark} toggle={toggleTheme} />
    </div>
  </nav>
);

// --- New Dashboard Components ---

// Status Badge Component
const StatusBadge = ({ status }) => {
  let icon, colorClass;
  switch (status) {
    case 'Completed':
      icon = <CheckCircle size={16} />;
      colorClass = 'status-completed';
      break;
    case 'In Progress':
      icon = <Code size={16} />;
      colorClass = 'status-progress';
      break;
    case 'Pending':
    default:
      icon = <FileText size={16} />;
      colorClass = 'status-pending';
      break;
  }

  return (
    <span className={\`status-badge \${colorClass}\`}>
      {icon}
      {status}
    </span>
  );
};

// Week Dashboard Card
const WeekDashboardCard = ({ week }) => {
  const weekTitle = week.title.replace(\`Week 0\${week.id} - \`, '');
  const weekNumber = \`Week \${week.id < 10 ? '0' + week.id : week.id}\`;

  return (
    <div className="dashboard-card">
      <div className="card-header">
        <h3 className="card-title">{weekTitle}</h3>
        <StatusBadge status={week.status} />
      </div>
      <p className="card-week-number">{weekNumber}</p>
      <p className="card-summary">{week.summary}</p>
      
      <div className="card-metrics">
        <div className="metric-item">
          <span className="metric-value">{week.tasks}</span>
          <span className="metric-label">Tasks</span>
        </div>
        <div className="metric-item">
          <span className="metric-value">{week.problems}</span>
          <span className="metric-label">Problems</span>
        </div>
      </div>

      <a 
        href={week.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="card-link"
      >
        View Full Content <ExternalLink size={16} />
      </a>
    </div>
  );
};

// --- Main App Component (Refactored) ---

export default function DashboardApp() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false;
  });
  
  // Removed expandedWeeks state as we no longer have collapsed sections

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = useCallback(() => setIsDark(prev => !prev), []);

  return (
    <div className="app">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="main-content">
        <div className="hero-section">
          <h1 className="hero-title">ICPC Level 0 Learning Dashboard 🚀</h1>
          <p className="hero-text">
            A quick overview of your progress and the content for each week. Click "View Full Content" to see the detailed notes.
          </p>
        </div>

        <div className="dashboard-grid">
          {weeks.map(week => (
            <WeekDashboardCard
              key={week.id}
              week={week}
            />
          ))}
        </div>
      </main>

      {/* Removed BackToTop as it's less critical for a dashboard view */}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

        :root {
          --primary: #5eb9b6;
          --secondary: #f5a962;
          --accent: #f5a962;
          --bg: #ffffff;
          --surface: #f8f9fa;
          --card-bg: #ffffff;
          --text: #2d3748;
          --text-secondary: #4a5568;
          --border: #e2e8f0;
          --shadow: rgba(0, 0, 0, 0.1);
          --status-completed: #38a169; /* Green */
          --status-progress: #ecc94b; /* Yellow */
          --status-pending: #4299e1; /* Blue */
        }

        [data-theme="dark"] {
          --primary: #5eb9b6;
          --secondary: #f5a962;
          --accent: #f5a962;
          --bg: #1a202c;
          --surface: #2d3748;
          --card-bg: #4a5568;
          --text: #f7fafc;
          --text-secondary: #cbd5e0;
          --border: #4a5568;
          --shadow: rgba(0, 0, 0, 0.3);
          --status-completed: #68d391;
          --status-progress: #f6e05e;
          --status-pending: #63b3ed;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', sans-serif;
          background: var(--bg);
          color: var(--text);
          transition: background 0.3s ease, color 0.3s ease;
        }

        .app {
          min-height: 100vh;
          background: var(--bg);
        }

        /* Navbar Styles (Simplified for brevity, assuming similar to original) */
        .navbar {
          background: var(--surface);
          border-bottom: 3px solid var(--primary);
          padding: 1.25rem 2rem;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 4px 12px var(--shadow);
          transition: all 0.3s ease;
        }

        .nav-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .logo-icon {
          color: var(--primary);
        }

        .nav-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text);
        }

        .nav-subtitle {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .theme-toggle {
          background: none;
          border: none;
          color: var(--text);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 50%;
          transition: background 0.2s;
        }

        .theme-toggle:hover {
          background: rgba(var(--text), 0.1);
        }

        /* Main Content and Hero */
        .main-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        .hero-section {
          text-align: center;
          margin-bottom: 3rem;
          padding: 2rem;
          background: var(--surface);
          border-radius: 12px;
          box-shadow: 0 4px 12px var(--shadow);
        }

        .hero-title {
          font-size: 2.5rem;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }

        .hero-text {
          font-size: 1.1rem;
          color: var(--text-secondary);
        }

        /* Dashboard Grid */
        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        /* Dashboard Card */
        .dashboard-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 12px var(--shadow);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .dashboard-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(var(--shadow), 0.2);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }

        .card-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--text);
          margin: 0;
          line-height: 1.2;
        }

        .card-week-number {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--primary);
          margin-bottom: 1rem;
        }

        .card-summary {
          font-size: 1rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        /* Status Badge */
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.3rem 0.7rem;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .status-completed {
          background-color: rgba(56, 161, 105, 0.1); /* Green-light */
          color: var(--status-completed);
        }

        .status-progress {
          background-color: rgba(236, 201, 75, 0.1); /* Yellow-light */
          color: var(--status-progress);
        }

        .status-pending {
          background-color: rgba(66, 153, 225, 0.1); /* Blue-light */
          color: var(--status-pending);
        }

        /* Metrics */
        .card-metrics {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border);
        }

        .metric-item {
          display: flex;
          flex-direction: column;
          text-align: center;
        }

        .metric-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
          line-height: 1;
        }

        .metric-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          margin-top: 0.2rem;
        }

        /* Card Link */
        .card-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary);
          text-decoration: none;
          font-weight: 600;
          padding: 0.5rem 0;
          border-radius: 6px;
          transition: color 0.2s;
        }

        .card-link:hover {
          color: var(--secondary);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .main-content {
            padding: 1rem;
          }
          .hero-title {
            font-size: 2rem;
          }
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
