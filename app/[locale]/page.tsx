import getIntl from "@/app/intl";
import { SupportedLocales } from "@/locales";
import LanguageChanger from "@/app/components/LanguageChanger";
import Hero from "../components/Hero";

//----------------------------------------------

const Page = async ({
  params,
}: {
  params: Promise<{ locale: SupportedLocales }>;
}) => {
  const { locale } = await params;

  const intl = await getIntl(locale);

  return (
    <main className="page-container">
      <h1>{intl.formatMessage({ id: "homepage_header" })}</h1>
      <Hero />
      <LanguageChanger />
    </main>
  );
};

export default Page;
