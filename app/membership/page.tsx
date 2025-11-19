import { MembershipForm } from "../../components/MembershipForm";
import { Section } from "../../components/Section";

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
    <div className="bg-black text-white">
      <Section className="border-b border-white/10 text-center">
        <p className="text-4xl tracking-[0.5em]">Membership at COURTIER</p>
        <p className="mt-6 text-white/70">
          Membership is curated, limited, and for those who value refined environments as much as competitive play.
        </p>
      </Section>

      <Section className="border-b border-white/10">
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.title} className="border border-white/15 p-6">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">{tier.title}</p>
              <p className="mt-4 text-lg text-white">{tier.price}</p>
              <ul className="mt-6 space-y-2 text-sm text-white/70">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <span className="mt-2 h-px w-5 bg-[#C9B37E]"></span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-b border-white/10">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">Register Interest</p>
            <p className="text-white/80">
              Tell us about your interest in COURTIER. Our membership team will follow up with availability and a private
              preview of the club experience.
            </p>
          </div>
          <MembershipForm />
        </div>
      </Section>
    </div>
  );
}
