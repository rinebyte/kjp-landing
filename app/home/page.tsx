import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowUpRight,
  Dices,
  Gauge,
  Headphones,
  Layers,
  Plus,
  ShieldCheck,
  Ticket,
  Trophy,
  Tv,
  Wallet,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CS_HREF, LOGIN_HREF, REGISTER_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: "KOIJP — Slot, Live Casino, Sportsbook & Togel",
  description:
    "Satu akun KOIJP untuk slot, live casino, sportsbook, dan togel. Daftar cepat, transaksi lewat bank, e-wallet, QRIS, dan pulsa, dengan customer service 24 jam.",
  alternates: { canonical: "/home" },
  openGraph: {
    title: "KOIJP — Slot, Live Casino, Sportsbook & Togel",
    description:
      "Satu akun untuk slot, live casino, sportsbook, dan togel. Customer service 24 jam.",
    url: "/home",
    images: [{ url: "/banners/banner-2.jpg", width: 2249, height: 1093 }],
    locale: "id_ID",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-4 pb-24 sm:gap-32 sm:px-6">
        <Hero />
        <Features />
        <Games />
        <Steps />
        <Payments />
        <Faq />
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  );
}

/* ---------------------------------------------------------------- */

function PrimaryCta({ children = "Daftar sekarang" }: { children?: React.ReactNode }) {
  return (
    <a
      href={REGISTER_HREF}
      rel="nofollow noopener"
      target="_blank"
      className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-[15px] font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
    >
      {children}
      <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
    </a>
  );
}

