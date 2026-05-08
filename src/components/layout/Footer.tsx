"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

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
              {t("description")}
            </p>
          </div>

          {/* Links */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[13px] font-semibold text-[#FAFAFA] mb-3">{t("explore")}</h4>
              <ul className="space-y-2">
                {[
                  { label: "Collections", href: "/collections" },
                  { label: "Custom Furniture", href: "/services" },
                  { label: "AI Customizer", href: "/ai-customizer" },
                  { label: "Portfolio", href: "/portfolio" },
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
              <h4 className="text-[13px] font-semibold text-[#FAFAFA] mb-3">{t("company")}</h4>
              <ul className="space-y-2">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Blog / Inspiration", href: "/blog" },
                  { label: "Contact", href: "/contact" },
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
              <h4 className="text-[13px] font-semibold text-[#FAFAFA] mb-3">{t("support")}</h4>
              <ul className="space-y-2">
                {["FAQ", "Delivery", "Product Care", "Warranty"].map((item) => (
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
          <p className="text-xs text-[#5A5A5A]">{t("rights")}</p>
          <div className="flex gap-6 text-xs text-[#5A5A5A]">
            <Link href="/" className="hover:text-[#9A9590] transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-[#9A9590] transition-colors">Terms of Service</Link>
            <Link href="/" className="hover:text-[#9A9590] transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
