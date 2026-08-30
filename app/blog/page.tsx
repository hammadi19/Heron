import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Footer, NewsGrid, PageHero } from "@/components/site/shared";
import { ArticleIcon, CreativeIcon, InsightIcon } from "@/components/site/service-icons";

export default function BlogPage() {
  return (
    <main className="bg-[#fbfaf8] text-[#080808]">
      <PageHero
        eyebrow="News"
        title="Ideas for clearer, faster marketing growth."
        copy="Practical articles on positioning, digital campaigns, landing pages, search demand, creative testing, and reporting."
      />

      <section className="px-4 py-14 sm:px-8 sm:py-16 lg:py-20">
        <NewsGrid />
      </section>

      <section className="border-y border-black/8 bg-white px-4 py-12 sm:px-8 sm:py-14">
        <div className="mobile-carousel no-scrollbar mx-auto flex max-w-[92rem] snap-x snap-mandatory flex-nowrap gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0">
          {[
            ["Strategy Notes", "Frameworks for offer clarity and growth planning.", InsightIcon],
            ["Campaign Guides", "Practical ways to improve paid media, search, and creative testing.", CreativeIcon],
            ["Founder Reads", "Short, useful posts for decision makers.", ArticleIcon],
          ].map(([title, copy, Icon]) => (
            <article key={title as string} className="w-[78vw] flex-none snap-start rounded-2xl border border-black/10 bg-[#fbfaf8] p-5 md:w-auto md:flex-auto md:rounded-none md:border-0 md:border-r md:bg-transparent md:p-0 md:pr-10 md:last:border-r-0">
              <Icon className="size-12" />
              <h3 className="mt-5 text-xl font-black">{title as string}</h3>
              <p className="mt-3 leading-6 text-[#666]">{copy as string}</p>
              <Link href="/contact-us" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#080808] hover:text-[#145cff]">
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
