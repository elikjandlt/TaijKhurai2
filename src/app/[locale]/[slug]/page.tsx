import { notFound } from "next/navigation";

// Static fallback content for build-time static generation
const staticPages: Record<string, Record<string, { name: string; description?: string; content?: string }>> = {
  mn: {
    about: {
      name: "Бидний тухай",
      description: "Taij-Khurai — Монголын гар урлал ба Скандинавийн минимализмыг хослуулсан тавилгын брэнд.",
      content: "<p>Taij-Khurai нь 2020 онд үүсгэн байгуулагдсан бөгөөд Монголын уламжлалт гар урлалыг орчин үеийн дизайнтай хослуулан, өндөр чанартай тавилгыг захиалгын үндсэн дээр үйлдвэрлэдэг.</p>",
    },
    services: {
      name: "Үйлчилгээ",
      description: "Бидний үндсэн үйлчилгээнүүд.",
      content: "<ul><li>Захиалгат тавилга үйлдвэрлэл</li><li>Орон зайн дизайн</li><li>AI туслах</li></ul>",
    },
    contact: {
      name: "Холбоо барих",
      description: "Бидэнтэй холбогдох мэдээлэл.",
      content: "<p>Утас: +976 9911 2233<br/>Имэйл: info@taijkhurai.mn</p>",
    },
  },
  en: {
    about: {
      name: "About Us",
      description: "Taij-Khurai — where Mongolian craftsmanship meets Scandinavian minimalism.",
      content: "<p>Founded in 2020, Taij-Khurai combines traditional Mongolian craftsmanship with modern design to create high-quality custom furniture.</p>",
    },
    services: {
      name: "Services",
      description: "Our core services.",
      content: "<ul><li>Custom furniture manufacturing</li><li>Interior design</li><li>AI assistant</li></ul>",
    },
    contact: {
      name: "Contact",
      description: "Get in touch with us.",
      content: "<p>Phone: +976 9911 2233<br/>Email: info@taijkhurai.mn</p>",
    },
  },
};

const staticPosts: Record<string, Record<string, { title: string; excerpt?: string; content?: string; publishedDate?: string }>> = {
  mn: {
    "perfect-sofa-guide": {
      title: "Төгс буйдан сонгох гарын авлага",
      excerpt: "2026 оны чиг хандлага",
      content: "<p>Буйдан сонгохдоо хэмжээ, материал, өнгө зэргийг анхаарах хэрэгтэй.</p>",
      publishedDate: "2026-01-15",
    },
    "warm-modernism-2026": {
      title: "Дулаан модернизм 2026",
      excerpt: "Шинэ чиг хандлага",
      content: "<p>2026 онд дулаан өнгө, байгалийн материалууд түлхүү ашиглагдана.</p>",
      publishedDate: "2026-02-01",
    },
    "optimize-small-spaces": {
      title: "Жижиг орон зайг ашиглах нь",
      excerpt: "Зөвлөмжүүд",
      content: "<p>Жижиг орон зайг том харагдуулахын тулд толь, цагаан өнгө ашигла.</p>",
      publishedDate: "2026-03-10",
    },
  },
  en: {
    "perfect-sofa-guide": {
      title: "The Perfect Sofa Guide",
      excerpt: "2026 trends",
      content: "<p>When choosing a sofa, consider size, material, and color.</p>",
      publishedDate: "2026-01-15",
    },
    "warm-modernism-2026": {
      title: "Warm Modernism 2026",
      excerpt: "New trends",
      content: "<p>In 2026, warm colors and natural materials will be popular.</p>",
      publishedDate: "2026-02-01",
    },
    "optimize-small-spaces": {
      title: "Optimizing Small Spaces",
      excerpt: "Tips",
      content: "<p>Use mirrors and white colors to make small spaces look bigger.</p>",
      publishedDate: "2026-03-10",
    },
  },
};

export const revalidate = 60;

export async function generateStaticParams() {
  return [
    { locale: "mn", slug: "about" },
    { locale: "en", slug: "about" },
    { locale: "mn", slug: "services" },
    { locale: "en", slug: "services" },
    { locale: "mn", slug: "contact" },
    { locale: "en", slug: "contact" },
    { locale: "mn", slug: "perfect-sofa-guide" },
    { locale: "en", slug: "perfect-sofa-guide" },
    { locale: "mn", slug: "warm-modernism-2026" },
    { locale: "en", slug: "warm-modernism-2026" },
    { locale: "mn", slug: "optimize-small-spaces" },
    { locale: "en", slug: "optimize-small-spaces" },
  ];
}

export default async function UnifiedDynamicPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  // Try static page first
  const page = staticPages[locale]?.[slug];
  if (page) {
    return (
      <div className="max-w-[900px] mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-[#FAFAFA] mb-6">{page.name}</h1>
        {page.description && (
          <p className="text-lg text-[#9A9590] mb-8">{page.description}</p>
        )}
        {page.content && (
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        )}
      </div>
    );
  }

  // Try static post
  const post = staticPosts[locale]?.[slug];
  if (post) {
    return (
      <article className="max-w-[900px] mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#FAFAFA] mb-4">
          {post.title}
        </h1>
        {post.publishedDate && (
          <time className="text-sm text-[#9A9590] block mb-8">
            {new Date(post.publishedDate).toLocaleDateString(
              locale === "mn" ? "mn-MN" : "en-US",
              { year: "numeric", month: "long", day: "numeric" }
            )}
          </time>
        )}
        {post.excerpt && (
          <p className="text-lg text-[#D4CFC9] mb-8 leading-relaxed">{post.excerpt}</p>
        )}
        {post.content && (
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        )}
      </article>
    );
  }

  notFound();
}
