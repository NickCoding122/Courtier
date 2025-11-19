import { CourtsOverview } from "../../components/CourtsOverview";
import { Section } from "../../components/Section";
import { UpdatesForm } from "../../components/UpdatesForm";

export default function PadelPage() {
  return (
    <div className="bg-black text-white">
      <Section className="border-b border-white/10 text-center">
        <p className="text-4xl tracking-[0.5em]">Padel at COURTIER</p>
        <p className="mt-6 text-white/70">
          Indoor courts engineered for consistency, hosted by a team of coaches, technicians, and concierges.
        </p>
      </Section>

      <Section className="border-b border-white/10">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4 text-white/80">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">Courts</p>
            <p>
              High-spec flooring, acoustic treatments, and gallery-style lighting ensure the game feels cinematic every
              session. Courts are climate-controlled with curated spectator spots and discreet service bells.
            </p>
          </div>
          <CourtsOverview />
        </div>
      </Section>

      <Section className="border-b border-white/10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Private Coaching</p>
            <p className="mt-4 text-white/70">
              One-to-one performance coaching and video analysis delivered by international-level coaches.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Clinics</p>
            <p className="mt-4 text-white/70">
              Group clinics for beginners to advanced players, emphasising tactical awareness and creativity.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Training Blocks</p>
            <p className="mt-4 text-white/70">
              Multi-week programmes combining padel, conditioning, and recovery sessions for measurable progress.
            </p>
          </div>
        </div>
      </Section>

      <Section className="border-b border-white/10">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4 text-white/80">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">Events</p>
            <p>
              From social nights and curated doubles to invitation-only leagues and flagship tournaments, COURTIER keeps the
              calendar alive.
            </p>
            <p>
              Expect collaborations with chefs, designers, and other clubs to evolve padel beyond the court.
            </p>
          </div>
          <UpdatesForm />
        </div>
      </Section>
    </div>
  );
}
