import dayjs from "dayjs";

// 1 hour | 3600 sec = 60 sec * 60 min
export const ONE_HOUR_IN_SECONDS = 60 * 60;

export const FALLBACK_SEARCH = "europe";

// Sources
export const SOURCES = [
  {
    label: "Misc",
    value: "misc",
  },
  {
    label: "The Guardian",
    value: "the-guardian",
  },
  {
    label: "The New York Times",
    value: "nyt",
  },
] as const;

// Date ranges
export const DATE_RANGES = [
  {
    value: "any-time",
    label: "Any time",
  },
  {
    value: "yesterday",
    label: "Yesterday",
  },
  {
    value: "past-week",
    label: "Past week",
  },
  {
    value: "past-month",
    label: "Past month",
  },
  {
    value: "past-year",
    label: "Past year",
  },
] as const;

export const PAGE_SIZE = 3;

export type DateRangeValue = (typeof DATE_RANGES)[number]["value"];

// YYYY-MM-DD
export const PAST_YEAR = dayjs().subtract(1, "year").format("YYYY-MM-DD");
export const PAST_MONTH = dayjs().subtract(1, "month").format("YYYY-MM-DD");
export const PAST_WEEK = dayjs().subtract(1, "week").format("YYYY-MM-DD");

export const YESTERDAY = dayjs().subtract(1, "day").format("YYYY-MM-DD");
export const TODAY = dayjs().format("YYYY-MM-DD");

// YYYYMMDD
export const [
  PAST_YEAR_NYT,
  PAST_MONTH_NYT,
  PAST_WEEK_NYT,
  YESTERDAY_NYT,
  TODAY_NYT,
] = [PAST_YEAR, PAST_MONTH, PAST_WEEK, YESTERDAY, TODAY].map((strDate) =>
  strDate.replaceAll("-", ""),
);
