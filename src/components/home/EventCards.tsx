import Link from "next/link";
import Image from "next/image";
import {
  getRecentEvents,
  formatEventDate,
  topicLabel,
  formatLabel,
} from "@/data/events";
import { Users, Calendar } from "lucide-react";

export default function EventCards() {
  const events = getRecentEvents(3);

  return (
    <section className="py-20 bg-white">
      <div className="container-site">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-sm font-semibold text-[var(--gray-600)] uppercase tracking-wider mb-2">
              Event terbaru
            </p>
            <h2 className="text-3xl font-bold text-[var(--black)]">
              Yang sudah kami lakukan
            </h2>
          </div>
          <Link
            href="/events"
            className="text-sm font-semibold text-[var(--black)] hover:underline shrink-0"
          >
            Semua event →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <article
              key={event.id}
              className="group flex flex-col rounded-2xl border border-[var(--gray-200)] bg-white hover:shadow-md transition-shadow overflow-hidden"
            >
              {/* Cover photo */}
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
                {/* Labels */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[var(--gray-50)] border border-[var(--gray-200)] text-[var(--black)]">
                    {topicLabel[event.topic]}
                  </span>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[var(--gray-50)] border border-[var(--gray-200)] text-[var(--black)]">
                    {formatLabel[event.format]}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-[var(--black)] leading-snug group-hover:underline">
                  <Link href={`/events/${event.slug}`}>{event.title}</Link>
                </h3>

                {/* Meta */}
                <div className="flex flex-col gap-1.5 mt-auto">
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
      </div>
    </section>
  );
}
