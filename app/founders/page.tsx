export default function FoundersPage() {
  return (
    <main className="founders-page">
      <div className="founders-inner">
        <h1 className="founders-title">Founders</h1>
        <p className="founders-intro">
          Courtier is built by a small group of operators, designers and developers who are
          aligned on building a better standard for indoor sport.
        </p>

        <div className="founders-grid">
          <div className="founder-card">
            <h2 className="founder-name">Louis Hart</h2>
            <p className="founder-text">
              Real estate developer with strong institutional relationships and a track record
              navigating acquisitions, and development strategy.
            </p>
          </div>

          <div className="founder-card">
            <h2 className="founder-name">Luca Pini</h2>
            <p className="founder-text">
              Padel operations and brand activation specialist across logistics, club launches,
              and member-engagement strategy.
            </p>
          </div>

          <div className="founder-card">
            <h2 className="founder-name">Nick Symons</h2>
            <p className="founder-text">
              Mechanical engineering–trained operator with a sell-side background, bringing
              technical discipline and first-principles thinking to venture execution.
            </p>
          </div>

          <div className="founder-card">
            <h2 className="founder-name">Paul Austin</h2>
            <p className="founder-text">
              Senior brand designer with global experience shaping premium identities for leading
              consumer and lifestyle brands.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
