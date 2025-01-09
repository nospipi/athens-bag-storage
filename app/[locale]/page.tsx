import { getTranslations, setRequestLocale } from "next-intl/server";
import PageLayout from "@/app/components/PageLayout";
import { SupportedLocales } from "@/locales";

//----------------------------------------------------------------------

type Props = {
  params: Promise<{ locale: SupportedLocales }>;
};

export default async function IndexPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations("IndexPage");

  return (
    <PageLayout title={t("title")}>
      <p className="max-w-[590px]">
        {t.rich("description", {
          code: (chunks) => (
            <code className="font-mono text-white">{chunks}</code>
          ),
        })}
      </p>
    </PageLayout>
  );
}
