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
            <span className="inline-block text-[11px] font-semibold tracking-[3px] text-[#C9A96E] mb-3">
              {content.label}
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-[48px] font-light text-[#FAFAFA] mb-6">
              {content.title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg leading-relaxed text-[#B5B0AB] max-w-xl">
              {content.subtitle}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-[#111111]">
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              {content.info.map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-[#C9A96E]/10 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-[#C9A96E]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#9A9590] mb-1">{item.label}</p>
                      <p className="text-sm text-[#FAFAFA]">{item.value}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.2}>
              {submitted ? (
                <div className="p-8 rounded-sm bg-[#C9A96E]/10 border border-[#C9A96E]/20 text-center">
                  <CheckCircle size={48} className="text-[#C9A96E] mx-auto mb-4" />
                  <p className="text-lg text-[#FAFAFA] mb-2">{content.success}</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm text-[#C9A96E] hover:text-[#B8985D]"
                  >
                    {isEn ? "Send another message" : "Өөр зурвас илгээх"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs text-[#9A9590] mb-2">{content.form.name} *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-sm text-sm text-[#FAFAFA] placeholder-[#5A5A5A] focus:outline-none focus:border-[#C9A96E]/50"
                        placeholder={content.form.name}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#9A9590] mb-2">{content.form.email} *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-sm text-sm text-[#FAFAFA] placeholder-[#5A5A5A] focus:outline-none focus:border-[#C9A96E]/50"
                        placeholder={content.form.email}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-[#9A9590] mb-2">{content.form.phone}</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-sm text-sm text-[#FAFAFA] placeholder-[#5A5A5A] focus:outline-none focus:border-[#C9A96E]/50"
                      placeholder={content.form.phone}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#9A9590] mb-2">{content.form.message} *</label>
                    <textarea
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-sm text-sm text-[#FAFAFA] placeholder-[#5A5A5A] focus:outline-none focus:border-[#C9A96E]/50 resize-none"
                      placeholder={content.form.message}
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-4 bg-[#C9A96E] text-[#0D0D0D] text-sm font-semibold rounded-sm hover:bg-[#B8985D] transition-colors"
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
