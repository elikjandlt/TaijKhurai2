import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "About Us | Taij-Khurai",
  description: "Learn about Taij-Khurai - premium custom furniture combining Mongolian craftsmanship with Scandinavian minimalism.",
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const values = [
    { title: locale === "mn" ? "Чанар" : "Quality", description: locale === "mn" ? "Бид зөвхөн хамгийн сайн материал ашиглаж, мэргэжлийн гар урчуудтай хамтран ажилладаг." : "We use only the finest materials and work with skilled craftspeople." },
    { title: locale === "mn" ? "Захиалгат" : "Customization", description: locale === "mn" ? "Бүх орон зай өвөрмөц. Тиймээс бид таны тавилгыг төгс тохируулах боломжийг олгодог." : "Every space is unique. We offer extensive customization options." },
    { title: locale === "mn" ? "Тогтвортой байдал" : "Sustainability", description: locale === "mn" ? "Бид хариуцлагатайгаар материал авч, удаан эдлэхээр дизайн хийдэг." : "We source responsibly and design for longevity." },
  ];

  const team = [
    { name: "Enkhbold G.", role: locale === "mn" ? "Үүсгэн байгуулагч & CEO" : "Founder & CEO", image: "/images/team/ceo.jpg" },
    { name: "Sarnai D.", role: locale === "mn" ? "Дизайны дарга" : "Head of Design", image: "/images/team/designer.jpg" },
    { name: "Batbayar T.", role: locale === "mn" ? "Гар урлалын мастер" : "Master Craftsman", image: "/images/team/craftsman.jpg" },
    { name: "Oyungerel M.", role: locale === "mn" ? "Үйл ажиллагааны дарга" : "Operations Director", image: "/images/team/operations.jpg" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="pt-32 pb-16 px-12 max-w-[1440px] mx-auto w-full">
        <FadeIn>
          <p className="text-xs font-semibold tracking-[4px] text-[#C9A96E] mb-4">{locale === "mn" ? "БИДНИЙ ТУХАЙ" : "ABOUT US"}</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-6xl font-bold text-[#FAFAFA]">{locale === "mn" ? "Бидний түүх" : "Our Story"}</h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-12 max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <FadeIn className="lg:w-[600px]">
            <div className="space-y-6">
              <p className="text-[17px] leading-relaxed text-[#D4CFC9]">
                {locale === "mn"
                  ? "Taij-Khurai нь орчин үеийн тавилгын брэнд бөгөөд Монголын гар урлал ба Скандинавийн минимализмыг хослуулдаг."
                  : "Taij-Khurai is a modern furniture brand focused on premium custom furniture and interior solutions."}
              </p>
              <p className="text-[17px] leading-relaxed text-[#D4CFC9]">
                {locale === "mn"
                  ? "Бидний зорилго бол хүн бүрд өндөр чанартай, хувь хүнд тохирсон тавилгыг хүргэх."
                  : "Our mission is to make high-quality, personalized furniture accessible to everyone."}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="lg:flex-1">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/about-workshop.jpg"
                alt="Furniture workshop"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-12 bg-[#111111]">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold tracking-[3px] text-[#C9A96E] mb-3">{locale === "mn" ? "БИДНИЙ ҮНЭТ ЗҮЙЛС" : "OUR VALUES"}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl font-semibold text-[#FAFAFA] mb-12">{locale === "mn" ? "Бид юунд итгэдэг вэ" : "What We Stand For"}</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.15}>
                <div className="p-8 bg-[#1A1A1A] rounded-md">
                  <h3 className="text-2xl font-semibold text-[#FAFAFA] mb-4">{value.title}</h3>
                  <p className="text-[15px] text-[#9A9590]">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-12 max-w-[1440px] mx-auto w-full">
        <FadeIn>
          <p className="text-xs font-semibold tracking-[3px] text-[#C9A96E] mb-3">{locale === "mn" ? "БИДНИЙ БАГ" : "OUR TEAM"}</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-4xl font-semibold text-[#FAFAFA] mb-12">{locale === "mn" ? "Гар урлалын ард буй хүмүүс" : "Meet the People Behind the Craft"}</h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <FadeIn key={member.name} delay={i * 0.1}>
              <div>
                <div className="relative h-[320px] rounded-md overflow-hidden mb-4 bg-[#2D2D2D]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium text-[#FAFAFA]">{member.name}</h3>
                <p className="text-sm text-[#9A9590]">{member.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
