# Yohanes Pratama Naibaho — Portfolio

Portfolio pribadi [Yohanes Pratama Naibaho](https://yohanesnaibaho.com/) yang menampilkan profil, pengalaman kerja, proyek pilihan, dan keahlian teknis.

## Fitur

- Dukungan enam bahasa: Inggris, Indonesia, Mandarin, Korea, Jepang, dan Arab
- Tema terang dan gelap yang tersimpan di browser
- Tampilan responsif untuk desktop dan perangkat mobile
- Navigasi aksesibel dan dukungan `prefers-reduced-motion`
- SEO metadata, sitemap, robots.txt, dan structured data
- Resume PDF yang dapat dibuka langsung

## Teknologi

- React 19
- Vite 8
- CSS
- Bun

## Menjalankan secara lokal

Pastikan [Bun](https://bun.sh/) sudah terpasang, lalu jalankan:

```bash
bun install
bun run dev
```

Buka alamat yang ditampilkan Vite di terminal.

## Build produksi

```bash
bun run build
bun run preview
```

Hasil build tersedia di folder `dist`.

## Struktur utama

```text
src/App.jsx       Konten dan komponen portfolio
src/index.css     Styling, tema, dan layout responsif
public/           Font, favicon, resume, sitemap, dan robots.txt
index.html        Metadata dan entry point aplikasi
```

## Kustomisasi

- Ubah profil, pengalaman, proyek, keahlian, dan terjemahan di `src/App.jsx`.
- Ubah warna, tipografi, dan layout di `src/index.css`.
- Ganti resume di `public/Yohanes-Pratama-Naibaho-resume.pdf`.
- Sesuaikan metadata dan URL situs di `index.html`, `public/sitemap.xml`, dan `public/robots.txt`.

## Lisensi

Proyek ini menggunakan [MIT License](LICENSE). Anda boleh menyalin, menggunakan, mengubah, dan mendistribusikan proyek ini selama tetap menyertakan pemberitahuan hak cipta dan lisensinya.

