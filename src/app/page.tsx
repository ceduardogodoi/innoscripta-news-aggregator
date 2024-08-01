import { ArticleRoot } from "@/components/article";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <main>
      <h1>Homepage</h1>

      <Suspense fallback={<span>Loading...</span>}>
        <ArticleRoot />
      </Suspense>
    </main>
  );
}
