import { getTranslations, setRequestLocale } from "next-intl/server";
import { SupportedLocaleTypes } from "@/locales";
import LanguageChanger from "../components/language_selector/LanguageChanger";
import Hero from "../components/hero/Hero";
import Header from "../components/header/Header";
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
    <div className="w-full h-screen">
      <Header locale={locale} />
      <Hero locale={locale} />
      <div
        id={_.kebabCase(translations("how_to_find_us"))}
        className="w-full h-screen bg-gradient-to-b from-blue-300 to-pink-300/30"
      >
        MAP
      </div>
      <div
        id={_.kebabCase(translations("contact_us"))}
        className="w-full h-screen bg-gradient-to-b from-pink-300/30 to-blue-300"
      >
        CONTACT US
      </div>
      <LanguageChanger locale={locale} />
    </div>
  );
}
