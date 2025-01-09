"use client";
import { DrawerHeader, DrawerTitle } from "@/components/ui/drawer.client";
import { useTranslations } from "next-intl";

//-------------------------------------------------------------------------

export default function DrawerHeaderClient() {
  const translations = useTranslations();
  return (
    <DrawerHeader>
      <DrawerTitle className="text-center">
        {translations("select_language")}
      </DrawerTitle>
    </DrawerHeader>
  );
}
