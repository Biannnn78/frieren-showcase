# Frieren — Beyond Journey's End

## Instalasi dan menjalankan server

Gunakan Node.js 20.19+ atau 22+.

```bash
npm install
npm run dev
```

Buka URL lokal yang ditampilkan Vite (biasanya http://localhost:5173).

```bash
npm run build
npm run preview
```

React, TypeScript, Vite, Tailwind CSS v4 (plugin Vite), dan Lucide React. Styling tema dan responsive berada di `src/styles.css`; data bertipe ada di `src/data/frierenData.ts`. Komponen Hero, Lore, Grimoire, CharacterCard, dan Gallery terpisah.

Fitur: kutipan berganti setiap 9 detik atau lewat tombol, timeline 0–80 tahun, filter Utility/Combat, catatan mantra, filter party, dan lightbox dengan navigasi keyboard panah, Escape, serta pengembalian fokus. Animasi mengikuti preferensi reduced motion.

Foto lanskap Unsplash adalah placeholder suasana, bukan gambar anime resmi. Potret karakter menggunakan monogram dekoratif yang bisa diganti ilustrasi berlisensi. Font dimuat dari Google Fonts; font fallback tersedia. Gambar dan font eksternal memerlukan koneksi internet. Kutipan merupakan adaptasi kreatif, dan Angin Pencari adalah mantra original demo. Proyek penggemar tidak resmi, tidak terafiliasi dengan pemilik Frieren.
