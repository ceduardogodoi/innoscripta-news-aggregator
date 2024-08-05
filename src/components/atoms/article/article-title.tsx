import type { PropsWithChildren } from "react";

export function ArticleTitle({ children }: PropsWithChildren) {
  const title = typeof children === "string" ? children : undefined;

  return (
    <h3
      className="line-clamp-2 text-sm font-semibold text-black group-hover:underline"
      title={title}
    >
      {children}
    </h3>
  );
}
