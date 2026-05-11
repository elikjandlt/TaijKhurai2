import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WorksSection from "@/components/sections/WorksSection";
import AICustomizerSection from "@/components/sections/AICustomizerSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogSection from "@/components/sections/BlogSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage({ locale }: { locale: string }) {
  return (
    <>
      <HeroSection locale={locale} />
      <AboutSection locale={locale} />
      <WorksSection locale={locale} />
      <AICustomizerSection locale={locale} />
      <TestimonialsSection locale={locale} />
      <BlogSection locale={locale} />
      <CTASection locale={locale} />
    </>
  );
}
