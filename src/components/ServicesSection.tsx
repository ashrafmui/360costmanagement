// import { Button } from "@/components/ui/button"
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
              description="Clear insights into your revenue and expenses to help you make smarter, more profitable decisions."
              icon="lightbulb"
            />
            <ServiceCard
              title="Cost Control and Budgeting"
              description="Smart budgeting and cost control strategies to boost efficiency and maximize your bottom line."
              icon="hand-coins"
            />
            <ServiceCard
              title="Financial Reporting"
              description="Accurate, easy-to-understand financial reports to keep you informed and in control."
              icon="code"
            />
            <ServiceCard
              title="Payroll Preparation"
              description="Accurate, timely payroll processing to keep your team paid and your business compliant—stress-free and efficient."
              icon="palette"
            />
            <ServiceCard
              title="Financial Health Evaluation"
              description="Assess and improve your financial health with expert guidance and tailored insights."
              icon="file-text"
            />
            <ServiceCard
              title="Tax Planning"
              description="Proactive tax planning to minimize liabilities and keep more money in your pocket."
              icon="bar-chart"
            />
          </div>
          
        </div>
      </section>
    )
}