import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Office from "@/components/Office";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <PracticeAreas />
      <Experience />
      <Education />
      <Office />
      <Contact />
      <Footer />
    </main>
  );
}