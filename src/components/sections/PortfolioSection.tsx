"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FadeIn } from "@/components/motion/FadeIn";

const projects = [
  { id: 1, title: { mn: "Улаанбаатар пентхаус", en: "Ulaanbaatar Penthouse" }, category: { mn: "Зочны өрөө", en: "Living Room" }, img: "/images/portfolio/apartment.jpg" },
  { id: 2, title: { mn: "Говийн вилла", en: "Gobi Villa" }, category: { mn: "Унтлагын өрөө", en: "Bedroom" }, img: "/images/portfolio/hotel.jpg" },
  { id: 3, title: { mn: "Технологийн оффис", en: "Tech Office" }, category: { mn: "Оффис", en: "Office" }, img: "/images/portfolio/office.jpg" },
];

export default function PortfolioSection({ locale }: { locale: string }) {
  const isEn = locale === "en";

  function lp(path: string) {
    if (path === "/") return `/${locale}`;
    return `/${locale}${path}`;
  }

  return (
    <section className="py-24 bg-[#0D0D0D]">
      <div className="max-w-[1440px] mx-auto px-12">
        <FadeIn>
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="inline-block text-[11px] font-semibold tracking-[3px] text-[#C9A96E] mb-3">
                {isEn ? "PORTFOLIO" : "ТӨСЛҮҮД"}
              </span>
              <h2 className="text-[36px] font-light text-[#FAFAFA]">
                {isEn ? "Recent Work" : "Сүүлийн ажлууд"}
              </h2>
            </div>
            <Link
              href={lp("/portfolio")}
              className="hidden sm:inline-flex items-center gap-2 text-sm text-[#C9A96E] hover:text-[#B8985D] transition-colors"
            >
              {isEn ? "View All →" : "Бүгдийг үзэх →"}
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <FadeIn key={proj.id} delay={i * 0.15}>
              <Link href={lp("/portfolio")} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-4">
                  <img
                    src={proj.img}
                    alt={proj.title[locale as keyof typeof proj.title]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0D0D0D]/30 group-hover:bg-[#0D0D0D]/10 transition-colors" />
                </div>
                <span className="text-xs text-[#C9A96E]">
                  {proj.category[locale as keyof typeof proj.category]}
                </span>
                <h3 className="text-lg font-medium text-[#FAFAFA] mt-1">
                  {proj.title[locale as keyof typeof proj.title]}
                </h3>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
