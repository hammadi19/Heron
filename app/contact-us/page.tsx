import Image from "next/image";

import { Footer, PageHero } from "@/components/site/shared";
import { MailIcon, PhoneIcon, PinIcon, SendIcon } from "@/components/site/service-icons";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="bg-[#fbfaf8] text-[#080808]">
      <PageHero
        eyebrow="Contact"
        title="Tell us where growth feels stuck."
        copy="Share the offer, the market, and the challenge. Heron will help you identify the clearest sprint to run first."
      />

      <section className="px-4 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-[92rem] gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <h2 className="text-4xl font-light leading-[1.05] tracking-normal">
              Let&apos;s build something great together.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#666]">
              The first conversation is designed to be useful: what is working,
              where demand is leaking, and what a focused Heron sprint could
              improve fastest.
            </p>
            <div className="mt-6 grid gap-5">
              <p className="contact-icon-row flex items-center gap-4 text-[#555] transition hover:text-[#080808]">
                <PhoneIcon className="contact-icon-pop size-10 shrink-0" />
                <span className="break-all">+44 0000 000000</span>
              </p>
              <p className="contact-icon-row flex items-center gap-4 text-[#555] transition hover:text-[#080808]">
                <MailIcon className="contact-icon-pop size-10 shrink-0" />
                <span className="break-all">hello@heron-marketing.com</span>
              </p>
              <p className="contact-icon-row flex items-center gap-4 text-[#555] transition hover:text-[#080808]">
                <PinIcon className="contact-icon-pop size-10 shrink-0" />
                <span>United Kingdom</span>
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.62fr]">
            <form className="grid gap-4 border border-black/10 bg-white p-4 sm:p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <input className="h-12 border border-black/10 bg-[#fbfaf8] px-4 text-sm outline-none focus:border-[#145cff]" placeholder="First Name" aria-label="First Name" />
                <input className="h-12 border border-black/10 bg-[#fbfaf8] px-4 text-sm outline-none focus:border-[#145cff]" placeholder="Last Name" aria-label="Last Name" />
              </div>
              <input className="h-12 border border-black/10 bg-[#fbfaf8] px-4 text-sm outline-none focus:border-[#145cff]" placeholder="Work Email" aria-label="Work Email" />
              <div className="grid gap-4 md:grid-cols-2">
                <input className="h-12 border border-black/10 bg-[#fbfaf8] px-4 text-sm outline-none focus:border-[#145cff]" placeholder="Company" aria-label="Company" />
                <select className="h-12 border border-black/10 bg-[#fbfaf8] px-4 text-sm text-[#666] outline-none focus:border-[#145cff]" aria-label="Interest" defaultValue="">
                  <option value="" disabled>What are you interested in?</option>
                  <option>Strategy sprint</option>
                  <option>Campaign launch</option>
                  <option>Website conversion</option>
                  <option>Search and content</option>
                </select>
              </div>
              <textarea className="min-h-36 border border-black/10 bg-[#fbfaf8] p-4 text-sm outline-none focus:border-[#145cff]" placeholder="Tell us about your project" aria-label="Project details" />
              <Button type="button" className="h-12 w-full justify-self-start rounded-xl bg-[#145cff] px-7 font-black text-white hover:bg-[#080808] sm:w-auto">
                <SendIcon className="size-7" />
                Send Message
              </Button>
            </form>

            <aside className="relative min-h-[18rem] overflow-hidden bg-[#080808] p-6 text-white sm:min-h-[21rem] sm:p-7">
              <Image src="/heron-logo-mark.png" alt="" width={180} height={180} className="absolute right-6 top-6 size-24 rounded-full opacity-12" />
              <div className="relative z-10 mt-28">
                <p className="text-2xl font-light leading-tight">
                  We&apos;re here to help you grow smarter.
                </p>
                <p className="mt-6 text-2xl font-serif italic text-[#7ce8d9]">
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
