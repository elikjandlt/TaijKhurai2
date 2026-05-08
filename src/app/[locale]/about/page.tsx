import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "About Us | Taij-Khurai",
  description: "Learn about Taij-Khurai - premium custom furniture combining Mongolian craftsmanship with Scandinavian minimalism.",
};

export default function AboutPage() {
  const t = useTranslations();

  const values = [
    { title: "Quality", description: "We use only the finest materials and work with skilled craftspeople to ensure every piece meets our exacting standards." },
    { title: "Customization", description: "Every space is unique. That's why we offer extensive customization options to ensure your furniture fits perfectly." },
    { title: "Sustainability", description: "We source responsibly and design for longevity, creating furniture that lasts for generations, not seasons." },
  ];

  const team = [
    { name: "Enkhbold G.", role: "Founder & CEO", image: "/images/team/ceo.jpg" },
    { name: "Sarnai D.", role: "Head of Design", image: "/images/team/designer.jpg" },
    { name: "Batbayar T.", role: "Master Craftsman", image: "/images/team/craftsman.jpg" },
    { name: "Oyungerel M.", role: "Operations Director", image: "/images/team/operations.jpg" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="pt-32 pb-16 px-12 max-w-[1440px] mx-auto w-full">
        <FadeIn>
          <p className="text-xs font-semibold tracking-[4px] text-[#C9A96E] mb-4">ABOUT US</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-6xl font-bold text-[#FAFAFA]">Our Story</h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-12 max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <FadeIn className="lg:w-[600px]">
            <div className="space-y-6">
              <p className="text-[17px] leading-relaxed text-[#D4CFC9]">
                Taij-Khurai is a modern furniture brand focused on premium custom furniture, interior solutions, and contemporary living spaces. We combine Mongolian craftsmanship with Scandinavian minimalism to create pieces that are both beautiful and functional.
              </p>
              <p className="text-[17px] leading-relaxed text-[#D4CFC9]">
                Our mission is to make high-quality, personalized furniture accessible to everyone. Whether you're furnishing a single room or an entire building, we work with you to bring your vision to life.
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
            <p className="text-xs font-semibold tracking-[3px] text-[#C9A96E] mb-3">OUR VALUES</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl font-semibold text-[#FAFAFA] mb-12">What We Stand For</h2>
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
          <p className="text-xs font-semibold tracking-[3px] text-[#C9A96E] mb-3">OUR TEAM</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-4xl font-semibold text-[#FAFAFA] mb-12">Meet the People Behind the Craft</h2>
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
