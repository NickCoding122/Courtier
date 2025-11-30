export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "56px" }}>COURTIER</div>
        <div
          style={{
            marginTop: "0.5rem",
            fontSize: "12px",
            fontWeight: 300,
          }}
        >
          A private indoor padel & leisure club.
        </div>
      </div>
    </main>
  );
}
