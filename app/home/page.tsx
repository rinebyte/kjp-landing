import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowUpRight,
  Dices,
  MessageCircle,
  Plus,
  ShieldCheck,
  Smartphone,
  Spade,
  Ticket,
  Trophy,
  Wallet,
} from "lucide-react";

import { KoiPond } from "@/components/koi-pond";
import { Seigaiha } from "@/components/seigaiha";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  CS_HREF,
  LOGIN_HREF,
  OFFICIAL_DOMAIN,
  OFFICIAL_URL,
  REGISTER_HREF,
} from "@/lib/site";

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
    images: [{ url: "/banners/banner-torii.webp", width: 1774, height: 887 }],
    locale: "id_ID",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <div className="mx-auto flex max-w-6xl flex-col gap-28 px-5 py-28 sm:gap-40 sm:px-8 sm:py-36">
          <Features />
          <Games />
          <Steps />
          <OfficialLink />
          <Payments />
          <Faq />
        </div>
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  );
}

/* ================================================================ */
/* Shared                                                            */
/* ================================================================ */

function PrimaryCta({ children = "Daftar sekarang" }: { children?: React.ReactNode }) {
  return (
    <a
      href={REGISTER_HREF}
      rel="nofollow noopener"
      target="_blank"
      className="group inline-flex h-13 items-center gap-3 rounded-full bg-primary py-2 pr-2 pl-6 text-[15px] font-medium text-primary-foreground shadow-[0_10px_40px_-10px] shadow-primary/60 transition-[filter] hover:brightness-110"
    >
      {children}
      <span className="grid size-9 place-items-center rounded-full bg-black/20 transition-transform group-hover:rotate-45">
        <ArrowUpRight className="size-4" />
      </span>
    </a>
  );
}

function GhostCta({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      rel="nofollow noopener"
      target="_blank"
      className="inline-flex h-13 items-center rounded-full px-6 text-[15px] text-foreground ring-1 ring-white/15 transition-colors hover:bg-white/[0.05]"
    >
      {children}
    </a>
  );
}

