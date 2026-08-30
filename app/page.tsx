import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Plus,
  Star,
} from "lucide-react";

import { Eyebrow, Footer } from "@/components/site/shared";
import { Button } from "@/components/ui/button";
import {
  AnalyticsIcon,
  AwardIcon,
  CreativeIcon,
  LifecycleIcon,
  MediaIcon,
  SearchIcon,
  StrategyIcon,
  WebIcon,
} from "@/components/site/service-icons";

const clients = [
  { name: "Layer", mark: "stack" },
  { name: "Cloudly", mark: "cloud" },
  { name: "Boltshift", mark: "bolt" },
  { name: "Lightbox", mark: "frame" },
  { name: "Sitemark", mark: "pin" },
  { name: "Vertex", mark: "spark" },
  { name: "Northline", mark: "wave" },
  { name: "BloomIQ", mark: "bloom" },
];

const services = [
  {
    title: "Strategy",
    copy: "Insight-led positioning, offer clarity, and channel roadmaps built for scale.",
    icon: StrategyIcon,
  },
  {
    title: "Creative",
    copy: "Scroll-stopping campaign concepts, copy, and design direction that earns attention.",
    icon: CreativeIcon,
  },
  {
    title: "Media",
    copy: "Data-driven paid media planning and buying that maximizes reach and ROI.",
    icon: MediaIcon,
  },
  {
    title: "Search",
    copy: "SEO and intent capture systems that bring high-value demand to the surface.",
    icon: SearchIcon,
  },
  {
    title: "Analytics",
    copy: "Clear reporting and insight loops that turn campaign data into smarter decisions.",
    icon: AnalyticsIcon,
  },
];

const aboutHighlights = [
  ["Digital Strategy", "Positioning, offer clarity, campaign planning, and growth roadmaps.", StrategyIcon],
  ["Conversion Systems", "Landing pages, funnels, lifecycle flows, and high-intent user journeys.", WebIcon],
  ["Marketing Growth", "SEO, paid media, brand campaigns, analytics, and scalable demand systems.", LifecycleIcon],
];

const process = [
  ["01", "Discover", "We diagnose the audience, market, funnel, and growth bottleneck before prescribing work."],
  ["02", "Design", "We craft the strategy, message system, channel plan, and conversion journey."],
  ["03", "Launch", "We ship campaigns, creative, landing pages, and tracking with precision."],
  ["04", "Scale", "We optimize, test, and reinvest in the signals that prove commercial value."],
];

const work = [
  ["SaaS Growth Campaign", "4.2x pipeline in 90 days", "/heron-hero-office.png"],
  ["DTC Performance Launch", "3.8x ROAS in 60 days", "/heron-marketing-illustration.png"],
  ["Brand Awareness Scale", "+168% lift in brand search", "/heron-growth-command.png"],
];

const faqs = [
  "What types of companies do you work with?",
  "How do you measure success?",
  "What is your typical engagement process?",
  "Do you offer ongoing support and optimization?",
];

