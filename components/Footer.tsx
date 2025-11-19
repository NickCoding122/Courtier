"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FormField } from "./FormField";
import { ActiveLink } from "./ActiveLink";

export function Footer() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log("Footer email capture", Object.fromEntries(formData));
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em]">COURTIER</p>
          <p className="mt-2 text-xs text-white/60">Indoor Padel & Leisure Club</p>
        </div>
        <div className="flex flex-1 flex-col gap-2 text-sm text-white/70 md:flex-row md:justify-end md:gap-8">
          <ActiveLink href="/membership" className="text-sm text-white/70 after:h-0" accent={false}>
            Membership
          </ActiveLink>
          <ActiveLink href="/padel" className="text-sm text-white/70 after:h-0" accent={false}>
            Padel
          </ActiveLink>
          <ActiveLink href="/club" className="text-sm text-white/70 after:h-0" accent={false}>
            Club
          </ActiveLink>
          <ActiveLink href="/about" className="text-sm text-white/70 after:h-0" accent={false}>
            About
          </ActiveLink>
        </div>
      </div>
      <div className="mx-auto mt-8 flex w-full max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <form className="flex w-full max-w-md flex-col gap-3 md:flex-row" onSubmit={handleSubmit}>
          <FormField
            label="Email for updates"
            inputProps={{ type: "email", name: "email", required: true, placeholder: "Email" }}
            className="flex-1"
          />
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full rounded-sm border border-white px-4 py-3 text-xs uppercase tracking-[0.3em] transition hover:border-[#C9B37E] hover:text-[#C9B37E] md:w-auto"
            >
              Submit
            </button>
          </div>
        </form>
        <AnimatePresence>
          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="text-sm text-[#C9B37E]"
            >
              Thank you. We will share the latest club updates with you.
            </motion.p>
          )}
        </AnimatePresence>
        <p className="text-xs text-white/50">© {new Date().getFullYear()} COURTIER. All rights reserved.</p>
      </div>
    </footer>
  );
}
