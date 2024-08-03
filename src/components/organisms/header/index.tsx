import Link from "next/link";
import { NewspaperIcon } from "lucide-react";
import { HamburgerMenu } from "@/components/organisms/hamburger-menu";
import { SearchBar } from "@/components/molecules/search-bar";
import { ContentWrapper } from "@/components/organisms/content-wrapper";

export function Header() {
  return (
    <header className="bg-white">
      <ContentWrapper>
        <Link href="/">
          <NewspaperIcon size={64} className="text-blue-900" />
        </Link>

        <div className="flex items-center justify-center gap-8">
          <SearchBar />

          <HamburgerMenu />
        </div>
      </ContentWrapper>
    </header>
  );
}
