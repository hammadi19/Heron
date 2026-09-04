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
  WebIcon,
  XIcon,
} from "@/components/site/service-icons";

export const services = [
  {
    title: "Web Design Services",
    slug: "web-design-services",
    copy: "Modern web design, redesigns, hosting, maintenance, and support for businesses that need a stronger first impression.",
    icon: WebIcon,
    color: "#0f8bff",
  },
  {
    title: "Social Media Advertising",
    slug: "social-media-advertising",
    copy: "Targeted campaigns across Facebook, Instagram, LinkedIn, and TikTok to build awareness and generate enquiries.",
    icon: MediaIcon,
    color: "#ff5c7a",
  },
  {
    title: "SEO & AEO",
    slug: "seo-aeo",
    copy: "Search visibility for Google, AI Overviews, ChatGPT, Gemini, Copilot, and the way customers search now.",
    icon: SearchIcon,
    color: "#00b8a9",
  },
  {
    title: "PPC",
    slug: "ppc",
    copy: "Google Ads, Microsoft Ads, targeting, budgets, bid optimisation, and reporting built to reduce wasted spend.",
    icon: AnalyticsIcon,
    color: "#7257ff",
  },
  {
    title: "YouTube",
    slug: "youtube",
    copy: "YouTube advertising and content strategy that turns attention into traffic, leads, and stronger brand recall.",
    icon: CreativeIcon,
    color: "#f5b700",
  },
  {
    title: "Customised Digital Solutions",
    slug: "customised-digital-solutions",
    copy: "Bespoke booking systems, portals, e-commerce platforms, AI tools, integrations, and automated workflows.",
    icon: LifecycleIcon,
    color: "#284f9f",
  },
];

