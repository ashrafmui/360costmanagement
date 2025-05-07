import Link from "next/link";
import {
  LightbulbIcon,
  BarChart3Icon,
  FileTextIcon,
  PaletteIcon,
  FileIcon,
  TrendingUpIcon,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8ffcc]">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl">Our Services</h1>
            <p className="max-w-[700px] text-xl text-gray-700 md:text-2xl">
              We record business transactions and categorize per GAAP and IFRS standard
            </p>
            <p className="max-w-[700px] text-gray-600 md:text-lg">
              Discover the range of services we offer to help your business thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {[ 
              { title: "Revenue and Expenses Analysis", icon: <LightbulbIcon />, href: "/services/revenue-analysis", desc: "Clear insights into your revenue and expenses to help you make smarter, more profitable decisions." },
              { title: "Cost Control and Budgeting", icon: <BarChart3Icon />, href: "/services/cost-control", desc: "Smart budgeting and cost control strategies to boost efficiency and maximize your bottom line." },
              { title: "Financial Reporting", icon: <FileTextIcon />, href: "/services/financial-reporting", desc: "Accurate, easy-to-understand financial reports to keep you informed and in control." },
              { title: "Payroll Preparation", icon: <PaletteIcon />, href: "/services/payroll-preparation", desc: "Accurate, timely payroll processing to keep your team paid and your business compliant—stress-free and efficient." },
              { title: "Financial Health Evaluation", icon: <FileIcon />, href: "/services/financial-health", desc: "Assess and improve your financial health with expert guidance and tailored insights." },
              { title: "Tax Planning", icon: <TrendingUpIcon />, href: "/services/tax-planning", desc: "Proactive tax planning to minimize liabilities and keep more money in your pocket." },
            ].map((service, i) => (
              <div key={i} className="flex justify-center">
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border max-w-sm w-full text-center">
                  <div className="p-3 mb-4 rounded-full bg-[#f8ffcc]">
                    {service.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                  <Link href={service.href} className="mt-4 inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-[#f8ffcc] text-gray-900 rounded-md hover:bg-[#e6f0b0]">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#f8ffcc] px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-[#e6f0b0] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Process</h2>
            <p className="max-w-[700px] text-gray-600 md:text-lg">
              How we work with you to deliver exceptional financial management services
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 place-items-center">
            {["Initial Consultation", "Customized Strategy", "Implementation & Support"].map((title, i) => (
              <div key={i} className="flex flex-col items-center text-center max-w-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f8ffcc] text-xl font-bold">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-gray-600">
                  {i === 0 && "We meet to understand your business needs and financial goals."}
                  {i === 1 && "We develop a tailored plan to address your specific financial challenges."}
                  {i === 2 && "We execute the plan and provide ongoing support to ensure your success."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Clients Say</h2>
            <p className="max-w-[700px] text-gray-600 md:text-lg">
              Hear from businesses that have transformed their financial operations with our services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {[
              {
                quote:
                  "360CostManagement transformed our financial reporting process. We now have clear insights that help us make better business decisions.",
                name: "Sarah Johnson",
                title: "CEO, TechStart Inc.",
              },
              {
                quote:
                  "Their tax planning strategies saved us thousands of dollars last year. Highly recommend their services to any growing business.",
                name: "Michael Chen",
                title: "CFO, GrowthWave Solutions",
              },
              {
                quote:
                  "The payroll services have been a game-changer for our HR department. Accurate, on-time, and completely stress-free.",
                name: "Jessica Miller",
                title: "HR Director, Retail Innovations",
              },
            ].map((testimonial, i) => (
              <div key={i} className="flex justify-center">
                <div className="flex flex-col p-6 bg-white rounded-lg shadow-sm border max-w-sm w-full text-center">
                  <p className="italic text-gray-600 mb-4">&quot;{testimonial.quote}&quot;</p>
                  <div className="mt-auto">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
