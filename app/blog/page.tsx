import Link from "next/link";
import { ArrowRight, BookOpen, Lightbulb, Newspaper } from "lucide-react";

import { Footer, NewsGrid, PageHero } from "@/components/site/shared";

export default function BlogPage() {
  return (
    <main className="bg-[#fbfaf8] text-[#080808]">
      <PageHero
        eyebrow="News"
        title="Ideas for clearer, faster marketing growth."
        copy="Practical articles on positioning, digital campaigns, landing pages, search demand, creative testing, and reporting."
      />

      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <NewsGrid />
      </section>

      <section className="border-y border-black/8 bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-[92rem] gap-8 md:grid-cols-3">
          {[
            ["Strategy Notes", "Frameworks for offer clarity and growth planning.", Lightbulb],
            ["Campaign Guides", "Practical ways to improve paid media, search, and creative testing.", Newspaper],
            ["Founder Reads", "Short, useful posts for decision makers.", BookOpen],
          ].map(([title, copy, Icon]) => (
            <article key={title as string} className="border-black/10 md:border-r md:pr-10 md:last:border-r-0">
              <Icon className="size-12 stroke-[1.6] text-[#145cff]" />
              <h3 className="mt-8 text-2xl font-black">{title as string}</h3>
              <p className="mt-4 leading-7 text-[#666]">{copy as string}</p>
              <Link href="/contact-us" className="mt-7 inline-flex items-center gap-2 text-sm font-black text-[#080808] hover:text-[#145cff]">
                Discuss this
                <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
