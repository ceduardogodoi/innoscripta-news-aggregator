import { Suspense } from "react";
import { ArticleList } from "@/components/organisms/article/article-list";
import { ArticleSkeleton } from "@/components/organisms/article/article-skeleton";
import { NewsApiSource } from "@/components/organisms/news-source/news-api-source";
import { TheGuardianSource } from "@/components/organisms/news-source/the-guardian-source";
import { NytSouce } from "@/components/organisms/news-source/nyt-source";
import { SearchBar } from "@/components/molecules/search-bar";
import type { HomePageProps } from "@/app/page";

type NewsSourceProps = {
  searchParams: HomePageProps["searchParams"];
};

export function NewsSource({ searchParams }: NewsSourceProps) {
  const { q: query } = searchParams;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-[inherit]">
        <SearchBar defaultValue={query} />

        {query != null && query.length > 0 && (
          <p>
            Showing results for: &quot;
            <span className="text-red-700">{query}</span>
            &quot;
          </p>
        )}
      </div>

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
        <TheGuardianSource searchParams={searchParams} />
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
        <NytSouce searchParams={searchParams} />
      </Suspense>

      {/* News API */}
      <h2 className="text-lg font-semibold text-red-700">Other sources</h2>

      <Suspense
        fallback={
          <ArticleList>
            <ArticleSkeleton />
            <ArticleSkeleton />
            <ArticleSkeleton />
          </ArticleList>
        }
      >
        <NewsApiSource searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
