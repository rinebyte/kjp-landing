import { MessageCircle } from "lucide-react";

import { Logo } from "@/components/logo";
import { CS_HREF, SECTIONS } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5 pt-16 sm:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="flex max-w-xs flex-col gap-4">
            <Logo className="h-9 w-[90px]" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Slot, live casino, sportsbook, dan togel — dalam satu kolam.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-20">
            <div>
              <p className="mb-4 font-mono text-[11px] tracking-widest text-gold/70 uppercase">
                Jelajahi
              </p>
              <ul className="flex flex-col gap-2.5 text-sm">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 font-mono text-[11px] tracking-widest text-gold/70 uppercase">
                Bantuan
              </p>
              <a
                href={CS_HREF}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <MessageCircle className="size-4" />
                CS 24/7 via WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} KOIJP. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="rounded-full px-2 py-0.5 font-medium text-foreground ring-1 ring-gold/40">
              18+
            </span>
            Bermain untuk hiburan. Tetapkan batas, dan berhenti saat batas tercapai.
          </p>
        </div>
      </div>

      <p
        aria-hidden
        className="display pointer-events-none mt-6 -mb-[0.2em] text-center text-[clamp(6rem,27vw,22rem)] leading-none text-transparent select-none [-webkit-text-stroke:1px_oklch(0.83_0.1_82/0.25)]"
      >
        KOIJP
      </p>
    </footer>
  );
}
