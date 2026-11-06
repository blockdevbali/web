import type { Metadata } from "next";
import Link from "next/link";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Partners | BlockDev Bali",
  description:
    "Dukung talenta teknologi Bali. Kemitraan sponsor, kampus, pembicara, CSR, dan media untuk komunitas BlockDev Bali.",
};

const partnershipTypes = [
  {
    type: "Sponsor event",
    give: "Dana atau konsumsi untuk satu atau beberapa event",
    get: "Logo di halaman event dan materi, sebutan saat acara, laporan peserta",
  },
  {
    type: "Mitra kampus",
    give: "Tempat, akses mahasiswa, pengakuan kegiatan",
    get: "Program belajar untuk mahasiswa, kegiatan bersama",
  },
  {
    type: "Mitra pembicara",
    give: "Waktu dan keahlian",
    get: "Panggung, jaringan talenta, dokumentasi",
  },
  {
    type: "Program CSR",
    give: "Pendanaan program pelatihan untuk kelompok tertentu",
    get: "Laporan dampak terukur, cerita peserta",
  },
  {
    type: "Mitra media",
    give: "Publikasi",
    get: "Akses liputan dan narasumber",
  },
];

const steps = [
  {
    number: "01",
    title: "Hubungi tim",
    description: "Kirim pesan lewat formulir di bawah atau email komunitas.",
  },
  {
    number: "02",
    title: "Diskusi kebutuhan",
    description:
      "Kami akan menghubungi untuk memahami tujuan dan menyusun skema yang tepat.",
  },
  {
    number: "03",
    title: "Kesepakatan & laporan",
    description:
      "Setelah program selesai, kami menyiapkan laporan dampak dan dokumentasi.",
  },
];

// Calculate stats from data
const totalEvents = events.length;
const totalAttendees = events.reduce((sum, e) => sum + e.attendees, 0);

