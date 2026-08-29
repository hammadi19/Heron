import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Footer, PageHero, ServiceGrid, services } from "@/components/site/shared";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <main className="bg-[#fbfaf8] text-[#080808]">
      <PageHero
        eyebrow="Services"
        title="Integrated services. Compounding growth."
        copy="Choose one focused sprint or combine strategy, creative, media, search, lifecycle, and analytics into one connected demand system."
      />

      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <ServiceGrid />
      </section>

      <section className="border-y border-black/8 bg-white px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[92rem] gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm font-black text-[#145cff]">Sprint Menu</p>
            <h2 className="mt-5 text-5xl font-light leading-[1.05] tracking-normal">
              Build only what the growth bottleneck needs.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="border border-black/10 bg-[#fbfaf8] p-6">
                <h3 className="text-2xl font-black">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#666]">{service.copy}</p>
                <p className="mt-5 flex items-center gap-2 text-sm font-black text-[#145cff]">
                  <Check className="size-4" />
                  Sprint-ready deliverables
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 text-center sm:px-8">
        <h2 className="mx-auto max-w-3xl text-5xl font-light leading-[1.05] tracking-normal">
          Need the right service mix?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#666]">
          Start with a short brief and Heron will recommend the fastest route to
          useful growth signals.
        </p>
        <Button asChild className="mt-8 h-14 rounded-xl bg-[#080808] px-8 font-black text-white hover:bg-[#145cff]">
          <Link href="/contact-us">
            Start a brief
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </section>

      <Footer />
    </main>
  );
}
