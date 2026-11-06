# bali.blockdev.org: Draft Website BlockDev Bali

bali.blockdev.org adalah landing page komunitas dengan 6 halaman yang mengajak mahasiswa dan pegiat teknologi Bali ikut dua event per minggu, sekaligus meyakinkan sponsor lokal. Kursus, hackathon, dan login tetap di blockdev.org.

## Tujuan dan audiens

Website ini punya satu tugas utama: mengubah pengunjung menjadi peserta event, lalu sebagian menjadi mitra.

Prinsip desain: bahasa Indonesia sebagai default, satu tombol ajakan utama per halaman, dan semua informasi event bisa dibaca tanpa login.

| Audiens | Yang mereka cari | Aksi yang diharapkan |
|---|---|---|
| Mahasiswa dan pemula (STIKOM Bali dan kampus lain) | Event gratis, belajar blockchain dan AI, komunitas | RSVP event, gabung grup |
| Developer, builder, freelancer di Bali | Networking, mentor, kolaborasi | Datang ke event, jadi pembicara |
| Sponsor, CSR, perusahaan lokal | Bukti dampak, jadwal rutin, cara kerja sama | Unduh proposal, hubungi tim |
| Kampus dan komunitas lain | Mitra kegiatan | Ajukan kolaborasi |
| Media dan pemerintah daerah | Profil singkat yang bisa dipercaya | Hubungi tim |

## Peta situs

| No | URL | Page | Tujuan | Di navbar |
|---|---|---|---|---|
| 1 | / | Home | Menjelaskan komunitas dan mengajak RSVP atau gabung | Ya |
| 2 | /events | Events | Jadwal event mendatang dan arsip | Ya |
| 3 | /events/[eventname] | Event detail | Info lengkap dan formulir RSVP | Tidak |
| 4 | /about | About | Misi, tim, lokasi, hubungan dengan BlockDev pusat | Ya |
| 5 | /partners | Partners | Ajakan sponsor dan kolaborasi | Ya |
| 6 | /join | Join | Semua saluran komunitas dan formulir kontak | Ya (tombol) |
| 7 | /privacy | Privacy | Syarat pengumpulan data RSVP | Footer saja |

Fase 2 (opsional): /gallery dan /blog untuk rekap event.

## Navbar (header)

Navbar tampil di semua halaman, tetap menempel di atas saat scroll, dan memuat 4 menu plus satu tombol ajakan.

Di mobile, menu berubah menjadi hamburger, sementara tombol "Gabung" tetap tampil di bar atas.

| Elemen | Isi | Catatan |
|---|---|---|
| Logo | Logo BlockDev + teks "Bali" | Klik menuju Home |
| Menu | Home, Events, About, Partners | Menu aktif diberi penanda |
| Tombol utama | "Join" menuju /join | Warna aksen, selalu terlihat, termasuk di mobile |
| Tautan keluar | "Courses and Hackathon" menuju blockdev.org | Tab baru, diberi ikon panah keluar |
| Bahasa | Nama menu dan halaman dalam bahasa Inggris | Pengalih ID/EN untuk teks isi opsional di fase 2 |
| Banner pengumuman | "Event berikutnya: [judul], [tanggal]. RSVP" | Tipis di atas navbar, otomatis dari data event terdekat, bisa dimatikan |

## Footer

Footer sama di semua halaman, terdiri dari 5 kolom dan satu baris bawah.

| Kolom | Isi |
|---|---|
| 1. Brand | Logo, satu kalimat tagline, tulisan "Bagian dari komunitas BlockDev Indonesia" |
| 2. Navigasi | Home, Events, About, Partners, Join |
| 3. Di blockdev.org | Courses, Knowledge, Hackathon, Sign in (semua tab baru) |
| 4. Terhubung | Telegram, Discord, Instagram, X, YouTube, email komunitas Bali [email diisi] |
| 5. Lokasi | BlockDev Bali, Jl. Raya Kampus Udayana No.20, Jimbaran, Badung, Kabupaten Badung, Bali 80361 [jam buka diisi], tautan ke peta |
| Baris bawah | © 2026 BlockDev Bali, Privacy Policy, nama yayasan Yayasan Literasi Rantai Digital [konfirmasi penulisan dengan BlockDev] |

## Halaman 1: Home (/)

Home menjawab tiga pertanyaan dalam 10 detik pertama: ini komunitas apa, kapan acaranya, dan bagaimana ikut. Urutan blok dari atas ke bawah:

