"use client";

import { useState } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { ArrowLeft, Calendar } from "lucide-react";

const posts = [
  {
    id: 1,
    title: { mn: "Төгс буйдан сонгох гарын авлага", en: "The Perfect Sofa Guide" },
    excerpt: { mn: "Буйдан сонгохдоо юуг анхаарах вэ? Хэмжээ, материал, хэв маяг...", en: "What to look for when choosing a sofa? Size, material, style..." },
    content: {
      mn: "Буйдан нь зочны өрөөний төв цэг юм. Зөв буйдан сонгох нь таны орон зайн тав тух, хэв маягийг тодорхойлно. Энэ гарын авлагад бид хэмжээ, материал, хөдөлгөөнт механизм, өнгө сонголт зэргийг хамарч байна. Буйдангийн стандарт хэмжээ 2-3 хүнийх 180-220 см, 4-5 хүнийх 240-300 см байдаг. Материалын хувьд арьс нь тэсвэртэй, даавуу нь тав тухтай, хиймэл арьс нь хямд өртөгтэй сонголт юм.",
      en: "The sofa is the centerpiece of your living room. Choosing the right sofa defines your space's comfort and style. This guide covers dimensions, materials, mechanisms, and color choices. Standard sofa sizes are 180-220cm for 2-3 seaters and 240-300cm for 4-5 seaters. Leather is durable, fabric is cozy, and faux leather is budget-friendly.",
    },
    date: "2026-01-15",
    img: "/images/blog/sofa.jpg",
    author: "Boldbaatar E.",
  },
  {
    id: 2,
    title: { mn: "Дулаан модернизм 2026", en: "Warm Modernism 2026" },
    excerpt: { mn: "2026 оны тавилгын чиг хандлага — дулаан өнгө, байгалийн материал...", en: "2026 furniture trends — warm colors, natural materials..." },
    content: {
      mn: "2026 онд тавилгын дизайн дулаан, уян хатан чиг хандлагатай байна. Хүйтэн минимализмын оронд дулаан мод, зөөлөн хэлбэр, байгалийн өнгө түлхүү харагдана. Скандинавийн нөлөө хэвээрээ ч Монголын уламжлалт гар урлалын элементүүдийг хослуулсан 'Neo-Nomadic' хэв маяг гарч ирж байна. Байгалийн самар мод, арч мод, хөвөн даавуу зэрэг экологийн цэвэр материалууд эрэлт хэмжээ ихэснэ.",
      en: "In 2026, furniture design trends toward warmth and softness. Instead of cold minimalism, warm woods, soft curves, and natural tones dominate. Scandinavian influence remains but a 'Neo-Nomadic' style blending Mongolian traditional craft elements is emerging. Eco-friendly materials like walnut, oak, and organic cotton are in high demand.",
    },
    date: "2026-01-10",
    img: "/images/blog/trends.jpg",
    author: "Sarnai D.",
  },
  {
    id: 3,
    title: { mn: "Жижиг орон зайг ашиглах нь", en: "Optimizing Small Spaces" },
    excerpt: { mn: "Жижиг байранд тавилга хэрхэн зохицуулах вэ? Зөвлөмжүүд...", en: "How to arrange furniture in a small apartment? Tips..." },
    content: {
      mn: "Жижиг орон зайг ашиглахын тулд олон функцтай тавилга сонгох нь чухал. Орондоо хадгалах савтай ор, ширээндээ тавиуртай ширээ, буйдандаа ортой буйдан гэх мэт. Толь ашиглан орон зайг том харагдуулах, цагаан өнгөөр тав тухтай мэдрэмж төрүүлэх, хананд тавиур байршуулах зэрэг аргууд бий. Мөн зөв хэмжээний тавилга сонгох нь чухал — том тавилга жижиг өрөөг бүр ч жижиг харагдуулна.",
      en: "For small spaces, multi-functional furniture is key. Choose beds with storage, desks with shelves, sofa beds. Use mirrors to create space illusion, white colors for comfort, and wall-mounted shelves. Choosing the right size furniture is crucial — oversized pieces make small rooms feel even smaller.",
    },
    date: "2026-01-05",
    img: "/images/blog/spaces.jpg",
    author: "Enkhbold T.",
  },
  {
    id: 4,
    title: { mn: "Монголын гар урлалын түүх", en: "History of Mongolian Craftsmanship" },
    excerpt: { mn: "Монголын гар урлалын уламжлал ба орчин үеийн хэрэглээ...", en: "Mongolian craft traditions and modern applications..." },
    content: {
      mn: "Монголын гар урлал нь мянган жилийн түүхтэй. Модон тавилга хийх урлангууд XIII зуунаас эхлэн хөгжсөн. Уламжлалт аргаар модыг гараар боловсруулж, урт наслах бат бөх тавилга хийдэг. Орчин үед эдгээр уламжлалыг орчин үеийн дизайнтай хослуулж, Taij-Khurai зэрэг брэндүүд дэлхийн зах зээлд гарч байна. Монголын гар урлалын онцлог нь байгалийн материалыг хүндэтгэн, удаан хугацаанд ашиглахад чиглэдэг.",
      en: "Mongolian craftsmanship has a thousand-year history. Wood furniture workshops developed from the 13th century. Traditional methods process wood by hand to create durable, long-lasting furniture. Today, brands like Taij-Khurai blend these traditions with modern design for the global market. Mongolian craft respects natural materials and focuses on longevity.",
    },
    date: "2025-12-20",
    img: "/images/team/ceo.jpg",
    author: "Boldbaatar E.",
  },
  {
    id: 5,
    title: { mn: "Скандинавийн минимализм", en: "Scandinavian Minimalism" },
    excerpt: { mn: "Скандинавийн дизайны үндэс ба түүний давуу талууд...", en: "The foundation of Scandinavian design and its benefits..." },
    content: {
      mn: "Скандинавийн дизайн нь 'хүмүүнлэг минимализм' гэж нэрлэгддэг. Энэ нь гоо үзэсгэлэнээс илүүтэйгээр функциональ байдлыг эрхэмлэдэг. Цагаан, саарал, хөдөөгийн ногоон өнгө нь ерөнхий өнгөний схем. Модон материал, байгалийн гэрэл, цэвэр шугамтай хэлбэр нь скандинавийн орон зайн гол шинж. Энэ хэв маяг нь стресс багатай, тав тухтай орчинг бий болгодог.",
      en: "Scandinavian design is called 'humane minimalism.' It prioritizes function over form. White, grey, and sage green are the main color schemes. Wood materials, natural light, and clean lines define Scandinavian spaces. This style creates a stress-free, comfortable environment.",
    },
    date: "2025-12-15",
    img: "/images/collections/office.jpg",
    author: "Sarnai D.",
  },
  {
    id: 6,
    title: { mn: "AI туслахтай тавилга зохиох", en: "Designing Furniture with AI" },
    excerpt: { mn: "AI хэрхэн таны орон зайд зориулсан тавилгын дизайныг бүтээдэг вэ?", en: "How does AI create furniture designs tailored to your space?" },
    content: {
      mn: "Манай AI туслах нь таны орон зайн хэмжээ, хэв маяг, өнгөний сонголтыг авч үзээд хамгийн тохиромжтой тавилгын дизайныг санал болгодог. Та зөвхөн өрөөний хэмжээ, таалагдсан өнгө, материал болон хэв маягаа оруулахад л хангалттай. AI мянга мянган дизайны өгөгдлөөс суралчлан, таны сонголтод хамгийн ойр дизайныг үүсгэнэ. Энэ нь таны цаг хугацаа, мөнгө хэмнэхээс гадна төсөөллөө бодит болгоход тусална.",
      en: "Our AI assistant analyzes your space dimensions, style, and color preferences to suggest the most suitable furniture designs. Just input your room size, preferred colors, materials, and style. The AI learns from thousands of design datasets to generate designs closest to your taste. This saves you time and money while bringing your imagination to life.",
    },
    date: "2025-12-10",
    img: "/images/ai-customizer.jpg",
    author: "Enkhbold T.",
  },
];

