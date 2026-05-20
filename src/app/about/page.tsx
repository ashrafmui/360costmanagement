import type { Metadata } from "next";
import Header from "@/components/Header";
import Team2 from "@/components/Team2";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the 360 Cost Management team — Sakiya Ashraf, Jahangir Alam, Shahed Chayan, and Jewel Ashraf — New York accounting, cost-management, and tax-planning experts with 20+ years of combined experience.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Team2 />
      <Footer />
    </main>
  );
}
