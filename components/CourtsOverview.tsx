const courts = ["Court 1", "Court 2", "Court 3", "Court 4", "Court 5", "Court 6"];

export function CourtsOverview() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {courts.map((court) => (
        <div key={court} className="border border-white/20 p-4 text-center text-xs uppercase tracking-[0.2em] text-white/70">
          {court}
        </div>
      ))}
    </div>
  );
}
