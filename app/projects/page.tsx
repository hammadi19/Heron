import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Footer, PageHero, PortfolioGrid } from "@/components/site/shared";
import { AnalyticsIcon, ProofIcon, StrategyIcon } from "@/components/site/service-icons";
import { Button } from "@/components/ui/button";

const outcomes = [
  {
    title: "Positioning",
    copy: "Sharper offer, audience, and message direction.",
    icon: StrategyIcon,
  },
  {
    title: "Acquisition",
    copy: "Better channel mix, campaign structure, and landing flow.",
    icon: ProofIcon,
  },
  {
    title: "Measurement",
    copy: "Clearer KPI dashboard and next-step reporting rhythm.",
    icon: AnalyticsIcon,
  },
];

const caseStudies = [
  ["Bentleys", "Website re-design and advertising push", "A refreshed website experience paired with a sharper advertising push to improve credibility, enquiries, and conversion confidence."],
  ["Potters Carpets and Beds", "Ecommerce web build", "A commerce-ready website structure designed around product discovery, trust, and a cleaner path from browsing to purchase."],
  ["Wreake Valley Craftsmen", "New website design", "A new digital presence shaped around craftsmanship, local visibility, and clear service enquiries."],
  ["Regional Services Brand", "SEO and AEO visibility sprint", "A template case study for search foundations, AI visibility, local intent pages, and measurable ranking momentum."],
  ["Retail Growth Campaign", "Paid media and conversion framework", "A template case study for campaign strategy, landing page improvements, creative testing, and return-on-spend reporting."],
];

export default function ProjectsPage() {
  return (
    <main className="bg-[#050505] text-white">
      <PageHero
        eyebrow="Our Work"
        title="Case studies built to show the full story."
        copy="Five project templates across web redesign, ecommerce, new website design, SEO, paid media, and conversion strategy."
      />

      <section className="px-4 py-14 sm:px-8 sm:py-16 lg:py-20">
        <PortfolioGrid />
        <div className="mx-auto mt-10 grid max-w-[92rem] gap-5">
          {caseStudies.map(([client, service, copy], index) => (
            <article key={client} className="grid gap-5 rounded-2xl border border-white/10 bg-white/6 p-6 md:grid-cols-[8rem_1fr_auto] md:items-center">
              <p className="font-serif text-5xl font-light text-white/32">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h2 className="text-2xl font-black">{client}</h2>
                <p className="mt-1 text-sm font-black text-[#7ce8d9]">{service}</p>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-white/62">{copy}</p>
              </div>
              <Button asChild variant="outline" className="h-11 rounded-xl border-white/14 bg-white/8 font-black text-white hover:bg-white/14">
                <Link href="/contact-us">
                  Discuss similar
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#080808] px-4 py-12 sm:px-8 sm:py-14">
        <div className="mobile-carousel no-scrollbar mx-auto flex max-w-[92rem] snap-x snap-mandatory flex-nowrap gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0">
          {outcomes.map((outcome) => (
            <article key={outcome.title} className="w-[78vw] flex-none snap-start rounded-2xl border border-white/10 bg-white/6 p-5 md:w-auto md:flex-auto md:rounded-none md:border-0 md:border-r md:border-white/10 md:bg-transparent md:p-0 md:pr-10 md:last:border-r-0">
              <outcome.icon className="size-12" />
              <h3 className="mt-5 text-xl font-black">{outcome.title}</h3>
              <p className="mt-3 leading-6 text-white/62">{outcome.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-14 text-center sm:px-8 sm:py-16">
        <h2 className="mx-auto max-w-3xl text-4xl font-light leading-[1.05] tracking-normal">
          Want a project built around your growth target?
        </h2>
        <Button asChild className="mt-6 h-12 w-full rounded-xl bg-white px-8 font-black text-[#080808] hover:bg-[#7ce8d9] sm:h-14 sm:w-auto">
          <Link href="/contact-us">
            Start a project
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </section>

      <Footer />
    </main>
  );
}
