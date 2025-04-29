import Link from "next/link";
import { Familjen_Grotesk } from "next/font/google";

const familjenGrotesk = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Header() {
  return (
    <header className="text-black sticky top-0 z-50 w-full px-6 py-4 backdrop-blur-sm bg-[#e8fc8c]/90 flex justify-between items-center">
      <div className="text-lg">
        360CostManagement
      </div>
      <nav className="flex gap-6 text-sm">
        <a href="#about" className="hover:underline">About</a>
        <a href="#services" className="hover:underline">Services</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
    </header>
  );
}