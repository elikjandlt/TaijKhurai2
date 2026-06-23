import { notFound } from "next/navigation";
import PortfolioDetailPage from "@/components/sections/PortfolioDetailPage";

const projects = [
  { slug: "ulaanbaatar-penthouse", id: "01", title: { mn: "Улаанбаатар пентхаус", en: "Ulaanbaatar Penthouse" }, category: { mn: "Зочны өрөө", en: "Living Room" }, img: "/images/portfolio/apartment.jpg" },
  { slug: "gobi-villa", id: "02", title: { mn: "Говийн вилла", en: "Gobi Villa" }, category: { mn: "Унтлагын өрөө", en: "Bedroom" }, img: "/images/portfolio/hotel.jpg" },
  { slug: "tech-office", id: "03", title: { mn: "Технологийн оффис", en: "Tech Office" }, category: { mn: "Оффис", en: "Office" }, img: "/images/portfolio/office.jpg" },
  { slug: "dining-refresh", id: "04", title: { mn: "Хоолны өрөөний шинэчлэл", en: "Dining Room Refresh" }, category: { mn: "Хоолны өрөө", en: "Dining" }, img: "/images/collections/dining.jpg" },
  { slug: "kids-room", id: "05", title: { mn: "Хүүхдийн өрөө", en: "Kids Room" }, category: { mn: "Хүүхдийн өрөө", en: "Kids" }, img: "/images/collections/bedroom.jpg" },
  { slug: "hotel-lobby", id: "06", title: { mn: "Зочид буудлын лобби", en: "Hotel Lobby" }, category: { mn: "Лобби", en: "Lobby" }, img: "/images/collections/living.jpg" },
];

export function generateStaticParams({ params }: { params: { locale: string } }) {
  return projects.map((p) => ({ locale: params.locale, slug: p.slug }));
}

export default async function PortfolioDetail({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return <PortfolioDetailPage locale={locale} project={project} />;
}
