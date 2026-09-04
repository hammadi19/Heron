import Image from "next/image";
import Link from "next/link";

export function HeronLogo({
  compact = false,
}: {
  inverted?: boolean;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <Link
        href="/"
        className="grid size-11 place-items-center overflow-hidden rounded-full sm:size-14"
        aria-label="Heron Marketing home"
      >
        <Image
          src="/heron-logo-mark-transparent.png"
          alt="Heron Marketing"
          width={180}
          height={180}
          className="size-11 object-contain sm:size-14"
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className="inline-flex items-center overflow-hidden"
      aria-label="Heron Marketing home"
    >
      <Image
        src="/heron-logo-lockup-transparent.png"
        alt="Heron Marketing"
        width={560}
        height={190}
        priority
        className="site-logo-lockup h-10 w-auto object-contain transition-all duration-300 sm:h-14"
      />
    </Link>
  );
}
