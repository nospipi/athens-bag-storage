import { getTranslations, setRequestLocale } from "next-intl/server";
import { SupportedLocales } from "@/locales";

//----------------------------------------------------------------------

type Props = {
  params: Promise<{ locale: SupportedLocales }>;
};

export default async function IndexPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const translations = await getTranslations();

  return <div>{translations("hello")}</div>;
}
