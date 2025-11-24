import { UpdatesForm } from "../../components/UpdatesForm";

const features = [
  { title: "Courts", copy: "High-spec flooring, tuned lighting, gallery viewing." },
  { title: "Coaching", copy: "One-to-one sessions focused on progress, not just sweat." },
  { title: "Clinics", copy: "Small group clinics for tactical awareness and creativity." },
  { title: "Events", copy: "Leagues, invitation-only evenings and collaborations with chefs and designers." },
];

export default function PadelPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 space-y-14">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">PADEL AT COURTIER</p>
        <h1 className="text-3xl font-semibold text-white">Cinematic indoor courts engineered for precision play.</h1>
        <p className="text-lg text-muted">
          Six climate-controlled courts with consistent bounce, clear sightlines and quiet acoustics.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.title} className="space-y-2 rounded-sm border border-white/15 bg-white/5 p-4">
            <p className="text-base font-semibold text-white">{feature.title}</p>
            <p className="text-sm text-muted">{feature.copy}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-8 md:grid-cols-2 md:items-start">
        <div className="space-y-3 text-muted">
          <p className="text-sm font-semibold tracking-[0.05em] text-muted">Stay updated as courts and programmes open.</p>
        </div>
        <UpdatesForm />
      </section>
    </main>
  );
}
