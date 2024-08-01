import { fetchNewsApiArticles } from "@/requests/fetchNewsApiArticles";

export async function GET(): Promise<Response> {
  const newsApiResponse = await fetchNewsApiArticles("bitcoin", 1);

  return Response.json(newsApiResponse);
}
