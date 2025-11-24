import { MembershipForm } from "../../components/MembershipForm";

export default function RegisterPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 space-y-10">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">REGISTER INTEREST</p>
        <h1 className="text-3xl font-semibold text-white">Request an invitation to preview Courtier.</h1>
        <p className="text-lg text-muted">
          Tell us how you play and we’ll share membership availability and next steps.
        </p>
      </section>

      <MembershipForm />
    </main>
  );
}
