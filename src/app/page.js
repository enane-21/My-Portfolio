import { Mail, Phone, MapPin, Briefcase, GraduationCap } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import Skills from "@/components/Skills";
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";

const PROJECTS = [
  {
    title: "Web-based Brokerage System",
    description:
      "Full-stack MERN application that streamlines brokerage operations and user transactions with secure authentication and role-based access.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/enane-21/BrokerySystem",
    caseStudy: [
      {
        heading: "Overview",
        body: "A full-stack brokerage platform built with the MERN stack, enabling buyers and sellers to manage listings, transactions, and profiles through a unified dashboard.",
      },
      {
        heading: "Database Design",
        body: "MongoDB schemas were structured around three core collections: Users (with role fields for buyer/seller/admin), Listings (with status tracking), and Transactions (with audit timestamps). Mongoose virtuals handled computed fields like total value.",
      },
      {
        heading: "API Architecture",
        body: "RESTful Express.js routes were protected with JWT middleware. Sensitive endpoints (create listing, initiate transaction) required role verification before processing, preventing unauthorized access.",
      },
      {
        heading: "Key Challenge",
        body: "Handling concurrent transaction requests without double-booking required atomic MongoDB operations using findOneAndUpdate with conditions, ensuring data integrity under load.",
      },
    ],
  },
  {
    title: "E-bid Processing System",
    description:
      "Secure MERN application for real-time bidding processing and evaluation, with live bid thresholds and server-side validation.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/enane-21/Bid",
    caseStudy: [
      {
        heading: "Overview",
        body: "A real-time bidding platform where users submit bids on active items. The system evaluates bids server-side, enforces minimum increment rules, and tracks the highest bidder at all times.",
      },
      {
        heading: "Bid Processing Logic",
        body: "Each bid submission hits an Express.js endpoint that validates the amount against the current highest bid stored in MongoDB. Invalid or low bids are rejected immediately with descriptive error responses.",
      },
      {
        heading: "Real-time Data Flow",
        body: "Node.js handles the server-side state of active auctions. The React frontend polls for updates, reflecting the current highest bid and remaining time without requiring a full page reload.",
      },
      {
        heading: "Key Challenge",
        body: "Preventing race conditions when two users submit bids simultaneously was solved using MongoDB's conditional update operators, ensuring only the higher valid bid wins atomically.",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="bg-slate-900 text-slate-100 min-h-screen">
      <ThemeToggle />

      {/* HERO */}
      <header className="max-w-5xl mx-auto px-6 py-24 flex flex-col gap-4">
        <span className="text-emerald-500 font-mono">Hi, my name is</span>
        <h1 className="text-5xl font-bold text-white tracking-tight">
          Mengistu Animut Bogale
        </h1>
        <h2 className="text-2xl md:text-3xl text-slate-400 font-semibold">
          WEB Developer
        </h2>
        <p className="text-slate-400 max-w-2xl leading-relaxed">
          Computer Science graduate from Debre Tabor University (CGPA: 3.8).
          Dedicated to building scalable, efficient, and user-centric systems
          using modern JavaScript environments.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#projects"
            className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-6 py-3 rounded-lg transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-slate-700 hover:border-slate-500 px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
          >
            <Mail size={18} /> Contact Me
          </a>
        </div>
      </header>

      {/* SKILLS */}
      <Skills />

      {/* PROJECTS */}
      <section
        id="projects"
        className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800"
      >
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
          <svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
          </svg>
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <Timeline />

      {/* EXPERIENCE & EDUCATION */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Briefcase className="text-emerald-400" /> Experience
          </h2>
          <div className="border-l-2 border-slate-800 pl-4 space-y-2">
            <h3 className="font-bold text-white">ICT Center Intern</h3>
            <p className="text-sm text-emerald-400">
              Sekela Woreda, Amhara | Jul – Sep 2025
            </p>
            <p className="text-slate-400 text-sm">
              Repaired IT hardware equipment, optimized LAN connectivity, and
              tracked digital databases.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <GraduationCap className="text-emerald-400" /> Education
          </h2>
          <div className="space-y-2">
            <h3 className="font-bold text-white">BSc in Computer Science</h3>
            <p className="text-sm text-slate-400">
              Debre Tabor University (Graduation: 2026)
            </p>
            <p className="text-sm text-emerald-400 font-mono">
              CGPA: 3.8 / 4.0 | National Exit Exam: 66%
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <ContactForm />

      {/* FOOTER */}
      <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-slate-800 text-center text-slate-500 text-sm space-y-5">
        <div className="flex flex-wrap justify-center gap-6 text-slate-400">
          <span className="flex items-center gap-1.5">
            <MapPin size={16} /> Addis Ababa, Ethiopia
          </span>
          <span className="flex items-center gap-1.5">
            <Phone size={16} /> +251 924 328 087
          </span>
        </div>

        {/* Social links */}
        <SocialLinks />

        <p>
          © {new Date().getFullYear()} Mengistu Animut. Built with Next.js &amp;
          Tailwind CSS.
        </p>
      </footer>
    </main>
  );
}
