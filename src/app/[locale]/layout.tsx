/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, Suspense } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import LoadingSpinner from "@/components/Loading Spinner/loadingSpinner";
import { CartProvider } from "@/contexts/cartContext";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: any };
}) {
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <CartProvider>
        <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
      </CartProvider>
    </NextIntlClientProvider>
  );
}
