"use client";

import { useState, useEffect } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { ChevronDown, Truck, Shield, Sparkles, HelpCircle } from "lucide-react";

const tabs = [
  { id: "faq", label: { mn: "Түгээмэл асуулт", en: "FAQ" }, icon: HelpCircle },
  { id: "delivery", label: { mn: "Хүргэлт", en: "Delivery" }, icon: Truck },
  { id: "care", label: { mn: "Тавилга арчилгаа", en: "Product Care" }, icon: Sparkles },
  { id: "warranty", label: { mn: "Баталгаа", en: "Warranty" }, icon: Shield },
];

const content: Record<string, Record<string, { title: string; items: { q: string; a: string }[] }>> = {
  faq: {
    mn: {
      title: "Түгээмэл асуулт хариулт",
      items: [
        { q: "Захиалгат тавилга хийлгэхэд хэр хугацаа шаардагддаг вэ?", a: "Хэвийн нөхцөлд 2-4 долоо хоног шаардагддаг. Овор хэмжээ, нарийн төвөгтэй байдлаас хамаарч хугацаа өөрчлөгдөх боломжтой." },
        { q: "AI туслах ашиглахад үнэ төлбөргүй юу?", a: "Тийм ээ, AI туслах ашиглан тавилгын дизайнаа үзэхэд ямар нэгэн төлбөргүй." },
        { q: "Бүтээгдэхүүнийг буцаах боломжтой юу?", a: "Захиалгат бүтээгдэхүүн буцаах боломжгүй. Бэлэн бүтээгдэхүүн хүлээн авснаас хойш 7 хоногийн дотор буцаах боломжтой." },
        { q: "Төлбөрийн ямар хэлбэрүүд хүлээн авдаг вэ?", a: "Бид банкны шилжүүлэг, QPay, SocialPay болон бэлэн мөнгөөр төлбөр хүлээн авдаг." },
        { q: "Улаанбаатар хотын гадна хүргэлт хийдэг үү?", a: "Тийм ээ, Улаанбаатар хотын гадна хүргэлт хийдэг. Гэхдээ нэмэлт төлбөр шаардагдана." },
      ],
    },
    en: {
      title: "Frequently Asked Questions",
      items: [
        { q: "How long does custom furniture take?", a: "Typically 2-4 weeks. Timeline may vary depending on size and complexity." },
        { q: "Is the AI customizer free to use?", a: "Yes, using our AI assistant to design your furniture is completely free." },
        { q: "Can I return my order?", a: "Custom orders cannot be returned. Ready-made products can be returned within 7 days of delivery." },
        { q: "What payment methods do you accept?", a: "We accept bank transfer, QPay, SocialPay, and cash." },
        { q: "Do you deliver outside Ulaanbaatar?", a: "Yes, we deliver nationwide. Additional shipping fees may apply." },
      ],
    },
  },
  delivery: {
    mn: {
      title: "Хүргэлтийн мэдээлэл",
      items: [
        { q: "Хүргэлтийн хугацаа", a: "Улаанбаатар хотод 1-3 хоног. Хөдөө орон нутаг руу 3-7 хоног." },
        { q: "Хүргэлтийн төлбөр", a: "Улаанбаатар хотод 500,000₮-с дээш захиалга үнэгүй хүргэлт. Доош захиалгад 15,000₮." },
        { q: "Хүргэлтийн цаг", a: "Ажлын өдөр 10:00-18:00 цагийн хооронд хүргэлт хийдэг." },
        { q: "Тавилга угсралт", a: "Том оврын тавилгыг манай мэргэжилтнүүд угсарч өгнө. Энэ үйлчилгээ үнэгүй." },
        { q: "Захиалга хянах", a: "Захиалга баталгаажсаны дараа танд мессеж илгээх бөгөөд тэрээр захиалгаа хянах боломжтой." },
      ],
    },
    en: {
      title: "Delivery Information",
      items: [
        { q: "Delivery Time", a: "Ulaanbaatar: 1-3 days. Countryside: 3-7 days." },
        { q: "Delivery Cost", a: "Free delivery in Ulaanbaatar for orders over 500,000₮. Standard fee: 15,000₮." },
        { q: "Delivery Hours", a: "We deliver Monday to Friday, 10:00 AM - 6:00 PM." },
        { q: "Assembly", a: "Our team provides free assembly service for large furniture items." },
        { q: "Track Your Order", a: "Once confirmed, you will receive a message to track your order status." },
      ],
    },
  },
  care: {
    mn: {
      title: "Тавилга арчилгааны зөвлөмж",
      items: [
        { q: "Модон тавилга арчилгаа", a: "Хуурай даавуугаар арчиж, ширмэл ус, химийн бодисоос хол байлгана. Сар бүр тослоорой." },
        { q: "Арьсан тавилга арчилгаа", a: "Арьсан тавилгыг нарны шууд гэрлээс хамгаал. 3 сар тутам арьс арчилгааны тос түрхэнэ." },
        { q: "Даавуун бүтээгдэхүүн", a: "Бага хэмд угааж, хими цэвэрлэгээ хийлгэх нь зүйтэй. Наранд хатаахаас зайлсхий." },
        { q: "Металл хэсэг", a: "Чийгтэй орчинд байлгахаас зайлсхий. Зэврэлээс хамгаалахын тулд хуурай арчиж цэвэрлэ." },
        { q: "Ерөнхий зөвлөмж", a: "Тавилгыг хэт халуун, чийгтэй газраас хол байлга. Тогтмол цэвэрлэж, шалгалт хийлгэ." },
      ],
    },
    en: {
      title: "Product Care Tips",
      items: [
        { q: "Wood Furniture Care", a: "Wipe with dry cloth, avoid water and chemicals. Apply wood oil monthly." },
        { q: "Leather Furniture Care", a: "Keep away from direct sunlight. Apply leather conditioner every 3 months." },
        { q: "Fabric Products", a: "Wash at low temperature or dry clean. Avoid drying in direct sunlight." },
        { q: "Metal Parts", a: "Avoid humid environments. Wipe dry to prevent rust." },
        { q: "General Tips", a: "Keep away from heat and moisture. Clean regularly and inspect periodically." },
      ],
    },
  },
  warranty: {
    mn: {
      title: "Баталгаат үйлчилгээ",
      items: [
        { q: "Баталгааны хугацаа", a: "Бүх тавилгад 2 жилийн баталгаа олгоно. Баталгаат хугацаанд үйлдвэрийн дутагдал гарвал үнэгүй засварлана." },
        { q: "Баталгаанд хамрагдахгүй тохиолдол", a: "Хууль бусаар хийсэн засвар, байгалийн гамшиг, зориуд гэмтээсэн тохиолдолд хамрагдахгүй." },
        { q: "Засвар үйлчилгээ", a: "Баталгааны хугацаа дууссан ч манай мэргэжилтнүүдээр засвар хийлгэх боломжтой. Үнийн саналаар." },
        { q: "Баталгаа бүрдүүлэх", a: "Баталгаа бүрдүүлэхийн тулд худалдан авалтын баримт (invoice) хадгалах шаардлагатай." },
        { q: "Холбоо барих", a: "Баталгаатай холбоотой асуулт байвал бидэнтэй 7700-1234 дугаараар холбоо барина уу." },
      ],
    },
    en: {
      title: "Warranty Information",
      items: [
        { q: "Warranty Period", a: "All furniture comes with a 2-year warranty. Manufacturing defects are repaired free of charge." },
        { q: "What's Not Covered", a: "Unauthorized repairs, natural disasters, and intentional damage are not covered." },
        { q: "Repair Service", a: "Even after warranty expires, our team can repair your furniture. Quote provided." },
        { q: "Claiming Warranty", a: "Keep your purchase invoice (receipt) to claim warranty service." },
        { q: "Contact Us", a: "For warranty questions, call us at 7700-1234." },
      ],
    },
  },
};

