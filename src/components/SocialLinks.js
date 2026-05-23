"use client";
import { useState } from "react";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mengistu-animut",
    color: "hover:text-sky-400 hover:shadow-[0_0_16px_rgba(56,189,248,0.5)] hover:border-sky-500",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/enane-21",
    color: "hover:text-white hover:shadow-[0_0_16px_rgba(255,255,255,0.2)] hover:border-slate-400",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/mengistu.animut12",
    color: "hover:text-blue-400 hover:shadow-[0_0_16px_rgba(96,165,250,0.5)] hover:border-blue-500",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me/Meng1624",
    color: "hover:text-sky-400 hover:shadow-[0_0_16px_rgba(56,189,248,0.5)] hover:border-sky-500",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
];

export default function SocialLinks() {
  const [tooltip, setTooltip] = useState(null);

  return (
    <div className="flex justify-center gap-4">
      {SOCIALS.map((s) => (
        <div key={s.label} className="relative">
          <a
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            onMouseEnter={() => setTooltip(s.label)}
            onMouseLeave={() => setTooltip(null)}
            className={`flex items-center justify-center w-11 h-11 rounded-xl border border-slate-700 bg-slate-800/60 text-slate-400 transition-all duration-200 hover:scale-110 hover:-translate-y-1 ${s.color}`}
          >
            {s.icon}
          </a>
          {/* Tooltip */}
          {tooltip === s.label && (
            <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-slate-700 text-white text-xs px-2.5 py-1 rounded-md whitespace-nowrap pointer-events-none">
              {s.label}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-700" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
