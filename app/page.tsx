import { Button } from "../components/Button";
import { CourtierImage } from "../components/CourtierImage";
import { courtierImages } from "../lib/images";

export default function HomePage() {
  return (
    <div className="bg-[#0E0E0E] text-white">
      <section className="px-6 pb-14 pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Courtier / London</p>
            <h1 className="font-extended text-5xl font-semibold leading-tight sm:text-6xl">Indoor padel, distilled.</h1>
            <p className="max-w-xl text-lg text-gray-400">
              Calm, cinematic courts paired with concierge-level hospitality. We strip away clutter so the experience stays
              precise.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/membership#register">Join the list</Button>
              <Button href="/padel" variant="ghost">
                Explore the club
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
              {["Climate-controlled courts", "Concierge booking", "Design-first social spaces"].map((item) => (
                <div key={item} className="border border-white/15 bg-white/5 p-4 text-sm text-gray-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:pl-8">
            <CourtierImage
              src={courtierImages.indoorCourt.src}
              width={courtierImages.indoorCourt.width}
              height={courtierImages.indoorCourt.height}
              alt={courtierImages.indoorCourt.alt}
              caption="Monochrome interiors, tuned lighting, and gallery sightlines across every court."
              priority
              quality={98}
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">
          <div className="lg:w-1/2">
            <CourtierImage
              src={courtierImages.heroRacket.src}
              width={courtierImages.heroRacket.width}
              height={courtierImages.heroRacket.height}
              alt={courtierImages.heroRacket.alt}
              caption="Signature equipment engineered with the same precision as our courts."
              quality={98}
            />
          </div>
          <div className="lg:w-1/2 space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-gray-400">The Courtier read</p>
            <h2 className="font-extended text-3xl font-semibold leading-tight">Less noise, more clarity.</h2>
            <p className="text-lg text-gray-400">
              We focus on what matters: consistent bounce, expert hosts, elevated amenities, and a members-first calendar.
              Every detail is edited until it feels inevitable.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {["Performance coaching with video analysis", "Private lounges and recovery rituals", "Invitation-only match play", "Design-led merchandise you actually want"]
                .map((item) => (
                  <div key={item} className="border border-white/15 bg-white/5 p-4 text-sm text-gray-200">
                    {item}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
