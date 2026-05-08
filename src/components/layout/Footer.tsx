"use client";

import Link from "next/link";

const footerLabels: Record<string, Record<string, string>> = {
  mn: {
    description: "Монголын гар урлал ба Скандинавийн минимализмыг хослуулсан тавилгын брэнд.",
    explore: "Судлах",
    company: "Компани",
    support: "Тусламж",
    rights: "© 2026 Taij-Khurai. Бүх эрх хуулиар хамгаалагдсан.",
  },
  en: {
    description: "Mongolian craftsmanship meets Scandinavian minimalism. Premium custom furniture brand.",
    explore: "Explore",
    company: "Company",
    support: "Support",
    rights: "© 2026 Taij-Khurai. All rights reserved.",
  },
};

export default function Footer({ locale }: { locale: string }) {
  const t = footerLabels[locale] ?? footerLabels["mn"];

  return (
    <footer className="bg-[#0D0D0D] border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-12 py-16">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Brand */}
          <div className="lg:w-80">
            <Link href="/" className="text-xl font-semibold tracking-[2px] text-[#FAFAFA]">
              Taij-Khurai
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[#9A9590]">
              {t.description}
            </p>
          </div>

          {/* Links */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[13px] font-semibold text-[#FAFAFA] mb-3">{t.explore}</h4>
              <ul className="space-y-2">
                {[
                  { label: locale === "mn" ? "Цуглуулга" : "Collections", href: "/collections" },
                  { label: locale === "mn" ? "Захиалгат тавилга" : "Custom Furniture", href: "/services" },
                  { label: locale === "mn" ? "AI Захиалга" : "AI Customizer", href: "/ai-customizer" },
                  { label: locale === "mn" ? "Төслүүд" : "Portfolio", href: "/portfolio" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-[#9A9590] hover:text-[#FAFAFA] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[13px] font-semibold text-[#FAFAFA] mb-3">{t.company}</h4>
              <ul className="space-y-2">
                {[
                  { label: locale === "mn" ? "Бидний тухай" : "About Us", href: "/about" },
                  { label: locale === "mn" ? "Блог" : "Blog", href: "/blog" },
                  { label: locale === "mn" ? "Холбоо барих" : "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-[#9A9590] hover:text-[#FAFAFA] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[13px] font-semibold text-[#FAFAFA] mb-3">{t.support}</h4>
              <ul className="space-y-2">
                {[
                  locale === "mn" ? "Түгээмэл асуулт" : "FAQ",
                  locale === "mn" ? "Хүргэлт" : "Delivery",
                  locale === "mn" ? "Бүтээгдэхүүний арчилгаа" : "Product Care",
                  locale === "mn" ? "Баталгаа" : "Warranty",
                ].map((item) => (
                  <li key={item}>
                    <Link href="/" className="text-sm text-[#9A9590] hover:text-[#FAFAFA] transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#5A5A5A]">{t.rights}</p>
          <div className="flex gap-6 text-xs text-[#5A5A5A]">
            <Link href="/" className="hover:text-[#9A9590] transition-colors">{locale === "mn" ? "Нууцлалын бодлого" : "Privacy Policy"}</Link>
            <Link href="/" className="hover:text-[#9A9590] transition-colors">{locale === "mn" ? "Үйлчилгээний нөхцөл" : "Terms of Service"}</Link>
            <Link href="/" className="hover:text-[#9A9590] transition-colors">{locale === "mn" ? "Cookie бодлого" : "Cookie Policy"}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
