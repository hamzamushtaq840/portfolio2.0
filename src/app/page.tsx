import Certifications from "@/components/certifications";
import Details from "@/components/details";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Intro from "@/components/intro";
import Marquee from "@/components/marquee";
import NavBar from "@/components/navbar";
import LatestProjects from "@/components/projects";

export default function Home() {
  return (
    <div className="bg-background2 text-white">
      <NavBar />
      <Hero />
      <Marquee />
      <Intro />
      <Details />
      <Certifications />
      <LatestProjects />
      <Experience />
      <Footer />
    </div>
  );
}
