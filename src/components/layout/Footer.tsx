"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

function useCurrentLocale(): string {
  const pathname = usePathname();
  const segments = pathname.split("/");
  return segments[1] === "en" ? "en" : "mn";
}

function localePath(path: string, locale: string): string {
  if (path === "/") return `/${locale}`;
  return `/${locale}${path}`;
}

export default function Footer() {
  const locale = useCurrentLocale();
  const t = footerLabels[locale] ?? footerLabels.mn;

  return (
    <footer className="bg-[#F5EFE6] border-t border-[#D4C8B8]">
      <div className="max-w-[1440px] mx-auto px-12 py-16">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-80">
            <Link href={localePath("/", locale)} className="text-xl font-semibold tracking-[2px] text-[#2B2B2B]">
              Taij-Khurai
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[#5A5A5A]">
              {t.description}
            </p>
          </div>

          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[13px] font-semibold text-[#2B2B2B] mb-3">{t.explore}</h4>
              <ul className="space-y-2">
              {[
                { label: "Products", href: "/collections" },
                { label: "AI Customizer", href: "/ai-customizer" },
              ].map((item) => (
                  <li key={item.label}>
                    <Link href={localePath(item.href, locale)} className="text-sm text-[#5A5A5A] hover:text-[#2B2B2B] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[13px] font-semibold text-[#2B2B2B] mb-3">{t.company}</h4>
              <ul className="space-y-2">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Blog / Inspiration", href: "/blog" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={localePath(item.href, locale)} className="text-sm text-[#5A5A5A] hover:text-[#2B2B2B] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[13px] font-semibold text-[#2B2B2B] mb-3">{t.support}</h4>
              <ul className="space-y-2">
                {[
                  { label: "FAQ", href: "/help#faq" },
                  { label: "Delivery", href: "/help#delivery" },
                  { label: "Product Care", href: "/help#care" },
                  { label: "Warranty", href: "/help#warranty" },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={localePath(item.href, locale)} className="text-sm text-[#5A5A5A] hover:text-[#2B2B2B] transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#D4C8B8] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#5A5A5A]">{t.rights}</p>
          <div className="flex gap-6 text-xs text-[#5A5A5A]">
            <span className="hover:text-[#5A5A5A] transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#5A5A5A] transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-[#5A5A5A] transition-colors cursor-pointer">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
