import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "Contact Us | Taij-Khurai",
  description: "Get in touch with Taij-Khurai for custom furniture inquiries, consultations, and support.",
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isMn = locale === "mn";

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="pt-32 pb-16 px-12 max-w-[1440px] mx-auto w-full">
        <FadeIn>
          <p className="text-xs font-semibold tracking-[4px] text-[#C9A96E] mb-4">{isMn ? "ХОЛБОО БАРИХ" : "GET IN TOUCH"}</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-6xl font-bold text-[#FAFAFA]">{isMn ? "Холбоо барих" : "Contact Us"}</h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-12 max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Form */}
          <FadeIn className="lg:w-[600px]">
            <div>
              <h2 className="text-3xl font-semibold text-[#FAFAFA] mb-4">{isMn ? "Мессеж илгээх" : "Send us a message"}</h2>
              <p className="text-[15px] text-[#9A9590] mb-8">{isMn ? "Доорх маягтыг бөглөөд, бид 24 цагийн дотор хариу өгнө." : "Fill out the form below and our team will get back to you within 24 hours."}</p>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm text-[#FAFAFA] mb-2">{isMn ? "Бүтэн нэр" : "Full Name"}</label>
                  <input
                    type="text"
                    className="w-full h-12 px-4 bg-transparent border border-[#333333] rounded text-[#FAFAFA] focus:border-[#C9A96E] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#FAFAFA] mb-2">{isMn ? "Имэйл хаяг" : "Email Address"}</label>
                  <input
                    type="email"
                    className="w-full h-12 px-4 bg-transparent border border-[#333333] rounded text-[#FAFAFA] focus:border-[#C9A96E] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#FAFAFA] mb-2">{isMn ? "Утасны дугаар" : "Phone Number"}</label>
                  <input
                    type="tel"
                    className="w-full h-12 px-4 bg-transparent border border-[#333333] rounded text-[#FAFAFA] focus:border-[#C9A96E] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#FAFAFA] mb-2">{isMn ? "Гарчиг" : "Subject"}</label>
                  <input
                    type="text"
                    className="w-full h-12 px-4 bg-transparent border border-[#333333] rounded text-[#FAFAFA] focus:border-[#C9A96E] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#FAFAFA] mb-2">{isMn ? "Мессеж" : "Message"}</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-transparent border border-[#333333] rounded text-[#FAFAFA] focus:border-[#C9A96E] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-10 py-4 bg-[#C9A96E] text-[#0D0D0D] text-[15px] font-medium rounded-sm hover:bg-[#B8985D] transition-colors"
                >
                  {isMn ? "Илгээх" : "Send Message"}
                </button>
              </form>
            </div>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn delay={0.2} className="lg:flex-1">
            <div className="space-y-8">
              <h2 className="text-3xl font-semibold text-[#FAFAFA]">{isMn ? "Холбоо барих мэдээлэл" : "Contact Information"}</h2>

              <div>
                <h3 className="text-base font-medium text-[#FAFAFA] mb-2">{isMn ? "Showroom хаяг" : "Showroom Address"}</h3>
                <p className="text-[15px] text-[#9A9590] leading-relaxed">
                  Taij-Khurai Showroom<br />
                  {isMn ? "Хан-Уул дүүрэг, Улаанбаатар" : "Khan-Uul District, Ulaanbaatar"}<br />
                  {isMn ? "Монгол" : "Mongolia"}
                </p>
              </div>

              <div>
                <h3 className="text-base font-medium text-[#FAFAFA] mb-2">{isMn ? "Утас" : "Phone"}</h3>
                <p className="text-[15px] text-[#9A9590] leading-relaxed">
                  +976 11 33 4567<br />
                  +976 99 88 7654
                </p>
              </div>

              <div>
                <h3 className="text-base font-medium text-[#FAFAFA] mb-2">{isMn ? "Имэйл" : "Email"}</h3>
                <p className="text-[15px] text-[#9A9590] leading-relaxed">
                  hello@taijkhurai.mn<br />
                  info@taijkhurai.mn
                </p>
              </div>

              <div>
                <h3 className="text-base font-medium text-[#FAFAFA] mb-2">{isMn ? "Ажлын цаг" : "Business Hours"}</h3>
                <p className="text-[15px] text-[#9A9590] leading-relaxed">
                  {isMn ? "Даваа – Баасан: 9:00 – 18:00" : "Monday – Friday: 9:00 AM – 6:00 PM"}<br />
                  {isMn ? "Бямба: 10:00 – 16:00" : "Saturday: 10:00 AM – 4:00 PM"}<br />
                  {isMn ? "Ням: Амарна" : "Sunday: Closed"}
                </p>
              </div>

              <div className="relative h-[280px] rounded-lg overflow-hidden bg-[#1A1A1A]">
                <Image
                  src="/images/map.jpg"
                  alt="Map location"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
