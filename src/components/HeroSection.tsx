import Link from "next/link";
import Image from "next/image";
import heroImage from "/public/hero.webp";
import BookConsultationButton from "@/components/BookConsultationButton";

export default function HeroSection() {
  return (
    <section className="bg-page">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center py-16 lg:py-28">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-black/60">
            <span className="h-px w-8 bg-black/40" />
            NYC Accounting &amp; Cost Management
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-black">
            Smart strategies.
            <br />
            Solid compliance.
            <br />
            <span className="text-black/45">Secure future.</span>
          </h1>

          <p className="text-lg md:text-xl text-black/70 max-w-xl leading-relaxed">
            Expert bookkeeping, payroll, tax planning, and GAAP/IFRS-compliant
            reporting from a New York team with 20+ years of combined
            experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <BookConsultationButton variant="hero" />
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border border-black/20 px-7 py-3.5 rounded-md font-medium hover:bg-black/5 transition"
            >
              View services
            </Link>
          </div>

          <div className="pt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-black/55">
            <span className="font-medium text-black">$200M+</span>
            <span className="text-black/30">assets managed</span>
            <span className="text-black/20">|</span>
            <span className="font-medium text-black">20+ years</span>
            <span className="text-black/30">experience</span>
            <span className="text-black/20">|</span>
            <span className="font-medium text-black">GAAP / IFRS</span>
            <span className="text-black/30">compliant</span>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-3 bg-brand rounded-2xl -rotate-2" aria-hidden />
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src={heroImage}
              alt="Accounting professional reviewing financial reports with a client"
              fill
              className="object-cover"
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
