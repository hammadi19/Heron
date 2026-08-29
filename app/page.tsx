import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Plus,
  Star,
} from "lucide-react";

import { Footer, Header } from "@/components/site/shared";
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

const clients = ["Layer", "Cloudly", "Boltshift", "Lightbox", "Sitemark", "Vertex"];

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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf8] text-[#080808]">
      <section className="relative isolate overflow-hidden bg-[#fbfaf8]">
        <div className="absolute inset-x-0 top-24 h-[36rem] bg-[radial-gradient(circle_at_48%_28%,rgba(20,92,255,.22),transparent_28%),radial-gradient(circle_at_64%_45%,rgba(124,232,217,.24),transparent_24%),radial-gradient(circle_at_57%_62%,rgba(255,112,88,.16),transparent_30%),radial-gradient(circle_at_35%_54%,rgba(170,124,255,.18),transparent_28%)]" />
        <Header />

        <div className="relative z-10 mx-auto grid max-w-[92rem] gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.18fr_0.82fr] lg:items-center lg:pb-24 lg:pt-24">
          <div>
            <h1 className="max-w-[58rem] text-[3.7rem] font-light leading-[0.96] tracking-normal sm:text-[5.4rem] lg:text-[6.35rem]">
              <span className="block font-serif italic">Marketing that performs.</span>
              <span className="block">experiences that convert</span>
            </h1>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Button asChild className="h-16 rounded-2xl bg-[#080808] px-9 text-base font-black text-white hover:bg-[#145cff]">
                <Link href="/contact-us">
                  Let&apos;s Talk
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-16 rounded-2xl border-[#111] bg-white/50 px-9 text-base font-black text-[#080808] hover:bg-white">
                <Link href="/projects">
                  View Our Work
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <div className="relative">
              <div className="relative h-[29rem] overflow-hidden rounded-[2rem] bg-[#e8edf2] shadow-[0_26px_90px_rgba(16,24,40,.14)]">
                <Image
                  src="/heron-hero-office.png"
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

      <section className="border-y border-black/8 bg-white px-5 py-9 sm:px-8">
        <div className="mx-auto grid max-w-[92rem] gap-8 md:grid-cols-[1.4fr_repeat(6,1fr)] md:items-center">
          <p className="text-sm font-black">Trusted by growth-focused teams</p>
          {clients.map((client) => (
            <p key={client} className="text-lg font-black text-[#777]">{client}</p>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
        <div className="absolute right-0 top-8 h-96 w-96 bg-[radial-gradient(circle,rgba(170,124,255,.18),transparent_68%)]" />
        <div className="relative mx-auto max-w-[92rem]">
          <p className="text-xl font-black">What We Do</p>
          <div className="mt-10 grid border-black/10 lg:grid-cols-5">
            {services.map((service) => (
              <article key={service.title} className="border-b border-black/12 py-8 lg:border-b-0 lg:border-r lg:px-10 lg:first:pl-0 lg:last:border-r-0">
                <service.icon className="size-14" />
                <h2 className="mt-10 text-2xl font-black">{service.title}</h2>
                <p className="mt-5 max-w-xs text-sm leading-7 text-[#666]">{service.copy}</p>
                <Link href="/services" className="mt-8 inline-flex text-[#080808] transition hover:text-[#145cff]" aria-label={`Explore ${service.title}`}>
                  <ArrowRight className="size-5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto grid max-w-[92rem] gap-14 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <span className="inline-flex rounded-full border border-black/28 px-4 py-1 text-sm font-black text-[#555]">
              About Us
            </span>
            <h2 className="mt-7 max-w-4xl text-5xl font-light leading-[1.03] tracking-normal sm:text-6xl">
              <span className="font-serif italic">Crafting campaigns that deliver</span>
              <br />
              results and delight customers
            </h2>
            <p className="mt-9 max-w-3xl text-lg font-medium leading-9 text-[#222]">
              We are a creative growth studio specializing in sharp strategy,
              high-converting digital experiences, and marketing systems that
              help ambitious brands scale with confidence.
            </p>

            <div className="mt-14 grid gap-9">
              {aboutHighlights.map(([title, copy, Icon]) => (
                <div key={title as string} className="grid gap-5 sm:grid-cols-[4rem_1fr]">
                  <Icon className="size-14" />
                  <div>
                    <h3 className="text-2xl font-black">{title as string}</h3>
                    <p className="mt-3 text-lg leading-7 text-[#333]">{copy as string}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="relative h-[31rem] overflow-hidden rounded-[2rem] bg-[#e8edf2]">
              <Image
                src="/heron-about-home.png"
                alt="Heron strategist designing digital growth systems"
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover"
              />
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-[7rem_1fr] sm:items-center">
              <AwardIcon className="size-20" />
              <div>
                <blockquote className="font-serif text-3xl italic leading-tight text-[#555]">
                  “Marketing is not just how it looks, but how it works. We
                  build systems that perform and connect.”
                </blockquote>
                <p className="mt-6 text-xl font-black">- Heron Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto grid max-w-[92rem] gap-14 lg:grid-cols-[0.72fr_1.05fr] lg:items-center">
          <div className="relative h-[27rem] overflow-hidden rounded-[1.2rem] bg-[#e8edf2]">
            <Image
              src="/heron-growth-command.png"
              alt="Heron team collaborating on a digital growth campaign"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-black">Our Process</p>
            <div className="mt-10 grid gap-9 md:grid-cols-4">
              {process.map(([number, title, copy], index) => (
                <article key={number}>
                  <p className={`text-5xl font-light ${index === 0 ? "text-[#145cff]" : index === 1 ? "text-[#ff7058]" : index === 2 ? "text-[#9d75ff]" : "text-[#16c7c0]"}`}>
                    {number}
                  </p>
                  <div className="mt-7 h-px bg-black/18" />
                  <h3 className="mt-5 text-lg font-black">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#666]">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto max-w-[92rem]">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black text-[#145cff]">Selected Work</p>
              <h2 className="mt-4 max-w-2xl text-5xl font-light leading-[1.04] tracking-normal sm:text-6xl">
                <span className="font-serif">Campaign systems</span>
                <br />
                with measurable outcomes
              </h2>
            </div>
            <Button asChild variant="outline" className="h-14 rounded-xl border-[#111] px-7 font-black">
              <Link href="/projects">
                View All Work
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-3">
            {work.map(([title, label, image]) => (
              <article key={title} className="group relative h-72 overflow-hidden rounded-2xl bg-[#101828] text-white">
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

      <section className="border-y border-black/8 bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-[92rem] gap-10 md:grid-cols-3">
          {[
            ["38%", "Average increase in qualified leads within 90 days"],
            ["4.8x", "Average return on ad spend across campaigns"],
            ["90 days", "Typical time to meaningful performance lift"],
          ].map(([value, label]) => (
            <div key={value} className="border-black/12 text-center md:border-r md:last:border-r-0">
              <p className="font-serif text-7xl font-light">{value}</p>
              <p className="mx-auto mt-4 max-w-xs text-sm leading-7 text-[#555]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[92rem] gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-black text-[#145cff]">What Clients Say</p>
            <blockquote className="mt-6 max-w-4xl font-serif text-4xl italic leading-tight sm:text-5xl">
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

      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto max-w-[92rem]">
          <p className="text-sm font-black text-[#145cff]">Frequently Asked Questions</p>
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

      <section className="px-5 pb-12 sm:px-8">
        <div className="relative mx-auto grid max-w-[92rem] overflow-hidden rounded-2xl bg-[#050505] px-6 py-12 text-white sm:px-10 lg:grid-cols-[1fr_0.62fr] lg:items-center lg:px-16">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_72%_50%,rgba(124,232,217,.62),transparent_34%),radial-gradient(circle_at_90%_30%,rgba(20,92,255,.5),transparent_26%)]" />
          <div className="relative z-10">
            <h2 className="max-w-xl text-5xl font-light leading-[1.05] tracking-normal">
              Ready to build your next growth system?
            </h2>
            <div className="mt-9 flex flex-col gap-5 border-t border-white/18 pt-8 sm:flex-row sm:items-center">
              <Button asChild className="h-14 rounded-xl bg-white px-7 font-black text-[#080808] hover:bg-[#b9f6e8]">
                <Link href="/contact-us">
                  Start a Project
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <a className="font-bold text-white/78 transition hover:text-white" href="mailto:hello@heron-marketing.com">
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
