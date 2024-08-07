import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { ContentWrapper } from "../content-wrapper";

export function Footer() {
  return (
    <footer className="mt-auto bg-blue-950 text-white">
      <ContentWrapper className="flex flex-col items-stretch gap-4 lg:flex-row lg:py-10">
        <ul>
          <li>
            <Link
              className="border-b border-b-transparent text-sm hover:border-b-white"
              href="#"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              className="border-b border-b-transparent text-sm hover:border-b-white"
              href="#"
            >
              Terms of Service
            </Link>
          </li>
        </ul>

        <ul className="flex items-center gap-4">
          <li>
            <Link href="https://linkedin.com" target="_blank">
              <LinkedinIcon />
            </Link>
          </li>
          <li>
            <Link href="https://instagram.com" target="_blank">
              <InstagramIcon />
            </Link>
          </li>
          <li>
            <Link href="https://facebook.com" target="_blank">
              <FacebookIcon />
            </Link>
          </li>
        </ul>

        <div>
          <span className="text-sm">All copy reserved &copy;</span>
          <br />
          <span className="text-sm">
            The News Aggregator {new Date().getFullYear()}
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
}
