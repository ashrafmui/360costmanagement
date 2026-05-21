import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

const TEAM = [
  {
    name: "Jahangir Alam",
    title: "Member",
    credentials: "MBA, Accounting",
    avatar: "/jahangir_alam.jpg",
  },
  {
    name: "Shahed Chayan",
    title: "Member",
    credentials: "MBA · BSc Computer Engineering",
    avatar: "/shahed_chayan.jpg",
  },
  {
    name: "Jewel Ashraf",
    title: "Advisor",
    credentials: "MS Finance · MBA · MM",
    avatar: "/jewel_ashraf.jpg",
  },
];

export default function TeamPreview() {
  return (
    <section className="bg-brand-soft/20 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-black/60 mb-4">
              <span className="h-px w-8 bg-black/40" />
              Leadership
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
              Built on experience
            </h2>
            <p className="mt-4 text-black/70 max-w-xl leading-relaxed">
              Decades of corporate finance, accounting, and compliance
              experience — led by Sakiya Ashraf, Head of Operations.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-medium text-black hover:gap-3 transition-all shrink-0"
          >
            Meet the full team
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((m) => (
            <article
              key={m.name}
              className="bg-page/60 backdrop-blur-md border border-black/5 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/5] w-full bg-black/5">
                <Image
                  src={m.avatar}
                  alt={`${m.name}, ${m.title} at 360 Cost Management`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black">{m.name}</h3>
                <p className="mt-1 text-sm text-black/60">{m.title}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.14em] text-black/50">
                  {m.credentials}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
