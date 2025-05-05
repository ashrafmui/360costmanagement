import { Button } from "@/components/ui/button"
//import Link from "next/link"
import ServiceCard from "@/components/ServiceCard"

export default function ServicesSection(){
    return (
        <section className="w-full min-h-screen flex items-center justify-center py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Expertise</h2>
              <p className="mx-auto tracking-tighter sm:2text-xl md:text-2xl">We record business transactions and categorize per GAAP and IFRS standard </p>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Discover the range of services we offer to help your business thrive.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <ServiceCard
              title="Revenue and Expenses Analysis"
              description="Gain clarity and control over your finances. We help you identify trends, optimize cash flow, and uncover opportunities by analyzing your revenue streams and expenses in detail."
              icon="lightbulb"
            />
            <ServiceCard
              title="Cost Control and Budgeting"
              description="Comprehensive digital marketing strategies to increase your online presence and drive customer engagement."
              icon="hand-coins"
            />
            <ServiceCard
              title="Financial Reporting"
              description="Custom website and application development using the latest technologies and best practices."
              icon="code"
            />
            <ServiceCard
              title="Payroll Preparation"
              description="Create a compelling brand identity that resonates with your target audience and sets you apart from competitors."
              icon="palette"
            />
            <ServiceCard
              title="Financial Health Evaluation"
              description="High-quality content that engages your audience and drives conversions across all platforms."
              icon="file-text"
            />
            <ServiceCard
              title="Tax Planning"
              description="Data-driven insights to measure performance and inform strategic decision-making."
              icon="bar-chart"
            />
          </div>
        </div>
      </section>
    )
}