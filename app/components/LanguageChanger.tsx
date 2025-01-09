import { Button } from "@/components/ui/button";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CiGlobe } from "react-icons/ci";
import LanguageButton from "./LanguageButton";

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
        <div className="mx-auto w-full max-w-sm p-1 mb-2">
          <DrawerHeader>
            <DrawerTitle className="text-center">Select Language</DrawerTitle>
            {/* <DrawerDescription>Set your daily activity goal.</DrawerDescription> */}
          </DrawerHeader>
          <div className="flex gap-1 flex-wrap">
            <LanguageButton />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
