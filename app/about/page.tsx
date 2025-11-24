import { Card } from "../../components/Card";

const principles = [
  {
    title: "Performance first",
    copy: "Courts, coaching and programming built around measurable progress.",
  },
  {
    title: "Design-led spaces",
    copy: "Monochrome interiors, calm lighting and generous negative space.",
  },
  {
    title: "Curated community",
    copy: "Limited membership to keep the club focused and familiar.",
  },
];

const founders = [
  { name: "Alexandra Court", role: "Founder & Creative Director" },
  { name: "Marcelo Rey", role: "Sporting Director" },
  { name: "Isla Bennett", role: "Operations" },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 space-y-14">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">ABOUT COURTIER</p>
        <h1 className="text-3xl font-semibold text-white">A new house for padel that pairs performance with design.</h1>
        <p className="text-lg text-muted">
          Courtier is built for people who care how a club feels as much as how it plays. We pair precise indoor courts with
          design-led spaces, so every visit feels edited, not busy.
        </p>
      </section>

      <section className="space-y-4 text-muted">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">Principles</p>
        <div className="space-y-3">
          {principles.map((principle) => (
            <div key={principle.title} className="space-y-1">
              <p className="text-lg font-semibold text-white">{principle.title}</p>
              <p className="text-base text-muted">{principle.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3 text-muted">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">Future</p>
        <p>After the first club in South-East London, Courtier will grow slowly into other cities and resort destinations.</p>
      </section>

      <section className="space-y-6">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">Founders</p>
        <div className="grid gap-6 md:grid-cols-3">
          {founders.map((founder) => (
            <Card key={founder.name} title={founder.name}>
              <p className="text-base text-white">{founder.role}</p>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
