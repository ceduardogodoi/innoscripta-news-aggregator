export async function ArticleRoot() {
  const response = await fetch(
    "https://newsapi.org/v2/everything?q=bitcoin&apiKey=c50681bc33e7473b8d0715dc49c055c7"
  );
  const data = await response.json();
  const articles = data.articles.splice(0, 2);
  // console.log(articles);

  return (
    <ul>
      {articles.map((article, index) => (
        <li key={index} style={{ border: "1px solid red" }}>
          <strong>{article.title}</strong>
          <p>
            {article.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
