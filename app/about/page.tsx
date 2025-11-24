import { Card } from "../../components/Card";
import { CourtierImage, courtierImages } from "../../components/CourtierImage";
import { Section } from "../../components/Section";

const principles = ["Performance First", "Design-Led Spaces", "Curated Community"];

const founders = [
  { name: "Alexandra Court", role: "Founder & Creative Director" },
  { name: "Marcelo Rey", role: "Sporting Director" },
  { name: "Isla Bennett", role: "Operations" },
];

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      <Section className="border-b border-white/10 text-center">
        <p className="text-4xl tracking-[0.5em]">About COURTIER</p>
        <p className="mt-6 text-lg leading-relaxed text-white/80">
          A new house for padel that pairs performance with design, craft, and community.
        </p>
      </Section>

      <Section className="border-b border-white/10">
        <div className="space-y-4 text-lg leading-relaxed text-white/80">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Story</p>
          <p>
            COURTIER was born from equal parts obsession with padel and a desire for environments that feel as considered as
            the sport itself. We set out to design a club where energy, architecture, and service are choreographed.
          </p>
        </div>
      </Section>

      <Section className="border-b border-white/10">
        <div className="mx-auto max-w-5xl">
          <CourtierImage
            src={courtierImages.indoorCourt.src}
            width={courtierImages.indoorCourt.width}
            height={courtierImages.indoorCourt.height}
            alt="Atmospheric indoor COURTIER court"
            caption="Monochrome interiors with deliberate negative space and gallery lighting."
          />
        </div>
      </Section>

      <Section className="border-b border-white/10">
        <p className="text-sm uppercase tracking-[0.4em] text-white/60">Philosophy</p>
        <ul className="mt-6 space-y-3 text-lg text-[#CCCCCC]">
          {principles.map((principle) => (
            <li key={principle} className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9B37E]"></span>
              <span>{principle}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-b border-white/10">
        <div className="space-y-4 text-lg leading-relaxed text-white/80">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Future</p>
          <p>
            After launching the flagship in South-East London, COURTIER will scale to other European cities and resort
            destinations, each with its own expression but the same meticulous feel.
          </p>
        </div>
      </Section>

      <Section>
        <p className="text-sm uppercase tracking-[0.4em] text-white/60">Founders</p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {founders.map((founder) => (
            <Card key={founder.name} title={founder.name}>
              <p className="text-base text-white/70">{founder.role}</p>
              <p className="mt-4 text-sm text-[#CCCCCC]">Biography coming soon.</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
