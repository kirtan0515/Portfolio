"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[200vh]" aria-label="Hero">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center z-10 pointer-events-none">
        <div className="text-center pointer-events-auto px-4 sm:px-6">
          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 sm:mb-10"
          >
            <span className="status-pill">
              <span className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
              Available for full-time roles
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="display-text mb-4 sm:mb-6"
          >
            <span className="block text-white">KIRTAN</span>
            <span className="block text-gradient">PATEL</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base md:text-lg text-white/40 font-light tracking-widest uppercase mb-10 sm:mb-12 max-w-md mx-auto"
          >
            Cloud Engineer · AI Builder · AWS Certified
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-white text-black font-bold text-sm hover:bg-white/90 hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] transition-all duration-500 w-full sm:w-auto text-center"
            >
              Explore Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full border border-white/20 text-white/80 font-medium text-sm hover:border-white/50 hover:text-white transition-all duration-500 w-full sm:w-auto text-center"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">
              Scroll
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
