"use client";
import { DrawerHeader, DrawerTitle } from "@/components/ui/drawer.client";
import { useIntl } from "react-intl";

//-------------------------------------------------------------------------

export default function DrawerHeaderClient() {
  const intl = useIntl();
  return (
    <DrawerHeader>
      <DrawerTitle className="text-center">
        {intl.formatMessage({ id: "select_language" })}
      </DrawerTitle>
    </DrawerHeader>
  );
}
