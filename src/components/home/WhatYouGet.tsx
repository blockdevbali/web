import { CalendarDays, Users, Network, Star } from "lucide-react";

const benefits = [
  {
    icon: <CalendarDays size={22} strokeWidth={1.75} />,
    title: "Event rutin, gratis",
    description:
      "Dua event per minggu di Jimbaran: workshop teknis dan meetup komunitas. Tidak perlu bayar, cukup daftar dan hadir.",
  },
  {
    icon: <Users size={22} strokeWidth={1.75} />,
    title: "Mentoring langsung",
    description:
      "Bisa tanya dan diskusi langsung dengan mentor yang aktif membangun, bukan sekadar teori dari slide.",
  },
  {
    icon: <Network size={22} strokeWidth={1.75} />,
    title: "Jaringan builder Bali",
    description:
      "Terhubung dengan developer, mahasiswa, dan founder yang sedang membangun hal nyata di Bali dan seluruh Indonesia.",
  },
  {
    icon: <Star size={22} strokeWidth={1.75} />,
    title: "Akses ke ekosistem nasional",
    description:
      "Sebagai bagian dari BlockDev Indonesia, kamu punya akses ke kursus, bootcamp, dan hackathon di level nasional.",
  },
];

export default function WhatYouGet() {
  return (
    <section className="py-20 bg-[var(--gray-50)]">
      <div className="container-site">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-[var(--gray-600)] uppercase tracking-wider mb-2">
            Kenapa bergabung
          </p>
          <h2 className="text-3xl font-bold text-[var(--black)]">
            Apa yang kamu dapat
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="flex gap-5 p-6 rounded-2xl bg-white border border-[var(--gray-200)]"
            >
              <div className="shrink-0 w-11 h-11 rounded-xl bg-[var(--gray-50)] border border-[var(--gray-200)] text-[var(--black)] flex items-center justify-center">
                {b.icon}
              </div>
              <div>
                <h3 className="font-bold text-[var(--black)] mb-1">{b.title}</h3>
                <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                  {b.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
