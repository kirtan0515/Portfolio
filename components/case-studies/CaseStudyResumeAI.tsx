"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Brain, Github, ExternalLink, Layers, Cpu, Lightbulb, TrendingUp, AlertCircle } from "lucide-react";
import Link from "next/link";

const techChoices = [
  {
    choice: "FastAPI over Flask/Django",
    reason:
      "Async-first design handles concurrent LLM API calls efficiently. Auto-generated OpenAPI docs and Pydantic validation reduce boilerplate and bugs.",
  },
  {
    choice: "RAG over fine-tuning",
    reason:
      "RAG with FAISS/Pinecone gives context-aware, up-to-date responses without the cost and complexity of fine-tuning a model. Easier to update and maintain.",
  },
  {
    choice: "PostgreSQL (RDS) over DynamoDB",
    reason:
      "Resume data has relational structure — users, resumes, job descriptions, analysis results. SQL joins and transactions are a better fit than key-value.",
  },
  {
    choice: "Terraform for IaC",
    reason:
      "Reproducible, version-controlled infrastructure. One command to provision EC2, RDS, S3, IAM roles, and security groups — no manual console clicks.",
  },
  {
    choice: "Docker for containerization",
    reason:
      "Consistent environments from local dev to EC2. Eliminates 'works on my machine' issues and makes CI/CD deployment straightforward.",
  },
];

const challenges = [
  {
    challenge: "LLM response latency under concurrent load",
    solution:
      "Implemented async FastAPI endpoints with background task queuing. Long-running analysis jobs are processed asynchronously and results are polled by the frontend.",
  },
  {
    challenge: "Inconsistent LLM output structure",
    solution:
      "Designed structured prompt templates with explicit JSON output schemas. Added Pydantic validation on the response layer to catch and retry malformed outputs.",
  },
  {
    challenge: "RAG context relevance",
    solution:
      "Tuned chunk size and overlap for resume text. Experimented with embedding models and similarity thresholds to improve retrieval precision for JD matching.",
  },
  {
    challenge: "Infrastructure cost on AWS",
    solution:
      "Used t3.micro EC2 for dev, RDS db.t3.micro, and S3 lifecycle policies. Terraform makes it easy to scale up for production without manual reconfiguration.",
  },
];

const futureImprovements = [
  "User accounts with saved resume profiles and history",
  "Premium resume templates with LaTeX/PDF generation",
  "Overleaf-style in-browser resume editor",
  "Batch processing for multiple JD comparisons",
  "Interview question generation based on resume gaps",
  "Kubernetes deployment for horizontal scaling",
];

