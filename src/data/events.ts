export type EventTopic = "blockchain" | "ai" | "general";
export type EventFormat = "workshop" | "meetup" | "seminar" | "hackathon";
export type EventLevel = "pemula" | "menengah" | "semua";

export interface AgendaItem {
  time: string;
  activity: string;
}

export interface Speaker {
  name: string;
  role: string;
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  date: string; // ISO date string
  timeStart: string;
  timeEnd: string;
  location: string;
  topic: EventTopic;
  format: EventFormat;
  level: EventLevel;
  attendees: number;
  speakers: Speaker[];
  shortDescription: string;
  description: string;
  agenda: AgendaItem[];
  requirements: string[];
  // TODO: swap Cloudinary — cover photo per event
  coverPhoto: string;
  instagramUrl?: string;
}

// ─── Past events ──────────────────────────────────────────────────────────────
// Newest first. Add new events here after they happen.

export const events: Event[] = [
  {
    id: "3",
    slug: "ai-coding-agent-bali-digifest-2026",
    title: "AI Coding Agent Workshop — Bali Digifest 2026",
    date: "2026-11-12",
    timeStart: "13:00",
    timeEnd: "15:00",
    location: "Prime Plaza, Sanur",
    topic: "ai",
    format: "workshop",
    level: "menengah",
    attendees: 40,
    speakers: [
      {
        name: "Putu Gde Trahwidhi",
        role: "Co-lead BlockDev Bali",
      },
    ],
    shortDescription:
      "Workshop hands-on dengan AI coding agent di Bali Digifest 2026, festival ekonomi digital kreatif.",
    description:
      "Workshop praktis membangun aplikasi menggunakan AI coding agent di Bali Digifest 2026. Peserta langsung coding menggunakan Claude Code, Codex, atau OpenCode dengan panduan mentor. Diselenggarakan bersama Primakara University di Prime Plaza, Sanur.",
    agenda: [
      { time: "13:00", activity: "Registrasi dan setup environment" },
      { time: "13:15", activity: "Intro: AI coding agent dan cara kerjanya" },
      { time: "13:45", activity: "Hands-on: build dengan AI coding agent" },
      { time: "14:30", activity: "Demo hasil dan diskusi" },
      { time: "14:50", activity: "Q&A dan closing" },
    ],
    requirements: [
      "Laptop",
      "Git sudah terinstall",
      "Node.js sudah terinstall",
      "AI coding agent: Claude Code, Codex, atau OpenCode — pastikan sudah berjalan sebelum acara",
    ],
    // TODO: swap Cloudinary
    coverPhoto: "https://picsum.photos/seed/bdb-digifest/800/500",
    instagramUrl: "https://www.instagram.com/p/DfT8NMUp8Qa/",
  },
  {
    id: "2",
    slug: "seminar-infinity-2026",
    title: "Seminar INFINITY 2026",
    date: "2026-10-25",
    timeStart: "08:00",
    timeEnd: "15:00",
    location: "ITB STIKOM Bali + Online via Zoom",
    topic: "blockchain",
    format: "seminar",
    level: "semua",
    attendees: 120,
    speakers: [
      {
        name: "Wayan Phantom Megaditha",
        role: "Lead BlockDev Bali",
      },
    ],
    shortDescription:
      "Seminar hybrid oleh UKM Progress ITB STIKOM Bali dengan insight dari praktisi blockchain, Web3, dan AI.",
    description:
      "Seminar INFINITY 2026 diselenggarakan oleh UKM Progress ITB STIKOM Bali secara hybrid — offline di kampus Jimbaran dan online via Zoom. Wayan Phantom Megaditha hadir sebagai speaker membawakan materi seputar ekosistem blockchain, Web3, dan otomasi AI.",
    agenda: [
      { time: "08:00", activity: "Registrasi dan pembukaan" },
      { time: "08:30", activity: "Sesi materi: Blockchain & Web3 ecosystem" },
      { time: "10:00", activity: "Sesi materi: AI automation untuk developer" },
      { time: "12:00", activity: "Ishoma" },
      { time: "13:00", activity: "Panel diskusi dan Q&A" },
      { time: "14:30", activity: "Penutupan" },
    ],
    requirements: [
      "Daftar tiket terlebih dahulu",
      "Untuk online: siapkan Zoom di laptop atau HP",
    ],
    // TODO: swap Cloudinary
    coverPhoto: "https://picsum.photos/seed/bdb-infinity/800/500",
    instagramUrl: "https://www.instagram.com/p/Dc3hIYgTRcf/",
  },
  {
    id: "1",
    slug: "smart-contract-solidity-coinfest-week",
    title: "Building on Web3: Smart Contract Development with Solidity",
    date: "2026-08-18",
    timeStart: "09:00",
    timeEnd: "13:00",
    location: "ITB STIKOM Bali, Kampus Jimbaran, Hall Lt. 4",
    topic: "blockchain",
    format: "workshop",
    level: "pemula",
    attendees: 60,
    speakers: [
      {
        name: "Wayan Phantom Megaditha",
        role: "Lead BlockDev Bali",
      },
    ],
    shortDescription:
      "Workshop smart contract development dengan Solidity, bagian dari Chain & Chill Bali di Coinfest Week.",
    description:
      "Workshop bersama BlockDev ID dan Upbit Indonesia sebagai bagian dari rangkaian Chain & Chill Bali di Coinfest Week. Peserta belajar fundamental blockchain & Web3, dasar smart contract dan DApp, hingga hands-on deploy smart contract pertama mereka di Ethereum testnet.",
    agenda: [
      { time: "09:00", activity: "Registrasi" },
      { time: "09:15", activity: "Fundamental Blockchain & Web3" },
      { time: "10:00", activity: "Dasar Smart Contract & DApp" },
      { time: "10:45", activity: "Hands-on: deploy smart contract pertama" },
      { time: "12:00", activity: "Demo dan Q&A" },
      { time: "12:45", activity: "Networking dan penutupan" },
    ],
    requirements: [
      "Laptop dengan koneksi internet",
      "Node.js sudah terinstall",
      "Akun MetaMask (bisa dibuat saat acara)",
    ],
    // TODO: swap Cloudinary
    coverPhoto: "https://picsum.photos/seed/bdb-solidity/800/500",
    instagramUrl: "https://www.instagram.com/p/DbIfH4tp5nR/",
  },
];

// ─── Utility functions ────────────────────────────────────────────────────────

export function getAllEvents(): Event[] {
  return [...events].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getRecentEvents(count = 3): Event[] {
  return getAllEvents().slice(0, count);
}

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((e) => e.slug === slug);
}

export function getTotalAttendees(): number {
  return events.reduce((sum, e) => sum + e.attendees, 0);
}

// ─── Display helpers ──────────────────────────────────────────────────────────

export function formatEventDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export const topicLabel: Record<EventTopic, string> = {
  blockchain: "Blockchain",
  ai: "AI",
  general: "Umum",
};

export const formatLabel: Record<EventFormat, string> = {
  workshop: "Workshop",
  meetup: "Meetup",
  seminar: "Seminar",
  hackathon: "Hackathon",
};

export const levelLabel: Record<EventLevel, string> = {
  pemula: "Pemula",
  menengah: "Menengah",
  semua: "Semua level",
};
