export default function PhilosophySection() {
  return (
    <section className="bg-brand-soft py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-black/60 mb-8">
          <span className="h-px w-8 bg-black/40" />
          Our philosophy
          <span className="h-px w-8 bg-black/40" />
        </div>
        <blockquote className="text-2xl md:text-4xl font-medium leading-snug text-black tracking-tight">
          <span className="text-black/30 mr-1">&ldquo;</span>
          We&apos;re dedicated to providing expert financial advice that secures
          the future of our clients — grounded in trust, integrity, and
          professionalism.
          <span className="text-black/30 ml-1">&rdquo;</span>
        </blockquote>
        <div className="mt-10 text-sm uppercase tracking-[0.18em] text-black/60">
          360 Cost Management
        </div>
      </div>
    </section>
  );
}
