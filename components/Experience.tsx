"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const experiences = [
  {
    role: "Quantum Technology Intern",
    company: "SE&M Solutions LLC — Quantum Storm Initiative",
    period: "May 2026 – Present",
    location: "On-site / Hybrid",
    type: "work",
    current: true,
    description:
      "Supporting Android and iOS mobile application development for EMS-powered technology solutions, working across front-end prototyping, QA testing, and sandbox validation.",
    highlights: [
      "Support Android and iOS mobile app development for EMS-powered technology solutions through front-end prototyping, QA testing, and sandbox validation",
      "Prototype and present an EMS-powered mobile application concept while benchmarking QRNG and EMS performance",
      "Document technical findings and implementation feasibility for emerging quantum and EMS technology",
    ],
    tech: ["Android", "iOS", "Mobile Prototyping", "QA Testing", "EMS", "QRNG"],
    color: "emerald",
  },
  {
    role: "Full Stack Developer Intern",
    company: "Heir Atlas",
    period: "Jan 2024 – May 2024",
    location: "Remote",
    type: "work",
    current: false,
    description:
      "Supported a Java-based production application on AWS, working across application, database, and Linux environments to resolve issues and improve system reliability.",
    highlights: [
      "Resolved 50+ issues across application, database, and Linux environments in a live AWS-hosted Java application",
      "Reduced incident resolution time by 25% by creating structured runbooks and repeatable debugging workflows",
      "Strengthened system security with VPC security groups and IAM least-privilege policies",
      "Improved Stripe payment reliability by 20% with retry and timeout handling",
    ],
    tech: ["Java", "AWS EC2", "VPC", "IAM", "Linux", "Stripe API", "RDS"],
    color: "indigo",
  },
  {
    role: "Code Sensei (Programming Instructor)",
    company: "Code Ninjas",
    period: "Mar 2023 – Aug 2023",
    location: "Mechanicsburg, PA",
    type: "work",
    current: false,
    description:
      "Taught programming and debugging fundamentals to students of varying skill levels through structured lessons and hands-on problem solving.",
    highlights: [
      "Taught programming and debugging to 30+ students through structured lessons and hands-on problem solving",
      "Communicated technical concepts clearly to non-technical audiences",
    ],
    tech: ["JavaScript", "Python", "Scratch", "Game Development"],
    color: "cyan",
  },
];

const colorMap: Record<string, {
  border: string;
  dot: string;
  badge: string;
  tech: string;
  line: string;
}> = {
  emerald: {
    border: "border-emerald-500/20",
    dot: "bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)]",
    badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    tech: "bg-emerald-500/10 text-emerald-300 border-emerald-500/15",
    line: "bg-emerald-500/20",
  },
  indigo: {
    border: "border-indigo-500/20",
    dot: "bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.6)]",
    badge: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    tech: "bg-indigo-500/10 text-indigo-300 border-indigo-500/15",
    line: "bg-indigo-500/20",
  },
  cyan: {
    border: "border-cyan-500/20",
    dot: "bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.6)]",
    badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    tech: "bg-cyan-500/10 text-cyan-300 border-cyan-500/15",
    line: "bg-cyan-500/20",
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding relative"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've"
          titleHighlight="worked"
          description="Real-world engineering experience across product development, cloud infrastructure, and technical education."
        />

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/30 via-slate-700/30 to-transparent hidden sm:block"
              aria-hidden="true"
            />

            <div className="space-y-8">
              {experiences.map((exp, i) => {
                const colors = colorMap[exp.color];
                return (
                  <motion.div
                    key={`${exp.company}-${exp.role}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    className="relative sm:pl-16"
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-4 top-6 w-4 h-4 rounded-full ${colors.dot} hidden sm:block -translate-x-1/2`}
                      aria-hidden="true"
                    />

                    <article
                      className={`glass rounded-2xl border ${colors.border} p-7 card-hover`}
                    >
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Briefcase
                              className="w-4 h-4 text-slate-500"
                              aria-hidden="true"
                            />
                            <h3 className="text-lg font-bold text-white">
                              {exp.role}
                            </h3>
                            {exp.current && (
                              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/25">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-indigo-300 font-semibold text-sm">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                          <span
                            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono border ${colors.badge}`}
                          >
                            <Calendar className="w-3 h-3" aria-hidden="true" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-slate-500">
                            <MapPin className="w-3 h-3" aria-hidden="true" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-400 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-5" role="list">
                        {exp.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2 text-sm text-slate-400"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0"
                              aria-hidden="true"
                            />
                            {h}
                          </li>
                        ))}
                      </ul>

                      {/* Tech used */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className={`px-2.5 py-1 rounded-md text-xs font-medium border ${colors.tech}`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </article>
                  </motion.div>
                );
              })}

              {/* Education entry in timeline */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative sm:pl-16"
              >
                <div
                  className="absolute left-4 top-6 w-4 h-4 rounded-full bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.6)] hidden sm:block -translate-x-1/2"
                  aria-hidden="true"
                />

                <article className="glass rounded-2xl border border-violet-500/20 p-7 card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <GraduationCap
                          className="w-4 h-4 text-slate-500"
                          aria-hidden="true"
                        />
                        <h3 className="text-lg font-bold text-white">
                          B.S. Computer &amp; Information Sciences
                        </h3>
                      </div>
                      <p className="text-violet-300 font-semibold text-sm">
                        Harrisburg University of Science and Technology
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono border bg-violet-500/10 text-violet-300 border-violet-500/20">
                        <Calendar className="w-3 h-3" aria-hidden="true" />
                        Expected May 2027
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <MapPin className="w-3 h-3" aria-hidden="true" />
                        Harrisburg, PA
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    Focused on systems design, cloud architecture, and applied
                    software engineering. Pursuing coursework that directly
                    supports real-world engineering work in cloud, AI, and
                    backend systems.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "Data Structures",
                      "Algorithms",
                      "Operating Systems",
                      "Computer Networks",
                      "Cloud Computing",
                      "Software Engineering",
                    ].map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-violet-500/10 text-violet-300 border border-violet-500/15"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </article>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
