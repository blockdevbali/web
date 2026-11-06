import Link from "next/link";
import { GraduationCap, Code2, Building2 } from "lucide-react";

const audiences = [
  {
    icon: <GraduationCap size={28} strokeWidth={1.75} />,
    title: "Mahasiswa & pemula",
    description:
      "Baru mulai belajar blockchain atau AI? Tidak masalah. Event kami dirancang ramah pemula, datang dengan rasa ingin tahu dan pulang dengan skill baru.",
    cta: "Lihat event",
    href: "/events",
  },
  {
    icon: <Code2 size={28} strokeWidth={1.75} />,
    title: "Developer & freelancer",
    description:
      "Sudah punya dasar teknis? Tingkatkan skill, temukan kolaborator, atau jadilah pembicara di event berikutnya.",
    cta: "Lihat semua event",
    href: "/events",
  },
  {
    icon: <Building2 size={28} strokeWidth={1.75} />,
    title: "Founder & pelaku usaha",
    description:
      "Sedang membangun startup atau produk berbasis teknologi baru? Komunitas ini adalah tempat menemukan co-founder, talent, dan mentor.",
    cta: "Kenali komunitas",
    href: "/about",
  },
];

export default function ForWho() {
  return (
    <section className="py-20 bg-white">
      <div className="container-site">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-[var(--gray-600)] uppercase tracking-wider mb-2">
            Untuk siapa
          </p>
          <h2 className="text-3xl font-bold text-[var(--black)]">
            BlockDev Bali untuk kamu
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="flex flex-col p-6 rounded-2xl border border-[var(--gray-200)] hover:border-[var(--black)] transition-colors group"
            >
              <div className="text-[var(--black)] mb-4">{a.icon}</div>
              <h3 className="text-lg font-bold text-[var(--black)] mb-2">
                {a.title}
              </h3>
              <p className="text-sm text-[var(--gray-600)] leading-relaxed flex-1 mb-5">
                {a.description}
              </p>
              <Link
                href={a.href}
                className="text-sm font-semibold text-[var(--black)] hover:underline"
              >
                {a.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
