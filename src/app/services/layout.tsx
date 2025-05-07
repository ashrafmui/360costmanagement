import type React from "react"
import type { Metadata } from "next"
import Header from "@/components/Header";
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Services | 360CostManagement",
  description: "Discover our comprehensive financial management services designed to help your business thrive.",
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
