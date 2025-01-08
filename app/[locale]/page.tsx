import getIntl from "@/app/intl";
import { SupportedLocales } from "@/locales";
import LanguageChanger from "@/app/components/LanguageChanger";

//----------------------------------------------

const Page = async ({
  params,
}: {
  params: Promise<{ locale: SupportedLocales }>;
}) => {
  const { locale } = await params;

  const intl = await getIntl(locale);

  return (
    <main>
      <h1>{intl.formatMessage({ id: "homepage_header" })}</h1>
      <LanguageChanger />
    </main>
  );
};

export default Page;
