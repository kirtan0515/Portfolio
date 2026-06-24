"use client";

import { motion } from "framer-motion";
import Card3D from "./Card3D";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 md:py-48 z-10"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-24"
        >
          <p className="text-[10px] sm:text-xs font-mono text-white/30 uppercase tracking-[0.3em] mb-6 sm:mb-8">
            [ 001 — About ]
          </p>
          <h2 className="heading-xl max-w-4xl text-white/90">
            I design & deploy{" "}
            <span className="text-gradient">production-grade</span>{" "}
            cloud systems and AI products.
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
          {[
            { value: "2", label: "AWS Certs" },
            { value: "4+", label: "Shipped Projects" },
            { value: "3+", label: "Internships" },
            { value: "2027", label: "Graduation" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card3D className="p-6 sm:p-8 text-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white block mb-2">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs text-white/30 font-mono uppercase tracking-wider">
                  {stat.label}
                </span>
              </Card3D>
            </motion.div>
          ))}
        </div>

        {/* Info cards */}
        <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card3D className="p-6 sm:p-8 md:p-10 h-full">
              <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed">
                Software Engineer and CS student at{" "}
                <span className="text-white font-semibold">Harrisburg University</span>{" "}
                (May 2027). I build with Python, FastAPI, React, Next.js, AWS, Docker,
                and LLM APIs.
              </p>
              <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap gap-3 text-xs sm:text-sm text-white/40">
                <span>📍 Harrisburg, PA</span>
                <span>🇺🇸 U.S. Citizen</span>
              </div>
            </Card3D>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card3D className="p-6 sm:p-8 md:p-10 h-full">
              <p className="text-[10px] sm:text-xs font-mono text-white/30 uppercase tracking-wider mb-4">
                Currently
              </p>
              <p className="text-lg sm:text-xl font-bold text-white mb-2">
                Interning @ SE&M Solutions
              </p>
              <p className="text-sm text-white/40 mb-6">
                Quantum Storm Initiative — Mobile & EMS tech
              </p>
              <div className="space-y-2">
                {["Cloud Architecture", "Backend Systems", "AI / LLMs", "Full-Stack"].map((a) => (
                  <div key={a} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                    <span className="text-sm text-white/60">{a}</span>
                  </div>
                ))}
              </div>
            </Card3D>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
