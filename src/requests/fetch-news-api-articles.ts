import {
  type DateRangeValue,
  FALLBACK_SEARCH,
  PAGE_SIZE,
  PAST_MONTH,
  PAST_WEEK,
  SINGLE_SOURCE_PAGE_SIZE,
  type SourceValue,
  TODAY,
  YESTERDAY,
} from "@/constants";
import {
  type NewsApiArticle,
  newsApiResponseSchema,
  type NewsApiResponse,
} from "@/models/news-api-article";

type NewsApiFilters = {
  page?: number;
  q?: string;
  dateRange?: DateRangeValue;
  source?: SourceValue;
};

export async function fetchNewsApiArticles({
  page = 1,
  q = FALLBACK_SEARCH,
  dateRange = "any-time",
  source,
}: NewsApiFilters): Promise<NewsApiResponse> {
  const pageSize = source === "misc" ? SINGLE_SOURCE_PAGE_SIZE : PAGE_SIZE;

  const url = new URL("/v2/everything", "https://newsapi.org");
  url.searchParams.append("q", q || FALLBACK_SEARCH);
  url.searchParams.append("pageSize", String(pageSize));
  url.searchParams.append("page", String(page));

  switch (dateRange) {
    case "yesterday":
      url.searchParams.append("from", YESTERDAY);
      url.searchParams.append("to", YESTERDAY);
      break;
    case "past-week":
      url.searchParams.append("from", PAST_WEEK);
      url.searchParams.append("to", TODAY);
      break;
    case "past-month":
    // News API required a paid plan for articles
    // too far in the past
    case "past-year":
      url.searchParams.append("from", PAST_MONTH);
      url.searchParams.append("to", TODAY);
      break;
    case "any-time":
    default:
      url.searchParams.delete("from");
      url.searchParams.delete("to");
  }

  const response = await fetch(url, {
    headers: {
      "X-Api-Key": process.env.NEWS_API_KEY,
    },
  });
  const data = await response.json();
  const result = newsApiResponseSchema.parse(data);

  const articles: NewsApiArticle[] = [];
  for (let i = 0; i < result.articles.length; i++) {
    if (articles.length > pageSize) break;

    if (result.articles[i].urlToImage != null) {
      articles.push(result.articles[i]);
    }
  }

  result.articles = articles;

  return result;
}
