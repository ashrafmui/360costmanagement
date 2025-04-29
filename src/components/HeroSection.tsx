// components/Hero.tsx
import Image from "next/image";
import heroImage from "/public/hero.jpg"; // update path as needed
import { Familjen_Grotesk } from "next/font/google";

const familjenGrotesk = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Hero() {
  return (
    <section className={`grid grid-cols-1 md:grid-cols-2 w-full min-h-screen ${familjenGrotesk.className}`}>
        <div className="flex flex-col justify-center px-8 bg-[#FAF7EB]">
            <h1 className="text-5xl md:text-7xl leading-tight text-black">
            Smart strategies.<br />
            Solid compliance.<br />
            Secure future.
            </h1>
            <p className="text-lg mt-6 text-black">
            We secure your financial future with expert advice
            </p>
            <button className="mt-6 w-fit px-6 py-3 bg-black text-white rounded-md hover:opacity-75 transition">
            Contact Us
            </button>
        </div>
        <div className="relative w-full h-full min-h-[600px] md:min-h-screen">
            <Image
            src={heroImage}
            alt="Hero image"
            fill
            className="object-cover"
            priority
            />
        </div>
    </section>
  );
}