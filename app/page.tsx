import { Button } from "../components/Button";

export default function HomePage() {
  return (
    <div className="bg-[#0E0E0E] text-white">
      <main className="mx-auto max-w-5xl px-6 py-16 space-y-12">
        <section className="space-y-6 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-gray-400">COURTIER / LONDON</p>
          <h1 className="font-extended text-5xl font-semibold leading-tight sm:text-6xl">Indoor padel, distilled.</h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-400">
            Calm, climate-controlled courts with concierge-level hospitality. We strip away clutter so the experience stays
            precise.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Button href="/membership#register">Join the list</Button>
            <Button href="/membership" variant="ghost">
              Membership
            </Button>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Climate-controlled courts",
              copy: "Consistent bounce, tuned lighting, gallery sightlines.",
            },
            {
              title: "Concierge booking",
              copy: "Courts, coaching and events handled for you.",
            },
            {
              title: "Design-first social spaces",
              copy: "Lounge, bar and work-ready corners in one club.",
            },
          ].map((item) => (
            <div key={item.title} className="space-y-2 border border-white/15 bg-white/5 p-4 text-left">
              <p className="text-base font-semibold text-white">{item.title}</p>
              <p className="text-sm text-gray-300">{item.copy}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
