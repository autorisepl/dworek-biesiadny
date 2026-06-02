"use client";

import { MotionDiv } from "@/components/motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function FacebookFeedSection() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: header + CTA */}
          <div className="lg:sticky lg:top-28">
            <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">
              Social media
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-primary-dark mb-6">
              Śledź nas na Facebooku
            </h2>
            <div className="w-16 h-0.5 bg-accent mb-8" />
            <p className="font-body text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              Aktualności, wolne terminy, zdjęcia zza kulis i informacje o wydarzeniach.
              Obserwuj profil Dworku Biesiadnego i bądź na bieżąco.
            </p>
            <a
              href="https://www.facebook.com/DworekBiesiadny"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#166fe5] text-white font-body font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
              )}
            >
              <FacebookIcon />
              Przejdź do profilu
            </a>
          </div>

          {/* Right: Facebook Page Plugin embed */}
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white border border-cream">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDworekBiesiadny&tabs=timeline&width=500&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true"
              width="100%"
              height="600"
              style={{ border: "none", overflow: "hidden", display: "block" }}
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Facebook — Dworek Biesiadny"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
