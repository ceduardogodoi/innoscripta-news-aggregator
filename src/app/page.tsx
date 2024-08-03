import { ArticleAuthor } from "@/components/atoms/article/article-author";
import { ArticleDate } from "@/components/atoms/article/article-date";
import { ArticleImage } from "@/components/atoms/article/article-image";
import { ArticleTitle } from "@/components/atoms/article/article-title";
import { ArticleBody } from "@/components/organisms/article/article-body";
import { ArticleCard } from "@/components/organisms/article/article-card";
import { ArticleContent } from "@/components/organisms/article/article-content";
import { ArticleFooter } from "@/components/organisms/article/article-footer";
import { ArticleHeader } from "@/components/organisms/article/article-header";
import { ArticleList } from "@/components/organisms/article/article-list";
import { ArticleSkeleton } from "@/components/organisms/article/article-skeleton";

export default function HomePage() {
  return (
    <>
      <h1>Homepage</h1>

      <ArticleList>
        <ArticleSkeleton />

        <ArticleCard href="https://google.com">
          <ArticleHeader>
            <ArticleImage
              src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
              alt="Dogs"
            />
          </ArticleHeader>

          <ArticleContent>
            <ArticleTitle>
              John Lewis to make final journey across Edmund Pettus Bridge in
              procession
            </ArticleTitle>

            <ArticleBody>
              The body of the late US Rep. John Lewis on Sunday will make the
              final journey across the famous bridge in Selma.
            </ArticleBody>
          </ArticleContent>

          <ArticleFooter>
            <ArticleDate dateTime="2024-08-02T15:19:00.000">
              2 hours ago
            </ArticleDate>
            <ArticleAuthor>By Lucy Hiddleston</ArticleAuthor>
          </ArticleFooter>
        </ArticleCard>
      </ArticleList>
    </>
  );
}
