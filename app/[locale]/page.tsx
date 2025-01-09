// import getIntl from "@/app/intl";
// import { SupportedLocales } from "@/locales";
// import LanguageSelectDrawer from "@/app/components/language_selector/LanguageChanger";
// import ServerIntlProvider from "@/providers/ServerIntlProvider.client";
// import Hero from "../components/Hero.client";

// //----------------------------------------------

// const Page = async ({
//   params,
// }: {
//   params: Promise<{ locale: SupportedLocales }>;
// }) => {
//   const { locale } = await params;

//   const intl = await getIntl(locale);

//   return (
//     <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
//       <main className="page-container">
//         <h1>{intl.formatMessage({ id: "homepage_header" })}</h1>
//         <Hero />
//         <LanguageSelectDrawer intl={intl} />
//       </main>
//     </ServerIntlProvider>
//   );
// };

// export default Page;

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/app/i18n/routing";

export default function HomePage() {
  const translations = useTranslations();

  return (
    <div>
      <h1>{translations("homepage_header")}</h1>
    </div>
  );
}
