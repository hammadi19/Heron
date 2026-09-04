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
    title: "Web Design",
    copy: "Modern websites, redesigns, hosting, and support that build trust and convert visitors.",
    icon: WebIcon,
    href: "/services/web-design-services",
  },
  {
    title: "Social Ads",
    copy: "Targeted paid social campaigns built around reach, enquiries, and measurable growth.",
    icon: CreativeIcon,
    href: "/services/social-media-advertising",
  },
  {
    title: "SEO & AEO",
    copy: "Search and AI visibility so your business shows up where customers now ask questions.",
    icon: MediaIcon,
    href: "/services/seo-aeo",
  },
  {
    title: "PPC",
    copy: "Fast, targeted advertising across search and social with tight budget control.",
    icon: SearchIcon,
    href: "/services/ppc",
  },
  {
    title: "YouTube",
    copy: "Advertising and video strategy that captures attention and supports long-term brand growth.",
    icon: AnalyticsIcon,
    href: "/services/youtube",
  },
  {
    title: "Custom Solutions",
    copy: "Bespoke portals, booking tools, AI workflows, integrations, and e-commerce systems.",
    icon: LifecycleIcon,
    href: "/customised-solutions",
  },
];

const aboutHighlights = [
  ["30+ Years of Digital Expertise", "Combined experience across web design, development, SEO, digital marketing, and online growth.", StrategyIcon],
  ["Delivering The Full Digital Wheelhouse", "Web, development, SEO, advertising, social, AI, and bespoke solutions delivered in-house.", WebIcon],
  ["Expertise Without the Agency Price Tag", "A lean, experienced, hands-on team means less overhead and better value for you.", LifecycleIcon],
];

const process = [
  ["01", "Discover", "We learn what matters: your business, audience, offer, and opportunity."],
  ["02", "Design", "We shape the positioning, site structure, channel plan, and conversion journey."],
  ["03", "Launch", "Once built and refined, we launch the site or campaign ready to do its job from day one."],
  ["04", "Scale", "We test, optimise, and double down on what delivers real business results."],
];

const work = [
  ["Bentleys", "Website re-design and advertising push", "/heron-web-design-desk.jpg"],
  ["Potters Carpets and Beds", "Ecommerce web build", "/heron-web-ui-showcase.png"],
  ["Wreake Valley Craftsmen", "New website design", "/heron-future-webdesign.jpg"],
];

const faqs = [
  "What types of companies do you work with?",
  "How do you measure success?",
  "What is your typical engagement process?",
  "Do you offer ongoing support and optimization?",
];

const founders = [
  ["Bhupesh Mistry", "Founder & Client Director", "No two businesses are the same. We tailor our solutions to what your business actually needs."],
  ["Hammad Ur Rehman", "Founder & Technical Director", "Marketing is not just how it looks, but how it works. We build systems that perform and connect."],
  ["Harriet Mistry", "Director of Operations", "We believe in earning your business, not tying you into it. Honest advice, no unnecessary upselling — just solutions that genuinely add value."],
];

const chooseHeron = [
  ["Built on real digital expertise", "Our team comes from ecommerce and tech, bringing 30+ years of combined experience building brands and growing businesses online."],
  ["Flexible support for every stage of growth", "From startups needing a strong online presence to established businesses seeking high-performance digital experiences, we tailor our approach."],
  ["Agile, scalable, and built around you", "Whether you need a one-off project, ongoing marketing, or full strategic guidance, our service packages flex with your business."],
  ["Local presence, global capability", "UK-based responsiveness with the experience, resources, and expertise to support businesses internationally."],
];

