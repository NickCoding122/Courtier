import { Card } from "../../components/Card";
import { CourtierImage } from "../../components/CourtierImage";
import { courtierImages } from "../../lib/images";

const principles = ["Performance First", "Design-Led Spaces", "Curated Community"];

const founders = [
  { name: "Alexandra Court", role: "Founder & Creative Director" },
  { name: "Marcelo Rey", role: "Sporting Director" },
  { name: "Isla Bennett", role: "Operations" },
];

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      <CourtierImage
        src={courtierImages.heroRacket.src}
        width={courtierImages.heroRacket.width}
        height={courtierImages.heroRacket.height}
        alt={courtierImages.heroRacket.alt}
        caption="A monochrome emblem of performance and craft that anchors the Courtier aesthetic."
      />

      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">About Courtier</p>
        <h1 className="text-3xl font-semibold">A new house for padel that pairs performance with design</h1>
        <p className="text-lg text-muted">
          A new house for padel that pairs performance with design, craft, and community.
        </p>
      </section>

      <section className="space-y-4 text-muted">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">Story</p>
        <p>
          Courtier was born from equal parts obsession with padel and a desire for environments that feel as considered as the
          sport itself. We set out to design a club where energy, architecture, and service are choreographed.
        </p>
      </section>

      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">Philosophy</p>
        <ul className="mt-3 space-y-3 text-lg text-muted">
          {principles.map((principle) => (
            <li key={principle} className="flex items-center gap-3">
              <span className="h-px w-8 bg-white/50"></span>
              <span>{principle}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4 text-muted">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">Future</p>
        <p>
          After launching the flagship in South-East London, Courtier will scale to other European cities and resort destinations,
          each with its own expression but the same meticulous feel.
        </p>
      </section>

      <section className="space-y-6">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">Founders</p>
        <div className="grid gap-6 md:grid-cols-3">
          {founders.map((founder) => (
            <Card key={founder.name} title={founder.name}>
              <p className="text-base text-white">{founder.role}</p>
              <p className="mt-4 text-sm text-muted">Biography coming soon.</p>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
