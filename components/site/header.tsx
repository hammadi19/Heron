"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import { HeronLogo } from "@/components/site/logo";
import { navLinks } from "@/components/site/navigation";

export function Header({ inverted = false }: { inverted?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b px-5 transition-all duration-300 sm:px-8 ${
        scrolled ? "py-2 shadow-[0_18px_50px_rgba(16,24,40,.08)]" : "py-5"
      } ${
        inverted && !scrolled
          ? "border-white/14 bg-transparent"
          : "border-black/8 bg-white/92 backdrop-blur-xl"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[92rem] items-center justify-between gap-6 transition-all duration-300 ${
          scrolled ? "[&_img]:h-10" : "[&_img]:h-14"
        }`}
      >
        <HeronLogo inverted={inverted && !scrolled} />
        <nav
          className={`hidden items-center text-[0.9rem] font-black transition-all duration-300 lg:flex ${
            scrolled ? "gap-6" : "gap-8"
          } ${inverted && !scrolled ? "text-white/82" : "text-[#111]"}`}
        >
          {navLinks.map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-[#145cff]">
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact-us"
          className={`group inline-flex items-center gap-3 rounded-full text-sm font-black shadow-[0_18px_45px_rgba(8,8,8,.16)] transition duration-300 hover:-translate-y-0.5 ${
            scrolled ? "h-11 px-4 sm:px-6" : "h-12 px-5 sm:h-14 sm:px-7"
          } ${
            inverted && !scrolled
              ? "bg-white text-[#080808] hover:bg-[#b9f6e8]"
              : "bg-[#080808] text-white hover:bg-[#145cff]"
          }`}
        >
          <span>Get In Touch</span>
          <span
            className={`grid place-items-center rounded-full transition duration-300 group-hover:rotate-45 ${
              scrolled ? "size-6" : "size-7"
            } ${inverted && !scrolled ? "bg-[#080808] text-white" : "bg-white text-[#080808]"}`}
          >
            <ArrowRight className="size-4" />
          </span>
        </Link>
      </div>
    </header>
  );
}
