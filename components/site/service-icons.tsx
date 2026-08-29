import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const ink = "#080808";
const blue = "#145CFF";
const aqua = "#55DDE0";
const coral = "#FF7058";
const soft = "#EEF4FF";

function IconShell({ children, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 88 88" fill="none" aria-hidden="true" {...props}>
      <circle cx="44" cy="44" r="36" fill={soft} />
      <path d="M16 58C26 70 48 75 68 54" stroke={aqua} strokeWidth="7" strokeLinecap="round" opacity=".42" />
      {children}
    </svg>
  );
}

export function StrategyIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <circle cx="42" cy="43" r="22" fill="#fff" stroke={ink} strokeWidth="4" />
      <circle cx="42" cy="43" r="12" stroke={blue} strokeWidth="4" />
      <circle cx="42" cy="43" r="4" fill={aqua} />
      <path d="M55 29l14-5-5 14-12 12-9-9 12-12Z" fill={blue} stroke={ink} strokeWidth="3" strokeLinejoin="round" />
    </IconShell>
  );
}

export function CreativeIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M25 16l35 11 12 34-13 13-35-12L12 29 25 16Z" fill="#fff" stroke={ink} strokeWidth="4" strokeLinejoin="round" />
      <path d="M30 23l21 21" stroke={blue} strokeWidth="5" strokeLinecap="round" />
      <circle cx="48" cy="46" r="7" fill={aqua} stroke={ink} strokeWidth="3" />
      <path d="M58 58l10 10" stroke={coral} strokeWidth="5" strokeLinecap="round" />
    </IconShell>
  );
}

export function MediaIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M14 39h15l32-17v44L29 49H14V39Z" fill="#fff" stroke={ink} strokeWidth="4" strokeLinejoin="round" />
      <path d="M30 50l6 21h12l-8-18" stroke={blue} strokeWidth="4" strokeLinejoin="round" />
      <path d="M66 36c4 3 6 7 6 12s-2 9-6 12" stroke={aqua} strokeWidth="5" strokeLinecap="round" />
      <path d="M15 39h14v10H15V39Z" fill={blue} />
    </IconShell>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <circle cx="39" cy="39" r="22" fill="#fff" stroke={ink} strokeWidth="4" />
      <path d="M55 55l18 18" stroke={ink} strokeWidth="5" strokeLinecap="round" />
      <path d="M28 39c4-8 10-12 20-10" stroke={blue} strokeWidth="5" strokeLinecap="round" />
      <path d="M31 50c10 4 21-2 24-14" stroke={aqua} strokeWidth="5" strokeLinecap="round" />
    </IconShell>
  );
}

export function AnalyticsIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M18 68h52" stroke={ink} strokeWidth="5" strokeLinecap="round" />
      <path d="M26 58V34" stroke={ink} strokeWidth="5" strokeLinecap="round" />
      <path d="M39 58V21" stroke={blue} strokeWidth="5" strokeLinecap="round" />
      <path d="M52 58V40" stroke={aqua} strokeWidth="5" strokeLinecap="round" />
      <path d="M65 58V15" stroke={ink} strokeWidth="5" strokeLinecap="round" />
      <path d="M24 31l15-10 13 18 15-24" stroke={coral} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </IconShell>
  );
}

export function LifecycleIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M22 27c5-8 13-12 23-12 16 0 29 13 29 29" stroke={blue} strokeWidth="5" strokeLinecap="round" />
      <path d="M66 61c-5 8-13 12-23 12-16 0-29-13-29-29" stroke={ink} strokeWidth="5" strokeLinecap="round" />
      <path d="M22 27H10V15" stroke={blue} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M66 61h12v12" stroke={ink} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="44" cy="44" r="9" fill={aqua} stroke={ink} strokeWidth="4" />
    </IconShell>
  );
}

