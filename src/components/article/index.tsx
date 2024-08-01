import { fetchNewsApiArticles } from "@/requests/fetchNewsApiArticles";
import { fetchTheGuardianArticles } from "@/requests/fetchTheGuardianArticles";

export async function ArticleRoot() {
  const newsApiArticles = await fetchNewsApiArticles("gold", 1);
  const theGuardianArticles = await fetchTheGuardianArticles("gold", 1);

  return (
    <>
      <h2>News API</h2>
      <ul>
        {newsApiArticles.articles.map((article) => (
          <li key={article.url}>
            <strong>{article.title}</strong>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>

      <h2>The Guardian</h2>
      <ul>
        {theGuardianArticles.response.results.map((article) => (
          <li key={article.id}>
            <strong>{article.webTitle}</strong>
            <p>{article.fields.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
