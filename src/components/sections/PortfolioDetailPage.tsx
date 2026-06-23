"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FadeIn } from "@/components/motion/FadeIn";
import { ArrowLeft, Ruler, Palette, Clock, MapPin } from "lucide-react";

interface Project {
  slug: string;
  id: string;
  title: Record<string, string>;
  category: Record<string, string>;
  img: string;
}

const detailContent: Record<
  string,
  {
    description: Record<string, string>;
    scope: Record<string, string>;
    materials: Record<string, string>;
    duration: Record<string, string>;
    location: Record<string, string>;
    gallery: string[];
  }
> = {
  "ulaanbaatar-penthouse": {
    description: {
      mn: "Улаанбаатарын төвд байрлах пентхаусын бүрэн тавилгын шийдэл. Монголын гар урлалын элементүүдийг орчин үеийн минимал дизайнд хослуулсан. Зочны өрөөнд захиалгат буйдан, кофены ширээ, хадгалах тавилга багтсан.",
      en: "A complete furniture solution for a penthouse in central Ulaanbaatar. Mongolian craft elements blend with modern minimal design. The living room features a custom sofa, coffee table, and storage furniture.",
    },
    scope: { mn: "Зочны өрөөний тавилга", en: "Living room furniture" },
    materials: { mn: "Самар мод, арьс, даавуу", en: "Walnut, leather, fabric" },
    duration: { mn: "8 долоо хоног", en: "8 weeks" },
    location: { mn: "Улаанбаатар", en: "Ulaanbaatar" },
    gallery: ["/images/portfolio/apartment.jpg", "/images/collections/living.jpg", "/images/collections/dining.jpg"],
  },
  "gobi-villa": {
    description: {
      mn: "Говийн бүс нутагт байрлах виллагийн унтлагын өрөөний тавилга. Дулаан, тав тухтай орчинг бий болгохын тулд байгалийн модон материал болон зөөлөн даавууг ашигласан.",
      en: "Bedroom furniture for a villa in the Gobi region. Natural wood and soft fabrics create a warm and comfortable atmosphere.",
    },
    scope: { mn: "Унтлагын өрөө", en: "Bedroom" },
    materials: { mn: "Арч мод, даавуу", en: "Oak, fabric" },
    duration: { mn: "6 долоо хоног", en: "6 weeks" },
    location: { mn: "Говь", en: "Gobi" },
    gallery: ["/images/portfolio/hotel.jpg", "/images/collections/bedroom.jpg", "/images/collections/living.jpg"],
  },
  "tech-office": {
    description: {
      mn: "Технологийн компанийн оффисын тавилгын шийдэл. Ажилчдын бүтээмжийг дэмжих эргономик сандал, ажлын ширээ, хуралын өрөөний тавилга багтсан.",
      en: "Office furniture solution for a tech company. Includes ergonomic chairs, desks, and meeting room furniture to support employee productivity.",
    },
    scope: { mn: "Оффис", en: "Office" },
    materials: { mn: "Металл, мод, арьс", en: "Metal, wood, leather" },
    duration: { mn: "10 долоо хоног", en: "10 weeks" },
    location: { mn: "Улаанбаатар", en: "Ulaanbaatar" },
    gallery: ["/images/portfolio/office.jpg", "/images/collections/office.jpg", "/images/collections/living.jpg"],
  },
  "dining-refresh": {
    description: {
      mn: "Хоолны өрөөний шинэчлэлийн төсөл. Гэр бүлийн хооллох орчинг дулаан, орчин үеийн хэв маягаар өөрчилсөн. Захиалгат хоолны ширээ, сандал, буфет багтсан.",
      en: "A dining room refresh project. Transformed the family dining area into a warm, modern space with a custom dining table, chairs, and sideboard.",
    },
    scope: { mn: "Хоолны өрөө", en: "Dining room" },
    materials: { mn: "Самар мод, даавуу", en: "Walnut, fabric" },
    duration: { mn: "5 долоо хоног", en: "5 weeks" },
    location: { mn: "Улаанбаатар", en: "Ulaanbaatar" },
    gallery: ["/images/collections/dining.jpg", "/images/collections/living.jpg", "/images/portfolio/apartment.jpg"],
  },
  "kids-room": {
    description: {
      mn: "Хүүхдийн өрөөний тавилгын шийдэл. Аюулгүй, тоглоомон, хадгалах зайтай тавилгаар хүүхдийн орчинг тав тухтай болгосон.",
      en: "Kids room furniture solution. Safe, playful, and storage-friendly furniture creates a comfortable environment for children.",
    },
    scope: { mn: "Хүүхдийн өрөө", en: "Kids room" },
    materials: { mn: "Байгалийн мод, будаг", en: "Natural wood, paint" },
    duration: { mn: "4 долоо хоног", en: "4 weeks" },
    location: { mn: "Улаанбаатар", en: "Ulaanbaatar" },
    gallery: ["/images/collections/bedroom.jpg", "/images/collections/living.jpg", "/images/portfolio/apartment.jpg"],
  },
  "hotel-lobby": {
    description: {
      mn: "Зочид буудлын лобби тавилгын шийдэл. Зочдын анхны сэтгэгдэлд нөлөөлөх тансаг, тав тухтай лобби бүтээхэд тусалсан.",
      en: "Hotel lobby furniture solution. Helped create a luxurious and comfortable lobby that shapes guests' first impressions.",
    },
    scope: { mn: "Лобби", en: "Lobby" },
    materials: { mn: "Самар мод, арьс", en: "Walnut, leather" },
    duration: { mn: "12 долоо хоног", en: "12 weeks" },
    location: { mn: "Улаанбаатар", en: "Ulaanbaatar" },
    gallery: ["/images/collections/living.jpg", "/images/portfolio/office.jpg", "/images/collections/dining.jpg"],
  },
};

