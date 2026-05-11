"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  Sparkles, ArrowRight, RotateCcw, Loader2, Box
} from "lucide-react";

const furnitureTypes = [
  { id: "sofa", mn: "Буйдан", en: "Sofa" },
  { id: "table", mn: "Ширээ", en: "Table" },
  { id: "chair", mn: "Сандал", en: "Chair" },
  { id: "bed", mn: "Ор", en: "Bed" },
  { id: "wardrobe", mn: "Тавиур", en: "Wardrobe" },
  { id: "shelf", mn: "Хадгалах", en: "Storage" },
];

const colors = [
  { id: "walnut", mn: "Самар мод", en: "Walnut", hex: "#5D4037" },
  { id: "oak", mn: "Арч мод", en: "Oak", hex: "#8D6E63" },
  { id: "black", mn: "Хар", en: "Black", hex: "#212121" },
  { id: "white", mn: "Цагаан", en: "White", hex: "#F5F5F5" },
  { id: "green", mn: "Ногоон", en: "Green", hex: "#2E7D32" },
  { id: "blue", mn: "Хөх", en: "Blue", hex: "#1565C0" },
];

const materials = [
  { id: "solid-wood", mn: "Бүтэн мод", en: "Solid Wood" },
  { id: "leather", mn: "Арьс", en: "Leather" },
  { id: "fabric", mn: "Даавуу", en: "Fabric" },
  { id: "metal", mn: "Төмөр", en: "Metal" },
  { id: "glass", mn: "Шил", en: "Glass" },
];

const styles = [
  { id: "minimal", mn: "Минимал", en: "Minimal" },
  { id: "scandinavian", mn: "Скандинав", en: "Scandinavian" },
  { id: "modern", mn: "Модерн", en: "Modern" },
  { id: "classic", mn: "Классик", en: "Classic" },
  { id: "industrial", mn: "Индастриал", en: "Industrial" },
];

const mockResults = [
  { id: 1, title: { mn: "Минимал буйдан", en: "Minimal Sofa" }, desc: { mn: "Цэвэр шугамтай, тав тухтай", en: "Clean lines, comfortable" } },
  { id: 2, title: { mn: "Скандинав ширээ", en: "Scandinavian Table" }, desc: { mn: "Байгалийн мод, энгийн загвар", en: "Natural wood, simple design" } },
  { id: 3, title: { mn: "Модерн сандал", en: "Modern Chair" }, desc: { mn: "Орчин үеийн, функционал", en: "Contemporary, functional" } },
];

