import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ContentWrapperProps = ComponentPropsWithoutRef<"div">;

export function ContentWrapper({
  children,
  className,
  ...props
}: ContentWrapperProps) {
  return (
    <div
      className={cn("flex items-center justify-between p-5", className)}
      {...props}
    >
      {children}
    </div>
  );
}
