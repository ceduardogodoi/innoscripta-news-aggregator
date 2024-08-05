import {
  theGuardianSchema,
  type TheGuardianResponse,
} from "@/models/the-guardian-article";

export async function fetchTheGuardianArticles(
  q: string,
  page: number,
  pageSize = 3,
): Promise<TheGuardianResponse> {
  const url = new URL("/search", "https://content.guardianapis.com");
  url.searchParams.append("q", q);
  url.searchParams.append("page-size", String(pageSize));
  url.searchParams.append("currentPage", String(page));
  url.searchParams.append("api-key", process.env.THE_GUARDIAN_API_KEY);
  url.searchParams.append("show-fields", "body,thumbnail,publication");

  const response = await fetch(url);
  const data = await response.json();
  return theGuardianSchema.parse(data);
}
