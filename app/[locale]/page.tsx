import { getTranslations, setRequestLocale } from "next-intl/server";
import { SupportedLocaleTypes } from "@/locales";
import LanguageChanger from "../components/language_selector/LanguageChanger";

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
      {translations("hello")}
      <LanguageChanger />
    </div>
  );
}

