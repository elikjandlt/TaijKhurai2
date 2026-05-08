"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Search, ShoppingCart, User } from "lucide-react";

function useCurrentLocale(): string {
  const pathname = usePathname();
  const segments = pathname.split("/");
  return segments[1] === "en" ? "en" : "mn";
}

export default function Header() {
  const t = useTranslations("nav");
  const locale = useCurrentLocale();

  const navItems = [
    { label: t("home"), href: "/" },
    { label: t("collections"), href: "/collections" },
    { label: t("customFurniture"), href: "/services" },
    { label: t("aiCustomizer"), href: "/ai-customizer" },
    { label: t("portfolio"), href: "/portfolio" },
    { label: t("about"), href: "/about" },
    { label: t("blog"), href: "/blog" },
    { label: t("contact"), href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-[22px] font-semibold tracking-[2px] text-[#FAFAFA]">
          Taij-Khurai
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[#B5B0AB] transition-colors hover:text-[#FAFAFA]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <button className="text-[#B5B0AB] hover:text-[#FAFAFA] transition-colors">
            <Search size={20} />
          </button>
          <button className="text-[#B5B0AB] hover:text-[#FAFAFA] transition-colors">
            <ShoppingCart size={20} />
          </button>
          <button className="text-[#B5B0AB] hover:text-[#FAFAFA] transition-colors">
            <User size={20} />
          </button>
          <LocaleSwitcher currentLocale={locale} />
          <Link
            href="/contact"
            className="hidden sm:flex items-center px-6 py-3 bg-[#C9A96E] text-[#0D0D0D] text-[13px] font-medium rounded-sm hover:bg-[#B8985D] transition-colors"
          >
            {t("bookConsultation")}
          </Link>
        </div>
      </div>
    </header>
  );
}

function LocaleSwitcher({ currentLocale }: { currentLocale: string }) {
  const pathname = usePathname();
  const otherLocale = currentLocale === "mn" ? "en" : "mn";
  const newPath = pathname.replace(`/${currentLocale}`, `/${otherLocale}`) || `/${otherLocale}`;

  return (
    <Link
      href={newPath}
      className="text-[13px] text-[#9A9590] hover:text-[#FAFAFA] transition-colors"
    >
      {currentLocale === "mn" ? "MN | EN" : "EN | MN"}
    </Link>
  );
}
