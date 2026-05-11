"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FadeIn } from "@/components/motion/FadeIn";
import { ArrowRight } from "lucide-react";

export default function AboutSection({ locale }: { locale: string }) {
  const isEn = locale === "en";

  function lp(path: string) {
    if (path === "/") return `/${locale}`;
    return `/${locale}${path}`;
  }

  const content = {
    label: isEn ? "ABOUT US" : "БИДНИЙ ТУХАЙ",
    title: isEn ? "Crafting Spaces with Soul" : "Таны гэрт оюун ухаалаг тавилга",
    description: isEn
      ? "Taij-Khurai blends Mongolian craftsmanship with Scandinavian minimalism. Every piece tells your story."
      : "Taij-Khurai нь Монголын гар урлал ба Скандинавийн минимализмыг хослуулдаг. Бүтээгдэхүүн бүр таны түүхийг өгүүлдэг.",
    values: [
      {
        title: isEn ? "Authentic Craftsmanship" : "Жинхэнэ гар урлал",
        desc: isEn
          ? "Handcrafted by skilled Mongolian artisans using traditional techniques."
          : "Монголын гар урчдын уламжлалт аргаар гардан хийгддэг.",
      },
      {
        title: isEn ? "Scandinavian Design" : "Скандинав дизайн",
        desc: isEn
          ? "Clean lines and timeless beauty for any modern interior."
          : "Цэвэр шугам, цаг хугацааг үл ялгах гоо үзэсгэлэн.",
      },
      {
        title: isEn ? "AI-Powered Customization" : "AI тохируулга",
        desc: isEn
          ? "Design furniture tailored to your exact space with our AI tool."
          : "AI хэрэгслээр таны орон зайд зориулсан тавилга зохио.",
      },
    ],
  };

  return (
    <section className="py-24 bg-[#0D0D0D]">
      <div className="max-w-[1440px] mx-auto px-12">
        <FadeIn>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-[11px] font-semibold tracking-[3px] text-[#C9A96E] mb-3">
                {content.label}
              </span>
              <h2 className="text-[36px] font-light text-[#FAFAFA] mb-6">
                {content.title}
              </h2>
              <p className="text-lg leading-relaxed text-[#B5B0AB] mb-8">
                {content.description}
              </p>
              <Link
                href={lp("/about")}
                className="inline-flex items-center gap-2 text-sm text-[#C9A96E] hover:text-[#B8985D] transition-colors"
              >
                {isEn ? "Learn More →" : "Дэлгэрэнгүй →"}
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {content.values.map((v, i) => (
                <FadeIn key={i} delay={i * 0.15}>
                  <div className="p-6 rounded-sm bg-white/[0.03] border border-white/5">
                    <h3 className="text-lg font-medium text-[#FAFAFA] mb-2">{v.title}</h3>
                    <p className="text-sm text-[#B5B0AB]">{v.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
