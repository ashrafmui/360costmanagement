const STEPS = [
  {
    title: "Initial Consultation",
    description:
      "We meet to understand your business, your goals, and where today's numbers are getting in the way.",
  },
  {
    title: "Customized Strategy",
    description:
      "We build a tailored plan around your financials — bookkeeping, reporting, payroll, and tax-planning priorities.",
  },
  {
    title: "Implementation & Support",
    description:
      "We execute the plan and stay on as your ongoing financial partner, adapting as your business grows.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-black/60 mb-4">
            <span className="h-px w-8 bg-black/40" />
            How we work
            <span className="h-px w-8 bg-black/40" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
            A clear three-step process
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {STEPS.map((step, i) => (
            <div key={step.title} className="relative pl-6 md:pl-0">
              <div className="absolute left-0 top-0 md:relative md:left-auto md:top-auto text-5xl md:text-7xl font-bold text-black/15 leading-none mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                {step.title}
              </h3>
              <p className="text-black/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
