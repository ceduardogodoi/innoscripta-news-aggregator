import type { PropsWithChildren } from "react";

export function ArticleList({ children }: PropsWithChildren) {
  return (
    <ul className="flex list-none grid-cols-3 flex-col items-center gap-4 lg:grid lg:flex-row">
      {children}
    </ul>
  );
}
