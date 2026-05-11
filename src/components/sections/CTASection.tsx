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
    <section className="py-24 bg-[#111111]">
      <div className="max-w-[1440px] mx-auto px-12">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[36px] font-light text-[#FAFAFA] mb-4">
              {isEn
                ? "Ready to Create Your Perfect Furniture?"
                : "Төгс тавилга бүтээхэд бэлэн үү?"}
            </h2>
            <p className="text-base leading-relaxed text-[#B5B0AB] mb-10">
              {isEn
                ? "Connect with our AI assistant today and get a free design tailored to your space."
                : "Өнөөдөр манай AI туслахтай холбогдоод, таны орон зайд зориулсан дизайныг үнэ төлбөргүй аваарай."}
            </p>
            <Link
              href={lp("/ai-customizer")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A96E] text-[#0D0D0D] text-sm font-semibold rounded-sm hover:bg-[#B8985D] transition-colors"
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
