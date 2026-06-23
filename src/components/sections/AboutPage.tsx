"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { ArrowRight, Eye, Target, Heart, Hammer, Leaf, Sparkles, Users, Award, Truck } from "lucide-react";

export default function AboutPage({ locale }: { locale: string }) {
  const isEn = locale === "en";

  function lp(path: string) {
    if (path === "/") return `/${locale}`;
    return `/${locale}${path}`;
  }

  const content = {
    hero: {
      label: isEn ? "ABOUT US" : "БИДНИЙ ТУХАЙ",
      title: isEn ? "Where Mongolian Craft Meets Modern Living" : "Монголын гар урлал орчин үеийн амьдралтай учирсан газар",
      subtitle: isEn
        ? "We design and build furniture that carries heritage, purpose, and soul into every home."
        : "Бид өв соёл, зорилго, сүнсийг гэр бүрт хүргэх тавилга зохиож, бүтээдэг.",
    },
    story: {
      label: isEn ? "OUR STORY" : "МАНАЙ ТҮҮХ",
      title: isEn ? "Built by Hand, Guided by Heart" : "Гараар бүтээсэн, зүрхээр удирдсан",
      desc: isEn
        ? "Taij-Khurai was born from a simple belief: furniture should be more than functional. It should tell a story. We bring together Mongolian artisans — masters of wood, leather, and textile — with Scandinavian design discipline to create pieces that feel timeless, personal, and unmistakably ours."
        : "Taij-Khurai нь энгийн итгэл үнэмшлээс төрсөн: тавилга зөвхөн функционал байхаас илүү байх ёстой. Тэр нь түүх өгүүлэх ёстой. Бид мод, арьс, даавуунд гаршсан Монголын гар урчдыг Скандинавийн дизайны дисциплинтэй нэгтгэн, цаг хугацааг үл ялгах, хувь хүнд, өвөрмөц тавилга бүтээдэг.",
    },
    vision: {
      title: isEn ? "Our Vision" : "Алсын хараа",
      desc: isEn
        ? "To become the most respected Mongolian furniture brand globally, where every home tells a story of heritage, craftsmanship, and modern living."
        : "Монголын гар урлал, өв соёл болон орчин үеийн амьдралыг хослуулсан тавилгын хамгийн хүндэтгэлтэй брэнд болох.",
    },
    mission: {
      title: isEn ? "Our Mission" : "Уриа зорилго",
      desc: isEn
        ? "We craft soulful spaces by blending Mongolian heritage with Scandinavian minimalism — creating furniture that is timeless, functional, and deeply personal."
        : "Бид Монголын өв соёл ба Скандинавийн минимализмыг хослуулан, цаг хугацааг үл ялгах, функционал, хувь хүнд зориулсан тавилга бүтээж, сүнстэй орон зайг бий болгоно.",
    },
    values: [
      {
        icon: Hammer,
        title: isEn ? "Authentic Craftsmanship" : "Жинхэнэ гар урлал",
        desc: isEn
          ? "Every piece is handcrafted by skilled Mongolian artisans using traditional techniques passed down through generations."
          : "Бүтээгдэхүүн бүр Монголын гар урчдын уламжлалт аргаар гардан хийгддэг.",
      },
      {
        icon: Leaf,
        title: isEn ? "Scandinavian Minimalism" : "Скандинавийн минимализм",
        desc: isEn
          ? "Clean lines, functional beauty, and timeless design principles that complement any modern interior."
          : "Цэвэр шугам, функционал гоо үзэсгэлэн, орчин үеийн дотоод засалд тохирох цаг хугацааг үл ялгах дизайн.",
      },
      {
        icon: Sparkles,
        title: isEn ? "AI-Powered Design" : "AI-ээр хөтлөгдсөн дизайн",
        desc: isEn
          ? "Our AI customizer helps you visualize and design furniture tailored to your exact space and preferences."
          : "Манай AI туслах таны орон зайд зориулсан тавилгын дизайныг харахад тусална.",
      },
    ],
    stats: [
      { value: "8+", label: isEn ? "Years of Craft" : "Жилийн гар урлал" },
      { value: "1,200+", label: isEn ? "Projects Done" : "Дууссан төсөл" },
      { value: "45", label: isEn ? "Artisan Partners" : "Гар урчид" },
      { value: "3", label: isEn ? "Countries Served" : "Улс орон" },
    ],
    timeline: [
      { year: "2018", title: { mn: "Брэнд төрсөн", en: "Brand Founded" }, desc: { mn: "Taij-Khurai Монголын гар урлалыг орчин үеийн дизайнд нэгтгэх зорилготой үүсгэн байгуулагдсан.", en: "Taij-Khurai was founded to bring Mongolian craftsmanship into modern design." } },
      { year: "2020", title: { mn: "Анхны цуглуулга", en: "First Collection" }, desc: { mn: "Модон тавилгын анхны цуглуулга зах зээлд гарч, үйлчлүүлэгчдийн итгэлийг хүлээн авсан.", en: "The first wood furniture collection launched and earned customer trust." } },
      { year: "2022", title: { mn: "AI Захиалга", en: "AI Customizer" }, desc: { mn: "AI туслахтай захиалгат тавилгын платформ нэвтрүүлсэн.", en: "Launched the AI-powered custom furniture platform." } },
      { year: "2024", title: { mn: "Олон улсад", en: "Global Reach" }, desc: { mn: "Европ, Азийн захиалга авч эхэлж, олон улсын хүрээнд өргөжсөн.", en: "Began accepting orders from Europe and Asia, expanding globally." } },
      { year: "2026", title: { mn: "Өнөөдөр", en: "Today" }, desc: { mn: "Монголын гар урлал ба Скандинавийн минимализмыг хослуулсан тэргүүлэх тавилгын брэнд болсон.", en: "Became a leading furniture brand blending Mongolian craft with Scandinavian minimalism." } },
    ],
    team: [
      { name: "Boldbaatar E.", role: isEn ? "Founder & Lead Designer" : "Үүсгэн байгуулагч & Глав дизайнер", img: "/images/team/ceo.jpg" },
      { name: "Sarnai D.", role: isEn ? "Head of Craftsmanship" : "Гар урлалын дарга", img: "/images/team/craftsman.jpg" },
      { name: "Enkhbold T.", role: isEn ? "AI & Technology Lead" : "AI & Технологийн дарга", img: "/images/team/designer.jpg" },
    ],
    cta: {
      title: isEn ? "Want to Work With Us?" : "Бидэнтэй хамтрах уу?",
      desc: isEn
        ? "Let's create furniture that tells your story. Book a free consultation today."
        : "Таны түүхийг өгүүлэх тавилга хамтдаа бүтээе. Өнөөдөр үнэ төлбөргүй зөвлөгөө аваарай.",
      button: isEn ? "Book Consultation" : "Зөвлөгөө авах",
    },
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[420px] md:min-h-[480px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/about/about-workshop.jpg"
            alt={isEn ? "Taij-Khurai workshop" : "Taij-Khurai урлан"}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0D0D0D]/55" />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center pt-20">
          <FadeIn>
            <span className="inline-block text-[12px] font-semibold tracking-[3px] text-[#B08968] mb-4 uppercase">
              {content.hero.label}
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-[36px] md:text-[48px] font-light text-[#FAFAFA] leading-[1.15] mb-5">
              {content.hero.title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base md:text-lg text-[#D4CFC9] max-w-xl mx-auto">
              {content.hero.subtitle}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-24 bg-[#F5EFE6]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
            <div>
              <FadeIn>
                <span className="inline-block text-[11px] font-semibold tracking-[3px] text-[#B08968] mb-3">
                  {content.story.label}
                </span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="text-[28px] md:text-[34px] font-light text-[#2B2B2B] mb-5 leading-tight">
                  {content.story.title}
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-base leading-[1.8] text-[#5A5A5A]">
                  {content.story.desc}
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.15}>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <img
                  src="/images/collections/living.jpg"
                  alt={isEn ? "Taij-Khurai furniture" : "Taij-Khurai тавилга"}
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-24 bg-[#E8D8C4]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="h-full py-8 border-t border-[#B08968]/30">
                <span className="inline-block text-[11px] font-semibold tracking-[3px] text-[#B08968] mb-3">
                  {isEn ? "VISION" : "АЛСЫН ХАРАА"}
                </span>
                <h3 className="text-[22px] font-medium text-[#2B2B2B] mb-3">{content.vision.title}</h3>
                <p className="text-base leading-relaxed text-[#5A5A5A]">{content.vision.desc}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="h-full py-8 border-t border-[#B08968]/30">
                <span className="inline-block text-[11px] font-semibold tracking-[3px] text-[#B08968] mb-3">
                  {isEn ? "MISSION" : "УРИА ЗОРИЛГО"}
                </span>
                <h3 className="text-[22px] font-medium text-[#2B2B2B] mb-3">{content.mission.title}</h3>
                <p className="text-base leading-relaxed text-[#5A5A5A]">{content.mission.desc}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-24 bg-[#F5EFE6]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-block text-[11px] font-semibold tracking-[3px] text-[#B08968] mb-3">
                {isEn ? "OUR VALUES" : "МАНАЙ ҮНЭТ ЗЙЛС"}
              </span>
              <h2 className="text-[28px] md:text-[34px] font-light text-[#2B2B2B]">
                {isEn ? "What We Stand For" : "Бид юуны төлөө зогсдог"}
              </h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {content.values.map((v, i) => {
              const Icon = v.icon;
              return (
                <FadeIn key={i} delay={i * 0.12}>
                  <div className="h-full text-center">
                    <Icon size={28} className="text-[#B08968] mx-auto mb-5" />
                    <h3 className="text-lg font-medium text-[#2B2B2B] mb-2">{v.title}</h3>
                    <p className="text-sm leading-relaxed text-[#5A5A5A]">{v.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-24 bg-[#E8D8C4]">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-block text-[11px] font-semibold tracking-[3px] text-[#B08968] mb-3">
                {isEn ? "OUR JOURNEY" : "БИДНИЙ ЗАМНАЛ"}
              </span>
              <h2 className="text-[28px] md:text-[34px] font-light text-[#2B2B2B]">
                {isEn ? "How We Grew" : "Хэрхэн өсч өндөрсгөв"}
              </h2>
            </div>
          </FadeIn>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#D4C8B8] md:-translate-x-1/2" />
            {content.timeline.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <FadeIn key={item.year} delay={i * 0.08}>
                  <div className="relative flex md:justify-center mb-10 last:mb-0">
                    <div className="absolute left-4 md:left-1/2 w-2 h-2 rounded-full bg-[#B08968] md:-translate-x-1/2 translate-y-1.5 z-10" />

                    <div
                      className={`ml-10 md:ml-0 w-full md:w-[calc(50%-40px)] ${
                        isEven ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"
                      }`}
                    >
                      <div className="pb-4 border-b border-[#D4C8B8]">
                        <span className="text-[12px] font-semibold tracking-[2px] text-[#B08968]">
                          {item.year}
                        </span>
                        <h3 className="text-base font-medium text-[#2B2B2B] mt-1 mb-1">
                          {item.title[locale as keyof typeof item.title]}
                        </h3>
                        <p className="text-sm leading-relaxed text-[#5A5A5A]">
                          {item.desc[locale as keyof typeof item.desc]}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-24 bg-[#F5EFE6]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-block text-[11px] font-semibold tracking-[3px] text-[#B08968] mb-3">
                {isEn ? "OUR TEAM" : "МАНАЙ БАГ"}
              </span>
              <h2 className="text-[28px] md:text-[34px] font-light text-[#2B2B2B]">
                {isEn ? "The People Behind the Craft" : "Гар урлалын ард буй хүмүүс"}
              </h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-10">
            {content.team.map((member, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="text-center group">
                  <div className="relative w-36 h-36 mx-auto mb-5 rounded-full overflow-hidden border-2 border-[#D4C8B8]">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-base font-medium text-[#2B2B2B]">{member.name}</h3>
                  <p className="text-sm text-[#5A5A5A]">{member.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-[#E8D8C4]">
        <div className="max-w-[700px] mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <h2 className="text-[28px] md:text-[34px] font-light text-[#2B2B2B] mb-4">
              {content.cta.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-base text-[#5A5A5A] mb-8">
              {content.cta.desc}
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              href={lp("/contact")}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#B08968] text-[#F5EFE6] text-sm font-medium rounded-sm hover:bg-[#9A7658] transition-colors"
            >
              {content.cta.button}
              <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
