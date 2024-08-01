import { z } from "zod";

export type NewsApiArticle = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type NewsApiResponse = {
  status: string;
  totalResults: number;
  articles: Array<NewsApiArticle>;
};

export const newsApiResponseSchema = z.custom<NewsApiResponse>();
