import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ArticleCardProps = ComponentPropsWithoutRef<typeof Link>;

export function ArticleCard({ children, href, ...props }: ArticleCardProps) {
  return (
    <Link
      className="group max-w-80 rounded bg-white pb-6 shadow-lg"
      href={href}
      target="_blank"
      title={`Go to ${href}`}
      {...props}
    >
      {children}
    </Link>
  );
}
