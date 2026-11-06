import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Wrench, MessageCircle, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About | BlockDev Bali",
  description:
    "BlockDev Bali adalah chapter lokal komunitas BlockDev Indonesia, fokus pada blockchain, AI, dan emerging technology di Bali.",
};

const team = [
  {
    name: "Wayan Phantom Megaditha",
    role: "Lead BlockDev Bali",
    initials: "WP",
  },
  {
    name: "Putu Gde Trahwidhi",
    role: "Co-lead BlockDev Bali",
    initials: "PG",
  },
];

const whatWeDo = [
  {
    icon: <CalendarDays size={20} strokeWidth={1.75} />,
    title: "Event dua kali seminggu",
    desc: "Workshop dan meetup rutin, gratis, di berbagai wilayah Bali.",
  },
  {
    icon: <Wrench size={20} strokeWidth={1.75} />,
    title: "Workshop praktik",
    desc: "Belajar langsung bangun sesuatu, bukan sekadar teori.",
  },
  {
    icon: <MessageCircle size={20} strokeWidth={1.75} />,
    title: "Mentoring",
    desc: "Diskusi langsung dengan mentor yang aktif di industri.",
  },
  {
    icon: <Globe size={20} strokeWidth={1.75} />,
    title: "Akses nasional",
    desc: "Bootcamp dan hackathon BlockDev Indonesia.",
  },
];

const values = [
  {
    title: "Terbuka untuk pemula",
    description:
      "Kamu tidak harus sudah ahli. Komunitas ini dirancang agar orang yang baru mulai pun bisa belajar dan berkontribusi.",
  },
  {
    title: "Saling menghargai",
    description:
      "Kami menjaga lingkungan yang aman, inklusif, dan bebas dari diskriminasi. Semua orang diterima apa adanya.",
  },
  {
    title: "Edukasi, bukan investasi",
    description:
      "Konten kami bersifat edukasi dan teknis. Bukan ajakan investasi, bukan janji keuntungan. Blockchain adalah teknologi, bukan tawaran finansial.",
  },
];

export default function AboutPage() {
  return (
    <main className="py-16">
      <div className="container-site">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold text-[var(--gray-600)] uppercase tracking-wider mb-3">
            Tentang kami
          </p>
          <h1 className="text-4xl font-extrabold text-[var(--black)] mb-5 leading-tight">
            Membangun komunitas builder di Bali
          </h1>
          <p className="text-lg text-[var(--gray-600)] leading-relaxed mb-4">
            BlockDev Bali adalah chapter lokal dari komunitas BlockDev Indonesia,
            jaringan builder yang berfokus pada blockchain, AI, dan emerging
            technology yang terus berkembang di seluruh Indonesia.
          </p>
          <p className="text-lg text-[var(--gray-600)] leading-relaxed">
            Kami hadir di Bali untuk menjadi jembatan antara mahasiswa,
            developer, dan praktisi teknologi di Bali dengan ekosistem builder
            yang lebih besar.
          </p>
        </div>

        {/* What we do */}
        <section className="mb-20 p-8 rounded-2xl bg-[var(--gray-50)] border border-[var(--gray-200)]">
          <h2 className="text-2xl font-bold text-[var(--black)] mb-8">
            Apa yang kami lakukan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {whatWeDo.map((item) => (
              <div key={item.title}>
                <div className="w-9 h-9 rounded-lg bg-white border border-[var(--gray-200)] flex items-center justify-center text-[var(--black)] mb-3">
                  {item.icon}
                </div>
                <h3 className="font-bold text-[var(--black)] mb-1">{item.title}</h3>
                <p className="text-sm text-[var(--gray-600)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-[var(--black)] mb-8">Tim</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl">
            {team.map((member) => (
              <div
                key={member.name}
                className="p-5 rounded-2xl border border-[var(--gray-200)] bg-white"
              >
                <div className="w-14 h-14 rounded-full bg-[var(--gray-50)] border border-[var(--gray-200)] flex items-center justify-center mb-4">
                  <span className="text-base font-bold text-[var(--black)]">{member.initials}</span>
                </div>
                <p className="font-bold text-[var(--black)]">{member.name}</p>
                <p className="text-sm text-[var(--gray-600)] mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Location */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-[var(--black)] mb-6">Lokasi & akses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <address className="not-italic text-[var(--gray-600)] leading-relaxed mb-4">
                <strong className="text-[var(--black)]">BlockDev Bali</strong>
                <br />
                Jl. Raya Kampus Udayana No.20
                <br />
                Jimbaran, Badung
                <br />
                Kabupaten Badung, Bali 80361
              </address>
              <p className="text-sm text-[var(--gray-600)] mb-2">
                Area kampus STIKOM Bali, Jimbaran. Tersedia parkir motor dan
                mobil. Jam buka menyesuaikan jadwal event.
              </p>
              <p className="text-sm text-[var(--gray-600)] mb-4">
                Komunitas kami aktif di seluruh Bali: Denpasar, Sanur, Jimbaran,
                Canggu, dan sekitarnya.
              </p>
              <Link
                href="https://maps.google.com/?q=Jl.+Raya+Kampus+Udayana+No.20+Jimbaran+Bali"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--black)] hover:underline"
              >
                Buka di Google Maps
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden border border-[var(--gray-200)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.9!2d115.175!3d-8.815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSWptYmFyYW4!5e0!3m2!1sen!2sid!4v1"
                width="100%"
                height="240"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi BlockDev Bali"
              />
            </div>
          </div>
        </section>

        {/* BlockDev Indonesia */}
        <section className="mb-20 p-8 rounded-2xl bg-[var(--black)] text-white">
          <h2 className="text-2xl font-bold mb-3">Bagian dari BlockDev Indonesia</h2>
          <p className="text-gray-400 leading-relaxed mb-5 max-w-2xl">
            BlockDev Bali adalah chapter lokal dari komunitas BlockDev Indonesia,
            jaringan 15.000+ anggota dari seluruh nusantara yang membangun di
            atas blockchain, AI, dan emerging technology. Sebagai anggota
            BlockDev Bali, kamu punya akses ke ekosistem nasional ini.
          </p>
          <Link
            href="https://blockdev.org/about"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-white hover:underline"
          >
            Tentang BlockDev Indonesia
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-[var(--black)] mb-8">
            Nilai dan aturan komunitas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-6 rounded-2xl border border-[var(--gray-200)]"
              >
                <h3 className="font-bold text-[var(--black)] mb-2">{v.title}</h3>
                <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href="https://luma.com/user/usr-nI0ywVravzeDDl9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[var(--black)] text-white font-semibold hover:bg-[var(--orange-hover)] transition-colors w-full sm:w-auto"
          >
            Lihat jadwal event
          </a>
          <Link
            href="/join"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[var(--gray-200)] text-[var(--black)] font-semibold hover:bg-[var(--gray-50)] transition-colors w-full sm:w-auto"
          >
            Gabung komunitas
          </Link>
        </div>
      </div>
    </main>
  );
}
