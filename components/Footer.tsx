"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Terminal, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative border-t border-white/5 py-12"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-indigo-400" aria-hidden="true" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">Kirtan Patel</p>
              <p className="text-xs text-slate-500">
                Cloud · AI · Full-Stack Engineer
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/kirtan0515"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/in/kirtanpatel0515"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="mailto:kirtan.patel0515@gmail.com"
              className="p-2.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Copyright + scroll to top */}
          <div className="flex items-center gap-4">
            <p className="text-xs text-slate-600">
              © {new Date().getFullYear()} Kirtan Patel
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg glass border border-white/5 text-slate-500 hover:text-white hover:border-indigo-500/30 transition-all duration-200"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
            </motion.button>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-slate-700 font-mono">
            Built with Next.js · TypeScript · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
