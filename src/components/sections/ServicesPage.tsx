"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { useCart } from "@/lib/cart-context";
import { ShoppingBag, Check } from "lucide-react";
import { useState } from "react";

const services = [
  { id: "custom", title: { mn: "Захиалгат тавилга", en: "Custom Furniture" }, desc: { mn: "Таны орон зайд зориулсан бүрэн захиалгат тавилга.", en: "Fully custom furniture designed for your space." }, price: "From 2,000,000₮" },
  { id: "consult", title: { mn: "Дизайны зөвлөгөө", en: "Design Consultation" }, desc: { mn: "Манай мэргэжилтнүүд таны орон зайг төлөвлөхөд тусална.", en: "Our experts help plan your space." }, price: "500,000₮" },
  { id: "3d", title: { mn: "3D визуализац", en: "3D Visualization" }, desc: { mn: "Тавилгаа захиалхаасаа өмнө 3D дүрсээр харна.", en: "See your furniture in 3D before ordering." }, price: "300,000₮" },
  { id: "install", title: { mn: "Суурилуулалт", en: "Installation" }, desc: { mn: "Манай баг таны тавилгыг суурилуулж өгнө.", en: "Our team installs your furniture." }, price: "From 200,000₮" },
  { id: "restore", title: { mn: "Засвар үйлчилгээ", en: "Restoration" }, desc: { mn: "Хуучин тавилгаа шинэчлэх үйлчилгээ.", en: "Refresh and restore your old furniture." }, price: "From 500,000₮" },
  { id: "delivery", title: { mn: "Хүргэлт", en: "Delivery" }, desc: { mn: "Монгол улсын хаана ч хүргэнэ.", en: "Delivery anywhere in Mongolia." }, price: "From 50,000₮" },
];

export default function ServicesPage({ locale }: { locale: string }) {
  const isEn = locale === "en";
  const { addItem } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAdd = (svc: typeof services[0]) => {
    const title = (svc.title as Record<string, string>)[locale] || svc.title.mn;
    addItem({
      id: `service-${svc.id}`,
      name: title,
      price: 0,
      priceDisplay: svc.price,
      image: "/images/ai-customizer.jpg",
      collection: isEn ? "Services" : "Үйлчилгээ",
    });
    setAddedId(svc.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-[1440px] mx-auto px-12">
          <FadeIn>
            <span className="inline-block text-[11px] font-semibold tracking-[3px] text-[#C9A96E] mb-3">
              {isEn ? "SERVICES" : "ҮЙЛЧИЛГЭЭ"}
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-[48px] font-light text-[#FAFAFA] mb-6">
              {isEn ? "What We Offer" : "Бид юу санал болгодог вэ?"}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg leading-relaxed text-[#B5B0AB] max-w-2xl">
              {isEn
                ? "From custom furniture design to installation, we offer a complete range of services to transform your space."
                : "Захиалгат тавилгын дизайнаас эхлээд суурилуулалт хүртэл бид таны орон зайг өөрчлөх бүрэн үйлчилгээг санал болгодог."}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-[#111111]">
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeIn key={s.id} delay={i * 0.1}>
                <div className="p-6 rounded-sm bg-white/[0.03] border border-white/5">
                  <h3 className="text-lg font-medium text-[#FAFAFA] mb-2">
                    {s.title[locale as keyof typeof s.title]}
                  </h3>
                  <p className="text-sm text-[#9A9590] mb-2">{s.desc[locale as keyof typeof s.desc]}</p>
                  <p className="text-[#C9A96E] font-semibold mb-4">{s.price}</p>
                  <button
                    onClick={() => handleAdd(s)}
                    className={`w-full py-3 text-sm font-semibold rounded-sm transition-colors flex items-center justify-center gap-2 ${
                      addedId === s.id
                        ? "bg-green-600 text-white"
                        : "bg-[#C9A96E] text-[#0D0D0D] hover:bg-[#B8985D]"
                    }`}
                  >
                    {addedId === s.id ? (
                      <> <Check size={16} /> {isEn ? "Added!" : "Нэмэгдлээ!"} </>
                    ) : (
                      <> <ShoppingBag size={16} /> {isEn ? "Add to Order" : "Захиалгад нэмэх"} </>
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
