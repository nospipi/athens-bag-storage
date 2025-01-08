"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  //   DrawerPortal,
  //   DrawerOverlay,
} from "@/components/ui/drawer";

//-------------------------------------------------------------------------

const DrawerDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  //remove body.drawer-open when drawer is open and add it when drawer is closed

  useEffect(() => {
    const pageContainer = document.querySelector(
      ".page-container"
    ) as HTMLElement;

    if (isOpen) {
      pageContainer.classList.add("drawer-open");
      pageContainer.classList.remove("closing");
    } else {
      pageContainer.classList.add("closing");
      // Delay the removal to allow the animation to complete
      setTimeout(() => {
        pageContainer.classList.remove("drawer-open");
        pageContainer.classList.remove("closing");
      }, 300); // Adjust timeout to match transition duration
    }
  }, [isOpen]);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      {/* <DrawerOverlay /> */}

      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>

          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerDemo;
