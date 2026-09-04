import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Eyebrow, Footer, PageHero, ServiceGrid, services } from "@/components/site/shared";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <main className="bg-[#050505] text-white">
      <PageHero
        eyebrow="Services"
        title="Integrated services. Compounding growth."
        copy="Choose one focused sprint or combine strategy, creative, media, search, lifecycle, and analytics into one connected demand system."
      />

      <section className="px-4 py-14 sm:px-8 sm:py-16 lg:py-20">
        <ServiceGrid />
      </section>

      <section className="border-y border-white/10 bg-[#080808] px-4 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-[92rem] gap-10 md:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Eyebrow>Sprint Menu</Eyebrow>
            <h2 className="mt-5 text-4xl font-light leading-[1.05] tracking-normal">
              Build only what the growth bottleneck needs.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="border border-white/10 bg-white/6 p-6 shadow-[0_18px_60px_rgba(0,0,0,.2)]">
                <h3 className="text-xl font-black">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/62">{service.copy}</p>
                <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/18 px-3 py-1 text-xs font-black text-white/62">
                  <span className="grid size-4 shrink-0 place-items-center rounded-full bg-[#7ce8d9] text-[0.62rem] text-[#06231f]">
                    ✓
                  </span>
                  Sprint-ready deliverables
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 text-center sm:px-8 sm:py-16">
        <h2 className="mx-auto max-w-3xl text-4xl font-light leading-[1.05] tracking-normal">
          Need the right service mix?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/64">
          Start with a short brief and Heron will recommend the fastest route to
          useful growth signals.
        </p>
        <Button asChild className="mt-6 h-12 w-full rounded-xl bg-white px-8 font-black text-[#080808] hover:bg-[#7ce8d9] sm:h-14 sm:w-auto">
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
