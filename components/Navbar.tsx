"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "../lib/utils";

const links = [
  { label: "Home", href: "/" },
  { label: "Membership", href: "/membership" },
  { label: "Padel", href: "/padel" },
  { label: "Club", href: "/club" },
  { label: "About", href: "/about" },
  { label: "Register", href: "/membership#register" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname?.startsWith(href.replace(/#.*/, ""));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm uppercase tracking-[0.3em]">
        <Link href="/" className="text-white">
          COURTIER
        </Link>
        <div className="hidden items-center gap-8 text-xs text-white md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition hover:text-white",
                isActive(link.href) ? "text-white" : "text-white/60"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          className="text-white md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
        >
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="mt-1 block h-0.5 w-6 bg-white"></span>
        </button>
      </nav>
      {open && (
        <div className="fixed inset-0 z-40 bg-black/95 px-6 py-10 text-white md:hidden">
          <div className="flex items-center justify-between">
            <span className="text-sm uppercase tracking-[0.3em]">COURTIER</span>
            <button
              aria-label="Close navigation"
              onClick={() => setOpen(false)}
              className="text-white"
            >
              Close
            </button>
          </div>
          <div className="mt-12 flex flex-col gap-6 text-2xl">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
