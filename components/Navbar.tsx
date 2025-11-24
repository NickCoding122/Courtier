"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ActiveLink } from "./ActiveLink";

const links = [
  { label: "Home", href: "/" },
  { label: "Membership", href: "/membership" },
  { label: "Padel", href: "/padel" },
  { label: "Club", href: "/club" },
  { label: "About", href: "/about" },
  { label: "Register", href: "/membership#register" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-soft bg-courtier backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-[11px] uppercase tracking-[0.35em]">
        <ActiveLink href="/" className="text-white after:hidden">COURTIER</ActiveLink>
        <div className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <ActiveLink key={link.href} href={link.href}>
              {link.label}
            </ActiveLink>
          ))}
        </div>
        <button
          className="text-white lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
        >
          <span className="block h-0.5 w-7 bg-white" />
          <span className="mt-1 block h-0.5 w-7 bg-white" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-courtier text-white lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.05 } }}
              exit={{ y: -20, opacity: 0 }}
              className="flex h-full flex-col px-6 py-10"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm uppercase tracking-[0.3em]">COURTIER</span>
                <button aria-label="Close navigation" onClick={closeMenu} className="text-white/80">
                  ✕
                </button>
              </div>
              <div className="mt-12 flex flex-1 flex-col gap-8 text-2xl">
                {links.map((link) => (
                  <ActiveLink
                    key={link.href}
                    href={link.href}
                    className="text-2xl tracking-[0.2em]"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </ActiveLink>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
