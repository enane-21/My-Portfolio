"use client";
import { useEffect, useRef, useState } from "react";

const MILESTONES = [
  {
    year: "2019",
    title: "General Secondary Education",
    place: "Abay Minch School",
    detail:
      'Completed with "Very Great Distinction" — straight A\'s across Maths, Physics, Chemistry, Biology, History, Geography, Amharic, and English.',
  },
  {
    year: "2021",
    title: "Ethiopian ESSLCE Examination",
    place: "National Entrance Exam",
    detail:
      "Scored an outstanding 506/700 on the ESSLCE — including  88 in Mathematics, and 88 in Physics.",
  },
  {
    year: "2026",
    title: "BSc in Computer Science",
    place: "Debre Tabor University",
    detail:
      "Graduated with a 3.8 CGPA, earned an A+ on graduation research, and cleared the National Exit Exam with 66%.",
  },
];

function MilestoneItem({ milestone, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex gap-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Track */}
      <div className="flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full border-2 mt-1 transition-all duration-500 ${
          visible ? "bg-emerald-400 border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]" : "bg-slate-700 border-slate-600"
        }`} />
        {index < MILESTONES.length - 1 && (
          <div className={`w-0.5 flex-1 mt-1 transition-all duration-700 ${visible ? "bg-emerald-800" : "bg-slate-800"}`} style={{ minHeight: "3rem" }} />
        )}
      </div>

      {/* Content */}
      <div className="pb-10">
        <span className="text-emerald-400 font-mono text-sm">{milestone.year}</span>
        <h3 className="text-white font-bold text-lg leading-tight">{milestone.title}</h3>
        <p className="text-slate-500 text-xs mb-2">{milestone.place}</p>
        <p className="text-slate-400 text-sm leading-relaxed">{milestone.detail}</p>
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800">
      <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-2">
        <svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" />
        </svg>
        Academic Milestones
      </h2>
      <div>
        {MILESTONES.map((m, i) => (
          <MilestoneItem key={m.year} milestone={m} index={i} />
        ))}
      </div>
    </section>
  );
}
