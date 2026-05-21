import Link from "next/link";
import BookConsultationButton from "@/components/BookConsultationButton";

export default function CtaBand() {
  return (
    <section className="bg-black text-white py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center space-y-8">
        <div className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
          <span className="h-px w-8 bg-white/40" />
          Get started
          <span className="h-px w-8 bg-white/40" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Ready to put your costs in focus?
        </h2>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
          Book a free consultation with our team to discuss bookkeeping, tax
          planning, or full-spectrum cost management for your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <BookConsultationButton variant="cta" />
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 rounded-md font-medium hover:bg-white/10 transition"
          >
            Explore services
          </Link>
        </div>
      </div>
    </section>
  );
}