export default function AICustomizerPage({ locale }: { locale: string }) {
  const isEn = locale === "en";
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
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
    setSelections({ type: "", width: "", depth: "", height: "", color: "", material: "", style: "" });
  };

  const isStep1Complete = selections.type && selections.width && selections.depth && selections.height;
  const isStep2Complete = selections.color && selections.material && selections.style;

  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-[1440px] mx-auto px-12">
          <FadeIn>
            <span className="inline-block text-[11px] font-semibold tracking-[3px] text-[#C9A96E] mb-3">
              {isEn ? "AI CUSTOMIZER" : "AI ЗАХИАЛГА"}
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-[48px] font-light text-[#FAFAFA] mb-6">
              {isEn ? "Design Your Perfect Furniture" : "Төгс тавилгаа зохио"}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg leading-relaxed text-[#B5B0AB] max-w-2xl">
              {isEn
                ? "Choose your preferences below and our AI will generate custom furniture designs tailored to your space."
                : "Доорх сонголтуудаа хийгээд, манай AI таны орон зайд зориулсан тавилгын дизайныг бүтээнэ."}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-[#111111]">
        <div className="max-w-[1000px] mx-auto px-12">
          {/* Step indicator */}
          <FadeIn>
            <div className="flex items-center justify-center gap-4 mb-12">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step >= s ? "bg-[#C9A96E] text-[#0D0D0D]" : "bg-white/10 text-[#9A9590]"
                  }`}>
                    {s}
                  </div>
                  {s < 3 && <div className={`w-16 h-[2px] ${step > s ? "bg-[#C9A96E]" : "bg-white/10"}`} />}
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Step 1: Type + Dimensions */}
          {step === 1 && !showResults && (
            <FadeIn>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-[#FAFAFA] mb-4">
                    {isEn ? "1. Choose Furniture Type" : "1. Тавилгын төрөл сонгох"}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {furnitureTypes.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => updateSelection("type", t.id)}
                        className={`p-4 rounded-sm border text-left transition-all ${
                          selections.type === t.id
                            ? "border-[#C9A96E] bg-[#C9A96E]/10 text-[#FAFAFA]"
                            : "border-white/10 bg-white/[0.03] text-[#B5B0AB] hover:border-white/20"
                        }`}
                      >
                        <Box size={20} className="mb-2 text-[#C9A96E]" />
                        <span className="text-sm font-medium">{t[locale as keyof typeof t]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-[#FAFAFA] mb-4">
                    {isEn ? "2. Enter Dimensions (cm)" : "2. Хэмжээ оруулах (см)"}
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { key: "width", label: isEn ? "Width" : "Өргөн" },
                      { key: "depth", label: isEn ? "Depth" : "Гүн" },
                      { key: "height", label: isEn ? "Height" : "Өндөр" },
                    ].map((dim) => (
                      <div key={dim.key}>
                        <label className="block text-xs text-[#9A9590] mb-2">{dim.label}</label>
                        <input
                          type="number"
                          value={selections[dim.key as keyof typeof selections]}
                          onChange={(e) => updateSelection(dim.key, e.target.value)}
                          className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-sm text-sm text-[#FAFAFA] placeholder-[#5A5A5A] focus:outline-none focus:border-[#C9A96E]/50"
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
                        ? "bg-[#C9A96E] text-[#0D0D0D] hover:bg-[#B8985D]"
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
                  <h3 className="text-xl font-medium text-[#FAFAFA] mb-4">
                    {isEn ? "3. Choose Color" : "3. Өнгө сонгох"}
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                    {colors.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => updateSelection("color", c.id)}
                        className={`p-3 rounded-sm border text-center transition-all ${
                          selections.color === c.id
                            ? "border-[#C9A96E] bg-[#C9A96E]/10"
                            : "border-white/10 bg-white/[0.03] hover:border-white/20"
                        }`}
                      >
                        <div className="w-8 h-8 rounded-full mx-auto mb-2" style={{ backgroundColor: c.hex }} />
                        <span className="text-xs text-[#B5B0AB]">{c[locale as keyof typeof c]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-[#FAFAFA] mb-4">
                    {isEn ? "4. Choose Material" : "4. Материал сонгох"}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                    {materials.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => updateSelection("material", m.id)}
                        className={`p-4 rounded-sm border text-center transition-all ${
                          selections.material === m.id
                            ? "border-[#C9A96E] bg-[#C9A96E]/10 text-[#FAFAFA]"
                            : "border-white/10 bg-white/[0.03] text-[#B5B0AB] hover:border-white/20"
                        }`}
                      >
                        <span className="text-sm">{m[locale as keyof typeof m]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-[#FAFAFA] mb-4">
                    {isEn ? "5. Choose Style" : "5. Хэв маяг сонгох"}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                    {styles.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => updateSelection("style", s.id)}
                        className={`p-4 rounded-sm border text-center transition-all ${
                          selections.style === s.id
                            ? "border-[#C9A96E] bg-[#C9A96E]/10 text-[#FAFAFA]"
                            : "border-white/10 bg-white/[0.03] text-[#B5B0AB] hover:border-white/20"
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
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-[#B5B0AB] text-sm rounded-sm hover:border-white/20 transition-colors"
                  >
                    <ArrowRight size={16} className="rotate-180" />
                    {isEn ? "Back" : "Буцах"}
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!isStep2Complete}
                    className={`inline-flex items-center gap-2 px-8 py-4 rounded-sm text-sm font-semibold transition-colors ${
                      isStep2Complete
                        ? "bg-[#C9A96E] text-[#0D0D0D] hover:bg-[#B8985D]"
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
                <div className="p-6 rounded-sm bg-white/[0.03] border border-white/5">
                  <h3 className="text-xl font-medium text-[#FAFAFA] mb-6">
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
                      <div key={i} className="p-3 rounded-sm bg-white/[0.02]">
                        <p className="text-xs text-[#9A9590] mb-1">{item.label}</p>
                        <p className="text-sm text-[#FAFAFA] font-medium">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-[#B5B0AB] text-sm rounded-sm hover:border-white/20 transition-colors"
                  >
                    <ArrowRight size={16} className="rotate-180" />
                    {isEn ? "Back" : "Буцах"}
                  </button>
                  <button
                    onClick={handleGenerate}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A96E] text-[#0D0D0D] text-sm font-semibold rounded-sm hover:bg-[#B8985D] transition-colors"
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
              <Loader2 size={48} className="text-[#C9A96E] mx-auto mb-6 animate-spin" />
              <p className="text-lg text-[#FAFAFA] mb-2">
                {isEn ? "AI is designing your furniture..." : "AI таны тавилгыг зохиож байна..."}
              </p>
              <p className="text-sm text-[#9A9590]">
                {isEn ? "Analyzing dimensions, materials, and style preferences" : "Хэмжээ, материал, хэв маягийг шинжилж байна"}
              </p>
            </div>
          )}

          {/* Results */}
          {showResults && (
            <FadeIn>
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <Sparkles size={32} className="text-[#C9A96E] mx-auto mb-4" />
                  <h3 className="text-2xl font-medium text-[#FAFAFA] mb-2">
                    {isEn ? "Your AI-Generated Designs" : "Таны AI Дизайнууд"}
                  </h3>
                  <p className="text-sm text-[#9A9590]">
                    {isEn ? "Based on your selections, here are 3 custom designs" : "Таны сонголтуудад үндэслэн 3 захиалгат дизайн"}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {mockResults.map((result, i) => (
                    <div key={result.id} className="p-6 rounded-sm bg-white/[0.03] border border-white/5">
                      <div className="aspect-[4/3] rounded-sm bg-[#1A1A1A] mb-4 flex items-center justify-center">
                        <Box size={48} className="text-[#C9A96E]/30" />
                      </div>
                      <h4 className="text-lg font-medium text-[#FAFAFA] mb-1">
                        {result.title[locale as keyof typeof result.title]} {i + 1}
                      </h4>
                      <p className="text-sm text-[#9A9590] mb-4">
                        {result.desc[locale as keyof typeof result.desc]}
                      </p>
                      <div className="space-y-2 mb-4">
                        {[
                          `${selections.width} × ${selections.depth} × ${selections.height} cm`,
                          colors.find((c) => c.id === selections.color)?.[locale as keyof typeof colors[0]],
                          materials.find((m) => m.id === selections.material)?.[locale as keyof typeof materials[0]],
                          styles.find((s) => s.id === selections.style)?.[locale as keyof typeof styles[0]],
                        ].map((tag, j) => (
                          <span key={j} className="inline-block px-3 py-1 text-xs bg-white/[0.05] text-[#B5B0AB] rounded-sm mr-2">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="w-full py-3 bg-[#C9A96E] text-[#0D0D0D] text-sm font-semibold rounded-sm hover:bg-[#B8985D] transition-colors">
                        {isEn ? "Order This Design" : "Энэ дизайныг захиалах"}
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-[#B5B0AB] text-sm rounded-sm hover:border-white/20 transition-colors"
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
