import ServicesPage from "@/components/sections/ServicesPage";

export default async function Services({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <ServicesPage locale={locale} />;
}
