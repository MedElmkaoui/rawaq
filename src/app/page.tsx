import Buffieh from "@/components/Buffieh";
import Explore from "@/components/Explore";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import KnowMore from "@/components/KnowMore";
import NavBar from "@/components/NavBar";
import Popular from "@/components/Popular";
import Special from "@/components/Special";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="relative w-[85%] min-h-screen mx-auto">
        <NavBar />
        <Hero />
        <Features />
        <Popular />
        <Special />
        <Explore />
        <Buffieh />
        <Testimonials />
        <KnowMore />
    </div>
  );
}
