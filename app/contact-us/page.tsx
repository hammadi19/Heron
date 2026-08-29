import Image from "next/image";
import { Mail, MapPin, Phone, Send } from "lucide-react";

import { Footer, PageHero } from "@/components/site/shared";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="bg-[#fbfaf8] text-[#080808]">
      <PageHero
        eyebrow="Contact"
        title="Tell us where growth feels stuck."
        copy="Share the offer, the market, and the challenge. Heron will help you identify the clearest sprint to run first."
      />

      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[92rem] gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <h2 className="text-5xl font-light leading-[1.05] tracking-normal">
              Let&apos;s build something great together.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#666]">
              The first conversation is designed to be useful: what is working,
              where demand is leaking, and what a focused Heron sprint could
              improve fastest.
            </p>
            <div className="mt-10 grid gap-5">
              <p className="flex gap-4 text-[#555]">
                <Phone className="size-6 text-[#145cff]" />
                +44 0000 000000
              </p>
              <p className="flex gap-4 text-[#555]">
                <Mail className="size-6 text-[#145cff]" />
                hello@heron-marketing.com
              </p>
              <p className="flex gap-4 text-[#555]">
                <MapPin className="size-6 text-[#145cff]" />
                United Kingdom
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.62fr]">
            <form className="grid gap-5 border border-black/10 bg-white p-6 sm:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <input className="h-14 border border-black/10 bg-[#fbfaf8] px-4 text-sm outline-none focus:border-[#145cff]" placeholder="First Name" aria-label="First Name" />
                <input className="h-14 border border-black/10 bg-[#fbfaf8] px-4 text-sm outline-none focus:border-[#145cff]" placeholder="Last Name" aria-label="Last Name" />
              </div>
              <input className="h-14 border border-black/10 bg-[#fbfaf8] px-4 text-sm outline-none focus:border-[#145cff]" placeholder="Work Email" aria-label="Work Email" />
              <div className="grid gap-5 md:grid-cols-2">
                <input className="h-14 border border-black/10 bg-[#fbfaf8] px-4 text-sm outline-none focus:border-[#145cff]" placeholder="Company" aria-label="Company" />
                <select className="h-14 border border-black/10 bg-[#fbfaf8] px-4 text-sm text-[#666] outline-none focus:border-[#145cff]" aria-label="Interest" defaultValue="">
                  <option value="" disabled>What are you interested in?</option>
                  <option>Strategy sprint</option>
                  <option>Campaign launch</option>
                  <option>Website conversion</option>
                  <option>Search and content</option>
                </select>
              </div>
              <textarea className="min-h-44 border border-black/10 bg-[#fbfaf8] p-4 text-sm outline-none focus:border-[#145cff]" placeholder="Tell us about your project" aria-label="Project details" />
              <Button type="button" className="h-14 justify-self-start rounded-xl bg-[#145cff] px-8 font-black text-white hover:bg-[#080808]">
                <Send className="size-4" />
                Send Message
              </Button>
            </form>

            <aside className="relative min-h-[28rem] overflow-hidden bg-[#080808] p-8 text-white">
              <Image src="/heron-logo-mark.png" alt="" width={180} height={180} className="absolute right-6 top-6 size-24 rounded-full opacity-12" />
              <div className="relative z-10 mt-32">
                <p className="text-3xl font-light leading-tight">
                  We&apos;re here to help you grow smarter.
                </p>
                <p className="mt-8 text-2xl font-serif italic text-[#7ce8d9]">
                  Strategy first.
                  <br />
                  Systems always.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
