// src/app/services/[service]/page.tsx

import { notFound } from "next/navigation"
import Link from "next/link"
import {
  LightbulbIcon,
  BarChart3Icon,
  FileTextIcon,
  PaletteIcon,
  FileIcon,
  TrendingUpIcon,
  ArrowLeftIcon,
} from "lucide-react"

// Service data definition
const services = {
  "revenue-analysis": {
    title: "Revenue and Expenses Analysis",
    icon: LightbulbIcon,
    description:
      "Clear insights into your revenue and expenses to help you make smarter, more profitable decisions.",
    content: `
      <p>Our Revenue and Expenses Analysis service provides a comprehensive examination of your business's financial inflows and outflows. We help you understand where your money is coming from and where it's going, enabling you to make data-driven decisions that boost profitability.</p>
      <h3>What We Offer:</h3>
      <ul>
        <li>Detailed breakdown of revenue streams</li>
        <li>Comprehensive expense categorization</li>
        <li>Trend analysis and forecasting</li>
        <li>Profit margin optimization strategies</li>
        <li>Customized reporting dashboards</li>
      </ul>
      <h3>Benefits:</h3>
      <ul>
        <li>Identify your most profitable products, services, or customers</li>
        <li>Spot unnecessary expenses and cost-saving opportunities</li>
        <li>Understand seasonal patterns in your business</li>
        <li>Make informed pricing decisions</li>
        <li>Improve overall financial performance</li>
      </ul>
    `,
  },
  "cost-control": {
    title: "Cost Control and Budgeting",
    icon: BarChart3Icon,
    description:
      "Smart budgeting and cost control strategies to boost efficiency and maximize your bottom line.",
    content: `
      <p>Our Cost Control and Budgeting service helps businesses optimize their spending and create realistic, achievable budgets. We implement proven strategies to reduce waste, increase efficiency, and maximize profitability.</p>
      <h3>What We Offer:</h3>
      <ul>
        <li>Comprehensive budget development and management</li>
        <li>Cost reduction analysis and implementation</li>
        <li>Cash flow forecasting and management</li>
        <li>Variance analysis and reporting</li>
        <li>Budget vs. actual performance tracking</li>
      </ul>
      <h3>Benefits:</h3>
      <ul>
        <li>Eliminate unnecessary expenses</li>
        <li>Improve operational efficiency</li>
        <li>Enhance financial discipline across your organization</li>
        <li>Make more informed investment decisions</li>
        <li>Achieve greater financial stability and growth</li>
      </ul>
    `,
  },
  "financial-reporting": {
    title: "Financial Reporting",
    icon: FileTextIcon,
    description:
      "Accurate, easy-to-understand financial reports to keep you informed and in control.",
    content: `
      <p>Our Financial Reporting service transforms complex financial data into clear, actionable insights. We provide accurate, timely reports that help you understand your business's financial health and make informed decisions.</p>
      <h3>What We Offer:</h3>
      <ul>
        <li>Balance sheets, income statements, and cash flow statements</li>
        <li>Custom KPI dashboards and performance metrics</li>
        <li>Regulatory compliance reporting</li>
        <li>Investor and stakeholder presentations</li>
        <li>Year-end financial summaries and analysis</li>
      </ul>
      <h3>Benefits:</h3>
      <ul>
        <li>Gain clear visibility into your financial position</li>
        <li>Meet all regulatory and compliance requirements</li>
        <li>Identify trends and patterns in your financial data</li>
        <li>Make data-driven strategic decisions</li>
        <li>Build credibility with investors, lenders, and partners</li>
      </ul>
    `,
  },
  "payroll-preparation": {
    title: "Payroll Preparation",
    icon: PaletteIcon,
    description:
      "Accurate, timely payroll processing to keep your team paid and your business compliant—stress-free and efficient.",
    content: `
      <p>Our Payroll Preparation service handles all aspects of your company's payroll processing, ensuring accuracy, compliance, and timeliness. We take the stress out of payroll management so you can focus on running your business.</p>
      <h3>What We Offer:</h3>
      <ul>
        <li>Complete payroll processing and management</li>
        <li>Tax withholding and reporting</li>
        <li>Benefits administration</li>
        <li>Compliance with federal, state, and local regulations</li>
        <li>Year-end W-2 and 1099 preparation</li>
      </ul>
      <h3>Benefits:</h3>
      <ul>
        <li>Eliminate payroll errors and penalties</li>
        <li>Save time and reduce administrative burden</li>
        <li>Ensure compliance with changing regulations</li>
        <li>Provide employees with accurate, timely payments</li>
        <li>Access detailed payroll reports and analytics</li>
      </ul>
    `,
  },
  "financial-health": {
    title: "Financial Health Evaluation",
    icon: FileIcon,
    description: "Assess and improve your financial health with expert guidance and tailored insights.",
    content: `
      <p>Our Financial Health Evaluation service provides a comprehensive assessment of your business's financial condition. We identify strengths, weaknesses, and opportunities for improvement to help you build a stronger financial foundation.</p>
      <h3>What We Offer:</h3>
      <ul>
        <li>Comprehensive financial health assessment</li>
        <li>Ratio analysis and benchmarking</li>
        <li>Risk identification and mitigation strategies</li>
        <li>Liquidity and solvency evaluation</li>
        <li>Customized improvement recommendations</li>
      </ul>
      <h3>Benefits:</h3>
      <ul>
        <li>Identify potential financial risks before they become problems</li>
        <li>Understand how your business compares to industry standards</li>
        <li>Improve your creditworthiness and borrowing capacity</li>
        <li>Build investor and stakeholder confidence</li>
        <li>Create a roadmap for financial improvement</li>
      </ul>
    `,
  },
  "tax-planning": {
    title: "Tax Planning",
    icon: TrendingUpIcon,
    description: "Proactive tax planning to minimize liabilities and keep more money in your pocket.",
    content: `
      <p>Our Tax Planning service helps businesses minimize tax liabilities through strategic planning and compliance. We stay current with tax laws and regulations to identify opportunities for tax savings while ensuring full compliance.</p>
      <h3>What We Offer:</h3>
      <ul>
        <li>Comprehensive tax strategy development</li>
        <li>Business structure optimization for tax efficiency</li>
        <li>Deduction and credit identification</li>
        <li>Quarterly tax planning and estimation</li>
        <li>Year-round tax compliance support</li>
      </ul>
      <h3>Benefits:</h3>
      <ul>
        <li>Reduce your overall tax burden legally and ethically</li>
        <li>Avoid penalties and interest from compliance issues</li>
        <li>Plan major business decisions with tax implications in mind</li>
        <li>Prepare for tax law changes proactively</li>
        <li>Maximize after-tax profits and cash flow</li>
      </ul>
    `,
  },
}

