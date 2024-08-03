import Link from "next/link";
import { NewspaperIcon } from "lucide-react";
import { HamburgerMenu } from "@/components/organisms/hamburger-menu";
import { SearchBar } from "@/components/molecules/search-bar";
import { ContentWrapper } from "@/components/organisms/content-wrapper";
import { Navbar } from "@/components/molecules/navbar";

export function Header() {
  return (
    <header className="bg-white">
      <nav>
        <ContentWrapper>
          <Link href="/" title="Go to the homepage" className="flex gap-1">
            <NewspaperIcon size={64} className="text-red-700" />
            <span className="text-xs font-semibold text-red-800">
              The
              <br />
              News
              <br />
              Aggregator
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Navbar />

            <SearchBar />

            <HamburgerMenu />
          </div>
        </ContentWrapper>
      </nav>
    </header>
  );
}
