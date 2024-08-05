import {
  NewsApiArticle,
  newsApiResponseSchema,
  type NewsApiResponse,
} from "@/models/news-api-article";

export async function fetchNewsApiArticles(
  q: string,
  page: number,
  pageSize = 3,
): Promise<NewsApiResponse> {
  const url = new URL("/v2/everything", "https://newsapi.org");
  url.searchParams.append("q", q);
  url.searchParams.append("pageSize", String(pageSize));
  url.searchParams.append("page", String(page));

  const response = await fetch(url, {
    headers: {
      "X-Api-Key": process.env.NEWS_API_KEY,
    },
  });
  const data = await response.json();
  const result = newsApiResponseSchema.parse(data);
  result.articles[0].url;

  const articles: NewsApiArticle[] = [];
  for (let i = 0; i < result.articles.length; i++) {
    if (articles.length > 2) break;

    if (result.articles[i].urlToImage != null) {
      articles.push(result.articles[i]);
    }
  }

  result.articles = articles;

  return result;
}
