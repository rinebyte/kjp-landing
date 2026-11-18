import { Headphones } from "lucide-react";

import { Logo } from "@/components/logo";
import { CS_HREF, SECTIONS } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex max-w-xs flex-col gap-4">
            <Logo className="h-9 w-[90px]" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Slot, live casino, sportsbook, dan togel dalam satu akun.
            </p>
          </div>
          <div>
            <p className="mb-3 text-xs font-medium">Halaman ini</p>
            <ul className="flex flex-col gap-2 text-sm">
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
            <p className="mb-3 text-xs font-medium">Bantuan</p>
            <a
              href={CS_HREF}
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Headphones className="size-3.5" />
              Customer service 24/7
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} KOIJP. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="rounded-full px-1.5 py-0.5 font-medium text-foreground ring-1 ring-border">
              18+
            </span>
            Bermain secara bijak dan tahu batas.
          </p>
        </div>
      </div>
    </footer>
  );
}
