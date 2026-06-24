"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Scene3D from "./Scene3D";
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  ChevronDown,
} from "lucide-react";

const ROLES = [
  "Cloud Engineer",
  "AWS Solutions Architect",
  "Full-Stack Developer",
  "AI Systems Builder",
  "Backend Engineer",
];

function TypingText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = words[index];

    if (!deleting && displayed === current) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      const speed = deleting ? 40 : 80;
      timeoutRef.current = setTimeout(() => {
        setDisplayed((prev) =>
          deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
        );
      }, speed);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, deleting, index, words]);

  return (
    <span className="gradient-text">
      {displayed}
      <span className="cursor-blink text-indigo-400">|</span>
    </span>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* 3D Background Scene */}
      <Scene3D />

      {/* Radial hero gradient overlay */}
      <div
        className="absolute inset-0 bg-hero-gradient pointer-events-none"
        aria-hidden="true"
      />

      {/* Bottom fade to background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050810] to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/20 text-sm text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              Currently interning · Open to full-time &amp; new-grad roles
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none mb-4">
              Kirtan{" "}
              <span className="relative">
                Patel
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                  aria-hidden="true"
                />
              </span>
            </h1>
          </motion.div>

          {/* Typing role */}
          <motion.div variants={itemVariants} className="mb-6">
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-300 h-12 flex items-center justify-center">
              <TypingText words={ROLES} />
            </p>
          </motion.div>

          {/* Value prop */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Software Engineer building{" "}
            <span className="text-indigo-300 font-medium">
              backend, cloud, and AI-enabled products
            </span>{" "}
            with Python, FastAPI, React, Next.js, AWS, and LLM APIs.
            Currently interning at{" "}
            <span className="text-emerald-300 font-medium">SE&amp;M Solutions</span>{" "}
            · AWS Certified · Harrisburg University.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-glow hover:shadow-glow-lg transition-all duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              aria-label="View my projects"
            >
              View Projects
              <ArrowRight
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl glass border border-white/10 hover:border-indigo-500/40 text-white font-semibold text-sm hover:bg-indigo-500/5 transition-all duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Download resume PDF"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-slate-300 hover:text-white font-semibold text-sm hover:bg-white/5 transition-all duration-200 border border-transparent hover:border-white/10"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Contact me"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="https://github.com/kirtan0515"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all duration-200"
              aria-label="GitHub profile"
            >
              <Github className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/in/kirtanpatel0515"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all duration-200"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="mailto:kirtan.patel0515@gmail.com"
              className="p-2.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all duration-200"
              aria-label="Send email"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="text-xs font-mono tracking-widest uppercase">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
