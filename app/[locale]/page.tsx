import { getTranslations, setRequestLocale } from "next-intl/server";
import { SupportedLocaleTypes } from "@/locales";
import LanguageChanger from "../components/language_selector/LanguageChanger";
import Questions from "../components/questions/Questions";
import ContactUs from "../components/contact_us/ContactUs";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import HowToFindUs from "../components/how_to_find_us/HowToFindUs";

import _ from "lodash";

//----------------------------------------------------------------------

type Props = {
  params: Promise<{ locale: SupportedLocaleTypes }>;
};

export default async function IndexPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);
  const translations = await getTranslations();

  return (
    <div className="w-full h-[100dvh]">
      <Header locale={locale} />
      <Hero locale={locale} />
      <HowToFindUs locale={locale} />
      <Questions locale={locale} />
      <ContactUs locale={locale} />
    </div>
  );
}
