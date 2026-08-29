"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  AtSign,
  Globe2,
  Menu,
  Send,
  Share2,
  X,
} from "lucide-react";

export function SiteDrawer({ inverted = false }: { inverted?: boolean }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = open ? "hidden" : "";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const drawer = open ? (
    <div className="fixed inset-0 z-[9999]">
      <button
        type="button"
        aria-label="Close contact drawer"
        className="absolute inset-0 bg-black/78"
        onClick={() => setOpen(false)}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Heron contact drawer"
        className="absolute right-0 top-0 h-dvh w-full overflow-y-auto bg-white px-6 py-8 shadow-[-18px_0_70px_rgba(0,0,0,.16)] sm:w-[calc(100%-9.75rem)] sm:px-16 sm:py-12 lg:px-20"
      >
        <div className="mx-auto max-w-5xl">
          <button
            type="button"
            aria-label="Close drawer"
            className="ml-auto grid size-12 place-items-center text-[#666] transition hover:text-[#0074e8]"
            onClick={() => setOpen(false)}
          >
            <X className="size-11 stroke-[1.4]" />
          </button>

          <section className="mt-10">
            <h2 className="text-4xl font-extrabold tracking-normal text-[#22242a] sm:text-5xl">
              About Us
            </h2>
            <p className="mt-8 max-w-4xl text-xl leading-[1.75] text-[#666] sm:text-2xl">
              We believe brand interaction is key in communication. Heron
              brings together real strategy, useful innovation, and a positive
              customer experience so your marketing feels clear, measured, and
              built around the people you serve.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-4xl font-extrabold tracking-normal text-[#22242a] sm:text-5xl">
              Contact
            </h2>
            <form className="mt-10 grid gap-6">
              <div className="grid gap-6 md:grid-cols-2">
                <input
                  className="h-16 rounded-lg border border-[#ececec] px-6 text-lg text-[#22242a] outline-none transition placeholder:text-[#666] focus:border-[#0074e8] sm:h-20 sm:px-8 sm:text-xl"
                  placeholder="Your Name"
                  aria-label="Your Name"
                />
                <input
                  className="h-16 rounded-lg border border-[#ececec] px-6 text-lg text-[#22242a] outline-none transition placeholder:text-[#666] focus:border-[#0074e8] sm:h-20 sm:px-8 sm:text-xl"
                  placeholder="Your Email"
                  aria-label="Your Email"
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <input
                  className="h-16 rounded-lg border border-[#ececec] px-6 text-lg text-[#22242a] outline-none transition placeholder:text-[#666] focus:border-[#0074e8] sm:h-20 sm:px-8 sm:text-xl"
                  placeholder="Your Phone"
                  aria-label="Your Phone"
                />
                <input
                  className="h-16 rounded-lg border border-[#ececec] px-6 text-lg text-[#22242a] outline-none transition placeholder:text-[#666] focus:border-[#0074e8] sm:h-20 sm:px-8 sm:text-xl"
                  placeholder="Your Subject"
                  aria-label="Your Subject"
                />
              </div>
              <textarea
                className="min-h-56 rounded-lg border border-[#ececec] p-6 text-lg text-[#22242a] outline-none transition placeholder:text-[#666] focus:border-[#0074e8] sm:min-h-64 sm:p-8 sm:text-xl"
                placeholder="Your Message"
                aria-label="Your Message"
              />
              <button
                type="button"
                className="h-16 w-full rounded-md bg-[#0074e8] px-10 text-lg font-extrabold text-white transition hover:bg-[#005fc0] sm:h-20 sm:w-[22rem] sm:text-xl"
              >
                Send Message
              </button>
            </form>
          </section>

          <section className="mt-16 text-center">
            <a
              href="tel:+440000000000"
              className="text-3xl font-extrabold text-[#0074e8] transition hover:text-[#005fc0] sm:text-4xl"
            >
              +44 0000 000000
            </a>
            <p className="mt-8 text-2xl font-extrabold text-[#666]">or</p>
            <a
              href="mailto:hello@heron-marketing.com"
              className="mt-6 block break-words text-3xl font-extrabold text-[#22242a] transition hover:text-[#0074e8] sm:text-4xl"
            >
              hello@heron-marketing.com
            </a>
            <div className="mt-10 flex justify-center gap-4">
              {[Globe2, AtSign, Send, Share2].map((Icon, index) => (
                <a
                  key={index}
                  href="/contact-us"
                  aria-label={`Social link ${index + 1}`}
                  className="grid size-14 place-items-center rounded-full border border-[#d9d9d9] text-[#9c9c9c] transition hover:border-[#0074e8] hover:bg-[#0074e8] hover:text-white sm:size-16"
                >
                  <Icon className="size-6 sm:size-7" />
                </a>
              ))}
            </div>
          </section>
        </div>
      </aside>
    </div>
  ) : null;

  return (
    <>
      <button
        type="button"
        aria-label="Open contact drawer"
        className={`grid size-14 place-items-center rounded-full transition hover:text-[#145cff] ${
          inverted ? "bg-white/12 text-white" : "bg-[#f0f0f0] text-[#111]"
        }`}
        onClick={() => setOpen(true)}
      >
        <Menu className="size-7" />
      </button>
      {open ? createPortal(drawer, document.body) : null}
    </>
  );
}
