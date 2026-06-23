"use client";

import { FadeIn } from "@/components/motion/FadeIn";

const testimonials = [
  {
    quote: {
      mn: "Taij-Khurai манай зочны өрөөг бүрэн өөрчилсөн. Дизайн, чанар, үйлчилгээ — бүгд төгс.",
      en: "Taij-Khurai completely transformed our living room. The design, quality, and service were all exceptional.",
    },
    author: "Batbayar G.",
    role: { mn: "Орон сууцны эзэн", en: "Homeowner" },
  },
  {
    quote: {
      mn: "Захиалгат тавилга маань оффисын орчинд төс тохирсон. Ажилчид маань гайхаж байна.",
      en: "The custom furniture fits our office perfectly. Our employees are amazed by the quality.",
    },
    author: "Sarnai D.",
    role: { mn: "CEO, TechStart", en: "CEO, TechStart" },
  },
  {
    quote: {
      mn: "Хуучин тавилгаа шинэчлэхэд маш их тус болсон. Монголын гар урлал гайхалтай.",
      en: "They helped us refresh our old furniture. Mongolian craftsmanship is incredible.",
    },
    author: "Enkhbold T.",
    role: { mn: "Дизайнер", en: "Designer" },
  },
];

export default function TestimonialsSection({ locale }: { locale: string }) {
  const isEn = locale === "en";

  return (
    <section className="py-24 bg-[#E8D8C4]">
      <div className="max-w-[1440px] mx-auto px-12">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block text-[11px] font-semibold tracking-[3px] text-[#B08968] mb-3">
              {isEn ? "TESTIMONIALS" : "СЭТГЭГДЭЛ"}
            </span>
            <h2 className="text-[36px] font-light text-[#2B2B2B]">
              {isEn ? "What Clients Say" : "Үйлчлүүлэгчдийн үг"}
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="p-8 rounded-sm bg-[#F5EFE6] border border-[#D4C8B8] shadow-sm">
                <p className="text-base leading-relaxed text-[#5A5A5A] mb-6">
                  "{t.quote[locale as keyof typeof t.quote]}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#B08968]/20 flex items-center justify-center text-[#B08968] text-sm font-semibold">
                    {t.author[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#2B2B2B]">{t.author}</p>
                    <p className="text-xs text-[#5A5A5A]">{t.role[locale as keyof typeof t.role]}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