export const portfolio = [
  ["Bentleys", "Website re-design and advertising push", "/heron-hero-office.png"],
  ["Potters Carpets and Beds", "Ecommerce web build", "/heron-marketing-illustration.png"],
  ["Wreake Valley Craftsmen", "New website design", "/heron-growth-command.png"],
  ["Local Services Brand", "SEO and AEO growth template", "/heron-hero-bright.png"],
  ["Retail Growth Sprint", "PPC and social campaign framework", "/heron-about-home.png"],
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
    <span className="inline-flex rounded-full border border-white/24 bg-white/5 px-4 py-1 text-sm font-black text-white/70">
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
    <section className="relative isolate flex min-h-[58vh] overflow-hidden bg-[#050505] text-white sm:min-h-[62vh]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_44%_6%,rgba(20,92,255,.34),transparent_28%),radial-gradient(circle_at_72%_18%,rgba(124,232,217,.2),transparent_24%),radial-gradient(circle_at_58%_58%,rgba(255,112,88,.16),transparent_29%),linear-gradient(180deg,#050505_0%,#0b0d14_62%,#050505_100%)]" />
      <div className="hero-hover-field pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative z-10 mx-auto grid w-full max-w-[92rem] self-end gap-7 px-4 pb-12 pt-32 sm:px-8 sm:pb-14 sm:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:pb-20 lg:pt-40">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-4xl text-4xl font-light leading-[1.03] tracking-normal sm:text-5xl">
            <span className="font-serif italic">{title.split(" ").slice(0, 2).join(" ")}</span>{" "}
            {title.split(" ").slice(2).join(" ")}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/66">{copy}</p>
        </div>
        <div className="grid gap-3 border border-white/12 bg-white/8 p-4 text-white shadow-[0_24px_80px_rgba(0,0,0,.36)] backdrop-blur-xl sm:grid-cols-3">
          {[
            ["38%", "qualified demand lift"],
            ["4.8x", "faster test learning"],
            ["90d", "growth sprint plan"],
          ].map(([value, label]) => (
            <div key={value} className="border-b border-white/12 p-3 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
              <p className="font-serif text-3xl font-light">{value}</p>
              <p className="mt-2 text-xs font-bold leading-5 text-white/58">{label}</p>
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
      <h2 className="text-3xl font-light leading-[1.06] tracking-normal text-white sm:text-5xl">
        {title}
      </h2>
      {copy ? <p className="mt-5 text-base leading-7 text-white/64">{copy}</p> : null}
    </div>
  );
}

export function ServiceGrid() {
  return (
    <div className="mobile-carousel no-scrollbar mx-auto flex max-w-[92rem] snap-x snap-mandatory flex-nowrap gap-4 overflow-x-auto rounded-2xl border border-white/10 bg-white/6 pb-3 md:grid md:grid-cols-2 md:gap-0 md:overflow-hidden md:pb-0 lg:grid-cols-3">
      {services.map((service, index) => (
        <article
          key={service.title}
          className="group w-[82vw] flex-none snap-start border-r border-white/10 p-5 text-white transition last:border-r-0 hover:bg-white/8 md:w-auto md:flex-auto md:border-b md:p-6 md:[&:nth-child(2n)]:border-r-0 md:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0"
        >
          <service.icon
            className="service-icon-float size-12"
            style={{ animationDelay: `${index * 0.32}s` }}
          />
          <h3 className="mt-6 text-xl font-black">{service.title}</h3>
          <p className="mt-3 min-h-20 text-sm leading-6 text-white/62">{service.copy}</p>
          <Link href={`/services/${service.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-black text-white transition group-hover:text-[#7ce8d9]">
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
    <div className="mobile-carousel no-scrollbar mx-auto flex max-w-[92rem] snap-x snap-mandatory flex-nowrap gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:pb-0 lg:grid-cols-3">
      {portfolio.map(([title, label, image], index) => (
        <article key={`${title}-${label}`} className={`group w-[82vw] flex-none snap-start overflow-hidden rounded-2xl bg-[#111318] shadow-[0_22px_70px_rgba(0,0,0,.34)] md:w-auto md:flex-auto ${index === 1 ? "lg:translate-y-8" : ""}`}>
          <div className="relative h-56 overflow-hidden sm:h-60">
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
    <div className="mobile-carousel no-scrollbar mx-auto flex max-w-[92rem] snap-x snap-mandatory flex-nowrap gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:pb-0">
      {news.map(([date, title, image]) => (
        <article key={title} className="group w-[82vw] flex-none snap-start overflow-hidden rounded-2xl border border-white/10 bg-[#111318] text-white md:w-auto md:flex-auto">
          <div className="relative h-48 sm:h-52">
            <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
          </div>
          <div className="p-6">
            <p className="text-sm font-black text-[#145cff]">{date}</p>
            <h3 className="mt-3 text-xl font-black leading-snug">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/62">
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
    ["Packages", "/packages"],
    ["Case Studies", "/projects"],
    ["Customised Solutions", "/customised-solutions"],
    ["Contact Us", "/contact-us"],
  ];

  return (
    <footer id="contact-us" className="border-t border-white/10 bg-[#050505] px-4 text-white sm:px-8">
      <div className="mx-auto grid max-w-[92rem] lg:grid-cols-[0.66fr_1.08fr] lg:border-x lg:border-white/10">
        <div className="flex flex-col justify-between border-white/10 py-10 lg:border-r lg:px-10 lg:py-12">
          <div>
            <HeronLogo inverted />

            <div className="mt-10 sm:mt-16">
              <div>
                <h3 className="text-lg font-black xl:text-xl">London Office</h3>
                <p className="mt-4 max-w-xs text-base leading-7 text-white/58">
                  45 King&apos;s Road, 3rd Floor Chelsea,
                  <br />
                  London SW3 5EP, UK
                </p>
              </div>
            </div>

            <form className="mt-8 flex h-12 max-w-2xl items-center rounded-full border border-white/12 bg-white/8 p-1 shadow-[0_18px_60px_rgba(0,0,0,.25)] sm:mt-10">
              <input
                className="h-full min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/42 sm:px-5 sm:text-base"
                placeholder="Type your Email address"
                aria-label="Newsletter email"
              />
              <button
                className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-[#080808] transition hover:bg-[#7ce8d9]"
                type="button"
                aria-label="Subscribe to newsletter"
              >
                <SendIcon className="size-7" />
              </button>
            </form>
          </div>

          <div className="mt-10 flex flex-col gap-6 text-sm text-white/56 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
            <p>
              Copyright 2026 <span className="font-black text-white">Heron</span> | All Right Reserved.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-base font-black text-white sm:gap-5">
              {socialLinks.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="/contact-us"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border border-white/12 text-white transition hover:-translate-y-0.5 hover:border-[#7ce8d9] hover:bg-[#7ce8d9] hover:text-[#06231f]"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col border-t border-white/10 py-10 lg:border-t-0 lg:px-14 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
            <h2 className="max-w-3xl text-3xl font-light leading-[1.04] tracking-normal sm:text-5xl">
              Let&apos;s take your{" "}
              <span className="font-serif italic">digital presence to the next level.</span>
            </h2>
            <Link
              href="/contact-us"
              className="inline-flex h-14 w-fit items-center gap-2 rounded-xl bg-white px-7 text-base font-black text-[#080808] transition hover:bg-[#7ce8d9]"
            >
              Contact Us
              <ArrowRight className="size-5" />
            </Link>
          </div>

          <div className="mt-10 grid flex-1 border-t border-white/10 sm:mt-14 lg:grid-cols-[1.05fr_0.78fr_0.78fr]">
            <div className="border-white/10 py-9 lg:border-r lg:pr-10">
              <h3 className="text-lg font-black xl:text-xl">Contact Us</h3>
              <div className="mt-6 grid gap-4 text-base text-white/58">
                <p className="contact-icon-row flex items-center gap-4 transition hover:text-white">
                  <PhoneIcon className="contact-icon-pop size-7 shrink-0 sm:size-8" />
                  <span className="break-all">+44 0000 000000</span>
                </p>
                <p className="contact-icon-row flex items-center gap-4 transition hover:text-white">
                  <MailIcon className="contact-icon-pop size-7 shrink-0 sm:size-8" />
                  <span className="break-all">hello@heron-marketing.com</span>
                </p>
              </div>
            </div>

            {[0, 1].map((column) => (
              <div key={column} className="border-white/10 py-9 lg:border-r lg:px-10 lg:last:border-r-0">
                <h3 className="text-lg font-black xl:text-xl">Useful Link</h3>
                <div className="mt-6 grid gap-4 text-base text-white/58">
                  {usefulLinks.map(([label, href]) => (
                    <Link key={`${column}-${href}`} href={href} className="transition hover:text-[#7ce8d9]">
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
