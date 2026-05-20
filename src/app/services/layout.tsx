import type React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Accounting Services",
    template: "%s | 360 Cost Management",
  },
  description:
    "Comprehensive accounting and cost-management services — bookkeeping, payroll, tax planning, and financial reporting — for NYC businesses.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
