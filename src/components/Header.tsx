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
    <header className="sticky top-0 z-50 w-full bg-page/70 backdrop-blur-md border-b border-black/5">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 lg:px-10 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-base font-semibold tracking-tight text-black"
          onClick={() => setOpen(false)}
        >
          <Image
            src={logo}
            alt="360 Cost Management logo"
            width={28}
            height={28}
            priority
          />
          <span>360CostManagement</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-2 text-black/65 hover:text-black transition-colors after:content-[''] after:absolute after:left-0 after:bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="md:hidden p-1 text-black"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="md:hidden border-t border-black/5 bg-page/90 backdrop-blur-md px-6 py-5 flex flex-col gap-4 text-base"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-black/80 hover:text-black transition-colors"
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
