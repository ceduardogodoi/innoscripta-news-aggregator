import type { PropsWithChildren } from "react";

export function ArticleContent({ children }: PropsWithChildren) {
  return <div className="px-6 py-3">{children}</div>;
}
