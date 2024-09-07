import Features from "@/components/Features";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Popular from "@/components/Popular";
import Special from "@/components/Special";

export default function Home() {
  return (
    <div className="relative w-[85%] min-h-screen mx-auto">
        <NavBar />
        <Hero />
        <Features />
        <Popular />
        <Special />
    </div>
  );
}
