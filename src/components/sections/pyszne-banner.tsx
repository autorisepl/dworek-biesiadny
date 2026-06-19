"use client";

import { MotionDiv } from "@/components/motion";
import { ExternalLink, ShoppingBag } from "lucide-react";

export function PyszneBanner() {
  return (
    <section className="py-10 px-4 md:px-8 bg-cream border-y border-accent/10">
      <div className="max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl shadow-sm border border-cream px-8 py-6 md:py-5">
            <div className="flex items-center gap-4 shrink-0">
              <div className="w-16 h-16 rounded-xl bg-[#F3672A] flex items-center justify-center shadow-sm">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="font-body text-xs text-gray-400 uppercase tracking-widest mb-0.5">Zamów online</p>
                <p className="font-heading text-2xl font-bold text-[#F3672A] leading-none">pyszne.pl</p>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-cream" />

            <div className="flex-1 text-center md:text-left">
              <h3 className="font-heading text-lg md:text-xl text-primary-dark font-bold mb-1">
                Nasze dania dostępne na pyszne.pl
              </h3>
              <p className="font-body text-sm text-gray-500 leading-relaxed">
                Nie możesz do nas dotrzeć? Zamów dania z naszej restauracji przez pyszne.pl —
                dowozimy do okolic Mosiny i Poznania.
              </p>
            </div>

            <a
              href="https://www.pyszne.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F3672A] hover:bg-[#e05a20] text-white font-body font-semibold text-sm px-6 py-3 rounded-xl transition-colors duration-200 whitespace-nowrap shrink-0"
            >
              Zamów teraz
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
