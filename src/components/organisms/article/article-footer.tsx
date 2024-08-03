import type { PropsWithChildren } from "react";

export function ArticleFooter({ children }: PropsWithChildren) {
  return (
    <footer className="absolute bottom-4 left-0 right-0 flex items-center justify-end gap-4 px-6">
      {children}
    </footer>
  );
}