export default function PortfolioDetailPage({ locale, project }: { locale: string; project: Project }) {
  const isEn = locale === "en";
  const t = detailContent[project.slug];

  function lp(path: string) {
    if (path === "/") return `/${locale}`;
    return `/${locale}${path}`;
  }

  const title = project.title[locale] || project.title.mn;
  const category = project.category[locale] || project.category.mn;
  const desc = t?.description[locale] || t?.description.mn || "";
  const scope = t?.scope[locale] || t?.scope.mn || "";
  const materials = t?.materials[locale] || t?.materials.mn || "";
  const duration = t?.duration[locale] || t?.duration.mn || "";
  const location = t?.location[locale] || t?.location.mn || "";
  const gallery = t?.gallery || [project.img];

  return (
    <>
      <section className="pt-32 pb-16 bg-[#F5EFE6]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <FadeIn>
            <Link
              href={lp("/portfolio")}
              className="inline-flex items-center gap-2 text-sm text-[#B08968] hover:text-[#9A7658] transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              {isEn ? "Back to Projects" : "Төслүүд рүү буцах"}
            </Link>
          </FadeIn>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
            <div>
              <FadeIn>
                <span className="inline-block text-[11px] font-semibold tracking-[3px] text-[#B08968] mb-3 uppercase">
                  {category}
                </span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="text-[32px] md:text-[44px] font-light text-[#2B2B2B] mb-6">
                  {title}
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-base leading-[1.8] text-[#5A5A5A] mb-8">
                  {desc}
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-[#E8D8C4] rounded-sm border border-[#D4C8B8]">
                    <div className="flex items-center gap-2 mb-2">
                      <Ruler size={18} className="text-[#B08968]" />
                      <span className="text-xs text-[#5A5A5A]">{isEn ? "Scope" : "Хүрээ"}</span>
                    </div>
                    <p className="text-sm font-medium text-[#2B2B2B]">{scope}</p>
                  </div>

                  <div className="p-4 bg-[#E8D8C4] rounded-sm border border-[#D4C8B8]">
                    <div className="flex items-center gap-2 mb-2">
                      <Palette size={18} className="text-[#B08968]" />
                      <span className="text-xs text-[#5A5A5A]">{isEn ? "Materials" : "Материал"}</span>
                    </div>
                    <p className="text-sm font-medium text-[#2B2B2B]">{materials}</p>
                  </div>

                  <div className="p-4 bg-[#E8D8C4] rounded-sm border border-[#D4C8B8]">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock size={18} className="text-[#B08968]" />
                      <span className="text-xs text-[#5A5A5A]">{isEn ? "Duration" : "Хугацаа"}</span>
                    </div>
                    <p className="text-sm font-medium text-[#2B2B2B]">{duration}</p>
                  </div>

                  <div className="p-4 bg-[#E8D8C4] rounded-sm border border-[#D4C8B8]">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin size={18} className="text-[#B08968]" />
                      <span className="text-xs text-[#5A5A5A]">{isEn ? "Location" : "Байршил"}</span>
                    </div>
                    <p className="text-sm font-medium text-[#2B2B2B]">{location}</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.15} direction="left">
              <div className="aspect-[4/3] rounded-sm overflow-hidden border border-[#D4C8B8]">
                <img
                  src={project.img}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#E8D8C4]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <FadeIn>
            <h2 className="text-[24px] font-light text-[#2B2B2B] mb-8">
              {isEn ? "Project Gallery" : "Төслийн зургууд"}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {gallery.map((img, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="aspect-[4/3] rounded-sm overflow-hidden border border-[#D4C8B8]">
                  <img
                    src={img}
                    alt={`${title} ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