| No | Blok | Isi | Aksi |
|---|---|---|---|
| 1 | Hero | Judul: "Komunitas builder blockchain dan AI di Bali". Subjudul: "Belajar, membangun, dan terhubung dua kali seminggu di Jimbaran." Foto event Bali sebagai latar. Di bawahnya satu baris "Event berikutnya: [judul], [hari], [jam]" | Tombol utama "Lihat jadwal", tombol kedua "Gabung komunitas" |
| 2 | Event minggu ini | 2 sampai 3 kartu event dari data: judul, hari dan jam, tempat, label topik (blockchain, AI, umum), status kuota | Tombol RSVP di tiap kartu, tautan "Semua event" |
| 3 | Apa yang kamu dapat | 4 poin: event rutin gratis, mentoring langsung, jaringan builder Bali, akses ke kursus dan hackathon BlockDev nasional | Tidak ada |
| 4 | Untuk siapa | 3 kartu: mahasiswa dan pemula, developer dan freelancer, founder dan pelaku usaha | Tiap kartu menuju event yang cocok |
| 5 | Angka | Angka Bali yang nyata: jumlah event, jumlah peserta, jumlah kampus mitra. Selama masih kecil, tampilkan juga "15K+ anggota komunitas BlockDev Indonesia" dengan label nasional jelas | Tidak ada |
| 6 | Cara ikut | 3 langkah: RSVP, datang ke BlockDev Bali, masuk grup untuk update | Tombol "RSVP sekarang" |
| 7 | Galeri | 6 sampai 8 foto event dengan keterangan singkat (tanggal dan topik) | Tautan ke galeri (fase 2) |
| 8 | Didukung oleh | Logo kampus, sponsor, dan komunitas mitra | Tautan "Jadi mitra" |
| 9 | Kata peserta | 3 kutipan pendek dengan nama dan asal kampus. Blok ini disembunyikan sampai ada kutipan asli | Tidak ada |
| 10 | FAQ | 5 pertanyaan: biaya, perlu bisa coding atau tidak, bawa apa, lokasi dan parkir, cara jadi pembicara | Tidak ada |
| 11 | Ajakan penutup | "Jangan ketinggalan jadwal berikutnya" dengan tombol Telegram, Discord, dan WhatsApp | Gabung grup |

Catatan konten: jangan menampilkan angka atau logo yang belum bisa dibuktikan. Blok yang datanya kosong (testimoni, galeri) disembunyikan, bukan diisi contoh palsu.

## Halaman 2: Events (/events)

Halaman Events adalah jantung situs: tempat orang melihat jadwal dua event per minggu dan mendaftar. Semua event dikelola dari satu sumber data, sehingga Home, banner, dan halaman ini selalu sinkron.

| No | Blok | Isi |
|---|---|---|
| 1 | Judul halaman | "BlockDev Bali Events" dan satu kalimat: jadwal rutin [hari dan jam diisi], gratis atau berbayar, lokasi tetap |
| 2 | Filter | Topik (Blockchain, AI, Umum), format (Workshop, Meetup, Seminar, Hackathon), waktu (minggu ini, bulan ini) |
| 3 | Daftar mendatang | Kartu event berurutan dari yang terdekat: judul, tanggal dan jam (WITA), label topik dan level, sisa kuota, tombol RSVP |
| 4 | Tambah ke kalender | Tombol Google Calendar dan file .ics untuk tiap event |
| 5 | Arsip | Event lalu dalam satu tabel: tanggal, judul, topik, jumlah peserta, tautan slide atau foto |
| 6 | Jadi pembicara atau tuan rumah | Ajakan singkat dengan tombol menuju /join bagian kontak |

### Halaman detail event (/events/[event-name])

Setiap event memakai data yang sama: judul, slug, tanggal, jam mulai dan selesai, topik, format, level, kuota, pembicara, deskripsi, agenda, tautan RSVP, status (akan datang, penuh, selesai).

| Bagian | Isi |
|---|---|
| Header | Judul, tanggal, jam WITA, lokasi, label topik dan level (pemula, menengah) |
| Deskripsi | Apa yang dipelajari dan hasil akhir peserta |
| Agenda | Rundown per jam |
| Pembicara dan mentor | Foto, nama, peran |
| Yang perlu dibawa | Laptop, akun yang perlu disiapkan, prasyarat |
| Lokasi | Alamat, peta, petunjuk parkir |
| Formulir RSVP | Nama, email, kampus atau pekerjaan, level pengalaman, topik yang diminati, centang persetujuan privasi |
| Setelah acara | Slide, rekaman, foto, tautan materi |

## Halaman 3: About (/about)

Halaman About membangun kepercayaan, terutama untuk kampus dan sponsor yang belum mengenal komunitas ini.

