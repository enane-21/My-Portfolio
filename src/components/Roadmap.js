"use client";
import { useEffect, useRef, useState } from "react";

const ROADMAP = [
  {
    phase: "Current Stack",
    status: "mastered",
    color: "emerald",
    items: [
      { name: "React.js", note: "Built 2 full-stack apps" },
      { name: "Node.js & Express", note: "REST APIs, JWT auth" },
      { name: "MongoDB", note: "Schema design, aggregation" },
      { name: "JavaScript ES6+", note: "Async/await, closures, modules" },
      { name: "Tailwind CSS", note: "Responsive UI design" },
      { name: "Git & GitHub", note: "Version control, collaboration" },
    ],
  },
  {
    phase: "Actively Learning",
    status: "learning",
    color: "sky",
    items: [
      { name: "TypeScript", note: "Type-safe JavaScript" },
      { name: "Next.js (Advanced)", note: "SSR, ISR, App Router" },
      { name: "PostgreSQL", note: "Relational databases" },
      { name: "Redux Toolkit", note: "State management at scale" },
      { name: "Jest & Testing", note: "Unit & integration tests" },
    ],
  },
  {
    phase: "Future Goals",
    status: "planned",
    color: "violet",
    items: [
      { name: "Docker & Kubernetes", note: "Containerization & orchestration" },
      { name: "AWS / Cloud", note: "Deployment, S3, Lambda" },
      { name: "GraphQL", note: "Flexible API design" },
      { name: "React Native", note: "Cross-platform mobile apps" },
      { name: "System Design", note: "Scalable architecture patterns" },
    ],
  },
];

const COLOR_MAP = {
  emerald: {
    badge: "bg-emerald-900/40 text-emerald-400 border-emerald-800",
    dot: "bg-emerald-400",
    header: "text-emerald-400",
    border: "border-emerald-900",
    glow: "hover:border-emerald-700",
  },
  sky: {
    badge: "bg-sky-900/40 text-sky-400 border-sky-800",
    dot: "bg-sky-400",
    header: "text-sky-400",
    border: "border-sky-900",
    glow: "hover:border-sky-700",
  },
  violet: {
    badge: "bg-violet-900/40 text-violet-400 border-violet-800",
    dot: "bg-violet-400",
    header: "text-violet-400",
    border: "border-violet-900",
    glow: "hover:border-violet-700",
  },
};

const STATUS_LABEL = {
  mastered: "Mastered",
  learning: "In Progress",
  planned: "Planned",
};

function RoadmapCard({ phase, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const c = COLOR_MAP[phase.color];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`bg-slate-800/40 border ${c.border} ${c.glow} rounded-2xl p-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="flex items-center justify-between mb-5">
        <h3 className={`text-lg font-bold ${c.header}`}>{phase.phase}</h3>
        <span className={`text-xs px-2.5 py-1 rounded-full border font-mono ${c.badge}`}>
          {STATUS_LABEL[phase.status]}
        </span>
      </div>
      <ul className="space-y-3">
        {phase.items.map((item) => (
          <li key={item.name} className="flex items-start gap-3">
            <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${c.dot}`} />
            <div>
              <span className="text-white text-sm font-medium">{item.name}</span>
              <span className="text-slate-500 text-xs ml-2">— {item.note}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Roadmap() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white flex items-center gap-2 mb-2">
          <svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3h18v18H3z" /><path d="M3 9h18M3 15h18M9 3v18" />
          </svg>
          Skills & Roadmap
        </h2>
        <p className="text-slate-400 text-sm max-w-xl">
          Where I am today, what I&apos;m building toward, and where I&apos;m headed — a transparent view of my growth as a developer.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {ROADMAP.map((phase, i) => (
          <RoadmapCard key={phase.phase} phase={phase} index={i} />
        ))}
      </div>
    </section>
  );
}
