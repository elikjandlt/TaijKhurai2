import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Taij-Khurai",
  description: "View our portfolio of transformed spaces and custom furniture projects.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-32 pb-16 px-12 max-w-[1440px] mx-auto">
      <h1 className="text-5xl font-bold text-[#FAFAFA] mb-8">Portfolio</h1>
      <p className="text-lg text-[#9A9590]">Coming soon — view our portfolio of transformed spaces.</p>
    </div>
  );
}
