"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";

export default function AboutPage({ locale }: { locale: string }) {
  const isEn = locale === "en";

  function lp(path: string) {
    if (path === "/") return `/${locale}`;
    return `/${locale}${path}`;
  }

  const content = {
    label: isEn ? "ABOUT US" : "БИДНИЙ ТУХАЙ",
    title: isEn ? "Crafting Spaces with Soul" : "Таны гэрт оюун ухаалаг тавилга",
    description: isEn
      ? "Taij-Khurai is a premium custom furniture brand that blends Mongolian craftsmanship with Scandinavian minimalism. Every piece is designed to tell a story — your story."
      : "Taij-Khurai нь Монголын гар урлал ба Скандинавийн минимализмыг хослуулсан захиалгат тавилгын брэнд юм. Бүтээгдэхүүн бүр таны түүхийг өгүүлэхээр зохиогдсон.",
    vision: {
      title: isEn ? "Our Vision" : "Алсын хараа",
      desc: isEn
        ? "To become the most respected Mongolian furniture brand globally, where every home tells a story of heritage, craftsmanship, and modern living."
        : "Монголын гар урлал, өв соёл болон орчин үеийн амьдралыг хослуулсан тавилгын хамгийн хүндэтгэлтэй брэнд болох."
    },
    mission: {
      title: isEn ? "Our Mission" : "Уриа зорилго",
      desc: isEn
        ? "We craft soulful spaces by blending Mongolian heritage with Scandinavian minimalism — creating furniture that is timeless, functional, and deeply personal."
        : "Бид Монголын өв соёл ба Скандинавийн минимализмыг хослуулан, цаг хугацааг үл ялгах, функционал, хувь хүнд зориулсан тавилга бүтээж, сүнстэй орон зайг бий болгоно."
    },
    values: [
      {
        title: isEn ? "Authentic Craftsmanship" : "Жинхэнэ гар урлал",
        desc: isEn
          ? "Every piece is handcrafted by skilled Mongolian artisans using traditional techniques passed down through generations."
          : "Бүтээгдэхүүн бүр Монголын гар урчдын уламжлалт аргаар гардан хийгддэг.",
      },
      {
        title: isEn ? "Scandinavian Minimalism" : "Скандинавийн минимализм",
        desc: isEn
          ? "Clean lines, functional beauty, and timeless design principles that complement any modern interior."
          : "Цэвэр шугам, функционал гоо үзэсгэлэн, орчин үеийн дотоод засалд тохирох цаг хугацааг үл ялгах дизайн.",
      },
      {
        title: isEn ? "AI-Powered Design" : "AI-ээр хөтлөгдсөн дизайн",
        desc: isEn
          ? "Our AI customizer helps you visualize and design furniture tailored to your exact space and preferences."
          : "Манай AI туслах таны орон зайд зориулсан тавилгын дизайныг харахад тусална.",
      },
    ],
    team: [
      { name: "Boldbaatar E.", role: isEn ? "Founder & Lead Designer" : "Үүсгэн байгуулагч & Глав дизайнер", img: "/images/team/ceo.jpg" },
      { name: "Sarnai D.", role: isEn ? "Head of Craftsmanship" : "Гар урлалын дарга", img: "/images/team/craftsman.jpg" },
      { name: "Enkhbold T.", role: isEn ? "AI & Technology Lead" : "AI & Технологийн дарга", img: "/images/team/designer.jpg" },
    ],
  };

  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-[1440px] mx-auto px-12">
          <FadeIn>
            <span className="inline-block text-[11px] font-semibold tracking-[3px] text-[#C9A96E] mb-3">
              {content.label}
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-[48px] font-light text-[#FAFAFA] mb-6">
              {content.title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg leading-relaxed text-[#B5B0AB] max-w-2xl">
              {content.description}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="p-8 rounded-sm bg-white/[0.03] border border-white/5">
                <span className="inline-block text-[11px] font-semibold tracking-[3px] text-[#C9A96E] mb-3">
                  {isEn ? "VISION" : "АЛСЫН ХАРАА"}
                </span>
                <h3 className="text-2xl font-medium text-[#FAFAFA] mb-4">{content.vision.title}</h3>
                <p className="text-sm leading-relaxed text-[#B5B0AB]">{content.vision.desc}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="p-8 rounded-sm bg-white/[0.03] border border-white/5">
                <span className="inline-block text-[11px] font-semibold tracking-[3px] text-[#C9A96E] mb-3">
                  {isEn ? "MISSION" : "УРИА ЗОРИЛГО"}
                </span>
                <h3 className="text-2xl font-medium text-[#FAFAFA] mb-4">{content.mission.title}</h3>
                <p className="text-sm leading-relaxed text-[#B5B0AB]">{content.mission.desc}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-12">
          <FadeIn>
            <h2 className="text-[36px] font-light text-[#FAFAFA] mb-12">
              {isEn ? "Our Values" : "Манай үнэт зүйлс"}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.values.map((v, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="p-8 rounded-sm bg-white/[0.03] border border-white/5">
                  <h3 className="text-xl font-medium text-[#FAFAFA] mb-3">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-[#B5B0AB]">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-12">
          <FadeIn>
            <h2 className="text-[36px] font-light text-[#FAFAFA] mb-12">
              {isEn ? "Our Team" : "Манай баг"}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.team.map((member, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="text-center">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-4">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-[#FAFAFA]">{member.name}</h3>
                  <p className="text-sm text-[#9A9590]">{member.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
