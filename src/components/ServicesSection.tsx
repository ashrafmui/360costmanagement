import Link from "next/link";
import {
  Activity,
  ArrowRightIcon,
  Banknote,
  Calculator,
  FileSpreadsheet,
  Landmark,
  LineChart,
} from "lucide-react";

const SERVICES = [
  {
    title: "Revenue & Expenses Analysis",
    description:
      "Clear insights into your revenue and expenses to help you make smarter, more profitable decisions.",
    href: "/services/revenue-analysis",
    Icon: LineChart,
  },
  {
    title: "Cost Control & Budgeting",
    description:
      "Smart budgeting and cost-control strategies to boost efficiency and maximize your bottom line.",
    href: "/services/cost-control",
    Icon: Calculator,
  },
  {
    title: "Financial Reporting",
    description:
      "Accurate, easy-to-understand financial reports to keep you informed and in control.",
    href: "/services/financial-reporting",
    Icon: FileSpreadsheet,
  },
  {
    title: "Payroll Preparation",
    description:
      "Accurate, timely payroll processing to keep your team paid and your business compliant.",
    href: "/services/payroll-preparation",
    Icon: Banknote,
  },
  {
    title: "Financial Health Evaluation",
    description:
      "Assess and improve your financial health with expert guidance and tailored insights.",
    href: "/services/financial-health",
    Icon: Activity,
  },
  {
    title: "Tax Planning",
    description:
      "Proactive tax planning to minimize liabilities and keep more money in your pocket.",
    href: "/services/tax-planning",
    Icon: Landmark,
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-brand-soft/30 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-black/60 mb-4">
              <span className="h-px w-8 bg-black/40" />
              What we do
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
              Our expertise
            </h2>
          </div>
          <p className="max-w-md text-black/70 text-base md:text-lg leading-relaxed">
            Six core service lines built around GAAP and IFRS standards —
            designed to give your business clarity, compliance, and confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 rounded-2xl overflow-hidden border border-black/10">
          {SERVICES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group bg-page/60 backdrop-blur-md hover:bg-brand-soft/70 transition-colors p-8 flex flex-col min-h-[260px]"
            >
              <s.Icon className="h-10 w-10 mb-6 text-black" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-black mb-3">
                {s.title}
              </h3>
              <p className="text-black/70 leading-relaxed mb-8 flex-1">
                {s.description}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-black">
                Learn more
                <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-black hover:gap-3 transition-all"
          >
            View all services
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
