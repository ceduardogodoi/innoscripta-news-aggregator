import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import Link from "next/link";

type LinkProps = ComponentPropsWithoutRef<typeof Link>;

type ArticleCardProps = Readonly<
  PropsWithChildren<{
    href?: LinkProps["href"];
  }>
>;

export function ArticleCard({ children, href, ...props }: ArticleCardProps) {
  return (
    <li className="group relative block h-full max-h-[23rem] min-h-[23rem] w-full list-none rounded bg-white shadow-xl lg:max-w-80">
      {href != null ? (
        <Link
          href={href}
          target="_blank"
          title={`Click to go to ${href}`}
          {...props}
        >
          {children}
        </Link>
      ) : (
        children
      )}
    </li>
  );
}
