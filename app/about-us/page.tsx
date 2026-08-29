import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

import { Footer, PageHero } from "@/components/site/shared";
import { AnalyticsIcon, CreativeIcon, StrategyIcon } from "@/components/site/service-icons";
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

      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[92rem] gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <p className="text-sm font-black text-[#145cff]">How we think</p>
            <h2 className="mt-5 text-5xl font-light leading-[1.05] tracking-normal sm:text-6xl">
              We make marketing easier to choose, launch, measure, and improve.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#666]">
              Most teams do not need more disconnected tactics. They need a
              clear story, a practical campaign system, and a rhythm for making
              better decisions every week.
            </p>
            <div className="mt-8 grid gap-3 font-bold text-[#333]">
              {["Strategy before spend", "Creative tied to customer intent", "Weekly decisions from real signals", "Clear handoff between marketing and sales"].map((item) => (
                <p key={item} className="flex items-center gap-3">
                  <Check className="size-5 text-[#145cff]" />
                  {item}
                </p>
              ))}
            </div>
            <Button asChild className="mt-9 h-14 rounded-xl bg-[#080808] px-8 font-black text-white hover:bg-[#145cff]">
              <Link href="/contact-us">
                Talk to Heron
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="relative min-h-[38rem] overflow-hidden rounded-[2rem] bg-[#e8edf2]">
            <Image src="/heron-hero-office.png" alt="Heron strategy team" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="border-y border-black/8 bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-[92rem] gap-8 md:grid-cols-3">
          {principles.map(([title, copy, Icon]) => (
            <article key={title as string} className="border-black/10 md:border-r md:pr-10 md:last:border-r-0">
              <Icon className="size-16" />
              <h3 className="mt-8 text-2xl font-black">{title as string}</h3>
              <p className="mt-4 leading-7 text-[#666]">{copy as string}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[92rem] rounded-2xl bg-[#080808] p-8 text-white sm:p-12">
          <ShieldCheck className="size-12 text-[#7ce8d9]" />
          <h2 className="mt-6 max-w-4xl text-5xl font-light leading-[1.05] tracking-normal">
            Built for brands that want calm delivery and sharper growth decisions.
          </h2>
        </div>
      </section>

      <Footer />
    </main>
  );
}
