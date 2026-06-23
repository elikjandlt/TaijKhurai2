"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FadeIn } from "@/components/motion/FadeIn";

const projects = [
  { slug: "ulaanbaatar-penthouse", id: "01", title: { mn: "Улаанбаатар пентхаус", en: "Ulaanbaatar Penthouse" }, category: { mn: "Зочны өрөө", en: "Living Room" }, img: "/images/portfolio/apartment.jpg" },
  { slug: "gobi-villa", id: "02", title: { mn: "Говийн вилла", en: "Gobi Villa" }, category: { mn: "Унтлагын өрөө", en: "Bedroom" }, img: "/images/portfolio/hotel.jpg" },
  { slug: "tech-office", id: "03", title: { mn: "Технологийн оффис", en: "Tech Office" }, category: { mn: "Оффис", en: "Office" }, img: "/images/portfolio/office.jpg" },
  { slug: "dining-refresh", id: "04", title: { mn: "Хоолны өрөөний шинэчлэл", en: "Dining Room Refresh" }, category: { mn: "Хоолны өрөө", en: "Dining" }, img: "/images/collections/dining.jpg" },
  { slug: "kids-room", id: "05", title: { mn: "Хүүхдийн өрөө", en: "Kids Room" }, category: { mn: "Хүүхдийн өрөө", en: "Kids" }, img: "/images/collections/bedroom.jpg" },
  { slug: "hotel-lobby", id: "06", title: { mn: "Зочид буудлын лобби", en: "Hotel Lobby" }, category: { mn: "Лобби", en: "Lobby" }, img: "/images/collections/living.jpg" },
];

export default function PortfolioPage({ locale }: { locale: string }) {
  const isEn = locale === "en";
  const pathname = usePathname();

  function localePath(path: string) {
    if (path === "/") return `/${locale}`;
    return `/${locale}${path}`;
  }

  return (
    <>
      <section className="relative min-h-[360px] md:min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/portfolio/office.jpg"
            alt={isEn ? "Portfolio hero" : "Төслүүд"}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0D0D0D]/55" />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center pt-20">
          <FadeIn>
            <span className="inline-block text-[12px] font-semibold tracking-[3px] text-[#B08968] mb-4 uppercase">
              {isEn ? "PORTFOLIO" : "ТӨСЛҮҮД"}
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-[32px] md:text-[40px] font-light text-[#FAFAFA] leading-[1.15] mb-4">
              {isEn ? "Our Work" : "Манай ажлууд"}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base text-[#D4CFC9] max-w-xl mx-auto">
              {isEn
                ? "Selected projects that showcase the range and quality of our custom furniture."
                : "Захиалгат тавилгын хүрээ ба чанарыг харуулсан сонгосон төслүүд."}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#E8D8C4]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj, i) => (
              <FadeIn key={proj.id} delay={i * 0.08}>
                <Link
                  href={localePath(`/portfolio/${proj.slug}`)}
                  className="group block bg-[#F5EFE6] rounded-sm overflow-hidden border border-[#D4C8B8] hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={proj.img}
                      alt={proj.title[locale as keyof typeof proj.title]}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] font-semibold tracking-[2px] text-[#B08968] uppercase">
                      {proj.category[locale as keyof typeof proj.category]}
                    </span>
                    <h3 className="text-base font-medium text-[#2B2B2B] mt-1">
                      {proj.title[locale as keyof typeof proj.title]}
                    </h3>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
