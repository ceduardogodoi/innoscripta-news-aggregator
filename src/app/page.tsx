import { NewsSource } from "@/components/organisms/news-source";
import {
  type DateRangeValue,
  ONE_HOUR_IN_SECONDS,
  SourceValue,
} from "@/constants";

export type HomePageProps = {
  searchParams: {
    q?: string;
    "date-range"?: DateRangeValue;
    source?: SourceValue;
  };
};

// time-based cache revalidation
export const revalidate = ONE_HOUR_IN_SECONDS;

export default function HomePage(props: HomePageProps) {
  return <NewsSource searchParams={props.searchParams} />;
}
