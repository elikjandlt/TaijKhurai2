import CollectionsPage from "@/components/sections/CollectionsPage";

export default async function Collections({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <CollectionsPage locale={locale} />;
}
