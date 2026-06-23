"use client";

import { useState } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";

export default function ContactPage({ locale }: { locale: string }) {
  const isEn = locale === "en";
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const consultations = JSON.parse(localStorage.getItem("taijkhurai-consultations") || "[]");
    consultations.push({ ...form, date: new Date().toISOString(), locale });
    localStorage.setItem("taijkhurai-consultations", JSON.stringify(consultations));
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const content = {
    label: isEn ? "CONTACT" : "ХОЛБОО БАРИХ",
    title: isEn ? "Let's Create Together" : "Хамтдаа бүтээе",
    subtitle: isEn
      ? "Have a project in mind? Reach out and let's discuss how we can bring your vision to life."
      : "Төсөл байна уу? Холбогдоод, таны хүслийг хэрхэн биелүүлэхээ ярилцъя.",
    info: [
      { icon: MapPin, label: isEn ? "Address" : "Хаяг", value: "Ulaanbaatar, Mongolia" },
      { icon: Phone, label: isEn ? "Phone" : "Утас", value: "+976 9911 2233" },
      { icon: Mail, label: isEn ? "Email" : "Имэйл", value: "hello@taijkhurai.mn" },
      { icon: Clock, label: isEn ? "Hours" : "Цагийн хуваарь", value: "Mon–Fri, 9:00–18:00" },
    ],
    form: {
      name: isEn ? "Name" : "Нэр",
      email: isEn ? "Email" : "Имэйл",
      phone: isEn ? "Phone" : "Утас",
      message: isEn ? "Message" : "Зурвас",
      submit: isEn ? "Send Message" : "Зурвас илгээх",
    },
    success: isEn
      ? "Thank you! We will contact you soon."
      : "Баярлалаа! Бид удахгүй холбогдох болно.",
  };

  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-[1440px] mx-auto px-12">
          <FadeIn>
            <span className="inline-block text-[11px] font-semibold tracking-[3px] text-[#B08968] mb-3">
              {content.label}
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-[48px] font-light text-[#2B2B2B] mb-6">
              {content.title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg leading-relaxed text-[#5A5A5A] max-w-xl">
              {content.subtitle}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-[#E8D8C4]">
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              {content.info.map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-[#B08968]/10 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-[#B08968]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#5A5A5A] mb-1">{item.label}</p>
                      <p className="text-sm text-[#2B2B2B]">{item.value}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.2}>
              {submitted ? (
                <div className="p-8 rounded-sm bg-[#B08968]/10 border border-[#B08968]/20 text-center">
                  <CheckCircle size={48} className="text-[#B08968] mx-auto mb-4" />
                  <p className="text-lg text-[#2B2B2B] mb-2">{content.success}</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm text-[#B08968] hover:text-[#9A7658]"
                  >
                    {isEn ? "Send another message" : "Өөр зурвас илгээх"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs text-[#5A5A5A] mb-2">{content.form.name} *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#F5EFE6] border border-[#D4C8B8] rounded-sm text-sm text-[#2B2B2B] placeholder-[#7D7D7D] focus:outline-none focus:border-[#B08968]/50"
                        placeholder={content.form.name}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#5A5A5A] mb-2">{content.form.email} *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#F5EFE6] border border-[#D4C8B8] rounded-sm text-sm text-[#2B2B2B] placeholder-[#7D7D7D] focus:outline-none focus:border-[#B08968]/50"
                        placeholder={content.form.email}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-[#5A5A5A] mb-2">{content.form.phone}</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F5EFE6] border border-[#D4C8B8] rounded-sm text-sm text-[#2B2B2B] placeholder-[#7D7D7D] focus:outline-none focus:border-[#B08968]/50"
                      placeholder={content.form.phone}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#5A5A5A] mb-2">{content.form.message} *</label>
                    <textarea
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F5EFE6] border border-[#D4C8B8] rounded-sm text-sm text-[#2B2B2B] placeholder-[#7D7D7D] focus:outline-none focus:border-[#B08968]/50 resize-none"
                      placeholder={content.form.message}
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-4 bg-[#B08968] text-[#F5EFE6] text-sm font-semibold rounded-sm hover:bg-[#9A7658] transition-colors"
                  >
                    {content.form.submit}
                  </button>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
