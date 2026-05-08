import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ApolloWrapper } from "@/lib/apollo/apollo-wrapper";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { routing } from "@/i18n/routing";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Taij-Khurai | Premium Custom Furniture",
  description: "Mongolian craftsmanship meets Scandinavian minimalism. Design, visualize, and order custom furniture.",
  metadataBase: new URL("https://taijkhurai.mn"),
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0D0D0D] text-[#FAFAFA]">
        <NextIntlClientProvider messages={messages}>
          <ApolloWrapper>
            <Header />
            <main className="flex-1 pt-20">{children}</main>
            <Footer />
          </ApolloWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
