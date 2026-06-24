import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RecruiterSnapshot from "@/components/RecruiterSnapshot";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import ArchitectureMindset from "@/components/ArchitectureMindset";
import WhyHireMe from "@/components/WhyHireMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main id="main-content">
        <Hero />
        <RecruiterSnapshot />
        <About />
        <Skills />
        <Projects />
        <CurrentlyBuilding />
        <Certifications />
        <Experience />
        <ArchitectureMindset />
        <WhyHireMe />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
