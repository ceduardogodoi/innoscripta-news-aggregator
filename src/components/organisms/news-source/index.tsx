import { NewsApiSource } from "@/components/organisms/news-source/news-api-source";
import { TheGuardianSource } from "@/components/organisms/news-source/the-guardian-source";
import { NytSource } from "@/components/organisms/news-source/nyt-source";
import { SearchAndFilter } from "@/components/molecules/search-and-filter";
import type { HomePageProps } from "@/app/page";
import { SOURCES_VALUE_LABEL_MAP } from "@/constants";
import { Source } from "@/components/molecules/source";

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
      <Source sourceValue="the-guardian" source={source}>
        <TheGuardianSource searchParams={searchParams} />
      </Source>

      {/* The New York Times */}
      <Source sourceValue="nyt" source={source}>
        <NytSource searchParams={searchParams} />
      </Source>

      {/* News API */}
      <Source sourceValue="misc" source={source}>
        <NewsApiSource searchParams={searchParams} />
      </Source>
    </div>
  );
}