// Generate static paths for all services
export function generateStaticParams() {
  return Object.keys(services).map((service) => ({ service }))
}

// ✅ Async component to handle promised `params`
export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>
}) {
  const { service } = await params
  const serviceData = services[service as keyof typeof services]

  if (!serviceData) {
    notFound()
  }

  const Icon = serviceData.icon

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8ffcc]">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="p-3 mb-4 rounded-full bg-white">
              <Icon className="w-12 h-12 text-gray-800" />
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              {serviceData.title}
            </h1>
            <p className="max-w-[700px] text-xl text-gray-700">
              {serviceData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 place-items-center">
            <div className="lg:col-span-2 w-full">
              <div
                className="prose max-w-none mx-auto"
                dangerouslySetInnerHTML={{ __html: serviceData.content }}
              />
            </div>
            <div className="lg:col-span-1 w-full">
              <div className="bg-gray-50 p-6 rounded-lg border text-center">
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6">
                  Contact us today to learn more about our{" "}
                  {serviceData.title.toLowerCase()} services and how we can help your business succeed.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-[#f8ffcc] px-8 text-sm font-medium text-gray-900 shadow hover:bg-[#e6f0b0]"
                >
                  Contact Us
                </Link>
              </div>

              <div className="mt-8 bg-gray-50 p-6 rounded-lg border text-center">
                <h3 className="text-xl font-bold mb-4">Other Services</h3>
                <ul className="space-y-3">
                  {Object.entries(services)
                    .filter(([key]) => key !== service)
                    .map(([key, s]) => (
                      <li key={key}>
                        <Link
                          href={`/services/${key}`}
                          className="flex items-center justify-center text-gray-700 hover:text-gray-900 hover:underline"
                        >
                          <s.icon className="w-4 h-4 mr-2" />
                          {s.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className="inline-flex items-center text-gray-700 hover:text-gray-900">
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 bg-gray-100">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready to optimize your financial operations?
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-lg">
              Our team of experts is ready to help your business achieve financial clarity and success.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#f8ffcc] px-8 text-sm font-medium text-gray-900 shadow hover:bg-[#e6f0b0] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
