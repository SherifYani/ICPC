import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Code,
  Zap,
  Users,
  Trophy,
  Target,
  Sparkles,
  Rocket,
  Globe,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import StatCard from "@/components/StatCard";
import ResourcesTable from "@/components/ResourcesTable";
import ProblemsTable from "@/components/ProblemsTable";
import WeekCard from "@/components/WeekCard";
import DashboardSection from "@/components/DashboardSection";
import { weeksData, resourcesData, problemsData } from "@/data/weekData";

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const totalVideos = weeksData.reduce((sum, week) => sum + week.videoCount, 0);
  const totalResources = weeksData.reduce(
    (sum, week) => sum + week.resourceCount,
    0
  );
  const totalProblems = weeksData.reduce(
    (sum, week) => sum + week.problemCount,
    0
  );

  const stats = [
    {
      icon: Trophy,
      value: weeksData.length,
      label: "Learning Weeks",
      color: "var(--accent-purple)",
    },
    {
      icon: BookOpen,
      value: totalVideos,
      label: "Video Tutorials",
      color: "var(--icpc-teal)",
    },
    {
      icon: Target,
      value: totalProblems,
      label: "Practice Problems",
      color: "var(--anu-yellow)",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse-glow"
          style={{
            background:
              "radial-gradient(circle, var(--icpc-teal) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse-glow"
          style={{
            background:
              "radial-gradient(circle, var(--anu-yellow) 0%, transparent 70%)",
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--accent-purple) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        {/* Hero Section - Enhanced */}
        <section className="relative py-16 md:py-28 overflow-hidden">
          {/* Gradient Mesh Background */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: "var(--gradient-mesh)",
            }}
          />

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full opacity-40"
                style={{
                  background:
                    i % 2 === 0 ? "var(--icpc-teal)" : "var(--anu-yellow)",
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div
              className={`max-w-5xl mx-auto text-center space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {/* Badge */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sparkles className="w-5 h-5 text-accent-purple animate-pulse" />
                <span
                  className="text-sm md:text-base font-bold px-5 py-2.5 rounded-full backdrop-blur-sm"
                  style={{
                    background: "var(--glass-bg)",
                    border: "1px solid var(--glass-border)",
                    color: "var(--icpc-teal)",
                    boxShadow: "var(--shadow-glow-teal)",
                  }}
                >
                  ✨ Level 0 Learning Hub
                </span>
                <Sparkles className="w-5 h-5 text-accent-purple animate-pulse" />
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                  <span className="gradient-text block mb-2">
                    ICPC ANU Portal
                  </span>
                  <span
                    className="text-3xl md:text-5xl block"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Master Competitive Programming
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Embark on your coding journey with structured learning paths,
                  expert tutorials, and challenging problems designed to
                  transform you into a competitive programmer.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => setActiveTab("overview")}
                  className="btn-primary group px-8 py-4 text-lg"
                >
                  <Rocket className="inline-block w-5 h-5 mr-2 group-hover:animate-bounce-soft" />
                  Start Learning Now
                </button>
                <button
                  onClick={() => setActiveTab("problems")}
                  className="btn-secondary group px-8 py-4 text-lg"
                >
                  <Code className="inline-block w-5 h-5 mr-2" />
                  Explore Problems
                </button>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 max-w-3xl mx-auto">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <stat.icon
                        className="w-8 h-8 mb-2"
                        style={{ color: stat.color }}
                      />
                      <div className="text-3xl font-bold gradient-text">
                        {stat.value}+
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Navigation - Modern */}
        <section className="sticky top-[73px] z-40 backdrop-blur-xl border-b">
          <div
            className="absolute inset-0"
            style={{
              background: "var(--background)",
              opacity: 0.95,
            }}
          />
          <div className="container mx-auto px-4 relative">
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {[
                { id: "overview", label: "Overview", icon: Trophy },
                { id: "resources", label: "Resources", icon: BookOpen },
                { id: "problems", label: "Problems", icon: Code },
              ].map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-8 py-5 font-semibold transition-all duration-300 whitespace-nowrap group ${
                      activeTab === tab.id
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-5 h-5" />
                      <span>{tab.label}</span>
                    </div>

                    {/* Active Indicator */}
                    <div
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 rounded-full transition-all duration-300 ${
                        activeTab === tab.id
                          ? "w-full"
                          : "w-0 group-hover:w-1/2"
                      }`}
                      style={{
                        background: "var(--gradient-button)",
                      }}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-16">
                <DashboardSection
                  title="📖 Learning Modules"
                  subtitle="Click on any week to expand and explore detailed content"
                  icon={BookOpen}
                >
                  <div className="space-y-6">
                    {weeksData.map((week, index) => (
                      <div
                        key={week.id}
                        className="animate-fadeInUp"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <WeekCard week={week} index={index} />
                      </div>
                    ))}
                  </div>
                </DashboardSection>

                {/* Quick Links - Enhanced */}
                <DashboardSection
                  title="🌐 Join Our Community"
                  subtitle="Connect, collaborate, and grow with fellow programmers"
                  icon={Users}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <a
                      href="https://www.facebook.com/profile.php?id=61567179833991"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:scale-105"
                      style={{
                        background: "var(--gradient-card)",
                        border: "2px solid rgba(var(--icpc-teal-rgb), 0.2)",
                      }}
                    >
                      {/* Hover Effect */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(0, 229, 255, 0.1), rgba(183, 148, 246, 0.1))",
                        }}
                      />

                      <div className="relative flex items-start gap-4">
                        <div
                          className="p-4 rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300"
                          style={{
                            background: "var(--gradient-brain)",
                            boxShadow: "var(--shadow-glow-teal)",
                          }}
                        >
                          <Globe className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2 gradient-text">
                            Facebook Community
                          </h3>
                          <p className="text-muted-foreground mb-3">
                            Join discussions, get updates, and connect with
                            mentors and peers
                          </p>
                          <div
                            className="flex items-center gap-2 text-sm font-semibold"
                            style={{ color: "var(--icpc-teal)" }}
                          >
                            <span>Join Now</span>
                            <span className="group-hover:translate-x-1 transition-transform">
                              →
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a
                      href="https://www.youtube.com/@ICPCANU"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:scale-105"
                      style={{
                        background: "var(--gradient-card)",
                        border: "2px solid rgba(var(--anu-yellow-rgb), 0.2)",
                      }}
                    >
                      {/* Hover Effect */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(255, 170, 0, 0.1), rgba(255, 107, 157, 0.1))",
                        }}
                      />

                      <div className="relative flex items-start gap-4">
                        <div
                          className="p-4 rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300"
                          style={{
                            background: "var(--gradient-button)",
                            boxShadow: "var(--shadow-glow-yellow)",
                          }}
                        >
                          <Sparkles className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2 gradient-text">
                            YouTube Channel
                          </h3>
                          <p className="text-muted-foreground mb-3">
                            Watch comprehensive tutorials, problem walkthroughs,
                            and expert tips
                          </p>
                          <div
                            className="flex items-center gap-2 text-sm font-semibold"
                            style={{ color: "var(--anu-yellow)" }}
                          >
                            <span>Watch Videos</span>
                            <span className="group-hover:translate-x-1 transition-transform">
                              →
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </DashboardSection>
              </div>
            )}

            {/* Resources Tab */}
            {activeTab === "resources" && (
              <div className="animate-fadeInUp">
                <DashboardSection
                  title="📚 Learning Resources"
                  subtitle="Curated videos, slides, and articles for each topic"
                  icon={BookOpen}
                >
                  <ResourcesTable resources={resourcesData} />
                </DashboardSection>
              </div>
            )}

            {/* Problems Tab */}
            {activeTab === "problems" && (
              <div className="animate-fadeInUp">
                <DashboardSection
                  title="💻 Practice Problems"
                  subtitle="Solve problems to master competitive programming"
                  icon={Code}
                >
                  <ProblemsTable problems={problemsData} />
                </DashboardSection>
              </div>
            )}
          </div>
        </section>

        {/* Footer - Enhanced */}
        <section
          className="relative py-16 md:py-24 border-t overflow-hidden"
          style={{
            background: "var(--gradient-card)",
          }}
        >
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-3xl"
              style={{ background: "var(--icpc-teal)" }}
            />
            <div
              className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl"
              style={{ background: "var(--anu-yellow)" }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              {/* Icon */}
              <div className="flex justify-center">
                <div
                  className="p-5 rounded-2xl animate-pulse-glow"
                  style={{
                    background: "var(--gradient-button)",
                    boxShadow: "var(--shadow-glow-teal)",
                  }}
                >
                  <Trophy className="w-12 h-12 text-white" />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                  Ready to Begin Your Journey?
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Start with Week 00 to get oriented, then progress through each
                  week at your own pace. Join thousands of learners and become a
                  competitive programming champion!
                </p>
              </div>

              {/* CTA Button */}
              <div>
                <button
                  onClick={() => {
                    setActiveTab("overview");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="btn-primary text-lg group"
                >
                  <Rocket className="inline-block w-5 h-5 mr-2 group-hover:animate-bounce-soft" />
                  Start Learning Today
                </button>
              </div>

              {/* Divider */}
              <div className="pt-8">
                <div
                  className="h-px w-full max-w-md mx-auto"
                  style={{
                    background: "var(--gradient-brain)",
                    opacity: 0.3,
                  }}
                />
              </div>

              {/* Copyright */}
              <div>
                <p className="text-sm text-muted-foreground">
                  © 2025 ICPC ANU Community Level 0. Crafted with{" "}
                  <span className="text-red-500 animate-pulse">❤️</span> for
                  passionate learners.
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Empowering the next generation of competitive programmers
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Floating Particles Animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
