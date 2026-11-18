/** Ganti nilai-nilai ini sesuai link resmi KOIJP. */

/** Domain landing page ini — dipakai untuk canonical, sitemap, dan og:url. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://koijp.sh";

/** Link resmi yang ditampilkan ke pengunjung dan dituju tombol Daftar/Masuk. */
export const OFFICIAL_DOMAIN = "linkkoijp.com";
export const OFFICIAL_URL = `https://${OFFICIAL_DOMAIN}`;

export const REGISTER_HREF = OFFICIAL_URL;
export const LOGIN_HREF = OFFICIAL_URL;
export const CS_HREF = "https://wa.me/6281234567890";

export const SECTIONS = [
  { id: "keunggulan", label: "Keunggulan" },
  { id: "permainan", label: "Permainan" },
  { id: "cara-daftar", label: "Cara daftar" },
  { id: "pembayaran", label: "Pembayaran" },
  { id: "faq", label: "FAQ" },
] as const;
