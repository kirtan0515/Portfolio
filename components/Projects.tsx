"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Card3D from "./Card3D";

const projects = [
  {
    id: "resumeai",
    number: "01",
    title: "ResumeAI Hub",
    tagline: "AI-powered resume analysis platform",
    description:
      "Full-stack AI app that analyzes resumes against job descriptions with match scoring, bullet rewriting, and skill gap detection. Deployed live on AWS.",
    tech: ["FastAPI", "Next.js", "OpenAI", "RAG", "AWS EC2", "Docker", "Terraform"],
    link: "https://resumeaihub.com",
    github: "https://github.com/kirtan0515",
    caseStudy: "/case-study/resumeai",
  },
  {
    id: "connectnest",
    number: "02",
    title: "ConnectNest",
    tagline: "Cloud-native campus engagement",
    description:
      "Real-time social platform on AWS Amplify with GraphQL subscriptions, DynamoDB, and Cognito auth.",
    tech: ["React", "AppSync", "GraphQL", "DynamoDB", "Lambda", "Cognito"],
    link: null,
    github: "https://github.com/kirtan0515",
    caseStudy: "/case-study/connectnest",
  },
  {
    id: "aws-network",
    number: "03",
    title: "AWS Two-Tier Network",
    tagline: "Production cloud infrastructure",
    description:
      "Multi-AZ VPC with ALB, auto-scaling EC2 in private subnets, RDS in isolated subnets, and layered security.",
    tech: ["VPC", "EC2", "RDS", "ALB", "NAT Gateway", "Terraform"],
    link: null,
    github: "https://github.com/kirtan0515",
    caseStudy: null,
  },
  {
    id: "swift-chat",
    number: "04",
    title: "Universal Chat",
    tagline: "iOS chat with AI translation",
    description:
      "Native SwiftUI chat with real-time messaging, AI translation, Dockerized backend on EC2.",
    tech: ["Swift", "SwiftUI", "Lambda", "Docker", "DynamoDB"],
    link: null,
    github: "https://github.com/kirtan0515",
    caseStudy: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 md:py-48 z-10"
      aria-labelledby="projects-heading"
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
            [ 003 — Work ]
          </p>
          <h2 className="heading-xl max-w-3xl text-white/90">
            Selected <span className="text-gradient">projects</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="space-y-4 sm:space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card3D className="p-6 sm:p-8 md:p-12 group">
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                  {/* Content */}
                  <div className="lg:col-span-8">
                    <div className="flex items-baseline gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <span className="text-xs font-mono text-white/20">{project.number}</span>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white group-hover:text-white/90 transition-colors duration-500">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-white/30 text-xs sm:text-sm font-mono mb-3 sm:mb-4 ml-7 sm:ml-10">
                      {project.tagline}
                    </p>
                    <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 ml-7 sm:ml-10 max-w-xl">
                      {project.description}
                    </p>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 ml-7 sm:ml-10">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium bg-white/[0.03] border border-white/8 text-white/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="lg:col-span-4 flex flex-row lg:flex-col flex-wrap items-start lg:items-end gap-2 sm:gap-3 ml-7 sm:ml-10 lg:ml-0">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-black text-xs sm:text-sm font-bold hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500"
                      >
                        Live
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.caseStudy && (
                      <a
                        href={project.caseStudy}
                        className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/15 text-xs sm:text-sm font-medium text-white/60 hover:border-white/40 hover:text-white transition-all duration-500"
                      >
                        Case Study
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/8 text-xs sm:text-sm text-white/30 hover:text-white/70 hover:border-white/20 transition-all duration-500"
                    >
                      GitHub
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
