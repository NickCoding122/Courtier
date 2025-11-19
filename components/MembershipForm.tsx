"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FormField } from "./FormField";

const tiers = [
  { label: "Player", value: "player" },
  { label: "Club", value: "club" },
  { label: "Founding", value: "founding" },
];

export function MembershipForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log("Membership registration", Object.fromEntries(formData));
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form
      id="register"
      onSubmit={handleSubmit}
      className="space-y-4 rounded-sm border border-white/15 bg-black/40 p-6 text-white"
    >
      <FormField
        label="Full Name"
        inputProps={{ name: "name", required: true, placeholder: "Alexandra Court" }}
      />
      <FormField
        label="Email"
        inputProps={{ type: "email", name: "email", required: true, placeholder: "you@courtier.com" }}
      />
      <FormField
        label="Phone"
        inputProps={{ type: "tel", name: "phone", placeholder: "+44" }}
      />
      <FormField
        type="select"
        label="Preferred Tier"
        selectProps={{ name: "tier", defaultValue: tiers[0].value }}
        options={tiers}
      />
      <FormField
        type="textarea"
        label="Additional Notes"
        textareaProps={{ name: "notes", placeholder: "Tell us about your interest" }}
      />
      <button
        type="submit"
        className="w-full rounded-sm border border-white px-4 py-3 text-xs uppercase tracking-[0.3em] transition hover:border-[#C9B37E] hover:text-[#C9B37E]"
      >
        Submit Request
      </button>
      <AnimatePresence>
        {submitted && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="text-sm text-[#C9B37E]"
          >
            Request received. Our membership team will be in touch shortly.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
