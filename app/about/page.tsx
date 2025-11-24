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
    <main className="mx-auto max-w-6xl space-y-16 px-6 py-16">
      <CourtierImage
        src={courtierImages.padelRacketRoundel.src}
        width={courtierImages.padelRacketRoundel.width}
        height={courtierImages.padelRacketRoundel.height}
        alt={courtierImages.padelRacketRoundel.alt}
        caption="A monochrome emblem of performance and craft that anchors the Courtier aesthetic."
      />

      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">About Courtier</p>
        <h1 className="font-extended text-5xl font-semibold leading-tight">A new house for padel that pairs performance with design.</h1>
        <p className="max-w-3xl text-base text-muted">Every detail is edited for clarity—from the architecture to the programming.</p>
      </section>

      <section className="space-y-4 text-muted">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">Story</p>
        <p>Born from equal parts obsession with padel and design, the club choreographs energy, architecture, and service.</p>
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
        <p>Flagship first, then considered expansions to other cities—each with its own expression but the same meticulous feel.</p>
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
