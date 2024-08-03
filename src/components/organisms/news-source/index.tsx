import { Suspense } from "react";
import { ArticleList } from "@/components/organisms/article/article-list";
import { ArticleSkeleton } from "@/components/organisms/article/article-skeleton";
import { NewsApiSource } from "./news-api-source";

type NewsSourceProps = Readonly<{
  sourceName: string;
}>;

export function NewsSource({ sourceName }: NewsSourceProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-red-700">
        Top stories from {sourceName}
      </h2>

      <Suspense
        fallback={
          <ArticleList>
            <ArticleSkeleton />
          </ArticleList>
        }
      >
        <NewsApiSource />
      </Suspense>
    </div>
  );
}
