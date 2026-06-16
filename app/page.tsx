import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contributions from "@/components/Contributions";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Marquee from "@/components/ui/Marquee";

const marqueeItems = [
  "Secure",
  "Gas-optimized",
  "Audited",
  "On-chain",
  "Production-ready",
  "EVM & Starknet",
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Marquee items={marqueeItems} />
      <Projects />
      <Contributions />
      <Skills />
      <Experience />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
