/** Ganti nilai-nilai ini sesuai link resmi KOIJP. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://koijp.com";
export const REGISTER_HREF = "https://koijp.com";
export const LOGIN_HREF = "https://koijp.com";
export const CS_HREF = "https://wa.me/6281234567890";

export const SECTIONS = [
  { id: "keunggulan", label: "Keunggulan" },
  { id: "permainan", label: "Permainan" },
  { id: "cara-daftar", label: "Cara daftar" },
  { id: "pembayaran", label: "Pembayaran" },
  { id: "faq", label: "FAQ" },
] as const;
