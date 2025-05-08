import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo.svg";

export default function Header() {
  return (
    <header className="text-black sticky top-0 z-50 w-full px-6 py-4 backdrop-blur-sm bg-[#e8fc8c]/90 flex justify-between items-center">
      <div className="flex items-center gap-2 text-lg font-semibold">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Logo" width={32} height={32} />
          360CostManagement
        </Link>
      </div>
      <nav className="flex gap-6 text-sm">
        <Link href="/services" className="hover:underline">Services</Link>
        <Link href="/about" className="hover:underline">Team</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </nav>
    </header>
  );
}