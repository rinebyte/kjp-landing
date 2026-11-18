import type { Metadata } from "next";

// Root sengaja dibiarkan kosong. Landing page ada di /home.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function RootPage() {
  return null;
}
