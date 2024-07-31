import Hero from "@/components/hero";
import Intro from "@/components/intro";
import Marquee from "@/components/marquee";
import NavBar from "@/components/navbar";

export default function Home() {
  return (
    <div className="bg-background2 text-white">
      <NavBar />
      <Hero />
      <Marquee />
      <Intro />
    </div>
  );
}
