import { NextIntlClientProvider } from "next-intl";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
//import { SpeedInsights } from "@vercel/speed-insights/next"; //only one for every hobby account on vercel
//import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/toaster";
import { getMessages } from "next-intl/server";
import { SupportedLocaleTypes } from "@/locales";
import type { Metadata } from "next";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import Script from "next/script";

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

const LocaleLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: SupportedLocaleTypes }>;
}) => {
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
      <Script
        strategy="beforeInteractive"
        src={`https://cdn-cookieyes.com/client_data/${process.env.COOKIE_YES_KEY}/script.js`}
      ></Script>
      <body className={montserrat.className}>
        <NextIntlClientProvider messages={messages}>
          <AppRouterCacheProvider>
            <Toaster />
            {children}
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
        {/* <SpeedInsights /> */}
        {/* <Analytics /> */}
      </body>
    </html>
  );
};

export default LocaleLayout;
