import { PropsWithChildren, Suspense } from "react";
import { HomePageProps } from "@/app/page";
import { SourceTitle } from "@/components/atoms/source-title";
import { ArticleList } from "@/components/organisms/article/article-list";
import { ArticleSkeleton } from "@/components/organisms/article/article-skeleton";
import { NytSource } from "@/components/organisms/news-source/nyt-source";
import { SourceValue } from "@/constants";

const skeletons = Array.from({ length: 3 })
  .fill(null)
  .map((_, index) => index);

type SourceProps = PropsWithChildren<{
  source: HomePageProps["searchParams"]["source"];
  sourceValue: SourceValue;
}>;

export function Source({
  source,
  sourceValue,
  children,
}: Readonly<SourceProps>) {
  return source === "all" || source === sourceValue ? (
    <>
      <SourceTitle sourceValue={sourceValue} />

      <Suspense
        fallback={
          <ArticleList>
            {skeletons.map((index) => (
              <ArticleSkeleton key={index} />
            ))}
          </ArticleList>
        }
      >
        {children}
      </Suspense>
    </>
  ) : null;
}
