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
    <div>
      <Header locale={locale} />
      <Hero />
      <div
        id={_.kebabCase(translations("how_to_find_us"))}
        className="min-h-[90px] w-full h-screen"
      >
        MAP
      </div>
      <div
        id={_.kebabCase(translations("contact_us"))}
        className="min-h-[90px] w-full h-screen"
      >
        CONTACT US
      </div>
      <LanguageChanger locale={locale} />
    </div>
  );
}
