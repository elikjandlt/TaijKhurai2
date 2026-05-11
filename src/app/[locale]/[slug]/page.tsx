import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [
    { locale: "mn", slug: "about" },
    { locale: "en", slug: "about" },
    { locale: "mn", slug: "contact" },
    { locale: "en", slug: "contact" },
    { locale: "mn", slug: "collections" },
    { locale: "en", slug: "collections" },
    { locale: "mn", slug: "portfolio" },
    { locale: "en", slug: "portfolio" },
    { locale: "mn", slug: "blog" },
    { locale: "en", slug: "blog" },
    { locale: "mn", slug: "services" },
    { locale: "en", slug: "services" },
    { locale: "mn", slug: "ai-customizer" },
    { locale: "en", slug: "ai-customizer" },
  ];
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  const staticPages = ["about", "contact", "collections", "portfolio", "blog", "services", "ai-customizer"];
  if (staticPages.includes(slug)) {
    notFound();
  }

  const isEn = locale === "en";

  return (
    <section className="pt-32 pb-16">
      <div className="max-w-[1440px] mx-auto px-12">
        <span className="inline-block text-[11px] font-semibold tracking-[3px] text-[#C9A96E] mb-3">
          {isEn ? "PAGE" : "ХУУДАС"}
        </span>
        <h1 className="text-[48px] font-light text-[#FAFAFA] mb-6">
          {isEn ? "Coming Soon" : "Удахгүй"}
        </h1>
        <p className="text-lg leading-relaxed text-[#B5B0AB]">
          {isEn
            ? "This page is under construction. Please check back later."
            : "Энэ хуудас бэлдэгдэж байна. Дараа дахин шалгана уу."}
        </p>
      </div>
    </section>
  );
}
