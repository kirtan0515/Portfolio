"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Card3D from "./Card3D";

const certs = [
  {
    title: "Solutions Architect",
    code: "SAA-C03",
    year: "2024",
    url: "https://www.credly.com/badges/6c2276d4-4d7a-4b40-b46d-e665c409db8d/public_url",
    description: "Designing distributed systems on AWS — compute, storage, networking, security, cost optimization.",
  },
  {
    title: "Developer Associate",
    code: "DVA-C02",
    year: "2024",
    url: "https://www.credly.com/badges/a3f8bbe2-e0fd-4d14-9e50-4a2421e96d05/public_url",
    description: "Developing, deploying, and debugging cloud applications with Lambda, DynamoDB, API Gateway, CI/CD.",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative py-24 sm:py-32 md:py-48 z-10"
      aria-labelledby="certifications-heading"
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
            [ 005 — Certifications ]
          </p>
          <h2 className="heading-xl max-w-3xl text-white/90">
            AWS <span className="text-gradient">Certified</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <a href={cert.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                <Card3D className="p-6 sm:p-8 md:p-10 h-full group">
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] sm:text-xs font-mono font-bold">
                      {cert.code}
                    </span>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/20 group-hover:text-white/60 transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-white/90 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/30 font-mono mb-3 sm:mb-4">
                    Amazon Web Services · {cert.year}
                  </p>
                  <p className="text-xs sm:text-sm text-white/40 leading-relaxed">
                    {cert.description}
                  </p>
                </Card3D>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
