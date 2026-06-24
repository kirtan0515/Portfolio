"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";

const skillGroups = [
  {
    category: "Languages",
    color: "indigo",
    skills: [
      { name: "Python", level: "primary" },
      { name: "JavaScript", level: "primary" },
      { name: "TypeScript", level: "primary" },
      { name: "Java", level: "primary" },
      { name: "C++", level: "primary" },
      { name: "Go", level: "primary" },
      { name: "SQL", level: "primary" },
    ],
  },
  {
    category: "Frontend / Mobile",
    color: "cyan",
    skills: [
      { name: "React.js", level: "primary" },
      { name: "Next.js", level: "primary" },
      { name: "Tailwind CSS", level: "primary" },
      { name: "HTML / CSS", level: "primary" },
      { name: "Mobile Prototyping", level: "primary" },
    ],
  },
  {
    category: "Backend / APIs",
    color: "violet",
    skills: [
      { name: "FastAPI", level: "primary" },
      { name: "REST APIs", level: "primary" },
      { name: "GraphQL", level: "primary" },
      { name: "Scalable API Design", level: "primary" },
    ],
  },
  {
    category: "AWS",
    color: "amber",
    skills: [
      { name: "EC2", level: "primary" },
      { name: "Lambda", level: "primary" },
      { name: "VPC", level: "primary" },
      { name: "S3", level: "primary" },
      { name: "RDS", level: "primary" },
      { name: "ELB", level: "primary" },
      { name: "IAM", level: "primary" },
      { name: "CloudWatch", level: "primary" },
      { name: "Amplify", level: "primary" },
      { name: "AppSync", level: "primary" },
      { name: "DynamoDB", level: "primary" },
    ],
  },
  {
    category: "DevOps / Tools",
    color: "emerald",
    skills: [
      { name: "Docker", level: "primary" },
      { name: "GitHub Actions", level: "primary" },
      { name: "CI/CD", level: "primary" },
      { name: "Linux", level: "primary" },
      { name: "Terraform", level: "primary" },
      { name: "Git", level: "primary" },
      { name: "Agile", level: "primary" },
      { name: "Kubernetes", level: "learning" },
    ],
  },
  {
    category: "Networking",
    color: "rose",
    skills: [
      { name: "TCP/IP", level: "primary" },
      { name: "DNS", level: "primary" },
      { name: "HTTP/S", level: "primary" },
      { name: "Routing", level: "primary" },
      { name: "Load Balancing", level: "primary" },
      { name: "Security Groups", level: "primary" },
    ],
  },
  {
    category: "Databases",
    color: "cyan",
    skills: [
      { name: "PostgreSQL", level: "primary" },
      { name: "MySQL", level: "primary" },
      { name: "DynamoDB", level: "primary" },
    ],
  },
  {
    category: "AI / ML",
    color: "violet",
    skills: [
      { name: "LLM APIs", level: "primary" },
      { name: "RAG Pipelines", level: "primary" },
      { name: "Embeddings", level: "primary" },
      { name: "Prompt Engineering", level: "primary" },
      { name: "Output Evaluation", level: "primary" },
      { name: "FAISS", level: "primary" },
      { name: "Pinecone", level: "primary" },
      { name: "LangChain", level: "learning" },
    ],
  },
];

const colorMap: Record<string, { pill: string; pillLearning: string; label: string; dot: string }> = {
  indigo: {
    pill: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20 hover:bg-indigo-500/20",
    pillLearning: "bg-indigo-500/5 text-indigo-400/70 border-indigo-500/10 border-dashed",
    label: "text-indigo-400",
    dot: "bg-indigo-400",
  },
  cyan: {
    pill: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20 hover:bg-cyan-500/20",
    pillLearning: "bg-cyan-500/5 text-cyan-400/70 border-cyan-500/10 border-dashed",
    label: "text-cyan-400",
    dot: "bg-cyan-400",
  },
  violet: {
    pill: "bg-violet-500/10 text-violet-300 border-violet-500/20 hover:bg-violet-500/20",
    pillLearning: "bg-violet-500/5 text-violet-400/70 border-violet-500/10 border-dashed",
    label: "text-violet-400",
    dot: "bg-violet-400",
  },
  amber: {
    pill: "bg-amber-500/10 text-amber-300 border-amber-500/20 hover:bg-amber-500/20",
    pillLearning: "bg-amber-500/5 text-amber-400/70 border-amber-500/10 border-dashed",
    label: "text-amber-400",
    dot: "bg-amber-400",
  },
  emerald: {
    pill: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/20",
    pillLearning: "bg-emerald-500/5 text-emerald-400/70 border-emerald-500/10 border-dashed",
    label: "text-emerald-400",
    dot: "bg-emerald-400",
  },
  rose: {
    pill: "bg-rose-500/10 text-rose-300 border-rose-500/20 hover:bg-rose-500/20",
    pillLearning: "bg-rose-500/5 text-rose-400/70 border-rose-500/10 border-dashed",
    label: "text-rose-400",
    dot: "bg-rose-400",
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding relative"
      aria-labelledby="skills-heading"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow="Technical Skills"
          title="The stack I"
          titleHighlight="build with"
          description="Technologies I use to design, build, and deploy cloud-native and AI-powered systems. Dashed borders = actively learning."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, groupIndex) => {
            const colors = colorMap[group.color];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: groupIndex * 0.07 }}
                className="glass rounded-2xl p-5 border border-white/5 card-hover"
              >
                {/* Category header */}
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`w-2 h-2 rounded-full ${colors.dot}`}
                    aria-hidden="true"
                  />
                  <h3
                    className={`text-xs font-semibold uppercase tracking-widest font-mono ${colors.label}`}
                  >
                    {group.category}
                  </h3>
                </div>

                {/* Skills pills */}
                <div
                  className="flex flex-wrap gap-2"
                  role="list"
                  aria-label={`${group.category} skills`}
                >
                  {group.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill.name}
                      role="listitem"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: groupIndex * 0.04 + skillIndex * 0.03,
                      }}
                      whileHover={{ scale: 1.05 }}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border cursor-default transition-all duration-200 ${
                        skill.level === "learning"
                          ? colors.pillLearning
                          : colors.pill
                      }`}
                      title={skill.level === "learning" ? "Currently learning" : undefined}
                    >
                      {skill.name}
                      {skill.level === "learning" && (
                        <span className="ml-1 text-[9px] opacity-60">~</span>
                      )}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Legend + currently exploring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 glass rounded-2xl p-5 border border-indigo-500/20"
        >
          <div className="flex items-center gap-4 text-xs text-slate-500 shrink-0">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded border border-indigo-500/20 bg-indigo-500/10 inline-block" />
              Active
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded border border-dashed border-indigo-500/20 bg-indigo-500/5 inline-block" />
              Learning
            </span>
          </div>
          <div className="w-px h-4 bg-white/10 hidden sm:block" aria-hidden="true" />
          <div className="flex items-center gap-2 flex-wrap">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" aria-hidden="true" />
            <span className="text-xs font-mono text-indigo-400 font-semibold">Also exploring:</span>
            {["Rust", "OpenAI Assistants API", "AWS CDK", "LangChain"].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-indigo-500/5 text-indigo-300/70 border border-dashed border-indigo-500/15"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
