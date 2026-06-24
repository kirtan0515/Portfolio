"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Award,
  GraduationCap,
  MapPin,
  Layers,
  Flag,
  Briefcase,
} from "lucide-react";

const snapItems = [
  {
    icon: Shield,
    label: "AWS Certified Solutions Architect",
    sub: "Associate · Verified on Credly",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    href: "https://www.credly.com/badges/6c2276d4-4d7a-4b40-b46d-e665c409db8d/public_url",
  },
  {
    icon: Award,
    label: "AWS Certified Developer",
    sub: "Associate · Verified on Credly",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    href: "https://www.credly.com/badges/a3f8bbe2-e0fd-4d14-9e50-4a2421e96d05/public_url",
  },
  {
    icon: GraduationCap,
    label: "Harrisburg University",
    sub: "B.S. Computer & Information Sciences · May 2027",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    href: null,
  },
  {
    icon: Briefcase,
    label: "Currently Interning",
    sub: "SE&M Solutions · Quantum Storm Initiative",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    href: null,
  },
  {
    icon: Layers,
    label: "Focus Areas",
    sub: "Cloud · AI · Backend · Full-Stack",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    href: null,
  },
  {
    icon: Flag,
    label: "U.S. Citizen",
    sub: "Harrisburg, PA · Open to remote & relocation",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    href: null,
  },
];

export default function RecruiterSnapshot() {
  return (
    <section
      aria-label="Recruiter quick summary"
      className="relative py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl border border-indigo-500/20 p-6 relative overflow-hidden"
        >
          {/* Top label */}
          <div className="flex items-center gap-2 mb-5">
            <MapPin className="w-3.5 h-3.5 text-indigo-400" aria-hidden="true" />
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest font-semibold">
              Recruiter Snapshot
            </span>
            <span className="ml-auto text-xs text-slate-600 font-mono">
              5-second summary
            </span>
          </div>

          {/* Grid of items */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {snapItems.map((item, i) => {
              const inner = (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className={`flex flex-col gap-2 p-3 rounded-xl border ${item.border} ${item.bg} h-full ${item.href ? "hover:brightness-110 transition-all duration-200 cursor-pointer" : ""}`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg bg-black/20 flex items-center justify-center shrink-0`}
                    aria-hidden="true"
                  >
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white leading-tight">
                      {item.label}
                    </p>
                    <p className="text-[10px] text-slate-400 leading-tight mt-0.5">
                      {item.sub}
                    </p>
                  </div>
                </motion.div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.label} — ${item.sub}`}
                >
                  {inner}
                </a>
              ) : (
                <div key={item.label}>{inner}</div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
