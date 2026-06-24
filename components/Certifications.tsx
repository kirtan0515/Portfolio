"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, CheckCircle2, Shield } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    subtitle: "Associate",
    issuer: "Amazon Web Services",
    year: "2024",
    credentialId: "AWS-SAA-C03",
    description:
      "Validates expertise in designing distributed systems on AWS — covering compute, storage, networking, security, and cost optimization for production workloads.",
    skills: ["VPC", "EC2", "S3", "RDS", "IAM", "CloudFormation", "Route 53", "ELB"],
    color: "amber",
    icon: Shield,
    badge: "SAA-C03",
    verifyUrl: "https://www.credly.com/badges/6c2276d4-4d7a-4b40-b46d-e665c409db8d/public_url",
  },
  {
    title: "AWS Certified Developer",
    subtitle: "Associate",
    issuer: "Amazon Web Services",
    year: "2024",
    credentialId: "AWS-DVA-C02",
    description:
      "Demonstrates proficiency in developing, deploying, and debugging cloud-based applications using AWS services including Lambda, DynamoDB, API Gateway, and CI/CD pipelines.",
    skills: ["Lambda", "DynamoDB", "API Gateway", "CodePipeline", "CloudWatch", "Cognito", "SQS", "SNS"],
    color: "cyan",
    icon: Award,
    badge: "DVA-C02",
    verifyUrl: "https://www.credly.com/badges/a3f8bbe2-e0fd-4d14-9e50-4a2421e96d05/public_url",
  },
];

const colorMap: Record<string, {
  border: string;
  glow: string;
  badge: string;
  skill: string;
  icon: string;
  accent: string;
}> = {
  amber: {
    border: "border-amber-500/30",
    glow: "shadow-[0_0_40px_rgba(245,158,11,0.15)]",
    badge: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    skill: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    icon: "text-amber-400 bg-amber-500/10",
    accent: "from-amber-500/20 to-transparent",
  },
  cyan: {
    border: "border-cyan-500/30",
    glow: "shadow-[0_0_40px_rgba(6,182,212,0.15)]",
    badge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    skill: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    icon: "text-cyan-400 bg-cyan-500/10",
    accent: "from-cyan-500/20 to-transparent",
  },
};

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section-padding relative"
      aria-labelledby="certifications-heading"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/5 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow="Certifications"
          title="AWS Certified"
          titleHighlight="Engineer"
          description="Industry-recognized credentials validating real-world cloud architecture and development expertise."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, i) => {
            const colors = colorMap[cert.color];
            return (
              <motion.div
                key={cert.credentialId}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -4 }}
                className={`relative glass rounded-2xl border ${colors.border} ${colors.glow} overflow-hidden transition-all duration-300`}
              >
                {/* Top accent gradient */}
                <div
                  className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${colors.accent}`}
                  aria-hidden="true"
                />

                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-xl ${colors.icon} flex items-center justify-center`}
                        aria-hidden="true"
                      >
                        <cert.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <div
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-semibold border ${colors.badge} mb-2`}
                        >
                          <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
                          {cert.badge}
                        </div>
                        <p className="text-xs text-slate-500 font-medium">
                          {cert.issuer} · {cert.year}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-medium mb-4">
                    {cert.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  {/* Skills covered */}
                  <div className="mb-6">
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-mono mb-3">
                      Key Services
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-2.5 py-1 rounded-md text-xs font-medium border ${colors.skill}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Verify link */}
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-white transition-colors"
                    aria-label={`Verify ${cert.title} certification`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    Verify Credential
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Credibility note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-slate-600 mt-8 font-mono"
        >
          Both certifications earned while actively building production-style AWS projects
        </motion.p>
      </div>
    </section>
  );
}
