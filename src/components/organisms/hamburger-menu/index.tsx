import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";

export function HamburgerMenu() {
  return (
    <Drawer direction="bottom">
      <DrawerTrigger asChild>
        <Button variant="ghost" size="fit">
          <MenuIcon size={24} />
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <h2>Menu content</h2>
      </DrawerContent>
    </Drawer>
  );
}
