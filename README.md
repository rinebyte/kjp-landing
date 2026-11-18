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

Link daftar, masuk, dan customer service ada di `lib/site.ts`.
Domain untuk sitemap/canonical diambil dari `NEXT_PUBLIC_SITE_URL`
(default `https://koijp.com`).
