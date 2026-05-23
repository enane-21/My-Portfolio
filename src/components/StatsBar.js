"use client";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { label: "CGPA", value: 3.8, suffix: "", decimals: 1 },
  { label: "Projects Built", value: 2, suffix: "+", decimals: 0 },
  { label: "Entrace Exam Score", value: 506, suffix: "/700", decimals: 0 },
  { label: "Years Studying Computer Science", value: 4, suffix: "+", decimals: 0 },
];

function Counter({ value, suffix, decimals }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold text-emerald-400">
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-10 border-t border-slate-800">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map((s) => (
          <div key={s.label} className="bg-slate-800/40 border border-slate-800 rounded-xl p-5 text-center hover:border-emerald-800 transition-colors">
            <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
            <p className="text-slate-400 text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