export function WebIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <rect x="18" y="24" width="52" height="38" rx="8" fill="#fff" stroke={ink} strokeWidth="4" />
      <path d="M18 35h52" stroke={ink} strokeWidth="4" />
      <path d="M29 48h16M29 56h27" stroke={blue} strokeWidth="4" strokeLinecap="round" />
      <circle cx="29" cy="30" r="2.5" fill={coral} />
      <circle cx="38" cy="30" r="2.5" fill={aqua} />
    </IconShell>
  );
}

export function AwardIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M29 18h30l-4 38H33L29 18Z" fill="#fff" stroke={ink} strokeWidth="4" strokeLinejoin="round" />
      <path d="M36 68h16M32 58h24" stroke={ink} strokeWidth="4" strokeLinecap="round" />
      <path d="M44 28l4 8 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1 4-8Z" fill={aqua} stroke={blue} strokeWidth="3" strokeLinejoin="round" />
    </IconShell>
  );
}

export function ProofIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M23 58l15-16 10 9 18-25" stroke={blue} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 68h48" stroke={ink} strokeWidth="5" strokeLinecap="round" />
      <circle cx="23" cy="58" r="5" fill={aqua} stroke={ink} strokeWidth="3" />
      <circle cx="66" cy="26" r="5" fill={coral} stroke={ink} strokeWidth="3" />
    </IconShell>
  );
}

export function InsightIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M44 17c-12 0-21 8-21 19 0 7 4 12 9 16v9h24v-9c5-4 9-9 9-16 0-11-9-19-21-19Z" fill="#fff" stroke={ink} strokeWidth="4" strokeLinejoin="round" />
      <path d="M36 71h16M37 39l7-8 7 8" stroke={blue} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44 31v18" stroke={aqua} strokeWidth="5" strokeLinecap="round" />
    </IconShell>
  );
}

export function ArticleIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M24 17h31l10 10v44H24V17Z" fill="#fff" stroke={ink} strokeWidth="4" strokeLinejoin="round" />
      <path d="M55 18v11h10" stroke={ink} strokeWidth="4" strokeLinejoin="round" />
      <path d="M34 40h20M34 50h21M34 60h13" stroke={blue} strokeWidth="4" strokeLinecap="round" />
      <circle cx="30" cy="40" r="2.5" fill={coral} />
    </IconShell>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M29 18l8 15-7 5c5 9 11 15 20 20l5-7 15 8c-2 8-8 13-16 13-20 0-38-18-38-38 0-8 5-14 13-16Z" fill="#fff" stroke={ink} strokeWidth="4" strokeLinejoin="round" />
      <path d="M49 19c9 3 16 10 19 19" stroke={blue} strokeWidth="4" strokeLinecap="round" />
      <path d="M49 30c4 2 7 5 9 9" stroke={aqua} strokeWidth="4" strokeLinecap="round" />
    </IconShell>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <rect x="16" y="25" width="56" height="40" rx="8" fill="#fff" stroke={ink} strokeWidth="4" />
      <path d="M18 30l26 21 26-21" stroke={blue} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 61l16-15M66 61L50 46" stroke={aqua} strokeWidth="4" strokeLinecap="round" />
    </IconShell>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M44 75S24 54 24 36c0-12 9-21 20-21s20 9 20 21c0 18-20 39-20 39Z" fill="#fff" stroke={ink} strokeWidth="4" strokeLinejoin="round" />
      <circle cx="44" cy="36" r="8" fill={aqua} stroke={blue} strokeWidth="4" />
    </IconShell>
  );
}

export function SendIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M16 42l55-24-20 54-10-23-25-7Z" fill="#fff" stroke={ink} strokeWidth="4" strokeLinejoin="round" />
      <path d="M41 49l30-31" stroke={blue} strokeWidth="4" strokeLinecap="round" />
      <path d="M41 49l-1 18" stroke={aqua} strokeWidth="4" strokeLinecap="round" />
    </IconShell>
  );
}
