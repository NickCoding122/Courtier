export default function ClubPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 space-y-14">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">THE CLUB</p>
        <h1 className="text-3xl font-semibold text-white">A residence-like club for performance and pause.</h1>
        <p className="text-lg text-muted">
          Gym, recovery and lounge spaces designed to feel more like a private residence than a sports centre.
        </p>
      </section>

      <section className="space-y-6 text-muted">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-white">Recovery</h2>
          <p>Saunas, cold plunges and treatment rooms tuned for ritual, not rush.</p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-white">Lounge &amp; Social</h2>
          <p>Bar and lounge for post-match drinks, quiet work and curated events.</p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-white">Craft &amp; Detail</h2>
          <p>Objects, apparel and signage designed to feel like part of the architecture.</p>
        </div>
      </section>
    </main>
  );
}
