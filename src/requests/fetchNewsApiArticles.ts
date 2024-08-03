import {
  newsApiResponseSchema,
  type NewsApiResponse,
} from "@/models/news-api-article";

export async function fetchNewsApiArticles(
  q: string,
  page: number,
  pageSize: number,
): Promise<NewsApiResponse> {
  const url = new URL("/v2/everything", "https://newsapi.org");
  url.searchParams.append("q", q);
  url.searchParams.append("pageSize", String(pageSize) ?? "3");
  url.searchParams.append("page", String(page));

  const response = await fetch(url, {
    headers: {
      "X-Api-Key": process.env.NEWS_API_KEY,
    },
  });
  const data = await response.json();
  return newsApiResponseSchema.parse(data);
}
