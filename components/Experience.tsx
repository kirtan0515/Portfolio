"use client";

import { motion } from "framer-motion";
import Card3D from "./Card3D";

const experiences = [
  {
    role: "Quantum Technology Intern",
    company: "SE&M Solutions",
    period: "2026 — Present",
    current: true,
    description: "Supporting mobile app development for EMS-powered tech, prototyping QRNG systems, and documenting emerging quantum technology.",
    tech: ["Android", "iOS", "QA Testing", "QRNG", "EMS"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Heir Atlas",
    period: "2024",
    current: false,
    description: "Resolved 50+ production issues in Java/AWS. Reduced incident resolution time 25%. Hardened VPC security and improved payment reliability 20%.",
    tech: ["Java", "AWS EC2", "VPC", "IAM", "Linux", "Stripe"],
  },
  {
    role: "Code Sensei",
    company: "Code Ninjas",
    period: "2023",
    current: false,
    description: "Taught programming to 30+ students through hands-on problem solving and structured lessons.",
    tech: ["JavaScript", "Python", "Teaching"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 md:py-48 z-10"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-24"
        >
          <p className="text-[10px] sm:text-xs font-mono text-white/30 uppercase tracking-[0.3em] mb-6 sm:mb-8">
            [ 004 — Experience ]
          </p>
          <h2 className="heading-xl max-w-3xl text-white/90">
            Where I&apos;ve <span className="text-gradient">worked</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl space-y-4 sm:space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card3D className="p-6 sm:p-8 md:p-10 relative group">
                {exp.current && (
                  <div className="absolute top-5 right-5 sm:top-8 sm:right-8">
                    <span className="status-pill text-[10px] sm:text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
                      Now
                    </span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-3 sm:mb-4">
                  <span className="text-xs font-mono text-white/20">{exp.period}</span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                    {exp.role}
                  </h3>
                  <span className="text-xs sm:text-sm text-white/30 font-mono">{exp.company}</span>
                </div>

                <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 max-w-2xl">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs bg-white/[0.03] border border-white/8 text-white/35"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card3D>
            </motion.div>
          ))}

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card3D className="p-6 sm:p-8 md:p-10">
              <span className="text-xs font-mono text-white/20">2023 — 2027</span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-2 mb-1">
                B.S. Computer & Information Sciences
              </h3>
              <p className="text-xs sm:text-sm text-white/30 font-mono mb-3">
                Harrisburg University · Harrisburg, PA
              </p>
              <p className="text-sm text-white/40">
                Systems design, cloud architecture, and applied software engineering.
              </p>
            </Card3D>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
