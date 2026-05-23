"use client";
import { useState } from "react";
import { Mail } from "lucide-react";

function validate(fields) {
  const errors = {};
  if (!fields.name.trim()) errors.name = "Name is required.";
  if (!fields.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!fields.message.trim()) errors.message = "Message is required.";
  return errors;
}

export default function ContactForm() {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function handleChange(e) {
    const updated = { ...fields, [e.target.name]: e.target.value };
    setFields(updated);
    // Clear error on change
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setStatus("success");
        setFields({ name: "", email: "", message: "" });
      } else {
        const data = await res.json();
        setErrors({ server: data.error || "Something went wrong." });
        setStatus("idle");
      }
    } catch {
      setErrors({ server: "Network error. Please try again." });
      setStatus("idle");
    }
  }

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800">
      <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
        <Mail className="text-emerald-400" size={28} /> Get In Touch
      </h2>
      <p className="text-slate-400 mb-8 text-sm">Have a project in mind or just want to say hi? Drop a message.</p>

      {status === "success" ? (
        <div className="bg-emerald-900/30 border border-emerald-700 rounded-xl p-6 flex items-start gap-4 max-w-lg">
          <div className="text-emerald-400 mt-0.5">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <div>
            <p className="text-emerald-400 font-semibold text-sm">Message received!</p>
            <p className="text-slate-400 text-sm mt-0.5">Thanks for reaching out. I&apos;ll get back to you soon.</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5 max-w-lg">
          <div>
            <label className="block text-sm text-slate-300 mb-1.5" htmlFor="name">Name</label>
            <input
              id="name" name="name" type="text"
              value={fields.name} onChange={handleChange}
              placeholder="Your name"
              className={`w-full bg-slate-800 border rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-emerald-500 transition-colors ${errors.name ? "border-red-500" : "border-slate-700"}`}
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-1.5" htmlFor="email">Email</label>
            <input
              id="email" name="email" type="email"
              value={fields.email} onChange={handleChange}
              placeholder="you@example.com"
              className={`w-full bg-slate-800 border rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-emerald-500 transition-colors ${errors.email ? "border-red-500" : "border-slate-700"}`}
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-1.5" htmlFor="message">Message</label>
            <textarea
              id="message" name="message" rows={5}
              value={fields.message} onChange={handleChange}
              placeholder="What's on your mind?"
              className={`w-full bg-slate-800 border rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-emerald-500 transition-colors resize-none ${errors.message ? "border-red-500" : "border-slate-700"}`}
            />
            {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
          </div>

          {errors.server && (
            <p className="text-red-400 text-sm">{errors.server}</p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-emerald-500 hover:bg-emerald-600 disabled:opacity-60 text-slate-950 font-bold px-6 py-2.5 rounded-lg transition-colors text-sm"
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
        </form>
      )}
    </section>
  );
}
