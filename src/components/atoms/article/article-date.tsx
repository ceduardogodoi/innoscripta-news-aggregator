import type { ComponentPropsWithoutRef } from "react";

type ArticleDateProps = Readonly<ComponentPropsWithoutRef<"time">>;

export function ArticleDate({ children, ...props }: ArticleDateProps) {
  return (
    <time className="text-xs text-gray-700" {...props}>
      {children}
    </time>
  );
}
