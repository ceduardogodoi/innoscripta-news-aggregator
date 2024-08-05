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
    <li className="group relative block size-full max-h-[23rem] min-h-[23rem] list-none rounded bg-white shadow-xl lg:max-w-80">
      {href != null ? (
        <Link
          href={href}
          target="_blank"
          title={`View the full article at ${href}`}
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
