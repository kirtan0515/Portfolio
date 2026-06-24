"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Brain,
  Cloud,
  Network,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Layers,
  Cpu,
  BookOpen,
} from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const projects = [
  {
    id: "resumeai",
    title: "ResumeAI Hub",
    tagline: "Deployed AI-powered resume analysis platform",
    category: "AI + Cloud",
    status: "Live",
    statusColor: "emerald",
    icon: Brain,
    accentColor: "violet",
    problem:
      "Job seekers spend hours manually tailoring resumes for each application — often without knowing what's missing or why they're not getting callbacks.",
    built:
      "A deployed full-stack AI platform that analyzes resumes against job descriptions, generates tailored summaries, rewrites bullet points, identifies missing skills, and produces match scores — live at resumeaihub.com.",
    whyItMatters:
      "Built to solve a real user problem while demonstrating production-minded backend engineering, cloud deployment, and LLM system design — not just a wrapper around an API.",
    description:
      "Full-stack AI application with FastAPI backend, OpenAI API integration, RAG with vector embeddings, Docker containerization, and AWS + Vercel deployment with Nginx routing and CloudWatch monitoring.",
    techStack: {
      Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      Backend: ["FastAPI", "Python", "OpenAI APIs", "Async request handling"],
      AI: ["RAG Pipeline", "Embeddings", "Vector Search", "Output Evaluation"],
      Cloud: ["AWS EC2", "S3", "RDS (PostgreSQL)", "CloudWatch", "Nginx"],
      DevOps: ["Docker", "GitHub Actions CI/CD", "Terraform"],
    },
    highlights: [
      "Live at resumeaihub.com — deployed on AWS EC2 with Nginx + Vercel frontend",
      "Resume upload and text extraction with structured parsing",
      "JD-to-resume match analysis with percentage scoring",
      "Tailored summary generation and bullet point rewriting via OpenAI APIs",
      "Missing skills detection with prioritized recommendations",
      "RAG pipeline with embeddings and vector search for context-aware output",
      "Output evaluation across prompt structures and retrieval strategies",
      "Concurrent request handling via async FastAPI architecture",
      "Containerized with Docker, deployed via GitHub Actions CI/CD",
      "Terraform-provisioned AWS infrastructure with CloudWatch monitoring",
    ],
    architecture:
      "Next.js (Vercel) → FastAPI (AWS EC2 + Nginx) → OpenAI API + RAG pipeline → PostgreSQL (RDS) + S3 → GitHub Actions CI/CD · Terraform IaC · CloudWatch monitoring",
    caseStudy: "/case-study/resumeai",
    github: "https://github.com/kirtan0515",
    demo: "https://resumeaihub.com",
  },
  {
    id: "connectnest",
    title: "ConnectNest",
    tagline: "Cloud-native campus engagement platform",
    category: "Full-Stack + Cloud",
    status: "Built",
    statusColor: "cyan",
    icon: Cloud,
    accentColor: "cyan",
    problem:
      "Campus communities lack a centralized, real-time platform for students to connect, share events, and engage — most solutions are either too generic or not cloud-native.",
    built:
      "A real-time campus social platform built entirely on the AWS Amplify ecosystem — featuring posts, comments, likes, events, groups, and live updates via GraphQL subscriptions.",
    whyItMatters:
      "Demonstrates deep integration with AWS managed services, real-time data subscriptions, serverless architecture, and a production-ready authentication and authorization system.",
    description:
      "Serverless-first campus platform using AWS AppSync, DynamoDB, Cognito, Lambda, and GraphQL. Real-time subscriptions, role-based auth, and CI/CD pipeline to AWS.",
    techStack: {
      Frontend: ["React", "JavaScript", "Tailwind CSS"],
      Backend: ["AWS AppSync", "GraphQL", "AWS Lambda"],
      Database: ["DynamoDB (single-table design)"],
      Auth: ["AWS Cognito (role-based access)"],
      Infrastructure: ["AWS Amplify", "S3", "CloudWatch", "GitHub Actions"],
    },
    highlights: [
      "Real-time GraphQL subscriptions via AppSync for live feed updates",
      "Cognito authentication with role-based access control",
      "Serverless Lambda functions for business logic and event processing",
      "DynamoDB single-table design for high-throughput social data",
      "Social feed, event posting, group management, and profile system",
      "S3 for media/avatar uploads with pre-signed URLs",
      "IAM access controls and CloudWatch monitoring for observability",
      "CI/CD pipeline via GitHub Actions for automated AWS deployment",
    ],
    architecture:
      "React SPA → AWS Amplify hosting → AppSync GraphQL API → Lambda resolvers → DynamoDB + S3 → Cognito auth · GitHub Actions CI/CD · CloudWatch",
    caseStudy: "/case-study/connectnest",
    github: "https://github.com/kirtan0515",
    demo: null,
  },
  {
    id: "aws-network",
    title: "AWS Two-Tier Network App",
    tagline: "Secure cloud infrastructure deployment on AWS",
    category: "Cloud / Infrastructure",
    status: "Built",
    statusColor: "amber",
    icon: Network,
    accentColor: "amber",
    problem:
      "Understanding cloud networking fundamentals requires building real infrastructure — not just reading documentation.",
    built:
      "A two-tier networked application deployed on AWS demonstrating real-world cloud infrastructure design — VPC architecture, EC2 compute, RDS database, load balancing, and layered security.",
    whyItMatters:
      "Proves hands-on understanding of AWS networking, availability design, and secure cloud architecture — skills directly applicable to solutions architecture and cloud engineering roles.",
    description:
      "Custom VPC with public/private subnets, EC2 app tier, RDS database tier, Application Load Balancer, and multi-AZ deployment. Security hardened with least-privilege IAM and NACLs.",
    techStack: {
      Compute: ["AWS EC2", "Auto Scaling Groups"],
      Networking: ["VPC", "Public/Private Subnets", "Route Tables", "NAT Gateway"],
      Database: ["AWS RDS", "Multi-AZ deployment"],
      Security: ["Security Groups", "NACLs", "IAM least-privilege"],
      "Load Balancing": ["Application Load Balancer", "Health checks"],
    },
    highlights: [
      "Custom VPC with public and private subnet architecture across 2 AZs",
      "EC2 instances in private subnets — no direct internet exposure",
      "NAT Gateway for secure outbound traffic from private subnets",
      "RDS in isolated subnet with no public access",
      "Application Load Balancer for traffic distribution and health checks",
      "Security groups and NACLs for layered network security",
      "Connectivity and failure scenario testing to validate availability",
    ],
    architecture:
      "Internet → ALB (public subnets, 2 AZs) → EC2 app tier (private subnets) → RDS (isolated subnets) · NAT Gateway for outbound · Security Groups + NACLs",
    caseStudy: null,
    github: "https://github.com/kirtan0515",
    demo: null,
  },
  {
    id: "swift-chat",
    title: "Universal Chat App",
    tagline: "Real-time iOS chat with automated translation",
    category: "Mobile + Cloud",
    status: "Built",
    statusColor: "indigo",
    icon: MessageSquare,
    accentColor: "indigo",
    problem:
      "Language barriers prevent real-time global communication — most chat apps don't offer seamless, automated translation.",
    built:
      "A Swift/SwiftUI iOS chat application with real-time messaging and automated translation via AI translation APIs, backed by a Dockerized backend deployed on AWS EC2 within a secure VPC.",
    whyItMatters:
      "Demonstrates cross-platform product thinking, native mobile development, Docker containerization, and the ability to integrate cloud services into native applications.",
    description:
      "Native SwiftUI iOS app with real-time messaging, automated translation, AWS-backed authentication, and a containerized backend deployed on EC2 inside a secure VPC.",
    techStack: {
      Mobile: ["Swift", "SwiftUI", "iOS"],
      Backend: ["AWS Lambda", "API Gateway", "Docker"],
      Storage: ["AWS S3", "DynamoDB"],
      Auth: ["AWS Cognito"],
      Infrastructure: ["AWS EC2", "VPC", "Linux"],
    },
    highlights: [
      "Native SwiftUI interface with real-time message updates",
      "Automated translation via AI translation API for cross-language communication",
      "AWS Cognito for secure user authentication",
      "Dockerized backend deployed on EC2 within a secure VPC",
      "DynamoDB for message persistence",
      "Linux-based debugging and system optimization",
    ],
    architecture:
      "SwiftUI iOS app → API Gateway → Lambda → DynamoDB + Cognito auth · Docker backend on EC2 (VPC) · S3 for media",
    caseStudy: null,
    github: "https://github.com/kirtan0515",
    demo: null,
  },
];

