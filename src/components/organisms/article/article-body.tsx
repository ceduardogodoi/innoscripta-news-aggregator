import type { PropsWithChildren } from "react";

export function ArticleBody({ children }: PropsWithChildren) {
  return (
    <div className="mt-3 line-clamp-5 text-sm text-gray-700">{children}</div>
  );
}
