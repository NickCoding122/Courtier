import { CourtsOverview } from "../../components/CourtsOverview";
import { UpdatesForm } from "../../components/UpdatesForm";
import { CourtierImage } from "../../components/CourtierImage";
import { courtierImages } from "../../lib/images";

export default function PadelPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      <CourtierImage
        src={courtierImages.indoorCourt.src}
        width={courtierImages.indoorCourt.width}
        height={courtierImages.indoorCourt.height}
        alt={courtierImages.indoorCourt.alt}
        caption="Climate-controlled interiors, tuned lighting, and gallery sightlines across every court."
      />

      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">Padel at Courtier</p>
        <h1 className="text-3xl font-semibold">Cinematic courts engineered for precision play</h1>
        <p className="text-lg text-muted">
          Indoor courts engineered for consistency, hosted by a team of coaches, technicians, and concierges.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-2 md:items-start">
        <div className="space-y-4 text-muted">
          <p className="text-xs uppercase tracking-[0.35em] text-muted">Courts</p>
          <p>
            High-spec flooring, acoustic treatments, and gallery-style lighting ensure the game feels cinematic every session.
            Courts are climate-controlled with curated spectator spots and discreet service bells.
          </p>
        </div>
        <CourtsOverview />
      </section>

      <section className="grid gap-10 md:grid-cols-3">
        <div className="space-y-3 text-muted">
          <p className="text-[11px] uppercase tracking-[0.35em] text-muted">Private Coaching</p>
          <p>
            One-to-one performance coaching and video analysis delivered by international-level coaches.
          </p>
        </div>
        <div className="space-y-3 text-muted">
          <p className="text-[11px] uppercase tracking-[0.35em] text-muted">Clinics</p>
          <p>Group clinics for beginners to advanced players, emphasising tactical awareness and creativity.</p>
        </div>
        <div className="space-y-3 text-muted">
          <p className="text-[11px] uppercase tracking-[0.35em] text-muted">Training Blocks</p>
          <p>
            Multi-week programmes combining padel, conditioning, and recovery sessions for measurable progress.
          </p>
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4 text-muted">
          <p className="text-xs uppercase tracking-[0.35em] text-muted">Events</p>
          <p>
            From social nights and curated doubles to invitation-only leagues and flagship tournaments, Courtier keeps the calendar alive.
          </p>
          <p>Expect collaborations with chefs, designers, and other clubs to evolve padel beyond the court.</p>
        </div>
        <UpdatesForm />
      </section>
    </main>
  );
}