function SectionHeading({
  index,
  label,
  children,
  description,
  align = "left",
}: {
  index: string;
  label: string;
  children: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  const center = align === "center";
  return (
    <div className={`reveal flex flex-col gap-5 ${center ? "items-center text-center" : ""}`}>
      <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] text-gold uppercase">
        <span>{index}</span>
        <span className="h-px w-8 bg-gold/50" />
        <span>{label}</span>
      </p>
      <h2 className="display max-w-3xl text-5xl sm:text-6xl lg:text-7xl">{children}</h2>
      {description ? (
        <p className="max-w-xl text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}

function Em({ children }: { children: React.ReactNode }) {
  return <em className="text-primary italic">{children}</em>;
}

/* ================================================================ */
/* Hero                                                              */
/* ================================================================ */

const HERO_TAGS = [
  { label: "Slot", pos: "left-[2%] top-[14%]", delay: "0s" },
  { label: "Live Casino", pos: "right-[-2%] top-[30%]", delay: "-1.2s" },
  { label: "Sportsbook", pos: "left-[-4%] bottom-[22%]", delay: "-2.4s" },
  { label: "Togel", pos: "right-[8%] bottom-[6%]", delay: "-3.4s" },
];

function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-36 lg:pb-24">
      {/* atmosphere */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_75%_35%,oklch(0.64_0.2_33/0.16),transparent_70%),radial-gradient(40rem_30rem_at_0%_100%,oklch(0.83_0.1_82/0.06),transparent_70%)]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.25fr_1fr] lg:gap-10">
        <div className="flex flex-col gap-8">
          <p className="animate-rise flex w-fit items-center gap-2.5 rounded-full bg-white/[0.04] py-1.5 pr-4 pl-1.5 text-xs text-muted-foreground ring-1 ring-white/10">
            <span className="font-kanji grid size-6 place-items-center rounded-full bg-primary text-[13px] text-primary-foreground">
              鯉
            </span>
            Slot · Live Casino · Sportsbook · Togel
          </p>

          <h1
            className="display animate-rise text-[clamp(3.25rem,6.6vw,6rem)]"
            style={{ animationDelay: "80ms" }}
          >
            Semua permainan favoritmu, dalam <Em>satu kolam.</Em>
          </h1>

          <p
            className="animate-rise max-w-md text-lg leading-relaxed text-muted-foreground"
            style={{ animationDelay: "160ms" }}
          >
            Satu akun KOIJP untuk ratusan game, transaksi lewat bank dan
            e-wallet lokal, serta customer service yang siaga 24 jam.
          </p>

          <div
            className="animate-rise flex flex-wrap items-center gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <PrimaryCta />
            <GhostCta href={LOGIN_HREF}>Masuk</GhostCta>
          </div>

          <ul
            className="animate-rise flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground"
            style={{ animationDelay: "320ms" }}
          >
            {["Khusus 18+", "CS 24/7", "Bank, e-wallet & QRIS"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="size-1 rotate-45 bg-gold" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[520px]">
          <div
            aria-hidden
            className="absolute inset-[8%] -z-10 rounded-full bg-primary/25 blur-3xl"
          />
          <KoiPond className="size-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]" />
          {HERO_TAGS.map((t) => (
            <span
              key={t.label}
              className={`animate-bob absolute ${t.pos} rounded-full bg-background/70 px-4 py-2 text-sm shadow-lg shadow-black/40 ring-1 ring-white/10 backdrop-blur-md`}
              style={{ animationDelay: t.delay }}
            >
              <span className="mr-2 inline-block size-1.5 rounded-full bg-primary align-middle" />
              {t.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================ */
/* Marquee                                                           */
/* ================================================================ */

const MARQUEE = [
  "Slot",
  "Live Casino",
  "Sportsbook",
  "Togel",
  "CS 24/7",
  "Bank lokal",
  "E-wallet",
  "QRIS",
  "Pulsa",
];

function Marquee() {
  const row = [...MARQUEE, ...MARQUEE];
  return (
    <div className="relative overflow-hidden border-y border-border bg-surface/50 py-6 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <ul className="animate-marquee flex w-max items-center gap-10">
        {row.map((t, i) => (
          <li key={i} aria-hidden={i >= MARQUEE.length} className="flex items-center gap-10">
            <span className="display text-3xl text-foreground/85 italic sm:text-4xl">{t}</span>
            <span className="size-1.5 rotate-45 bg-gold/70" />
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ================================================================ */
/* Features — bento                                                  */
/* ================================================================ */

const CATEGORIES = [
  { icon: Dices, label: "Slot" },
  { icon: Spade, label: "Live Casino" },
  { icon: Trophy, label: "Sportsbook" },
  { icon: Ticket, label: "Togel" },
];

function Tile({
  className = "",
  accent = false,
  children,
}: {
  className?: string;
  accent?: boolean;
  children: React.ReactNode;
}) {
  const tone = accent
    ? "bg-primary text-primary-foreground"
    : "bg-surface ring-1 ring-white/[0.06]";
  return (
    <div className={`reveal relative overflow-hidden rounded-[2rem] p-7 sm:p-8 ${tone} ${className}`}>
      {children}
    </div>
  );
}

function Features() {
  return (
    <section id="keunggulan" className="flex flex-col gap-14">
      <SectionHeading index="01" label="Keunggulan">
        Dibuat tenang, <Em>dari daftar sampai main.</Em>
      </SectionHeading>

      <div className="grid gap-4 lg:grid-cols-6">
        <Tile className="flex flex-col justify-between gap-10 lg:col-span-4 lg:row-span-2">
          <div className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-96 opacity-60 [mask-image:radial-gradient(closest-side,black,transparent)]">
            <Seigaiha id="bento-wave" fill="var(--surface)" stroke="var(--gold)" strokeOpacity={0.18} />
          </div>
          <div className="relative flex flex-col gap-3">
            <h3 className="display text-4xl sm:text-5xl">Satu akun. Satu saldo.</h3>
            <p className="max-w-sm text-muted-foreground">
              Pindah dari slot ke sportsbook tanpa ganti akun atau pindah dana.
            </p>
          </div>
          <ul className="relative grid grid-cols-2 gap-3 sm:max-w-md">
            {CATEGORIES.map((c) => (
              <li
                key={c.label}
                className="flex items-center gap-3 rounded-2xl bg-background/60 p-3 ring-1 ring-white/[0.06]"
              >
                <span className="grid size-10 place-items-center rounded-xl bg-primary/15 text-primary">
                  <c.icon className="size-5" />
                </span>
                <span className="text-sm font-medium">{c.label}</span>
              </li>
            ))}
          </ul>
        </Tile>

        <Tile accent className="flex flex-col justify-between gap-6 lg:col-span-2">
          <MessageCircle className="size-6" />
          <div>
            <p className="display text-7xl">24/7</p>
            <p className="mt-2 text-sm text-primary-foreground/85">
              Customer service siaga lewat WhatsApp, kapan pun kamu butuh.
            </p>
          </div>
        </Tile>

        <Tile className="flex flex-col justify-between gap-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <Smartphone className="size-6 text-gold" />
            <PhoneSketch />
          </div>
          <div>
            <h3 className="display text-3xl">Ringan di HP</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Buka dari browser, tanpa perlu instal aplikasi.
            </p>
          </div>
        </Tile>

        <Tile className="flex flex-col justify-between gap-8 lg:col-span-3">
          <div className="flex items-center gap-3">
            <Wallet className="size-6 text-gold" />
            <h3 className="display text-3xl">Transaksi lokal</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {["BCA", "Mandiri", "BNI", "BRI", "DANA", "OVO", "GoPay", "QRIS", "Pulsa"].map((p) => (
              <span
                key={p}
                className="rounded-full bg-background/60 px-3 py-1.5 text-xs text-muted-foreground ring-1 ring-white/[0.06]"
              >
                {p}
              </span>
            ))}
          </div>
        </Tile>

        <Tile className="flex flex-col justify-between gap-8 lg:col-span-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShieldCheck className="size-6 text-gold" />
              <h3 className="display text-3xl">Server lokal</h3>
            </div>
            <SignalBars />
          </div>
          <p className="text-sm text-muted-foreground">
            Halaman dan permainan tetap lancar, baik dari HP maupun desktop.
          </p>
        </Tile>
      </div>
    </section>
  );
}

function PhoneSketch() {
  return (
    <div aria-hidden className="relative h-20 w-11 rounded-[0.7rem] p-1 ring-1 ring-white/20">
      <div className="flex h-full flex-col gap-1 rounded-[0.45rem] bg-background/80 p-1">
        <div className="h-1.5 w-4 rounded-full bg-primary" />
        <div className="h-5 rounded bg-white/10" />
        <div className="grid grid-cols-2 gap-0.5">
          <div className="h-2.5 rounded-sm bg-white/10" />
          <div className="h-2.5 rounded-sm bg-white/10" />
          <div className="h-2.5 rounded-sm bg-white/10" />
          <div className="h-2.5 rounded-sm bg-primary/60" />
        </div>
      </div>
    </div>
  );
}

function SignalBars() {
  return (
    <div aria-hidden className="flex items-end gap-1">
      {[8, 14, 20, 26].map((h, i) => (
        <span
          key={h}
          className="w-1.5 rounded-full bg-gold"
          style={{ height: h, opacity: 0.4 + i * 0.2 }}
        />
      ))}
      <span className="relative ml-2 grid size-2.5 place-items-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" />
        <span className="size-2.5 rounded-full bg-emerald-400" />
      </span>
    </div>
  );
}

/* ================================================================ */
/* Games                                                             */
/* ================================================================ */

function SlotArt() {
  return (
    <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_50%_30%,oklch(0.7_0.2_35),oklch(0.5_0.19_30))]">
      <div className="flex gap-2 rounded-2xl bg-black/25 p-2 ring-1 ring-white/20">
        {["7", "7", "7"].map((n, i) => (
          <span
            key={i}
            className="display grid h-20 w-14 place-items-center rounded-xl bg-paper text-5xl text-primary shadow-inner"
          >
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}

function CasinoArt() {
  return (
    <div className="relative flex h-full items-center justify-center bg-[radial-gradient(circle_at_50%_40%,oklch(0.42_0.08_160),oklch(0.25_0.05_165))]">
      <div className="absolute inset-6 rounded-full border border-dashed border-white/15" />
      {[
        { s: "♠", c: "text-ink", r: "-rotate-12 -translate-x-6" },
        { s: "♥", c: "text-primary", r: "rotate-12 translate-x-6" },
      ].map((card) => (
        <span
          key={card.s}
          className={`absolute grid h-28 w-20 place-items-center rounded-xl bg-paper text-5xl shadow-xl shadow-black/40 ${card.c} ${card.r}`}
        >
          {card.s}
        </span>
      ))}
    </div>
  );
}

function SportsArt() {
  return (
    <div className="relative h-full bg-[oklch(0.24_0.02_250)]">
      <svg viewBox="0 0 200 150" className="absolute inset-0 size-full" aria-hidden>
        <g fill="none" stroke="white" strokeOpacity="0.25" strokeWidth="1.2">
          <rect x="12" y="12" width="176" height="126" rx="2" />
          <line x1="100" y1="12" x2="100" y2="138" />
          <circle cx="100" cy="75" r="22" />
          <rect x="12" y="47" width="26" height="56" />
          <rect x="162" y="47" width="26" height="56" />
        </g>
        <circle cx="100" cy="75" r="9" fill="var(--paper)" />
        <path
          d="M30 110 Q 70 30 100 75"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1.5"
          strokeDasharray="3 4"
        />
      </svg>
    </div>
  );
}

function TogelArt() {
  return (
    <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_50%_30%,oklch(0.86_0.1_85),oklch(0.7_0.11_75))]">
      <div className="grid grid-cols-2 gap-2.5">
        {["4", "8", "2", "7"].map((n, i) => (
          <span
            key={i}
            className={`display grid size-14 place-items-center rounded-full text-3xl shadow-lg shadow-black/20 ${
              i === 3 ? "bg-primary text-primary-foreground" : "bg-ink text-paper"
            }`}
          >
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}

const GAMES = [
  {
    title: "Slot",
    body: "Ratusan judul dengan beragam tema dan fitur.",
    art: SlotArt,
  },
  {
    title: "Live Casino",
    body: "Baccarat, roulette, sic bo bersama dealer langsung.",
    art: CasinoArt,
  },
  {
    title: "Sportsbook",
    body: "Sepak bola, basket, dan liga lainnya — termasuk mix parlay.",
    art: SportsArt,
  },
  {
    title: "Togel",
    body: "Hong Kong, Singapore, Sydney, Macau, dan pasaran lain.",
    art: TogelArt,
  },
];

function Games() {
  return (
    <section id="permainan" className="flex flex-col gap-14">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading index="02" label="Permainan">
          Pilih <Em>caramu</Em> bermain.
        </SectionHeading>
        <p className="reveal max-w-xs text-muted-foreground">
          Semua kategori bisa diakses dari satu akun dan satu saldo.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {GAMES.map((g, i) => (
          <a
            key={g.title}
            href={REGISTER_HREF}
            rel="nofollow noopener"
            target="_blank"
            className="reveal group flex flex-col overflow-hidden rounded-[2rem] bg-surface ring-1 ring-white/[0.06] transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50 hover:ring-gold/30"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <div className="size-full transition-transform duration-700 ease-out group-hover:scale-105">
                <g.art />
              </div>
              <span className="absolute top-4 left-4 rounded-full bg-black/35 px-2.5 py-1 font-mono text-[10px] tracking-widest text-white/80 backdrop-blur">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-2 p-6">
              <div className="flex items-center justify-between">
                <h3 className="display text-3xl">{g.title}</h3>
                <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-primary" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{g.body}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ================================================================ */
/* Steps                                                             */
/* ================================================================ */

const STEPS = [
  {
    numeral: "一",
    title: "Daftar akun",
    body: "Isi data singkat di halaman pendaftaran. Hanya butuh beberapa menit.",
  },
  {
    numeral: "二",
    title: "Isi saldo",
    body: "Deposit lewat bank, e-wallet, QRIS, atau pulsa sesuai pilihanmu.",
  },
  {
    numeral: "三",
    title: "Mulai bermain",
    body: "Pilih kategori favoritmu — dan tetapkan batas sejak awal.",
  },
];

function Steps() {
  return (
    <section id="cara-daftar" className="flex flex-col gap-16">
      <SectionHeading index="03" label="Cara daftar" align="center">
        Tiga langkah, <Em>lalu berenang.</Em>
      </SectionHeading>

      <ol className="relative grid gap-12 md:grid-cols-3 md:gap-8">
        <span
          aria-hidden
          className="absolute top-14 right-[16%] left-[16%] hidden h-px bg-[linear-gradient(90deg,transparent,oklch(0.83_0.1_82/0.5),transparent)] md:block"
        />
        {STEPS.map((s) => (
          <li key={s.title} className="reveal relative flex flex-col items-center gap-6 text-center">
            <span className="font-kanji relative grid size-28 place-items-center rounded-full bg-background text-6xl text-primary ring-1 ring-gold/30">
              {s.numeral}
            </span>
            <div className="flex max-w-xs flex-col gap-2">
              <span className="font-mono text-[11px] tracking-[0.25em] text-gold/80 uppercase">
                Langkah {String(STEPS.indexOf(s) + 1).padStart(2, "0")}
              </span>
              <h3 className="display text-3xl">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="reveal flex justify-center">
        <PrimaryCta>Daftar akun</PrimaryCta>
      </div>
    </section>
  );
}

/* ================================================================ */
/* Official link — the replaceable banner slot                       */
/* ================================================================ */

/**
 * Ganti gambar ini untuk memperbarui banner. Rasio 2:1; biarkan ±45% sisi
 * kiri tetap gelap/kosong karena teks ditaruh di atasnya (desktop).
 * `mobileFocus` = bagian gambar yang tetap terlihat saat di-crop di HP.
 */
const BANNER = {
  src: "/banners/banner-torii.webp",
  alt: "Gerbang torii di kolam koi pada malam hari",
  mobileFocus: "78% 50%",
};

function OfficialLink() {
  return (
    <section className="reveal">
      <figure className="relative overflow-hidden rounded-[2rem] bg-surface ring-1 ring-white/[0.06]">
        <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[2/1]">
          <Image
            src={BANNER.src}
            alt={BANNER.alt}
            fill
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="object-cover md:!object-center"
            style={{ objectPosition: BANNER.mobileFocus }}
          />
          {/* mobile: fade into the caption below · desktop: deepen the left side for text */}
          <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--surface),transparent_45%)] md:bg-[linear-gradient(90deg,oklch(0.145_0.008_35/0.85),oklch(0.145_0.008_35/0.35)_40%,transparent_60%)]" />
        </div>

        <figcaption className="relative flex flex-col gap-5 px-6 pt-2 pb-8 sm:px-10 md:absolute md:inset-y-0 md:left-0 md:w-[48%] md:justify-center md:p-12 lg:p-16">
          <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] text-gold uppercase">
            <span>Link resmi</span>
            <span className="h-px w-8 bg-gold/50" />
          </p>
          <h2 className="display text-5xl lg:text-6xl">
            Selalu lewat <Em>pintu yang benar.</Em>
          </h2>
          <p className="max-w-sm leading-relaxed text-muted-foreground md:text-foreground/75">
            Hindari situs tiruan. Akses KOIJP hanya lewat link resmi atau link
            yang dibagikan langsung oleh customer service kami.
          </p>
          <a
            href={OFFICIAL_URL}
            rel="nofollow noopener"
            target="_blank"
            className="group flex w-fit items-center gap-3 rounded-full bg-background/70 py-2 pr-4 pl-2 ring-1 ring-gold/30 backdrop-blur transition-colors hover:ring-gold/60"
          >
            <span className="grid size-8 place-items-center rounded-full bg-gold text-ink">
              <ShieldCheck className="size-4" />
            </span>
            <span className="font-mono text-sm tracking-wide">{OFFICIAL_DOMAIN}</span>
            <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:rotate-45" />
          </a>
        </figcaption>
      </figure>
    </section>
  );
}

/* ================================================================ */
/* Payments                                                          */
/* ================================================================ */

const PAYMENT_GROUPS = [
  {
    label: "Bank",
    items: [
      { name: "BCA", src: "/payment-methods/images.png" },
      { name: "Mandiri", src: "/payment-methods/Bank_Mandiri_logo_2016.svg.png" },
      { name: "BNI", src: "/payment-methods/bni-optimized.png" },
      { name: "BRI", src: "/payment-methods/bri-optimized.png" },
    ],
  },
  {
    label: "E-wallet",
    items: [
      { name: "DANA", src: "/payment-methods/Logo_dana_blue.svg.png" },
      { name: "OVO", src: "/payment-methods/Logo_ovo_purplesvg.png" },
      { name: "GoPay", src: "/payment-methods/Gopay_logo.svg.png" },
    ],
  },
  {
    label: "Lainnya",
    items: [
      { name: "QRIS", src: "/payment-methods/Logo_QRIS.svg.png" },
      { name: "Telkomsel", src: "/payment-methods/telkomsel-baru-2021.png" },
    ],
  },
];

function Payments() {
  return (
    <section id="pembayaran" className="flex flex-col gap-14">
      <SectionHeading index="04" label="Pembayaran">
        Bank, e-wallet, QRIS, <Em>dan pulsa.</Em>
      </SectionHeading>

      <div className="grid gap-4 lg:grid-cols-[4fr_3fr_2fr]">
        {PAYMENT_GROUPS.map((g) => (
          <div
            key={g.label}
            className="reveal flex flex-col gap-4 rounded-[2rem] bg-surface p-5 ring-1 ring-white/[0.06]"
          >
            <p className="px-1 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
              {g.label}
            </p>
            <ul className="grid flex-1 grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2">
              {g.items.map((p) => (
                <li
                  key={p.name}
                  title={p.name}
                  className="grid h-16 place-items-center rounded-2xl bg-paper px-4"
                >
                  <div className="relative h-7 w-full">
                    <Image src={p.src} alt={p.name} fill sizes="120px" className="object-contain" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================================================================ */
/* FAQ                                                               */
/* ================================================================ */

const FAQS = [
  {
    q: "Bagaimana cara mendaftar di KOIJP?",
    a: "Klik tombol Daftar, isi data yang diminta, lalu akunmu siap dipakai. Kalau ada kendala, hubungi customer service kami.",
  },
  {
    q: "Metode pembayaran apa saja yang tersedia?",
    a: "Transfer bank (BCA, Mandiri, BNI, BRI), e-wallet (DANA, OVO, GoPay), QRIS, dan pulsa Telkomsel.",
  },
  {
    q: "Apa link resmi KOIJP?",
    a: `Selalu akses KOIJP lewat ${OFFICIAL_DOMAIN} atau link yang dibagikan langsung oleh customer service resmi kami.`,
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
    <section id="faq" className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
      <div className="flex flex-col gap-8">
        <SectionHeading index="05" label="FAQ">
          Ada <Em>pertanyaan?</Em>
        </SectionHeading>
        <a
          href={CS_HREF}
          className="reveal group flex w-fit items-center gap-3 rounded-full bg-surface py-2 pr-5 pl-2 text-sm ring-1 ring-white/[0.08] transition-colors hover:ring-gold/40"
        >
          <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground">
            <MessageCircle className="size-4" />
          </span>
          Tanya langsung ke CS 24/7
          <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:rotate-45" />
        </a>
      </div>

      <div className="reveal flex flex-col gap-3">
        {FAQS.map((f, i) => (
          <details
            key={f.q}
            className="group rounded-3xl bg-surface ring-1 ring-white/[0.06] transition-colors open:bg-surface-2"
          >
            <summary className="flex cursor-pointer list-none items-center gap-5 p-6 [&::-webkit-details-marker]:hidden">
              <span className="font-mono text-xs text-gold/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-lg">{f.q}</span>
              <span className="grid size-9 shrink-0 place-items-center rounded-full ring-1 ring-white/10 transition-all duration-300 group-open:rotate-45 group-open:bg-primary group-open:ring-primary">
                <Plus className="size-4" />
              </span>
            </summary>
            <p className="-mt-2 pr-20 pb-6 pl-[3.85rem] text-[15px] leading-relaxed text-muted-foreground">
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ================================================================ */
/* Closing CTA                                                       */
/* ================================================================ */

function ClosingCta() {
  return (
    <section className="px-3 pb-24 sm:px-4">
      <div className="reveal relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-primary px-6 py-20 text-primary-foreground sm:px-14 sm:py-28">
        <div className="absolute inset-0 -z-10 opacity-70 [mask-image:linear-gradient(to_top,black,transparent_75%)]">
          <Seigaiha id="cta-wave" fill="var(--primary)" stroke="var(--paper)" strokeOpacity={0.22} size={48} />
        </div>
        <span
          aria-hidden
          className="font-kanji pointer-events-none absolute -top-16 -right-6 -z-10 text-[20rem] leading-none text-black/15 select-none sm:text-[28rem]"
        >
          鯉
        </span>

        <div className="flex max-w-2xl flex-col gap-8">
          <h2 className="display text-6xl sm:text-8xl">
            Siap terjun ke <em className="italic">kolam?</em>
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-primary-foreground/85">
            Buat akunmu dalam hitungan menit. Khusus 18+ — bermain untuk
            hiburan, dan tetapkan batasmu sejak awal.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={REGISTER_HREF}
              rel="nofollow noopener"
              target="_blank"
              className="group inline-flex h-13 items-center gap-3 rounded-full bg-ink py-2 pr-2 pl-6 text-[15px] font-medium text-paper transition-transform hover:-translate-y-0.5"
            >
              Daftar sekarang
              <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-45">
                <ArrowUpRight className="size-4" />
              </span>
            </a>
            <a
              href={CS_HREF}
              className="inline-flex h-13 items-center rounded-full px-6 text-[15px] ring-1 ring-white/40 transition-colors hover:bg-white/10"
            >
              Hubungi CS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
