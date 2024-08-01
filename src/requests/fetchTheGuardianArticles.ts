import { z } from "zod";
import type { NewsApiArticle } from "@/models/news-api-article/news-api-article";

type TheGuardianResponse = {
  status: string;
  totalResults: number;
  articles: Array<NewsApiArticle>;
};

const theGuardianSchema = z.object({
  status: z.string(),
  totalResults: z.number(),
  articles: z.array(z.custom<NewsApiArticle>()),
});

export async function fetchTheGuardianArticles(
  q: string,
  page: number
): Promise<TheGuardianResponse> {
  const url = new URL("/search", "https://content.guardianapis.com");
  url.searchParams.append("q", q);
  url.searchParams.append("pageSize", "10");
  url.searchParams.append("page", String(page));

  const response = await fetch(url, {
    headers: {
      "X-Api-Key": process.env.THE_GUARDIAN_API_KEY,
    },
  });
  const data = await response.json();
  return theGuardianSchema.parse(data);
}

