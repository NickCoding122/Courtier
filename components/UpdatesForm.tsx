"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FormField } from "./FormField";

export function UpdatesForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log("Padel updates", Object.fromEntries(data));
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-sm border border-white/15 p-6 text-white">
      <FormField label="Full Name" inputProps={{ name: "name", placeholder: "Full name", required: true }} />
      <FormField label="Email" inputProps={{ name: "email", type: "email", placeholder: "Email", required: true }} />
      <button
        type="submit"
        className="rounded-sm border border-white px-4 py-3 text-xs uppercase tracking-[0.3em] transition hover:border-[#C9B37E] hover:text-[#C9B37E]"
      >
        Register for updates
      </button>
      <AnimatePresence>
        {submitted && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="text-sm text-[#C9B37E]"
          >
            Registered. You will receive updates on padel events and courts.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
