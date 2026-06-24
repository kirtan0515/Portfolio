"use client";

import { motion } from "framer-motion";
import { Hammer } from "lucide-react";

const items = [
  {
    project: "ResumeAI Hub",
    description:
      "Expanding into a full AI-powered resume platform — adding user accounts, saved profiles, premium templates, and LaTeX-style resume generation.",
    tags: ["FastAPI", "LLM APIs", "RAG", "AWS", "Docker"],
    color: "violet",
  },
  {
    project: "ConnectNest",
    description:
      "Improving real-time event subscriptions, group management, and campus social feed performance with DynamoDB optimization and AppSync tuning.",
    tags: ["AppSync", "DynamoDB", "GraphQL", "Lambda"],
    color: "cyan",
  },
  {
    project: "Exploring",
    description:
      "Deepening hands-on work with RAG pipelines, Kubernetes container orchestration, and AWS CDK for infrastructure-as-code.",
    tags: ["Kubernetes", "AWS CDK", "LangChain", "Pinecone"],
    color: "indigo",
  },
];

const colorMap: Record<string, { border: string; tag: string; dot: string; label: string }> = {
  violet: {
    border: "border-violet-500/20 hover:border-violet-400/40",
    tag: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    dot: "bg-violet-400",
    label: "text-violet-400",
  },
  cyan: {
    border: "border-cyan-500/20 hover:border-cyan-400/40",
    tag: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    dot: "bg-cyan-400",
    label: "text-cyan-400",
  },
  indigo: {
    border: "border-indigo-500/20 hover:border-indigo-400/40",
    tag: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    dot: "bg-indigo-400",
    label: "text-indigo-400",
  },
};

export default function CurrentlyBuilding() {
  return (
    <section
      aria-label="Currently building"
      className="relative py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
              aria-hidden="true"
            />
            <Hammer className="w-4 h-4 text-emerald-400" aria-hidden="true" />
            <span className="text-sm font-semibold text-white">
              Currently Building
            </span>
          </div>
          <div className="flex-1 h-px bg-white/5" aria-hidden="true" />
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          {items.map((item, i) => {
            const colors = colorMap[item.color];
            return (
              <motion.div
                key={item.project}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`glass rounded-xl border ${colors.border} p-5 transition-all duration-200`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${colors.dot} animate-pulse`}
                    aria-hidden="true"
                  />
                  <span className={`text-xs font-mono font-semibold uppercase tracking-wider ${colors.label}`}>
                    {item.project}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-0.5 rounded text-[10px] font-medium border ${colors.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
