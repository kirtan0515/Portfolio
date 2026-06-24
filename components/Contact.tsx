"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  MapPin,
  Download,
  CheckCircle2,
  Copy,
  Check,
} from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "kirtan.patel0515@gmail.com",
    href: "mailto:kirtan.patel0515@gmail.com",
    color: "indigo",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/kirtanpatel0515",
    href: "https://linkedin.com/in/kirtanpatel0515",
    color: "cyan",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/kirtan0515",
    href: "https://github.com/kirtan0515",
    color: "violet",
  },
];

const colorMap: Record<string, { icon: string; border: string; hover: string }> = {
  indigo: {
    icon: "bg-indigo-500/10 text-indigo-400",
    border: "border-indigo-500/20",
    hover: "hover:border-indigo-400/40 hover:bg-indigo-500/5",
  },
  cyan: {
    icon: "bg-cyan-500/10 text-cyan-400",
    border: "border-cyan-500/20",
    hover: "hover:border-cyan-400/40 hover:bg-cyan-500/5",
  },
  violet: {
    icon: "bg-violet-500/10 text-violet-400",
    border: "border-violet-500/20",
    hover: "hover:border-violet-400/40 hover:bg-violet-500/5",
  },
};

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("kirtan.patel0515@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission (replace with actual backend/Formspree/EmailJS)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="section-padding relative"
      aria-labelledby="contact-heading"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's"
          titleHighlight="connect"
          description="Open to internships, early-career roles, and interesting conversations about cloud, AI, and backend engineering."
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                Ready to build something great?
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Best for internship opportunities, technical conversations, and
                project collaborations. I&apos;m actively looking for roles in
                cloud engineering, backend development, AI systems, and
                full-stack engineering.
              </p>
              <p className="text-slate-500 text-xs mt-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                Usually replies within 24–48 hours
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-indigo-400" aria-hidden="true" />
              Harrisburg, PA — open to remote &amp; relocation
            </div>

            {/* Contact links */}
            <div className="space-y-3">
              {contactLinks.map((link) => {
                const colors = colorMap[link.color];
                const isEmail = link.label === "Email";
                return (
                  <div key={link.label} className="flex items-center gap-2">
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`flex-1 flex items-center gap-4 p-4 glass rounded-xl border ${colors.border} ${colors.hover} transition-all duration-200 group`}
                      aria-label={`${link.label}: ${link.value}`}
                    >
                      <div
                        className={`w-10 h-10 rounded-lg ${colors.icon} flex items-center justify-center shrink-0`}
                        aria-hidden="true"
                      >
                        <link.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                          {link.label}
                        </p>
                        <p className="text-sm text-white font-medium group-hover:text-indigo-300 transition-colors">
                          {link.value}
                        </p>
                      </div>
                    </a>
                    {isEmail && (
                      <button
                        onClick={copyEmail}
                        className="p-3 glass rounded-xl border border-white/5 hover:border-indigo-500/30 text-slate-500 hover:text-indigo-300 transition-all duration-200"
                        aria-label="Copy email address"
                        title="Copy email"
                      >
                        {copied ? (
                          <Check className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                        ) : (
                          <Copy className="w-4 h-4" aria-hidden="true" />
                        )}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Resume download */}
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-3 p-4 glass rounded-xl border border-white/5 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-200 group"
              aria-label="Download resume PDF"
            >
              <div
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                <Download className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                  Resume
                </p>
                <p className="text-sm text-white font-medium">
                  Download PDF
                </p>
              </div>
            </a>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <div className="glass rounded-2xl border border-emerald-500/20 p-10 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <CheckCircle2
                    className="w-16 h-16 text-emerald-400 mb-4"
                    aria-hidden="true"
                  />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Message sent!
                </h3>
                <p className="text-slate-400 text-sm">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl border border-white/5 p-7 space-y-5"
                aria-label="Contact form"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-slate-400 mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, name: e.target.value }))
                      }
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-slate-700/50 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-slate-400 mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, email: e.target.value }))
                      }
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-slate-700/50 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-medium text-slate-400 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, subject: e.target.value }))
                    }
                    placeholder="Internship opportunity / Collaboration / etc."
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-slate-700/50 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-slate-400 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, message: e.target.value }))
                    }
                    placeholder="Tell me about the opportunity or what you'd like to discuss..."
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-slate-700/50 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm shadow-glow hover:shadow-glow-lg transition-all duration-200"
                  aria-label="Send message"
                >
                  {loading ? (
                    <>
                      <span
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                        aria-hidden="true"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-600 text-center">
                  Or email me directly at{" "}
                  <a
                    href="mailto:kirtan.patel0515@gmail.com"
                    className="text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    kirtan.patel0515@gmail.com
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
