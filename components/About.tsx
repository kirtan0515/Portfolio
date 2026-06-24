"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  Zap,
  Target,
  Code2,
  Cloud,
} from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const highlights = [
  {
    icon: Cloud,
    label: "Cloud-Native Focus",
    description:
      "Designing and deploying production-grade systems on AWS with a focus on scalability and reliability.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    icon: Code2,
    label: "Full-Stack Builder",
    description:
      "End-to-end product development from React frontends to FastAPI backends and cloud infrastructure.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
  },
  {
    icon: Zap,
    label: "AI Systems",
    description:
      "Building LLM-powered applications with RAG pipelines, embeddings, and intelligent automation.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    icon: Target,
    label: "Production Mindset",
    description:
      "I build real systems — not just demos. CI/CD, monitoring, IaC, and architecture are part of every project.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
];

const stats = [
  { value: "2", label: "AWS Certifications" },
  { value: "3+", label: "Internships" },
  { value: "4+", label: "Shipped Projects" },
  { value: "2027", label: "Graduation" },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding relative"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About Me"
          title="Building systems that"
          titleHighlight="actually ship"
          description="I'm not just studying computer science — I'm building the kind of software that belongs in production."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Terminal-style intro card */}
            <div className="glass rounded-xl p-6 border border-white/5 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/70" aria-hidden="true" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" aria-hidden="true" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" aria-hidden="true" />
                <span className="ml-2 text-slate-500 text-xs">about.json</span>
              </div>
              <div className="space-y-1 text-slate-300">
                <p>
                  <span className="text-indigo-400">{"{"}</span>
                </p>
                <p className="pl-4">
                  <span className="text-cyan-400">&quot;name&quot;</span>
                  <span className="text-slate-500">: </span>
                  <span className="text-emerald-300">&quot;Kirtankumar Patel&quot;</span>
                  <span className="text-slate-500">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-cyan-400">&quot;location&quot;</span>
                  <span className="text-slate-500">: </span>
                  <span className="text-emerald-300">&quot;Harrisburg, PA&quot;</span>
                  <span className="text-slate-500">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-cyan-400">&quot;phone&quot;</span>
                  <span className="text-slate-500">: </span>
                  <span className="text-emerald-300">&quot;+1 (717) 341-4085&quot;</span>
                  <span className="text-slate-500">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-cyan-400">&quot;university&quot;</span>
                  <span className="text-slate-500">: </span>
                  <span className="text-emerald-300">&quot;Harrisburg University&quot;</span>
                  <span className="text-slate-500">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-cyan-400">&quot;degree&quot;</span>
                  <span className="text-slate-500">: </span>
                  <span className="text-emerald-300">&quot;B.S. Computer &amp; Information Sciences&quot;</span>
                  <span className="text-slate-500">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-cyan-400">&quot;graduation&quot;</span>
                  <span className="text-slate-500">: </span>
                  <span className="text-emerald-300">&quot;May 2027&quot;</span>
                  <span className="text-slate-500">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-cyan-400">&quot;focus&quot;</span>
                  <span className="text-slate-500">: </span>
                  <span className="text-violet-300">[&quot;Cloud&quot;, &quot;AI&quot;, &quot;Backend&quot;, &quot;Full-Stack&quot;]</span>
                  <span className="text-slate-500">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-cyan-400">&quot;citizenship&quot;</span>
                  <span className="text-slate-500">: </span>
                  <span className="text-emerald-300">&quot;U.S. Citizen&quot;</span>
                  <span className="text-slate-500">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-cyan-400">&quot;status&quot;</span>
                  <span className="text-slate-500">: </span>
                  <span className="text-emerald-300">&quot;Interning @ SE&amp;M Solutions&quot;</span>
                </p>
                <p>
                  <span className="text-indigo-400">{"}"}</span>
                </p>
              </div>
            </div>

            {/* Bio text */}
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I&apos;m a Software Engineer and Computer and Information Sciences student at{" "}
                <span className="text-white font-medium">Harrisburg University</span>
                , graduating May 2027. I focus on building backend, cloud, and AI-enabled products using Python, FastAPI, React, Next.js, AWS, Docker, and LLM APIs.
              </p>
              <p>
                I have experience shipping full-stack applications, scalable APIs, AI workflows, and cloud deployments — including a{" "}
                <span className="text-violet-300 font-medium">live deployed AI product</span>{" "}
                and internship experience across cloud infrastructure, mobile development, and production systems.
              </p>
              <p>
                I hold two{" "}
                <span className="text-amber-300 font-medium">AWS certifications</span>{" "}
                and bring strong ownership in fast-moving technical environments — whether that&apos;s resolving production issues, designing cloud architecture, or building AI pipelines from scratch.
              </p>
            </div>

            {/* Location + education badges */}
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 px-3 py-2 rounded-lg glass border border-white/5 text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-indigo-400" aria-hidden="true" />
                Harrisburg, PA
              </span>
              <span className="flex items-center gap-2 px-3 py-2 rounded-lg glass border border-white/5 text-sm text-slate-300">
                <GraduationCap className="w-4 h-4 text-violet-400" aria-hidden="true" />
                Harrisburg University · May 2027
              </span>
              <span className="flex items-center gap-2 px-3 py-2 rounded-lg glass border border-white/5 text-sm text-slate-300">
                🇺🇸 U.S. Citizen
              </span>
            </div>
          </motion.div>

          {/* Right: Highlights grid */}
          <div className="space-y-6">
            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-4 gap-3"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-4 text-center border border-white/5"
                >
                  <div className="text-2xl font-black gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 mt-1 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Highlight cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`glass rounded-xl p-5 border ${item.border} card-hover`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center mb-3`}
                    aria-hidden="true"
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-1">
                    {item.label}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
