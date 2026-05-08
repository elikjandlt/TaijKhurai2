import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";

const content: Record<string, Record<string, string>> = {
  mn: {
    "hero.label": "PREMIUM CUSTOM FURNITURE",
    "hero.title": "Таны орон зайд зориулсан",
    "hero.subtitle": "Монголын гар урлал ба Скандинавийн минимализмыг хослуулсан захиалгат тавилга. Дизайнаа хийж, хараад, захиалаарай.",
    "hero.ctaPrimary": "AI Захиалга",
    "hero.ctaSecondary": "Зөвлөгөө авах",
    "collections.label": "ЦУГЛУУЛГА",
    "collections.title": "Орон зайн чиг хандлага",
    "collections.viewAll": "Бүгдийг үзэх →",
    "collections.livingRoom": "Зочны өрөө",
    "collections.bedroom": "Унтлагын өрөө",
    "collections.dining": "Хоолны өрөө",
    "collections.office": "Оффис",
    "customization.label": "AI ТУСЛАХ",
    "customization.title": "Зохио. Харах. Дурлах.",
    "customization.description": "Манай AI туслах таны хэмжээ, өнгө, материалын сонголтыг авч, таны орон зайд тохирсон тавилгын дизайныг бүтээнэ.",
    "customization.step1": "1. Хэмжээ оруулах",
    "customization.step2": "2. Өнгө сонгох",
    "customization.step3": "3. Материал сонгох",
    "customization.step4": "4. Хэв маяг сонгох",
    "customization.step5": "5. 3D харах",
    "customization.step6": "6. Захиалах",
    "customization.cta": "AI Захиалга Эхлүүлэх",
    "portfolio.label": "ТӨСЛҮҮД",
    "portfolio.title": "Сүүлийн ажлууд",
    "portfolio.viewAll": "Бүгдийг үзэх →",
    "testimonials.label": "СЭТГЭГДЭЛ",
    "testimonials.title": "Үйлчлүүлэгчдийн үг",
    "testimonials.quote1": "Taij-Khurai манай зочны өрөөг бүрэн өөрчилсөн. Дизайн, чанар, үйлчилгээ — бүгд төгс.",
    "testimonials.author1": "Батбаяр Г.",
    "testimonials.role1": "Орон сууцны эзэн",
    "testimonials.quote2": "Захиалгат тавилга маань оффисын орчинд төгс тохирсон. Ажилчид маань гайхаж байна.",
    "testimonials.author2": "Сарнай Д.",
    "testimonials.role2": "CEO, TechStart",
    "testimonials.quote3": "Хуучин тавилгаа шинэчлэхэд маш их тус болсон. Монголын гар урлал гайхалтай.",
    "testimonials.author3": "Энхболд Т.",
    "testimonials.role3": "Дизайнер",
    "blog.label": "БЛОГ",
    "blog.title": "Онцлох нийтлэл",
    "blog.viewAll": "Бүгдийг үзэх →",
    "blog.post1": "Төгс буйдан сонгох гарын авлага",
    "blog.meta1": "2026 оны чиг хандлага",
    "blog.post2": "Дулаан модернизм 2026",
    "blog.meta2": "Шинэ чиг хандлага",
    "blog.post3": "Жижиг орон зайг ашиглах нь",
    "blog.meta3": "Зөвлөмжүүд",
    "cta.title": "Төгс тавилга бүтээхэд бэлэн үү?",
    "cta.subtitle": "Өнөөдөр манай AI туслахтай холбогдоод, таны орон зайд зориулсан дизайныг үнэ төлбөргүй аваарай.",
    "cta.button": "AI Захиалга Эхлүүлэх",
  },
  en: {
    "hero.label": "PREMIUM CUSTOM FURNITURE",
    "hero.title": "Designed for Your Space",
    "hero.subtitle": "Mongolian craftsmanship meets Scandinavian minimalism. Design, visualize, and order custom furniture tailored to your space.",
    "hero.ctaPrimary": "AI Customizer",
    "hero.ctaSecondary": "Book Consultation",
    "collections.label": "COLLECTIONS",
    "collections.title": "Curated for Every Space",
    "collections.viewAll": "View All →",
    "collections.livingRoom": "Living Room",
    "collections.bedroom": "Bedroom",
    "collections.dining": "Dining",
    "collections.office": "Office",
    "customization.label": "AI CUSTOMIZER",
    "customization.title": "Design. Visualize. Love.",
    "customization.description": "Our AI assistant takes your dimensions, color, and material preferences to generate furniture designs tailored to your space.",
    "customization.step1": "1. Enter Dimensions",
    "customization.step2": "2. Choose Color",
    "customization.step3": "3. Choose Material",
    "customization.step4": "4. Choose Style",
    "customization.step5": "5. View in 3D",
    "customization.step6": "6. Place Order",
    "customization.cta": "Start AI Customizer",
    "portfolio.label": "PORTFOLIO",
    "portfolio.title": "Recent Work",
    "portfolio.viewAll": "View All →",
    "testimonials.label": "TESTIMONIALS",
    "testimonials.title": "What Clients Say",
    "testimonials.quote1": "Taij-Khurai completely transformed our living room. The design, quality, and service were all exceptional.",
    "testimonials.author1": "Batbayar G.",
    "testimonials.role1": "Homeowner",
    "testimonials.quote2": "The custom furniture fits our office perfectly. Our employees are amazed by the quality.",
    "testimonials.author2": "Sarnai D.",
    "testimonials.role2": "CEO, TechStart",
    "testimonials.quote3": "They helped us refresh our old furniture. Mongolian craftsmanship is incredible.",
    "testimonials.author3": "Enkhbold T.",
    "testimonials.role3": "Designer",
    "blog.label": "BLOG",
    "blog.title": "Featured Articles",
    "blog.viewAll": "View All →",
    "blog.post1": "The Perfect Sofa Guide",
    "blog.meta1": "2026 Trends",
    "blog.post2": "Warm Modernism 2026",
    "blog.meta2": "New Trends",
    "blog.post3": "Optimizing Small Spaces",
    "blog.meta3": "Tips",
    "cta.title": "Ready to Create Your Perfect Furniture?",
    "cta.subtitle": "Connect with our AI assistant today and get a free design tailored to your space.",
    "cta.button": "Start AI Customizer",
  },
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = content[locale] ?? content["mn"];

  const collections = [
    { title: t["collections.livingRoom"], image: "/images/collections/living.jpg" },
    { title: t["collections.bedroom"], image: "/images/collections/bedroom.jpg" },
    { title: t["collections.dining"], image: "/images/collections/dining.jpg" },
    { title: t["collections.office"], image: "/images/collections/office.jpg" },
  ];

  const testimonials = [
    { quote: t["testimonials.quote1"], author: t["testimonials.author1"], role: t["testimonials.role1"] },
    { quote: t["testimonials.quote2"], author: t["testimonials.author2"], role: t["testimonials.role2"] },
    { quote: t["testimonials.quote3"], author: t["testimonials.author3"], role: t["testimonials.role3"] },
  ];

  const blogPosts = [
    { title: t["blog.post1"], meta: t["blog.meta1"], image: "/images/blog/sofa.jpg" },
    { title: t["blog.post2"], meta: t["blog.meta2"], image: "/images/blog/trends.jpg" },
    { title: t["blog.post3"], meta: t["blog.meta3"], image: "/images/blog/spaces.jpg" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[900px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-living-room.jpg"
            alt="Luxury living room"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-12 pb-20 w-full">
          <FadeIn>
            <p className="text-xs font-semibold tracking-[4px] text-[#C9A96E] mb-4">{t["hero.label"]}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-6xl md:text-7xl font-bold leading-[1.1] text-white mb-6 max-w-[800px]">
              {t["hero.title"]}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base md:text-lg leading-relaxed text-[#D4CFC9] max-w-[600px] mb-8">
              {t["hero.subtitle"]}
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/ai-customizer"
                className="px-8 py-4 bg-[#C9A96E] text-[#0D0D0D] text-[15px] font-medium rounded-sm hover:bg-[#B8985D] transition-colors"
              >
                {t["hero.ctaPrimary"]}
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-white text-white text-[15px] font-medium rounded-sm hover:bg-white/10 transition-colors"
              >
                {t["hero.ctaSecondary"]}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Collections */}
      <section className="py-24 px-12 max-w-[1440px] mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <FadeIn>
            <div>
              <p className="text-xs font-semibold tracking-[3px] text-[#C9A96E] mb-3">{t["collections.label"]}</p>
              <h2 className="text-4xl font-semibold text-[#FAFAFA]">{t["collections.title"]}</h2>
            </div>
          </FadeIn>
          <FadeIn>
            <Link href="/collections" className="text-sm text-[#B5B0AB] hover:text-[#FAFAFA] transition-colors">
              {t["collections.viewAll"]}
            </Link>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {collections.map((collection, i) => (
            <FadeIn key={collection.title} delay={i * 0.1}>
              <Link href="/collections" className="group block">
                <div className="relative h-[440px] rounded-md overflow-hidden mb-4">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-medium text-[#FAFAFA]">{collection.title}</h3>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* AI Customization */}
      <section className="py-24 px-12 bg-[#111111]">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-[500px]">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[3px] text-[#C9A96E] mb-4">{t["customization.label"]}</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-5xl font-bold leading-[1.15] text-[#FAFAFA] mb-6">{t["customization.title"]}</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[15px] leading-relaxed text-[#9A9590] mb-6">{t["customization.description"]}</p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="space-y-3 mb-8">
                <p className="text-[13px] font-medium tracking-wide text-[#7A756F]">{t["customization.step1"]}          {t["customization.step2"]}</p>
                <p className="text-[13px] font-medium tracking-wide text-[#7A756F]">{t["customization.step3"]}          {t["customization.step4"]}</p>
                <p className="text-[13px] font-medium tracking-wide text-[#7A756F]">{t["customization.step5"]}          {t["customization.step6"]}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <Link
                href="/ai-customizer"
                className="inline-flex px-8 py-4 bg-[#C9A96E] text-[#0D0D0D] text-[15px] font-medium rounded-sm hover:bg-[#B8985D] transition-colors"
              >
                {t["customization.cta"]}
              </Link>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} className="lg:flex-1">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/ai-customizer.jpg"
                alt="AI Customization Interface"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 px-12 max-w-[1440px] mx-auto w-full">
        <div className="flex justify-between items-center mb-12">
          <FadeIn>
            <div>
              <p className="text-xs font-semibold tracking-[3px] text-[#C9A96E] mb-3">{t["portfolio.label"]}</p>
              <h2 className="text-4xl font-semibold text-[#FAFAFA]">{t["portfolio.title"]}</h2>
            </div>
          </FadeIn>
          <FadeIn>
            <Link href="/portfolio" className="text-sm text-[#B5B0AB] hover:text-[#FAFAFA] transition-colors">
              {t["portfolio.viewAll"]}
            </Link>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            "/images/portfolio/apartment.jpg",
            "/images/portfolio/office.jpg",
            "/images/portfolio/hotel.jpg",
          ].map((src, i) => (
            <FadeIn key={src} delay={i * 0.1}>
              <Link href="/portfolio" className="group block">
                <div className="relative h-[500px] rounded-md overflow-hidden">
                  <Image
                    src={src}
                    alt="Portfolio project"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-12 bg-[#0D0D0D]">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold tracking-[3px] text-[#C9A96E] mb-3">{t["testimonials.label"]}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl font-semibold text-[#FAFAFA] mb-12">{t["testimonials.title"]}</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((testimonial, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="p-9 bg-[#161616] rounded-md">
                  <p className="text-base leading-relaxed text-[#D4CFC9] mb-6">{testimonial.quote}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#C9A96E]" />
                    <div>
                      <p className="text-sm font-medium text-[#FAFAFA]">{testimonial.author}</p>
                      <p className="text-xs text-[#9A9590]">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-24 px-12 max-w-[1440px] mx-auto w-full">
        <div className="flex justify-between items-center mb-12">
          <FadeIn>
            <div>
              <p className="text-xs font-semibold tracking-[3px] text-[#C9A96E] mb-3">{t["blog.label"]}</p>
              <h2 className="text-4xl font-semibold text-[#FAFAFA]">{t["blog.title"]}</h2>
            </div>
          </FadeIn>
          <FadeIn>
            <Link href="/blog" className="text-sm text-[#B5B0AB] hover:text-[#FAFAFA] transition-colors">
              {t["blog.viewAll"]}
            </Link>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {blogPosts.map((post, i) => (
            <FadeIn key={post.title} delay={i * 0.1}>
              <Link href="/blog" className="group block">
                <div className="relative h-[260px] rounded-md overflow-hidden mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-medium text-[#FAFAFA] mb-1">{post.title}</h3>
                <p className="text-sm text-[#9A9590]">{post.meta}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-12 bg-[#C9A96E]">
        <div className="max-w-[900px] mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold leading-[1.2] text-[#0D0D0D] mb-6">{t["cta.title"]}</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-base text-[#5A4A3A] mb-8">{t["cta.subtitle"]}</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              href="/ai-customizer"
              className="inline-flex px-10 py-5 bg-[#0D0D0D] text-[#FAFAFA] text-base font-medium rounded-sm hover:bg-[#1A1A1A] transition-colors"
            >
              {t["cta.button"]}
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
