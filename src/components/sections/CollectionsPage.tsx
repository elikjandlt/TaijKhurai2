"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { Check, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/cart-context";

const categories = [
  {
    id: "living",
    name: { mn: "Зочны өрөө", en: "Living Room" },
    desc: { mn: "Тав тухтай буйдан, ширээ, хадгалах тавилга", en: "Comfortable sofas, tables, storage" },
    img: "/images/collections/living.jpg",
    items: [
      { id: "sofa-1", name: { mn: "Минимал буйдан", en: "Minimal Sofa" }, price: 2800000, priceDisplay: "2,800,000₮", img: "/images/collections/living.jpg", tag: { mn: "Хит", en: "Best Seller" } },
      { id: "table-1", name: { mn: "Модон ширээ", en: "Wooden Coffee Table" }, price: 1200000, priceDisplay: "1,200,000₮", img: "/images/collections/living.jpg", tag: { mn: "Шинэ", en: "New" } },
      { id: "shelf-1", name: { mn: "Хадгалах тавиур", en: "Storage Shelf" }, price: 1500000, priceDisplay: "1,500,000₮", img: "/images/collections/living.jpg", tag: null },
      { id: "tv-1", name: { mn: "TV тавиур", en: "TV Stand" }, price: 980000, priceDisplay: "980,000₮", img: "/images/collections/living.jpg", tag: null },
    ],
  },
  {
    id: "bedroom",
    name: { mn: "Унтлагын өрөө", en: "Bedroom" },
    desc: { mn: "Ор, тавиур, толин тавилга", en: "Beds, wardrobes, vanity furniture" },
    img: "/images/collections/bedroom.jpg",
    items: [
      { id: "bed-1", name: { mn: "Хаалгатай ор", en: "Platform Bed" }, price: 3500000, priceDisplay: "3,500,000₮", img: "/images/collections/bedroom.jpg", tag: { mn: "Хит", en: "Best Seller" } },
      { id: "wardrobe-1", name: { mn: "Хувцасны тавиур", en: "Wardrobe" }, price: 2200000, priceDisplay: "2,200,000₮", img: "/images/collections/bedroom.jpg", tag: null },
      { id: "vanity-1", name: { mn: "Ширээ сандал", en: "Vanity Set" }, price: 1800000, priceDisplay: "1,800,000₮", img: "/images/collections/bedroom.jpg", tag: { mn: "Хямдрал", en: "Sale" } },
      { id: "night-1", name: { mn: "Шөнийн ширээ", en: "Nightstand" }, price: 650000, priceDisplay: "650,000₮", img: "/images/collections/bedroom.jpg", tag: null },
    ],
  },
  {
    id: "dining",
    name: { mn: "Хоолны өрөө", en: "Dining" },
    desc: { mn: "Хоолны ширээ, сандал, буфет", en: "Dining tables, chairs, sideboards" },
    img: "/images/collections/dining.jpg",
    items: [
      { id: "dtable-1", name: { mn: "6 хүний ширээ", en: "6-Seater Table" }, price: 4200000, priceDisplay: "4,200,000₮", img: "/images/collections/dining.jpg", tag: { mn: "Хит", en: "Best Seller" } },
      { id: "dchair-1", name: { mn: "Арьсан сандал", en: "Leather Chair" }, price: 850000, priceDisplay: "850,000₮", img: "/images/collections/dining.jpg", tag: null },
      { id: "side-1", name: { mn: "Буфет", en: "Sideboard" }, price: 2100000, priceDisplay: "2,100,000₮", img: "/images/collections/dining.jpg", tag: null },
      { id: "bar-1", name: { mn: "Барын ширээ", en: "Bar Table" }, price: 1600000, priceDisplay: "1,600,000₮", img: "/images/collections/dining.jpg", tag: { mn: "Шинэ", en: "New" } },
    ],
  },
  {
    id: "office",
    name: { mn: "Оффис", en: "Office" },
    desc: { mn: "Ажлын ширээ, сандал, хадгалах тавилга", en: "Desks, chairs, storage solutions" },
    img: "/images/collections/office.jpg",
    items: [
      { id: "desk-1", name: { mn: "Ажлын ширээ", en: "Executive Desk" }, price: 3800000, priceDisplay: "3,800,000₮", img: "/images/collections/office.jpg", tag: { mn: "Хит", en: "Best Seller" } },
      { id: "ochair-1", name: { mn: "Эргономик сандал", en: "Ergonomic Chair" }, price: 2500000, priceDisplay: "2,500,000₮", img: "/images/collections/office.jpg", tag: null },
      { id: "file-1", name: { mn: "Файлын шүүгээ", en: "Filing Cabinet" }, price: 1400000, priceDisplay: "1,400,000₮", img: "/images/collections/office.jpg", tag: null },
      { id: "meet-1", name: { mn: "Хуралын ширээ", en: "Meeting Table" }, price: 5500000, priceDisplay: "5,500,000₮", img: "/images/collections/office.jpg", tag: { mn: "Премьер", en: "Premium" } },
    ],
  },
];

