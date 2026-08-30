import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  LayoutDashboard,
} from "lucide-react";

import { HeronLogo } from "@/components/site/logo";
import {
  AnalyticsIcon,
  CreativeIcon,
  FacebookIcon,
  LifecycleIcon,
  LinkedInIcon,
  MailIcon,
  MediaIcon,
  PhoneIcon,
  PinterestIcon,
  SearchIcon,
  SendIcon,
  StrategyIcon,
  XIcon,
} from "@/components/site/service-icons";

export const services = [
  {
    title: "Growth Strategy",
    copy: "Positioning, audience mapping, acquisition priorities, and 90-day plans for confident growth decisions.",
    icon: StrategyIcon,
    color: "#0f8bff",
  },
  {
    title: "Performance Media",
    copy: "Search, social, retargeting, and budget allocation systems that learn quickly before scaling.",
    icon: MediaIcon,
    color: "#ff5c7a",
  },
  {
    title: "Conversion Design",
    copy: "Landing pages, service pages, and campaign journeys designed around buyer intent and action.",
    icon: CreativeIcon,
    color: "#00b8a9",
  },
  {
    title: "Search & Content",
    copy: "SEO architecture, content planning, local search, and intent-led pages that capture existing demand.",
    icon: SearchIcon,
    color: "#7257ff",
  },
  {
    title: "Analytics Systems",
    copy: "Dashboards, tracking plans, attribution reviews, and weekly insight notes for useful reporting.",
    icon: AnalyticsIcon,
    color: "#f5b700",
  },
  {
    title: "Lifecycle Marketing",
    copy: "Lead magnets, nurture sequences, CRM handoff, and follow-up systems that stop demand leaking.",
    icon: LifecycleIcon,
    color: "#284f9f",
  },
];

export const portfolio = [
  ["Launch Campaign", "Paid Social", "/heron-hero-office.png"],
  ["Demand System", "Performance Marketing", "/heron-marketing-illustration.png"],
  ["Landing Redesign", "Conversion Design", "/heron-growth-command.png"],
  ["Search Growth", "SEO & Content", "/heron-hero-office.png"],
  ["Lead Funnel", "Lifecycle Marketing", "/heron-growth-command.png"],
  ["Brand Refresh", "Creative Direction", "/heron-marketing-illustration.png"],
];

export const news = [
  ["20 March 2026", "How To Build A Marketing Funnel That Learns Faster", "/heron-hero-office.png"],
  ["25 April 2026", "The Founder Guide To Campaign Messaging That Converts", "/heron-growth-command.png"],
  ["30 July 2026", "Why Brand And Performance Should Work Together", "/heron-marketing-illustration.png"],
];

export const faqs = [
  ["What do we get in the first month?", "A growth audit, priority roadmap, tracking review, and the first campaign or landing-page sprint."],
  ["Can Heron work with our current website?", "Yes. We can improve the existing journey first, then recommend bigger redesign work only when it is justified."],
  ["Do you handle creative and media?", "Yes. The model connects message, creative, paid media, search, reporting, and follow-up into one operating rhythm."],
  ["How do we measure success?", "We agree the commercial signals first: qualified enquiries, pipeline quality, return on spend, conversion rate, and learning velocity."],
  ["Can we start small?", "Yes. A focused audit or sprint is the easiest way to prove the direction before moving into ongoing support."],
];

