"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  Server,
  Database,
  Cpu,
  Code2,
  Terminal,
  Zap,
  Layers,
  Search
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- UTILS ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- DATA: RESUME CONTENT ---
// We map specific skill IDs to jobs to create the interaction
const SKILLS = [
  { id: "py", name: "Python", cat: "Lang" },
  { id: "aws", name: "AWS (ECS/Lambda)", cat: "Cloud" },
  { id: "react", name: "React/Next.js", cat: "Web" },
  { id: "java", name: "Java", cat: "Lang" },
  { id: "sql", name: "SQL/Postgres", cat: "DB" },
  { id: "cpp", name: "C++", cat: "Lang" },
  { id: "ts", name: "TypeScript", cat: "Lang" },
  { id: "docker", name: "Docker", cat: "Tools" },
  { id: "quant", name: "Quant Analysis", cat: "Domain" },
  { id: "algo", name: "Algorithms", cat: "Domain" }
];

const EXPERIENCE = [
  {
    company: "Amazon",
    role: "SDE Intern - Prime Payments",
    date: "May 2025 – Aug 2025",
    location: "Vancouver, BC",
    desc: "Engineered orchestration system with AWS ECS Fargate replacing legacy scripts. Implemented multi-tier rate limiting (50+ TPS) for millions of subscriptions.",
    relatedSkills: ["aws", "java", "docker", "algo"]
  },
  {
    company: "Amazon",
    role: "SDE Intern - Middle Mile",
    date: "Jun 2024 – Sep 2024",
    location: "Vancouver, BC",
    desc: "Developed LTRP platform using Lambda/S3, reducing manual handling by 90%. Supported resource planning for 10M+ daily packages.",
    relatedSkills: ["aws", "java", "ts", "sql"]
  },
  {
    company: "CIBC",
    role: "Performance Dev Intern",
    date: "Sep 2023 – Apr 2024",
    location: "Toronto, ON",
    desc: "Implemented Python automation scripts for load testing. Reduced manual testing effort by 70% for iOS/Android apps.",
    relatedSkills: ["py", "algo", "sql"]
  },
  {
    company: "BC Public Service",
    role: "Full-Stack Developer Intern",
    date: "May 2023 – Aug 2023",
    location: "Vancouver, BC",
    desc: "Built scalable web apps for Registries Dept. Applied TDD with Jest to improve efficiency by 30%.",
    relatedSkills: ["js", "react", "sql"]
  }
];

const PROJECTS = [
  {
    title: "Quant Portfolio Sim",
    tech: "Python, Next.js, Pandas",
    metric: "50k+ Scenarios",
    desc: "Monte Carlo simulation platform modeling investment scenarios with real-time visualization.",
    link: "#",
    relatedSkills: ["py", "react", "quant"]
  },
  {
    title: "Presently AI",
    tech: "TensorFlow, OpenCV",
    metric: "95% Accuracy",
    desc: "AI-powered emotion detection and speech analysis. Winner at nwHacks 2023.",
    link: "#",
    relatedSkills: ["py", "algo"]
  }
];

