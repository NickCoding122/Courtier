type Founder = {
  name: string;
  description: string;
};

const founders: Founder[] = [
  {
    name: "Louis Hart",
    description:
      "UCL graduate with a real estate background and strong institutional relationships.",
  },
  {
    name: "Luca Pini",
    description:
      "Marketing and padel operations specialist with experience in logistics and club activation.",
  },
  {
    name: "Nick Symons",
    description:
      "KCL Mechanical engineering graduate with a first-principles approach to building businesses.",
  },
  {
    name: "Paul Austin",
    description: "Brand designer with experience across leading global brands.",
  },
];

export default function FoundersPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        padding: "120px 1.5rem 160px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "720px",
          margin: "0 auto",
        }}
      >
        <header style={{ textAlign: "center" }}>
          <h1
            style={{
              margin: 0,
              fontSize: "40px",
              letterSpacing: "0.02em",
            }}
          >
            Founders
          </h1>
          <p
            style={{
              marginTop: "0.75rem",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: 1.6,
            }}
          >
            Courtier is built by a small group of operators, investors and designers who
            want a new kind of indoor club for London.
          </p>
        </header>

        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.75rem",
            textAlign: "left",
          }}
        >
          {founders.map((founder) => (
            <div key={founder.name}>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                }}
              >
                {founder.name}
              </div>
              <p
                style={{
                  margin: "0.4rem 0 0",
                  fontSize: "15px",
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}
              >
                {founder.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
