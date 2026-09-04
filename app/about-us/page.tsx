import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Eyebrow, Footer, PageHero } from "@/components/site/shared";
import {
  AnalyticsIcon,
  AwardIcon,
  ProofIcon,
} from "@/components/site/service-icons";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Bhupesh Mistry",
    role: "Founder & Client Director",
    copy: "Bhupesh's background is mathematics. He has spent most of his career supporting commercial and sales functions, and co-founded Heron Marketing after seeing how big-corporate digital thinking could be localised for ambitious businesses.",
  },
  {
    name: "Hammad Ur Rehman",
    role: "Founder & Technical Director",
    copy: "Hammad leads technical delivery across websites, systems, integrations, and performance-led digital infrastructure, bringing the build discipline needed to turn strategy into working products.",
  },
  {
    name: "Harriet Dixon",
    role: "Director of Operations",
    copy: "Harriet keeps delivery organised, practical, and client-focused, making sure every project has clear communication, sensible priorities, and the right operational support behind it.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#050505] text-white">
      <PageHero
        eyebrow="About Heron"
        title="Digital expertise. Business results."
        copy="We built Heron Marketing to give businesses the digital expertise they need to grow, without making things complicated."
      />

      <section className="px-4 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-[92rem] gap-10 md:grid-cols-[0.86fr_1.14fr] md:items-center">
          <div>
            <Eyebrow>How We Support</Eyebrow>
            <h2 className="mt-5 text-4xl font-light leading-[1.05] tracking-normal sm:text-5xl md:text-4xl xl:text-5xl">
              We make marketing easier to choose, launch, measure, and improve.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/64">
              We take the complexity out of digital marketing, giving you
              straightforward advice and the right solutions for your business.
            </p>
            <div className="mt-6 grid gap-3 font-bold text-white/76">
              {["The right plan before you spend", "Creative that connects with customers", "Decisions backed by real data", "Marketing that drives business growth"].map((item) => (
                <p key={item} className="flex items-center gap-3">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-white/10 text-sm font-black text-[#7ce8d9]">
                    ✓
                  </span>
                  {item}
                </p>
              ))}
            </div>
            <Button asChild className="mt-5 h-12 w-full rounded-xl bg-white px-8 font-black text-[#080808] hover:bg-[#7ce8d9] sm:h-14 sm:w-auto">
              <Link href="/contact-us">
                Talk to Heron
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="relative min-h-[19rem] overflow-hidden rounded-[1.35rem] bg-[#111318] shadow-[0_26px_90px_rgba(0,0,0,.32)] ring-1 ring-white/10 sm:min-h-[26rem] md:min-h-[23rem] sm:rounded-[2rem] xl:min-h-[26rem]">
            <Image src="/heron-hero-office.png" alt="Heron strategy team" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#080808] px-4 py-12 sm:px-8 sm:py-14">
        <div className="mobile-carousel no-scrollbar mx-auto flex max-w-[92rem] snap-x snap-mandatory flex-nowrap gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0">
          {[
            ["250+", "websites delivered across the UK", ProofIcon],
            ["90%", "of customers come back to work with us again", AwardIcon],
            ["1000+", "ad campaigns managed", AnalyticsIcon],
          ].map(([title, copy, Icon]) => (
            <article key={title as string} className="w-[78vw] flex-none snap-start rounded-2xl border border-white/10 bg-white/6 p-5 md:w-auto md:flex-auto md:rounded-none md:border-0 md:border-r md:border-white/10 md:bg-transparent md:p-0 md:pr-10 md:last:border-r-0">
              <Icon className="size-12" />
              <h3 className="mt-5 font-serif text-5xl font-light">{title as string}</h3>
              <p className="mt-3 leading-6 text-white/62">{copy as string}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[92rem]">
          <Eyebrow>Who We Are</Eyebrow>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="rounded-2xl border border-white/10 bg-white/6 p-6">
                <h2 className="text-2xl font-black">{member.name}</h2>
                <p className="mt-1 text-sm font-black text-[#7ce8d9]">{member.role}</p>
                <p className="mt-5 text-sm leading-7 text-white/64">{member.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
