import Link from "next/link";
import { NewspaperIcon } from "lucide-react";
import { HamburgerMenu } from "@/components/organisms/hamburger-menu";
import { ContentWrapper } from "@/components/organisms/content-wrapper";
import { Navbar } from "@/components/molecules/navbar";

export function Header() {
  return (
    <header className="bg-white">
      <nav>
        <ContentWrapper>
          <Link
            href="/"
            title="Go to the homepage"
            className="group flex gap-1 text-xs font-semibold text-red-700"
          >
            <NewspaperIcon size={64} />
            <div className="flex flex-col">
              <span className="w-fit border-b border-b-transparent lg:group-hover:border-b-red-700">
                The
              </span>
              <span className="w-fit border-b border-b-transparent lg:group-hover:border-b-red-700">
                News
              </span>
              <span className="w-fit border-b border-b-transparent lg:group-hover:border-b-red-700">
                Aggregator
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-6">
            <Navbar />

            <HamburgerMenu />
          </div>
        </ContentWrapper>
      </nav>
    </header>
  );
}
