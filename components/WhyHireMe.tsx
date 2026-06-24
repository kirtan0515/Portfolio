"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const reasons = [
  {
    headline: "AWS-certified with hands-on cloud project experience",
    detail:
      "Two AWS certifications backed by real deployments — EC2, Lambda, VPC, RDS, DynamoDB, AppSync, CloudWatch, and Terraform across multiple projects.",
  },
  {
    headline: "Builds across frontend, backend, and infrastructure",
    detail:
      "From React UIs to FastAPI backends to Terraform-provisioned AWS infrastructure — I can own a full feature end-to-end without handoffs.",
  },
  {
    headline: "Designed with production-minded engineering patterns",
    detail:
      "CI/CD pipelines, Docker containerization, IAM least-privilege, structured logging, and CloudWatch monitoring are part of how I build — not afterthoughts.",
  },
  {
    headline: "Strong interest in scalable systems and AI products",
    detail:
      "Actively building with LLM APIs, RAG pipelines, and vector databases. I understand both the engineering and the product side of AI applications.",
  },
  {
    headline: "Comfortable learning fast and shipping practical solutions",
    detail:
      "Resolved 50+ production issues at Heir Atlas, taught 30+ students at Code Ninjas, and built multiple cloud-native projects while in school.",
  },
  {
    headline: "U.S. Citizen — no sponsorship required",
    detail:
      "Based in Harrisburg, PA. Open to remote roles, hybrid, and relocation for the right opportunity.",
  },
];

export default function WhyHireMe() {
  return (
    <section
      id="why-hire-me"
      className="section-padding relative"
      aria-labelledby="why-hire-heading"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/5 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow="Why Hire Me"
          title="What I bring"
          titleHighlight="to the table"
          description="A few concrete reasons recruiters and hiring managers reach out."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={r.headline}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-xl border border-white/5 hover:border-emerald-500/20 p-6 transition-all duration-300 card-hover"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-semibold text-white mb-2 leading-snug">
                    {r.headline}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {r.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
