import { Button } from "../components/Button";
import { CourtierImage } from "../components/CourtierImage";
import { courtierImages } from "../lib/images";

const galleryImages = [
  courtierImages.heroCourtAction,
  courtierImages.indoorCourt,
  courtierImages.roundelSignage,
];

const craftImages = [
  courtierImages.merchBottle,
  courtierImages.merchCap,
  courtierImages.merchTote,
  courtierImages.merchHoodie,
  courtierImages.padelRacketRoundel,
];

export default function HomePage() {
  return (
    <div className="bg-courtier text-white">
      <section className="px-6 pb-10 pt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.45em] text-muted">Indoor Padel & Leisure Club</p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Luxury, monochrome padel set within design-led, climate-controlled courts.
            </h1>
            <p className="max-w-xl text-lg text-muted">
              Courtier blends precision sport with crafted hospitality. Expect cinematic courts, discreet service, and an
              intimate membership that values space to play and room to breathe.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/membership#register">Join the list</Button>
              <Button href="/padel" variant="ghost">
                Explore padel
              </Button>
            </div>
          </div>
          <div className="lg:pl-6">
            <CourtierImage
              src={courtierImages.heroRacket.src}
              width={courtierImages.heroRacket.width}
              height={courtierImages.heroRacket.height}
              alt={courtierImages.heroRacket.alt}
              caption="Precision-engineered padel equipment, crafted exclusively for Courtier."
            />
          </div>
        </div>
      </section>

      <section className="border-t border-soft bg-courtier px-6 py-14">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="flex items-baseline justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-muted">Monochrome signatures</p>
              <h2 className="mt-3 text-2xl font-semibold">Spaces composed with negative space and light</h2>
            </div>
            <span className="text-sm text-muted">Gallery</span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {galleryImages.map((image) => (
              <CourtierImage
                key={image.src}
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-soft bg-courtier px-6 py-16">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-muted">Craft & Detail</p>
              <h2 className="mt-3 text-2xl font-semibold">Objects and apparel, refined for the Courtier member</h2>
            </div>
            <p className="max-w-md text-sm text-muted">
              A monochrome collection with tactile finishes, engineered for on- and off-court rituals.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {craftImages.map((image) => (
              <CourtierImage
                key={image.src}
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
