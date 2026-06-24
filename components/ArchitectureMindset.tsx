"use client";

import { motion } from "framer-motion";
import {
  Layers,
  GitBranch,
  Shield,
  Gauge,
  Eye,
  Repeat2,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const principles = [
  {
    icon: Layers,
    title: "Systems Thinking",
    description:
      "I design end-to-end before writing a single line of code. Every component has a purpose, a boundary, and a failure mode.",
    color: "indigo",
  },
  {
    icon: Gauge,
    title: "Scalability by Default",
    description:
      "I build for growth from day one — stateless services, async processing, and cloud-native patterns that scale without rewrites.",
    color: "cyan",
  },
  {
    icon: Shield,
    title: "Security-First",
    description:
      "Least-privilege IAM, private subnets, secrets management, and input validation aren't afterthoughts — they're part of the design.",
    color: "violet",
  },
  {
    icon: Eye,
    title: "Observability",
    description:
      "Production systems need visibility. I instrument with CloudWatch, structured logging, and alerting so issues surface before users notice.",
    color: "emerald",
  },
  {
    icon: GitBranch,
    title: "CI/CD & IaC",
    description:
      "Infrastructure as code with Terraform, automated pipelines with GitHub Actions. Deployments are repeatable, auditable, and fast.",
    color: "amber",
  },
  {
    icon: Repeat2,
    title: "Iterative Delivery",
    description:
      "Ship working software early, gather feedback, and improve. I value working systems over perfect architecture documents.",
    color: "rose",
  },
];

const colorMap: Record<string, { icon: string; border: string; glow: string }> = {
  indigo: {
    icon: "bg-indigo-500/10 text-indigo-400",
    border: "border-indigo-500/15",
    glow: "hover:border-indigo-500/30",
  },
  cyan: {
    icon: "bg-cyan-500/10 text-cyan-400",
    border: "border-cyan-500/15",
    glow: "hover:border-cyan-500/30",
  },
  violet: {
    icon: "bg-violet-500/10 text-violet-400",
    border: "border-violet-500/15",
    glow: "hover:border-violet-500/30",
  },
  emerald: {
    icon: "bg-emerald-500/10 text-emerald-400",
    border: "border-emerald-500/15",
    glow: "hover:border-emerald-500/30",
  },
  amber: {
    icon: "bg-amber-500/10 text-amber-400",
    border: "border-amber-500/15",
    glow: "hover:border-amber-500/30",
  },
  rose: {
    icon: "bg-rose-500/10 text-rose-400",
    border: "border-rose-500/15",
    glow: "hover:border-rose-500/30",
  },
};

const buildFlow = [
  { step: "01", label: "Requirements", sub: "Define scope, users, constraints" },
  { step: "02", label: "Architecture", sub: "Design system components & data flow" },
  { step: "03", label: "Infrastructure", sub: "Provision cloud resources with IaC" },
  { step: "04", label: "Build", sub: "Implement backend, frontend, integrations" },
  { step: "05", label: "Deploy", sub: "CI/CD pipeline to production" },
  { step: "06", label: "Monitor", sub: "Observability, alerts, iterate" },
];

export default function ArchitectureMindset() {
  return (
    <section
      id="architecture"
      className="section-padding relative"
      aria-labelledby="architecture-heading"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow="How I Build"
          title="Engineering"
          titleHighlight="principles"
          description="I don't just write code — I design systems. Here's how I think about building software that lasts."
        />

        {/* Principles grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {principles.map((p, i) => {
            const colors = colorMap[p.color];
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`glass rounded-xl border ${colors.border} ${colors.glow} p-6 card-hover transition-all duration-300`}
              >
                <div
                  className={`w-10 h-10 rounded-lg ${colors.icon} flex items-center justify-center mb-4`}
                  aria-hidden="true"
                >
                  <p.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Build flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="glass rounded-2xl border border-white/5 p-8"
        >
          <h3 className="text-center text-sm font-mono text-slate-500 uppercase tracking-widest mb-8">
            My Build Process
          </h3>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 overflow-x-auto">
            {buildFlow.map((step, i) => (
              <div key={step.step} className="flex items-center gap-3 sm:gap-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center min-w-[80px]"
                >
                  <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-2">
                    <span className="text-xs font-mono font-bold text-indigo-400">
                      {step.step}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-white mb-0.5">
                    {step.label}
                  </p>
                  <p className="text-[10px] text-slate-500 leading-tight max-w-[80px]">
                    {step.sub}
                  </p>
                </motion.div>

                {i < buildFlow.length - 1 && (
                  <ArrowRight
                    className="w-4 h-4 text-slate-700 shrink-0 hidden sm:block"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why hire me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 grid sm:grid-cols-3 gap-4"
        >
          {[
            {
              label: "I ship real things",
              desc: "Not just tutorials or toy projects — production-style systems with real architecture.",
            },
            {
              label: "I think in systems",
              desc: "Every feature I build considers scalability, failure modes, and maintainability.",
            },
            {
              label: "I keep learning",
              desc: "Two AWS certs, active projects, and always exploring what's next in cloud and AI.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="glass rounded-xl border border-white/5 p-5 text-center"
            >
              <p className="font-semibold text-white text-sm mb-2">
                {item.label}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
