"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("kirtan.patel0515@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 md:py-48 z-10"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="text-[10px] sm:text-xs font-mono text-white/30 uppercase tracking-[0.3em] mb-6 sm:mb-8">
            [ 006 — Contact ]
          </p>

          <h2 className="display-text mb-6 sm:mb-8">
            <span className="text-white/90">LET&apos;S</span>
            <br />
            <span className="text-gradient">CONNECT</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-white/35 max-w-sm sm:max-w-md mx-auto mb-10 sm:mb-12 font-light">
            Open to full-time roles, internships, and conversations about cloud, AI, and engineering.
          </p>

          {/* Email */}
          <motion.button
            onClick={copyEmail}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-10 py-4 sm:py-5 rounded-full card-3d hover:border-white/20 transition-all duration-500 mb-6 sm:mb-8"
          >
            <span className="text-base sm:text-xl md:text-2xl font-bold text-white/80 group-hover:text-white transition-colors duration-300 break-all sm:break-normal">
              kirtan.patel0515@gmail.com
            </span>
            {copied ? (
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
            ) : (
              <Copy className="w-4 h-4 sm:w-5 sm:h-5 text-white/30 group-hover:text-white/70 transition-colors shrink-0" />
            )}
          </motion.button>

          <p className="text-[10px] sm:text-xs text-white/20 mb-10 sm:mb-12">Click to copy</p>

          {/* Links */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
            {[
              { label: "LinkedIn", href: "https://linkedin.com/in/kirtanpatel0515" },
              { label: "GitHub", href: "https://github.com/kirtan0515" },
              { label: "Resume", href: "/resume.pdf", download: true },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                {...(link.download ? { download: true } : {})}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/8 text-xs sm:text-sm text-white/30 hover:text-white/70 hover:border-white/20 transition-all duration-500 w-full sm:w-auto justify-center"
              >
                {link.label}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
