import { Familjen_Grotesk } from "next/font/google";

const familjenGrotesk = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function StatisticsSection() {
  return (
    <section className={`w-full bg-[#EBFF84] py-20 ${familjenGrotesk.className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-10 text-center mb-12">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Accounting Statistics
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black text-center">
          <div className="py-12 px-6">
            <p className="text-6xl font-bold text-black">5</p>
            <p className="mt-6 text-xl text-black">Clients Under Management</p>
          </div>
          <div className="py-12 px-6">
            <p className="text-6xl font-bold text-black">$200M+</p>
            <p className="mt-6 text-xl text-black">Assets Managed</p>
          </div>
          <div className="py-12 px-6">
            <p className="text-6xl font-bold text-black">20</p>
            <p className="mt-6 text-xl text-black">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
