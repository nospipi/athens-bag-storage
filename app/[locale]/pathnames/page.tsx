import { getTranslations, setRequestLocale } from "next-intl/server";
import PageLayout from "@/app/components/PageLayout";
import { SupportedLocaleTypes } from "@/locales";

//-------------------------------------------------------------------

type Props = {
  params: Promise<{ locale: SupportedLocaleTypes }>;
};

export default async function PathnamesPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);
  const t = await getTranslations("PathnamesPage");

  return (
    <PageLayout title={t("title")}>
      <div className="max-w-[490px]">
        {t.rich("description", {
          p: (chunks) => <p className="mt-4">{chunks}</p>,
          code: (chunks) => (
            <code className="font-mono text-white">{chunks}</code>
          ),
        })}
      </div>
    </PageLayout>
  );
}
