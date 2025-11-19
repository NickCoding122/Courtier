import { Button } from "../components/Button";
import { Section } from "../components/Section";

const highlights = [
  "Indoor climate-controlled courts",
  "Performance gym & conditioning",
  "Recovery spa and therapies",
  "Members' lounge & bar",
  "Elite coaching & concierge",
];

const experiences = [
  {
    title: "Padel",
    copy: "Six indoor courts engineered for precision play with pro-level glass, lighting, and courtside service.",
  },
  {
    title: "Training",
    copy: "Strength labs, coaching, and data-led programming for players and guests seeking progression.",
  },
  {
    title: "Social",
    copy: "Members' lounge, bar, and curated calendar of dinners, talks, and invitations beyond the court.",
  },
];

export default function HomePage() {
  return (
    <div className="bg-black text-white">
      <Section className="flex min-h-[90vh] items-center justify-center text-center">
        <div className="space-y-8">
          <p className="text-4xl tracking-[0.6em] md:text-6xl">COURTIER</p>
          <p className="text-sm uppercase tracking-[0.5em] text-white/70">
            Indoor Padel & Leisure Club
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/membership#register">Register Interest</Button>
            <Button href="#vision" variant="ghost">
              View Club Vision
            </Button>
          </div>
        </div>
      </Section>

      <Section id="vision" className="border-t border-white/10">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-4 text-white/80">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">
              What is COURTIER?
            </p>
            <p>
              COURTIER is a modern interpretation of the padel club — an indoor flagship for those who expect precision in
              sport and refinement in hospitality.
            </p>
            <p>
              Every detail is curated: climate-controlled courts, bespoke locker rooms, recovery suites, and a lounge that
              feels closer to a design gallery than a gym.
            </p>
            <p>
              Membership is limited to preserve atmosphere and access, forming a community united by performance, culture,
              and a shared pace of life.
            </p>
          </div>
          <div className="border border-white/15 p-6">
            <ul className="space-y-3 text-white/70">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-0.5 w-6 bg-[#C9B37E]"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="border-t border-white/10">
        <div className="space-y-8">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Club Experience</p>
          <div className="grid gap-6 md:grid-cols-3">
            {experiences.map((experience) => (
              <div
                key={experience.title}
                className="border border-white/15 p-6 transition hover:border-white/40"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">{experience.title}</p>
                <p className="mt-4 text-white/80">{experience.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-white/10">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">
              Founding Memberships
            </p>
            <p className="text-white/80">
              Early members receive priority booking, dedicated concierge services, and curated invitations while we
              complete the flagship.
            </p>
            <p className="text-white/60">
              Limited founding memberships will define culture, operations, and the programme of the club.
            </p>
            <Button href="/membership#register" variant="outline">
              Join Founding List
            </Button>
          </div>
          <div className="space-y-4 text-white/70">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">Location & Vision</p>
            <p>First flagship planned for South-East London. Additional city and resort destinations to follow.</p>
            <p>
              COURTIER blends sport, wellness, and social culture — every site will be a considered extension of the
              founding space.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
