"use client";
import { useState } from "react";

const SKILLS = [
  { name: "React.js", category: "Frontend" },
  { name: "JavaScript (ES6+)", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "HTML & CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "Git", category: "DevOps & Tools" },
  { name: "GitHub", category: "DevOps & Tools" },
  { name: "VS Code", category: "DevOps & Tools" },
  { name: "Windows Troubleshooting", category: "IT Support" },
  { name: "LAN Connectivity", category: "IT Support" },
  { name: "ICT Asset Inventory", category: "IT Support" },
  { name: "Hardware Repair", category: "IT Support" },
];

const CATEGORIES = ["All", "Frontend", "Backend", "DevOps & Tools", "IT Support"];

const CATEGORY_COLORS = {
  Frontend: "text-sky-400 border-sky-800 bg-sky-900/30",
  Backend: "text-emerald-400 border-emerald-800 bg-emerald-900/30",
  "DevOps & Tools": "text-violet-400 border-violet-800 bg-violet-900/30",
  "IT Support": "text-amber-400 border-amber-800 bg-amber-900/30",
};

export default function Skills() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? SKILLS : SKILLS.filter((s) => s.category === active);

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
        <svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
        </svg>
        Core Skills
      </h2>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
              active === cat
                ? "bg-emerald-500 border-emerald-500 text-slate-950"
                : "border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skill chips */}
      <div className="flex flex-wrap gap-3">
        {filtered.map((skill) => (
          <span
            key={skill.name}
            className={`px-3 py-1.5 rounded-lg border text-sm font-mono transition-all duration-300 ${
              CATEGORY_COLORS[skill.category]
            }`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}
