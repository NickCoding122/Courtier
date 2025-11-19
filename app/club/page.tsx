import { Section } from "../../components/Section";

export default function ClubPage() {
  return (
    <div className="bg-black text-white">
      <Section className="border-b border-white/10 text-center">
        <p className="text-4xl tracking-[0.5em]">The Club</p>
        <p className="mt-6 text-white/70">
          Gym, recovery, lounge, and concierge experiences designed like a private residence.
        </p>
      </Section>

      <Section className="border-b border-white/10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Gym & Training</p>
          <p className="text-white/80">
            Strength, conditioning, and mobility suites with bespoke equipment, private coaching pods, and data-led
            programming. Expect Olympic lifting platforms, reformer pilates, and sprint lanes framed by gallery lighting.
          </p>
        </div>
      </Section>

      <Section className="border-b border-white/10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Recovery</p>
          <p className="text-white/80">
            Thermal circuits with saunas, cold plunges, infrared suites, and treatment rooms for massage and physio. Soft
            lighting, stone finishes, and fragrance cues make recovery a ritual rather than a routine.
          </p>
        </div>
      </Section>

      <Section className="border-b border-white/10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Lounge & Social</p>
          <p className="text-white/80">
            Members' lounge with bar, work-friendly salons, and soundtracked evenings. Programming spans chef residencies,
            design conversations, screenings, and curated travel.
          </p>
        </div>
      </Section>
    </div>
  );
}
