import { FALLBACK_SEARCH } from "@/constants";
import {
  type TheNewYorkTimesArticleResponse,
  theNewYorkTimesSchema,
} from "@/models/the-new-york-times-article";

export async function fetchTheNewYorkTimesArticles(
  q?: string,
  pageSize = 3,
): Promise<TheNewYorkTimesArticleResponse> {
  const url = new URL(
    "/svc/search/v2/articlesearch.json",
    "https://api.nytimes.com",
  );
  url.searchParams.append("q", q || FALLBACK_SEARCH);
  url.searchParams.append("api-key", process.env.NYT_API_KEY);

  const response = await fetch(url);
  const data = await response.json();

  const result = theNewYorkTimesSchema.parse(data);
  result.response.docs = result.response.docs.filter(
    (_, index) => index < pageSize,
  );
  return result;
}
