import { Card } from "../../components/Card";
import { MembershipForm } from "../../components/MembershipForm";
import { CourtierImage } from "../../components/CourtierImage";
import { courtierImages } from "../../lib/images";

const tiers = [
  {
    title: "Player",
    price: "From £200 / month",
    benefits: [
      "Unlimited off-peak padel access",
      "Member match-making",
      "Performance programming",
      "Guest passes each month",
      "Locker & amenities",
    ],
  },
  {
    title: "Club",
    price: "From £300 / month",
    benefits: [
      "Anytime court booking",
      "Gym & training floor access",
      "Recovery suite privileges",
      "Priority event invitations",
      "Concierge booking",
      "Complimentary racquet storage",
    ],
  },
  {
    title: "Founding",
    price: "From £450 / month",
    benefits: [
      "Earliest booking windows",
      "Private host & concierge",
      "Guest lounge invitations",
      "Annual retreat access",
      "Custom coaching plan",
      "Legacy pricing guarantee",
    ],
  },
];

export default function MembershipPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-16 px-6 py-16">
      <CourtierImage
        src={courtierImages.heroCourtAction.src}
        width={courtierImages.heroCourtAction.width}
        height={courtierImages.heroCourtAction.height}
        alt={courtierImages.heroCourtAction.alt}
        caption="Movement captured in monochrome; the rhythm of play defines the Courtier experience."
      />

      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">Membership at Courtier</p>
        <h1 className="font-extended text-5xl font-semibold leading-tight">Curated access for those who value space and precision.</h1>
        <p className="max-w-3xl text-base text-muted">
          Access is intentionally limited. Every tier centres on edited courts, attentive hosts, and space to play without distraction.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <Card key={tier.title} title={tier.title} className="min-h-[260px]">
            <div className="space-y-4">
              <p className="text-xl text-white">{tier.price}</p>
              <ul className="space-y-2 text-base text-muted">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <span className="mt-2 h-px w-5 bg-white/40"></span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </section>

      <section className="grid gap-10 md:grid-cols-2" id="register">
        <div className="space-y-4 text-muted">
          <p className="text-xs uppercase tracking-[0.35em] text-muted">Register Interest</p>
          <p>Share your details and the membership team will follow up with availability and a private preview.</p>
        </div>
        <MembershipForm />
      </section>
    </main>
  );
}
