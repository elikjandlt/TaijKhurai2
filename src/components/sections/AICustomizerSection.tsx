"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FadeIn } from "@/components/motion/FadeIn";
import { Sparkles, Ruler, Palette, Layers, Box, Eye, ShoppingBag } from "lucide-react";

const steps = [
  { icon: Ruler, label: { mn: "Хэмжээ оруулах", en: "Enter Dimensions" } },
  { icon: Palette, label: { mn: "Өнгө сонгох", en: "Choose Color" } },
  { icon: Layers, label: { mn: "Материал сонгох", en: "Choose Material" } },
  { icon: Box, label: { mn: "Хэв маяг сонгох", en: "Choose Style" } },
  { icon: Eye, label: { mn: "3D харах", en: "View in 3D" } },
  { icon: ShoppingBag, label: { mn: "Захиалах", en: "Place Order" } },
];

export default function AICustomizerSection({ locale }: { locale: string }) {
  const isEn = locale === "en";

  function lp(path: string) {
    if (path === "/") return `/${locale}`;
    return `/${locale}${path}`;
  }

  return (
    <section className="py-24 bg-[#E8D8C4]">
      <div className="max-w-[1440px] mx-auto px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <span className="inline-block text-[11px] font-semibold tracking-[3px] text-[#B08968] mb-3">
                {isEn ? "AI CUSTOMIZER" : "AI ТУСЛАХ"}
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-[36px] font-light text-[#2B2B2B] mb-6">
                {isEn ? "Design. Visualize. Love." : "Зохио. Харах. Дурлах."}
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-base leading-relaxed text-[#5A5A5A] mb-10">
                {isEn
                  ? "Our AI assistant takes your dimensions, color, and material preferences to generate furniture designs tailored to your space."
                  : "Манай AI туслах таны хэмжээ, өнгө, материалын сонголтыг авч, таны орон зайд тохирсон тавилгын дизайныг бүтээнэ."}
              </p>
            </FadeIn>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {steps.map((step, i) => (
                <FadeIn key={i} delay={0.3 + i * 0.05}>
                  <div className="flex items-center gap-3 p-3 rounded-sm bg-[#F5EFE6] border border-[#D4C8B8] shadow-sm">
                    <step.icon size={18} className="text-[#B08968] shrink-0" />
                    <span className="text-sm text-[#5A5A5A]">
                      {step.label[locale as keyof typeof step.label]}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.6}>
              <Link
                href={lp("/ai-customizer")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#B08968] text-[#F5EFE6] text-sm font-semibold rounded-sm hover:bg-[#9A7658] transition-colors"
              >
                <Sparkles size={16} />
                {isEn ? "Start AI Customizer" : "AI Захиалга Эхлүүлэх"}
              </Link>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="left">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
              <img
                src="/images/ai-customizer.jpg"
                alt="AI Customizer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0D0D0D]/30" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
