import dayjs from "dayjs";

export const FALLBACK_SEARCH = "europe";

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
] as const;

export type DateRangeValue = (typeof DATE_RANGES)[number]["value"];

export const PAST_MONTH = dayjs().subtract(1, "month").format("YYYY-MM-DD");
export const PAST_WEEK = dayjs().subtract(1, "week").format("YYYY-MM-DD");

export const YESTERDAY = dayjs().subtract(1, "day").format("YYYY-MM-DD");
export const TODAY = dayjs().format("YYYY-MM-DD");