export default function PortfolioMinimal() {
  const [hoveredJob, setHoveredJob] = useState<string[] | null>(null);
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZoneName: "short"
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#080808] text-[#E1E1E1] font-sans selection:bg-white selection:text-black">
      {/* --- GRID BACKGROUND --- */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-20">
        {/* --- HEADER --- */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-white/10 pb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
              Benny Chinvanich
            </h1>
            <p className="text-lg text-neutral-400 max-w-xl leading-relaxed">
              CS & Business @ UBC. Specializing in{" "}
              <span className="text-white">high-throughput cloud systems</span>{" "}
              and <span className="text-white">quantitative analysis</span>.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex flex-col items-start md:items-end gap-2 text-sm font-mono text-neutral-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span>AVAILABLE FOR 2026</span>
            </div>
            <span>{currentTime}</span>
            <span>VANCOUVER, BC</span>
          </div>
        </header>

        {/* --- MAIN GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* LEFT COL: CONTENT (8 cols) */}
          <main className="md:col-span-8 space-y-16">
            {/* WORK EXPERIENCE */}
            <section>
              <h2 className="text-xs font-mono font-bold text-neutral-500 tracking-wider mb-6 flex items-center gap-2">
                <Terminal size={14} /> EXPERIENCE_LOG
              </h2>

              <div className="space-y-4">
                {EXPERIENCE.map((job, idx) => (
                  <div
                    key={idx}
                    className="group relative p-4 -mx-4 rounded-lg transition-all duration-200 hover:bg-white/[0.03] border border-transparent hover:border-white/5"
                    onMouseEnter={() => setHoveredJob(job.relatedSkills)}
                    onMouseLeave={() => setHoveredJob(null)}
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                      <h3 className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors">
                        {job.company}
                      </h3>
                      <span className="font-mono text-xs text-neutral-500">
                        {job.date}
                      </span>
                    </div>
                    <div className="mb-2 text-sm font-medium text-neutral-300">
                      {job.role}
                    </div>
                    <p className="text-sm text-neutral-400 leading-relaxed max-w-2xl">
                      {job.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* PROJECTS */}
            <section>
              <h2 className="text-xs font-mono font-bold text-neutral-500 tracking-wider mb-6 flex items-center gap-2">
                <Cpu size={14} /> SYSTEM_MODULES
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROJECTS.map((proj, idx) => (
                  <div
                    key={idx}
                    className="group border border-white/10 bg-white/[0.02] p-5 rounded hover:border-emerald-500/30 transition-colors cursor-pointer"
                    onMouseEnter={() => setHoveredJob(proj.relatedSkills)}
                    onMouseLeave={() => setHoveredJob(null)}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <Server
                        size={20}
                        className="text-neutral-600 group-hover:text-emerald-400 transition-colors"
                      />
                      <ArrowUpRight
                        size={16}
                        className="text-neutral-600 group-hover:text-white transition-colors"
                      />
                    </div>
                    <h3 className="font-medium text-white mb-1">
                      {proj.title}
                    </h3>
                    <div className="text-xs font-mono text-emerald-500 mb-3">
                      {proj.metric}
                    </div>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* RIGHT COL: STICKY INFO (4 cols) */}
          <aside className="md:col-span-4 space-y-12">
            {/* DYNAMIC SKILL MATRIX */}
            <div className="sticky top-12">
              <div className="p-6 border border-white/10 rounded-lg bg-[#0A0A0A] shadow-2xl">
                <h3 className="text-xs font-mono font-bold text-neutral-500 tracking-wider mb-4 flex items-center gap-2">
                  <Database size={14} /> STACK_ALLOCATION
                </h3>

                <div className="flex flex-wrap gap-2">
                  {SKILLS.map((skill) => {
                    const isActive = hoveredJob
                      ? hoveredJob.includes(skill.id)
                      : false;
                    const isDimmed = hoveredJob ? !isActive : false;

                    return (
                      <span
                        key={skill.id}
                        className={cn(
                          "px-2 py-1 text-xs border rounded transition-all duration-300",
                          isActive
                            ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]"
                            : "bg-white/5 border-white/5 text-neutral-400",
                          isDimmed && "opacity-30 blur-[1px]"
                        )}
                      >
                        {skill.name}
                      </span>
                    );
                  })}
                </div>

                <div className="mt-6 pt-6 border-t border-white/5">
                  <h3 className="text-xs font-mono font-bold text-neutral-500 tracking-wider mb-4">
                    LINKS
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="https://github.com/bennypc/"
                      target="_blank"
                      className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition-colors"
                    >
                      <Github size={16} /> GitHub
                    </a>
                    <a
                      href="https://linkedin.com/in/benny-chinvanich/"
                      target="_blank"
                      className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition-colors"
                    >
                      <Linkedin size={16} /> LinkedIn
                    </a>
                    <a
                      href="mailto:benny.pincha@gmail.com"
                      className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition-colors"
                    >
                      <Mail size={16} /> Email
                    </a>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full group flex items-center justify-center gap-2 bg-white text-black py-2 rounded text-sm font-medium hover:bg-neutral-200 transition-colors">
                    <Download
                      size={16}
                      className="group-hover:translate-y-0.5 transition-transform"
                    />
                    Resume.pdf
                  </button>
                </div>
              </div>

              {/* PHOTOGRAPHY TEASER - SUBTLE */}
              <div className="mt-8">
                <h3 className="text-xs font-mono font-bold text-neutral-500 tracking-wider mb-4 flex items-center gap-2">
                  <Layers size={14} /> OTHER_INTERESTS
                </h3>
                <div className="aspect-[4/3] bg-neutral-900 border border-white/5 rounded-lg overflow-hidden relative group cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <span className="text-xs text-neutral-500 font-mono group-hover:text-white transition-colors">
                      [ VIEW PHOTOGRAPHY ]
                    </span>
                  </div>
                  {/* Abstract Placeholder for photo - use real IMG here */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900 to-neutral-800 group-hover:scale-105 transition-transform duration-700"></div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* --- FOOTER --- */}
        <footer className="mt-20 pt-8 border-t border-white/10 flex justify-between items-center text-xs text-neutral-600 font-mono">
          <div>BUILT WITH NEXT.JS + TAILWIND</div>
          <div>© {new Date().getFullYear()}</div>
        </footer>
      </div>
    </div>
  );
}
