"use client";
import { useState } from "react";

function GithubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-slate-800/40 border border-slate-800 rounded-xl p-6 hover:border-slate-600 transition-all flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
        </div>
        <div>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((t) => (
              <span key={t} className="bg-slate-900 text-emerald-400 font-mono text-xs px-2.5 py-1 rounded-md border border-slate-800">
                {t}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setOpen(true)}
              className="text-sm px-3 py-1.5 rounded-lg border border-emerald-700 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-500 transition-all font-medium"
            >
              Case Study
            </button>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white flex items-center gap-1.5 text-sm transition-colors"
            >
              <GithubIcon size={16} /> Source Code
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
            <p className="text-emerald-400 text-sm font-mono mb-6">Case Study</p>

            <div className="space-y-5 text-sm text-slate-300 leading-relaxed">
              {project.caseStudy.map((section) => (
                <div key={section.heading}>
                  <h4 className="text-white font-semibold mb-1">{section.heading}</h4>
                  <p className="text-slate-400">{section.body}</p>
                </div>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              <GithubIcon size={15} /> View on GitHub
            </a>
          </div>
        </div>
      )}
    </>
  );
}
