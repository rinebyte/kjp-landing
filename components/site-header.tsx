import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { LOGIN_HREF, REGISTER_HREF, SECTIONS } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4">
      <div className="relative mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 rounded-full bg-background/60 pr-2 pl-4 shadow-xl shadow-black/30 ring-1 ring-white/[0.08] backdrop-blur-xl">
        <Logo className="h-7 w-[70px]" />

        <nav aria-label="Navigasi" className="hidden lg:block">
          <ul className="flex items-center">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="rounded-full px-3.5 py-2 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={LOGIN_HREF}
            rel="nofollow noopener"
            target="_blank"
            className="hidden h-10 items-center rounded-full px-4 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            Masuk
          </a>
          <a
            href={REGISTER_HREF}
            rel="nofollow noopener"
            target="_blank"
            className="inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-[filter] hover:brightness-110"
          >
            Daftar
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
