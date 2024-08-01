import { z } from "zod";

type NewsApiArticle = {
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

async function fetchNewsApiArticles(q: string, page: number): Promise<NewsApiResponse> {
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
  return newsApiResponseSchema.parse(data);
}

export async function ArticleRoot() {
  const response = await fetchNewsApiArticles("bitcoin", 1);

  return (
    <ul>
      {response.articles.map((article, index) => (
        <li key={index} style={{ border: "1px solid red" }}>
          <strong>{article.title}</strong>
          <p>{article.description}</p>
        </li>
      ))}
    </ul>
  );
}
