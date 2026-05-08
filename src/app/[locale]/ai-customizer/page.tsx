import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Customizer | Taij-Khurai",
  description: "Design your perfect furniture piece with our AI-powered customization tool.",
};

export default function AICustomizerPage() {
  return (
    <div className="pt-32 pb-16 px-12 max-w-[1440px] mx-auto">
      <h1 className="text-5xl font-bold text-[#FAFAFA] mb-8">AI Customizer</h1>
      <p className="text-lg text-[#9A9590]">Coming soon — design your perfect furniture piece with our AI-powered tool.</p>
    </div>
  );
}
