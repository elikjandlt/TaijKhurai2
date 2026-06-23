"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { Sparkles } from "lucide-react";

export default function CTASection({ locale }: { locale: string }) {
  const isEn = locale === "en";

  function lp(path: string) {
    if (path === "/") return `/${locale}`;
    return `/${locale}${path}`;
  }

  return (
    <section className="py-24 bg-[#E8D8C4]">
      <div className="max-w-[1440px] mx-auto px-12">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[36px] font-light text-[#2B2B2B] mb-4">
              {isEn
                ? "Ready to Create Your Perfect Furniture?"
                : "Төгс тавилга бүтээхэд бэлэн үү?"}
            </h2>
            <p className="text-base leading-relaxed text-[#5A5A5A] mb-10">
              {isEn
                ? "Connect with our AI assistant today and get a free design tailored to your space."
                : "Өнөөдөр манай AI туслахтай холбогдоод, таны орон зайд зориулсан дизайныг үнэ төлбөргүй аваарай."}
            </p>
            <Link
              href={lp("/ai-customizer")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#B08968] text-[#F5EFE6] text-sm font-semibold rounded-sm hover:bg-[#9A7658] transition-colors"
            >
              <Sparkles size={16} />
              {isEn ? "Start AI Customizer" : "AI Захиалга Эхлүүлэх"}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
