"use client";

import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Navbar } from "@/components/molecules/navbar";

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function handleCloseMenu() {
    setIsOpen(false);
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} direction="bottom">
      <DrawerTitle className="sr-only">Mobile menu</DrawerTitle>

      <DrawerTrigger className="xl:hidden" asChild>
        <Button variant="ghost" size="fit">
          <MenuIcon size={24} />
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerDescription className="sr-only">Mobile menu</DrawerDescription>

        <Navbar
          className="flex flex-col gap-4 p-5"
          onCloseMenu={handleCloseMenu}
        />
      </DrawerContent>
    </Drawer>
  );
}
