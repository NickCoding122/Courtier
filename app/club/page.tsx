import { CourtierImage } from "../../components/CourtierImage";
import { courtierImages } from "../../lib/images";

const craftImages = [
  courtierImages.merchBottle,
  courtierImages.merchCap,
  courtierImages.merchTote,
];

export default function ClubPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-16 px-6 py-16">
      <CourtierImage
        src={courtierImages.roundelSignage.src}
        width={courtierImages.roundelSignage.width}
        height={courtierImages.roundelSignage.height}
        alt={courtierImages.roundelSignage.alt}
        caption="Refined signage and wayfinding guide members through the space."
      />

      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">The Club</p>
        <h1 className="font-extended text-5xl font-semibold leading-tight">A residence-like club for performance and pause.</h1>
        <p className="max-w-3xl text-base text-muted">Edited training, recovery, and lounge spaces with the ease of a private residence.</p>
      </section>

      <section className="space-y-5 text-muted">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">Gym & Training</p>
        <p>Strength, conditioning, and mobility suites with bespoke equipment and private coaching pods.</p>
      </section>

      <section className="space-y-5 text-muted">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">Recovery</p>
        <p>Thermal circuits, infrared suites, and treatment rooms that make recovery feel choreographed.</p>
      </section>

      <section className="space-y-5 text-muted">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">Lounge & Social</p>
        <p>Members' lounge with work-friendly salons, a refined bar, and programming that stays intentional.</p>
      </section>

      <section id="craft" className="space-y-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-muted">Craft & Detail</p>
            <h2 className="mt-3 font-extended text-3xl font-semibold text-white">Objects and apparel, refined for the Courtier member</h2>
          </div>
          <p className="max-w-md text-base text-muted">A monochrome collection with tactile finishes, engineered for on- and off-court rituals.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {craftImages.map((image) => (
            <CourtierImage
              key={image.src}
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
              imageClassName="h-[280px]"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