| No | Blok | Isi |
|---|---|---|
| 1 | Siapa kami | 2 paragraf: BlockDev Bali adalah chapter lokal komunitas builder BlockDev Indonesia, fokus pada blockchain, AI, dan emerging technology |
| 2 | Apa yang kami lakukan | Event dua kali seminggu, workshop praktik, mentoring, serta akses ke bootcamp dan hackathon BlockDev nasional |
| 3 | Tim | Wayan Phantom Megaditha, Lead dan mentor nonteknis. Putu Gde Trahwidhi, Co-lead dan mentor teknis. Foto, 2 sampai 3 kalimat bio, tautan LinkedIn. Satu kartu "Relawan" yang mengajak orang bergabung |
| 4 | Lokasi dan akses | Kantor BlockDev Bali di kampus STIKOM Bali, Jimbaran: Jl. Raya Kampus Udayana No.20, Jimbaran, Badung, Kabupaten Badung, Bali 80361; peta dan cara ke sana [jam buka dan parkir diisi] |
| 5 | Bagian dari BlockDev Indonesia | Penjelasan hubungan dengan komunitas nasional, tautan ke blockdev.org/about |
| 6 | Nilai dan aturan komunitas | Terbuka untuk pemula, saling menghargai, dan pernyataan bahwa konten bersifat edukasi, bukan ajakan atau nasihat investasi |
| 7 | Yayasan | Nama yayasan yang menaungi [konfirmasi dengan BlockDev] |
| 8 | Ajakan | Tombol "Lihat jadwal" dan "Gabung" |

## Halaman 4: Partners (/partners)

Halaman Partners ditulis untuk sponsor, CSR, kampus, dan perusahaan lokal. Nadanya lebih formal, dengan bukti dampak di depan dan cara kerja sama yang jelas.

| No | Blok | Isi |
|---|---|---|
| 1 | Hero | "Dukung talenta teknologi Bali" dan satu kalimat tentang dua event per minggu. Tombol "Hubungi tim" dan "Unduh proposal" |
| 2 | Dampak | Jumlah event, peserta, kampus mitra, topik yang diajarkan. Diisi dari data nyata dan diperbarui tiap bulan |
| 3 | Bentuk kerja sama | Tabel di bawah |
| 4 | Cara kerja | 3 langkah: hubungi tim, diskusi kebutuhan, kesepakatan dan laporan hasil |
| 5 | Transparansi | Janji laporan dampak setelah program, dan penggunaan dukungan sesuai kesepakatan |
| 6 | Mitra saat ini | Logo dan nama, hanya yang sudah memberi izin tampil |
| 7 | Unduhan | Proposal kerja sama (PDF) dan ringkasan dampak, dibuat setelah ada data event |
| 8 | Formulir mitra | Nama, organisasi, email, jenis kerja sama, pesan |

### Bentuk kerja sama

| Bentuk kerja sama | Yang diberikan mitra | Yang didapat mitra |
|---|---|---|
| Sponsor event | Dana atau konsumsi untuk satu atau beberapa event | Logo di halaman event dan materi, sebutan saat acara, laporan peserta |
| Mitra kampus | Tempat, akses mahasiswa, pengakuan kegiatan | Program belajar untuk mahasiswa, kegiatan bersama |
| Mitra pembicara | Waktu dan keahlian | Panggung, jaringan talenta, dokumentasi |
| Program CSR | Pendanaan program pelatihan untuk kelompok tertentu | Laporan dampak terukur, cerita peserta |
| Mitra media | Publikasi | Akses liputan dan narasumber |

Nilai nominal paket tidak ditampilkan di web. Cukup di proposal yang dikirim setelah dihubungi.

## Halaman 5: Join (/join)

Satu halaman untuk semua cara terhubung. Tujuannya mengurangi bingung: pengunjung memilih saluran yang cocok, lalu selesai.

| No | Blok | Isi |
|---|---|---|
| 1 | Pilih saluran | Kartu untuk Telegram (diskusi dan info event), Discord (mentoring dan proyek), WhatsApp grup Bali [tautan disiapkan], Instagram, YouTube, X. Tiap kartu menjelaskan fungsinya dalam satu kalimat |
| 2 | Kabar event | Kolom email untuk menerima jadwal mingguan (opsional) |
| 3 | Formulir kontak | Nama, email, topik (pertanyaan umum, jadi pembicara, kerja sama, media), pesan, centang privasi |
| 4 | Kontak langsung | Email komunitas Bali [diisi] |
| 5 | Lokasi | Peta dan petunjuk ke kantor BlockDev Bali |
| 6 | FAQ singkat | 3 pertanyaan paling sering masuk |

## Halaman 6: Privacy (/privacy)

Halaman sederhana, hanya ada di footer, tetapi wajib karena formulir RSVP dan kontak mengumpulkan data pribadi.

- **Data yang dikumpulkan:** nama, email, kampus atau pekerjaan, dan jawaban formulir.
- **Tujuan:** mengelola pendaftaran event, mengirim info acara, dan membuat laporan dampak tanpa identitas.
- **Penyimpanan dan pihak ketiga:** sebutkan layanan formulir, email, dan analitik yang dipakai.
- **Hak peserta:** meminta data dihapus lewat email komunitas.
- **Kontak pengelola data.**