function DummyLogoMark({ type }: { type: string }) {
  return (
    <svg viewBox="0 0 48 48" className="size-9 shrink-0" aria-hidden="true">
      {type === "stack" ? (
        <>
          <rect x="10" y="12" width="26" height="26" rx="7" fill="#101010" opacity="0.1" />
          <rect x="15" y="9" width="26" height="26" rx="7" fill="#101010" />
        </>
      ) : null}
      {type === "cloud" ? (
        <path fill="#101010" d="M16.4 33h17.2c5.1 0 8.4-3.1 8.4-7.4c0-4-2.9-7-7.1-7.3C33.3 14 29.3 11 24.6 11c-5.6 0-10.1 4-10.7 9.3C9.4 21 6 23.7 6 27.5C6 30.8 8.8 33 16.4 33Z" />
      ) : null}
      {type === "bolt" ? (
        <path fill="#101010" d="M28.5 4L10 27.6h13.1L19.4 44L38 20.1H24.8L28.5 4Z" />
      ) : null}
      {type === "frame" ? (
        <>
          <rect x="9" y="10" width="30" height="28" rx="6" fill="none" stroke="#101010" strokeWidth="5" />
          <circle cx="19" cy="21" r="4" fill="#101010" />
          <path d="M16 32l7-7l5 5l4-4l5 6" fill="none" stroke="#101010" strokeWidth="4" strokeLinecap="round" />
        </>
      ) : null}
      {type === "pin" ? (
        <path fill="#101010" d="M24 5c-7.1 0-12.9 5.4-12.9 12.1c0 9.2 12.9 25.9 12.9 25.9s12.9-16.7 12.9-25.9C36.9 10.4 31.1 5 24 5Zm0 17.2a5 5 0 1 1 0-10a5 5 0 0 1 0 10Z" />
      ) : null}
      {type === "spark" ? (
        <path fill="#101010" d="M24 4l5.3 14.7L44 24l-14.7 5.3L24 44l-5.3-14.7L4 24l14.7-5.3L24 4Z" />
      ) : null}
      {type === "wave" ? (
        <path fill="none" stroke="#101010" strokeWidth="6" strokeLinecap="round" d="M6 29c7.5-13 14.9-13 22.4 0c4.6 8 9.1 8 13.6 0" />
      ) : null}
      {type === "bloom" ? (
        <>
          <circle cx="24" cy="24" r="6" fill="#101010" />
          <circle cx="24" cy="10" r="6" fill="#101010" opacity="0.8" />
          <circle cx="38" cy="24" r="6" fill="#101010" opacity="0.8" />
          <circle cx="24" cy="38" r="6" fill="#101010" opacity="0.8" />
          <circle cx="10" cy="24" r="6" fill="#101010" opacity="0.8" />
        </>
      ) : null}
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf8] text-[#080808]">
      <section className="relative isolate flex min-h-screen flex-col overflow-hidden bg-[#fbfaf8]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_18%,rgba(20,92,255,.18),transparent_28%),radial-gradient(circle_at_64%_34%,rgba(124,232,217,.2),transparent_24%),radial-gradient(circle_at_57%_58%,rgba(255,112,88,.13),transparent_30%),radial-gradient(circle_at_35%_42%,rgba(170,124,255,.14),transparent_28%)] sm:bg-[radial-gradient(circle_at_48%_18%,rgba(20,92,255,.22),transparent_28%),radial-gradient(circle_at_64%_34%,rgba(124,232,217,.24),transparent_24%),radial-gradient(circle_at_57%_58%,rgba(255,112,88,.16),transparent_30%),radial-gradient(circle_at_35%_42%,rgba(170,124,255,.18),transparent_28%)]" />
        <div className="hero-hover-field pointer-events-none absolute inset-0" />
        <div className="relative z-10 mx-auto grid w-full max-w-[92rem] flex-1 gap-8 px-4 pb-12 pt-28 sm:px-8 sm:pt-32 lg:grid-cols-[1.18fr_0.82fr] lg:items-center lg:gap-10 lg:pb-20 lg:pt-36">
          <div className="min-w-0">
            <h1 className="max-w-[54rem] text-[2.72rem] font-light leading-[0.98] tracking-normal min-[380px]:text-[3.05rem] sm:text-[4.6rem] lg:text-[5.45rem]">
              <span className="block font-serif italic">Marketing that performs.</span>
              <span className="block">experiences that convert</span>
            </h1>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button asChild className="h-12 w-full rounded-xl bg-[#080808] px-6 text-sm font-black text-white hover:bg-[#145cff] sm:h-14 sm:w-auto sm:px-8 sm:text-base">
                <Link href="/contact-us">
                  Let&apos;s Talk
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-12 w-full rounded-xl border-[#111] bg-white/50 px-6 text-sm font-black text-[#080808] hover:bg-white sm:h-14 sm:w-auto sm:px-8 sm:text-base">
                <Link href="/projects">
                  View Our Work
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="min-w-0">
            <div className="relative">
              <div className="relative h-[17.5rem] overflow-hidden rounded-[1.35rem] bg-[#e8edf2] shadow-[0_26px_90px_rgba(16,24,40,.14)] min-[380px]:h-[19rem] sm:h-[25rem] sm:rounded-[2rem]">
                <Image
                  src="/heron-hero-bright.png"
                  alt="Heron Marketing strategists reviewing a growth plan"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/8 bg-white px-4 py-8 sm:px-8 sm:py-9">
        <div className="mx-auto grid max-w-[92rem] gap-5 md:grid-cols-[16rem_1fr] md:items-center md:gap-8">
          <p className="text-sm font-black leading-5">Trusted by growth-focused teams</p>
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
            <div className="logo-marquee-track flex w-max items-center gap-6">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex h-14 min-w-40 items-center gap-3 rounded-full border border-black/8 bg-[#fbfaf8] px-4 text-[#101010] shadow-[0_12px_40px_rgba(16,24,40,.04)] sm:h-16 sm:min-w-48 sm:px-5"
                >
                  <DummyLogoMark type={client.mark} />
                  <span className="text-lg font-black text-[#6c6c6c] sm:text-xl">{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="absolute right-0 top-8 h-56 w-56 bg-[radial-gradient(circle,rgba(170,124,255,.14),transparent_68%)] sm:h-96 sm:w-96 sm:bg-[radial-gradient(circle,rgba(170,124,255,.18),transparent_68%)]" />
        <div className="relative mx-auto max-w-[92rem]">
          <Eyebrow>What We Do</Eyebrow>
          <div className="mobile-carousel no-scrollbar -mx-4 mt-6 flex snap-x snap-mandatory flex-nowrap gap-4 overflow-x-auto px-4 pb-3 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0">
            {services.map((service, index) => (
              <article key={service.title} className="w-[78vw] flex-none snap-start rounded-2xl border border-black/10 bg-white/74 p-5 shadow-[0_18px_50px_rgba(16,24,40,.05)] lg:w-auto lg:flex-auto lg:rounded-none lg:border-0 lg:border-r lg:bg-transparent lg:p-0 lg:px-8 lg:shadow-none lg:first:pl-0 lg:last:border-r-0">
                <service.icon
                  className="service-icon-float size-12"
                  style={{ animationDelay: `${index * 0.32}s` }}
                />
                <h2 className="mt-5 text-xl font-black">{service.title}</h2>
                <p className="mt-4 max-w-xs text-sm leading-6 text-[#666]">{service.copy}</p>
                <Link href="/services" className="mt-5 inline-flex text-[#080808] transition hover:text-[#145cff]" aria-label={`Explore ${service.title}`}>
                  <ArrowRight className="size-5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-8 sm:pb-16 lg:pb-20">
        <div className="mx-auto grid max-w-[92rem] gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="min-w-0">
            <Eyebrow>About Us</Eyebrow>
            <h2 className="mt-5 max-w-4xl text-4xl font-light leading-[1.03] tracking-normal sm:text-5xl">
              <span className="font-serif italic">Crafting campaigns that deliver</span>
              <br />
              results and delight customers
            </h2>
            <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-[#222]">
              We are a creative growth studio specializing in sharp strategy,
              high-converting digital experiences, and marketing systems that
              help ambitious brands scale with confidence.
            </p>

            <div className="mobile-carousel no-scrollbar mt-6 flex snap-x snap-mandatory flex-nowrap gap-4 overflow-x-auto pb-3 sm:grid sm:gap-6 sm:overflow-visible sm:pb-0">
              {aboutHighlights.map(([title, copy, Icon]) => (
                <div key={title as string} className="w-[82vw] flex-none snap-start rounded-2xl border border-black/10 bg-white p-5 sm:grid sm:w-auto sm:flex-auto sm:grid-cols-[4rem_1fr] sm:border-0 sm:bg-transparent sm:p-0">
                  <Icon className="size-14" />
                  <div>
                    <h3 className="text-xl font-black">{title as string}</h3>
                    <p className="mt-2 text-base leading-7 text-[#333]">{copy as string}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <div className="relative h-[19rem] overflow-hidden rounded-[1.35rem] bg-[#e8edf2] sm:h-[26rem] sm:rounded-[2rem]">
              <Image
                src="/heron-about-home.png"
                alt="Heron strategist designing digital growth systems"
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover"
              />
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-[7rem_1fr] sm:items-center sm:gap-6">
              <AwardIcon className="size-20" />
              <div>
                <blockquote className="font-serif text-2xl italic leading-tight text-[#555] sm:text-3xl">
                  “Marketing is not just how it looks, but how it works. We
                  build systems that perform and connect.”
                </blockquote>
                <p className="mt-6 text-xl font-black">- Heron Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-8 sm:pb-16 lg:pb-20">
        <div className="mx-auto grid max-w-[92rem] gap-10 lg:grid-cols-[0.72fr_1.05fr] lg:items-center">
          <div className="relative h-[18rem] overflow-hidden rounded-[1.2rem] bg-[#e8edf2] sm:h-[23rem]">
            <Image
              src="/heron-growth-command.png"
              alt="Heron team collaborating on a digital growth campaign"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <Eyebrow>Our Process</Eyebrow>
            <div className="mobile-carousel no-scrollbar mt-6 flex snap-x snap-mandatory flex-nowrap gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-4 md:gap-9 md:overflow-visible md:pb-0">
              {process.map(([number, title, copy], index) => (
                <article key={number} className="w-[76vw] flex-none snap-start rounded-2xl border border-black/10 bg-white p-5 md:w-auto md:flex-auto md:rounded-none md:border-0 md:bg-transparent md:p-0">
                  <p className={`text-4xl font-light ${index === 0 ? "text-[#145cff]" : index === 1 ? "text-[#ff7058]" : index === 2 ? "text-[#9d75ff]" : "text-[#16c7c0]"}`}>
                    {number}
                  </p>
                  <div className="mt-5 h-px bg-black/18" />
                  <h3 className="mt-5 text-lg font-black">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#666]">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-8 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-[92rem]">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Selected Work</Eyebrow>
              <h2 className="mt-4 max-w-2xl text-4xl font-light leading-[1.04] tracking-normal sm:text-5xl">
                <span className="font-serif">Campaign systems</span>
                <br />
                with measurable outcomes
              </h2>
            </div>
            <Button asChild variant="outline" className="h-12 w-full rounded-xl border-[#111] px-7 font-black sm:h-14 sm:w-auto">
              <Link href="/projects">
                View All Work
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="mobile-carousel no-scrollbar -mx-4 mt-6 flex snap-x snap-mandatory flex-nowrap gap-4 overflow-x-auto px-4 pb-3 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0">
            {work.map(([title, label, image]) => (
              <article key={title} className="group relative h-56 w-[84vw] flex-none snap-start overflow-hidden rounded-2xl bg-[#101828] text-white sm:h-60 lg:w-auto lg:flex-auto">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 31vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_36%,rgba(0,0,0,.82)_100%)]" />
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-6">
                  <div>
                    <h3 className="text-xl font-black">{title}</h3>
                    <p className="mt-1 text-sm text-white/76">{label}</p>
                  </div>
                  <Link href="/projects" className="grid size-12 shrink-0 place-items-center rounded-full bg-white text-[#080808] transition hover:bg-[#145cff] hover:text-white" aria-label={`View ${title}`}>
                    <ArrowRight className="size-5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/8 bg-white px-4 py-12 sm:px-8 sm:py-14">
        <div className="mobile-carousel no-scrollbar mx-auto flex max-w-[92rem] snap-x snap-mandatory flex-nowrap gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0">
          {[
            ["38%", "Average increase in qualified leads within 90 days"],
            ["4.8x", "Average return on ad spend across campaigns"],
            ["90 days", "Typical time to meaningful performance lift"],
          ].map(([value, label]) => (
            <div key={value} className="w-[74vw] flex-none snap-start rounded-2xl border border-black/10 bg-[#fbfaf8] p-6 text-center md:w-auto md:flex-auto md:rounded-none md:border-0 md:border-r md:bg-transparent md:p-0 md:last:border-r-0">
              <p className="font-serif text-5xl font-light">{value}</p>
              <p className="mx-auto mt-4 max-w-xs text-sm leading-7 text-[#555]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-[92rem] gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Eyebrow>What Clients Say</Eyebrow>
            <blockquote className="mt-5 max-w-4xl font-serif text-2xl italic leading-tight sm:text-4xl">
              “Heron Marketing became an extension of our team. Their strategy,
              execution, and communication are world-class.”
            </blockquote>
          </div>
          <div className="flex items-center gap-5 lg:justify-end">
            <div className="relative size-20 overflow-hidden rounded-full bg-[#e8edf2]">
              <Image src="/heron-hero-office.png" alt="Client portrait" fill sizes="80px" className="object-cover" />
            </div>
            <div>
              <p className="text-lg font-black">Michael Tran</p>
              <p className="mt-1 text-sm text-[#666]">Head of Growth, Layer</p>
              <div className="mt-2 flex gap-1 text-[#f5a400]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="size-4 fill-current stroke-[2.2]" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-8 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-[92rem]">
          <Eyebrow>Frequently Asked Questions</Eyebrow>
          <div className="mt-6 overflow-hidden rounded-2xl border border-black/10 bg-white">
            {faqs.map((faq) => (
              <details key={faq} className="group border-b border-black/10 px-6 py-5 last:border-b-0">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-bold">
                  {faq}
                  <Plus className="size-5 shrink-0 transition group-open:rotate-45" />
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-[#666]">
                  We start by defining the business goal, then connect strategy,
                  channel execution, conversion design, and reporting into one
                  practical sprint plan.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-8">
        <div className="relative mx-auto grid max-w-[92rem] overflow-hidden rounded-2xl bg-[#050505] px-6 py-10 text-white sm:px-10 lg:grid-cols-[1fr_0.62fr] lg:items-center lg:px-12">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_72%_50%,rgba(124,232,217,.62),transparent_34%),radial-gradient(circle_at_90%_30%,rgba(20,92,255,.5),transparent_26%)]" />
          <div className="relative z-10">
            <h2 className="max-w-xl text-4xl font-light leading-[1.05] tracking-normal">
              Ready to build your next growth system?
            </h2>
            <div className="mt-5 flex flex-col gap-5 border-t border-white/18 pt-8 sm:flex-row sm:items-center">
              <Button asChild className="h-12 w-full rounded-xl bg-white px-7 font-black text-[#080808] hover:bg-[#b9f6e8] sm:h-14 sm:w-auto">
                <Link href="/contact-us">
                  Start a Project
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <a className="break-all font-bold text-white/78 transition hover:text-white" href="mailto:hello@heron-marketing.com">
                hello@heron-marketing.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