const accentColorMap: Record<string, {
  border: string;
  badge: string;
  tag: string;
  icon: string;
  glow: string;
  button: string;
  dot: string;
}> = {
  violet: {
    border: "border-violet-500/30 hover:border-violet-400/50",
    badge: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    tag: "bg-violet-500/10 text-violet-300",
    icon: "bg-violet-500/10 text-violet-400",
    glow: "hover:shadow-[0_8px_40px_rgba(139,92,246,0.2)]",
    button: "text-violet-300 hover:text-violet-200 hover:bg-violet-500/10",
    dot: "bg-violet-400",
  },
  cyan: {
    border: "border-cyan-500/30 hover:border-cyan-400/50",
    badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    tag: "bg-cyan-500/10 text-cyan-300",
    icon: "bg-cyan-500/10 text-cyan-400",
    glow: "hover:shadow-[0_8px_40px_rgba(6,182,212,0.2)]",
    button: "text-cyan-300 hover:text-cyan-200 hover:bg-cyan-500/10",
    dot: "bg-cyan-400",
  },
  amber: {
    border: "border-amber-500/30 hover:border-amber-400/50",
    badge: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    tag: "bg-amber-500/10 text-amber-300",
    icon: "bg-amber-500/10 text-amber-400",
    glow: "hover:shadow-[0_8px_40px_rgba(245,158,11,0.2)]",
    button: "text-amber-300 hover:text-amber-200 hover:bg-amber-500/10",
    dot: "bg-amber-400",
  },
  indigo: {
    border: "border-indigo-500/30 hover:border-indigo-400/50",
    badge: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    tag: "bg-indigo-500/10 text-indigo-300",
    icon: "bg-indigo-500/10 text-indigo-400",
    glow: "hover:shadow-[0_8px_40px_rgba(99,102,241,0.2)]",
    button: "text-indigo-300 hover:text-indigo-200 hover:bg-indigo-500/10",
    dot: "bg-indigo-400",
  },
};

