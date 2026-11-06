"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Partners", href: "/partners" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[var(--gray-200)]">
      <nav className="container-site">
        <div className="flex items-center justify-between h-16">
          {/* Logo teks */}
          <Link href="/" className="shrink-0">
            <span className="text-lg font-extrabold text-[var(--black)] tracking-tight">
              BlockDev <span className="text-[var(--gray-600)] font-semibold">Bali</span>
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[var(--black)]"
                    : "text-[var(--gray-600)] hover:text-[var(--black)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/join"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-[var(--black)] text-white text-sm font-semibold hover:bg-[var(--orange-hover)] transition-colors"
            >
              Gabung komunitas
            </Link>

            {/* Hamburger, mobile only */}
            <button
              className="md:hidden p-2 rounded-md text-[var(--gray-600)] hover:text-[var(--black)] hover:bg-[var(--gray-50)] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-[var(--gray-200)] py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-2 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[var(--black)] bg-[var(--gray-50)]"
                    : "text-[var(--gray-600)] hover:text-[var(--black)] hover:bg-[var(--gray-50)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
