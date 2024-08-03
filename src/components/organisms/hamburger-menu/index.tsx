import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Navbar } from "@/components/molecules/navbar";

export function HamburgerMenu() {
  return (
    <Drawer direction="bottom">
      <DrawerTrigger className="xl:hidden" asChild>
        <Button variant="ghost" size="fit">
          <MenuIcon size={24} />
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <Navbar className="flex flex-col gap-4 p-5" />
      </DrawerContent>
    </Drawer>
  );
}
