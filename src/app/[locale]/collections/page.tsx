import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections | Taij-Khurai",
  description: "Explore our premium furniture collections for living room, bedroom, dining, and office.",
};

export default function CollectionsPage() {
  return (
    <div className="pt-32 pb-16 px-12 max-w-[1440px] mx-auto">
      <h1 className="text-5xl font-bold text-[#FAFAFA] mb-8">Collections</h1>
      <p className="text-lg text-[#9A9590]">Coming soon — explore our curated furniture collections.</p>
    </div>
  );
}
