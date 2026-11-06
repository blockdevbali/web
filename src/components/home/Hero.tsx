import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-0">
      <div className="container-site">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--black)] leading-tight tracking-tight mb-4">
            Komunitas builder blockchain & AI di Bali
          </h1>
          <p className="text-lg md:text-xl text-[var(--gray-600)] leading-relaxed">
            Belajar, membangun, dan terhubung dua kali seminggu di Jimbaran.
            Gratis, terbuka untuk semua.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
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

        {/* Hero image */}
        <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden bg-[var(--gray-50)]">
          {/* TODO: swap Cloudinary — foto event BlockDev Bali */}
          <Image
            src="https://picsum.photos/seed/blockdevbali/1400/600"
            alt="Foto event BlockDev Bali di Jimbaran"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
