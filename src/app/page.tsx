import Image from "next/image";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { Familjen_Grotesk } from "next/font/google";
import StatisticsSection from "@/components/StatisticsSection";
import PhilosophySection from "@/components/PhilosophySection";

const familjenGrotesk = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    
    <main className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <StatisticsSection />
      <PhilosophySection />
    </main>
  );
}