const socialLinks = [
  { label: "Facebook", Icon: FacebookIcon },
  { label: "LinkedIn", Icon: LinkedInIcon },
  { label: "X", Icon: XIcon },
  { label: "Pinterest", Icon: PinterestIcon },
];

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-black/28 px-4 py-1 text-sm font-black text-[#555]">
      {children}
    </span>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#fbfaf8] text-[#080808]">
      <div className="absolute inset-x-0 top-16 h-[20rem] bg-[radial-gradient(circle_at_45%_28%,rgba(20,92,255,.18),transparent_30%),radial-gradient(circle_at_65%_42%,rgba(124,232,217,.18),transparent_26%),radial-gradient(circle_at_54%_66%,rgba(255,112,88,.12),transparent_28%)]" />
      <div className="relative z-10 mx-auto grid max-w-[92rem] gap-8 px-5 pb-14 pt-32 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:pb-20 lg:pt-36">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-4xl text-4xl font-light leading-[1.03] tracking-normal sm:text-5xl">
            <span className="font-serif italic">{title.split(" ").slice(0, 2).join(" ")}</span>{" "}
            {title.split(" ").slice(2).join(" ")}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#666]">{copy}</p>
        </div>
        <div className="grid gap-3 border border-black/10 bg-white/70 p-4 backdrop-blur-xl md:grid-cols-3">
          {[
            ["38%", "qualified demand lift"],
            ["4.8x", "faster test learning"],
            ["90d", "growth sprint plan"],
          ].map(([value, label]) => (
            <div key={value} className="border-r border-black/10 p-3 text-[#080808] last:border-r-0">
              <p className="font-serif text-3xl font-light">{value}</p>
              <p className="mt-2 text-xs font-bold leading-5 text-[#666]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  copy,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <div className="mb-4">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      ) : null}
      <h2 className="text-3xl font-light leading-[1.06] tracking-normal text-[#080808] sm:text-5xl">
        {title}
      </h2>
      {copy ? <p className="mt-5 text-base leading-7 text-[#666]">{copy}</p> : null}
    </div>
  );
}

export function ServiceGrid() {
  return (
    <div className="mx-auto grid max-w-[92rem] border border-black/10 bg-white md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <article
          key={service.title}
          className="group border-b border-r border-black/10 p-6 transition hover:bg-[#fbfaf8] md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0"
        >
          <service.icon className="size-12" />
          <h3 className="mt-6 text-xl font-black">{service.title}</h3>
          <p className="mt-3 min-h-20 text-sm leading-6 text-[#666]">{service.copy}</p>
          <Link href="/contact-us" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#080808] transition group-hover:text-[#145cff]">
            Explore service
            <ArrowRight className="size-4" />
          </Link>
        </article>
      ))}
    </div>
  );
}

