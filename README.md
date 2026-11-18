# KOIJP Landing

Landing page KOIJP (Next.js 16 + Tailwind CSS 4).

- `/home` — landing page
- `/` — sengaja dibiarkan kosong (noindex)

## Menjalankan

```bash
bun install
bun dev
```

Buka http://localhost:3000/home.

## Konfigurasi

Semua link ada di `lib/site.ts`:

- `OFFICIAL_DOMAIN` — link resmi yang ditampilkan dan dituju tombol
  Daftar/Masuk (`linkkoijp.com`)
- `CS_HREF` — WhatsApp customer service
- `SITE_URL` — domain untuk canonical, sitemap, dan og:url
  (`https://koijp.sh`, bisa di-override lewat `NEXT_PUBLIC_SITE_URL`)
