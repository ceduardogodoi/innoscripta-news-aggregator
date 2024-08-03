import { Suspense } from "react";
import { ArticleList } from "@/components/organisms/article/article-list";
import { ArticleSkeleton } from "@/components/organisms/article/article-skeleton";
import { NewsApiSource } from "./news-api-source";
import { TheGuardianSource } from "./the-guardian-source";

export function NewsSource() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-red-700">Top stories</h2>

      <Suspense
        fallback={
          <ArticleList>
            <ArticleSkeleton />
            <ArticleSkeleton />
            <ArticleSkeleton />
          </ArticleList>
        }
      >
        <NewsApiSource />
      </Suspense>

      {/* The Guardian */}
      <h2 className="text-lg font-semibold text-red-700">The Guardian</h2>

      <Suspense
        fallback={
          <ArticleList>
            <ArticleSkeleton />
            <ArticleSkeleton />
            <ArticleSkeleton />
          </ArticleList>
        }
      >
        <TheGuardianSource />
      </Suspense>
    </div>
  );
}
