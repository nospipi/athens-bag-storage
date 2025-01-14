import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerPortal,
} from "@/components/ui/drawer.client";
import { CiGlobe } from "react-icons/ci";
import { RxCaretDown } from "react-icons/rx";
import LanguageButton from "./LanguageButton.client";
import DrawerHeaderClient from "./DrawerHeader.client";
import { SupportedLocaleTypes } from "@/locales";
import { getTranslations, setRequestLocale } from "next-intl/server";

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
        <div className="rounded-full fixed top-10 left-4 cursor-pointer flex items-center gap-1">
          <div className="bg-slate-100/30 p-1 rounded-full shadow-lg">
            <CiGlobe size={24} />
          </div>

          <span className="text-black text-xs font-semibold">
            {translations(locale)}
          </span>
          <RxCaretDown size={18} />
        </div>
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
