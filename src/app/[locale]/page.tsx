import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";

export default function HomePage() {
  const t = useTranslations();

  const collections = [
    { title: t("collections.livingRoom"), image: "/images/collections/living.jpg" },
    { title: t("collections.bedroom"), image: "/images/collections/bedroom.jpg" },
    { title: t("collections.dining"), image: "/images/collections/dining.jpg" },
    { title: t("collections.office"), image: "/images/collections/office.jpg" },
  ];

  const testimonials = [
    { quote: t("testimonials.quote1"), author: t("testimonials.author1"), role: t("testimonials.role1") },
    { quote: t("testimonials.quote2"), author: t("testimonials.author2"), role: t("testimonials.role2") },
    { quote: t("testimonials.quote3"), author: t("testimonials.author3"), role: t("testimonials.role3") },
  ];

  const blogPosts = [
    { title: t("blog.post1"), meta: t("blog.meta1"), image: "/images/blog/sofa.jpg" },
    { title: t("blog.post2"), meta: t("blog.meta2"), image: "/images/blog/trends.jpg" },
    { title: t("blog.post3"), meta: t("blog.meta3"), image: "/images/blog/spaces.jpg" },
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
            <p className="text-xs font-semibold tracking-[4px] text-[#C9A96E] mb-4">{t("hero.label")}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-6xl md:text-7xl font-bold leading-[1.1] text-white mb-6 max-w-[800px]">
              {t("hero.title")}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base md:text-lg leading-relaxed text-[#D4CFC9] max-w-[600px] mb-8">
              {t("hero.subtitle")}
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/ai-customizer"
                className="px-8 py-4 bg-[#C9A96E] text-[#0D0D0D] text-[15px] font-medium rounded-sm hover:bg-[#B8985D] transition-colors"
              >
                {t("hero.ctaPrimary")}
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-white text-white text-[15px] font-medium rounded-sm hover:bg-white/10 transition-colors"
              >
                {t("hero.ctaSecondary")}
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
              <p className="text-xs font-semibold tracking-[3px] text-[#C9A96E] mb-3">{t("collections.label")}</p>
              <h2 className="text-4xl font-semibold text-[#FAFAFA]">{t("collections.title")}</h2>
            </div>
          </FadeIn>
          <FadeIn>
            <Link href="/collections" className="text-sm text-[#B5B0AB] hover:text-[#FAFAFA] transition-colors">
              {t("collections.viewAll")}
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
              <p className="text-xs font-semibold tracking-[3px] text-[#C9A96E] mb-4">{t("customization.label")}</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-5xl font-bold leading-[1.15] text-[#FAFAFA] mb-6">{t("customization.title")}</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[15px] leading-relaxed text-[#9A9590] mb-6">{t("customization.description")}</p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="space-y-3 mb-8">
                <p className="text-[13px] font-medium tracking-wide text-[#7A756F]">{t("customization.step1")}          {t("customization.step2")}</p>
                <p className="text-[13px] font-medium tracking-wide text-[#7A756F]">{t("customization.step3")}          {t("customization.step4")}</p>
                <p className="text-[13px] font-medium tracking-wide text-[#7A756F]">{t("customization.step5")}          {t("customization.step6")}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <Link
                href="/ai-customizer"
                className="inline-flex px-8 py-4 bg-[#C9A96E] text-[#0D0D0D] text-[15px] font-medium rounded-sm hover:bg-[#B8985D] transition-colors"
              >
                {t("customization.cta")}
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
              <p className="text-xs font-semibold tracking-[3px] text-[#C9A96E] mb-3">{t("portfolio.label")}</p>
              <h2 className="text-4xl font-semibold text-[#FAFAFA]">{t("portfolio.title")}</h2>
            </div>
          </FadeIn>
          <FadeIn>
            <Link href="/portfolio" className="text-sm text-[#B5B0AB] hover:text-[#FAFAFA] transition-colors">
              {t("portfolio.viewAll")}
            </Link>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["/images/portfolio/apartment.jpg", "/images/portfolio/office.jpg", "/images/portfolio/hotel.jpg"].map((src, i) => (
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
            <p className="text-xs font-semibold tracking-[3px] text-[#C9A96E] mb-3">{t("testimonials.label")}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl font-semibold text-[#FAFAFA] mb-12">{t("testimonials.title")}</h2>
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
              <p className="text-xs font-semibold tracking-[3px] text-[#C9A96E] mb-3">{t("blog.label")}</p>
              <h2 className="text-4xl font-semibold text-[#FAFAFA]">{t("blog.title")}</h2>
            </div>
          </FadeIn>
          <FadeIn>
            <Link href="/blog" className="text-sm text-[#B5B0AB] hover:text-[#FAFAFA] transition-colors">
              {t("blog.viewAll")}
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
            <h2 className="text-4xl md:text-5xl font-bold leading-[1.2] text-[#0D0D0D] mb-6">{t("cta.title")}</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-base text-[#5A4A3A] mb-8">{t("cta.subtitle")}</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              href="/ai-customizer"
              className="inline-flex px-10 py-5 bg-[#0D0D0D] text-[#FAFAFA] text-base font-medium rounded-sm hover:bg-[#1A1A1A] transition-colors"
            >
              {t("cta.button")}
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
