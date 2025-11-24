import { Button } from "../components/Button";
import { CourtierImage } from "../components/CourtierImage";
import { courtierImages } from "../lib/images";

export default function HomePage() {
  return (
    <div className="bg-[#0E0E0E] text-white">
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Courtier / London</p>
            <h1 className="font-extended text-5xl font-semibold leading-tight">Indoor padel, distilled.</h1>
            <p className="max-w-xl text-base text-gray-300">
              Calm courts, concierge hospitality. We strip away clutter so the experience stays precise.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/membership#register">Join the list</Button>
              <Button href="/padel" variant="ghost">
                Explore the club
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
              {["Courts", "Private Coaching", "Lounge & Social"].map((item) => (
                <div key={item} className="rounded-xl border border-white/15 bg-white/5 p-4 text-sm text-gray-200">
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

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {[
            {
              title: "Courts",
              copy: "Cinematic, climate-controlled courts tuned for clean bounce and perfect sightlines.",
            },
            {
              title: "Private Coaching",
              copy: "Coaches and hosts manage your session from booking to post-play notes.",
            },
            {
              title: "Lounge & Social",
              copy: "Quiet salons, edited playlists, and programming that keeps the calendar sharp.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-white/15 bg-white/5 p-6 text-gray-200">
              <p className="text-xs uppercase tracking-[0.35em] text-gray-400">{item.title}</p>
              <p className="mt-4 text-base leading-relaxed">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
