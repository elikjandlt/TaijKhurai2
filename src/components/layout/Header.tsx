"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart, User, X, Plus, Minus, Trash2, Check, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { useAuth } from "@/lib/auth-context";

const navLabels: Record<string, Record<string, string>> = {
  mn: {
    home: "Нүүр",
    about: "Бид",
    works: "Бүтээгдэхүүнүүд",
    aiCustomizer: "AI Захиалга",
    blog: "Блог",
    contact: "Холбоо барих",
    bookConsultation: "Зөвлөгөө авах",
  },
  en: {
    home: "Home",
    about: "About",
    works: "Products",
    aiCustomizer: "AI Customizer",
    blog: "Blog",
    contact: "Contact",
    bookConsultation: "Book Consultation",
  },
};

function useCurrentLocale(): string {
  const pathname = usePathname();
  const segments = pathname.split("/");
  return segments[1] === "en" ? "en" : "mn";
}

function localePath(path: string, locale: string): string {
  if (path === "/") return `/${locale}`;
  return `/${locale}${path}`;
}

export default function Header() {
  const locale = useCurrentLocale();
  const t = navLabels[locale] ?? navLabels.mn;
  const { totalItems, items, removeItem, updateQty, totalPrice, clearCart } = useCart();
  const { user, logout } = useAuth();
  const [showCart, setShowCart] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [showCheckout, setShowCheckout] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const navItems = [
    { label: t.home, href: "/" },
    { label: t.about, href: "/about" },
    { label: t.works, href: "/collections" },
    { label: t.aiCustomizer, href: "/ai-customizer" },
    { label: t.blog, href: "/blog" },
    { label: t.contact, href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-12 h-20 flex items-center justify-between">
          <Link href={localePath("/", locale)} className="text-[22px] font-semibold tracking-[2px] text-[#FAFAFA]">
            Taij-Khurai
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={localePath(item.href, locale)}
                className="text-sm text-[#B5B0AB] transition-colors hover:text-[#FAFAFA]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <button
              onClick={() => setShowSearch(true)}
              className="text-[#B5B0AB] hover:text-[#FAFAFA] transition-colors"
            >
              <Search size={20} />
            </button>

            <button
              onClick={() => setShowCart(true)}
              className="relative text-[#B5B0AB] hover:text-[#FAFAFA] transition-colors"
            >
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#C9A96E] text-[#0D0D0D] text-xs rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>

            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-[#B5B0AB]">{user.name}</span>
                <button
                  onClick={logout}
                  className="text-xs text-[#9A9590] hover:text-[#FAFAFA] transition-colors"
                >
                  {locale === "mn" ? "Гарах" : "Logout"}
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowAuth(true)}
                className="text-[#B5B0AB] hover:text-[#FAFAFA] transition-colors"
              >
                <User size={20} />
              </button>
            )}

            <LocaleSwitcher currentLocale={locale} />
            <Link
              href={localePath("/contact", locale)}
              className="hidden sm:flex items-center px-6 py-3 bg-[#C9A96E] text-[#0D0D0D] text-[13px] font-medium rounded-sm hover:bg-[#B8985D] transition-colors"
            >
              {t.bookConsultation}
            </Link>
          </div>
        </div>
      </header>

      {/* Cart Drawer */}
      {showCart && (
        <div className="fixed inset-0 z-[100]">
          <div className="absolute inset-0 bg-[#0D0D0D]/80" onClick={() => setShowCart(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[#111111] border-l border-white/5 flex flex-col">
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <h3 className="text-xl font-medium text-[#FAFAFA]">
                {locale === "mn" ? "Сагс" : "Cart"} ({totalItems})
              </h3>
              <button onClick={() => setShowCart(false)} className="text-[#B5B0AB] hover:text-[#FAFAFA]">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <p className="text-center text-[#9A9590] py-12">
                  {locale === "mn" ? "Сагс хоосон байна" : "Your cart is empty"}
                </p>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 rounded-sm bg-white/[0.03]">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-sm" />
                      <div className="flex-1">
                        <p className="text-sm text-[#FAFAFA] font-medium">{item.name}</p>
                        <p className="text-xs text-[#9A9590] mb-2">{item.collection}</p>
                        <p className="text-sm text-[#C9A96E] mb-2">{item.priceDisplay}</p>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            className="w-7 h-7 rounded-sm bg-white/[0.05] flex items-center justify-center text-[#B5B0AB] hover:bg-white/10"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm text-[#FAFAFA] w-6 text-center">{item.qty}</span>
                          <button
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            className="w-7 h-7 rounded-sm bg-white/[0.05] flex items-center justify-center text-[#B5B0AB] hover:bg-white/10"
                          >
                            <Plus size={14} />
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="ml-auto text-[#9A9590] hover:text-red-400"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-white/5">
                <div className="flex justify-between mb-4">
                  <span className="text-[#B5B0AB]">{locale === "mn" ? "Нийт:" : "Total:"}</span>
                  <span className="text-[#FAFAFA] font-semibold">{totalPrice.toLocaleString()}₮</span>
                </div>
                <button
                  onClick={() => { setShowCart(false); setShowCheckout(true); }}
                  className="w-full py-4 bg-[#C9A96E] text-[#0D0D0D] text-sm font-semibold rounded-sm hover:bg-[#B8985D] transition-colors"
                >
                  {locale === "mn" ? "Захиалга баталгаажуулах" : "Proceed to Checkout"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Auth Modal */}
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} mode={authMode} setMode={setAuthMode} locale={locale} />}

      {/* Checkout Modal */}
      {showCheckout && (
        <CheckoutModal
          onClose={() => setShowCheckout(false)}
          items={items}
          totalPrice={totalPrice}
          locale={locale}
          clearCart={clearCart}
        />
      )}

      {/* Search Modal */}
      {showSearch && <SearchModal onClose={() => setShowSearch(false)} locale={locale} />}
    </>
  );
}

function AuthModal({ onClose, mode, setMode, locale }: { onClose: () => void; mode: "login" | "register"; setMode: (m: "login" | "register") => void; locale: string }) {
  const { login, register } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    let ok = false;
    if (mode === "login") {
      ok = login(form.email, form.password);
    } else {
      ok = register(form.name, form.email, form.password);
    }
    if (ok) {
      onClose();
    } else {
      setError(locale === "mn" ? "Алдаа гарлаа. Дахин оролдоно уу." : "Error. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#0D0D0D]/90" onClick={onClose} />
      <div className="relative bg-[#111111] rounded-sm max-w-md w-full p-8 border border-white/5">
        <button onClick={onClose} className="absolute top-4 right-4 text-[#B5B0AB] hover:text-[#FAFAFA]">
          <X size={20} />
        </button>

        <h3 className="text-2xl font-medium text-[#FAFAFA] mb-6 text-center">
          {mode === "login"
            ? locale === "mn" ? "Нэвтрэх" : "Login"
            : locale === "mn" ? "Бүртгүүлэх" : "Register"}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "register" && (
            <div>
              <label className="block text-xs text-[#9A9590] mb-2">{locale === "mn" ? "Нэр" : "Name"}</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-sm text-sm text-[#FAFAFA] focus:outline-none focus:border-[#C9A96E]/50"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-xs text-[#9A9590] mb-2">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-sm text-sm text-[#FAFAFA] focus:outline-none focus:border-[#C9A96E]/50"
              required
            />
          </div>
          <div>
            <label className="block text-xs text-[#9A9590] mb-2">{locale === "mn" ? "Нууц үг" : "Password"}</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-sm text-sm text-[#FAFAFA] focus:outline-none focus:border-[#C9A96E]/50"
              required
            />
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            className="w-full py-4 bg-[#C9A96E] text-[#0D0D0D] text-sm font-semibold rounded-sm hover:bg-[#B8985D] transition-colors"
          >
            {mode === "login"
              ? locale === "mn" ? "Нэвтрэх" : "Login"
              : locale === "mn" ? "Бүртгүүлэх" : "Register"}
          </button>
        </form>

        <p className="text-center text-sm text-[#9A9590] mt-4">
          {mode === "login"
            ? locale === "mn" ? "Бүртгэлгүй юу? " : "No account? "
            : locale === "mn" ? "Бүртгэлтэй юу? " : "Already have an account? "}
          <button
            onClick={() => setMode(mode === "login" ? "register" : "login")}
            className="text-[#C9A96E] hover:text-[#B8985D]"
          >
            {mode === "login"
              ? locale === "mn" ? "Бүртгүүлэх" : "Register"
              : locale === "mn" ? "Нэвтрэх" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

function CheckoutModal({
  onClose,
  items,
  totalPrice,
  locale,
  clearCart,
}: {
  onClose: () => void;
  items: { id: string; name: string; price: number; priceDisplay: string; image: string; collection: string; qty: number }[];
  totalPrice: number;
  locale: string;
  clearCart: () => void;
}) {
  const isEn = locale === "en";
  const [form, setForm] = useState({ name: "", phone: "", address: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const order = {
      id: "ORD-" + Date.now(),
      date: new Date().toISOString(),
      customer: form,
      items,
      totalPrice,
      status: isEn ? "Pending" : "Хүлээгдэж байна",
    };
    const existing = JSON.parse(localStorage.getItem("taijkhurai-orders") || "[]");
    existing.push(order);
    localStorage.setItem("taijkhurai-orders", JSON.stringify(existing));
    setSubmitted(true);
    clearCart();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#0D0D0D]/90" onClick={onClose} />
      <div className="relative bg-[#111111] rounded-sm max-w-lg w-full max-h-[90vh] overflow-y-auto border border-white/5 p-8">
        <button onClick={onClose} className="absolute top-4 right-4 text-[#B5B0AB] hover:text-[#FAFAFA]">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-600/20 flex items-center justify-center mx-auto mb-4">
              <Check size={32} className="text-green-500" />
            </div>
            <h3 className="text-2xl font-medium text-[#FAFAFA] mb-2">
              {isEn ? "Order Placed!" : "Захиалга амжилттай!"}
            </h3>
            <p className="text-sm text-[#B5B0AB] mb-6">
              {isEn
                ? "Thank you! We will contact you soon to confirm your order."
                : "Баярлалаа! Бид удахгүй тантай холбогдож захиалгаа баталгаажуулах болно."}
            </p>
            <button
              onClick={onClose}
              className="px-8 py-3 bg-[#C9A96E] text-[#0D0D0D] text-sm font-semibold rounded-sm hover:bg-[#B8985D] transition-colors"
            >
              {isEn ? "Close" : "Хаах"}
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-medium text-[#FAFAFA] mb-6">
              {isEn ? "Checkout" : "Захиалга баталгаажуулах"}
            </h3>

            {/* Order Summary */}
            <div className="mb-6 p-4 rounded-sm bg-white/[0.03] border border-white/5">
              <h4 className="text-sm font-semibold text-[#FAFAFA] mb-3">
                {isEn ? "Order Summary" : "Захиалгын мэдээлэл"}
              </h4>
              <div className="space-y-2">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-[#B5B0AB]">
                      {item.name} x{item.qty}
                    </span>
                    <span className="text-[#FAFAFA]">{(item.price * item.qty).toLocaleString()}₮</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-white/5 flex justify-between">
                <span className="text-[#B5B0AB] font-semibold">{isEn ? "Total:" : "Нийт:"}</span>
                <span className="text-[#C9A96E] font-semibold">{totalPrice.toLocaleString()}₮</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-[#9A9590] mb-2">{isEn ? "Full Name" : "Бүтэн нэр"}</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-sm text-sm text-[#FAFAFA] focus:outline-none focus:border-[#C9A96E]/50"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-[#9A9590] mb-2">{isEn ? "Phone" : "Утас"}</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-sm text-sm text-[#FAFAFA] focus:outline-none focus:border-[#C9A96E]/50"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-[#9A9590] mb-2">{isEn ? "Address" : "Хаяг"}</label>
                <textarea
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-sm text-sm text-[#FAFAFA] focus:outline-none focus:border-[#C9A96E]/50 resize-none"
                  rows={3}
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-[#9A9590] mb-2">{isEn ? "Notes (optional)" : "Нэмэлт мэдээлэл (сонголттой)"}</label>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-sm text-sm text-[#FAFAFA] focus:outline-none focus:border-[#C9A96E]/50 resize-none"
                  rows={2}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[#C9A96E] text-[#0D0D0D] text-sm font-semibold rounded-sm hover:bg-[#B8985D] transition-colors"
              >
                {isEn ? "Place Order" : "Захиалах"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function SearchModal({ onClose, locale }: { onClose: () => void; locale: string }) {
  const isEn = locale === "en";
  const [query, setQuery] = useState("");

  const allItems = [
    { name: "Минимал буйдан", nameEn: "Minimal Sofa", href: "/collections" },
    { name: "Модон ширээ", nameEn: "Wooden Coffee Table", href: "/collections" },
    { name: "Хадгалах тавиур", nameEn: "Storage Shelf", href: "/collections" },
    { name: "TV тавиур", nameEn: "TV Stand", href: "/collections" },
    { name: "Хаалгатай ор", nameEn: "Platform Bed", href: "/collections" },
    { name: "Хувцасны тавиур", nameEn: "Wardrobe", href: "/collections" },
    { name: "Ширээ сандал", nameEn: "Vanity Set", href: "/collections" },
    { name: "Шөнийн ширээ", nameEn: "Nightstand", href: "/collections" },
    { name: "6 хүний ширээ", nameEn: "6-Seater Table", href: "/collections" },
    { name: "Арьсан сандал", nameEn: "Leather Chair", href: "/collections" },
    { name: "Буфет", nameEn: "Sideboard", href: "/collections" },
    { name: "Барын ширээ", nameEn: "Bar Table", href: "/collections" },
    { name: "Ажлын ширээ", nameEn: "Executive Desk", href: "/collections" },
    { name: "Эргономик сандал", nameEn: "Ergonomic Chair", href: "/collections" },
    { name: "Файлын шүүгээ", nameEn: "Filing Cabinet", href: "/collections" },
    { name: "Хуралын ширээ", nameEn: "Meeting Table", href: "/collections" },
    { name: "AI Захиалга", nameEn: "AI Customizer", href: "/ai-customizer" },
    { name: "Захиалгат тавилга", nameEn: "Custom Furniture", href: "/collections" },
    { name: "Бидний тухай", nameEn: "About Us", href: "/about" },
    { name: "Холбоо барих", nameEn: "Contact", href: "/contact" },
    { name: "Блог", nameEn: "Blog", href: "/blog" },
  ];

  const results = query.length >= 2
    ? allItems.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.nameEn.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  function lp(path: string) {
    if (path === "/") return `/${locale}`;
    return `/${locale}${path}`;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4">
      <div className="absolute inset-0 bg-[#0D0D0D]/90" onClick={onClose} />
      <div className="relative bg-[#111111] rounded-sm max-w-xl w-full border border-white/5 overflow-hidden">
        <div className="p-4 border-b border-white/5 flex items-center gap-3">
          <Search size={20} className="text-[#9A9590]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={isEn ? "Search products, services..." : "Бүтээгдэхүүн, үйлчилгээ хайх..."}
            className="flex-1 bg-transparent text-sm text-[#FAFAFA] placeholder:text-[#5A5A5A] focus:outline-none"
          />
          <button onClick={onClose} className="text-[#9A9590] hover:text-[#FAFAFA]">
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {query.length >= 2 && results.length === 0 && (
            <p className="p-4 text-sm text-[#9A9590] text-center">
              {isEn ? "No results found" : "Илэрц олдсонгүй"}
            </p>
          )}
          {results.map((item, i) => (
            <Link
              key={i}
              href={lp(item.href)}
              onClick={onClose}
              className="flex items-center gap-3 p-4 hover:bg-white/[0.03] transition-colors border-b border-white/5 last:border-0"
            >
              <Search size={14} className="text-[#9A9590]" />
              <span className="text-sm text-[#FAFAFA]">
                {isEn ? item.nameEn : item.name}
              </span>
              <ArrowRight size={12} className="text-[#9A9590] ml-auto" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function LocaleSwitcher({ currentLocale }: { currentLocale: string }) {
  const pathname = usePathname();
  const otherLocale = currentLocale === "mn" ? "en" : "mn";
  const newPath = pathname.replace(`/${currentLocale}`, `/${otherLocale}`) || `/${otherLocale}`;

  return (
    <Link
      href={newPath}
      className="text-[13px] text-[#9A9590] hover:text-[#FAFAFA] transition-colors"
    >
      {currentLocale === "mn" ? "MN | EN" : "EN | MN"}
    </Link>
  );
}
