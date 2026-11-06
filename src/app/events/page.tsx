import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  getAllEvents,
  formatEventDate,
  topicLabel,
  formatLabel,
  levelLabel,
} from "@/data/events";
import { Users, Calendar, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Events | BlockDev Bali",
  description:
    "Rekap event yang sudah kami lakukan. Workshop blockchain, AI, dan meetup komunitas di Jimbaran, Bali.",
};

export default function EventsPage() {
  const events = getAllEvents();

  return (
    <main className="py-16">
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <h1 className="text-4xl font-extrabold text-[var(--black)] mb-3">
              Event BlockDev Bali
            </h1>
            <p className="text-lg text-[var(--gray-600)]">
              Rekap workshop, meetup, dan seminar yang sudah kami lakukan di Jimbaran.
            </p>
          </div>
          <a
            href="https://luma.com/user/usr-nI0ywVravzeDDl9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--black)] text-white text-sm font-semibold hover:bg-[var(--orange-hover)] transition-colors shrink-0"
          >
            Lihat jadwal di Luma
            <ExternalLink size={14} strokeWidth={2} />
          </a>
        </div>

        {/* Event grid */}
        {events.length === 0 ? (
          <div className="text-center py-20 text-[var(--gray-600)]">
            Belum ada event yang tercatat.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <article
                key={event.id}
                className="group flex flex-col rounded-2xl border border-[var(--gray-200)] bg-white hover:shadow-md transition-shadow overflow-hidden"
              >
                {/* Cover */}
                <div className="relative aspect-[16/9] bg-[var(--gray-50)] overflow-hidden">
                  {/* TODO: swap Cloudinary */}
                  <Image
                    src={event.coverPhoto}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>

                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[var(--gray-50)] border border-[var(--gray-200)] text-[var(--black)]">
                      {topicLabel[event.topic]}
                    </span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[var(--gray-50)] border border-[var(--gray-200)] text-[var(--black)]">
                      {formatLabel[event.format]}
                    </span>
                    <span className="text-xs text-[var(--gray-600)]">
                      {levelLabel[event.level]}
                    </span>
                  </div>

                  <h2 className="text-base font-bold text-[var(--black)] leading-snug group-hover:underline flex-1">
                    <Link href={`/events/${event.slug}`}>{event.title}</Link>
                  </h2>

                  <p className="text-sm text-[var(--gray-600)] leading-relaxed line-clamp-2">
                    {event.shortDescription}
                  </p>

                  <div className="flex flex-col gap-1.5 pt-1">
                    <div className="flex items-center gap-1.5 text-xs text-[var(--gray-600)]">
                      <Calendar size={13} strokeWidth={1.75} className="shrink-0" />
                      {formatEventDate(event.date)}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[var(--gray-600)]">
                      <Users size={13} strokeWidth={1.75} className="shrink-0" />
                      {event.attendees} peserta hadir
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* CTA speaker */}
        <div className="mt-16 p-8 rounded-2xl bg-[var(--gray-50)] border border-[var(--gray-200)] text-center">
          <h3 className="font-bold text-[var(--black)] mb-2">
            Mau jadi pembicara atau tuan rumah?
          </h3>
          <p className="text-sm text-[var(--gray-600)] mb-5">
            Kami selalu senang mendengar dari praktisi dan builder lokal yang ingin berbagi.
          </p>
          <Link
            href="/join"
            className="inline-flex px-6 py-2.5 rounded-lg bg-[var(--black)] text-white font-semibold text-sm hover:bg-[var(--orange-hover)] transition-colors"
          >
            Hubungi tim
          </Link>
        </div>
      </div>
    </main>
  );
}
