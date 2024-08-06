import { Suspense } from "react";
import { ArticleList } from "@/components/organisms/article/article-list";
import { ArticleSkeleton } from "@/components/organisms/article/article-skeleton";
import { NewsApiSource } from "@/components/organisms/news-source/news-api-source";
import { TheGuardianSource } from "@/components/organisms/news-source/the-guardian-source";
import { NytSouce } from "@/components/organisms/news-source/nyt-source";
import { SearchAndFilter } from "@/components/molecules/search-and-filter";
import type { HomePageProps } from "@/app/page";
import { SOURCES_VALUE_LABEL_MAP } from "@/constants";
import { SourceTitle } from "@/components/atoms/source-title";

type NewsSourceProps = {
  searchParams: HomePageProps["searchParams"];
};

export function NewsSource({ searchParams }: NewsSourceProps) {
  const { q: query, "date-range": dateRange, source = "all" } = searchParams;

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

        {source != null && source !== "all" && (
          <p className="mt-10 text-center text-xl">
            Source:{" "}
            <span className="text-red-700">
              {source === "misc"
                ? "various sources"
                : SOURCES_VALUE_LABEL_MAP[source]}
            </span>
          </p>
        )}
      </div>

      {/* The Guardian */}
      {(source == "all" || source === "the-guardian") && (
        <>
          <SourceTitle sourceValue="the-guardian" />

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
      {(source == "all" || source === "nyt") && (
        <>
          <SourceTitle sourceValue="nyt" />

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
      {(source == "all" || source === "misc") && (
        <>
          <SourceTitle sourceValue="misc">
            {source ? "Miscellaneous" : "Other sources"}
          </SourceTitle>

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
