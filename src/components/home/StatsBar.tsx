const stats = [
  { value: "15K+", label: "Anggota komunitas", note: "nasional" },
  { value: "100+", label: "Events digelar", note: "nasional" },
  { value: "800+", label: "Solusi inovatif", note: "nasional" },
];

export default function StatsBar() {
  return (
    <section className="bg-[var(--black)] py-10">
      <div className="container-site">
        <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-3xl md:text-4xl font-extrabold text-white">
                {stat.value}
              </span>
              <span className="text-sm text-gray-400">{stat.label}</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider">
                {stat.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
