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
import { fetchTheGuardianArticles } from "@/requests/fetch-the-guardian-articles";
import type { HomePageProps } from "@/app/page";

type TheGuardianSourceProps = {
  searchParams: HomePageProps["searchParams"];
};

export async function TheGuardianSource({
  searchParams,
}: TheGuardianSourceProps) {
  const { q: query, "date-range": dateRange, source } = searchParams;
  const data = await fetchTheGuardianArticles({ q: query, dateRange, source });

  return (
    <ArticleList>
      {data.response.results.map((article) => {
        const publishedAt = new Date(
          article.webPublicationDate,
        ).toLocaleDateString();

        return (
          <ArticleCard key={article.id} href={article.webUrl}>
            <ArticleHeader>
              <ArticleImage
                src={article.fields.thumbnail}
                alt={`Article: ${article.webTitle}`}
              />
            </ArticleHeader>

            <ArticleContent>
              <ArticleTitle>{article.webTitle}</ArticleTitle>

              <ArticleBody>{article.fields.body}</ArticleBody>
            </ArticleContent>

            <ArticleFooter>
              <ArticleDate dateTime={article.webPublicationDate}>
                {publishedAt}
              </ArticleDate>
              <ArticleAuthor>{article.fields.publication}</ArticleAuthor>
            </ArticleFooter>
          </ArticleCard>
        );
      })}
    </ArticleList>
  );
}
