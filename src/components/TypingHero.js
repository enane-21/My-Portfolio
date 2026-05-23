"use client";
import { useEffect, useState } from "react";

const TITLES = [
  "Full-Stack  Developer",
  "React & Node.js Engineer",
  "Future Software Architect",
  "Open to Work Worldwide",
];

export default function TypingHero() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[titleIdx];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIdx((i) => (i + 1) % TITLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIdx]);

  return (
    <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 min-h-10">
      <span>{displayed}</span>
      <span className="animate-pulse text-emerald-400">|</span>
    </h2>
  );
}
