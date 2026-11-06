import Image from "next/image";

// TODO: swap Cloudinary — ganti src dengan URL dari Cloudinary setelah foto event tersedia
const placeholderPhotos = [
  { id: 1, seed: "bdb-event-1", caption: "Workshop Solidity, Oktober 2026" },
  { id: 2, seed: "bdb-event-2", caption: "Meetup Web3 Bali, Oktober 2026" },
  { id: 3, seed: "bdb-event-3", caption: "AI Workshop, September 2026" },
  { id: 4, seed: "bdb-event-4", caption: "Networking Session, September 2026" },
  { id: 5, seed: "bdb-event-5", caption: "Hackathon Prep, Agustus 2026" },
  { id: 6, seed: "bdb-event-6", caption: "Komunitas BlockDev Bali" },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="container-site">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-sm font-semibold text-[var(--orange)] uppercase tracking-wider mb-2">
              Galeri
            </p>
            <h2 className="text-3xl font-bold text-[var(--black)]">
              Di balik layar
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {placeholderPhotos.map((photo) => (
            <figure key={photo.id} className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-[var(--gray-50)]">
              {/* TODO: swap Cloudinary */}
              <Image
                src={`https://picsum.photos/seed/${photo.seed}/600/450`}
                alt={photo.caption}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                unoptimized
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
