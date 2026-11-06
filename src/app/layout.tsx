import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BlockDev Bali | Komunitas Builder Blockchain & AI di Bali",
  description:
    "Belajar, membangun, dan terhubung dua kali seminggu di Jimbaran. Komunitas builder blockchain dan AI untuk mahasiswa dan developer Bali.",
  openGraph: {
    title: "BlockDev Bali",
    description:
      "Komunitas builder blockchain dan AI di Bali. Event rutin dua kali seminggu di Jimbaran.",
    url: "https://bali.blockdev.org",
    siteName: "BlockDev Bali",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${plusJakarta.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
