const STATS = [
  { value: "$200M+", label: "Assets Under Management" },
  { value: "20+", label: "Years of Combined Experience" },
  { value: "6", label: "Core Service Lines" },
];

export default function StatisticsSection() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-1 md:grid-cols-3 md:divide-x divide-white/10">
        {STATS.map((s) => (
          <div key={s.label} className="text-center md:px-8 py-6 md:py-0">
            <div className="text-5xl md:text-6xl font-bold tracking-tight">
              {s.value}
            </div>
            <div className="mt-3 text-xs uppercase tracking-[0.18em] text-white/60">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
