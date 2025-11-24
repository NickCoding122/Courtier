import { CourtsOverview } from "../../components/CourtsOverview";
import { CourtierImage } from "../../components/CourtierImage";
import { courtierImages } from "../../lib/images";

export default function PadelPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-16 px-6 py-16">
      <CourtierImage
        src={courtierImages.indoorCourt.src}
        width={courtierImages.indoorCourt.width}
        height={courtierImages.indoorCourt.height}
        alt={courtierImages.indoorCourt.alt}
        caption="Climate-controlled interiors, tuned lighting, and gallery sightlines across every court."
      />

      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">Padel at Courtier</p>
        <h1 className="font-extended text-5xl font-semibold leading-tight">Cinematic courts engineered for precision play.</h1>
        <p className="max-w-3xl text-base text-muted">Climate control, tuned lighting, and hosts who keep every session running to the minute.</p>
      </section>

      <section className="grid gap-10 md:grid-cols-2 md:items-start">
        <div className="space-y-4 text-muted">
          <p className="text-xs uppercase tracking-[0.35em] text-muted">Courts</p>
          <p>High-spec flooring, acoustic treatments, and gallery-style lighting keep the game sharp and cinematic.</p>
        </div>
        <CourtsOverview />
      </section>

      <section className="grid gap-10 md:grid-cols-3">
        <div className="space-y-3 text-muted">
          <p className="text-xs uppercase tracking-[0.35em] text-muted">Private Coaching</p>
          <p>One-to-one sessions with video analysis and notes sent after every booking.</p>
        </div>
        <div className="space-y-3 text-muted">
          <p className="text-xs uppercase tracking-[0.35em] text-muted">Clinics</p>
          <p>Small-format clinics that prioritise tactical awareness and controlled creativity.</p>
        </div>
        <div className="space-y-3 text-muted">
          <p className="text-xs uppercase tracking-[0.35em] text-muted">Training Blocks</p>
          <p>Multi-week programming that pairs padel, conditioning, and recovery for measurable progress.</p>
        </div>
      </section>
    </main>
  );
}
