import { IntroProvider } from "@/components/Intro";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Projects from "@/components/Projects";
import Contributions from "@/components/Contributions";
import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <IntroProvider>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Projects />
        <Contributions />
        <Background />
        <Contact />
      </main>
      <Footer />
    </IntroProvider>
  );
}