Sesuaikan isinya dengan UU Pelindungan Data Pribadi dan minta tinjauan dari pihak yang paham hukum sebelum rilis.

## Panduan konten dan desain

- **Bahasa:** Indonesia santai tapi rapi, kalimat pendek, istilah teknis dijelaskan sekali di tempat pertama muncul.
- **Nada:** ramah pemula. Hindari janji keuntungan, harga aset, atau ajakan investasi.
- **Visual:** ikuti identitas BlockDev di blockdev.org (logo dan warna) supaya jelas satu keluarga, tambahkan foto asli event Bali sebagai pembeda.
- **Foto:** pakai foto event sendiri, minta izin peserta yang wajahnya jelas terlihat.
- Satu tombol utama per halaman, tombol kedua bergaya lebih ringan.
- Mobile dulu: sebagian besar mahasiswa akan membuka dari ponsel.
- Data kosong disembunyikan, tidak diisi contoh.

## Spesifikasi teknis ringkas

| Hal | Usulan | Catatan |
|---|---|---|
| Domain | Subdomain bali.blockdev.org lewat catatan CNAME ke Vercel. Domain sementara selama pengembangan: baliblockdev.vercel.app | Perlu akses DNS blockdev.org dari pengelola BlockDev pusat. Alamat bali.blockdev.vercel.app kemungkinan tidak bisa dipakai, karena Vercel hanya memberi satu tingkat sebelum vercel.app; nama proyek menentukan alamatnya |
| Hosting | Vercel paket gratis | Cukup untuk situs statis dan trafik komunitas |
| Bentuk situs | Situs statis dengan data event di satu berkas atau tabel | Event diperbarui tanpa mengubah desain |
| RSVP | Embed Luma atau formulir sendiri yang menyimpan ke Google Sheets atau database | Pilih salah satu sebelum membangun |
| Kontak dan kabar event | Formulir sederhana ke email komunitas | Tambahkan perlindungan spam |
| Analitik | Alat ringan yang ramah privasi | Ukur: klik RSVP, klik Gabung, unduhan proposal |
| SEO | Judul dan deskripsi tiap halaman, gambar share (OG), peta situs | Kata kunci: komunitas blockchain Bali, event AI Bali, workshop Web3 Bali |
| Aksesibilitas | Kontras jelas, teks alternatif untuk foto, bisa dipakai dengan keyboard | Standar dasar |

## Rencana peluncuran

| Tahap | Pekerjaan | Hasil |
|---|---|---|
| 1. Persiapan | Konfirmasi domain, logo, nama yayasan, alamat dan jam kantor, email komunitas | Daftar aset lengkap |
| 2. Konten | Tulis teks 6 halaman, kumpulkan foto event, siapkan bio tim | Naskah final |
| 3. Wireframe | Gambar kerangka beranda dan satu halaman event | Persetujuan tampilan |
| 4. Bangun | Kerjakan semua halaman, formulir, dan data event | Situs versi uji di Vercel |
| 5. Uji | Cek di ponsel, uji formulir, cek kecepatan dan tautan | Daftar perbaikan selesai |
| 6. Rilis | Arahkan subdomain, umumkan di Telegram, Discord, dan Instagram | Situs publik |
| 7. Bulanan | Perbarui angka dampak, arsip event, dan galeri | Konten tetap segar |

## Target awal mitra

Dari riset sebelumnya, kandidat yang cocok didekati lewat halaman Partners setelah ada angka dampak: Bank BPD Bali (aktif memberi beasiswa pendidikan), kantor regional Telkomsel (program talenta digital), Lintasarta (kurikulum Cloudeka Digischool), dan komunitas Web3 Bali seperti Satoshi 21 untuk sponsor atau tempat acara. Cek dulu apakah masing-masing sedang membuka kerja sama.

## Pertanyaan terbuka

- [ ] Siapa yang memegang akses DNS blockdev.org untuk membuat subdomain bali?
- [ ] Boleh memakai logo dan palet warna BlockDev pusat sebagai dasar desain?
- [ ] Hari, jam, dan format dua event mingguan (topik tiap sesi)?
- [ ] Event gratis atau berbayar, dan apakah ada kuota?
- [ ] Jam buka dan petunjuk parkir kantor BlockDev Bali (alamat sudah ada)?
- [ ] Penulisan resmi nama yayasan untuk footer dan halaman Tentang?
- [ ] Email dan nomor kontak resmi komunitas Bali?
- [ ] Foto dan bio untuk Wayan dan Pak Trahwidhi?
- [ ] RSVP memakai Luma atau formulir sendiri?