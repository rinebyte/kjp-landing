import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { LOGIN_HREF, REGISTER_HREF, SECTIONS } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />

        <nav aria-label="Navigasi" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <a
            href={LOGIN_HREF}
            rel="nofollow noopener"
            target="_blank"
            className="hidden h-9 items-center rounded-full px-4 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            Masuk
          </a>
          <a
            href={REGISTER_HREF}
            rel="nofollow noopener"
            target="_blank"
            className="inline-flex h-9 items-center rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Daftar
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
