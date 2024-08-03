import type { PropsWithChildren } from "react";

export function ArticleHeader({ children }: PropsWithChildren) {
  return (
    <header className="relative h-40 overflow-hidden rounded-t">
      {children}
    </header>
  );
}
