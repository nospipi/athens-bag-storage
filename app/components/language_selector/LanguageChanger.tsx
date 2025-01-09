import { Button } from "@/components/ui/button.client";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer.client";
import { CiGlobe } from "react-icons/ci";
import LanguageButton from "./LanguageButton.client";
import DrawerHeaderClient from "./DrawerHeader.client";

//-------------------------------------------------------------------------

export default function LanguageChanger() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <CiGlobe />
        </Button>
      </DrawerTrigger>

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
    </Drawer>
  );
}
