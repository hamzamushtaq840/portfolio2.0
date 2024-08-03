import Certifications from "@/components/certifications";
import Contact from "@/components/contact";
import Details from "@/components/details";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Intro from "@/components/intro";
import Marquee from "@/components/marquee";
import NavBar from "@/components/navbar";
import LatestProjects from "@/components/projects";
import TextReveal from "@/components/textReveal";

export default function Home() {
  return (
    <div className="bg-background2 text-white">
      <NavBar />
      <Hero />
      <Marquee />
      <Intro />
      <Details />
      {/* <TextReveal /> */}
      <Certifications />
      <LatestProjects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
