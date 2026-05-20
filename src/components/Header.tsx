"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, XIcon } from "lucide-react";
import logo from "/public/logo.svg";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="text-black sticky top-0 z-50 w-full backdrop-blur-sm bg-[#e8fc8c]/90">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <Image src={logo} alt="360 Cost Management logo" width={32} height={32} />
            360CostManagement
          </Link>
        </div>

        <nav className="hidden md:flex gap-6 text-sm">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="md:hidden p-1"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="md:hidden border-t border-black/10 bg-[#e8fc8c]/95 px-6 py-4 flex flex-col gap-4 text-base"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:underline"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
