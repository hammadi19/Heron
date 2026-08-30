import Image from "next/image";
import Link from "next/link";

export function HeronLogo({
  inverted = false,
  compact = false,
}: {
  inverted?: boolean;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <Link
        href="/"
        className="grid size-14 place-items-center overflow-hidden rounded-full"
        aria-label="Heron Marketing home"
      >
        <Image
          src="/heron-logo-mark-transparent.png"
          alt="Heron Marketing"
          width={180}
          height={180}
          className="size-14 object-contain"
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`inline-flex items-center overflow-hidden ${inverted ? "drop-shadow-[0_10px_26px_rgba(255,255,255,.22)]" : ""}`}
      aria-label="Heron Marketing home"
    >
      <Image
        src="/heron-logo-lockup-transparent.png"
        alt="Heron Marketing"
        width={560}
        height={190}
        priority
        className="site-logo-lockup h-14 w-auto object-contain transition-all duration-300"
      />
    </Link>
  );
}
