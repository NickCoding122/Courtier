import { CourtierImage } from "../../components/CourtierImage";
import { courtierImages } from "../../lib/images";

export default function ClubPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      <CourtierImage
        src={courtierImages.roundelSignage.src}
        width={courtierImages.roundelSignage.width}
        height={courtierImages.roundelSignage.height}
        alt={courtierImages.roundelSignage.alt}
        caption="Refined signage and wayfinding guide members through the space."
      />

      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">The Club</p>
        <h1 className="text-3xl font-semibold">A residence-like club for performance and pause</h1>
        <p className="text-lg text-muted">
          Gym, recovery, lounge, and concierge experiences designed like a private residence.
        </p>
      </section>

      <section className="space-y-5 text-muted">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">Gym & Training</p>
        <p>
          Strength, conditioning, and mobility suites with bespoke equipment, private coaching pods, and data-led programming.
          Expect Olympic lifting platforms, reformer pilates, and sprint lanes framed by gallery lighting.
        </p>
      </section>

      <section className="space-y-5 text-muted">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">Recovery</p>
        <p>
          Thermal circuits with saunas, cold plunges, infrared suites, and treatment rooms for massage and physio. Soft lighting,
          stone finishes, and fragrance cues make recovery a ritual rather than a routine.
        </p>
      </section>

      <section className="space-y-5 text-muted">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">Lounge & Social</p>
        <p>
          Members' lounge with bar, work-friendly salons, and soundtracked evenings. Programming spans chef residencies, design
          conversations, screenings, and curated travel.
        </p>
      </section>
    </main>
  );
}
