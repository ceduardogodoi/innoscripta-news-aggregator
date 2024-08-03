import Link from "next/link";
import { NewspaperIcon } from "lucide-react";
import { HamburgerMenu } from "@/components/organisms/hamburger-menu";
import { SearchBar } from "@/components/molecules/search-bar";
import { ContentWrapper } from "@/components/organisms/content-wrapper";

export function Header() {
  return (
    <header className="bg-white">
      <ContentWrapper>
        <Link href="/" className="flex gap-1">
          <NewspaperIcon size={64} className="text-red-700" />
          <span className="text-xs font-semibold text-red-800">
            The
            <br />
            News
            <br />
            Aggregator
          </span>
        </Link>

        <div className="flex items-center justify-center gap-8">
          <SearchBar />

          <HamburgerMenu />
        </div>
      </ContentWrapper>
    </header>
  );
}
