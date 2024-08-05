import dayjs from "dayjs";
import {
  DateRangeValue,
  FALLBACK_SEARCH,
  PAST_MONTH,
  PAST_WEEK,
  TODAY,
  YESTERDAY,
} from "@/constants";
import {
  theGuardianSchema,
  type TheGuardianResponse,
} from "@/models/the-guardian-article";

type TheGuardianFilters = {
  page?: number;
  q?: string;
  pageSize?: number;
  dateRange?: DateRangeValue;
};

export async function fetchTheGuardianArticles({
  page = 1,
  q = FALLBACK_SEARCH,
  pageSize = 3,
  dateRange = "any-time",
}: TheGuardianFilters): Promise<TheGuardianResponse> {
  const url = new URL("/search", "https://content.guardianapis.com");
  url.searchParams.append("q", q);
  url.searchParams.append("page-size", String(pageSize));
  url.searchParams.append("currentPage", String(page));
  url.searchParams.append("api-key", process.env.THE_GUARDIAN_API_KEY);
  url.searchParams.append("show-fields", "body,thumbnail,publication");

  switch (dateRange) {
    case "yesterday":
      url.searchParams.append("from-date", YESTERDAY);
      url.searchParams.append("to-date", YESTERDAY);
      break;
    case "past-week":
      url.searchParams.append("from-date", PAST_WEEK);
      url.searchParams.append("to-date", TODAY);
      break;
    case "past-month":
      url.searchParams.append("from-date", PAST_MONTH);
      url.searchParams.append("to-date", TODAY);
      break;
    case "any-time":
    default:
      url.searchParams.delete("from-date");
      url.searchParams.delete("to-date");
  }

  const response = await fetch(url);
  const data = await response.json();
  return theGuardianSchema.parse(data);
}
