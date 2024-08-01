import { z } from "zod";
import type { NewsApiArticle } from "@/models/news-api-article";

type NewsApiResponse = {
  status: string;
  totalResults: number;
  articles: Array<NewsApiArticle>;
};

const newsApiResponseSchema = z.object({
  status: z.string(),
  totalResults: z.number(),
  articles: z.array(z.custom<NewsApiArticle>()),
});

export async function fetchNewsApiArticles(
  q: string,
  page: number
): Promise<NewsApiResponse["articles"]> {
  const url = new URL("/v2/everything", "https://newsapi.org");
  url.searchParams.append("q", q);
  url.searchParams.append("pageSize", "10");
  url.searchParams.append("page", String(page));

  const response = await fetch(url, {
    headers: {
      "X-Api-Key": process.env.NEWS_API_KEY,
    },
  });
  const data = await response.json();
  const parsed = newsApiResponseSchema.parse(data);
  return parsed.articles;
}