export function PortfolioGrid() {
  return (
    <div className="mx-auto grid max-w-[92rem] gap-5 md:grid-cols-2 lg:grid-cols-3">
      {portfolio.map(([title, label, image], index) => (
        <article key={`${title}-${label}`} className={`group overflow-hidden rounded-2xl bg-white shadow-[0_22px_70px_rgba(16,24,40,.08)] ${index === 1 ? "lg:translate-y-8" : ""}`}>
          <div className="relative h-60 overflow-hidden">
            <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_34%,rgba(0,0,0,.78)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-xs font-black uppercase tracking-[0.12em] text-white/72">{label}</p>
              <h3 className="mt-2 text-2xl font-black">{title}</h3>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function NewsGrid() {
  return (
    <div className="mx-auto grid max-w-[92rem] gap-5 md:grid-cols-3">
      {news.map(([date, title, image]) => (
        <article key={title} className="group overflow-hidden rounded-2xl border border-black/10 bg-white">
          <div className="relative h-52">
            <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
          </div>
          <div className="p-6">
            <p className="text-sm font-black text-[#145cff]">{date}</p>
            <h3 className="mt-3 text-xl font-black leading-snug">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-[#666]">
              Practical thinking for teams turning attention into measurable demand.
            </p>
            <Link href="/contact-us" className="mt-5 inline-flex items-center gap-2 text-sm font-black">
              Read insight
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

export function Footer() {
  const usefulLinks = [
    ["About us", "/about-us"],
    ["Services", "/services"],
    ["Testimonials", "/"],
    ["Case Studies", "/projects"],
    ["Help Desk", "/contact-us"],
  ];

  return (
    <footer id="contact-us" className="border-t border-black/8 bg-white px-5 text-[#080808] sm:px-8">
      <div className="mx-auto grid max-w-[92rem] border-x border-black/8 lg:grid-cols-[0.66fr_1.08fr]">
        <div className="flex flex-col justify-between border-black/8 py-12 lg:border-r lg:px-10">
          <div>
            <HeronLogo />

            <div className="mt-16">
              <div>
                <h3 className="text-lg font-black xl:text-xl">London Office</h3>
                <p className="mt-4 max-w-xs text-base leading-7 text-[#555]">
                  45 King&apos;s Road, 3rd Floor Chelsea,
                  <br />
                  London SW3 5EP, UK
                </p>
              </div>
            </div>

            <form className="mt-10 flex h-12 max-w-2xl items-center rounded-full border border-black/10 bg-white p-1 shadow-[0_18px_60px_rgba(16,24,40,.06)]">
              <input
                className="h-full min-w-0 flex-1 bg-transparent px-5 text-base outline-none placeholder:text-[#8a8a8a]"
                placeholder="Type your Email address"
                aria-label="Newsletter email"
              />
              <button
                className="grid size-10 shrink-0 place-items-center rounded-full bg-[#080808] text-white transition hover:bg-[#145cff]"
                type="button"
                aria-label="Subscribe to newsletter"
              >
                <SendIcon className="size-7" />
              </button>
            </form>
          </div>

          <div className="mt-12 flex flex-col gap-6 text-sm text-[#555] sm:flex-row sm:items-center sm:justify-between">
            <p>
              Copyright 2026 <span className="font-black text-[#080808]">Heron</span> | All Right Reserved.
            </p>
            <div className="flex items-center gap-7 text-base font-black text-[#080808]">
              {socialLinks.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="/contact-us"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border border-black/10 text-[#080808] transition hover:-translate-y-0.5 hover:border-[#145cff] hover:bg-[#145cff] hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col py-12 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
            <h2 className="max-w-3xl text-3xl font-light leading-[1.04] tracking-normal sm:text-5xl">
              Let&apos;s create the{" "}
              <span className="font-serif italic">best digital growth systems.</span>
            </h2>
            <Link
              href="/contact-us"
              className="inline-flex h-14 w-fit items-center gap-2 rounded-xl bg-[#080808] px-7 text-base font-black text-white transition hover:bg-[#145cff]"
            >
              Let&apos;s Talk
              <ArrowRight className="size-5" />
            </Link>
          </div>

          <div className="mt-14 grid flex-1 border-t border-black/8 lg:grid-cols-[1.05fr_0.78fr_0.78fr]">
            <div className="border-black/8 py-9 lg:border-r lg:pr-10">
              <h3 className="text-lg font-black xl:text-xl">Contact Us</h3>
              <div className="mt-6 grid gap-4 text-base text-[#555]">
                <p className="flex items-center gap-4">
                  <PhoneIcon className="size-8 shrink-0" />
                  +44 0000 000000
                </p>
                <p className="flex items-center gap-4">
                  <MailIcon className="size-8 shrink-0" />
                  hello@heron-marketing.com
                </p>
              </div>
            </div>

            {[0, 1].map((column) => (
              <div key={column} className="border-black/8 py-9 lg:border-r lg:px-10 lg:last:border-r-0">
                <h3 className="text-lg font-black xl:text-xl">Useful Link</h3>
                <div className="mt-6 grid gap-4 text-base text-[#555]">
                  {usefulLinks.map(([label, href]) => (
                    <Link key={`${column}-${href}`} href={href} className="transition hover:text-[#145cff]">
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SignalPanel() {
  return (
    <div className="rounded-[2rem] border border-white/12 bg-white/10 p-5 text-white shadow-[0_30px_100px_rgba(0,0,0,.32)] backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/12 pb-5">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7ce8d9]">Live board</p>
          <h3 className="mt-2 text-2xl font-black">Campaign Signal</h3>
        </div>
        <LayoutDashboard className="size-8 text-[#7ce8d9]" />
      </div>
      <div className="mt-6 space-y-5">
        {[
          ["Audience fit", 92],
          ["Conversion intent", 78],
          ["Creative velocity", 86],
        ].map(([label, value]) => (
          <div key={label as string}>
            <div className="mb-2 flex justify-between text-sm text-white/68">
              <span>{label as string}</span>
              <span>{value as number}%</span>
            </div>
            <div className="h-2 rounded-full bg-white/10">
              <div className="h-2 rounded-full bg-[#7ce8d9]" style={{ width: `${value}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-white p-4 text-[#101828]">
          <p className="text-3xl font-black">12</p>
          <p className="mt-1 text-xs font-bold text-[#667085]">experiments queued</p>
        </div>
        <div className="rounded-2xl bg-[#7ce8d9] p-4 text-[#06231f]">
          <p className="text-3xl font-black">4</p>
          <p className="mt-1 text-xs font-bold">channels syncing</p>
        </div>
      </div>
    </div>
  );
}
