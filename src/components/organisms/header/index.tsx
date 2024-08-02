import Link from "next/link";
import { NewspaperIcon } from "lucide-react";
import { HamburgerMenu } from "@/components/organisms/hamburger-menu";
import { SearchBar } from "@/components/molecules/search";

export function Header() {
  return (
    <header className="bg-white">
      <div className="flex items-center justify-between p-5">
        <Link href="/">
          <NewspaperIcon size={64} className="text-blue-900" />
        </Link>

        <div className="flex items-center justify-center gap-8">
          <SearchBar />

          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
}
