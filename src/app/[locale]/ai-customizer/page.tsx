import AICustomizerPage from "@/components/sections/AICustomizerPage";

export default async function AICustomizer({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <AICustomizerPage locale={locale} />;
}
