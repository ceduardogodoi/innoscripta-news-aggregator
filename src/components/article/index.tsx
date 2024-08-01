import { fetchAggregatedNews } from "@/requests/fetchAggregatedNews";

export async function ArticleRoot() {
  const articles = await fetchAggregatedNews();

  return (
    <ul>
      {articles.map(article => (
        <li key={article.id}>
          <strong>{article.title}</strong>
          <p>{article.description}</p>
        </li>
      ))}
    </ul>
  );
}
