import { Button } from "../components/Button";
import { CourtierImage } from "../components/CourtierImage";
import { courtierImages } from "../lib/images";

export default function HomePage() {
  return (
    <div className="bg-[#0E0E0E] text-white">
      <section className="px-6 pb-14 pt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Indoor Padel & Leisure Club</p>
            <h1 className="text-5xl font-semibold">Luxury monochrome padel.</h1>
            <h2 className="text-3xl font-medium mt-2">Design-led. Climate-controlled.</h2>
            <p className="text-gray-400 mt-4">Precision sport meets crafted hospitality.</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/membership#register">Join the list</Button>
              <Button href="/padel" variant="ghost">
                Explore padel
              </Button>
            </div>
          </div>
          <div className="lg:pl-8">
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

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3 mt-12">
            <CourtierImage
              src="/images/courtier/courtier-hero-court-action.png"
              alt="Action"
              width={1587}
              height={656}
            />
            <CourtierImage
              src="/images/courtier/courtier-indoor-court.png"
              alt="Indoor court"
              width={1670}
              height={1044}
            />
            <CourtierImage
              src="/images/courtier/courtier-roundel-signage.png"
              alt="Roundel signage"
              width={776}
              height={837}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
