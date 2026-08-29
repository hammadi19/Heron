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

export default function ProjectsPage() {
  return (
    <main className="bg-[#fbfaf8] text-[#080808]">
      <PageHero
        eyebrow="Selected Work"
        title="Campaign systems with measurable outcomes."
        copy="Representative project stories across launch campaigns, search growth, paid media, landing pages, and lifecycle systems."
      />

      <section className="px-5 py-16 sm:px-8 lg:py-20">
        <PortfolioGrid />
      </section>

      <section className="border-y border-black/8 bg-white px-5 py-14 sm:px-8">
        <div className="mx-auto grid max-w-[92rem] gap-8 md:grid-cols-3">
          {outcomes.map((outcome) => (
            <article key={outcome.title} className="border-black/10 md:border-r md:pr-10 md:last:border-r-0">
              <outcome.icon className="size-12" />
              <h3 className="mt-5 text-xl font-black">{outcome.title}</h3>
              <p className="mt-3 leading-6 text-[#666]">{outcome.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 text-center sm:px-8">
        <h2 className="mx-auto max-w-3xl text-4xl font-light leading-[1.05] tracking-normal">
          Want a project built around your growth target?
        </h2>
        <Button asChild className="mt-6 h-14 rounded-xl bg-[#080808] px-8 font-black text-white hover:bg-[#145cff]">
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
