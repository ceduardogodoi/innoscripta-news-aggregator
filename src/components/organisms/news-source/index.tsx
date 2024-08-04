import { Suspense } from "react";
import { ArticleList } from "@/components/organisms/article/article-list";
import { ArticleSkeleton } from "@/components/organisms/article/article-skeleton";
import { NewsApiSource } from "@/components/organisms/news-source/news-api-source";
import { TheGuardianSource } from "@/components/organisms/news-source/the-guardian-source";
import { NytSouce } from "@/components/organisms/news-source/nyt-source";

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

      {/* The New York Times */}
      <h2 className="text-lg font-semibold text-red-700">The New York Times</h2>

      <Suspense
        fallback={
          <ArticleList>
            <ArticleSkeleton />
            <ArticleSkeleton />
            <ArticleSkeleton />
          </ArticleList>
        }
      >
        <NytSouce />
      </Suspense>
    </div>
  );
}
