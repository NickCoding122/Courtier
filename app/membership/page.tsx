import { Card } from "../../components/Card";
import { MembershipForm } from "../../components/MembershipForm";

const tiers = [
  {
    title: "PLAYER",
    price: "From £200 / month",
    benefits: ["Off-peak court access", "Match-making", "Locker & amenities"],
  },
  {
    title: "CLUB",
    price: "From £300 / month",
    benefits: ["Anytime court booking", "Gym & training floor", "Concierge booking"],
  },
  {
    title: "FOUNDING",
    price: "From £450 / month",
    benefits: ["Earliest booking windows", "Private host", "Legacy pricing assurance"],
  },
];

export default function MembershipPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 space-y-16">
      <section className="space-y-4 text-center md:text-left">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">MEMBERSHIP AT COURTIER</p>
        <h1 className="text-3xl font-semibold text-white">
          Curated access for those who value space and precision.
        </h1>
        <p className="text-lg text-muted">
          Membership is limited and shaped around people who care how their club feels, not just where they play.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <Card key={tier.title} title={tier.title} className="backdrop-blur text-white">
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
        <div className="space-y-3 text-muted">
          <p className="text-xs uppercase tracking-[0.35em] text-muted">Register Interest</p>
          <p>Share your details and we’ll follow up with availability and a private preview of the club.</p>
        </div>
        <MembershipForm />
      </section>
    </main>
  );
}
