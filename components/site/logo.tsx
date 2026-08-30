import Link from "next/link";

export function HeronLogo({
  inverted = false,
  compact = false,
}: {
  inverted?: boolean;
  compact?: boolean;
}) {
  const textColor = inverted ? "#ffffff" : "#080808";

  if (compact) {
    return (
      <Link
        href="/"
        className="grid size-14 place-items-center overflow-hidden rounded-full"
        aria-label="Heron Marketing home"
      >
        <HeronLogoMark className="size-14" />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className="inline-flex items-center overflow-hidden"
      aria-label="Heron Marketing home"
    >
      <svg
        viewBox="0 0 420 128"
        className="site-logo-lockup h-14 w-auto transition-all duration-300"
        role="img"
        aria-label="Heron Marketing"
      >
        <HeronLogoSymbol />
        <text
          x="116"
          y="64"
          fill={textColor}
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="42"
          fontWeight="800"
          letterSpacing="13"
        >
          HERON
        </text>
        <text
          x="119"
          y="102"
          fill={textColor}
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="18"
          fontWeight="700"
          letterSpacing="18"
        >
          MARKETING
        </text>
      </svg>
    </Link>
  );
}

function HeronLogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} role="img" aria-label="Heron Marketing">
      <HeronLogoSymbol />
    </svg>
  );
}

function HeronLogoSymbol() {
  return (
    <g>
      <path
        d="M58 18c15-9 32-8 45 1c-16-3-29-1-40 6c-4 3-8 6-11 10c-6 8-7 17-3 25c5 10 15 17 16 30c1 12-6 22-20 31c9-10 13-20 9-31c-3-10-12-17-17-26c-7-14-2-32 21-46Z"
        fill="#080808"
      />
      <path
        d="M71 24l50 11l-52 1l-21-15c8 1 15 2 23 3Z"
        fill="#145CFF"
      />
      <path
        d="M13 118c4-35 17-60 38-74c12-8 27 1 27 14c-16-2-30 4-42 18c-10 12-17 26-23 42Z"
        fill="#145CFF"
      />
      <path
        d="M39 111c4-23 14-40 30-51c6-4 14-5 22-2c-20 14-36 31-52 53Z"
        fill="#43D7D3"
      />
    </g>
  );
}
