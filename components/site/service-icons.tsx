import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function IconShell({ children, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 72 72" fill="none" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

export function StrategyIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M36 6v60M6 36h60" stroke="#D8E0EA" strokeWidth="2" strokeLinecap="round" />
      <circle cx="36" cy="36" r="22" stroke="#080808" strokeWidth="4" />
      <circle cx="36" cy="36" r="12" stroke="#145CFF" strokeWidth="4" />
      <circle cx="36" cy="36" r="3.5" fill="#7CE8D9" />
      <path d="M50 21l10-4-4 10-8 8-6-6 8-8Z" fill="#145CFF" />
    </IconShell>
  );
}

export function CreativeIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M19 9l28 9 10 28-11 11-28-10L8 20 19 9Z" stroke="#080808" strokeWidth="4" strokeLinejoin="round" />
      <path d="M23 15l18 18" stroke="#145CFF" strokeWidth="4" strokeLinecap="round" />
      <circle cx="37" cy="35" r="6" fill="#7CE8D9" stroke="#080808" strokeWidth="3" />
      <path d="M45 47l12 12" stroke="#145CFF" strokeWidth="4" strokeLinecap="round" />
    </IconShell>
  );
}

export function MediaIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M12 33h12l27-14v34L24 39H12v-6Z" stroke="#080808" strokeWidth="4" strokeLinejoin="round" />
      <path d="M24 40l5 17h9l-7-14" stroke="#145CFF" strokeWidth="4" strokeLinejoin="round" />
      <path d="M56 31c3 2 4 5 4 8s-1 6-4 8" stroke="#7CE8D9" strokeWidth="4" strokeLinecap="round" />
      <path d="M62 24c5 4 8 9 8 15s-3 11-8 15" stroke="#145CFF" strokeWidth="4" strokeLinecap="round" />
    </IconShell>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <circle cx="31" cy="31" r="19" stroke="#080808" strokeWidth="4" />
      <path d="M44 44l16 16" stroke="#080808" strokeWidth="4" strokeLinecap="round" />
      <path d="M22 32c3-7 8-10 17-9" stroke="#145CFF" strokeWidth="4" strokeLinecap="round" />
      <path d="M24 41c9 3 18-2 20-12" stroke="#7CE8D9" strokeWidth="4" strokeLinecap="round" />
    </IconShell>
  );
}

export function AnalyticsIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M12 58h48" stroke="#080808" strokeWidth="4" strokeLinecap="round" />
      <path d="M18 48V25" stroke="#080808" strokeWidth="4" strokeLinecap="round" />
      <path d="M30 48V15" stroke="#145CFF" strokeWidth="4" strokeLinecap="round" />
      <path d="M42 48V31" stroke="#7CE8D9" strokeWidth="4" strokeLinecap="round" />
      <path d="M54 48V9" stroke="#080808" strokeWidth="4" strokeLinecap="round" />
      <path d="M16 22l14-9 12 16 14-20" stroke="#145CFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity=".28" />
    </IconShell>
  );
}

export function LifecycleIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M19 21c4-6 10-9 17-9 13 0 24 11 24 24" stroke="#145CFF" strokeWidth="4" strokeLinecap="round" />
      <path d="M53 51c-4 6-10 9-17 9-13 0-24-11-24-24" stroke="#080808" strokeWidth="4" strokeLinecap="round" />
      <path d="M19 21h-9V12" stroke="#145CFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M53 51h9v9" stroke="#080808" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="36" cy="36" r="8" fill="#7CE8D9" stroke="#080808" strokeWidth="3" />
    </IconShell>
  );
}
