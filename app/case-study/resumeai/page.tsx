import type { Metadata } from "next";
import CaseStudyResumeAI from "@/components/case-studies/CaseStudyResumeAI";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ResumeAI Hub — Case Study | Kirtan Patel",
  description:
    "Deep dive into ResumeAI Hub — an AI-powered resume analysis and generation platform built with FastAPI, LLM APIs, RAG pipelines, and AWS.",
};

export default function ResumeAICaseStudy() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <CaseStudyResumeAI />
      </main>
      <Footer />
    </>
  );
}
