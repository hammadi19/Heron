import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Eyebrow, Footer, PageHero } from "@/components/site/shared";
import { Button } from "@/components/ui/button";

const businessPackages = [
  {
    title: "Startups & Small Businesses",
    headline: "Launch Strong, Without Breaking the Bank",
    copy: "Starting a business is exciting, but getting your digital presence right from the beginning is critical. We help startups and small businesses establish a professional online presence without unnecessary complexity or cost.",
    items: ["Cost-effective starter websites", "Essential Local SEO", "Social media guidance", "Expert advice to make every pound count"],
  },
  {
    title: "Mid-Sized Businesses",
    headline: "Grow Smarter, Get Noticed Online",
    copy: "As your business grows, your digital presence needs to evolve. We help established businesses improve their online performance, attract more customers, and create marketing strategies that deliver measurable growth.",
    items: ["Optimised high-performance websites", "Premium SEO and content strategy", "Paid advertising and social campaigns", "Analytics and ROI reporting"],
  },
  {
    title: "Large Corporations",
    headline: "Maximise Performance, Lead the Market",
    copy: "Larger organisations require scalable digital solutions, premium digital experiences, strategic guidance, and ongoing optimisation built to deliver at a higher level.",
    items: ["Enterprise websites and UX design", "Full-scale SEO and multi-channel marketing", "Advanced analytics and conversion optimisation", "Ongoing consultancy and strategy alignment"],
  },
];

const seoPackages = [
  {
    name: "Local Package",
    copy: "Perfect for businesses looking to establish a solid SEO foundation and begin appearing in Google and AI-powered search.",
    items: ["Technical SEO fixes", "Key page optimisation", "Google Business Profile setup", "Local visibility improvements", "Schema markup", "AI search content optimisation", "Up to 15 keywords", "Monthly refinement"],
  },
  {
    name: "Premium Package",
    copy: "Designed for businesses ready to increase traffic, generate more enquiries, and compete for more valuable search terms.",
    items: ["Core Web Vitals improvements", "Every-page optimisation", "Multi-location visibility", "SEO content creation", "Internal linking", "Quality backlinks", "Local citations", "Advanced schema", "Up to 30 keywords", "Competitor analysis"],
  },
  {
    name: "Full Package",
    copy: "Our premium SEO service for businesses looking to maximise visibility across Google, AI search, and their wider digital presence.",
    items: ["Advanced technical SEO", "Maximum search optimisation", "Digital PR and backlinks", "Full Google Business Profile management", "Up to 50 keywords", "Google AI Overviews optimisation", "Entity SEO", "Advanced structured data", "Conversion rate improvements", "Monthly dashboards"],
  },
];

const seoFaqs = [
  ["Technical SEO", "Improve website speed, fix crawl issues, optimise Core Web Vitals, XML sitemaps, robots.txt, and indexing."],
  ["On-Page SEO", "Optimise page titles, meta descriptions, headings, content, images, and internal linking."],
  ["Off-Page SEO", "Build your website's authority through quality backlinks, citations, and digital PR."],
  ["Local SEO", "Help customers find your business locally through Google Maps and local search results."],
  ["AEO", "Optimise content so AI platforms like ChatGPT, Gemini, and Google's AI search are more likely to reference your business."],
  ["Website Authority", "Strengthen credibility through blog content, backlinks, long-tail searches, entity optimisation, and topical authority."],
];

export default function PackagesPage() {
  return (
    <main className="bg-[#050505] text-white">
      <PageHero
        eyebrow="Packages"
        title="Find Your Solution"
        copy="Flexible solutions for every business. Choose a tailored package, one-off support, or ongoing consultation — we adapt to your needs so your online presence always works as hard as you do."
      />

      <section className="px-4 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[92rem]">
          <Eyebrow>Flexible Support</Eyebrow>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-white/68">
            Agility is at the heart of how we work. Whether you need a simple
            starting point, ongoing marketing support, or a fully developed
            digital strategy, our tailored packages give you the right
            expertise, tools, and level of support.
          </p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {businessPackages.map((pack) => (
              <article key={pack.title} className="rounded-2xl border border-white/10 bg-white/6 p-6">
                <p className="text-sm font-black text-[#7ce8d9]">{pack.title}</p>
                <h2 className="mt-3 text-3xl font-light leading-tight">{pack.headline}</h2>
                <p className="mt-4 text-sm leading-7 text-white/62">{pack.copy}</p>
                <div className="mt-5 grid gap-3">
                  {pack.items.map((item) => (
                    <p key={item} className="flex gap-3 text-sm font-bold text-white/72">
                      <Check className="mt-0.5 size-4 shrink-0 text-[#7ce8d9]" />
                      {item}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#080808] px-4 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[92rem]">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <Eyebrow>SEO Packages</Eyebrow>
              <h2 className="mt-5 text-4xl font-light leading-tight">Local, Premium, and Full SEO support.</h2>
              <p className="mt-5 text-base leading-7 text-white/62">
                The right package depends on your budget and the SEO strategy
                you want to pursue. Good SEO is a long term investment, not a
                quick win.
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {seoPackages.map((pack) => (
                <article key={pack.name} className="rounded-2xl border border-white/10 bg-white/6 p-5">
                  <h3 className="text-xl font-black">{pack.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{pack.copy}</p>
                  <div className="mt-5 grid gap-2">
                    {pack.items.map((item) => (
                      <p key={item} className="flex gap-2 text-xs font-bold leading-5 text-white/70">
                        <Check className="mt-0.5 size-3.5 shrink-0 text-[#8b5cf6]" />
                        {item}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[92rem]">
          <Eyebrow>SEO FAQs</Eyebrow>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {seoFaqs.map(([title, copy]) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-white/6 p-5">
                <h3 className="text-lg font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{copy}</p>
              </article>
            ))}
          </div>
          <Button asChild className="mt-8 h-12 w-full rounded-xl bg-white px-8 font-black text-[#080808] hover:bg-[#7ce8d9] sm:h-14 sm:w-auto">
            <Link href="/contact-us">
              Contact Us
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
