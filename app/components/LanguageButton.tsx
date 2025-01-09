"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useCurrentLocale } from "next-i18n-router/client";
import i18nConfig from "@/i18nConfig";
import { Button } from "@/components/ui/button";
import { DrawerClose } from "@/components/ui/drawer";
import { CircleFlag } from "react-circle-flags";

//-------------------------------------------------------------------------

//https://i18nexus.com/tutorials/nextjs/react-intl

export default function LanguageButton() {
  const router = useRouter();
  const currentPathname = usePathname();
  const currentLocale = useCurrentLocale(i18nConfig);

  const handleChange = (lang: string) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${lang};expires=${expires};path=/`;

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + lang + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${lang}`));
    }

    router.refresh();
  };

  return (
    <DrawerClose asChild>
      <Button variant={"outline"} onClick={() => handleChange("en")}>
        English
        <CircleFlag countryCode="gb" height={20} width={20} />
      </Button>
    </DrawerClose>
  );
}
