import type { PropsWithChildren } from "react";

export function ArticleList({ children }: PropsWithChildren) {
  return (
    <ul className="grid list-none grid-cols-3 flex-col items-center gap-4 lg:flex-row">
      {children}
    </ul>
  );
}
