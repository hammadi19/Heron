"use client";

import type { ComponentProps } from "react";
import { Icon } from "@iconify/react/offline";
import targetIcon from "@iconify-icons/solar/target-bold-duotone";
import penIcon from "@iconify-icons/solar/pen-new-square-bold-duotone";
import mediaIcon from "@iconify-icons/solar/plain-bold-duotone";
import searchIcon from "@iconify-icons/solar/magnifer-bold-duotone";
import analyticsIcon from "@iconify-icons/solar/chart-square-bold-duotone";
import lifecycleIcon from "@iconify-icons/solar/restart-circle-bold-duotone";
import webIcon from "@iconify-icons/solar/monitor-bold-duotone";
import awardIcon from "@iconify-icons/solar/cup-star-bold-duotone";
import proofIcon from "@iconify-icons/solar/graph-new-up-bold-duotone";
import insightIcon from "@iconify-icons/solar/lightbulb-bolt-bold-duotone";
import articleIcon from "@iconify-icons/solar/document-text-bold-duotone";
import phoneIcon from "@iconify-icons/solar/phone-calling-bold-duotone";
import mailIcon from "@iconify-icons/solar/letter-bold-duotone";
import pinIcon from "@iconify-icons/solar/map-point-bold-duotone";
import sendIcon from "@iconify-icons/solar/plain-2-bold-duotone";

type IconProps = Omit<ComponentProps<typeof Icon>, "icon">;
type IconData = ComponentProps<typeof Icon>["icon"];

const iconMap = {
  strategy: targetIcon,
  creative: penIcon,
  media: mediaIcon,
  search: searchIcon,
  analytics: analyticsIcon,
  lifecycle: lifecycleIcon,
  web: webIcon,
  award: awardIcon,
  proof: proofIcon,
  insight: insightIcon,
  article: articleIcon,
  phone: phoneIcon,
  mail: mailIcon,
  pin: pinIcon,
  send: sendIcon,
} satisfies Record<string, IconData>;

function MarketingIcon({
  icon,
  className,
  ...props
}: IconProps & { icon: IconData }) {
  return (
    <Icon
      icon={icon}
      className={className}
      color="#145CFF"
      aria-hidden="true"
      {...props}
    />
  );
}

export function StrategyIcon(props: IconProps) {
  return <MarketingIcon icon={iconMap.strategy} {...props} />;
}

export function CreativeIcon(props: IconProps) {
  return <MarketingIcon icon={iconMap.creative} {...props} />;
}

export function MediaIcon(props: IconProps) {
  return <MarketingIcon icon={iconMap.media} {...props} />;
}

export function SearchIcon(props: IconProps) {
  return <MarketingIcon icon={iconMap.search} {...props} />;
}

export function AnalyticsIcon(props: IconProps) {
  return <MarketingIcon icon={iconMap.analytics} {...props} />;
}

export function LifecycleIcon(props: IconProps) {
  return <MarketingIcon icon={iconMap.lifecycle} {...props} />;
}

export function WebIcon(props: IconProps) {
  return <MarketingIcon icon={iconMap.web} {...props} />;
}

export function AwardIcon(props: IconProps) {
  return <MarketingIcon icon={iconMap.award} {...props} />;
}

export function ProofIcon(props: IconProps) {
  return <MarketingIcon icon={iconMap.proof} {...props} />;
}

export function InsightIcon(props: IconProps) {
  return <MarketingIcon icon={iconMap.insight} {...props} />;
}

export function ArticleIcon(props: IconProps) {
  return <MarketingIcon icon={iconMap.article} {...props} />;
}

export function PhoneIcon(props: IconProps) {
  return <MarketingIcon icon={iconMap.phone} {...props} />;
}

export function MailIcon(props: IconProps) {
  return <MarketingIcon icon={iconMap.mail} {...props} />;
}

export function PinIcon(props: IconProps) {
  return <MarketingIcon icon={iconMap.pin} {...props} />;
}

export function SendIcon(props: IconProps) {
  return <MarketingIcon icon={iconMap.send} {...props} />;
}
