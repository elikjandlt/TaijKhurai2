"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  Sparkles, ArrowRight, RotateCcw, Loader2, Box, X, Calculator
} from "lucide-react";

const furnitureTypes = [
  { id: "sofa", mn: "Буйдан", en: "Sofa", basePrice: 4500000 },
  { id: "table", mn: "Ширээ", en: "Table", basePrice: 1800000 },
  { id: "chair", mn: "Сандал", en: "Chair", basePrice: 850000 },
  { id: "bed", mn: "Ор", en: "Bed", basePrice: 3200000 },
  { id: "wardrobe", mn: "Тавиур", en: "Wardrobe", basePrice: 2800000 },
  { id: "shelf", mn: "Хадгалах", en: "Storage", basePrice: 1500000 },
];

const colors = [
  { id: "walnut", mn: "Самар мод", en: "Walnut", hex: "#5D4037", multiplier: 1.0 },
  { id: "oak", mn: "Арч мод", en: "Oak", hex: "#8D6E63", multiplier: 1.05 },
  { id: "black", mn: "Хар", en: "Black", hex: "#212121", multiplier: 1.1 },
  { id: "white", mn: "Цагаан", en: "White", hex: "#F5F5F5", multiplier: 1.0 },
  { id: "green", mn: "Ногоон", en: "Green", hex: "#2E7D32", multiplier: 1.15 },
  { id: "blue", mn: "Хөх", en: "Blue", hex: "#1565C0", multiplier: 1.15 },
];

const materials = [
  { id: "solid-wood", mn: "Бүтэн мод", en: "Solid Wood", multiplier: 1.3 },
  { id: "leather", mn: "Арьс", en: "Leather", multiplier: 1.5 },
  { id: "fabric", mn: "Даавуу", en: "Fabric", multiplier: 1.0 },
  { id: "metal", mn: "Төмөр", en: "Metal", multiplier: 1.4 },
  { id: "glass", mn: "Шил", en: "Glass", multiplier: 1.2 },
];

const styles = [
  { id: "minimal", mn: "Минимал", en: "Minimal", multiplier: 1.0 },
  { id: "scandinavian", mn: "Скандинав", en: "Scandinavian", multiplier: 1.05 },
  { id: "modern", mn: "Модерн", en: "Modern", multiplier: 1.1 },
  { id: "classic", mn: "Классик", en: "Classic", multiplier: 1.2 },
  { id: "industrial", mn: "Индастриал", en: "Industrial", multiplier: 1.15 },
];

const mockResults = [
  { id: 1, title: { mn: "Минимал буйдан", en: "Minimal Sofa" }, desc: { mn: "Цэвэр шугамтай, тав тухтай", en: "Clean lines, comfortable" }, img: "/images/collections/living.jpg" },
  { id: 2, title: { mn: "Скандинав ширээ", en: "Scandinavian Table" }, desc: { mn: "Байгалийн мод, энгийн загвар", en: "Natural wood, simple design" }, img: "/images/collections/dining.jpg" },
  { id: 3, title: { mn: "Модерн сандал", en: "Modern Chair" }, desc: { mn: "Орчин үеийн, функционал", en: "Contemporary, functional" }, img: "/images/collections/office.jpg" },
];

