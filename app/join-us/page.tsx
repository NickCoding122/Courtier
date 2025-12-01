import Link from "next/link";

export default function JoinUsPage() {
  return (
    <main className="join-page">
      <div className="join-inner">
        <h1 className="join-title">Join Us</h1>

        <p className="join-text">
          We’re building Courtier because indoor sport deserves better than recycled warehouses and temporary structures.
        </p>
        <p className="join-text">
          Our goal is simple: create a purpose-built club with the height, space and atmosphere that actually elevates the game — not just houses it.
        </p>
        <p className="join-text">
          Our first flagship opens in 2026 with a limited founding membership.
        </p>

        <Link
          href="mailto:info@courtierclub.com?subject=Courtier%20-%20Register%20Interest"
          className="join-button"
        >
          Register Interest
        </Link>
      </div>
    </main>
  );
}
