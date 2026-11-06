import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  events,
  getEventBySlug,
  formatEventDate,
  topicLabel,
  formatLabel,
  levelLabel,
} from "@/data/events";
import { Calendar, MapPin, Users, Clock, ExternalLink } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};
  return {
    title: `${event.title} | BlockDev Bali`,
    description: event.shortDescription,
  };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  return (
    <main className="py-12">
      <div className="container-site">
        {/* Breadcrumb */}
        <nav className="text-sm text-[var(--gray-600)] mb-8" aria-label="Breadcrumb">
          <Link href="/events" className="hover:text-[var(--black)] transition-colors">
            Events
          </Link>
          <span className="mx-2">›</span>
          <span className="text-[var(--black)]">{event.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Content */}
          <div className="lg:col-span-2">
            {/* Labels */}
            <div className="flex items-center gap-2 flex-wrap mb-4">
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--gray-50)] border border-[var(--gray-200)] text-[var(--black)]">
                {topicLabel[event.topic]}
              </span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--gray-50)] border border-[var(--gray-200)] text-[var(--black)]">
                {formatLabel[event.format]}
              </span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--gray-50)] border border-[var(--gray-200)] text-[var(--black)]">
                {levelLabel[event.level]}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--black)] leading-tight mb-4">
              {event.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-col gap-2 mb-8 text-sm text-[var(--gray-600)]">
              <div className="flex items-center gap-2">
                <Calendar size={15} strokeWidth={1.75} className="shrink-0" />
                {formatEventDate(event.date)}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={15} strokeWidth={1.75} className="shrink-0" />
                {event.timeStart}–{event.timeEnd} WITA
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={15} strokeWidth={1.75} className="shrink-0" />
                {event.location}
              </div>
              <div className="flex items-center gap-2">
                <Users size={15} strokeWidth={1.75} className="shrink-0" />
                {event.attendees} peserta hadir
              </div>
            </div>

            {/* Cover photo */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[var(--gray-50)] mb-10">
              {/* TODO: swap Cloudinary */}
              <Image
                src={event.coverPhoto}
                alt={event.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Description */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-[var(--black)] mb-3">Tentang event ini</h2>
              <p className="text-[var(--gray-600)] leading-relaxed">{event.description}</p>
            </section>

            {/* Agenda */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-[var(--black)] mb-4">Agenda</h2>
              <div className="flex flex-col gap-3">
                {event.agenda.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="shrink-0 text-sm font-mono font-semibold text-[var(--black)] w-14">
                      {item.time}
                    </span>
                    <span className="text-sm text-[var(--gray-600)]">{item.activity}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Speakers */}
            {event.speakers.length > 0 && (
              <section className="mb-10">
                <h2 className="text-xl font-bold text-[var(--black)] mb-4">Pembicara</h2>
                <div className="flex flex-col gap-4">
                  {event.speakers.map((speaker) => (
                    <div key={speaker.name} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[var(--gray-50)] border border-[var(--gray-200)] flex items-center justify-center shrink-0">
                        <span className="text-sm font-bold text-[var(--black)]">
                          {speaker.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-[var(--black)]">{speaker.name}</p>
                        <p className="text-sm text-[var(--gray-600)]">{speaker.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Requirements */}
            {event.requirements.length > 0 && (
              <section className="mb-10">
                <h2 className="text-xl font-bold text-[var(--black)] mb-4">Yang dibawa peserta</h2>
                <ul className="flex flex-col gap-2">
                  {event.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--gray-600)]">
                      <span className="shrink-0 mt-0.5 text-[var(--black)]">—</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Location */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-[var(--black)] mb-4">Lokasi</h2>
              <div className="rounded-xl overflow-hidden border border-[var(--gray-200)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.9!2d115.175!3d-8.815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSWptYmFyYW4!5e0!3m2!1sen!2sid!4v1"
                  width="100%"
                  height="280"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi BlockDev Bali"
                />
              </div>
              <p className="mt-3 text-sm text-[var(--gray-600)]">
                Jl. Raya Kampus Udayana No.20, Jimbaran, Badung, Bali 80361
              </p>
            </section>
          </div>

          {/* Right: Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-[var(--gray-200)] overflow-hidden">
              <div className="p-6 flex flex-col gap-4">
                <div>
                  <p className="text-xs text-[var(--gray-600)] uppercase tracking-wider mb-1">Tanggal</p>
                  <p className="text-sm font-semibold text-[var(--black)]">{formatEventDate(event.date)}</p>
                </div>
                <div>
                  <p className="text-xs text-[var(--gray-600)] uppercase tracking-wider mb-1">Waktu</p>
                  <p className="text-sm font-semibold text-[var(--black)]">{event.timeStart}–{event.timeEnd} WITA</p>
                </div>
                <div>
                  <p className="text-xs text-[var(--gray-600)] uppercase tracking-wider mb-1">Peserta hadir</p>
                  <p className="text-sm font-semibold text-[var(--black)]">{event.attendees} orang</p>
                </div>
                <div>
                  <p className="text-xs text-[var(--gray-600)] uppercase tracking-wider mb-1">Format</p>
                  <p className="text-sm font-semibold text-[var(--black)]">{formatLabel[event.format]}</p>
                </div>
              </div>

              <div className="border-t border-[var(--gray-200)] p-6 flex flex-col gap-3">
                <a
                  href="https://luma.com/user/usr-nI0ywVravzeDDl9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-[var(--black)] text-white font-semibold text-sm hover:bg-[var(--orange-hover)] transition-colors"
                >
                  Lihat event mendatang di Luma
                  <ExternalLink size={14} strokeWidth={2} />
                </a>
                {event.instagramUrl && (
                  <a
                    href={event.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg border border-[var(--gray-200)] text-[var(--black)] font-semibold text-sm hover:bg-[var(--gray-50)] transition-colors"
                  >
                    Lihat di Instagram
                    <ExternalLink size={14} strokeWidth={2} />
                  </a>
                )}
                <p className="text-xs text-[var(--gray-600)] text-center">
                  Jadwal event terbaru ada di profil Luma kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
