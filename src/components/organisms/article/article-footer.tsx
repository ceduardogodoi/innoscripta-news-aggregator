import type { PropsWithChildren } from "react";

export function ArticleFooter({ children }: PropsWithChildren) {
  return (
    <footer className="mt-5 flex items-center justify-end gap-4 px-6">
      {children}
    </footer>
  );
}