function DummyLogoMark({ type }: { type: string }) {
  return (
    <svg viewBox="0 0 48 48" className="size-9 shrink-0 text-white/68" aria-hidden="true">
      {type === "stack" ? (
        <>
          <rect x="10" y="12" width="26" height="26" rx="7" fill="currentColor" opacity="0.18" />
          <rect x="15" y="9" width="26" height="26" rx="7" fill="currentColor" />
        </>
      ) : null}
      {type === "cloud" ? (
        <path fill="currentColor" d="M16.4 33h17.2c5.1 0 8.4-3.1 8.4-7.4c0-4-2.9-7-7.1-7.3C33.3 14 29.3 11 24.6 11c-5.6 0-10.1 4-10.7 9.3C9.4 21 6 23.7 6 27.5C6 30.8 8.8 33 16.4 33Z" />
      ) : null}
      {type === "bolt" ? (
        <path fill="currentColor" d="M28.5 4L10 27.6h13.1L19.4 44L38 20.1H24.8L28.5 4Z" />
      ) : null}
      {type === "frame" ? (
        <>
          <rect x="9" y="10" width="30" height="28" rx="6" fill="none" stroke="currentColor" strokeWidth="5" />
          <circle cx="19" cy="21" r="4" fill="currentColor" />
          <path d="M16 32l7-7l5 5l4-4l5 6" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </>
      ) : null}
      {type === "pin" ? (
        <path fill="currentColor" d="M24 5c-7.1 0-12.9 5.4-12.9 12.1c0 9.2 12.9 25.9 12.9 25.9s12.9-16.7 12.9-25.9C36.9 10.4 31.1 5 24 5Zm0 17.2a5 5 0 1 1 0-10a5 5 0 0 1 0 10Z" />
      ) : null}
      {type === "spark" ? (
        <path fill="currentColor" d="M24 4l5.3 14.7L44 24l-14.7 5.3L24 44l-5.3-14.7L4 24l14.7-5.3L24 4Z" />
      ) : null}
      {type === "wave" ? (
        <path fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" d="M6 29c7.5-13 14.9-13 22.4 0c4.6 8 9.1 8 13.6 0" />
      ) : null}
      {type === "bloom" ? (
        <>
          <circle cx="24" cy="24" r="6" fill="currentColor" />
          <circle cx="24" cy="10" r="6" fill="currentColor" opacity="0.8" />
          <circle cx="38" cy="24" r="6" fill="currentColor" opacity="0.8" />
          <circle cx="24" cy="38" r="6" fill="currentColor" opacity="0.8" />
          <circle cx="10" cy="24" r="6" fill="currentColor" opacity="0.8" />
        </>
      ) : null}
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="relative isolate flex min-h-screen flex-col overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_18%,rgba(20,92,255,.36),transparent_28%),radial-gradient(circle_at_64%_34%,rgba(124,232,217,.2),transparent_24%),radial-gradient(circle_at_57%_58%,rgba(255,112,88,.15),transparent_30%),linear-gradient(180deg,#050505_0%,#0b0d14_58%,#050505_100%)]" />
        <div className="hero-hover-field pointer-events-none absolute inset-0" />
        <div className="relative z-10 mx-auto grid w-full max-w-[92rem] flex-1 gap-8 px-4 pb-12 pt-28 sm:px-8 sm:pt-32 lg:grid-cols-[1.18fr_0.82fr] lg:items-center lg:gap-10 lg:pb-20 lg:pt-36">
          <div className="min-w-0">
            <div className="mb-8 inline-flex items-center gap-4 border-2 border-[#8b5cf6] px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.42em] text-white sm:text-xs">
              <span className="h-0.5 w-12 bg-[#8b5cf6]" />
              Heron Marketing
            </div>
            <h1 className="max-w-[54rem] text-[2.72rem] font-light leading-[0.98] tracking-normal min-[380px]:text-[3.05rem] sm:text-[4.6rem] lg:text-[3.45rem]">
              <span className="block whitespace-nowrap font-serif italic">Marketing that make</span>
              <span className="block">your business</span>
              <span className="block">impossible to ignore.</span>
            </h1>
            <p className="mt-6 max-w-xl text-sm font-medium leading-7 text-white/62 sm:text-base">
              Helping businesses to turn their online presence into a
              <br className="hidden sm:block" />
              competitive edge
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button asChild className="h-12 w-full rounded-xl bg-white px-6 text-sm font-black text-[#080808] hover:bg-[#7ce8d9] sm:h-14 sm:w-auto sm:px-8 sm:text-base">
                <Link href="/contact-us">
                  Let&apos;s Talk
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-12 w-full rounded-xl border-white/22 bg-white/8 px-6 text-sm font-black text-white hover:bg-white/14 sm:h-14 sm:w-auto sm:px-8 sm:text-base">
                <Link href="/projects">
                  View Our Work
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="min-w-0">
            <div className="relative min-h-[22rem] sm:min-h-[30rem]">
              <div className="absolute right-0 top-0 h-[16.5rem] w-[82%] overflow-hidden rounded-[1.35rem] bg-[#111318] shadow-[0_30px_100px_rgba(0,0,0,.48)] ring-1 ring-white/10 min-[380px]:h-[18rem] sm:h-[24rem] sm:rounded-[2rem]">
                <Image
                  src="/heron-web-ui-showcase.png"
                  alt="Responsive web design interface with Heron-inspired digital layouts"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  className="object-cover object-[58%_45%]"
                />
              </div>
              <div className="absolute bottom-0 left-0 h-[13rem] w-[58%] overflow-hidden rounded-[1.25rem] bg-[#111318] shadow-[0_24px_80px_rgba(0,0,0,.45)] ring-1 ring-white/10 sm:h-[18rem] sm:rounded-[1.6rem]">
                <Image
                  src="/heron-future-webdesign.jpg"
                  alt="Futuristic web design dashboard and interface system"
                  fill
                  priority
                  sizes="(max-width: 1024px) 60vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#080808] px-4 py-8 sm:px-8 sm:py-9">
        <div className="mx-auto grid max-w-[92rem] gap-5 md:grid-cols-[16rem_1fr] md:items-center md:gap-8">
          <p className="text-sm font-black leading-5">Trusted by growth-focused teams</p>
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#080808] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#080808] to-transparent" />
            <div className="logo-marquee-track flex w-max items-center gap-6">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex h-14 min-w-40 items-center gap-3 rounded-full border border-white/10 bg-white/6 px-4 text-white shadow-[0_12px_40px_rgba(0,0,0,.2)] sm:h-16 sm:min-w-48 sm:px-5"
                >
                  <DummyLogoMark type={client.mark} />
                  <span className="text-lg font-black text-white/62 sm:text-xl">{client.name}</span>
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
          <div className="mobile-carousel no-scrollbar -mx-4 mt-6 flex snap-x snap-mandatory flex-nowrap gap-4 overflow-x-auto px-4 pb-3 lg:mx-0 lg:grid lg:grid-cols-6 lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0">
            {services.map((service, index) => (
              <article key={service.title} className="w-[78vw] flex-none snap-start rounded-2xl border border-white/10 bg-white/6 p-5 shadow-[0_18px_50px_rgba(0,0,0,.18)] lg:w-auto lg:flex-auto lg:rounded-none lg:border-0 lg:border-r lg:border-white/10 lg:bg-transparent lg:p-0 lg:px-8 lg:shadow-none lg:first:pl-0 lg:last:border-r-0">
                <service.icon
                  className="service-icon-float size-12"
                  style={{ animationDelay: `${index * 0.32}s` }}
                />
                <h2 className="mt-5 text-xl font-black">{service.title}</h2>
                <p className="mt-4 max-w-xs text-sm leading-6 text-white/62">{service.copy}</p>
                  <Link href={service.href} className="mt-5 inline-flex text-white transition hover:text-[#7ce8d9]" aria-label={`Explore ${service.title}`}>
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
              <span className="font-serif italic">Creating digital solutions that deliver</span>
              <br />
              results and delight customers
            </h2>
            <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-white/70">
              Heron Marketing are your experts when it comes to digital
              branding. We work with all types of businesses to strengthen
              their online presence and turn it into a driver of real growth.
            </p>

            <div className="mobile-carousel no-scrollbar mt-6 flex snap-x snap-mandatory flex-nowrap gap-4 overflow-x-auto pb-3 sm:grid sm:gap-6 sm:overflow-visible sm:pb-0">
              {aboutHighlights.map(([title, copy, Icon]) => (
                <div key={title as string} className="w-[82vw] flex-none snap-start rounded-2xl border border-white/10 bg-white/6 p-5 sm:grid sm:w-auto sm:flex-auto sm:grid-cols-[4rem_1fr] sm:border-0 sm:bg-transparent sm:p-0">
                  <Icon className="size-14" />
                  <div>
                    <h3 className="text-xl font-black">{title as string}</h3>
                <p className="mt-2 text-sm leading-7 text-white/64 sm:text-base">{copy as string}</p>
              </div>
            </div>
          ))}
            </div>
          </div>

          <div className="min-w-0">
            <div className="relative h-[19rem] overflow-hidden rounded-[1.35rem] bg-[#111318] shadow-[0_26px_90px_rgba(0,0,0,.3)] ring-1 ring-white/10 sm:h-[26rem] sm:rounded-[2rem]">
              <Image
                src="/heron-web-design-desk.jpg"
                alt="Heron strategist designing digital growth systems"
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover"
              />
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-[7rem_1fr] sm:items-center sm:gap-6">
              <AwardIcon className="size-20" />
              <div>
                <div className="grid gap-4">
                  {founders.map(([name, role, quote]) => (
                    <blockquote key={name} className="border-l border-[#7ce8d9]/60 pl-4">
                      <p className="font-serif text-xl italic leading-tight text-white/72">“{quote}”</p>
                      <p className="mt-3 text-base font-black">{name}</p>
                      <p className="text-sm text-white/50">{role}</p>
                    </blockquote>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-8 sm:pb-16 lg:pb-20">
        <div className="mx-auto grid max-w-[92rem] gap-10 lg:grid-cols-[0.72fr_1.05fr] lg:items-center">
          <div className="relative h-[18rem] overflow-hidden rounded-[1.2rem] bg-[#111318] shadow-[0_26px_90px_rgba(0,0,0,.3)] ring-1 ring-white/10 sm:h-[23rem]">
            <Image
              src="/heron-future-webdesign.jpg"
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
                <article key={number} className="w-[76vw] flex-none snap-start rounded-2xl border border-white/10 bg-white/6 p-5 md:w-auto md:flex-auto md:rounded-none md:border-0 md:bg-transparent md:p-0">
                  <p className={`text-4xl font-light ${index === 0 ? "text-[#145cff]" : index === 1 ? "text-[#ff7058]" : index === 2 ? "text-[#9d75ff]" : "text-[#16c7c0]"}`}>
                    {number}
                  </p>
                  <div className="mt-5 h-px bg-white/18" />
                  <h3 className="mt-5 text-lg font-black">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/62">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-8 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-[92rem]">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <Eyebrow>Why Choose Heron</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-4xl font-light leading-[1.05] tracking-normal sm:text-5xl">
                Agile digital support for every stage of growth.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/64">
                Agility is at the heart of how we work. Whether you need a
                simple starting point, ongoing marketing support, or a fully
                developed digital strategy, we adapt to the level of involvement
                that works for you.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {chooseHeron.map(([title, copy]) => (
                <article key={title} className="rounded-2xl border border-white/10 bg-white/6 p-5">
                  <h3 className="text-lg font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/62">{copy}</p>
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
              <Eyebrow>Our Work</Eyebrow>
              <h2 className="mt-4 max-w-2xl text-4xl font-light leading-[1.04] tracking-normal sm:text-5xl">
                <span className="font-serif">Digital projects</span>
                <br />
                built around real businesses
              </h2>
            </div>
            <Button asChild variant="outline" className="h-12 w-full rounded-xl border-white/22 bg-white/6 px-7 font-black text-white hover:bg-white/12 sm:h-14 sm:w-auto">
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
                  <Link href="/projects" className="grid size-12 shrink-0 place-items-center rounded-full bg-white text-[#080808] transition hover:bg-[#7ce8d9]" aria-label={`View ${title}`}>
                    <ArrowRight className="size-5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#080808] px-4 py-12 sm:px-8 sm:py-14">
        <div className="mobile-carousel no-scrollbar mx-auto flex max-w-[92rem] snap-x snap-mandatory flex-nowrap gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-4 md:gap-8 md:overflow-visible md:pb-0">
          {[
            ["250+", "Websites delivered across the UK"],
            ["28%", "Average increase in sales within 100 days"],
            ["18 days", "Average website turnaround"],
            ["3.5x", "Average return on ad spend across campaigns"],
          ].map(([value, label]) => (
            <div key={value} className="w-[74vw] flex-none snap-start rounded-2xl border border-white/10 bg-white/6 p-6 text-center md:w-auto md:flex-auto md:rounded-none md:border-0 md:border-r md:border-white/10 md:bg-transparent md:p-0 md:last:border-r-0">
              <p className="font-serif text-5xl font-light">{value}</p>
              <p className="mx-auto mt-4 max-w-xs text-sm leading-7 text-white/60">{label}</p>
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
            <div className="relative size-20 overflow-hidden rounded-full bg-[#111318] ring-1 ring-white/10">
              <Image src="/heron-hero-office.png" alt="Client portrait" fill sizes="80px" className="object-cover" />
            </div>
            <div>
              <p className="text-lg font-black">Michael Tran</p>
              <p className="mt-1 text-sm text-white/58">Head of Growth, Layer</p>
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
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/6">
            {faqs.map((faq) => (
              <details key={faq} className="group border-b border-white/10 px-6 py-5 last:border-b-0">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-bold">
                  {faq}
                  <Plus className="size-5 shrink-0 transition group-open:rotate-45" />
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/62">
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
        <div className="relative mx-auto grid max-w-[92rem] overflow-hidden rounded-2xl border border-white/10 bg-[#0d0f15] px-6 py-10 text-white shadow-[0_30px_100px_rgba(0,0,0,.34)] sm:px-10 lg:grid-cols-[1fr_0.62fr] lg:items-center lg:px-12">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_72%_50%,rgba(124,232,217,.62),transparent_34%),radial-gradient(circle_at_90%_30%,rgba(20,92,255,.5),transparent_26%)]" />
          <div className="relative z-10">
            <h2 className="max-w-xl text-4xl font-light leading-[1.05] tracking-normal">
              Want Heron to help you build your digital brand?
            </h2>
            <div className="mt-5 flex flex-col gap-5 border-t border-white/18 pt-8 sm:flex-row sm:items-center">
              <Button asChild className="h-12 w-full rounded-xl bg-white px-7 font-black text-[#080808] hover:bg-[#b9f6e8] sm:h-14 sm:w-auto">
                <Link href="/contact-us">
                  Contact Us
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
