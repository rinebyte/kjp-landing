"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { LOGIN_HREF, REGISTER_HREF, SECTIONS } from "@/lib/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Tutup menu" : "Buka menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="grid size-10 place-items-center rounded-full text-foreground transition-colors hover:bg-white/[0.06]"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="animate-rise absolute inset-x-0 top-full mt-2 overflow-hidden rounded-3xl bg-surface/95 p-2 shadow-2xl shadow-black/50 ring-1 ring-white/[0.08] backdrop-blur-xl [animation-duration:.35s]"
        >
          <nav aria-label="Navigasi" className="flex flex-col">
            {SECTIONS.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3 rounded-2xl px-4 py-3 transition-colors hover:bg-white/[0.04]"
              >
                <span className="font-mono text-[11px] text-gold/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="display text-2xl">{s.label}</span>
              </a>
            ))}
          </nav>
          <div className="mt-2 grid grid-cols-2 gap-2 border-t border-border p-2 pt-4">
            <a
              href={LOGIN_HREF}
              rel="nofollow noopener"
              target="_blank"
              className="grid h-11 place-items-center rounded-full text-sm ring-1 ring-border"
            >
              Masuk
            </a>
            <a
              href={REGISTER_HREF}
              rel="nofollow noopener"
              target="_blank"
              className="grid h-11 place-items-center rounded-full bg-primary text-sm font-medium text-primary-foreground"
            >
              Daftar
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
