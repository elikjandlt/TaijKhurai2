import PortfolioPage from "@/components/sections/PortfolioPage";

export default async function Portfolio({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <PortfolioPage locale={locale} />;
}
