import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "Our Services | Taij-Khurai",
  description: "Discover our premium custom furniture design, interior solutions, commercial projects, and installation services.",
};

export default function ServicesPage() {
  const services = [
    {
      number: "01",
      title: "Custom Furniture Design",
      description: "From concept to completion, we design furniture tailored to your exact specifications. Choose from hundreds of materials, finishes, and configurations to create pieces that perfectly fit your space and style.",
      image: "/images/services/custom-furniture.jpg",
    },
    {
      number: "02",
      title: "Interior Solutions",
      description: "Our design team works with you to create cohesive interior spaces. From single rooms to full homes and commercial spaces, we provide comprehensive design services including space planning, material selection, and furniture curation.",
      image: "/images/services/interior.jpg",
    },
    {
      number: "03",
      title: "Commercial Projects",
      description: "We partner with businesses, hotels, and real estate developers to furnish commercial spaces at scale. Our project management team ensures consistent quality, on-time delivery, and seamless installation across multiple locations.",
      image: "/images/services/commercial.jpg",
    },
    {
      number: "04",
      title: "Installation & Delivery",
      description: "White-glove delivery and professional installation services ensure your furniture arrives in perfect condition and is set up exactly where you want it. We handle everything from transport to final placement.",
      image: "/images/services/delivery.jpg",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="pt-32 pb-16 px-12 max-w-[1440px] mx-auto w-full">
        <FadeIn>
          <p className="text-xs font-semibold tracking-[4px] text-[#C9A96E] mb-4">OUR SERVICES</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-6xl font-bold text-[#FAFAFA]">What We Offer</h1>
        </FadeIn>
      </section>

      {/* Services */}
      <section className="py-16 px-12 max-w-[1440px] mx-auto w-full space-y-24">
        {services.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1}>
            <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}>
              <div className="lg:w-[500px]">
                <div className="relative h-[350px] rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:flex-1">
                <p className="text-5xl font-bold text-[#C9A96E] mb-4">{service.number}</p>
                <h2 className="text-3xl font-semibold text-[#FAFAFA] mb-4">{service.title}</h2>
                <p className="text-base leading-relaxed text-[#9A9590]">{service.description}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </section>
    </div>
  );
}
