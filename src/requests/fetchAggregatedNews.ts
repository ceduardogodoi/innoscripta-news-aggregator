import { NewsApiArticleMapper } from "@/models/news-api-article/mapper";
import { z } from "zod";

const articleSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
});

const articlesSchema = z.array(articleSchema);

export type Article = z.infer<typeof articleSchema>;

const url = new URL("/api/news", process.env.BASE_URL);

export async function fetchAggregatedNews(): Promise<Article[]> {
  const response = await fetch(url);
  const data = await response.json();
  const articles = NewsApiArticleMapper.toAggregatedNews(data);

  return articlesSchema.parse(articles);
}
