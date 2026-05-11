import BlogPage from "@/components/sections/BlogPage";

export default async function Blog({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <BlogPage locale={locale} />;
}
