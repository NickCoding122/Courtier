export default function JoinUs() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "520px" }}>
        <h1
          style={{
            margin: 0,
            fontSize: "40px",
            letterSpacing: "0.02em",
          }}
        >
          Join Us
        </h1>
        <p
          style={{
            marginTop: "0.75rem",
            marginBottom: "1.5rem",
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: 1.5,
          }}
        >
          Courtier is a private, invitation-led indoor padel & wellness club.
          We are building our first location in London.
        </p>
        <a
          href="mailto:info@courtierclub.com?subject=Courtier%20-%20Register%20Interest"
          style={{
            display: "inline-block",
            padding: "0.75rem 1.25rem",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: "999px",
            fontSize: "14px",
            fontWeight: 500,
            background: "rgba(255, 255, 255, 0.03)",
          }}
        >
          Register Interest
        </a>
      </div>
    </main>
  );
}
