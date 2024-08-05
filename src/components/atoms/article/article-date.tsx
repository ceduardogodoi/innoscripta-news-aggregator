import dayjs from "dayjs";
import type { ComponentPropsWithoutRef } from "react";

type ArticleDateProps = Readonly<ComponentPropsWithoutRef<"time">>;

export function ArticleDate({ children, ...props }: ArticleDateProps) {
  const date =
    typeof children === "string"
      ? dayjs(children).format("YYYY-MM-DD")
      : children;

  return (
    <time className="text-xs text-gray-700" {...props}>
      {date}
    </time>
  );
}
