import { ArticleList } from "@/components/organisms/article/article-list";
import { ArticleCard } from "@/components/organisms/article/article-card";
import { ArticleAuthor } from "@/components/atoms/article/article-author";
import { ArticleDate } from "@/components/atoms/article/article-date";
import { ArticleImage } from "@/components/atoms/article/article-image";
import { ArticleTitle } from "@/components/atoms/article/article-title";
import { ArticleBody } from "@/components/organisms/article/article-body";
import { ArticleContent } from "@/components/organisms/article/article-content";
import { ArticleFooter } from "@/components/organisms/article/article-footer";
import { ArticleHeader } from "@/components/organisms/article/article-header";
import { fetchNewsApiArticles } from "@/requests/fetch-news-api-articles";

export async function NewsApiSource() {
  const response = await fetchNewsApiArticles("inflation", 1, 3);

  return (
    <ArticleList>
      {response.articles.map((article) => {
        const publishedAt = new Date(article.publishedAt).toLocaleDateString();

        return (
          <ArticleCard key={article.url} href={article.url}>
            <ArticleHeader>
              <ArticleImage
                src={article.urlToImage}
                alt={`Article: ${article.title}`}
              />
            </ArticleHeader>

            <ArticleContent>
              <ArticleTitle>{article.title}</ArticleTitle>

              <ArticleBody>{article.content}</ArticleBody>
            </ArticleContent>

            <ArticleFooter>
              <ArticleDate dateTime={article.publishedAt}>
                {publishedAt}
              </ArticleDate>
              <ArticleAuthor>{article.source.name}</ArticleAuthor>
            </ArticleFooter>
          </ArticleCard>
        );
      })}
    </ArticleList>
  );
}
