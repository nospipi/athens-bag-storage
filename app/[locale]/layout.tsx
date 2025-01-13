import { NextIntlClientProvider } from "next-intl";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Toaster } from "react-hot-toast";
import { getMessages } from "next-intl/server";
import { SupportedLocaleTypes } from "@/locales";
import type { Metadata } from "next";
import Head from "next/head";
import { Montserrat } from "next/font/google";

//-------------------------------------------------------------------------

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Convenient Luggage Storage in Downtown Athens",
  description:
    "Explore Athens without the hassle of carrying your luggage. Safe, secure, and easy storage for all your travel needs",
};

//-------------------------------------------------------------------------

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: SupportedLocaleTypes }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  //   if (!routing.locales.includes(locale as any)) {
  //     notFound();
  //   }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={montserrat.className}>
        <NextIntlClientProvider messages={messages}>
          <AppRouterCacheProvider>
            <Toaster position="top-center" />
            {children}
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

{
  /* <html lang="en" suppressHydrationWarning>
  <body className={montserrat.className}>{children}</body>
</html>; */
}
