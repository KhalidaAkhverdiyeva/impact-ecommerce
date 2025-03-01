import { ReactNode, Suspense } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import LoadingSpinner from "@/components/Loading Spinner/loadingSpinner";
import { CartProvider } from "@/contexts/cartContext";
import Banner from "@/components/Layout/Banner/banner";
import Footer from "@/components/Layout/Footer/footer";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as "en" | "fr" | "de")) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <CartProvider>
        <Suspense fallback={<LoadingSpinner />}>
          <Banner />
          {children}
          <Footer />
        </Suspense>
      </CartProvider>
    </NextIntlClientProvider>
  );
}
