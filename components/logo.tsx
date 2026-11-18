import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "h-8 w-20 sm:h-9 sm:w-[90px]" }: { className?: string }) {
  return (
    <Link href="/home" aria-label="KOIJP — Beranda" className="block shrink-0">
      <Image
        src="/logo.jpg"
        alt="KOIJP"
        width={1280}
        height={512}
        sizes="90px"
        priority
        className={className}
      />
    </Link>
  );
}
