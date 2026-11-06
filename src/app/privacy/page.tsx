import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | BlockDev Bali",
  description:
    "Kebijakan privasi BlockDev Bali tentang pengumpulan dan penggunaan data pribadi peserta event dan pengguna situs.",
};

export default function PrivacyPage() {
  return (
    <main className="py-16">
      <div className="container-site max-w-2xl">
        <h1 className="text-3xl font-extrabold text-[var(--black)] mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-[var(--gray-600)] mb-10">
          Terakhir diperbarui: November 2026
        </p>

        <div className="flex flex-col gap-10 text-[var(--gray-600)] text-sm leading-relaxed">
          <section>
            <h2 className="text-base font-bold text-[var(--black)] mb-3">
              Data yang kami kumpulkan
            </h2>
            <p>
              Saat kamu mendaftar ke event atau mengisi formulir kontak, kami
              mengumpulkan: nama, alamat email, nama kampus atau pekerjaan, dan
              jawaban formulir yang kamu isi secara sukarela.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[var(--black)] mb-3">
              Tujuan penggunaan data
            </h2>
            <ul className="list-disc list-inside flex flex-col gap-2">
              <li>Mengelola pendaftaran dan konfirmasi kehadiran event.</li>
              <li>
                Mengirimkan informasi acara yang relevan kepada peserta yang
                telah mendaftar.
              </li>
              <li>
                Membuat laporan dampak komunitas secara agregat dan tanpa
                identitas pribadi.
              </li>
              <li>Merespons pertanyaan dan pesan yang masuk lewat formulir.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-[var(--black)] mb-3">
              Penyimpanan dan pihak ketiga
            </h2>
            <p className="mb-2">
              Pendaftaran event dikelola melalui{" "}
              <Link
                href="https://luma.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--orange)] hover:underline"
              >
                Luma
              </Link>
              . Formulir kontak di situs ini dikirim lewat email. Situs ini
              dihosting di{" "}
              <Link
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--orange)] hover:underline"
              >
                Vercel
              </Link>
              .
            </p>
            <p>
              Kami tidak menjual atau berbagi data pribadimu dengan pihak ketiga
              untuk tujuan pemasaran.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[var(--black)] mb-3">
              Hak peserta
            </h2>
            <p>
              Kamu berhak meminta data pribadimu dihapus dari sistem kami. Kirim
              permintaan lewat email komunitas dan kami akan memprosesnya dalam
              waktu wajar.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[var(--black)] mb-3">
              Analitik
            </h2>
            <p>
              Situs ini menggunakan alat analitik ringan yang ramah privasi untuk
              memahami penggunaan situs secara agregat, tanpa pelacakan
              individual.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[var(--black)] mb-3">
              Kontak pengelola data
            </h2>
            <p>
              Untuk pertanyaan terkait privasi, hubungi kami lewat halaman{" "}
              <Link href="/join" className="text-[var(--orange)] hover:underline">
                Join
              </Link>{" "}
              atau email komunitas.
            </p>
          </section>

          <p className="text-xs text-[var(--gray-400)] border-t border-[var(--gray-200)] pt-6">
            Kebijakan ini disusun sesuai prinsip umum perlindungan data pribadi.
            Kami menyarankan tinjauan dari pihak yang memahami hukum sebelum
            rilis resmi, untuk memastikan kesesuaian dengan UU Pelindungan Data
            Pribadi (UU PDP) Indonesia.
          </p>
        </div>
      </div>
    </main>
  );
}