const statusColorMap: Record<string, string> = {
  emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  amber: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  indigo: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
};

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const colors = accentColorMap[project.accentColor];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`glass rounded-2xl border ${colors.border} ${colors.glow} transition-all duration-300 overflow-hidden`}
    >
      <div className="p-7">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center shrink-0`}
              aria-hidden="true"
            >
              <project.icon className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <span
                  className={`px-2 py-0.5 rounded-md text-xs font-medium border ${statusColorMap[project.statusColor]}`}
                >
                  {project.status}
                </span>
              </div>
              <p className="text-sm text-slate-400">{project.tagline}</p>
            </div>
          </div>
          <span
            className={`hidden sm:inline-flex px-2.5 py-1 rounded-lg text-xs font-mono font-medium ${colors.tag} shrink-0`}
          >
            {project.category}
          </span>
        </div>

        {/* Problem → Built → Why */}
        <div className="space-y-3 mb-5">
          <div className="flex gap-2">
            <span className="text-xs font-mono text-slate-600 uppercase tracking-wider w-16 shrink-0 pt-0.5">
              Problem
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">{project.problem}</p>
          </div>
          <div className="flex gap-2">
            <span className="text-xs font-mono text-slate-600 uppercase tracking-wider w-16 shrink-0 pt-0.5">
              Built
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">{project.built}</p>
          </div>
          <div className="flex gap-2">
            <span className={`text-xs font-mono uppercase tracking-wider w-16 shrink-0 pt-0.5 ${colors.dot === "bg-violet-400" ? "text-violet-500" : colors.dot === "bg-cyan-400" ? "text-cyan-500" : colors.dot === "bg-amber-400" ? "text-amber-500" : "text-indigo-500"}`}>
              Why
            </span>
            <p className="text-xs text-slate-400 leading-relaxed italic">{project.whyItMatters}</p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="mb-4">
          <p className="text-xs text-slate-500 uppercase tracking-wider font-mono mb-2">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {Object.values(project.techStack)
              .flat()
              .slice(0, 9)
              .map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/60 text-slate-300 border border-slate-700/50"
                >
                  {tech}
                </span>
              ))}
            {Object.values(project.techStack).flat().length > 9 && (
              <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/40 text-slate-500 border border-slate-700/30">
                +{Object.values(project.techStack).flat().length - 9} more
              </span>
            )}
          </div>
        </div>

        {/* Expand/collapse */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {/* Key highlights */}
              <div className="mb-5 pt-4 border-t border-white/5">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5" aria-hidden="true" />
                  Key Features &amp; Implementation Details
                </p>
                <ul className="space-y-2" role="list">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-xs text-slate-400"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${colors.dot}`}
                        aria-hidden="true"
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture */}
              <div className="mb-5">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5" aria-hidden="true" />
                  Architecture Flow
                </p>
                <div className="glass-light rounded-lg p-4 font-mono text-xs text-slate-300 leading-relaxed">
                  {project.architecture}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer actions */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex items-center gap-2 flex-wrap">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${colors.button}`}
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-3.5 h-3.5" aria-hidden="true" />
              GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${colors.button}`}
                aria-label={`View live demo of ${project.title}`}
              >
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                Live Demo
              </a>
            )}
            {project.caseStudy && (
              <a
                href={project.caseStudy}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${colors.button}`}
                aria-label={`Read case study for ${project.title}`}
              >
                <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                Case Study
              </a>
            )}
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-500 hover:text-white hover:bg-white/5 transition-all duration-200"
            aria-expanded={expanded}
            aria-label={expanded ? "Show less details" : "Show more details"}
          >
            {expanded ? (
              <>Less <ChevronUp className="w-3.5 h-3.5" aria-hidden="true" /></>
            ) : (
              <>Details <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" /></>
            )}
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding relative"
      aria-labelledby="projects-heading"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Things I've"
          titleHighlight="built"
          description="Cloud-native and AI-powered projects designed with scalability, observability, and maintainability in mind. Each one goes beyond prototype level."
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/kirtan0515"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 hover:border-indigo-500/30 text-sm font-medium text-slate-300 hover:text-white transition-all duration-200"
            aria-label="View all projects on GitHub"
          >
            <Github className="w-4 h-4" aria-hidden="true" />
            View all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
