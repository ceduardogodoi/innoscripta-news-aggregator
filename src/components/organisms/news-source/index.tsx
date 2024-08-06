import { Suspense } from "react";
import { ArticleList } from "@/components/organisms/article/article-list";
import { ArticleSkeleton } from "@/components/organisms/article/article-skeleton";
import { NewsApiSource } from "@/components/organisms/news-source/news-api-source";
import { TheGuardianSource } from "@/components/organisms/news-source/the-guardian-source";
import { NytSouce } from "@/components/organisms/news-source/nyt-source";
import { SearchAndFilter } from "@/components/molecules/search-and-filter";
import type { HomePageProps } from "@/app/page";
import { SOURCES_VALUE_LABEL_MAP } from "@/constants";

type NewsSourceProps = {
  searchParams: HomePageProps["searchParams"];
};

export function NewsSource({ searchParams }: NewsSourceProps) {
  const { q: query, "date-range": dateRange, source } = searchParams;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-[inherit]">
        <SearchAndFilter
          defaultValue={query}
          dateRange={dateRange}
          source={source}
        />

        {query != null && query.length > 0 && (
          <p>
            Showing results for: &quot;
            <span className="text-red-700">{query}</span>
            &quot;
          </p>
        )}

        {source != null && (
          <p className="mt-10 text-center text-xl">
            Showing results from{" "}
            <span className="text-red-700">
              {source === "misc"
                ? "various sources"
                : SOURCES_VALUE_LABEL_MAP[source]}
            </span>
          </p>
        )}
      </div>

      {/* The Guardian */}
      {(source == null || source === "the-guardian") && (
        <>
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
        </>
      )}

      {/* The New York Times */}
      {(source == null || source === "nyt") && (
        <>
          <h2 className="text-lg font-semibold text-red-700">
            The New York Times
          </h2>

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
        </>
      )}

      {/* News API */}
      {(source == null || source === "misc") && (
        <>
          <h2 className="text-lg font-semibold text-red-700">
            {source ? "Miscellaneous" : "Other sources"}
          </h2>

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
        </>
      )}
    </div>
  );
}
