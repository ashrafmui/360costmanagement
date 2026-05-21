import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatisticsSection from "@/components/StatisticsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PhilosophySection from "@/components/PhilosophySection";
import TeamPreview from "@/components/TeamPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <StatisticsSection />
      <ServicesSection />
      <ProcessSection />
      <PhilosophySection />
      <TeamPreview />
      <TestimonialsSection />
      <CtaBand />
      <Footer />
    </main>
  );
}
