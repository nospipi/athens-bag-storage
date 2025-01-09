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


// import { useTranslations, useLocale } from "next-intl";
// import { Link } from "@/app/i18n/routing";

// export default function HomePage() {
//   const translations = useTranslations();

//   return (
//     <div>
//       <h1>{translations("homepage_header")}</h1>
//     </div>
//   );
// }
