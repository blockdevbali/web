"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Apakah event ini gratis?",
    answer:
      "Ya, semua event komunitas BlockDev Bali gratis. Cukup daftar lewat Luma dan hadir tepat waktu.",
  },
  {
    question: "Apakah saya perlu bisa coding untuk ikut?",
    answer:
      "Tidak semua event membutuhkan keahlian coding. Tiap event mencantumkan level yang dibutuhkan: pemula, menengah, atau semua level. Workshop teknis biasanya butuh dasar, tapi meetup dan seminar terbuka untuk siapa saja.",
  },
  {
    question: "Apa yang perlu saya bawa?",
    answer:
      "Untuk workshop teknis, bawa laptop dengan baterai atau colokan. Kebutuhan spesifik (software, akun) dituliskan di halaman detail tiap event. Untuk meetup, cukup diri sendiri.",
  },
  {
    question: "Di mana lokasi event dan bagaimana cara ke sana?",
    answer:
      "BlockDev Bali berlokasi di Jl. Raya Kampus Udayana No.20, Jimbaran, Badung. Area kampus STIKOM Bali. Tersedia parkir motor dan mobil. Navigasi via Google Maps untuk rute terkini.",
  },
  {
    question: "Bagaimana cara jadi pembicara?",
    answer:
      "Kami selalu terbuka untuk pembicara tamu: developer lokal, researcher, atau praktisi yang ingin berbagi. Hubungi kami lewat halaman Join atau email komunitas.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[var(--gray-50)]">
      <div className="container-site max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[var(--orange)] uppercase tracking-wider mb-2">
            FAQ
          </p>
          <h2 className="text-3xl font-bold text-[var(--black)]">
            Pertanyaan yang sering masuk
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-[var(--gray-200)]">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-[var(--black)]">
                  {faq.question}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className={`shrink-0 text-[var(--gray-600)] transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                >
                  <path
                    d="M5 7.5l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {openIndex === i && (
                <p className="pb-5 text-sm text-[var(--gray-600)] leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
