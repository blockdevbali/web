import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Join | BlockDev Bali",
  description:
    "Semua cara untuk terhubung dengan komunitas BlockDev Bali: Telegram, WhatsApp, Instagram, dan formulir kontak.",
};

const channels = [
  {
    name: "Telegram Channel",
    description: "Info event, update komunitas, dan pengumuman penting.",
    href: "https://t.me/BlockDevBali",
    cta: "Ikuti channel",
    bgColor: "bg-[#E8F5FD]",
    textColor: "text-[#0088CC]",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp Group",
    description: "Bergabung di grup diskusi komunitas BlockDev Bali.",
    href: "https://chat.whatsapp.com/K7VRKb4EPnlE8hDMPEzhjO?s=cl&p=i&mlu=4&ilr=4&iam=2",
    cta: "Gabung grup",
    bgColor: "bg-[#E8F9EE]",
    textColor: "text-[#25D366]",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.553 4.103 1.523 5.83L0 24l6.335-1.49C8.01 23.454 9.977 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.514-5.165-1.41l-.371-.22-3.758.884.94-3.649-.241-.387A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    description: "Foto, rekap event, dan behind the scenes komunitas.",
    href: "https://www.instagram.com/blockdevbali",
    cta: "Ikuti @blockdevbali",
    bgColor: "bg-[#FEF0F8]",
    textColor: "text-[#E1306C]",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "X / Twitter",
    description: "Update singkat dan konversasi komunitas.",
    href: "https://x.com/blockdevbali",
    cta: "Ikuti @blockdevbali",
    bgColor: "bg-[#F0F0F0]",
    textColor: "text-[#0F0F0F]",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.736-8.855L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const faqItems = [
  {
    q: "Apakah saya perlu mendaftar dulu untuk ikut event?",
    a: "Ya, daftar lewat Luma. Ini membantu kami mempersiapkan tempat dan materi yang cukup untuk semua peserta.",
  },
  {
    q: "Apakah komunitas ini berbayar?",
    a: "Bergabung ke komunitas gratis. Event juga gratis. Kalau ada event berbayar, pasti dicantumkan jelas di halaman event.",
  },
  {
    q: "Boleh ajak teman yang belum tahu blockchain sama sekali?",
    a: "Boleh banget. Sebagian besar event dirancang untuk pemula. Semakin banyak yang datang, semakin bagus diskusinya.",
  },
];

export default function JoinPage() {
  return (
    <main className="py-16">
      <div className="container-site">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-[var(--orange)] uppercase tracking-wider mb-3">
            Bergabung
          </p>
          <h1 className="text-4xl font-extrabold text-[var(--black)] mb-4 leading-tight">
            Terhubung dengan komunitas
          </h1>
          <p className="text-lg text-[var(--gray-600)]">
            Pilih cara yang paling cocok untuk kamu. Semuanya gratis dan
            terbuka.
          </p>
        </div>

        {/* Channel cards */}
        <section className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {channels.map((ch) => (
              <div
                key={ch.name}
                className="flex flex-col p-6 rounded-2xl border border-[var(--gray-200)] bg-white hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl ${ch.bgColor} ${ch.textColor} flex items-center justify-center mb-4`}>
                  {ch.icon}
                </div>
                <h2 className="font-bold text-[var(--black)] mb-1">{ch.name}</h2>
                <p className="text-sm text-[var(--gray-600)] leading-relaxed flex-1 mb-5">
                  {ch.description}
                </p>
                <Link
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--orange)] hover:underline"
                >
                  {ch.cta}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Contact form */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[var(--black)] mb-3">
                Kirim pesan
              </h2>
              <p className="text-[var(--gray-600)] mb-8">
                Pertanyaan, usulan jadi pembicara, atau mau berkolaborasi? Tulis di sini.
              </p>

              <form
                action="mailto:hi@blockdev.org"
                method="GET"
                encType="text/plain"
                className="flex flex-col gap-5"
              >
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="nama" className="text-sm font-semibold text-[var(--black)]">
                    Nama
                  </label>
                  <input
                    id="nama"
                    name="nama"
                    type="text"
                    required
                    placeholder="Nama kamu"
                    className="px-4 py-2.5 rounded-lg border border-[var(--gray-200)] text-sm focus:outline-none focus:border-[var(--orange)] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-semibold text-[var(--black)]">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="email@kamu.com"
                    className="px-4 py-2.5 rounded-lg border border-[var(--gray-200)] text-sm focus:outline-none focus:border-[var(--orange)] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="topik" className="text-sm font-semibold text-[var(--black)]">
                    Topik
                  </label>
                  <select
                    id="topik"
                    name="topik"
                    required
                    className="px-4 py-2.5 rounded-lg border border-[var(--gray-200)] text-sm focus:outline-none focus:border-[var(--orange)] transition-colors bg-white text-[var(--black)]"
                  >
                    <option value="">Pilih topik</option>
                    <option>Pertanyaan umum</option>
                    <option>Jadi pembicara</option>
                    <option>Kerja sama</option>
                    <option>Media</option>
                    <option>Lainnya</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="pesan" className="text-sm font-semibold text-[var(--black)]">
                    Pesan
                  </label>
                  <textarea
                    id="pesan"
                    name="pesan"
                    required
                    rows={4}
                    placeholder="Tulis pesanmu di sini..."
                    className="px-4 py-2.5 rounded-lg border border-[var(--gray-200)] text-sm focus:outline-none focus:border-[var(--orange)] transition-colors resize-none"
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    id="privasi"
                    name="privasi"
                    type="checkbox"
                    required
                    className="mt-0.5 accent-[var(--orange)]"
                  />
                  <label htmlFor="privasi" className="text-sm text-[var(--gray-600)]">
                    Saya setuju data saya digunakan untuk merespons pesan ini, sesuai{" "}
                    <Link href="/privacy" className="text-[var(--orange)] hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-[var(--orange)] text-white font-semibold hover:bg-[var(--orange-hover)] transition-colors"
                  >
                    Kirim pesan
                  </button>
                </div>
              </form>
            </div>

            {/* Location */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--black)] mb-3">Lokasi</h2>
              <p className="text-[var(--gray-600)] mb-5">
                Kalau mau mampir langsung ke BlockDev Bali:
              </p>
              <address className="not-italic text-sm text-[var(--gray-600)] leading-relaxed mb-4">
                Jl. Raya Kampus Udayana No.20
                <br />
                Jimbaran, Badung, Bali 80361
              </address>
              <div className="rounded-xl overflow-hidden border border-[var(--gray-200)] mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.9!2d115.175!3d-8.815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSWptYmFyYW4!5e0!3m2!1sen!2sid!4v1"
                  width="100%"
                  height="220"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi BlockDev Bali"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--black)] mb-8">
            Pertanyaan singkat
          </h2>
          <div className="flex flex-col gap-6 max-w-2xl">
            {faqItems.map((item, i) => (
              <div key={i}>
                <p className="font-semibold text-[var(--black)] mb-1">{item.q}</p>
                <p className="text-sm text-[var(--gray-600)] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
