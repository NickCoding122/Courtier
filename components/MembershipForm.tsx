"use client";

import { FormEvent } from "react";

const tiers = [
  { label: "Player", value: "player" },
  { label: "Club", value: "club" },
  { label: "Founding", value: "founding" },
];

export function MembershipForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log("Membership registration", Object.fromEntries(formData));
    // TODO: Integrate with API route (POST /api/register)
  };

  return (
    <form
      id="register"
      onSubmit={handleSubmit}
      className="space-y-4 border border-white/15 bg-black/40 p-6 text-sm text-white"
    >
      <div>
        <label className="block text-xs uppercase tracking-[0.3em] text-white/60">
          Full Name
        </label>
        <input
          name="name"
          required
          className="mt-2 w-full border border-white/30 bg-transparent px-3 py-2 text-white focus:border-white focus:outline-none"
          placeholder="Alexandra Court"
        />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-[0.3em] text-white/60">Email</label>
        <input
          type="email"
          name="email"
          required
          className="mt-2 w-full border border-white/30 bg-transparent px-3 py-2 text-white focus:border-white focus:outline-none"
          placeholder="you@courtier.com"
        />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-[0.3em] text-white/60">Phone</label>
        <input
          type="tel"
          name="phone"
          className="mt-2 w-full border border-white/30 bg-transparent px-3 py-2 text-white focus:border-white focus:outline-none"
          placeholder="+44"
        />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-[0.3em] text-white/60">
          Preferred Tier
        </label>
        <select
          name="tier"
          className="mt-2 w-full border border-white/30 bg-black px-3 py-2 text-white focus:border-white focus:outline-none"
        >
          {tiers.map((tier) => (
            <option key={tier.value} value={tier.value} className="bg-black text-white">
              {tier.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-xs uppercase tracking-[0.3em] text-white/60">
          Additional Notes
        </label>
        <textarea
          name="notes"
          rows={4}
          className="mt-2 w-full border border-white/30 bg-transparent px-3 py-2 text-white focus:border-white focus:outline-none"
          placeholder="Tell us about your interest"
        />
      </div>
      <button
        type="submit"
        className="w-full border border-white px-4 py-3 text-xs uppercase tracking-[0.3em]"
      >
        Submit Request
      </button>
    </form>
  );
}
