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
        className="grid size-14 place-items-center overflow-hidden rounded-full bg-white"
        aria-label="Heron Marketing home"
      >
        <Image
          src="/heron-logo-mark.png"
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
      className={`inline-flex items-center overflow-hidden ${inverted ? "rounded-xl bg-white px-2 py-1" : ""}`}
      aria-label="Heron Marketing home"
    >
      <Image
        src="/heron-logo-lockup.png"
        alt="Heron Marketing"
        width={560}
        height={190}
        priority
        className="h-14 w-auto object-contain"
      />
    </Link>
  );
}
