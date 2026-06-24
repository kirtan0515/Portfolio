import type { Metadata } from "next";
import CaseStudyConnectNest from "@/components/case-studies/CaseStudyConnectNest";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ConnectNest — Case Study | Kirtan Patel",
  description:
    "Deep dive into ConnectNest — a cloud-native campus engagement platform built with React, AWS Amplify, AppSync, DynamoDB, and Cognito.",
};

export default function ConnectNestCaseStudy() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <CaseStudyConnectNest />
      </main>
      <Footer />
    </>
  );
}
