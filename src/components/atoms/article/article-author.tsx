import type { PropsWithChildren } from "react";

export function ArticleAuthor({ children }: PropsWithChildren) {
  return <span className="text-xs text-gray-500">{children}</span>;
}
