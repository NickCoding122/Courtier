"use client";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em]">COURTIER</p>
          <p className="mt-2 text-xs text-white/60">Indoor Padel & Leisure Club</p>
        </div>
        <div className="flex flex-1 flex-col gap-2 text-sm text-white/70 md:flex-row md:justify-end md:gap-8">
          <a href="/membership" className="hover:text-white">
            Membership
          </a>
          <a href="/padel" className="hover:text-white">
            Padel
          </a>
          <a href="/club" className="hover:text-white">
            Club
          </a>
          <a href="/about" className="hover:text-white">
            About
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 flex w-full max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <form
          className="flex w-full max-w-md items-center gap-3"
          onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            console.log("Footer email capture", Object.fromEntries(formData));
          }}
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Email for updates"
            className="flex-1 border border-white/30 bg-transparent px-3 py-2 text-sm text-white placeholder-white/40 focus:border-white focus:outline-none"
          />
          <button
            type="submit"
            className="border border-white px-4 py-2 text-xs uppercase tracking-[0.3em]"
          >
            Submit
          </button>
        </form>
        <p className="text-xs text-white/50">© {new Date().getFullYear()} COURTIER. All rights reserved.</p>
      </div>
    </footer>
  );
}
