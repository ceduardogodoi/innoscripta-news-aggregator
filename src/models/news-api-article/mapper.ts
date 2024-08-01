import { Article } from "@/requests/fetchAggregatedNews";
import { NewsApiArticle } from ".";

export class NewsApiArticleMapper {
  static toAggregatedNews(articles: NewsApiArticle[]): Article[] {
    return articles.map((article) => {
      return {
        id: article.url,
        title: article.title,
        description: article.description,
      };
    });
  }
}
