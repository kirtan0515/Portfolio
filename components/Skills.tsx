"use client";

import { motion } from "framer-motion";

const allSkills = [
  "Python", "TypeScript", "JavaScript", "Java", "Go", "C++", "SQL",
  "React", "Next.js", "FastAPI", "GraphQL", "REST APIs",
  "AWS EC2", "Lambda", "S3", "RDS", "DynamoDB", "VPC", "IAM",
  "Docker", "Terraform", "GitHub Actions", "CI/CD", "Linux",
  "LLM APIs", "RAG Pipelines", "Embeddings", "LangChain",
  "PostgreSQL", "Kubernetes", "CloudWatch", "AppSync",
];

const row1 = allSkills.slice(0, 16);
const row2 = allSkills.slice(16);

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 md:py-48 z-10 overflow-hidden"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[10px] sm:text-xs font-mono text-white/30 uppercase tracking-[0.3em] mb-6 sm:mb-8">
            [ 002 — Stack ]
          </p>
          <h2 className="heading-xl max-w-3xl text-white/90">
            Technologies I
            <br className="hidden sm:block" />
            <span className="text-gradient"> build with</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div className="space-y-3 sm:space-y-4">
        <div className="relative overflow-hidden">
          <div className="marquee-track">
            {[...row1, ...row1, ...row1].map((skill, i) => (
              <span
                key={`r1-${i}`}
                className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 mx-1.5 sm:mx-2 rounded-full border border-white/8 bg-white/[0.02] text-xs sm:text-sm font-medium text-white/60 whitespace-nowrap hover:border-white/25 hover:text-white hover:bg-white/[0.05] transition-all duration-500"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="marquee-track"
            style={{ animationDirection: "reverse", animationDuration: "55s" }}
          >
            {[...row2, ...row2, ...row2, ...row2].map((skill, i) => (
              <span
                key={`r2-${i}`}
                className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 mx-1.5 sm:mx-2 rounded-full border border-white/8 bg-white/[0.02] text-xs sm:text-sm font-medium text-white/60 whitespace-nowrap hover:border-white/25 hover:text-white hover:bg-white/[0.05] transition-all duration-500"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
