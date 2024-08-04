import {
  TheNewYorkTimesArticleResponse,
  theNewYorkTimesSchema,
} from "@/models/the-new-york-times-article";

export async function fetchTheNewYorkTimesArticles(
  q: string,
): Promise<TheNewYorkTimesArticleResponse> {
  const url = new URL(
    "/svc/search/v2/articlesearch.json",
    "https://api.nytimes.com",
  );
  url.searchParams.append("q", q);
  url.searchParams.append("api-key", process.env.NYT_API_KEY);

  const response = await fetch(url);
  const data = await response.json();

  let result = theNewYorkTimesSchema.parse(data);
  result.response.docs = result.response.docs.filter((_, index) => index < 3);
  return result;
}
