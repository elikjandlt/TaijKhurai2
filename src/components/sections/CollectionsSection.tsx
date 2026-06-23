"use client";

import { useState } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { X, Check, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";

const collections = [
  {
    id: "living",
    name: { mn: "Зочны өрөө", en: "Living Room" },
    desc: { mn: "Тав тухтай буйдан, ширээ, хадгалах тавилга", en: "Comfortable sofas, tables, storage furniture" },
    img: "/images/collections/living.jpg",
    items: [
      { id: "sofa-1", name: { mn: "Минимал буйдан", en: "Minimal Sofa" }, price: 2800000, priceDisplay: "2,800,000₮", img: "/images/collections/living.jpg" },
      { id: "table-1", name: { mn: "Модон ширээ", en: "Wooden Coffee Table" }, price: 1200000, priceDisplay: "1,200,000₮", img: "/images/collections/living.jpg" },
      { id: "shelf-1", name: { mn: "Хадгалах тавиур", en: "Storage Shelf" }, price: 1500000, priceDisplay: "1,500,000₮", img: "/images/collections/living.jpg" },
      { id: "tv-1", name: { mn: "TV тавиур", en: "TV Stand" }, price: 980000, priceDisplay: "980,000₮", img: "/images/collections/living.jpg" },
    ],
  },
  {
    id: "bedroom",
    name: { mn: "Унтлагын өрөө", en: "Bedroom" },
    desc: { mn: "Ор, тавиур, толин тавилга", en: "Beds, wardrobes, vanity furniture" },
    img: "/images/collections/bedroom.jpg",
    items: [
      { id: "bed-1", name: { mn: "Хаалгатай ор", en: "Platform Bed" }, price: 3500000, priceDisplay: "3,500,000₮", img: "/images/collections/bedroom.jpg" },
      { id: "wardrobe-1", name: { mn: "Хувцасны тавиур", en: "Wardrobe" }, price: 2200000, priceDisplay: "2,200,000₮", img: "/images/collections/bedroom.jpg" },
      { id: "vanity-1", name: { mn: "Ширээ сандал", en: "Vanity Set" }, price: 1800000, priceDisplay: "1,800,000₮", img: "/images/collections/bedroom.jpg" },
      { id: "night-1", name: { mn: "Шөнийн ширээ", en: "Nightstand" }, price: 650000, priceDisplay: "650,000₮", img: "/images/collections/bedroom.jpg" },
    ],
  },
  {
    id: "dining",
    name: { mn: "Хоолны өрөө", en: "Dining" },
    desc: { mn: "Хоолны ширээ, сандал, буфет", en: "Dining tables, chairs, sideboards" },
    img: "/images/collections/dining.jpg",
    items: [
      { id: "dtable-1", name: { mn: "6 хүний ширээ", en: "6-Seater Table" }, price: 4200000, priceDisplay: "4,200,000₮", img: "/images/collections/dining.jpg" },
      { id: "dchair-1", name: { mn: "Арьсан сандал", en: "Leather Chair" }, price: 850000, priceDisplay: "850,000₮", img: "/images/collections/dining.jpg" },
      { id: "side-1", name: { mn: "Буфет", en: "Sideboard" }, price: 2100000, priceDisplay: "2,100,000₮", img: "/images/collections/dining.jpg" },
      { id: "bar-1", name: { mn: "Барын ширээ", en: "Bar Table" }, price: 1600000, priceDisplay: "1,600,000₮", img: "/images/collections/dining.jpg" },
    ],
  },
  {
    id: "office",
    name: { mn: "Оффис", en: "Office" },
    desc: { mn: "Ажлын ширээ, сандал, хадгалах тавилга", en: "Desks, chairs, storage solutions" },
    img: "/images/collections/office.jpg",
    items: [
      { id: "desk-1", name: { mn: "Ажлын ширээ", en: "Executive Desk" }, price: 3800000, priceDisplay: "3,800,000₮", img: "/images/collections/office.jpg" },
      { id: "ochair-1", name: { mn: "Эргономик сандал", en: "Ergonomic Chair" }, price: 2500000, priceDisplay: "2,500,000₮", img: "/images/collections/office.jpg" },
      { id: "file-1", name: { mn: "Файлын шүүгээ", en: "Filing Cabinet" }, price: 1400000, priceDisplay: "1,400,000₮", img: "/images/collections/office.jpg" },
      { id: "meet-1", name: { mn: "Хуралын ширээ", en: "Meeting Table" }, price: 5500000, priceDisplay: "5,500,000₮", img: "/images/collections/office.jpg" },
    ],
  },
];

export default function CollectionsSection({ locale }: { locale: string }) {
  const isEn = locale === "en";
  const { addItem } = useCart();
  const [activeCollection, setActiveCollection] = useState<string | null>(null);
  const [addedId, setAddedId] = useState<string | null>(null);

  const activeCol = collections.find((c) => c.id === activeCollection);

  const handleAdd = (col: typeof collections[0], item: typeof col.items[0]) => {
    const itemName = (item.name as Record<string, string>)[locale] || item.name.mn;
    const colName = (col.name as Record<string, string>)[locale] || col.name.mn;
    addItem({
      id: item.id,
      name: itemName,
      price: item.price,
      priceDisplay: item.priceDisplay,
      image: item.img,
      collection: colName,
    });
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section className="py-24 bg-[#F5EFE6]">
      <div className="max-w-[1440px] mx-auto px-12">
        <FadeIn>
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="inline-block text-[11px] font-semibold tracking-[3px] text-[#B08968] mb-3">
                {isEn ? "COLLECTIONS" : "ЦУГЛУУЛГА"}
              </span>
              <h2 className="text-[36px] font-light text-[#2B2B2B]">
                {isEn ? "Curated for Every Space" : "Орон зайн чиг хандлага"}
              </h2>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((col, i) => (
            <FadeIn key={col.id} delay={i * 0.1}>
              <button
                onClick={() => setActiveCollection(col.id)}
                className="group block w-full text-left"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <img
                    src={col.img}
                    alt={col.name[locale as keyof typeof col.name]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0D0D0D]/40 group-hover:bg-[#F5EFE6]/20 transition-colors" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-lg font-medium text-[#2B2B2B]">
                      {col.name[locale as keyof typeof col.name]}
                    </h3>
                    <span className="text-sm text-[#B08968] mt-1 inline-block">
                      {isEn ? "View items →" : "Бараа үзэх →"}
                    </span>
                  </div>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeCollection && activeCol && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-[#0D0D0D]/90 backdrop-blur-sm"
            onClick={() => setActiveCollection(null)}
          />
          <div className="relative bg-[#E8D8C4] rounded-sm max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#D4C8B8]">
            <div className="sticky top-0 bg-[#E8D8C4] border-b border-[#D4C8B8] p-6 flex items-center justify-between z-10">
              <div>
                <h3 className="text-2xl font-medium text-[#2B2B2B]">
                  {activeCol.name[locale as keyof typeof activeCol.name]}
                </h3>
                <p className="text-sm text-[#5A5A5A] mt-1">
                  {activeCol.desc[locale as keyof typeof activeCol.desc]}
                </p>
              </div>
              <button
                onClick={() => setActiveCollection(null)}
                className="w-10 h-10 rounded-sm bg-[#D4C8B8] flex items-center justify-center text-[#5A5A5A] hover:text-[#2B2B2B] hover:bg-[#C8B8A8] transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {activeCol.items.map((item) => (
                <div key={item.id} className="p-4 rounded-sm bg-[#F5EFE6] border border-[#D4C8B8] shadow-sm group">
                  <div className="aspect-[4/3] rounded-sm overflow-hidden mb-4">
                    <img
                      src={item.img}
                      alt={item.name[locale as keyof typeof item.name]}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="text-lg font-medium text-[#2B2B2B] mb-1">
                    {item.name[locale as keyof typeof item.name]}
                  </h4>
                  <p className="text-[#B08968] font-semibold mb-4">{item.priceDisplay}</p>
                  <button
                    onClick={() => handleAdd(activeCol, item)}
                    className={`w-full py-3 text-sm font-semibold rounded-sm transition-colors flex items-center justify-center gap-2 ${
                      addedId === item.id
                        ? "bg-green-600 text-white"
                        : "bg-[#B08968] text-[#F5EFE6] hover:bg-[#9A7658]"
                    }`}
                  >
                    {addedId === item.id ? (
                      <>
                        <Check size={16} />
                        {isEn ? "Added!" : "Нэмэгдлээ!"}
                      </>
                    ) : (
                      <>
                        <ShoppingBag size={16} />
                        {isEn ? "Add to Cart" : "Сагсанд нэмэх"}
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
