"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FadeIn } from "@/components/motion/FadeIn";

const posts = [
  { id: 1, title: { mn: "Төгс буйдан сонгох гарын авлага", en: "The Perfect Sofa Guide" }, meta: { mn: "2026 оны чиг хандлага", en: "2026 Trends" }, img: "/images/blog/sofa.jpg" },
  { id: 2, title: { mn: "Дулаан модернизм 2026", en: "Warm Modernism 2026" }, meta: { mn: "Шинэ чиг хандлага", en: "New Trends" }, img: "/images/blog/trends.jpg" },
  { id: 3, title: { mn: "Жижиг орон зайг ашиглах нь", en: "Optimizing Small Spaces" }, meta: { mn: "Зөвлөмжүүд", en: "Tips" }, img: "/images/blog/spaces.jpg" },
];

export default function BlogSection({ locale }: { locale: string }) {
  const isEn = locale === "en";

  function lp(path: string) {
    if (path === "/") return `/${locale}`;
    return `/${locale}${path}`;
  }

  return (
    <section className="py-24 bg-[#F5EFE6]">
      <div className="max-w-[1440px] mx-auto px-12">
        <FadeIn>
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="inline-block text-[11px] font-semibold tracking-[3px] text-[#B08968] mb-3">
                {isEn ? "BLOG" : "БЛОГ"}
              </span>
              <h2 className="text-[36px] font-light text-[#2B2B2B]">
                {isEn ? "Featured Articles" : "Онцлох нийтлэл"}
              </h2>
            </div>
            <Link
              href={lp("/blog")}
              className="hidden sm:inline-flex items-center gap-2 text-sm text-[#B08968] hover:text-[#9A7658] transition-colors"
            >
              {isEn ? "View All →" : "Бүгдийг үзэх →"}
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <FadeIn key={post.id} delay={i * 0.15}>
              <Link href={lp("/blog")} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-4">
                  <img
                    src={post.img}
                    alt={post.title[locale as keyof typeof post.title]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-xs text-[#B08968]">
                  {post.meta[locale as keyof typeof post.meta]}
                </span>
                <h3 className="text-lg font-medium text-[#2B2B2B] mt-1 group-hover:text-[#B08968] transition-colors">
                  {post.title[locale as keyof typeof post.title]}
                </h3>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
