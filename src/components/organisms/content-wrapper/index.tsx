import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ContentWrapperProps = Readonly<ComponentPropsWithoutRef<"div">>;

export function ContentWrapper({
  children,
  className,
  ...props
}: ContentWrapperProps) {
  return (
    <div
      className={cn("flex items-center justify-between p-5 mx-auto lg:max-w-screen-lg", className)}
      {...props}
    >
      {children}
    </div>
  );
}
