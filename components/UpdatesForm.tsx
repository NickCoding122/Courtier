"use client";

import { FormEvent } from "react";

export function UpdatesForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log("Padel updates", Object.fromEntries(data));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 border border-white/15 p-6 text-sm text-white">
      <input
        name="name"
        placeholder="Full name"
        required
        className="border border-white/30 bg-transparent px-3 py-2 text-white focus:border-white focus:outline-none"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="border border-white/30 bg-transparent px-3 py-2 text-white focus:border-white focus:outline-none"
      />
      <button type="submit" className="border border-white px-4 py-3 text-xs uppercase tracking-[0.3em]">
        Register for updates
      </button>
    </form>
  );
}
