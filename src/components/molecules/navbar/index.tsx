import { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon } from "lucide-react";

type NavbarProps = ComponentPropsWithoutRef<"ul">;

export function Navbar({ className, ...props }: NavbarProps) {
  return (
    <ul {...props} className={cn("hidden gap-[inherit] lg:flex", className)}>
      <li className="group inline-flex">
        <Link
          className="ml-auto flex items-center gap-1 border-b border-b-transparent transition-all lg:ml-0 lg:group-hover:border-b-red-500"
          href="/my-feed"
          title="Go to your personalized feed"
        >
          My feed
        </Link>
      </li>

      <li className="group inline-flex">
        <Link
          className="ml-auto flex items-center gap-1 border-b border-b-transparent transition-all lg:ml-0 lg:group-hover:border-b-red-500"
          target="_blank"
          href="https://www.theguardian.com/international"
          title="Visit The Guardian's website"
        >
          The Guardian
          <ExternalLinkIcon size={16} />
        </Link>
      </li>

      <li className="group inline-flex">
        <Link
          className="ml-auto flex items-center gap-1 border-b border-b-transparent transition-all lg:ml-0 lg:group-hover:border-b-red-500"
          target="_blank"
          href="https://www.nytimes.com/"
          title="Visit New York Times' website"
        >
          New York Times
          <ExternalLinkIcon size={16} />
        </Link>
      </li>
    </ul>
  );
}
