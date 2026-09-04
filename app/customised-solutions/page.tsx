import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Eyebrow, Footer, PageHero } from "@/components/site/shared";
import { Button } from "@/components/ui/button";

const customisations = [
  "Bespoke booking systems",
  "Custom functionality",
  "AI and intelligent tools",
  "Custom e-commerce platforms",
  "Customer portals and platforms",
  "Payment integrations",
  "Bespoke integrations",
  "Workflow automation",
];

export default function CustomisedSolutionsPage() {
  return (
    <main className="bg-[#050505] text-white">
      <PageHero
        eyebrow="Customised Solutions"
        title="If you can imagine it, we can probably build it."
        copy="Not every business fits neatly into an off-the-shelf solution. We build technology around the way your business actually works."
      />

      <section className="px-4 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-[92rem] gap-10 md:grid-cols-[0.82fr_1.18fr]">
          <div>
            <Eyebrow>Built Around You</Eyebrow>
            <h2 className="mt-5 text-4xl font-light leading-tight sm:text-5xl md:text-4xl xl:text-5xl">
              Bespoke systems for businesses that need something smarter.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/64">
              With over 30 years of combined experience across web development,
              software, and digital marketing, we design and build bespoke
              online solutions around your operations, customers, and growth
              goals.
            </p>
            <p className="mt-5 text-base font-bold leading-8 text-white/78">
              You do not have to change the way your business works to fit the
              technology. We will build the technology around you.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {customisations.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/6 p-4 font-bold text-white/74">
                <Check className="size-5 shrink-0 text-[#7ce8d9]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#080808] px-4 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-[92rem] gap-8 rounded-2xl border border-[#8b5cf6]/30 bg-[#8b5cf6]/12 p-6 md:grid-cols-[0.8fr_1.2fr] lg:p-8">
          <div>
            <Eyebrow>AI Tools</Eyebrow>
            <h2 className="mt-5 text-3xl font-light leading-tight sm:text-4xl">
              Practical artificial intelligence for real business workflows.
            </h2>
          </div>
          <p className="text-base leading-8 text-white/68">
            As technology evolves, we help businesses embrace AI in practical,
            meaningful ways. From AI-powered chatbots and intelligent customer
            support to automated workflows and integrations that save time, we
            help identify opportunities that genuinely improve efficiency.
          </p>
        </div>
      </section>

      <section className="px-4 py-14 text-center sm:px-8 sm:py-16">
        <h2 className="mx-auto max-w-3xl text-4xl font-light leading-tight">
          Have a requirement that does not fit a standard package?
        </h2>
        <Button asChild className="mt-6 h-12 w-full rounded-xl bg-white px-8 font-black text-[#080808] hover:bg-[#7ce8d9] sm:h-14 sm:w-auto">
          <Link href="/contact-us">
            Contact Us
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </section>

      <Footer />
    </main>
  );
}
