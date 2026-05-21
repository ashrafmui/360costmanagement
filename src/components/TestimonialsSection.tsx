const TESTIMONIALS = [
  {
    quote:
      "360 Cost Management transformed our financial reporting process. We now have clear insights that help us make better business decisions.",
    name: "Sarah Johnson",
    title: "CEO, TechStart Inc.",
  },
  {
    quote:
      "The payroll services have been a game-changer for our HR department. Accurate, on-time, and completely stress-free.",
    name: "Jessica Miller",
    title: "HR Director, Retail Innovations",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-brand-soft/20 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-black/60 mb-4">
            <span className="h-px w-8 bg-black/40" />
            In their words
            <span className="h-px w-8 bg-black/40" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
            What our clients say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className="relative bg-page/60 backdrop-blur-md border border-black/5 rounded-2xl p-8 lg:p-10"
            >
              <div
                aria-hidden
                className="absolute -top-4 left-8 text-7xl leading-none text-brand font-serif"
              >
                &ldquo;
              </div>
              <p className="text-lg md:text-xl leading-relaxed text-black mb-8">
                {t.quote}
              </p>
              <footer className="pt-6 border-t border-black/10">
                <div className="font-semibold text-black">{t.name}</div>
                <div className="text-sm text-black/60 mt-0.5">{t.title}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
