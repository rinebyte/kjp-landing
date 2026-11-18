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
        className="grid size-9 place-items-center rounded-full text-foreground transition-colors hover:bg-white/[0.06]"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-border bg-background/95 backdrop-blur-xl"
        >
          <nav aria-label="Navigasi" className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-[15px] text-muted-foreground transition-colors hover:bg-white/[0.04] hover:text-foreground"
              >
                {s.label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-border pt-4 pb-2">
              <a
                href={LOGIN_HREF}
                rel="nofollow noopener"
                target="_blank"
                className="grid h-10 place-items-center rounded-full text-sm ring-1 ring-border"
              >
                Masuk
              </a>
              <a
                href={REGISTER_HREF}
                rel="nofollow noopener"
                target="_blank"
                className="grid h-10 place-items-center rounded-full bg-primary text-sm font-medium text-primary-foreground"
              >
                Daftar
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
