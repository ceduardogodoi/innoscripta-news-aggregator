import { ArticleCard } from "@/components/organisms/article/article-card";
import { Skeleton } from "@/components/ui/skeleton";
import { ArticleHeader } from "@/components/organisms/article/article-header";
import { ArticleContent } from "@/components/organisms/article/article-content";
import { ArticleBody } from "./article-body";
import { ArticleFooter } from "./article-footer";

export function ArticleSkeleton() {
  return (
    <ArticleCard>
      <ArticleHeader>
        <Skeleton className="size-full rounded-b-none" />
      </ArticleHeader>

      <ArticleContent>
        <Skeleton className="h-2 w-full" />
        <Skeleton className="mt-0.5 h-2 w-11/12" />

        <ArticleBody>
          <Skeleton className="h-2 w-full" />
          <Skeleton className="mt-0.5 h-2 w-full" />
          <Skeleton className="mt-0.5 h-2 w-full" />
          <Skeleton className="mt-0.5 h-2 w-11/12" />
          <Skeleton className="mt-0.5 h-2 w-10/12" />
        </ArticleBody>
      </ArticleContent>

      <ArticleFooter>
        <Skeleton className="h-2 w-1/3" />
        <Skeleton className="h-2 w-1/3" />
      </ArticleFooter>
    </ArticleCard>
  );
}
