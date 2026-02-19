import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";

export default function Home() {
 return (
  <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">
   <Navbar />
   <Hero />
   <About />
   <Services />
   <Experience />
   <Projects />
   <Contact />
   <Footer />
  </main>
 );
}
