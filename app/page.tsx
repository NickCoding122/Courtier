import { Button } from "../components/Button";
import { CourtierImage } from "../components/CourtierImage";
import { courtierImages } from "../lib/images";

export default function HomePage() {
  return (
    <div className="bg-courtier text-white">
      <section className="px-6 pb-10 pt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <p className="text-sm tracking-widest uppercase text-courtier-ash">Indoor Padel & Leisure Club</p>
            <h1 className="text-5xl font-extended tracking-tight">Luxury monochrome padel.</h1>
            <h2 className="text-3xl font-extended tracking-tight mt-2">Design-led. Climate-controlled.</h2>
            <p className="text-courtier-ash mt-4 max-w-md">Precision sport meets crafted hospitality.</p>
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

      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3 my-12">
            <CourtierImage
              src="/images/courtier/courtier-hero-court-action.png"
              alt="Action shot"
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
          <div className="border-t border-soft py-10 text-sm text-muted">
            <a href="/club#craft" className="underline-offset-4 hover:underline">
              Discover our craft and detail collection →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
