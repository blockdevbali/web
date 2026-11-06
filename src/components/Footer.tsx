import Link from "next/link";

const socialLinks = [
  {
    label: "X / Twitter",
    href: "https://x.com/blockdevbali",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.736-8.855L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/blockdevbali",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me/BlockDevBali",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
      </svg>
    ),
  },
];

const internalLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Partners", href: "/partners" },
  { label: "Gabung komunitas", href: "/join" },
];

const blockdevLinks = [
  { label: "Courses", href: "https://blockdev.org/courses" },
  { label: "Knowledge", href: "https://blockdev.org/knowledge" },
  { label: "Hackathon", href: "https://blockdev.org/hackathon" },
  { label: "Sign in", href: "https://blockdev.org/signin" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <Link href="/">
              <span className="text-base font-extrabold text-white tracking-tight">
                BlockDev <span className="text-gray-400 font-semibold">Bali</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-3">
              Komunitas builder blockchain dan AI di Bali. Event dua kali seminggu di Jimbaran.
            </p>
            <p className="text-xs text-gray-500">
              Bagian dari komunitas{" "}
              <Link
                href="https://blockdev.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors underline underline-offset-2"
              >
                BlockDev Indonesia
              </Link>
            </p>
          </div>

          {/* Col 2: Navigasi */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Navigasi
            </h3>
            <ul className="flex flex-col gap-2.5">
              {internalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Di blockdev.org */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Di blockdev.org
            </h3>
            <ul className="flex flex-col gap-2.5">
              {blockdevLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Terhubung */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Terhubung
            </h3>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <li key={social.href}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {social.icon}
                    {social.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Lokasi */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Lokasi
            </h3>
            <address className="not-italic text-sm text-gray-400 leading-relaxed">
              BlockDev Bali
              <br />
              Jl. Raya Kampus Udayana No.20
              <br />
              Jimbaran, Badung
              <br />
              Bali 80361
            </address>
            <Link
              href="https://maps.google.com/?q=Jl.+Raya+Kampus+Udayana+No.20+Jimbaran+Bali"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-sm text-[var(--orange)] hover:underline"
            >
              Lihat di peta
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path
                  d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © 2026 BlockDev Bali. Yayasan Literasi Rantai Digital.
          </p>
          <Link
            href="/privacy"
            className="text-xs text-gray-500 hover:text-gray-400 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
