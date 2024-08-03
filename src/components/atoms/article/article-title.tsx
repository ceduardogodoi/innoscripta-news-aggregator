import type { PropsWithChildren } from "react";

export function ArticleTitle({ children }: PropsWithChildren) {
  return (
    <h3 className="text-sm font-semibold text-black group-hover:underline">
      {children}
    </h3>
  );
}
