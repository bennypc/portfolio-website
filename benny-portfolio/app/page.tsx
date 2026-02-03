"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Server,
  Cpu,
  Globe,
  Database,
  Terminal,
  Layers,
  Camera,
  Gamepad2
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- UTILS ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- COMPONENTS ---

const SpotlightCard = ({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(16, 185, 129, 0.15), transparent 40%)`
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

const Badge = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={cn(
      "inline-flex items-center rounded-md bg-neutral-800/50 px-2 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-neutral-700/50 font-mono",
      className
    )}
  >
    {children}
  </span>
);

// --- DATA ---
const EXPERIENCE = [
  {
    company: "Amazon",
    role: "Software Development Engineer Intern",
    team: "Prime Payments",
    date: "May 2025 – Aug 2025",
    description:
      "Built an orchestration system on ECS Fargate to manage Prime subscription workflows, replacing legacy scripts with automated, fault-tolerant runs.",
    metrics: ["AWS ECS (Fargate)", "Docker", "Microservices"],
    link: "https://amazon.com"
  },
  {
    company: "Amazon",
    role: "Software Development Engineer Intern",
    team: "Middle Mile",
    date: "Jun 2024 – Sep 2024",
    description:
      "Developed a long-term resource planning platform using AWS compute + storage, including publishing and validation for large-scale logistics data.",
    metrics: ["AWS Lambda", "S3", "Data Validation"],
    link: "https://amazon.com"
  },
  {
    company: "CIBC",
    role: "Performance Developer Intern",
    team: "Mobile Performance",
    date: "Sep 2023 – Apr 2024",
    description:
      "Wrote automation to support mobile performance testing and reliability checks across iOS and Android pipelines.",
    metrics: ["Python", "Appium", "LoadRunner"],
    link: "https://cibc.com"
  },
  {
    company: "BC Public Service",
    role: "Full-Stack Developer Intern",
    team: "Registries",
    date: "May 2023 – Aug 2023",
    description:
      "Built and shipped web features with a test-first approach, working across frontend, backend, and database layers.",
    metrics: ["React", "Python", "PostgreSQL"],
    link: "https://gov.bc.ca"
  }
];

const PROJECTS = [
  {
    title: "Mobile Motion Game",
    desc: "Desktop tennis game replicating Wii Sports mechanics. Uses smartphone accelerometer data via UDP sockets for real-time, low-latency control.",
    tags: ["Unity", "C++", "UDP Networking"],
    stat: "< 10ms Latency",
    icon: <Gamepad2 size={16} />
  },
  {
    title: "Quant Portfolio Sim",
    desc: "Monte Carlo simulation platform modeling 50,000+ investment scenarios using Python (Pandas) and Next.js for client-side analytics.",
    tags: ["Python", "Next.js", "Financial Modeling"],
    stat: "50k+ Scenarios",
    icon: <Database size={16} />
  },

  {
    title: "AI Emotion Detect",
    desc: "Real-time emotion detection web app using TensorFlow and MediaPipe. Won $500 at nwHacks 2023.",
    tags: ["TensorFlow", "OpenCV", "Computer Vision"],
    stat: "95% Accuracy",
    icon: <Cpu size={16} />
  },
  {
    title: "UBC BizTech Dashboard",
    desc: "Serverless member dashboard managing 1,000+ users and $20k+ in ticket sales with NFC integration.",
    tags: ["Serverless", "AWS", "NFC"],
    stat: "1k+ Users",
    icon: <Globe size={16} />
  }
];

// --- MAIN PAGE ---
export default function Portfolio() {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          timeZone: "America/Vancouver"
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return <div className="bg-neutral-950 min-h-screen" />;

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-400 selection:bg-emerald-500/30 selection:text-emerald-200 font-sans antialiased">
      {/* BACKGROUND GRID (Subtle Texture) */}
      <div
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#262626 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-20 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
        {/* LEFT COLUMN: HERO / BIO / STICKY NAV */}
        <div className="lg:sticky lg:top-20 lg:h-fit flex flex-col gap-8">
          {/* HEADER */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-100">
              Benny Chinvanich
            </h1>
            <h2 className="text-lg md:text-xl font-medium text-neutral-200">
              CS & Business @ UBC
            </h2>
            <p className="leading-relaxed max-w-md text-neutral-400">
              Building scalable cloud systems and financial analysis tools.
              {/* Currently optimizing distributed workflows at Amazon. */}
            </p>
          </div>

          {/* METADATA / STATUS */}
          <div className="flex flex-col gap-3 font-mono text-xs">
            <div className="flex items-center gap-2 text-emerald-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              AVAILABLE FOR SUMMER 2026
            </div>
            <div className="flex items-center gap-2 text-neutral-500">
              <span className="w-2 h-2 border border-neutral-700 rounded-full"></span>
              VANCOUVER, BC ({time} PST)
            </div>
          </div>

          {/* NAVIGATION LINKS */}
          <nav className="flex flex-wrap gap-4">
            <a
              href="https://github.com/bennypc/"
              target="_blank"
              className="group flex items-center gap-2 text-sm font-medium hover:text-emerald-400 transition-colors"
            >
              <Github size={18} />
              <span className="border-b border-transparent group-hover:border-emerald-400 transition-colors">
                GitHub
              </span>
            </a>
            <a
              href="https://linkedin.com/in/benny-chinvanich/"
              target="_blank"
              className="group flex items-center gap-2 text-sm font-medium hover:text-emerald-400 transition-colors"
            >
              <Linkedin size={18} />
              <span className="border-b border-transparent group-hover:border-emerald-400 transition-colors">
                LinkedIn
              </span>
            </a>
            <a
              href="mailto:benny.pincha@gmail.com"
              className="group flex items-center gap-2 text-sm font-medium hover:text-emerald-400 transition-colors"
            >
              <Mail size={18} />
              <span className="border-b border-transparent group-hover:border-emerald-400 transition-colors">
                Email
              </span>
            </a>
          </nav>

          <a
            href="/BennyChinvanich_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 bg-neutral-100 hover:bg-white text-neutral-900 px-4 py-2 rounded-lg text-sm font-bold transition-all w-fit mt-4"
          >
            <Download size={16} /> Resume PDF
          </a>
        </div>

        {/* RIGHT COLUMN: CONTENT FEED */}
        <div className="flex flex-col gap-16">
          {/* SECTION: EXPERIENCE */}
          <section>
            <div className="flex items-center gap-2 mb-8 text-neutral-100 font-bold text-lg">
              <Terminal size={20} className="text-emerald-500" />
              <span>Experience</span>
            </div>

            <div className="relative border-l border-neutral-800 ml-3 space-y-12">
              {EXPERIENCE.map((job, i) => (
                <div key={i} className="relative pl-8 md:pl-12 group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border border-neutral-950 bg-neutral-800 group-hover:bg-emerald-500 group-hover:scale-125 transition-all"></div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                    <h3 className="text-neutral-100 font-bold text-lg group-hover:text-emerald-400 transition-colors">
                      {job.company}
                    </h3>
                    <span className="font-mono text-xs text-neutral-500">
                      {job.date}
                    </span>
                  </div>

                  <div className="text-sm font-medium text-neutral-300 mb-3">
                    {job.role}
                  </div>

                  <p className="text-sm leading-relaxed mb-4 text-neutral-400">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {job.metrics.map((m, j) => (
                      <Badge key={j}>{m}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION: PROJECTS */}
          {/* <section>
            <div className="flex items-center gap-2 mb-8 text-neutral-100 font-bold text-lg">
              <Layers size={20} className="text-emerald-500" />
              <span>Projects</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROJECTS.map((project, i) => (
                <SpotlightCard
                  key={i}
                  className="h-full p-6 transition-transform hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-neutral-800/50 rounded-lg text-emerald-400">
                      {project.icon}
                    </div>
                    <div className="flex items-center gap-1 text-xs font-mono text-neutral-500">
                      {project.stat}
                    </div>
                  </div>

                  <h3 className="text-neutral-100 font-bold mb-2 flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight size={14} className="text-neutral-600" />
                  </h3>

                  <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-xs text-neutral-500">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </section> */}

          {/* SECTION: PHOTOGRAPHY (Minimal) */}
          {/* <section>
            <div className="flex items-center gap-2 mb-8 text-neutral-100 font-bold text-lg">
              <Camera size={20} className="text-emerald-500" />
              <span>Visual Media</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-48">
              <div className="relative rounded-lg overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-emerald-500/50 transition-colors group">
                <div className="absolute inset-0 flex items-center justify-center text-neutral-700 text-xs font-mono group-hover:text-emerald-500">
                  IMG_01.RAW
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-emerald-500/50 transition-colors group">
                <div className="absolute inset-0 flex items-center justify-center text-neutral-700 text-xs font-mono group-hover:text-emerald-500">
                  IMG_02.RAW
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-emerald-500/50 transition-colors group">
                <div className="absolute inset-0 flex items-center justify-center text-neutral-700 text-xs font-mono group-hover:text-emerald-500">
                  IMG_03.RAW
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-emerald-500/50 transition-colors group md:block hidden">
                <div className="absolute inset-0 flex items-center justify-center text-neutral-700 text-xs font-mono group-hover:text-emerald-500">
                  IMG_04.RAW
                </div>
              </div>
            </div>
            <p className="text-xs text-neutral-500 mt-4 font-mono">
              Capturing architecture and street photography.
            </p>
          </section> */}

          {/* FOOTER */}
          <footer className="pt-8 border-t border-neutral-900 flex justify-between items-center text-xs text-neutral-600 font-mono">
            <p>© 2026 Benny Chinvanich</p>
            <p>Built with Next.js & Tailwind</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
