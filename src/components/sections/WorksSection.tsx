"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { ArrowRight, Sparkles, Ruler, Palette, Box, Eye, Truck } from "lucide-react";

const collections = [
  {
    id: "living",
    name: { mn: "Зочны өрөө", en: "Living Room" },
    desc: { mn: "Тав тухтай буйдан, ширээ, хадгалах тавилга", en: "Comfortable sofas, tables, storage furniture" },
    img: "/images/collections/living.jpg",
  },
  {
    id: "bedroom",
    name: { mn: "Унтлагын өрөө", en: "Bedroom" },
    desc: { mn: "Ор, тавиур, толин тавилга", en: "Beds, wardrobes, vanity furniture" },
    img: "/images/collections/bedroom.jpg",
  },
  {
    id: "dining",
    name: { mn: "Хоолны өрөө", en: "Dining" },
    desc: { mn: "Хоолны ширээ, сандал, буфет", en: "Dining tables, chairs, sideboards" },
    img: "/images/collections/dining.jpg",
  },
  {
    id: "office",
    name: { mn: "Оффис", en: "Office" },
    desc: { mn: "Ажлын ширээ, сандал, хадгалах тавилга", en: "Desks, chairs, storage solutions" },
    img: "/images/collections/office.jpg",
  },
];

const services = [
  {
    id: "ai",
    icon: Sparkles,
    name: { mn: "AI Дизайн", en: "AI Design" },
    desc: { mn: "AI туслахаар өөрийн тавилгаа зохио", en: "Design your furniture with AI assistant" },
    link: "/ai-customizer",
  },
  {
    id: "custom",
    icon: Ruler,
    name: { mn: "Захиалгат хэмжээ", en: "Custom Dimensions" },
    desc: { mn: "Хүссэн хэмжээ, хэлбэрээр хийлгэх", en: "Any size, any shape you need" },
    link: "/ai-customizer",
  },
  {
    id: "material",
    icon: Palette,
    name: { mn: "Материал сонгох", en: "Material Selection" },
    desc: { mn: "Мод, арьс, даавуу гэх мэт сонголт", en: "Wood, leather, fabric options" },
    link: "/contact",
  },
  {
    id: "3d",
    icon: Eye,
    name: { mn: "3D Харах", en: "3D Preview" },
    desc: { mn: "Бүтээгдэхүүнээ хийлгэхээс өмнө харах", en: "See before it's built" },
    link: "/ai-customizer",
  },
  {
    id: "delivery",
    icon: Truck,
    name: { mn: "Хүргэлт", en: "Delivery" },
    desc: { mn: "Улаанбаатар хотод үнэгүй хүргэлт", en: "Free delivery in Ulaanbaatar" },
    link: "/contact",
  },
  {
    id: "warranty",
    icon: Box,
    name: { mn: "Баталгаа", en: "Warranty" },
    desc: { mn: "2 жилийн баталгаат засвар үйлчилгээ", en: "2-year warranty & service" },
    link: "/contact",
  },
];

export default function WorksSection({ locale }: { locale: string }) {
  const isEn = locale === "en";

  function lp(path: string) {
    if (path === "/") return `/${locale}`;
    return `/${locale}${path}`;
  }

  return (
    <section className="py-24 bg-[#0D0D0D]">
      <div className="max-w-[1440px] mx-auto px-12">
        {/* Header */}
        <FadeIn>
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="inline-block text-[11px] font-semibold tracking-[3px] text-[#C9A96E] mb-3">
                {isEn ? "PRODUCTS" : "БҮТЭЭГДЭХҮҮНҮҮД"}
              </span>
              <h2 className="text-[36px] font-light text-[#FAFAFA]">
                {isEn ? "Our Products" : "Манай бүтээгдэхүүнүүд"}
              </h2>
            </div>
            <Link
              href={lp("/collections")}
              className="hidden sm:inline-flex items-center gap-2 text-sm text-[#C9A96E] hover:text-[#B8985D] transition-colors"
            >
              {isEn ? "View All →" : "Бүгдийг үзэх →"}
            </Link>
          </div>
        </FadeIn>

        {/* Services - 6 cards */}
        <FadeIn delay={0.1}>
          <h3 className="text-sm font-semibold text-[#FAFAFA] mb-6 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#C9A96E]"></span>
            {isEn ? "Services" : "Үйлчилгээ"}
          </h3>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <FadeIn key={svc.id} delay={i * 0.05}>
                <Link
                  href={lp(svc.link)}
                  className="group block p-5 rounded-sm bg-white/[0.03] border border-white/5 hover:border-[#C9A96E]/30 hover:bg-white/[0.05] transition-all"
                >
                  <Icon size={22} className="text-[#C9A96E] mb-3" />
                  <h4 className="text-sm font-medium text-[#FAFAFA] mb-1">{svc.name[locale as keyof typeof svc.name]}</h4>
                  <p className="text-xs text-[#9A9590] leading-relaxed">{svc.desc[locale as keyof typeof svc.desc]}</p>
                </Link>
              </FadeIn>
            );
          })}
        </div>

        {/* Collections */}
        <FadeIn delay={0.1}>
          <h3 className="text-sm font-semibold text-[#FAFAFA] mb-6 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#C9A96E]"></span>
            {isEn ? "Collections" : "Цуглуулга"}
          </h3>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((col, i) => (
            <FadeIn key={col.id} delay={i * 0.1}>
              <Link href={lp("/collections")} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <img
                    src={col.img}
                    alt={col.name[locale as keyof typeof col.name]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0D0D0D]/40 group-hover:bg-[#0D0D0D]/20 transition-colors" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-lg font-medium text-[#FAFAFA]">{col.name[locale as keyof typeof col.name]}</h3>
                    <p className="text-sm text-[#B5B0AB] mt-1">{col.desc[locale as keyof typeof col.desc]}</p>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
