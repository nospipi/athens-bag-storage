import { Button } from "@/components/ui/button.client";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerPortal,
} from "@/components/ui/drawer.client";
import { CiGlobe } from "react-icons/ci";
import LanguageButton from "./LanguageButton.client";
import DrawerHeaderClient from "./DrawerHeader.client";
import { SupportedLocaleTypes } from "@/locales";

//-------------------------------------------------------------------------

const LanguageChanger = async ({
  locale,
}: {
  locale: SupportedLocaleTypes;
}) => {
  setRequestLocale(locale);
  const translations = await getTranslations();
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          title={translations("select_language")}
          variant="outline"
          size="icon"
          className="rounded-full fixed bottom-4 right-4"
        >
          <CiGlobe />
        </Button>
      </DrawerTrigger>

      <DrawerPortal>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm p-2">
            <DrawerHeaderClient />
            <div className="grid grid-cols-2 gap-2">
              <LanguageButton locale="en" icon="en-us" />
              <LanguageButton locale="es" icon="es" />
              <LanguageButton locale="fr" icon="fr" />
              <LanguageButton locale="de" icon="de" />
            </div>
          </div>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};

export default LanguageChanger;