function SecondaryCta({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      rel="nofollow noopener"
      target="_blank"
      className="inline-flex h-12 items-center rounded-full px-6 text-[15px] text-foreground ring-1 ring-border transition-colors hover:bg-white/[0.04]"
    >
      {children}
    </a>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="flex max-w-2xl flex-col gap-3">
      <p className="text-sm text-primary">{eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl">{title}</h2>
      {description ? (
        <p className="text-[15px] leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}

/* ---------------------------------------------------------------- */

function Hero() {
  return (
    <section className="relative flex flex-col items-center gap-10 pt-14 text-center sm:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-16 -z-10 mx-auto h-[28rem] max-w-4xl bg-[radial-gradient(closest-side,oklch(0.6_0.215_25/0.18),transparent)]"
      />

      <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-3 py-1 text-xs text-muted-foreground ring-1 ring-border">
        <span className="size-1.5 rounded-full bg-primary" />
        Slot · Live Casino · Sportsbook · Togel
      </span>

      <div className="flex max-w-3xl flex-col items-center gap-5">
        <h1 className="text-4xl leading-[1.05] sm:text-6xl">
          Semua permainan favorit,
          <br className="hidden sm:block" /> <span className="text-primary">satu akun KOIJP.</span>
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Ratusan game dari provider ternama, transaksi lewat bank dan e-wallet
          lokal, dan tim customer service yang siap membantu 24 jam.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <PrimaryCta />
        <SecondaryCta href={LOGIN_HREF}>Sudah punya akun? Masuk</SecondaryCta>
      </div>

      <div className="w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-border sm:rounded-3xl">
        <Image
          src="/banners/banner-2.jpg"
          alt="KOIJP — selalu ingat link resmi koijp.com"
          width={2249}
          height={1093}
          priority
          sizes="(max-width: 1152px) 100vw, 1152px"
          className="block h-auto w-full"
        />
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */

const FEATURES = [
  {
    icon: Layers,
    title: "Ratusan game",
    body: "Pilihan slot, live casino, sportsbook, dan togel dari berbagai provider dalam satu tempat.",
  },
  {
    icon: Gauge,
    title: "Ringan & stabil",
    body: "Server lokal supaya halaman dan permainan tetap lancar, baik dari HP maupun desktop.",
  },
  {
    icon: Wallet,
    title: "Transaksi lokal",
    body: "Deposit dan withdraw lewat bank, e-wallet, QRIS, atau pulsa — tanpa ribet.",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    body: "Customer service siap membantu kapan saja lewat WhatsApp.",
  },
];

function Features() {
  return (
    <section id="keunggulan" className="flex flex-col gap-10">
      <SectionTitle
        eyebrow="Keunggulan"
        title="Dibuat simpel, dari daftar sampai main."
      />
      <div className="grid gap-px overflow-hidden rounded-2xl bg-border ring-1 ring-border sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f) => (
          <div key={f.title} className="flex flex-col gap-4 bg-card p-6">
            <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
              <f.icon className="size-5" />
            </span>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-base">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */

const GAMES = [
  {
    icon: Dices,
    title: "Slot",
    body: "Ratusan judul slot dengan beragam tema, fitur, dan provider.",
  },
  {
    icon: Tv,
    title: "Live Casino",
    body: "Baccarat, roulette, sic bo, dan lainnya bersama dealer langsung.",
  },
  {
    icon: Trophy,
    title: "Sportsbook",
    body: "Sepak bola, basket, dan liga lainnya — termasuk mix parlay.",
  },
  {
    icon: Ticket,
    title: "Togel",
    body: "Pasaran Hong Kong, Singapore, Sydney, Macau, dan lainnya.",
  },
];

function Games() {
  return (
    <section id="permainan" className="flex flex-col gap-10">
      <SectionTitle
        eyebrow="Permainan"
        title="Pilih cara bermainmu."
        description="Semua kategori bisa diakses dari satu akun dan satu saldo."
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {GAMES.map((g) => (
          <div
            key={g.title}
            className="surface group flex items-start gap-5 p-6 transition-colors hover:bg-white/[0.04]"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white/[0.05] text-foreground ring-1 ring-border">
              <g.icon className="size-5" />
            </span>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-lg">{g.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{g.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */

const STEPS = [
  {
    title: "Daftar akun",
    body: "Isi data singkat di halaman pendaftaran. Hanya butuh beberapa menit.",
  },
  {
    title: "Isi saldo",
    body: "Deposit lewat bank, e-wallet, QRIS, atau pulsa sesuai pilihanmu.",
  },
  {
    title: "Mulai bermain",
    body: "Pilih slot, live casino, sportsbook, atau togel — dan tetapkan batasmu.",
  },
];

function Steps() {
  return (
    <section id="cara-daftar" className="flex flex-col gap-10">
      <SectionTitle eyebrow="Cara daftar" title="Mulai dalam tiga langkah." />
      <ol className="grid gap-3 md:grid-cols-3">
        {STEPS.map((s, i) => (
          <li key={s.title} className="surface flex flex-col gap-6 p-6">
            <span className="font-mono text-sm text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-lg">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <div>
        <PrimaryCta>Daftar akun</PrimaryCta>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */

const PAYMENTS = [
  { name: "BCA", src: "/payment-methods/images.png" },
  { name: "Mandiri", src: "/payment-methods/Bank_Mandiri_logo_2016.svg.png" },
  { name: "BNI", src: "/payment-methods/bni-optimized.png" },
  { name: "BRI", src: "/payment-methods/bri-optimized.png" },
  { name: "DANA", src: "/payment-methods/Logo_dana_blue.svg.png" },
  { name: "OVO", src: "/payment-methods/Logo_ovo_purplesvg.png" },
  { name: "GoPay", src: "/payment-methods/Gopay_logo.svg.png" },
  { name: "QRIS", src: "/payment-methods/Logo_QRIS.svg.png" },
  { name: "Telkomsel", src: "/payment-methods/telkomsel-baru-2021.png" },
];

function Payments() {
  return (
    <section id="pembayaran" className="flex flex-col gap-10">
      <SectionTitle
        eyebrow="Pembayaran"
        title="Bank, e-wallet, QRIS, dan pulsa."
        description="Gunakan metode yang paling nyaman untukmu."
      />
      <ul className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-9">
        {PAYMENTS.map((p) => (
          <li
            key={p.name}
            title={p.name}
            className="grid h-16 place-items-center rounded-2xl bg-white px-3"
          >
            <div className="relative h-7 w-full">
              <Image src={p.src} alt={p.name} fill sizes="96px" className="object-contain" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------------------------------------------------------------- */

const FAQS = [
  {
    q: "Bagaimana cara mendaftar di KOIJP?",
    a: "Klik tombol Daftar, isi data yang diminta, lalu akun bisa langsung dipakai. Kalau ada kendala, hubungi customer service kami.",
  },
  {
    q: "Metode pembayaran apa saja yang tersedia?",
    a: "Transfer bank (BCA, Mandiri, BNI, BRI), e-wallet (DANA, OVO, GoPay), QRIS, dan pulsa Telkomsel.",
  },
  {
    q: "Apa link resmi KOIJP?",
    a: "Selalu akses KOIJP lewat koijp.com atau link yang dibagikan langsung oleh customer service resmi kami.",
  },
  {
    q: "Apakah KOIJP bisa dimainkan lewat HP?",
    a: "Bisa. Situs dapat dibuka dari browser HP maupun desktop tanpa perlu instal aplikasi.",
  },
  {
    q: "Siapa yang boleh bermain?",
    a: "Hanya pengguna berusia 18 tahun ke atas. Bermainlah untuk hiburan, tetapkan batas waktu dan dana, dan berhenti saat batas tercapai.",
  },
];

function Faq() {
  return (
    <section id="faq" className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
      <SectionTitle
        eyebrow="FAQ"
        title="Pertanyaan yang sering diajukan."
        description="Belum menemukan jawabannya? Customer service kami siap membantu 24 jam."
      />
      <div className="divide-y divide-border border-y border-border">
        {FAQS.map((f) => (
          <details key={f.q} className="group py-1">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[15px] font-medium [&::-webkit-details-marker]:hidden">
              {f.q}
              <Plus className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-45" />
            </summary>
            <p className="pb-5 pr-8 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */

function ClosingCta() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-card px-6 py-16 text-center ring-1 ring-border sm:px-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_16rem_at_50%_120%,oklch(0.6_0.215_25/0.22),transparent)]"
      />
      <div className="relative flex flex-col items-center gap-6">
        <ShieldCheck className="size-8 text-primary" />
        <h2 className="max-w-xl text-3xl sm:text-4xl">Siap bermain? Buat akunmu sekarang.</h2>
        <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
          Khusus 18+. Bermain untuk hiburan, tetapkan batas, dan hubungi kami
          kapan saja jika butuh bantuan.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <PrimaryCta />
          <SecondaryCta href={CS_HREF}>Hubungi CS</SecondaryCta>
        </div>
      </div>
    </section>
  );
}
