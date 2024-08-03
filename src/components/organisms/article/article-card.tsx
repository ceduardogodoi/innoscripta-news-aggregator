import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import Link from "next/link";

type LinkProps = ComponentPropsWithoutRef<typeof Link>;

type ArticleCardProps = PropsWithChildren<{
  href?: LinkProps["href"];
}>;

export function ArticleCard({ children, href, ...props }: ArticleCardProps) {
  return (
    <li className="group h-fit w-full max-w-80 list-none rounded bg-white pb-6">
      {href != null ? (
        <Link
          href={href}
          target="_blank"
          title={`Open article ${href}`}
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
