"use client";

import { useTransition } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button.client";
import { DrawerClose } from "@/components/ui/drawer.client";
import { CircleFlagLanguage } from "react-circle-flags";
import { Locale, usePathname, useRouter } from "@/app/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import { SupportedLocaleTypes } from "@/locales";

//-------------------------------------------------------------------------

export default function LanguageButton({
  locale,
  icon,
}: {
  locale: SupportedLocaleTypes;
  icon: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const translations = useTranslations();
  const currentLocale = useLocale();

  function handleChange(nextLocale: Locale) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <DrawerClose asChild>
      <Button
        variant={"outline"}
        onClick={() => handleChange(locale)}
        disabled={isPending || locale === currentLocale}
      >
        {translations(locale)}
        {/* <CircleFlag countryCode={icon} height={20} width={20} /> */}
        <CircleFlagLanguage languageCode={icon} height={20} width={20} />
      </Button>
    </DrawerClose>
  );
}
