"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FadeIn } from "@/components/motion/FadeIn";
import { Sparkles, ArrowRight } from "lucide-react";

export default function HeroSection({ locale }: { locale: string }) {
  const isEn = locale === "en";

  const content = {
    label: isEn ? "PREMIUM CUSTOM FURNITURE" : "PREMIUM ЗАХИАЛГАТ ТАВИЛГА",
    title: isEn ? "Designed for Your Space" : "Таны орон зайд зориулсан",
    subtitle: isEn
      ? "Mongolian craftsmanship meets Scandinavian minimalism. Design, visualize, and order custom furniture tailored to your space."
      : "Монголын гар урлал ба Скандинавийн минимализмыг хослуулсан захиалгат тавилга. Дизайнаа хийж, хараад, захиалаарай.",
    ctaPrimary: isEn ? "AI Customizer" : "AI Захиалга",
    ctaSecondary: isEn ? "Book Consultation" : "Зөвлөгөө авах",
  };

  function lp(path: string) {
    if (path === "/") return `/${locale}`;
    return `/${locale}${path}`;
  }

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero-living-room.jpg)" }}
      >
        <div className="absolute inset-0 bg-[#0D0D0D]/70" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-12 py-32">
        <div className="max-w-2xl">
          <FadeIn delay={0}>
            <span className="inline-block text-[11px] font-semibold tracking-[3px] text-[#C9A96E] mb-6">
              {content.label}
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-[56px] font-light leading-[1.1] text-[#FAFAFA] mb-6">
              {content.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg leading-relaxed text-[#B5B0AB] mb-10 max-w-lg">
              {content.subtitle}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex items-center gap-4">
              <Link
                href={lp("/ai-customizer")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A96E] text-[#0D0D0D] text-sm font-semibold rounded-sm hover:bg-[#B8985D] transition-colors"
              >
                <Sparkles size={16} />
                {content.ctaPrimary}
              </Link>
              <Link
                href={lp("/contact")}
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#FAFAFA]/20 text-[#FAFAFA] text-sm font-medium rounded-sm hover:border-[#FAFAFA]/40 transition-colors"
              >
                {content.ctaSecondary}
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