export default function PartnersPage() {
  return (
    <main className="py-16">
      <div className="container-site">
        {/* Hero */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold text-[var(--orange)] uppercase tracking-wider mb-3">
            Kemitraan
          </p>
          <h1 className="text-4xl font-extrabold text-[var(--black)] mb-5 leading-tight">
            Dukung talenta teknologi Bali
          </h1>
          <p className="text-lg text-[var(--gray-600)] leading-relaxed mb-8">
            BlockDev Bali menggelar event rutin setiap minggu untuk mahasiswa dan
            developer Bali. Bersama mitra yang tepat, kami bisa menjangkau lebih
            banyak orang dan memberikan dampak yang lebih nyata.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="#form-mitra"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[var(--orange)] text-white font-semibold hover:bg-[var(--orange-hover)] transition-colors w-full sm:w-auto"
            >
              Hubungi tim
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[var(--gray-200)] text-[var(--black)] font-semibold hover:bg-[var(--gray-50)] transition-colors w-full sm:w-auto"
            >
              Unduh proposal (segera)
            </Link>
          </div>
        </div>

        {/* Impact stats */}
        <section className="mb-20 p-8 rounded-2xl bg-[var(--black)] text-white">
          <h2 className="text-xl font-bold mb-6 text-gray-300 uppercase tracking-wider text-sm">
            Dampak nyata
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-3xl font-extrabold">{totalEvents}</p>
              <p className="text-sm text-gray-400 mt-1">Event digelar</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold">{totalAttendees}+</p>
              <p className="text-sm text-gray-400 mt-1">Peserta hadir</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold">15K+</p>
              <p className="text-sm text-gray-400 mt-1">
                Komunitas BlockDev Indonesia
              </p>
            </div>
            <div>
              <p className="text-3xl font-extrabold">Bali</p>
              <p className="text-sm text-gray-400 mt-1">Jimbaran & sekitarnya</p>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-6">
            Data diperbarui setiap bulan. Angka komunitas nasional mengacu pada
            BlockDev Indonesia.
          </p>
        </section>

        {/* Partnership types */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-[var(--black)] mb-8">
            Bentuk kerja sama
          </h2>
          <p className="text-sm text-[var(--gray-600)] mb-6">
            Nilai nominal paket tidak ditampilkan di sini. Detail dibahas setelah
            kami mengenal kebutuhan masing-masing mitra.
          </p>
          <div className="overflow-x-auto rounded-xl border border-[var(--gray-200)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--gray-50)] border-b border-[var(--gray-200)]">
                  <th className="text-left px-5 py-3 font-semibold text-[var(--gray-600)]">
                    Bentuk kerja sama
                  </th>
                  <th className="text-left px-5 py-3 font-semibold text-[var(--gray-600)]">
                    Yang diberikan mitra
                  </th>
                  <th className="text-left px-5 py-3 font-semibold text-[var(--gray-600)]">
                    Yang didapat mitra
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--gray-200)] bg-white">
                {partnershipTypes.map((row) => (
                  <tr key={row.type} className="hover:bg-[var(--gray-50)] transition-colors">
                    <td className="px-5 py-4 font-semibold text-[var(--black)]">
                      {row.type}
                    </td>
                    <td className="px-5 py-4 text-[var(--gray-600)]">{row.give}</td>
                    <td className="px-5 py-4 text-[var(--gray-600)]">{row.get}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* How it works */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-[var(--black)] mb-8">
            Cara kerja
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number}>
                <span className="text-5xl font-extrabold text-[var(--orange)] opacity-20 leading-none block mb-3">
                  {step.number}
                </span>
                <h3 className="font-bold text-[var(--black)] mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 rounded-xl bg-[var(--gray-50)] border border-[var(--gray-200)] text-sm text-[var(--gray-600)]">
            <strong className="text-[var(--black)]">Transparansi:</strong> Setelah
            program selesai, kami menyiapkan laporan dampak yang mencakup jumlah
            peserta, topik, dan dokumentasi. Dukungan digunakan sesuai kesepakatan
            awal.
          </div>
        </section>

        {/* Current partners — hidden until there are real partners */}
        {/* When ready: add partner logos here */}

        {/* Contact form */}
        <section id="form-mitra" className="mb-4 scroll-mt-24">
          <h2 className="text-2xl font-bold text-[var(--black)] mb-2">
            Mulai diskusi
          </h2>
          <p className="text-[var(--gray-600)] mb-8">
            Isi formulir ini dan kami akan menghubungi dalam 1–2 hari kerja.
          </p>

          <form
            action="mailto:hi@blockdev.org"
            method="GET"
            encType="text/plain"
            className="max-w-2xl flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="nama" className="text-sm font-semibold text-[var(--black)]">
                  Nama
                </label>
                <input
                  id="nama"
                  name="nama"
                  type="text"
                  required
                  placeholder="Nama lengkap"
                  className="px-4 py-2.5 rounded-lg border border-[var(--gray-200)] text-sm focus:outline-none focus:border-[var(--orange)] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="organisasi" className="text-sm font-semibold text-[var(--black)]">
                  Organisasi
                </label>
                <input
                  id="organisasi"
                  name="organisasi"
                  type="text"
                  required
                  placeholder="Nama perusahaan / kampus"
                  className="px-4 py-2.5 rounded-lg border border-[var(--gray-200)] text-sm focus:outline-none focus:border-[var(--orange)] transition-colors"
                />
              </div>
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
                placeholder="email@organisasi.com"
                className="px-4 py-2.5 rounded-lg border border-[var(--gray-200)] text-sm focus:outline-none focus:border-[var(--orange)] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="jenis" className="text-sm font-semibold text-[var(--black)]">
                Jenis kerja sama
              </label>
              <select
                id="jenis"
                name="jenis"
                required
                className="px-4 py-2.5 rounded-lg border border-[var(--gray-200)] text-sm focus:outline-none focus:border-[var(--orange)] transition-colors bg-white text-[var(--black)]"
              >
                <option value="">Pilih jenis</option>
                <option>Sponsor event</option>
                <option>Mitra kampus</option>
                <option>Mitra pembicara</option>
                <option>Program CSR</option>
                <option>Mitra media</option>
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
                placeholder="Ceritakan sedikit tentang organisasi kamu dan apa yang ingin dikerjasamakan."
                className="px-4 py-2.5 rounded-lg border border-[var(--gray-200)] text-sm focus:outline-none focus:border-[var(--orange)] transition-colors resize-none"
              />
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
        </section>
      </div>
    </main>
  );
}
