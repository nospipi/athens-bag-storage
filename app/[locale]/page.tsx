import { getTranslations, setRequestLocale } from "next-intl/server";
import { SupportedLocaleTypes } from "@/locales";
import LanguageChanger from "../components/language_selector/LanguageChanger";
import QuestionsAccordion from "../components/questions/QuestionsAccordion";
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
      <QuestionsAccordion locale={locale} />

      <div
        id={_.kebabCase(translations("contact_us"))}
        className="w-full h-[100dvh] bg-gradient-to-b from-blue-300 to-white/0"
      >
        CONTACT US
      </div>
    </div>
  );
}
