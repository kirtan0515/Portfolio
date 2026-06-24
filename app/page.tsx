import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Scene3D from "@/components/Scene3D";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      {/* Persistent 3D background */}
      <Scene3D />

      <Navbar />
      <main className="relative">
        <Hero />
        {/* Fade out 3D into content */}
        <div className="relative z-10 bg-black">
          <div className="gradient-fade-t h-32 -mt-32 relative z-10" />
          <About />
          <div className="divider mx-6" />
          <Skills />
          <div className="divider mx-6" />
          <Projects />
          <div className="divider mx-6" />
          <Experience />
          <div className="divider mx-6" />
          <Certifications />
          <div className="divider mx-6" />
          <Contact />
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