function localePath(path: string, locale: string): string {
  if (path === "/") return `/${locale}`;
  return `/${locale}${path}`;
}

export default function CollectionsPage({ locale }: { locale: string }) {
  const isEn = locale === "en";
  const { addItem } = useCart();
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleAdd = (item: { id: string; name: Record<string, string>; price: number; priceDisplay: string; img: string }, categoryName: Record<string, string>) => {
    addItem({
      id: item.id,
      name: item.name[locale] || item.name.mn,
      price: item.price,
      priceDisplay: item.priceDisplay,
      image: item.img,
      collection: categoryName[locale] || categoryName.mn,
    });
    setAddedIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => setAddedIds((prev) => ({ ...prev, [item.id]: false })), 1500);
  };

  const displayedCategories = activeCategory
    ? categories.filter((c) => c.id === activeCategory)
    : categories;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-[1440px] mx-auto px-12">
          <FadeIn>
            <span className="inline-block text-[11px] font-semibold tracking-[3px] text-[#C9A96E] mb-3">
              {isEn ? "PRODUCTS" : "БҮТЭЭГДЭХҮҮНҮҮД"}
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-[48px] font-light text-[#FAFAFA] mb-6">
              {isEn ? "Our Products" : "Манай бүтээгдэхүүнүүд"}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg leading-relaxed text-[#B5B0AB] max-w-2xl">
              {isEn
                ? "Handcrafted furniture collections designed for modern Mongolian homes."
                : "Орчин үеийн Монгол гэр бүлд зориулсан гардан хийсэн тавилгын цуглуулга."}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-[#111111] border-y border-white/5">
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-5 py-2.5 rounded-sm text-sm font-medium transition-colors ${
                activeCategory === null
                  ? "bg-[#C9A96E] text-[#0D0D0D]"
                  : "bg-white/[0.05] text-[#B5B0AB] hover:bg-white/10"
              }`}
            >
              {isEn ? "All Collections" : "Бүх цуглуулга"}
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-sm text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? "bg-[#C9A96E] text-[#0D0D0D]"
                    : "bg-white/[0.05] text-[#B5B0AB] hover:bg-white/10"
                }`}
              >
                {cat.name[locale as keyof typeof cat.name]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      {displayedCategories.map((cat) => (
        <section key={cat.id} className="py-20 bg-[#0D0D0D]">
          <div className="max-w-[1440px] mx-auto px-12">
            {/* Category Header */}
            <FadeIn>
              <div className="flex items-end justify-between mb-10">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-sm overflow-hidden">
                    <img src={cat.img} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h2 className="text-[28px] font-light text-[#FAFAFA]">
                      {cat.name[locale as keyof typeof cat.name]}
                    </h2>
                    <p className="text-sm text-[#9A9590] mt-1">
                      {cat.desc[locale as keyof typeof cat.desc]}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-[#9A9590]">
                  {cat.items.length} {isEn ? "items" : "бараа"}
                </span>
              </div>
            </FadeIn>

            {/* Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cat.items.map((item, i) => (
                <FadeIn key={item.id} delay={i * 0.05}>
                  <div className="group">
                    <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-4 bg-[#111111]">
                      <img
                        src={item.img}
                        alt={item.name[locale as keyof typeof item.name]}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {item.tag && (
                        <span className="absolute top-3 left-3 px-3 py-1 bg-[#C9A96E] text-[#0D0D0D] text-xs font-semibold rounded-sm">
                          {item.tag[locale as keyof typeof item.tag]}
                        </span>
                      )}
                    </div>
                    <h4 className="text-base font-medium text-[#FAFAFA] mb-1">
                      {item.name[locale as keyof typeof item.name]}
                    </h4>
                    <p className="text-[#C9A96E] font-semibold text-sm mb-3">{item.priceDisplay}</p>
                    <button
                      onClick={() => handleAdd(item, cat.name)}
                      disabled={addedIds[item.id]}
                      className={`w-full py-2.5 text-sm font-semibold rounded-sm transition-colors flex items-center justify-center gap-2 ${
                        addedIds[item.id]
                          ? "bg-green-600 text-white"
                          : "bg-[#C9A96E] text-[#0D0D0D] hover:bg-[#B8985D]"
                      }`}
                    >
                      {addedIds[item.id] ? (
                        <><Check size={15} /> {isEn ? "Added!" : "Нэмэгдлээ!"}</>
                      ) : (
                        <><ShoppingBag size={15} /> {isEn ? "Add to Cart" : "Сагсанд нэмэх"}</>
                      )}
                    </button>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Services Intro */}
      <section className="py-20 bg-[#111111] border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-12">
          <FadeIn>
            <div className="max-w-3xl">
              <span className="inline-block text-[11px] font-semibold tracking-[3px] text-[#C9A96E] mb-4">
                {isEn ? "SERVICES" : "ҮЙЛЧИЛГЭЭ"}
              </span>
              <h2 className="text-[32px] font-light text-[#FAFAFA] mb-6">
                {isEn ? "Custom Furniture Crafted for You" : "Танд зориулсан захиалгат тавилга"}
              </h2>
              <p className="text-base leading-relaxed text-[#B5B0AB] mb-8">
                {isEn
                  ? "Beyond our ready-made collections, we offer fully custom furniture services. From initial concept and 3D visualization to final handcrafted delivery — every piece is made to fit your space, style, and story."
                  : "Бидний бэлэн цуглуулгаас гадна бүрэн захиалгат тавилгын үйлчилгээ үзүүлдэг. Эхлэлийн концепц, 3D дүрслэлээс эхлээд гардан хийсэн эцсийн бүтээгдэхүүн хүртэл — бүх зүйл таны орон зай, хэв маяг, түүхэд тохируулан хийгддэг."}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-5 rounded-sm bg-white/[0.03] border border-white/5">
                  <h4 className="text-sm font-semibold text-[#FAFAFA] mb-2">{isEn ? "AI Design" : "AI Дизайн"}</h4>
                  <p className="text-xs text-[#9A9590] leading-relaxed">{isEn ? "Visualize your furniture before it's built with our AI customizer." : "Тавилгаа хийлгэхээсээ өмнө AI туслахаар хараарай."}</p>
                </div>
                <div className="p-5 rounded-sm bg-white/[0.03] border border-white/5">
                  <h4 className="text-sm font-semibold text-[#FAFAFA] mb-2">{isEn ? "Custom Dimensions" : "Хүссэн хэмжээ"}</h4>
                  <p className="text-xs text-[#9A9590] leading-relaxed">{isEn ? "Any size, any shape — made to fit your exact space." : "Хүссэн хэмжээ, хэлбэрээр — таны орон зайд яг тааруулан."}</p>
                </div>
                <div className="p-5 rounded-sm bg-white/[0.03] border border-white/5">
                  <h4 className="text-sm font-semibold text-[#FAFAFA] mb-2">{isEn ? "Handcrafted" : "Гардан хийсэн"}</h4>
                  <p className="text-xs text-[#9A9590] leading-relaxed">{isEn ? "Traditional Mongolian craftsmanship meets modern design." : "Монголын уламжлалт гар урлал, орчин үеийн дизайнтай хосолсон."}</p>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href={localePath("/ai-customizer", locale)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A96E] text-[#0D0D0D] text-sm font-semibold rounded-sm hover:bg-[#B8985D] transition-colors"
                >
                  {isEn ? "Start AI Customizer" : "AI Захиалга эхлүүлэх"} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
