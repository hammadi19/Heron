import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Eyebrow, Footer, PageHero } from "@/components/site/shared";
import {
  AnalyticsIcon,
  AwardIcon,
  CreativeIcon,
  ProofIcon,
  StrategyIcon,
} from "@/components/site/service-icons";
import { Button } from "@/components/ui/button";

const principles = [
  ["Strategic", "We start with the buyer, the offer, and the commercial signal that matters.", StrategyIcon],
  ["Creative", "We turn clarity into campaign ideas, content, and conversion journeys that feel distinct.", CreativeIcon],
  ["Measurable", "We connect decisions to tracking, dashboards, and repeatable learning loops.", AnalyticsIcon],
];

export default function AboutPage() {
  return (
    <main className="bg-[#fbfaf8] text-[#080808]">
      <PageHero
        eyebrow="About Heron"
        title="Strategy first. Systems always."
        copy="Heron Marketing is built for companies that want sharper positioning, cleaner execution, and digital growth they can actually understand."
      />

      <section className="px-4 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-[92rem] gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <Eyebrow>How we think</Eyebrow>
            <h2 className="mt-5 text-4xl font-light leading-[1.05] tracking-normal sm:text-5xl">
              We make marketing easier to choose, launch, measure, and improve.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#666]">
              Most teams do not need more disconnected tactics. They need a
              clear story, a practical campaign system, and a rhythm for making
              better decisions every week.
            </p>
            <div className="mt-6 grid gap-3 font-bold text-[#333]">
              {["Strategy before spend", "Creative tied to customer intent", "Weekly decisions from real signals", "Clear handoff between marketing and sales"].map((item) => (
                <p key={item} className="flex items-center gap-3">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#eef4ff] text-sm font-black text-[#145cff]">
                    ✓
                  </span>
                  {item}
                </p>
              ))}
            </div>
            <Button asChild className="mt-5 h-12 w-full rounded-xl bg-[#080808] px-8 font-black text-white hover:bg-[#145cff] sm:h-14 sm:w-auto">
              <Link href="/contact-us">
                Talk to Heron
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="relative min-h-[19rem] overflow-hidden rounded-[1.35rem] bg-[#e8edf2] sm:min-h-[26rem] sm:rounded-[2rem]">
            <Image src="/heron-hero-office.png" alt="Heron strategy team" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="border-y border-black/8 bg-white px-4 py-12 sm:px-8 sm:py-14">
        <div className="mobile-carousel no-scrollbar mx-auto flex max-w-[92rem] snap-x snap-mandatory flex-nowrap gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0">
          {principles.map(([title, copy, Icon]) => (
            <article key={title as string} className="w-[78vw] flex-none snap-start rounded-2xl border border-black/10 bg-[#fbfaf8] p-5 md:w-auto md:flex-auto md:rounded-none md:border-0 md:border-r md:bg-transparent md:p-0 md:pr-10 md:last:border-r-0">
              <Icon className="size-12" />
              <h3 className="mt-5 text-xl font-black">{title as string}</h3>
              <p className="mt-3 leading-6 text-[#666]">{copy as string}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[92rem] rounded-2xl bg-[#080808] p-7 text-white sm:p-10">
          <ProofIcon className="size-12" />
          <h2 className="mt-5 max-w-4xl text-3xl font-light leading-[1.05] tracking-normal sm:text-5xl">
            Built for brands that want calm delivery and sharper growth decisions.
          </h2>
          <div className="mt-6 flex items-center gap-4">
            <AwardIcon className="size-10" />
            <p className="max-w-xl text-sm font-bold leading-7 text-white/66">
              Senior strategy, polished creative, and clear reporting inside one growth rhythm.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
