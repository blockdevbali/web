import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Cek jadwal di Luma",
    description:
      "Lihat event yang akan datang di profil Luma BlockDev Bali. Semua event terdaftar di sana.",
  },
  {
    number: "02",
    title: "Datang ke BlockDev Bali",
    description:
      "Kami ada di Jl. Raya Kampus Udayana No.20, Jimbaran. Bawa laptop dan rasa ingin tahu.",
  },
  {
    number: "03",
    title: "Masuk grup untuk update",
    description:
      "Gabung Telegram atau WhatsApp grup untuk dapat info event, materi, dan diskusi setelahnya.",
  },
];

export default function HowToJoin() {
  return (
    <section className="py-20 bg-[var(--gray-50)]">
      <div className="container-site">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-[var(--gray-600)] uppercase tracking-wider mb-2">
            Cara ikut
          </p>
          <h2 className="text-3xl font-bold text-[var(--black)]">
            Tiga langkah untuk mulai
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col">
              <span className="text-5xl font-extrabold text-[var(--black)] opacity-10 mb-4 leading-none">
                {step.number}
              </span>
              <h3 className="text-lg font-bold text-[var(--black)] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="https://luma.com/user/usr-nI0ywVravzeDDl9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[var(--black)] text-white font-semibold hover:bg-[var(--orange-hover)] transition-colors w-full sm:w-auto"
          >
            Lihat jadwal di Luma
          </Link>
          <Link
            href="/join"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[var(--gray-200)] text-[var(--black)] font-semibold hover:bg-white transition-colors w-full sm:w-auto"
          >
            Gabung grup dulu
          </Link>
        </div>
      </div>
    </section>
  );
}
