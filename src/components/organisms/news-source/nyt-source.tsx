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
import { fetchTheNewYorkTimesArticles } from "@/requests/fetch-the-new-york-articles";

const baseUrl = `https://www.nytimes.com/`;

export async function NytSouce() {
  const response = await fetchTheNewYorkTimesArticles("inflation");

  return (
    <ArticleList>
      {response.response.docs.map((article) => {
        const publishedAt = new Date(article.pub_date).toLocaleDateString();

        return (
          <ArticleCard key={article._id} href={article.web_url}>
            <ArticleHeader>
              <ArticleImage
                src={`${baseUrl}${article.multimedia[0].url}`}
                alt={`Article: ${article.headline.main}`}
              />
            </ArticleHeader>

            <ArticleContent>
              <ArticleTitle>{article.headline.main}</ArticleTitle>

              <ArticleBody>{article.snippet}</ArticleBody>
            </ArticleContent>

            <ArticleFooter>
              <ArticleDate dateTime={article.pub_date}>
                {publishedAt}
              </ArticleDate>
              <ArticleAuthor>{article.source}</ArticleAuthor>
            </ArticleFooter>
          </ArticleCard>
        );
      })}
    </ArticleList>
  );
}
