import {
  type DateRangeValue,
  FALLBACK_SEARCH,
  PAGE_SIZE,
  PAST_MONTH_NYT,
  PAST_WEEK_NYT,
  TODAY_NYT,
  YESTERDAY_NYT,
} from "@/constants";
import {
  type TheNewYorkTimesArticleResponse,
  theNewYorkTimesSchema,
} from "@/models/the-new-york-times-article";

type NewYorkTimesFilters = {
  q?: string;
  pageSize?: number;
  dateRange?: DateRangeValue;
};

export async function fetchTheNewYorkTimesArticles({
  q = FALLBACK_SEARCH,
  pageSize = PAGE_SIZE,
  dateRange = "any-time",
}: NewYorkTimesFilters): Promise<TheNewYorkTimesArticleResponse> {
  const url = new URL(
    "/svc/search/v2/articlesearch.json",
    "https://api.nytimes.com",
  );
  url.searchParams.append("q", q || FALLBACK_SEARCH);
  url.searchParams.append("api-key", process.env.NYT_API_KEY);

  switch (dateRange) {
    case "yesterday":
      url.searchParams.append("from-date", YESTERDAY_NYT);
      url.searchParams.append("to-date", YESTERDAY_NYT);
      break;
    case "past-week":
      url.searchParams.append("from-date", PAST_WEEK_NYT);
      url.searchParams.append("to-date", TODAY_NYT);
      break;
    case "past-month":
      url.searchParams.append("from-date", PAST_MONTH_NYT);
      url.searchParams.append("to-date", TODAY_NYT);
      break;
    case "any-time":
    default:
      url.searchParams.delete("from-date");
      url.searchParams.delete("to-date");
  }

  const response = await fetch(url);
  const data = await response.json();

  const result = theNewYorkTimesSchema.parse(data);
  result.response.docs = result.response.docs.filter(
    (_, index) => index < pageSize,
  );
  return result;
}