export default function HelpPage({ locale }: { locale: string }) {
  const isEn = locale === "en";
  const [activeTab, setActiveTab] = useState("faq");
  const [openItem, setOpenItem] = useState<number | null>(0);

  // Read tab from URL hash
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash && tabs.find((t) => t.id === hash)) {
        setActiveTab(hash);
      }
    }
  }, []);

  const currentContent = content[activeTab][locale] || content[activeTab].mn;
  const ActiveIcon = tabs.find((t) => t.id === activeTab)?.icon || HelpCircle;

  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-[1440px] mx-auto px-12">
          <FadeIn>
            <span className="inline-block text-[11px] font-semibold tracking-[3px] text-[#B08968] mb-3">
              {isEn ? "HELP & SUPPORT" : "ТУСЛАМЖ"}
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-[48px] font-light text-[#2B2B2B] mb-6">
              {isEn ? "How Can We Help?" : "Бид таньд хэрхэн туслах вэ?"}
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="py-8 bg-[#E8D8C4] border-y border-[#D4C8B8]">
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="flex items-center gap-3 flex-wrap">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setOpenItem(0); }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-[#B08968] text-[#F5EFE6]"
                      : "bg-[#D4C8B8] text-[#5A5A5A] hover:bg-[#C8B8A8]"
                  }`}
                >
                  <Icon size={16} />
                  {tab.label[locale as keyof typeof tab.label]}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[900px] mx-auto px-12">
          <FadeIn>
            <div className="flex items-center gap-3 mb-10">
              <ActiveIcon size={24} className="text-[#B08968]" />
              <h2 className="text-2xl font-light text-[#2B2B2B]">{currentContent.title}</h2>
            </div>
          </FadeIn>

          <div className="space-y-3">
            {currentContent.items.map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="rounded-sm bg-[#F5EFE6] border border-[#D4C8B8] shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpenItem(openItem === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-[#F0E4D6] transition-colors"
                  >
                    <span className="text-sm font-medium text-[#2B2B2B]">{item.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-[#5A5A5A] transition-transform ${openItem === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openItem === i && (
                    <div className="px-5 pb-5">
                      <p className="text-sm leading-relaxed text-[#5A5A5A]">{item.a}</p>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