export default function AICustomizerPage({ locale }: { locale: string }) {
  const isEn = locale === "en";
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedResult, setSelectedResult] = useState<typeof mockResults[0] | null>(null);
  const [showPriceModal, setShowPriceModal] = useState(false);
  const [selections, setSelections] = useState({
    type: "",
    width: "",
    depth: "",
    height: "",
    color: "",
    material: "",
    style: "",
  });

  const updateSelection = (key: string, value: string) => {
    setSelections((prev) => ({ ...prev, [key]: value }));
  };

  const calculatePrice = () => {
    const type = furnitureTypes.find((t) => t.id === selections.type);
    const color = colors.find((c) => c.id === selections.color);
    const material = materials.find((m) => m.id === selections.material);
    const style = styles.find((s) => s.id === selections.style);

    const width = parseFloat(selections.width) || 0;
    const depth = parseFloat(selections.depth) || 0;
    const height = parseFloat(selections.height) || 0;
    const volume = (width * depth * height) / 1000000; // cubic meters

    const basePrice = type?.basePrice || 0;
    const dimensionFactor = Math.max(0.5, volume * 2.5); // scale by volume
    const materialMultiplier = material?.multiplier || 1;
    const colorMultiplier = color?.multiplier || 1;
    const styleMultiplier = style?.multiplier || 1;

    return Math.round(basePrice * dimensionFactor * materialMultiplier * colorMultiplier * styleMultiplier);
  };

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowResults(true);
    }, 2500);
  };

  const handleReset = () => {
    setStep(1);
    setShowResults(false);
    setSelectedResult(null);
    setShowPriceModal(false);
    setSelections({ type: "", width: "", depth: "", height: "", color: "", material: "", style: "" });
  };

  const getLocalePath = (path: string) => {
    if (path === "/") return `/${locale}`;
    return `/${locale}${path}`;
  };

  const openPriceModal = (result: typeof mockResults[0]) => {
    setSelectedResult(result);
    setShowPriceModal(true);
  };

  const closePriceModal = () => {
    setShowPriceModal(false);
    setSelectedResult(null);
  };

  const isStep1Complete = selections.type && selections.width && selections.depth && selections.height;
  const isStep2Complete = selections.color && selections.material && selections.style;

  return (
    <>
      {showPriceModal && selectedResult && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#0D0D0D]/60" onClick={closePriceModal} />
          <div className="relative bg-[#F5EFE6] rounded-sm max-w-md w-full p-8 border border-[#D4C8B8] shadow-lg">
            <button onClick={closePriceModal} className="absolute top-4 right-4 text-[#5A5A5A] hover:text-[#2B2B2B]">
              <X size={20} />
            </button>

            <div className="text-center mb-6">
              <Calculator size={32} className="text-[#B08968] mx-auto mb-3" />
              <h3 className="text-xl font-medium text-[#2B2B2B]">
                {isEn ? "Estimated Price" : "Тооцоолсон үнэ"}
              </h3>
            </div>

            <div className="aspect-[4/3] rounded-sm overflow-hidden mb-5">
              <img
                src={selectedResult.img}
                alt={selectedResult.title[locale as keyof typeof selectedResult.title]}
                className="w-full h-full object-cover"
              />
            </div>

            <h4 className="text-lg font-medium text-[#2B2B2B] mb-1">
              {selectedResult.title[locale as keyof typeof selectedResult.title]}
            </h4>
            <p className="text-sm text-[#5A5A5A] mb-5">
              {selectedResult.desc[locale as keyof typeof selectedResult.desc]}
            </p>

            <div className="space-y-3 mb-6">
              {[
                { label: isEn ? "Type" : "Төрөл", value: furnitureTypes.find((t) => t.id === selections.type)?.[locale as keyof typeof furnitureTypes[0]] },
                { label: isEn ? "Dimensions" : "Хэмжээ", value: `${selections.width} × ${selections.depth} × ${selections.height} cm` },
                { label: isEn ? "Material" : "Материал", value: materials.find((m) => m.id === selections.material)?.[locale as keyof typeof materials[0]] },
                { label: isEn ? "Style" : "Хэв маяг", value: styles.find((s) => s.id === selections.style)?.[locale as keyof typeof styles[0]] },
              ].map((item, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-[#5A5A5A]">{item.label}</span>
                  <span className="text-[#2B2B2B] font-medium">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="pt-5 border-t border-[#D4C8B8] flex justify-between items-center mb-6">
              <span className="text-sm text-[#5A5A5A]">{isEn ? "Total" : "Нийт"}</span>
              <span className="text-2xl font-semibold text-[#B08968]">
                {calculatePrice().toLocaleString()}₮
              </span>
            </div>

            <div className="flex gap-3">
              <button
                onClick={closePriceModal}
                className="flex-1 py-3 border border-[#D4C8B8] text-[#5A5A5A] text-sm font-semibold rounded-sm hover:border-[#B08968] transition-colors"
              >
                {isEn ? "Back" : "Буцах"}
              </button>
              <Link
                href={getLocalePath("/contact")}
                onClick={closePriceModal}
                className="flex-1 py-3 bg-[#B08968] text-[#F5EFE6] text-sm font-semibold rounded-sm hover:bg-[#9A7658] transition-colors text-center"
              >
                {isEn ? "Order Furniture" : "Тавилга захиалах"}
              </Link>
            </div>
          </div>
        </div>
      )}

      <section className="pt-32 pb-16">
        <div className="max-w-[1440px] mx-auto px-12">
          <FadeIn>
            <span className="inline-block text-[11px] font-semibold tracking-[3px] text-[#B08968] mb-3">
              {isEn ? "AI CUSTOMIZER" : "AI ЗАХИАЛГА"}
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-[48px] font-light text-[#2B2B2B] mb-6">
              {isEn ? "Design Your Perfect Furniture" : "Төгс тавилгаа зохио"}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg leading-relaxed text-[#5A5A5A] max-w-2xl">
              {isEn
                ? "Choose your preferences below and our AI will generate custom furniture designs tailored to your space."
                : "Доорх сонголтуудаа хийгээд, манай AI таны орон зайд зориулсан тавилгын дизайныг бүтээнэ."}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-[#E8D8C4]">
        <div className="max-w-[1000px] mx-auto px-12">
          {/* Step indicator */}
          <FadeIn>
            <div className="flex items-center justify-center gap-4 mb-12">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step >= s ? "bg-[#B08968] text-[#F5EFE6]" : "bg-white/10 text-[#5A5A5A]"
                  }`}>
                    {s}
                  </div>
                  {s < 3 && <div className={`w-16 h-[2px] ${step > s ? "bg-[#B08968]" : "bg-white/10"}`} />}
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Step 1: Type + Dimensions */}
          {step === 1 && !showResults && (
            <FadeIn>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-[#2B2B2B] mb-4">
                    {isEn ? "1. Choose Furniture Type" : "1. Тавилгын төрөл сонгох"}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {furnitureTypes.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => updateSelection("type", t.id)}
                        className={`p-4 rounded-sm border text-left transition-all ${
                          selections.type === t.id
                            ? "border-[#B08968] bg-[#B08968]/10 text-[#2B2B2B]"
                            : "border-[#D4C8B8] bg-[#F5EFE6] text-[#5A5A5A] hover:border-[#B08968]"
                        }`}
                      >
                        <Box size={20} className="mb-2 text-[#B08968]" />
                        <span className="text-sm font-medium">{t[locale as keyof typeof t]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-[#2B2B2B] mb-4">
                    {isEn ? "2. Enter Dimensions (cm)" : "2. Хэмжээ оруулах (см)"}
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { key: "width", label: isEn ? "Width" : "Өргөн" },
                      { key: "depth", label: isEn ? "Depth" : "Гүн" },
                      { key: "height", label: isEn ? "Height" : "Өндөр" },
                    ].map((dim) => (
                      <div key={dim.key}>
                        <label className="block text-xs text-[#5A5A5A] mb-2">{dim.label}</label>
                        <input
                          type="number"
                          value={selections[dim.key as keyof typeof selections]}
                          onChange={(e) => updateSelection(dim.key, e.target.value)}
                          className="w-full px-4 py-3 bg-[#F5EFE6] border border-[#D4C8B8] rounded-sm text-sm text-[#2B2B2B] placeholder-[#7D7D7D] focus:outline-none focus:border-[#B08968]/50"
                          placeholder="0"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    disabled={!isStep1Complete}
                    className={`inline-flex items-center gap-2 px-8 py-4 rounded-sm text-sm font-semibold transition-colors ${
                      isStep1Complete
                        ? "bg-[#B08968] text-[#F5EFE6] hover:bg-[#9A7658]"
                        : "bg-white/10 text-[#5A5A5A] cursor-not-allowed"
                    }`}
                  >
                    {isEn ? "Next" : "Дараах"}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </FadeIn>
          )}

          {/* Step 2: Color + Material + Style */}
          {step === 2 && !showResults && (
            <FadeIn>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-[#2B2B2B] mb-4">
                    {isEn ? "3. Choose Color" : "3. Өнгө сонгох"}
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                    {colors.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => updateSelection("color", c.id)}
                        className={`p-3 rounded-sm border text-center transition-all ${
                          selections.color === c.id
                            ? "border-[#B08968] bg-[#B08968]/10"
                            : "border-[#D4C8B8] bg-[#F5EFE6] hover:border-[#B08968]"
                        }`}
                      >
                        <div className="w-8 h-8 rounded-full mx-auto mb-2" style={{ backgroundColor: c.hex }} />
                        <span className="text-xs text-[#5A5A5A]">{c[locale as keyof typeof c]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-[#2B2B2B] mb-4">
                    {isEn ? "4. Choose Material" : "4. Материал сонгох"}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                    {materials.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => updateSelection("material", m.id)}
                        className={`p-4 rounded-sm border text-center transition-all ${
                          selections.material === m.id
                            ? "border-[#B08968] bg-[#B08968]/10 text-[#2B2B2B]"
                            : "border-[#D4C8B8] bg-[#F5EFE6] text-[#5A5A5A] hover:border-[#B08968]"
                        }`}
                      >
                        <span className="text-sm">{m[locale as keyof typeof m]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-[#2B2B2B] mb-4">
                    {isEn ? "5. Choose Style" : "5. Хэв маяг сонгох"}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                    {styles.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => updateSelection("style", s.id)}
                        className={`p-4 rounded-sm border text-center transition-all ${
                          selections.style === s.id
                            ? "border-[#B08968] bg-[#B08968]/10 text-[#2B2B2B]"
                            : "border-[#D4C8B8] bg-[#F5EFE6] text-[#5A5A5A] hover:border-[#B08968]"
                        }`}
                      >
                        <span className="text-sm">{s[locale as keyof typeof s]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-[#D4C8B8] text-[#5A5A5A] text-sm rounded-sm hover:border-[#B08968] transition-colors"
                  >
                    <ArrowRight size={16} className="rotate-180" />
                    {isEn ? "Back" : "Буцах"}
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!isStep2Complete}
                    className={`inline-flex items-center gap-2 px-8 py-4 rounded-sm text-sm font-semibold transition-colors ${
                      isStep2Complete
                        ? "bg-[#B08968] text-[#F5EFE6] hover:bg-[#9A7658]"
                        : "bg-white/10 text-[#5A5A5A] cursor-not-allowed"
                    }`}
                  >
                    {isEn ? "Next" : "Дараах"}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </FadeIn>
          )}

          {/* Step 3: Generate */}
          {step === 3 && !showResults && (
            <FadeIn>
              <div className="space-y-8">
                <div className="p-6 rounded-sm bg-[#F5EFE6] border border-[#D4C8B8] shadow-sm">
                  <h3 className="text-xl font-medium text-[#2B2B2B] mb-6">
                    {isEn ? "Your Selections" : "Таны сонголтууд"}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[
                      { label: isEn ? "Type" : "Төрөл", value: furnitureTypes.find((t) => t.id === selections.type)?.[locale as keyof typeof furnitureTypes[0]] },
                      { label: isEn ? "Dimensions" : "Хэмжээ", value: `${selections.width} × ${selections.depth} × ${selections.height} cm` },
                      { label: isEn ? "Color" : "Өнгө", value: colors.find((c) => c.id === selections.color)?.[locale as keyof typeof colors[0]] },
                      { label: isEn ? "Material" : "Материал", value: materials.find((m) => m.id === selections.material)?.[locale as keyof typeof materials[0]] },
                      { label: isEn ? "Style" : "Хэв маяг", value: styles.find((s) => s.id === selections.style)?.[locale as keyof typeof styles[0]] },
                    ].map((item, i) => (
                      <div key={i} className="p-3 rounded-sm bg-[#F0E4D6]">
                        <p className="text-xs text-[#5A5A5A] mb-1">{item.label}</p>
                        <p className="text-sm text-[#2B2B2B] font-medium">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-[#D4C8B8] text-[#5A5A5A] text-sm rounded-sm hover:border-[#B08968] transition-colors"
                  >
                    <ArrowRight size={16} className="rotate-180" />
                    {isEn ? "Back" : "Буцах"}
                  </button>
                  <button
                    onClick={handleGenerate}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#B08968] text-[#F5EFE6] text-sm font-semibold rounded-sm hover:bg-[#9A7658] transition-colors"
                  >
                    <Sparkles size={16} />
                    {isEn ? "Generate Design" : "Дизайн үүсгэх"}
                  </button>
                </div>
              </div>
            </FadeIn>
          )}

          {/* Loading */}
          {loading && (
            <div className="text-center py-16">
              <Loader2 size={48} className="text-[#B08968] mx-auto mb-6 animate-spin" />
              <p className="text-lg text-[#2B2B2B] mb-2">
                {isEn ? "AI is designing your furniture..." : "AI таны тавилгыг зохиож байна..."}
              </p>
              <p className="text-sm text-[#5A5A5A]">
                {isEn ? "Analyzing dimensions, materials, and style preferences" : "Хэмжээ, материал, хэв маягийг шинжилж байна"}
              </p>
            </div>
          )}

          {/* Results */}
          {showResults && (
            <FadeIn>
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <Sparkles size={32} className="text-[#B08968] mx-auto mb-4" />
                  <h3 className="text-2xl font-medium text-[#2B2B2B] mb-2">
                    {isEn ? "Your AI-Generated Designs" : "Таны AI Дизайнууд"}
                  </h3>
                  <p className="text-sm text-[#5A5A5A]">
                    {isEn ? "Based on your selections, here are 3 custom designs" : "Таны сонголтуудад үндэслэн 3 захиалгат дизайн"}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {mockResults.map((result, i) => (
                    <div key={result.id} className="p-6 rounded-sm bg-[#F5EFE6] border border-[#D4C8B8] shadow-sm">
                      <div className="aspect-[4/3] rounded-sm overflow-hidden mb-4">
                        <img
                          src={result.img}
                          alt={result.title[locale as keyof typeof result.title]}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-lg font-medium text-[#2B2B2B] mb-1">
                        {result.title[locale as keyof typeof result.title]}
                      </h4>
                      <p className="text-sm text-[#5A5A5A] mb-4">
                        {result.desc[locale as keyof typeof result.desc]}
                      </p>
                      <div className="space-y-2 mb-4">
                        {[
                          `${selections.width} × ${selections.depth} × ${selections.height} cm`,
                          colors.find((c) => c.id === selections.color)?.[locale as keyof typeof colors[0]],
                          materials.find((m) => m.id === selections.material)?.[locale as keyof typeof materials[0]],
                          styles.find((s) => s.id === selections.style)?.[locale as keyof typeof styles[0]],
                        ].map((tag, j) => (
                          <span key={j} className="inline-block px-3 py-1 text-xs bg-[#D4C8B8] text-[#5A5A5A] rounded-sm mr-2">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button onClick={() => openPriceModal(result)} className="w-full py-3 bg-[#B08968] text-[#F5EFE6] text-sm font-semibold rounded-sm hover:bg-[#9A7658] transition-colors">
                        {isEn ? "Order This Design" : "Энэ дизайныг захиалах"}
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-[#D4C8B8] text-[#5A5A5A] text-sm rounded-sm hover:border-[#B08968] transition-colors"
                  >
                    <RotateCcw size={16} />
                    {isEn ? "Start Over" : "Дахин эхлэх"}
                  </button>
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </section>
    </>
  );
}
