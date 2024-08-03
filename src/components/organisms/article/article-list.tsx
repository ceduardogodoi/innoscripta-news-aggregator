import type { PropsWithChildren } from "react";

export function ArticleList({ children }: PropsWithChildren) {
  return <ul className="flex list-none flex-col items-center gap-4">{children}</ul>;
}