export default function CaseStudyResumeAI() {
  return (
    <div className="min-h-screen bg-[#050810] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center" aria-hidden="true">
              <Brain className="w-6 h-6 text-violet-400" />
            </div>
            <div>
              <span className="text-xs font-mono text-violet-400 uppercase tracking-widest">Case Study</span>
              <h1 className="text-3xl md:text-4xl font-black text-white">ResumeAI Hub</h1>
            </div>
          </div>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            A deployed AI-powered resume analysis platform — live at{" "}
            <a href="https://resumeaihub.com" target="_blank" rel="noopener noreferrer" className="text-violet-300 hover:text-violet-200 underline underline-offset-2">
              resumeaihub.com
            </a>
            . Built with FastAPI, OpenAI APIs, RAG pipelines, Docker, and AWS + Vercel deployment.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://resumeaihub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600/20 border border-violet-500/30 hover:bg-violet-600/30 text-sm text-violet-300 hover:text-violet-200 transition-all"
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              Live Site — resumeaihub.com
            </a>
            <a
              href="https://github.com/kirtan0515"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass border border-white/10 hover:border-violet-500/30 text-sm text-slate-300 hover:text-white transition-all"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              View on GitHub
            </a>
          </div>
        </motion.div>

        <div className="space-y-12">

          {/* Overview */}
          <Section title="Overview" icon={Layers} color="violet">
            <p className="text-slate-400 leading-relaxed mb-4">
              Job seekers spend hours manually tailoring resumes for each application — often without knowing what&apos;s missing or why they&apos;re not getting callbacks. ResumeAI Hub automates this process with an intelligent pipeline that analyzes resumes against job descriptions and provides actionable, specific improvements.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I built this to solve a real user problem while demonstrating production-minded backend engineering, cloud deployment, and LLM system design — not just a thin wrapper around an API.
            </p>
          </Section>

          {/* What it does */}
          <Section title="What It Does" icon={Brain} color="violet">
            <ul className="space-y-3">
              {[
                "Resume upload and text extraction with structured parsing",
                "JD-to-resume match analysis with percentage scoring",
                "Tailored professional summary generation",
                "Bullet point rewriting for impact and clarity",
                "Missing skills detection with prioritized recommendations",
                "RAG pipeline with vector embeddings for context-aware output",
                "Concurrent request handling via async FastAPI architecture",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          {/* Architecture */}
          <Section title="Architecture" icon={Cpu} color="violet">
            <div className="glass-light rounded-xl p-5 font-mono text-sm text-slate-300 leading-loose mb-6">
              <p className="text-violet-400 mb-2">Request flow:</p>
              <p>Next.js frontend</p>
              <p className="pl-4 text-slate-500">→ FastAPI (async Python backend)</p>
              <p className="pl-8 text-slate-500">→ LLM API (structured prompt + JSON schema)</p>
              <p className="pl-8 text-slate-500">→ RAG pipeline (FAISS / Pinecone embeddings)</p>
              <p className="pl-8 text-slate-500">→ PostgreSQL (RDS) — user data, analysis results</p>
              <p className="pl-8 text-slate-500">→ S3 — resume file storage</p>
              <p className="pl-4 text-slate-500">→ Response back to frontend</p>
              <p className="mt-3 text-violet-400">Infrastructure:</p>
              <p>EC2 (app server) · RDS (PostgreSQL) · S3 (storage)</p>
              <p>Terraform (IaC) · Docker (containerization)</p>
              <p>GitHub Actions (CI/CD) · CloudWatch (monitoring + alerts)</p>
            </div>
            <p className="text-xs text-slate-500">
              Infrastructure is provisioned with Terraform — reproducible, version-controlled, and deployable with a single command.
            </p>
          </Section>

          {/* Tech choices */}
          <Section title="Tech Choices & Why" icon={Lightbulb} color="violet">
            <div className="space-y-4">
              {techChoices.map((item) => (
                <div key={item.choice} className="glass rounded-xl p-5 border border-violet-500/10">
                  <p className="text-sm font-semibold text-white mb-1">{item.choice}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.reason}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Challenges */}
          <Section title="Challenges & Solutions" icon={AlertCircle} color="violet">
            <div className="space-y-4">
              {challenges.map((item) => (
                <div key={item.challenge} className="glass rounded-xl p-5 border border-white/5">
                  <p className="text-xs font-mono text-violet-400 uppercase tracking-wider mb-1">Challenge</p>
                  <p className="text-sm font-semibold text-white mb-2">{item.challenge}</p>
                  <p className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">Solution</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.solution}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* What I learned */}
          <Section title="What I Learned" icon={TrendingUp} color="violet">
            <ul className="space-y-3">
              {[
                "Designing async Python APIs that handle concurrent LLM calls without blocking",
                "Building RAG pipelines — chunking strategy, embedding model selection, and retrieval tuning matter a lot",
                "Terraform makes infrastructure reproducible and auditable — worth the upfront investment",
                "Structured LLM prompts with explicit output schemas dramatically improve reliability",
                "CloudWatch alarms and structured logging are essential for understanding production behavior",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          {/* Future improvements */}
          <Section title="Roadmap" icon={TrendingUp} color="violet">
            <div className="flex flex-wrap gap-2">
              {futureImprovements.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  icon: Icon,
  color,
  children,
}: {
  title: string;
  icon: React.ElementType;
  color: string;
  children: React.ReactNode;
}) {
  const colorClass = color === "violet" ? "text-violet-400" : "text-cyan-400";
  const bgClass = color === "violet" ? "bg-violet-500/10" : "bg-cyan-500/10";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-8 h-8 rounded-lg ${bgClass} flex items-center justify-center`} aria-hidden="true">
          <Icon className={`w-4 h-4 ${colorClass}`} />
        </div>
        <h2 className="text-lg font-bold text-white">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}