export default function BlogPage({ locale }: { locale: string }) {
  const isEn = locale === "en";
  const [activePost, setActivePost] = useState<typeof posts[0] | null>(null);

  if (activePost) {
    return (
      <>
        <section className="pt-32 pb-16">
          <div className="max-w-[900px] mx-auto px-12">
            <button
              onClick={() => setActivePost(null)}
              className="inline-flex items-center gap-2 text-sm text-[#C9A96E] hover:text-[#B8985D] transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              {isEn ? "Back to Blog" : "Блог руу буцах"}
            </button>

            <FadeIn>
              <div className="aspect-[16/9] rounded-sm overflow-hidden mb-8">
                <img
                  src={activePost.img}
                  alt={activePost.title[locale as keyof typeof activePost.title]}
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs text-[#C9A96E]">{activePost.author}</span>
                <span className="text-xs text-[#5A5A5A]">•</span>
                <span className="text-xs text-[#9A9590] flex items-center gap-1">
                  <Calendar size={12} /> {activePost.date}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-[36px] font-light text-[#FAFAFA] mb-8">
                {activePost.title[locale as keyof typeof activePost.title]}
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-[#B5B0AB]">
                  {activePost.content[locale as keyof typeof activePost.content]}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-[1440px] mx-auto px-12">
          <FadeIn>
            <span className="inline-block text-[11px] font-semibold tracking-[3px] text-[#C9A96E] mb-3">
              {isEn ? "BLOG" : "БЛОГ"}
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-[48px] font-light text-[#FAFAFA] mb-6">
              {isEn ? "Inspiration & Insights" : "Сэдэл & Ойлголт"}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg leading-relaxed text-[#B5B0AB] max-w-2xl">
              {isEn
                ? "Explore articles on furniture design, interior trends, and the art of Mongolian craftsmanship."
                : "Тавилгын дизайн, дотоод заслын чиг хандлага, Монголын гар урлалын тухай нийтлэлүүдийг уншаарай."}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-[#111111]">
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <FadeIn key={post.id} delay={i * 0.1}>
                <button
                  onClick={() => setActivePost(post)}
                  className="group block text-left w-full"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-4">
                    <img
                      src={post.img}
                      alt={post.title[locale as keyof typeof post.title]}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-[#C9A96E]">{post.author}</span>
                    <span className="text-xs text-[#5A5A5A]">•</span>
                    <span className="text-xs text-[#9A9590]">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-medium text-[#FAFAFA] mb-2 group-hover:text-[#C9A96E] transition-colors">
                    {post.title[locale as keyof typeof post.title]}
                  </h3>
                  <p className="text-sm text-[#9A9590]">
                    {post.excerpt[locale as keyof typeof post.excerpt]}
                  </p>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
