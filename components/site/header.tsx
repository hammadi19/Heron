"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import { HeronLogo } from "@/components/site/logo";
import { navLinks } from "@/components/site/navigation";

export function Header({ inverted = true }: { inverted?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] border-b px-4 transition-all duration-300 sm:px-8 ${
        scrolled ? "py-2 shadow-[0_18px_50px_rgba(16,24,40,.08)]" : "py-4 sm:py-5"
      } ${
        !scrolled
          ? "border-transparent bg-transparent"
          : "border-white/10 bg-[#050505]/88 backdrop-blur-xl"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[92rem] items-center justify-between gap-3 transition-all duration-300 sm:gap-6 ${
          scrolled ? "[&_.site-logo-lockup]:h-8 sm:[&_.site-logo-lockup]:h-10" : "[&_.site-logo-lockup]:h-10 sm:[&_.site-logo-lockup]:h-14"
        }`}
      >
        <HeronLogo inverted={inverted || scrolled} />
        <nav
          className={`hidden items-center text-[0.9rem] font-black transition-all duration-300 lg:flex ${
            scrolled ? "gap-6" : "gap-8"
          } ${inverted && !scrolled ? "text-white/82" : "text-white/82"}`}
        >
          {navLinks.map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-[#8b5cf6]">
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact-us"
          className={`group inline-flex items-center gap-3 rounded-full text-sm font-black shadow-[0_18px_45px_rgba(8,8,8,.16)] transition duration-300 hover:-translate-y-0.5 ${
            scrolled ? "h-10 px-3 text-xs sm:h-11 sm:px-6 sm:text-sm" : "h-10 px-3 text-xs sm:h-14 sm:px-7 sm:text-sm"
          } ${
            inverted && !scrolled
              ? "bg-white text-[#080808] hover:bg-[#b9f6e8]"
              : "bg-white text-[#080808] hover:bg-[#b9f6e8]"
          }`}
        >
          <span className="hidden min-[381px]:inline">Get In Touch</span>
          <span className="min-[381px]:hidden">Contact</span>
          <span
            className={`grid place-items-center rounded-full transition duration-300 group-hover:rotate-45 ${
              scrolled ? "size-5 sm:size-6" : "size-5 sm:size-7"
            } ${inverted && !scrolled ? "bg-[#080808] text-white" : "bg-[#8b5cf6] text-white"}`}
          >
            <ArrowRight className="size-4" />
          </span>
        </Link>
      </div>
    </header>
  );
}
