import { z } from "zod";

export type NewsApiArticle = {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
};

export type NewsApiResponse = {
  status: string;
  totalResults: number;
  articles: Array<NewsApiArticle>;
};

export const newsApiResponseSchema = z.custom<NewsApiResponse>();
