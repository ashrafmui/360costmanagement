import { Familjen_Grotesk } from "next/font/google";

const familjenGrotesk = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function StatisticsSection() {
  return (
    <section className={`w-full bg-[#EBFF84] py-12 ${familjenGrotesk.className}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-black">
          Accounting Statistics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black text-center">
          <div className="py-8 px-4">
            <p className="text-5xl font-bold text-black">5</p>
            <p className="mt-4 text-lg text-black">Clients Under Management</p>
          </div>
          <div className="py-8 px-4">
            <p className="text-5xl font-bold text-black">$200M+</p>
            <p className="mt-4 text-lg text-black">Assets Managed</p>
          </div>
          <div className="py-8 px-4">
            <p className="text-5xl font-bold text-black">20</p>
            <p className="mt-4 text-lg text-black">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
