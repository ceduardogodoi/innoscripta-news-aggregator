import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

type ArticleContentProps = Readonly<ComponentPropsWithoutRef<"div">>;

export function ArticleContent({
  children,
  className,
  ...props
}: ArticleContentProps) {
  return (
    <div className={cn("px-6 py-3", className)} {...props}>
      {children}
    </div>
  );
}
