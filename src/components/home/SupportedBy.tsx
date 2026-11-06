import Link from "next/link";

// Placeholder — replace with real partner logos when available
// Each item: { name, logoUrl } — logo will be used as <img src={logoUrl} alt={name} />
const partners: { name: string }[] = [
  // { name: "Nama Mitra 1", logoUrl: "/partners/logo1.svg" },
];

export default function SupportedBy() {
  // Hidden until there are real partners
  if (partners.length === 0) return null;

  return (
    <section className="py-16 border-t border-[var(--gray-200)]">
      <div className="container-site">
        <p className="text-center text-sm text-[var(--gray-600)] mb-8">
          Didukung oleh
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {partners.map((p) => (
            <div
              key={p.name}
              className="h-8 px-4 flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
            >
              <span className="text-sm font-medium text-[var(--gray-600)]">
                {p.name}
              </span>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/partners"
            className="text-sm text-[var(--orange)] font-semibold hover:underline"
          >
            Jadi mitra →
          </Link>
        </div>
      </div>
    </section>
  );
}
