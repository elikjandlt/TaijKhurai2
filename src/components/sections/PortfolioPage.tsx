"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { useCart } from "@/lib/cart-context";
import { ShoppingBag, Check } from "lucide-react";
import { useState } from "react";

const projects = [
  { id: 1, title: { mn: "Улаанбаатар пентхаус", en: "Ulaanbaatar Penthouse" }, category: { mn: "Зочны өрөө", en: "Living Room" }, desc: { mn: "Бүтэн зочны өрөөний захиалгат тавилга — буйдан, ширээ, хадгалах тавилга.", en: "Full living room custom furniture — sofa, table, storage." }, img: "/images/portfolio/apartment.jpg", price: "12,500,000₮" },
  { id: 2, title: { mn: "Говийн вилла", en: "Gobi Villa" }, category: { mn: "Унтлагын өрөө", en: "Bedroom" }, desc: { mn: "Унтлагын өрөөний бүрэн шийдэл — ор, тавиур, толин тавилга.", en: "Complete bedroom solution — bed, wardrobe, vanity." }, img: "/images/portfolio/hotel.jpg", price: "8,200,000₮" },
  { id: 3, title: { mn: "Технологийн оффис", en: "Tech Office" }, category: { mn: "Оффис", en: "Office" }, desc: { mn: "Оффисын тавилгын шийдэл — ажлын ширээ, сандал, хуралын өрөө.", en: "Office furniture solution — desks, chairs, meeting room." }, img: "/images/portfolio/office.jpg", price: "15,800,000₮" },
  { id: 4, title: { mn: "Хоолны өрөөний шинэчлэл", en: "Dining Room Refresh" }, category: { mn: "Хоолны өрөө", en: "Dining" }, desc: { mn: "Хоолны ширээ, сандал, буфет — бүгд захиалгат.", en: "Dining table, chairs, sideboard — all custom." }, img: "/images/collections/dining.jpg", price: "6,400,000₮" },
  { id: 5, title: { mn: "Хүүхдийн өрөө", en: "Kids Room" }, category: { mn: "Унтлагын өрөө", en: "Bedroom" }, desc: { mn: "Хүүхдийн өрөөний тавилга — ор, ширээ, хадгалах.", en: "Kids room furniture — bed, desk, storage." }, img: "/images/collections/bedroom.jpg", price: "4,500,000₮" },
  { id: 6, title: { mn: "Зочид буудлын лобби", en: "Hotel Lobby" }, category: { mn: "Зочны өрөө", en: "Living Room" }, desc: { mn: "Зочид буудлын лобби тавилга — буйдан, ширээ, тавилга.", en: "Hotel lobby furniture — sofas, tables, decor." }, img: "/images/collections/living.jpg", price: "22,000,000₮" },
];

export default function PortfolioPage({ locale }: { locale: string }) {
  const isEn = locale === "en";
  const { addItem } = useCart();
  const [addedId, setAddedId] = useState<number | null>(null);

  const handleAdd = (proj: typeof projects[0]) => {
    const title = (proj.title as Record<string, string>)[locale] || proj.title.mn;
    const category = (proj.category as Record<string, string>)[locale] || proj.category.mn;
    addItem({
      id: `portfolio-${proj.id}`,
      name: title,
      price: parseInt(proj.price.replace(/[^0-9]/g, "")),
      priceDisplay: proj.price,
      image: proj.img,
      collection: category,
    });
    setAddedId(proj.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-[1440px] mx-auto px-12">
          <FadeIn>
            <span className="inline-block text-[11px] font-semibold tracking-[3px] text-[#C9A96E] mb-3">
              {isEn ? "PORTFOLIO" : "ТӨСЛҮҮД"}
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-[48px] font-light text-[#FAFAFA] mb-6">
              {isEn ? "Our Work" : "Манай ажлууд"}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg leading-relaxed text-[#B5B0AB] max-w-2xl">
              {isEn
                ? "Browse through our portfolio of completed projects, showcasing the range and quality of our custom furniture."
                : "Манай дууссан төслүүдийг үзээрэй. Захиалгат тавилгын хүрээ ба чанарыг харуулна."}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-[#111111]">
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, i) => (
              <FadeIn key={proj.id} delay={i * 0.1}>
                <div className="group p-4 rounded-sm bg-white/[0.03] border border-white/5">
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
                  <p className="text-sm text-[#9A9590] mt-2 mb-2">
                    {proj.desc[locale as keyof typeof proj.desc]}
                  </p>
                  <p className="text-[#C9A96E] font-semibold mb-4">{proj.price}</p>
                  <button
                    onClick={() => handleAdd(proj)}
                    className={`w-full py-3 text-sm font-semibold rounded-sm transition-colors flex items-center justify-center gap-2 ${
                      addedId === proj.id
                        ? "bg-green-600 text-white"
                        : "bg-[#C9A96E] text-[#0D0D0D] hover:bg-[#B8985D]"
                    }`}
                  >
                    {addedId === proj.id ? (
                      <> <Check size={16} /> {isEn ? "Added!" : "Нэмэгдлээ!"} </>
                    ) : (
                      <> <ShoppingBag size={16} /> {isEn ? "Add to Cart" : "Сагсанд нэмэх"} </>
                    )}
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
