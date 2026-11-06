import Link from "next/link";

export default function ClosingCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="container-site">
        <div className="rounded-2xl bg-[var(--black)] px-8 py-14 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Jangan ketinggalan jadwal berikutnya
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Bergabung di grup komunitas untuk dapat info event, materi, dan
            diskusi langsung dengan builder Bali.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="https://t.me/BlockDevBali"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#229ED9] text-white font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
              </svg>
              Telegram
            </Link>
            <Link
              href="https://chat.whatsapp.com/K7VRKb4EPnlE8hDMPEzhjO?s=cl&p=i&mlu=4&ilr=4&iam=2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-white font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.553 4.103 1.523 5.83L0 24l6.335-1.49C8.01 23.454 9.977 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.514-5.165-1.41l-.371-.22-3.758.884.94-3.649-.241-.387A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              WhatsApp Group
            </Link>
            <Link
              href="https://www.instagram.com/blockdevbali"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-700 text-white font-semibold hover:bg-gray-800 transition-colors w-full sm:w-auto justify-center"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
